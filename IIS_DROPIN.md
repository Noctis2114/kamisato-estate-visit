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

`web.config` only:

- default documents (`index.html`, `Default.htm`, `iisstart.htm`)
- MIME types for `.woff2`, `.json`, `.mp3`
- `X-Content-Type-Options: nosniff`
- `Content-Disposition` on the source dump `.txt`

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
