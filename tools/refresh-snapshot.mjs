#!/usr/bin/env node
/**
 * Rewrite this published site's snapshot/stocks.json and snapshot/fx.json from
 * the live upstreams, in exactly the shape scripts/capture-snapshot.mjs writes.
 *
 * Why this file is here at all. The estate is published to a static host with no
 * /api of its own, so the market and rate cards on the open site read
 * `./snapshot/*.json` and can be no fresher than the deploy that carried them.
 * A deploy happens when the operator deploys; a market moves every minute. This
 * script is run by .github/workflows/refresh-snapshot.yml on a schedule inside
 * the published repository, so the capture is minutes old instead of days, and
 * the browser needs no change at all: it already refetches that path no-store.
 *
 * What it must never do. It carries no key and needs none — every upstream here
 * is keyless and public, and the only credential in the workflow is the one
 * GitHub mints for the run itself. It never invents a figure: a symbol with no
 * real price is left out, and if nothing real came back the file is not touched,
 * so the site keeps showing the previous real capture with its own honest date
 * rather than a fresh-looking lie. And it writes nothing when the numbers have
 * not changed, so a closed market does not produce a commit an hour.
 *
 *   node tools/refresh-snapshot.mjs            # rewrites ./snapshot/*.json
 *   node tools/refresh-snapshot.mjs --dry-run  # says what it would write
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const SNAP = path.resolve(HERE, '..', 'snapshot')
const DRY = process.argv.includes('--dry-run')
const UA = { 'User-Agent': 'Mozilla/5.0 AyakaEstate/1.0 (+snapshot refresher)' }
const SYMBOLS = ['AAPL', 'NVDA', 'MSFT', 'TSLA']

async function readJson(url) {
  const res = await fetch(url, { headers: UA, cache: 'no-store', signal: AbortSignal.timeout(20_000) })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.json()
}

/**
 * The market state Yahoo reports, or the one its trading periods imply.
 *
 * Kept identical to `marketStateFromYahoo` in server/api/stocks.js: the card
 * prints this word, and a refresher that spelled it differently would make the
 * badge change meaning every fifteen minutes.
 */
function marketStateFromYahoo(meta) {
  if (meta?.marketState) return meta.marketState
  const periods = meta?.currentTradingPeriod
  if (!periods) return ''
  const now = Math.floor(Date.now() / 1000)
  const inRange = (p) => Boolean(p?.start && p?.end && now >= p.start && now < p.end)
  if (inRange(periods.regular)) return 'REGULAR'
  if (inRange(periods.pre)) return 'PRE'
  if (inRange(periods.post)) return 'POST'
  return 'CLOSED'
}

/** The most open state any row is in — the same rule the card's badge uses. */
const STATE_ORDER = ['CLOSED', 'POST', 'PRE', 'REGULAR']

function cardMarketState(rows) {
  let best = ''
  let bestRank = -2
  for (const row of rows) {
    const state = String(row?.marketState ?? '')
    if (!state) continue
    const rank = STATE_ORDER.indexOf(state)
    if (rank > bestRank) {
      bestRank = rank
      best = state
    }
  }
  return best
}

/** One row, or nothing at all — never a price of zero standing in for a price. */
async function row(sym) {
  const payload = await readJson(
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1m&range=1d`,
  )
  const result = payload.chart?.result?.[0]
  const meta = result?.meta
  const closes = (result?.indicators?.quote?.[0]?.close ?? []).filter((n) => typeof n === 'number')
  const quoted = meta?.regularMarketPrice ?? closes.at(-1)
  if (typeof quoted !== 'number' || !Number.isFinite(quoted)) {
    throw new Error(`${sym}: upstream gave no price`)
  }
  const prev = meta?.chartPreviousClose ?? meta?.previousClose ?? quoted
  const chg = prev ? ((quoted - prev) / prev) * 100 : 0
  return {
    sym,
    price: quoted.toFixed(2),
    chg: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
    up: chg >= 0,
    hist: closes.slice(-70),
    marketState: marketStateFromYahoo(meta),
  }
}

function previousWeekdayUtc(from = new Date()) {
  const x = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate()))
  do {
    x.setUTCDate(x.getUTCDate() - 1)
  } while (x.getUTCDay() === 0 || x.getUTCDay() === 6)
  return x.toISOString().slice(0, 10)
}

/**
 * Write `name` only if its figures actually changed.
 *
 * `asOf` is excluded from the comparison on purpose: it moves on every run, so
 * comparing the whole file would make every run a change and every change a
 * commit, and the site's history would fill with hours of identical prices. The
 * stamp is honest either way — an untouched file keeps saying when its numbers
 * were really captured.
 */
function writeIfChanged(name, body) {
  const file = path.join(SNAP, name)
  const next = `${JSON.stringify(body, null, 2)}\n`
  const bare = (text) => {
    try {
      const { asOf, ...rest } = JSON.parse(text)
      void asOf
      return JSON.stringify(rest)
    } catch {
      return null
    }
  }
  let held = null
  try {
    held = fs.readFileSync(file, 'utf8')
  } catch {
    /* first run on a fresh checkout, or the file was never published */
  }
  if (held != null && bare(held) != null && bare(held) === bare(next)) {
    console.log(`${name} unchanged — not rewriting`)
    return false
  }
  if (DRY) {
    console.log(`${name} would be rewritten (${next.length} bytes)`)
    return true
  }
  const tmp = `${file}.tmp`
  try {
    fs.writeFileSync(tmp, next)
    fs.renameSync(tmp, file)
  } finally {
    fs.rmSync(tmp, { force: true })
  }
  console.log(`wrote ${name} (${next.length} bytes)`)
  return true
}

async function refreshStocks(asOf) {
  const settled = await Promise.allSettled(SYMBOLS.map(row))
  for (const one of settled) {
    if (one.status === 'rejected') console.warn(' dropped a symbol:', String(one.reason?.message ?? one.reason))
  }
  const rows = settled.flatMap((one) => (one.status === 'fulfilled' ? [one.value] : []))
  if (!rows.length) {
    console.warn(' no real price came back — leaving snapshot/stocks.json exactly as published')
    return false
  }
  return writeIfChanged('stocks.json', {
    asOf,
    source: 'Yahoo Finance 1-minute bars, refreshed on the published site by tools/refresh-snapshot.mjs',
    symbols: rows,
    marketState: cardMarketState(rows),
  })
}

async function refreshFx(asOf) {
  let latest = null
  try {
    latest = await readJson('https://open.er-api.com/v6/latest/SGD')
  } catch (err) {
    console.warn(' open.er-api failed:', err instanceof Error ? err.message : err)
  }
  if (!latest?.rates) {
    console.warn(' no rate table came back — leaving snapshot/fx.json exactly as published')
    return false
  }
  const previous = await readJson(`https://api.frankfurter.app/${previousWeekdayUtc()}?from=SGD`).catch(
    () => null,
  )
  return writeIfChanged('fx.json', {
    asOf,
    source:
      'open.er-api.com/v6/latest/SGD + api.frankfurter.app previous weekday (refreshed on the published site by tools/refresh-snapshot.mjs)',
    latest,
    previous: previous ?? null,
  })
}

