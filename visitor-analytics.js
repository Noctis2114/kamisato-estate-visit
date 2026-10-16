/* Visitor build only. No SDK, autocapture, identity, text, URLs, or replay.
 * Capture API: https://posthog.com/docs/api/capture
 * Also enable PostHog's project-level "Discard IP data" setting: a direct
 * browser request necessarily exposes its network address to the recipient.
 */
(() => {
  'use strict'
  const PREFIX = '/kamisato-estate-visit/'
  const onVisitorSite = () => location.origin === 'https://noctis2114.github.io' && location.pathname.startsWith(PREFIX)
  if (!onVisitorSite()) return
  const config = document.currentScript?.dataset
  const key = config?.projectKey || ''
  const host = config?.apiHost || ''
  if (!/^phc_[A-Za-z0-9]{8,200}$/.test(key) || !['https://us.i.posthog.com', 'https://eu.i.posthog.com'].includes(host)) return
  if (document.getElementById('estate-usage-analytics-control')) return

  const SESSION = 'kamisato-estate-visit:analytics:session'
  const TTL = 30 * 60 * 1000
  // Match the application's cancelled-navigation grace (lib/leaving.ts).
  const LEAVE_GRACE_MS = 5000
  let leavingUntil = 0
  let resumeTimer = null
  const rooms = new Set(['door', 'hall', 'courtyard', 'heron', 'windchime', 'notion', 'tea', 'map', 'bible', 'gallery'])
  const categories = new Set(['work', 'relax', 'play'])
  const games = new Set(['terrarium', 'sakura', 'koi', 'sweeper', 'slide', 'catch', 'tetris', 'sudoku', 'runner', 'typing', 'numbers', 'lantern', 'pagoda', 'mahjong', 'volley', 'solitaire', 'crystal', 'spirit', 'pearl', 'descent', 'minigolf', 'pinball', 'blossoms', 'nonogram', 'sokoban', 'wordsearch', 'reversi', 'fourinarow', 'seeds'])
  const gameMarkers = new Map([...games].map(id => [id === 'terrarium' ? id : `${id}-game`, id]))
  gameMarkers.set('chess-board', 'chess')
  gameMarkers.set('go', 'go')
  const gameSelector = [...gameMarkers.keys()].map(marker => `[data-ayaka="${marker}"]`).join(',')
  const read = (storage, name) => { try { return window[storage].getItem(name) } catch { return null } }
  const write = (storage, name, value) => { try { window[storage].setItem(name, value) } catch { /* Private storage can be unavailable. */ } }
  const removeSession = () => { try { window.sessionStorage.removeItem(SESSION) } catch { /* No storage. */ } }
  const privacySignal = () => navigator.globalPrivacyControl === true || ['1', 'yes'].includes(navigator.doNotTrack) || window.doNotTrack === '1' || navigator.msDoNotTrack === '1'
  const offline = () => navigator.onLine === false || read('sessionStorage', 'ayaka_offline_manual') === 'true' || /(?:^\?|&)offline=1(?:&|$)/.test(location.search)
  const enabled = () => Date.now() >= leavingUntil && !privacySignal() && !offline() && onVisitorSite()
  let session = null
  let storedAt = 0
  let lastRoom = null
  let lastGame = null
  let lastCategory = null
  let gameNode = null
  let timer = null
  let observer = null
  const pending = new Set()
  try {
    const saved = JSON.parse(read('sessionStorage', SESSION) || 'null')
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(saved?.id) && Number.isFinite(saved.lastActivity) && Date.now() >= saved.lastActivity && Date.now() - saved.lastActivity < TTL) session = saved
  } catch { /* Ignore malformed or stale storage. */ }

  function send(event, properties = {}) {
    if (!enabled() || !session || pending.size >= 8) return
    const controller = new AbortController()
    pending.add(controller)
    const timeout = setTimeout(() => controller.abort(), 5000)
    // $ip:null and disabled GeoIP limit enrichment. The project-level discard
    // setting is required; the deprecated SDK ip:false is not an IP guarantee.
    const body = JSON.stringify({ api_key: key, event, distinct_id: session.id, properties: {
      site: 'kamisato-estate-visit', schema_version: 1,
      $session_id: session.id, $process_person_profile: false, $geoip_disable: true, $ip: null, ...properties,
    } })
    try {
      Promise.resolve(fetch(`${host}/i/v0/e/?ip=0`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body,
        credentials: 'omit', referrerPolicy: 'no-referrer', mode: 'cors',
        redirect: 'error', signal: controller.signal,
      })).catch(() => {}).finally(() => { clearTimeout(timeout); pending.delete(controller) })
    } catch { clearTimeout(timeout); pending.delete(controller) }
  }

  function activeSession() {
    if (!enabled()) return false
    const now = Date.now()
    if (!session || now - session.lastActivity >= TTL || now < session.lastActivity) {
      if (!window.crypto?.randomUUID) return false
      session = { id: window.crypto.randomUUID(), lastActivity: now }
      lastRoom = lastGame = lastCategory = null
      write('sessionStorage', SESSION, JSON.stringify(session))
      storedAt = now
      send('estate_visit')
    }
    return true
  }

  function inspect() {
    timer = null
    // Background DOM updates must not manufacture visits after inactivity.
    if (!enabled() || !session || Date.now() - session.lastActivity >= TTL || document.visibilityState === 'hidden') return
    const root = document.querySelector('.estate-root')
    const rawRoom = document.documentElement.getAttribute('data-room') ?? root?.getAttribute('data-room')
    const room = rawRoom == null && root ? (root.classList.contains('at-door') ? 'door' : 'hall') : rawRoom
    if (rooms.has(room) && room !== lastRoom) { lastRoom = room; send('estate_room_viewed', { room }) }
    // One fixed selector per structural change; never enumerate elements or
    // inspect game content. Mutations within the active game are ignored below.
    gameNode = room === 'courtyard' || room === 'tea' ? document.querySelector(gameSelector) : null
    const marker = gameNode?.getAttribute('data-ayaka') || ''
    const game = gameMarkers.get(marker) || null
    if (game && game !== lastGame) send('estate_game_viewed', { game })
    lastGame = game
    const category = room === 'hall' ? document.getElementById('explore-category-panel')?.getAttribute('data-category') : null
    if (categories.has(category)) {
      if (category !== lastCategory) send('estate_home_category_changed', { category })
      lastCategory = category
    }
  }

  function schedule() {
    if (enabled() && timer === null) {
      if (!session) activeSession()
      timer = setTimeout(inspect, 250)
    }
  }

  function stop() {
    if (timer !== null) clearTimeout(timer)
    timer = null
    observer?.disconnect()
    for (const controller of pending) controller.abort()
    pending.clear()
    session = null
    removeSession()
    lastRoom = lastGame = lastCategory = null
  }

  function start() {
    if (privacySignal() || !onVisitorSite()) { stop(); return }
    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-room', 'data-ayaka', 'data-category', 'class'] })
    activeSession()
    inspect()
  }

  function resume() {
    clearTimeout(resumeTimer)
    resumeTimer = null
    if (Date.now() < leavingUntil) {
      resumeTimer = setTimeout(resume, leavingUntil - Date.now())
      return
    }
    leavingUntil = 0
    start()
  }

  function leaving() {
    leavingUntil = Date.now() + LEAVE_GRACE_MS
    if (timer !== null) clearTimeout(timer)
    timer = null
    clearTimeout(resumeTimer)
    resumeTimer = setTimeout(resume, LEAVE_GRACE_MS)
    // Preserve the current session and requests already sent. Only new
    // observations pause; a stayed/restored document inspects its current state.
  }

  function boot() {
    // An empty hidden marker prevents duplicate installation without creating
    // an in-page control. Collection follows browser privacy/offline signals.
    if (document.getElementById('estate-usage-analytics-control')) return
    const marker = document.createElement('div')
    marker.id = 'estate-usage-analytics-control'
    marker.hidden = true
    document.body.append(marker)

    observer = new MutationObserver(records => {
      // Only routing markers and structural changes outside the current game
      // matter. Ignore text-node changes to prevent observer loops.
      for (const record of records) {
        if (record.type === 'attributes') {
          if (record.attributeName === 'class' && !record.target.classList.contains('estate-root')) continue
          if (offline()) { for (const controller of pending) controller.abort() }
          schedule(); break
        }
        if (gameNode?.isConnected && gameNode.contains(record.target)) continue
        if (record.type === 'childList' && [...record.addedNodes, ...record.removedNodes].some(node => node.nodeType === 1)) { schedule(); break }
      }
    })
    const activity = () => {
      const previousId = session?.id
      if (!activeSession()) return
      session.lastActivity = Date.now()
      if (session.lastActivity - storedAt >= 15000) {
        write('sessionStorage', SESSION, JSON.stringify(session))
        storedAt = session.lastActivity
      }
      if (previousId !== session.id) schedule()
    }
    document.addEventListener('pointerdown', activity, { passive: true })
    document.addEventListener('keydown', activity, { passive: true })
    const navigation = () => { activity(); schedule() }
    window.addEventListener('popstate', navigation)
    window.addEventListener('hashchange', navigation)
    window.addEventListener('beforeunload', leaving)
    window.addEventListener('pagehide', leaving)
    window.addEventListener('pageshow', event => {
      if (event.persisted) { leavingUntil = 0; resume() }
    })
    window.addEventListener('offline', () => { for (const controller of pending) controller.abort() })
    window.addEventListener('online', start)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') start()
      else if (session && enabled()) write('sessionStorage', SESSION, JSON.stringify(session))
    })
    start()
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true })
  else boot()
})()
