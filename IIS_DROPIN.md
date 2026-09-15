# IIS static drop-in (wwwroot)

Copy the **built** site onto a stock IIS welcome page. No IIS Manager, URL Rewrite, or app-pool changes.

## 1. Build (machine with Node)

```bash
npm install
npm run build
```

That writes `dist-web/`. Vite already uses `base: './'` so asset URLs stay relative.

## 2. Copy onto the VM

Copy **everything** inside `dist-web/` over `C:\inetpub\wwwroot\` (replace the stock IIS files).

IIS already treats `Default.htm` and `iisstart.htm` as default documents. This build writes both as copies of `index.html`, so the landing loads at `/` with no extra configuration.

`dist-web/` also carries `sw.js` and `manifest.webmanifest` — the service worker that makes the
estate work offline and the install manifest the browser reads. Both must land at the site root
beside `index.html`, or the estate loads but never installs and never caches.

`web.config` (site-wide — every header below is sent for every file IIS serves here, not only the
HTML) sets:

- default documents (`index.html`, `Default.htm`, `iisstart.htm`)
- MIME types for `.woff2`, `.json`, `.mp3`, `.webmanifest`, `.xml` — IIS serves none of the last
  two correctly out of the box, and a `.webmanifest` sent as `text/plain` is an install prompt
  that never appears
- `Content-Security-Policy`: everything from `'self'`, no inline script, `object-src 'none'`, and
  a five-host `connect-src` allowlist — `open.er-api.com`, `api.frankfurter.app`,
  `api.open-meteo.com`, `get.geojs.io`, `ipwho.is`. These are the keyless upstreams the rate,
  weather and location cards call **from the browser** on a static host with no `/api` of its
  own; drop one and that card shows its honest failure state instead of a number.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `X-Frame-Options: SAMEORIGIN`, `Cross-Origin-Opener-Policy: same-origin`,
  `Cross-Origin-Resource-Policy: same-origin`
- `Permissions-Policy` denying camera, microphone, geolocation, payment, USB, serial, Bluetooth,
  HID, MIDI, display capture, idle detection, XR and local fonts — the estate asks for none of them
- a one-year immutable `<clientCache>` under `<location path="assets">` **only**. The hashed
  bundle is safe to pin forever; the same rule at the root would pin `index.html` too and no
  deploy would ever be seen again.

It does **not** add URL Rewrite or change the application pool.

## 3. Voices are local files, not live TTS

Next to `Default.htm`:

| Path | Spoken toggle | Baked Neural (mp3 only) |
| --- | --- | --- |
| `voice/*.mp3` | 日本語 | `ja-JP-NanamiNeural` |
| `voice/en/*.mp3` | English | `en-US-AriaNeural` |
| `voice/zh/*.mp3` | 中文 | `zh-CN-XiaoxiaoNeural` |

The page plays them with `new Audio('./voice/…')`. Opening the site later does **not** call edge-tts, Azure Cognitive Speech, or any other Neural API. Timbre is whatever is in those files.

Do **not** run `python3 scripts/ayaka-voice.py` as part of this drop-in — regenerating would change the voice.

If a clip file is missing, the line is silent. It will not fall back to the browser’s `speechSynthesis` (that would sound like someone else).

## 4. No Node on the IIS VM

The UI is static HTML / JS / CSS / mp3 / woff2 / jpg. Cards read `snapshot/*.json` when `/api` is missing, or when you open `Default.htm?offline=1`. Labels read **Cached · YYYY-MM-DD** from each snapshot’s `asOf`. The tea-room translator needs Node `/api/translate` (Vite preview only) and shows unavailable on a pure static host.

Gold filigree SVGs, chess, Go, and matcha are inside `dist-web/assets/`. Fonts are `fonts.css` + `fonts/*.woff2` (no Google Fonts).

## 5. Preview on this repo (port 43147)

```bash
npm run dev          # same app, live /api
npm run preview      # serves dist-web/ on http://127.0.0.1:43147
```

Offline cards: `http://127.0.0.1:43147/?offline=1`