/** Every file the manifest lists, in the order capture-snapshot.mjs has always listed them. */
const SNAPSHOT_FILES = ['fx.json', 'stocks.json', 'geo.json', 'weather.json', 'status.json']

/**
 * Each file's own `asOf`, read back off the file itself.
 *
 * This is `stampsOf` from scripts/capture-snapshot.mjs, **copied rather than
 * imported**: this script is published beside the site and has no repository
 * around it, exactly as the header says of the capture shape it writes. Keep the
 * two in step by hand; the shape is five lines and has not moved in three cycles.
 */
function stampsOf(files) {
  const out = {}
  for (const name of files) {
    try {
      const body = JSON.parse(fs.readFileSync(path.join(SNAP, name), 'utf8'))
      if (typeof body?.asOf === 'string' && body.asOf) out[name] = body.asOf
    } catch {
      /* not there, or not readable JSON — it carries no stamp, so it gets none */
    }
  }
  return out
}

/**
 * Re-date the manifest to match the files now on disk.
 *
 * Without this the published manifest kept the deploy's stamps while the two
 * files this script rewrites carried newer ones — the exact disagreement
 * `scripts/verify-build.mjs` calls a build failure ("dates stocks.json X but the
 * file itself says Y"), so the published tree ended in a state the estate itself
 * refuses to ship. `files` and `note` are the deploy's own and are carried
 * through untouched; only the dates are this script's business.
 */
function refreshManifest() {
  let held = null
  try {
    held = JSON.parse(fs.readFileSync(path.join(SNAP, 'manifest.json'), 'utf8'))
  } catch {
    /* no manifest published beside this script — write the shape the build writes */
  }
  const files = Array.isArray(held?.files) && held.files.length ? held.files : SNAPSHOT_FILES
  const asOfByFile = stampsOf(files)
  const stamps = Object.values(asOfByFile)
  if (!stamps.length) {
    console.warn(' no file beside the manifest carries a stamp — leaving snapshot/manifest.json alone')
    return false
  }
  return writeIfChanged('manifest.json', {
    // The newest of what actually shipped, never this run's clock: a run that
    // rewrote nothing must not re-date the directory.
    asOf: stamps.reduce((a, b) => (a > b ? a : b)),
    files,
    asOfByFile,
    ...(typeof held?.note === 'string' ? { note: held.note } : {}),
  })
}

async function main() {
  if (!fs.existsSync(SNAP)) throw new Error(`no snapshot directory beside this script (${SNAP})`)
  const asOf = new Date().toISOString()
  // Settled, not raced: one upstream having a bad minute must not cost the site
  // the other one's refresh.
  const done = await Promise.allSettled([refreshStocks(asOf), refreshFx(asOf)])
  for (const one of done) {
    if (one.status === 'rejected') console.warn(' refresh failed:', String(one.reason?.message ?? one.reason))
  }
  const refreshed = done.some((one) => one.status === 'fulfilled' && one.value === true)
  // Always, not only when something was rewritten: a manifest that already
  // disagrees with the files beside it stays wrong until someone re-dates it,
  // and `writeIfChanged` is silent when there is nothing to say.
  const redated = refreshManifest()
  const changed = refreshed || redated
  console.log(changed ? 'snapshot refreshed' : 'nothing to commit')
  // Exit 0 either way. A flaky upstream is not a broken site, and a failing
  // scheduled run would only send the operator mail about weather.
}

await main()
