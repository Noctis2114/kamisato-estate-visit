/*
  The gate painting, asked for before the entry bundle has even downloaded.

  The first screen's largest picture is the gate at this hour (the arrival's
  cover and the front door both hang it). Its URL depends on the visitor's clock,
  daylight region, season and church season, so no fixed <link rel=preload> can
  name it; until now it was requested only once ~1.1 MB of script had arrived
  and run. This file is a classic, same-origin script (CSP `script-src 'self'`
  holds, no hash or nonce needed), loaded `async` from index.html, and does one
  thing: add a high-priority image preload for exactly the picture the app will
  hang.

  Every rule below is a hand copy of the app's own, kept in step by
  tests/gate-preload.test.ts (all 24 hours, every month, every region,
  festival boundaries, scenery and overrides). Change a source, change this:
    - scene:  sceneShown()           src/lib/estate-map.ts
              sceneAt / daypartBands  src/lib/daypart.ts
              currentDaylightRegion   src/lib/daypart.ts
    - region: regionFromTimeZone      src/lib/region.ts (ZONES below = the
              entries of ZONE_LATITUDE whose answer differs from AREA_REGION)
    - theme:  resolveEstateSeasons    src/lib/estate-seasons.ts
              readEstateStylePrefs    src/lib/seasonal-art.ts
              getEstateArtTheme / resolveEstateArt  src/lib/seasonal-art.ts
    - rungs:  ROOM rungs of 'gate'    src/lib/art-catalog.ts (artSrcset; the
              arrival's <picture> reads the same; the test compares both)
  Never throws: a failure only means the picture is fetched the old way.
*/
var ayakaGateArt = (function () {
  'use strict'
  var SCENES = ['morning', 'afternoon', 'evening', 'night']
  var TROPICAL = [6.5, 11, 18, 19.5]
  var SUMMER = [5, 11, 18, 21]
  var EQUINOX = [6, 11, 17, 19.5]
  var WINTER = [7, 11, 16, 17.5]
  var FESTIVALS = ['advent', 'christmas', 'epiphany', 'lent', 'holy-week', 'easter', 'pentecost', 'kingdomtide']
  var SEASONS = ['spring', 'summer', 'autumn', 'winter']
  var REGIONS = ['north', 'south', 'tropical']
  var AREA = [['America/Argentina/', 'south'], ['Antarctica/', 'south'], ['Australia/', 'south'], ['Europe/', 'north'], ['Arctic/', 'north'], ['Asia/', 'north'], ['America/', 'north'], ['US/', 'north'], ['Canada/', 'north'], ['Atlantic/', 'north'], ['Africa/', 'tropical'], ['Pacific/', 'tropical'], ['Indian/', 'tropical']]
  var NORTH_WORDS = ['GB', 'GB-Eire', 'Eire', 'Poland', 'Portugal', 'Turkey', 'Iceland', 'W-SU', 'Navajo', 'EST5EDT', 'CST6CDT', 'MST7MDT', 'PST8PDT', 'EST', 'MST', 'CET', 'EET', 'MET', 'WET']
  var ZONES = {
    north: 'Japan ROK PRC ROC Iran Israel Africa/Cairo Egypt Africa/Algiers Africa/Tunis Africa/Tripoli Libya Africa/Casablanca Africa/El_Aaiun Africa/Ceuta Pacific/Midway',
    south: 'America/Sao_Paulo Brazil/East America/Asuncion America/Montevideo America/Santiago Chile/Continental America/Punta_Arenas America/Buenos_Aires America/Cordoba America/Mendoza Africa/Johannesburg Africa/Maseru Africa/Mbabane Africa/Gaborone Africa/Maputo Pacific/Auckland NZ Pacific/Chatham NZ-CHAT Pacific/Norfolk Pacific/Easter Chile/EasterIsland Pacific/Pitcairn Atlantic/South_Georgia Atlantic/Stanley Indian/Kerguelen',
    tropical: 'Asia/Hong_Kong Hongkong Asia/Macau Asia/Macao Asia/Singapore Singapore Asia/Kuala_Lumpur Asia/Kuching Asia/Brunei Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Ujung_Pandang Asia/Jayapura Asia/Dili Asia/Bangkok Asia/Ho_Chi_Minh Asia/Saigon Asia/Phnom_Penh Asia/Vientiane Asia/Yangon Asia/Rangoon Asia/Manila Asia/Kolkata Asia/Calcutta Asia/Colombo Asia/Aden America/Mexico_City Mexico/General America/Cancun America/Merida America/Bahia_Banderas America/Mazatlan America/Guatemala America/Belize America/El_Salvador America/Tegucigalpa America/Managua America/Costa_Rica America/Panama America/Havana Cuba America/Jamaica Jamaica America/Port-au-Prince America/Santo_Domingo America/Puerto_Rico America/Barbados America/Martinique America/Guadeloupe America/Port_of_Spain America/Curacao America/Aruba America/Antigua America/Dominica America/Grenada America/St_Lucia America/St_Vincent America/St_Kitts America/St_Thomas America/Tortola America/Anguilla America/Montserrat America/Cayman America/Grand_Turk America/St_Barthelemy America/Marigot America/Lower_Princes America/Kralendijk America/Bogota America/Caracas America/Guyana America/Paramaribo America/Cayenne America/Guayaquil America/Lima America/La_Paz America/Manaus America/Belem America/Fortaleza America/Recife America/Maceio America/Bahia America/Araguaina America/Cuiaba America/Campo_Grande America/Porto_Velho America/Boa_Vista America/Rio_Branco America/Eirunepe America/Santarem America/Noronha Brazil/West Australia/Darwin Australia/North Australia/Lindeman US/Hawaii Atlantic/Cape_Verde Atlantic/St_Helena',
  }
  var has = function (list, v) { return list.indexOf(v) > -1 }
  var pick = function (v, list, fallback) { return typeof v === 'string' && has(list, v) ? v : fallback }
  var or = function (a, b) { return a === null || a === undefined ? b : a }

  function zoneRegion(zone) {
    if (typeof zone !== 'string') return null
    var id = zone.trim()
    if (!id || id === 'UTC' || id === 'GMT' || id === 'Etc' || id.indexOf('Etc/') === 0) return null
    for (var r = 0; r < REGIONS.length; r++) if (has(ZONES[REGIONS[r]].split(' '), id)) return REGIONS[r]
    for (var i = 0; i < AREA.length; i++) if (id.indexOf(AREA[i][0]) === 0) return AREA[i][1]
    return has(NORTH_WORDS, id) ? 'north' : null
  }
  function bands(region, month) {
    if (region === 'tropical') return TROPICAL
    var m = (((month + (region === 'south' ? 6 : 0)) % 12) + 12) % 12
    if (m >= 4 && m <= 7) return SUMMER
    if (m === 10 || m === 11 || m === 0) return WINTER
    return EQUINOX
  }
  function sceneAt(now, region) {
    var h = now.getHours() + now.getMinutes() / 60
    var b = bands(region, now.getMonth())
    if (h >= b[0] && h < b[1]) return 'morning'
    if (h >= b[1] && h < b[2]) return 'afternoon'
    if (h >= b[2] && h < b[3]) return 'evening'
    return 'night'
  }
  function dayKey(y, m, d) {
    var date = new Date(0)
    date.setUTCFullYear(y, m, d)
    date.setUTCHours(0, 0, 0, 0)
    return date.getTime() / 86400000
  }
  function weekday(day) { return ((day + 4) % 7 + 7) % 7 }
  function easterDay(year) {
    var a = year % 19, b = Math.floor(year / 100), c = year % 100
    var d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25)
    var g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30
    var i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7
    var m = Math.floor((a + 11 * h + 22 * l) / 451)
    var value = h + l - 7 * m + 114
    return dayKey(year, Math.floor(value / 31) - 1, value % 31 + 1)
  }
  function churchSeason(year, day) {
    var christmas = dayKey(year, 11, 25)
    if (day >= christmas || day < dayKey(year, 0, 6)) return 'christmas'
    var advent = christmas - (weekday(christmas) || 7) - 21
    if (day >= advent) return 'advent'
    var easter = easterDay(year)
    if (day < easter - 46) return 'epiphany'
    if (day < easter - 7) return 'lent'
    if (day < easter) return 'holy-week'
    if (day < easter + 49) return 'easter'
    var augustLast = dayKey(year, 7, 31)
    return day < augustLast - weekday(augustLast) ? 'pentecost' : 'kingdomtide'
  }

  /**
   * The picture the gate hangs at `now`.
   * env: { saved: parsed `ayaka_estate_seasons` or null, light: `ayaka_tea_light`,
   *        zone: device time zone, search: location.search }
   * Answers { href } for a single file or { srcset, sizes, href } for rungs.
   */
  return function gateArt(now, env) {
    var q = new URLSearchParams(env.search || '')
    var saved = env.saved && typeof env.saved === 'object' && !Array.isArray(env.saved) ? env.saved : {}
    var savedRegion = pick(saved.region, REGIONS, null)
    // sceneShown: ?scene, ?period, the chosen light, then the clock.
    var scene = q.get('scene')
    if (!has(SCENES, scene)) {
      var period = q.get('period')
      scene = period === 'morning' || period === 'afternoon' || period === 'night' ? period
        : has(SCENES, env.light) ? env.light
        : sceneAt(now, savedRegion || zoneRegion(env.zone) || 'tropical')
    }
    // readEstateStylePrefs + resolveEstateSeasons.
    if (saved.scenery === 'original') {
      var base = './estate/gate-' + scene
      return { href: base + '.webp', srcset: base + '-1280w.webp 1280w, ' + base + '-1920w.webp 1920w, ' + base + '.webp 3840w', sizes: '100vw' }
    }
    var season = pick(or(q.get('style-season'), saved.season), ['auto'].concat(SEASONS), 'auto')
    var regionStyle = pick(or(q.get('style-region'), saved.region), ['auto'].concat(REGIONS), 'auto')
    var festivalStyle = pick(or(q.get('style-festival'), saved.festival), ['auto', 'off'].concat(FESTIVALS), 'auto')
    var region = regionStyle !== 'auto' ? regionStyle : zoneRegion(env.zone) || 'tropical'
    var month = (now.getMonth() + (region === 'south' ? 6 : 0)) % 12
    if (season === 'auto') season = month < 2 || month === 11 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : 'autumn'
    var festival = festivalStyle === 'off' ? 'none'
      : festivalStyle === 'auto' ? churchSeason(now.getFullYear(), dayKey(now.getFullYear(), now.getMonth(), now.getDate()))
      : festivalStyle
    return { href: './estate/seasons/gate-' + (festival !== 'none' ? festival : season) + '-' + scene + '.webp' }
  }
})()

;(function () {
  if (typeof document === 'undefined') return
  try {
    var read = function (key) { try { return localStorage.getItem(key) } catch { return null } }
    var saved = null
    try { saved = JSON.parse(read('ayaka_estate_seasons') || 'null') } catch { saved = null }
    var zone = null
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || null } catch { zone = null }
    var art = ayakaGateArt(new Date(), { saved: saved, light: read('ayaka_tea_light'), zone: zone, search: location.search })
    var link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.type = 'image/webp'
    link.setAttribute('fetchpriority', 'high')
    if (art.srcset) {
      link.setAttribute('imagesrcset', art.srcset)
      link.setAttribute('imagesizes', art.sizes)
    }
    link.href = art.href
    document.head.appendChild(link)
  } catch {
    /* the painting is fetched the old way */
  }
})()
