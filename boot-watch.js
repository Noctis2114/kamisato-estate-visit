/*
  8 October 2026 (NW4) · the estate's entry bundle never ran.

  index.html modulepreloads the shell's static pieces (the map, the stores, React)
  and one module script runs them. If any one of those files does not arrive,
  the module graph fails as a whole: `main.tsx` never runs, React never mounts
  and `#root` stays an empty navy page forever, with nothing to press.

  This file is a classic, same-origin script (CSP `script-src 'self'` holds),
  loaded `defer` from index.html. When the page has finished loading it asks
  whether `main.tsx` ran (it sets `window.__ayakaBooted` first thing). If not,
  it reloads once on its own (a passing fault: the fresh document asks for every
  file again), and if that reload fails too it puts up a plain panel that says
  so and offers Retry. Styles go through the CSSOM, which the policy allows, so
  the panel needs no stylesheet that might itself be the file that failed.
  Never throws.
*/
;(function () {
  'use strict'
  var KEY = 'ayaka-boot-retry'
  var WINDOW_MS = 60000
  function stampedRecently() {
    try {
      var at = Number(sessionStorage.getItem(KEY) || 0)
      return at > 0 && Date.now() - at < WINDOW_MS
    } catch {
      return true
    }
  }
  function stamp() {
    try {
      sessionStorage.setItem(KEY, String(Date.now()))
      return true
    } catch {
      return false
    }
  }
  function panel() {
    var root = document.getElementById('root')
    if (!root || root.childNodes.length || document.querySelector('[data-ayaka="boot-failed"]')) return
    var lang = (document.documentElement.lang || 'en').slice(0, 2)
    var copy = {
      en: ['The estate could not load', 'A piece of the estate did not arrive. Check the connection and try again.', 'Retry'],
      zh: ['庭园未能载入', '庭园的一部分没有送达。请检查网络后重试。', '重试'],
      ja: ['屋敷を読み込めませんでした', '屋敷の一部が届きませんでした。接続を確かめてもう一度お試しください。', '再試行'],
    }[lang] || null
    if (!copy) copy = ['The estate could not load', 'A piece of the estate did not arrive. Check the connection and try again.', 'Retry']
    var box = document.createElement('div')
    box.setAttribute('role', 'alert')
    box.setAttribute('data-ayaka', 'boot-failed')
    box.className = 'estate-error'
    var s = box.style
    s.position = 'fixed'
    s.left = '50%'
    s.top = '50%'
    s.transform = 'translate(-50%, -50%)'
    s.maxWidth = 'min(26rem, calc(100vw - 32px))'
    s.padding = '20px 22px'
    s.borderRadius = '18px'
    s.background = 'rgba(13, 26, 46, 0.86)'
    s.border = '1px solid rgba(214, 190, 140, 0.35)'
    s.color = '#f3ead8'
    s.fontFamily = 'Lora, Georgia, serif'
    s.textAlign = 'center'
    var title = document.createElement('div')
    title.className = 'estate-error-title'
    title.textContent = copy[0]
    title.style.fontSize = '1.1rem'
    title.style.marginBottom = '8px'
    var body = document.createElement('p')
    body.className = 'estate-error-body'
    body.textContent = copy[1]
    body.style.margin = '0 0 14px'
    body.style.opacity = '0.85'
    var button = document.createElement('button')
    button.type = 'button'
    button.className = 'retry-live'
    button.textContent = copy[2]
    var b = button.style
    b.padding = '8px 18px'
    b.borderRadius = '999px'
    b.border = '1px solid rgba(214, 190, 140, 0.55)'
    b.background = 'rgba(214, 190, 140, 0.16)'
    b.color = 'inherit'
    b.font = 'inherit'
    b.cursor = 'pointer'
    button.addEventListener('click', function () {
      stamp()
      location.reload()
    })
    box.appendChild(title)
    box.appendChild(body)
    box.appendChild(button)
    document.body.appendChild(box)
    try {
      button.focus()
    } catch {}
  }
  function check() {
    if (window.__ayakaBooted) {
      try {
        sessionStorage.removeItem(KEY)
      } catch {}
      return
    }
    if (!stampedRecently() && stamp()) {
      location.reload()
      return
    }
    panel()
  }
  try {
    if (document.readyState === 'complete') setTimeout(check, 0)
    else window.addEventListener('load', function () { setTimeout(check, 0) }, { once: true })
  } catch {}
})()
