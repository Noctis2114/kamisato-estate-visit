import{a as e,o as t}from"./estate-assistant-Czgha5KS.js";var n={};t(n,[`greet^Hello. I am {name}, the estate’s helper. Ask me about the rooms, the cards, the live numbers, the library or the Bible — or tell me where to take you.^你好。我是{name}，屋敷的小帮手。可以问我房间、卡片、实时数据、书库或圣经的事，也可以让我带你去某处。^こんにちは。屋敷の案内役、{name}です。部屋やカード、生きている数字、書庫や聖書のことを聞いてください。どこかへ案内もできます。
thanks^Any time.^不客气。^どういたしまして。
bye^Until next time. The door is always open.^下次见。门一直开着。^またいつでも。門はいつも開いています。
who^I am {name}, a small helper who lives in the code of this estate. I only know what is on this page — its rooms, its cards, its live feeds, its books — and I say so when I do not know.^我是{name}，住在这座屋敷代码里的小帮手。我只知道这页上的东西——房间、卡片、实时数据、书——不知道的我会直说。^私は{name}。この屋敷のコードに住む小さな案内役です。知っているのはこのページにあるものだけ——部屋、カード、生きている数字、書物——分からないときは、そう言います。
help^Try: “what time is it in Tokyo”, “USD rate”, “100 USD in JPY”, “NVDA”, “weather”, “uptime”, “open the Bible at John 3:16”, “a verse about courage”, “what did Seneca say about anger”, “go to Markets”, “open the VRAM estimator”, “switch to 日本語”, “what is live”, “keyboard shortcuts”.^试试：「东京几点」「美元汇率」「100 美元换日元」「NVDA」「天气」「运行时间」「打开圣经 约翰福音 3:16」「一句关于勇气的经文」「塞内卡谈愤怒」「去市场」「打开 VRAM 估算器」「切换到中文」「哪些是实时的」「快捷键」。^例：「東京は何時」「ドルのレート」「100ドルは何円」「NVDA」「天気」「稼働時間」「ヨハネ 3:16 を開いて」「勇気についての聖句」「セネカの怒りについての言葉」「市へ行く」「VRAM estimator を開いて」「日本語にして」「どれがライブ」「キーボードショートカット」。
unknown^I do not know that from what is on this page, and I will not guess. I can answer about the rooms, the cards, the live numbers, the library and the Bible, or take you somewhere. Try “help”.^这页上的内容里没有这个答案，我不猜。我能回答房间、卡片、实时数据、书库和圣经的事，或带你去某处。试试「帮助」。^このページにあるものからは分かりません。当てずっぽうは言いません。部屋、カード、生きている数字、書庫、聖書のことなら答えられますし、案内もできます。「ヘルプ」と聞いてみてください。
ai_htm^This file is the single-file drop-in, so it carries no model: I answer from my tables only. The local model needs the web build of the estate.^这是单文件版，不带模型：我只用规则表回答。本地模型需要屋敷的网页版。^これは単一ファイル版で、モデルを持ちません。答えは表からだけです。ローカルモデルには屋敷のウェブ版が必要です。
ai_webgpu^This browser does not offer WebGPU, which the local model needs to run on your graphics chip. A current Chrome, Edge or Safari with WebGPU turned on can run it.^这个浏览器没有提供 WebGPU，本地模型要靠它在显卡上运行。开启了 WebGPU 的新版 Chrome、Edge 或 Safari 可以运行。^このブラウザは WebGPU を提供していません。ローカルモデルはそれでグラフィックチップを使って動きます。WebGPU を有効にした最新の Chrome、Edge、Safari なら動きます。
ai_pack^The model pack is not on this device yet. Open Offline readiness and press “Check now” to see which files are missing; loading the web build online fetches the pack and keeps it.^模型包还不在这台设备上。打开「离线就绪」按「立即检查」看缺哪些文件；联网打开网页版会取回模型包并保留。^モデルパックはまだこの端末にありません。「オフライン準備」を開いて「今すぐ確認」を押せば、足りないファイルがわかります。ウェブ版をオンラインで開くとパックが取得され保持されます。
ai_unsure^I cannot confirm the model pack is on this device: it has not been checked yet. Open Offline readiness and press “Check now”; until then I answer from my tables.^我无法确认模型包在这台设备上：还没检查过。打开「离线就绪」按「立即检查」；在那之前我用规则表回答。^モデルパックがこの端末にあるか確かめられません。まだ確認されていないので。「オフライン準備」で「今すぐ確認」を押してください。それまでは表で答えます。
ai_game^The model is paused while a game is running, so the game keeps its frames. Open questions wait until you leave the game; my tables still answer now.^游戏运行时模型暂停，好让游戏保持流畅。开放式问题等你离开游戏再答；规则表现在照样回答。^ゲーム中はフレームを守るためモデルを止めています。自由な質問はゲームを出てから。表による答えは今でも返せます。
ai_hidden^The model is paused while this tab is hidden. It resumes when you come back to the tab.^标签页隐藏时模型暂停，回到这个标签页就恢复。^このタブが隠れている間はモデルを止めています。タブに戻れば再開します。
ai_ready^The local model is ready: this is the web build, WebGPU is available, the pack is on this device and nothing is pausing it. It runs here, offline, with no upload.^本地模型已就绪：这是网页版，WebGPU 可用，模型包在本机，也没有任何东西让它暂停。它在这里离线运行，不上传任何东西。^ローカルモデルは準備済みです。ウェブ版で、WebGPU が使え、パックはこの端末にあり、止めるものもありません。ここでオフラインに動き、何も送りません。
ai_none^I cannot see the model’s state from here, so I will not call it ready. My tables answer in the meantime.^我在这里看不到模型的状态，所以不会说它已就绪。这期间由规则表回答。^ここからはモデルの状態が見えないので、準備済みとは言いません。その間は表で答えます。
help_head^Here, right now, I can:^此时此地我能：^今ここでできること：
help_nav^take you to any room, wing or card and change settings: language, light, layout, quiet mode ({n} commands)^带你去任何房间、分区或卡片，并改设置：语言、光线、布局、安静模式（{n} 条命令）^部屋・棟・カードへの案内と設定の変更：言語、光、配置、静音モード（{n} のコマンド）
help_facts^answer about the estate, its handbook, the Bible and the library^回答屋敷、手册、圣经和藏书的问题^屋敷、手引き、聖書、蔵書について答える
help_calc^do sums, conversions, dates and look-ups exactly^精确计算、换算、日期和查询^計算、換算、日付、調べものを正確に
help_taught^keep answers you teach me (“remember: …”); {n} kept^记住你教我的答案（「记住：……」）；已记 {n} 条^教わった答えを保つ（「覚えて：…」）；{n} 件
help_deadline^add a deadline to your tasks^往任务里加截止日期^タスクに締め切りを追加
help_model^answer open questions with the local model, on this device^用本机的本地模型回答开放式问题^この端末のローカルモデルで自由な質問に答える
help_nomodel^Open questions use my tables, not the model: {why}^开放式问题用规则表，不用模型：{why}^自由な質問はモデルではなく表で：{why}
help_cannot^I cannot send mail, touch your files or accounts, or write code.^我不能发邮件、碰你的文件或账户，也不写代码。^メールの送信、ファイルやアカウントの操作、コードを書くことはできません。`,`*`,`glossary^{text}^{text}^{text}
fromFacts^a fixed fact written into the estate — true when written, not looked up^写入屋敷的固定事实——写下时为真，非查询所得^屋敷に書かれた固定の事実——書いた時点で正しく、調べたものではない
fromGlossary^the estate’s glossary^屋敷的词表^屋敷の用語集
phraseJa^“{en}” in Japanese is {ja} ({romaji}).^「{en}」的日语是 {ja}（{romaji}）。^「{en}」は日本語で {ja}（{romaji}）。
phraseZh^“{en}” in Chinese is {zh} ({pinyin}).^「{en}」的中文是 {zh}（{pinyin}）。^「{en}」は中国語で {zh}（{pinyin}）。
phraseEn^{zh} / {ja} is “{en}” in English.^{zh} / {ja} 的英文是 “{en}”。^{zh} / {ja} は英語で “{en}”。
fromPhrasebook^the estate’s phrasebook — {n} words, no translator^屋敷的短语集——{n} 个词，非翻译器^屋敷の会話帳——{n} 語、翻訳機ではありません
capital^The capital of {country} is {capital}.^{country}的首都是{capital}。^{country}の首都は{capital}。
fromCapitals^a fixed list in the estate — true when it was written^屋敷内置的固定列表——写下时为真^屋敷に書かれた固定の一覧——書いた時点で正しい`,`calYear^It is {year} — {era} {eraYear} in the Japanese calendar, the year of the {zodiac}.^今年是 {year} 年——日本年号{era}{eraYear}年，{zodiac}年。^今年は {year} 年——{era}{eraYear}年、{zodiac}の年。
calMonth^It is {month}, {year}: day {day} of {days}.^现在是 {year} 年 {month}，本月第 {day} 天，共 {days} 天。^{year} 年 {month}、{day} 日目（全 {days} 日）。
calEra^{year} is {era} {eraYear} in the Japanese era calendar (Reiwa began on 1 May 2019).^{year} 年是日本年号{era}{eraYear}年（令和始于 2019 年 5 月 1 日）。^{year} 年は{era}{eraYear}年（令和は 2019 年 5 月 1 日から）。
calZodiac^{year} is the year of the {zodiac} in the Chinese zodiac. Near the New Year the animal changes a few weeks after 1 January, so a January or early-February birthday may belong to the year before.^{year} 年是{zodiac}年。生肖在农历新年才换，所以一月或二月初出生的人可能属前一年。^{year} 年は{zodiac}の年。干支は旧正月で変わるため、一月や二月初めの生まれは前の年になることがあります。
calLeap^{year} is a leap year: February has 29 days and the year 366.^{year} 年是闰年：二月有 29 天，全年 366 天。^{year} 年はうるう年。二月は 29 日、一年は 366 日。
calNotLeap^{year} is not a leap year: February has 28 days and the year 365. The next leap year is {next}.^{year} 年不是闰年：二月 28 天，全年 365 天。下一个闰年是 {next}。^{year} 年はうるう年ではありません。二月は 28 日、一年は 365 日。次のうるう年は {next}。
calDaysInMonth^{month} {year} has {days} days.^{year} 年{month}有 {days} 天。^{year} 年{month}は {days} 日あります。
calSeason^By the calendar in the northern hemisphere it is {season}. Here in Singapore it is the same season it always is — about 31 °C and a chance of rain.^按北半球的日历，现在是{season}。新加坡永远是同一个季节——约 31 °C，可能下雨。^北半球の暦では{season}。ここシンガポールはいつもの季節——およそ 31 °C、雨の気配。
calDayOfYear^Today is day {n} of {total} in {year}; {left} days remain.^今天是 {year} 年的第 {n} 天，共 {total} 天；还剩 {left} 天。^今日は {year} 年の {n} 日目（全 {total} 日）。残り {left} 日。
calWeek^This is ISO week {week} of {year}.^现在是 {year} 年的第 {week} 周（ISO）。^{year} 年の第 {week} 週（ISO）。
calAge^Someone born in {born} is {age} this year — {age} on their birthday, {before} before it.^{born} 年出生的人今年 {age} 岁——生日过后 {age}，生日前 {before}。^{born} 年生まれなら今年 {age} 歳——誕生日を過ぎれば {age}、その前は {before}。
season_spring^spring^春天^春
season_summer^summer^夏天^夏
season_autumn^autumn^秋天^秋
season_winter^winter^冬天^冬`,`coin^{face}.^{face}。^{face}。
heads^Heads^正面^表
tails^Tails^反面^裏
die^The die shows {n}.^骰子是 {n}。^サイコロは {n}。
randomNumber^{n} (between 1 and {max}).^{n}（1 到 {max} 之间）。^{n}（1 から {max} の間）。
yes^Yes.^是。^はい。
no^No.^否。^いいえ。
rps^I throw {mine}. You said {yours} — {result}.^我出{mine}。你出{yours}——{result}。^私は{mine}。あなたは{yours}——{result}。
rpsNoYours^I throw {mine}. Say “rock”, “paper” or “scissors” with it next time and I will score it.^我出{mine}。下次连着说「石头」「剪刀」或「布」，我来判胜负。^私は{mine}。次は「グー」「チョキ」「パー」を添えて言ってくれれば勝負をつけます。
rock^rock^石头^グー
paper^paper^布^パー
scissors^scissors^剪刀^チョキ
rpsWin^you win^你赢^あなたの勝ち
rpsLose^I win^我赢^私の勝ち
rpsDraw^a draw^平手^あいこ
pickGame^Try {game}.^试试{game}。^{game}はどうでしょう。
fromChance^this device’s random number, nothing else^本设备的随机数，仅此而已^この端末の乱数、それだけ`,`reversed^Backwards: {out}^倒过来：{out}^逆から：{out}
upper^{out}^{out}^{out}
letters^“{text}” has {n} characters ({letters} letters, {spaces} spaces).^「{text}」有 {n} 个字符（{letters} 个字母/字，{spaces} 个空格）。^「{text}」は {n} 文字（文字 {letters}、空白 {spaces}）。
words^“{text}” has {n} words.^「{text}」有 {n} 个词。^「{text}」は {n} 語。
roman^{n} in Roman numerals is {roman}.^{n} 的罗马数字是 {roman}。^{n} はローマ数字で {roman}。
fromRoman^{roman} is {n}.^{roman} 是 {n}。^{roman} は {n}。
romanRange^Roman numerals run from 1 to 3999.^罗马数字只到 3999。^ローマ数字は 1 から 3999 まで。
prime^{n} is prime.^{n} 是质数。^{n} は素数です。
notPrime^{n} is not prime: {n} = {factors}.^{n} 不是质数：{n} = {factors}。^{n} は素数ではありません：{n} = {factors}。
factorial^{n}! = {result}^{n}! = {result}^{n}! = {result}
primeBig^{n} is larger than a million million; factoring it here would freeze the panel, so I will not try. Ask about a number up to 1,000,000,000,000.^{n} 超过一万亿；在这里分解它会让面板卡住，所以我不试。请问 1,000,000,000,000 以内的数。^{n} は一兆を超えます。ここで素因数分解すると画面が固まるので行いません。1,000,000,000,000 までの数をお尋ねください。
factorialBig^{n}! has more digits than I will print exactly; 170! is the largest this device holds as a plain number.^{n}! 的位数太多，我不精确打印；170! 是本设备能以普通数字保存的最大阶乘。^{n}! は桁が多すぎて正確には出せません。170! がこの端末が普通の数として持てる最大です。
fibonacci^The first {n} Fibonacci numbers: {list}^前 {n} 个斐波那契数：{list}^フィボナッチ数の最初の {n} 個：{list}
table^{list}^{list}^{list}
bmi^BMI {bmi} for {kg} kg at {m} m — {band} by the WHO bands (a screening number, not a diagnosis).^{kg} kg、{m} m 的 BMI 是 {bmi}——按 WHO 分级为{band}（筛查数字，不是诊断）。^{kg} kg・{m} m の BMI は {bmi}——WHO 区分では{band}（目安であり、診断ではありません）。
bmi_under^underweight^偏轻^低体重
bmi_normal^in the normal range^正常范围^普通体重
bmi_over^overweight^偏重^過体重
bmi_obese^in the obese range^肥胖范围^肥満
tip^{pct}% of {amount} is {tip}; with the tip, {total}.^{amount} 的 {pct}% 是 {tip}；加上小费共 {total}。^{amount} の {pct}% は {tip}。チップ込みで {total}。
gcd^The greatest common divisor of {a} and {b} is {result}.^{a} 和 {b} 的最大公约数是 {result}。^{a} と {b} の最大公約数は {result}。
lcm^The least common multiple of {a} and {b} is {result}.^{a} 和 {b} 的最小公倍数是 {result}。^{a} と {b} の最小公倍数は {result}。
timer^I cannot set alarms — the page has no way to wake you. The Focus timer card in the Study wing counts a session down on screen; shall I open it?^我设不了闹钟——页面没法叫醒你。学习区的「专注计时」卡能在屏幕上倒数；要打开吗？^アラームは設定できません——ページにはあなたを起こす手段がないので。学びの棟の「集中タイマー」カードは画面で数えます。開きますか？
chipFocus^Open the Focus timer^打开专注计时^集中タイマーを開く`,`bibleCounts^The {translation} here has {books} books, {chapters} chapters and {verses} verses — {old} books in the Old Testament, {new} in the New. Counted from the file the estate ships, not from memory.^这里的{translation}有 {books} 卷、{chapters} 章、{verses} 节——旧约 {old} 卷，新约 {new} 卷。从屋敷自带的文件数出来的，不是背的。^ここの{translation}は {books} 巻、{chapters} 章、{verses} 節——旧約 {old} 巻、新約 {new} 巻。屋敷が載せているファイルから数えました。記憶ではなく。
bibleBooks^The {n} books, in order: {list}.^{n} 卷，按顺序：{list}。^{n} 巻、順に：{list}。
bibleOld^The Old Testament: {n} books, {chapters} chapters, {verses} verses — {list}.^旧约：{n} 卷、{chapters} 章、{verses} 节——{list}。^旧約聖書：{n} 巻、{chapters} 章、{verses} 節——{list}。
bibleNew^The New Testament: {n} books, {chapters} chapters, {verses} verses — {list}.^新约：{n} 卷、{chapters} 章、{verses} 节——{list}。^新約聖書：{n} 巻、{chapters} 章、{verses} 節——{list}。
bibleTestaments^Two testaments: the Old ({old} books, Genesis to Malachi — the Hebrew scriptures: law, history, poetry, prophets) and the New ({new} books, Matthew to Revelation — the four Gospels, Acts, the letters, and Revelation).^两约：旧约（{old} 卷，创世记到玛拉基书——希伯来圣经：律法、历史、诗歌、先知）和新约（{new} 卷，马太福音到启示录——四福音、使徒行传、书信和启示录）。^二つの約：旧約（{old} 巻、創世記からマラキ書——ヘブライ語聖書：律法、歴史、詩歌、預言者）と新約（{new} 巻、マタイから黙示録——四福音書、使徒行伝、書簡、黙示録）。
bibleLongest^Longest book by chapters: {book} ({chapters}). Longest chapter: {chapter} ({verses} verses). Longest verse in the {translation}: {verse}, {chars} characters.^章数最多的书卷：{book}（{chapters} 章）。最长的一章：{chapter}（{verses} 节）。{translation}里最长的一节：{verse}，{chars} 字。^章数が最も多い書：{book}（{chapters} 章）。最も長い章：{chapter}（{verses} 節）。{translation}で最も長い節：{verse}、{chars} 文字。
bibleShortest^Shortest book by chapters: {book} ({chapters}, {bverses} verses). Shortest chapter: {chapter} ({verses} verses). Shortest verse in the {translation}: {verse} — “{text}”.^章数最少的书卷：{book}（{chapters} 章，{bverses} 节）。最短的一章：{chapter}（{verses} 节）。{translation}里最短的一节：{verse}——「{text}」。^章数が最も少ない書：{book}（{chapters} 章、{bverses} 節）。最も短い章：{chapter}（{verses} 節）。{translation}で最も短い節：{verse}——「{text}」。
bibleFirst^It opens with {ref}: “{text}”^开篇是{ref}：「{text}」^冒頭は{ref}：「{text}」
bibleLast^It ends with {ref}: “{text}”^结尾是{ref}：「{text}」^結びは{ref}：「{text}」
bibleMiddle^Counting {chapters} chapters, the middle one is {ref}. Counting {verses} verses, the middle verse is {vref}: “{text}”^按 {chapters} 章算，正中的一章是{ref}。按 {verses} 节算，正中的一节是{vref}：「{text}」^{chapters} 章で数えると真ん中は{ref}。{verses} 節で数えると真ん中の節は{vref}：「{text}」
bibleLanguages^The Old Testament was written in Hebrew, with a few passages in Aramaic (parts of Daniel and Ezra); the New Testament in Greek. The three texts here are translations: the King James (English, 1611), 和合本 (Chinese, 1919) and 口語訳 (Japanese, 1955).^旧约以希伯来文写成，少数段落是亚兰文（但以理书和以斯拉记的部分）；新约是希腊文。这里的三个文本都是译本：英王钦定本（英文，1611）、和合本（中文，1919）、口語訳（日文，1955）。^旧約はヘブライ語、一部（ダニエル書とエズラ記の一部）はアラム語。新約はギリシャ語。ここの三つは翻訳です：欽定訳（英語、1611）、和合本（中国語、1919）、口語訳（日本語、1955）。
bibleAuthors^Many hands over about a thousand years — tradition names Moses for the Torah, David for many Psalms, Solomon for Proverbs, the prophets for their books, the four evangelists for the Gospels, Paul for thirteen letters, John for Revelation. The dates and names are debated by scholars; the estate reports the tradition, not a verdict.^约一千年间的许多人——传统上摩西写律法书，大卫写许多诗篇，所罗门写箴言，先知各写其书，四位福音书作者写福音，保罗写十三封书信，约翰写启示录。年代和作者学界仍有争论；屋敷只转述传统，不下定论。^およそ千年にわたる多くの手——伝承では律法はモーセ、多くの詩篇はダビデ、箴言はソロモン、預言書は各預言者、福音書は四人の福音記者、十三の書簡はパウロ、黙示録はヨハネ。年代も著者も学者の間で議論があり、屋敷は伝承を伝えるだけで判定はしません。
bibleWhen^Roughly the 12th century BC to the 1st century AD for the writing — the oldest poems perhaps earlier, Revelation about AD 95. The oldest complete manuscripts are 4th century. The translations here are 1611, 1919 and 1955.^写作年代大致从公元前 12 世纪到公元 1 世纪——最古老的诗歌或更早，启示录约公元 95 年。最古老的完整抄本是 4 世纪的。这里的译本分别是 1611、1919 和 1955 年。^執筆はおおよそ紀元前 12 世紀から紀元 1 世紀——最古の詩はさらに前、黙示録は紀元 95 年頃。完全な最古の写本は 4 世紀。ここの訳は 1611、1919、1955 年。
bibleChapters^{chapters} chapters in {books} books.^{books} 卷共 {chapters} 章。^{books} 巻、{chapters} 章。
biblePsalms^The Psalms are 150 songs and prayers, the longest book by chapters; Psalm 119 is the longest chapter in the Bible ({long} verses) and Psalm 117 the shortest ({short}). Many carry David’s name. Ask “a psalm about comfort” or “open Psalm 23”.^诗篇是 150 首诗歌与祷告，章数最多的一卷；诗篇 119 是全书最长的一章（{long} 节），诗篇 117 最短（{short} 节）。许多署名大卫。可问「一首关于安慰的诗篇」或「打开诗篇 23」。^詩篇は 150 の歌と祈りで、章数がいちばん多い書。詩篇 119 は聖書で最も長い章（{long} 節）、詩篇 117 は最も短い章（{short} 節）。多くはダビデの名を負います。「慰めの詩篇」や「詩篇 23 を開いて」と。
bibleGospels^Four Gospels — Matthew ({mt} chapters), Mark ({mk}), Luke ({lk}) and John ({jn}) — each a life of Jesus. The first three tell it alike (the Synoptics); John stands apart. Say “open John 1”.^四福音——马太福音（{mt} 章）、马可福音（{mk} 章）、路加福音（{lk} 章）、约翰福音（{jn} 章）——各记耶稣生平。前三卷叙述相近（对观福音）；约翰福音独树一帜。说「打开约翰福音 1」。^四福音書——マタイ（{mt} 章）、マルコ（{mk}）、ルカ（{lk}）、ヨハネ（{jn}）——それぞれイエスの生涯。最初の三つは似た語り（共観福音書）、ヨハネは独自。「ヨハネ 1 を開いて」と。
fromBibleFile^counted from {translation}^从{translation}数出^{translation}から数えた`,`bibleSearchElsewhere^Nothing in the {from} carries “{words}”, so I searched the {translation}: {total} verses. First: {ref} — “{text}”^{from}里没有「{words}」，所以朕查了{translation}：{total} 节。第一处：{ref}——“{text}”^{from}に「{words}」はないので、{translation}を引いた：{total} 節。最初は {ref}——“{text}”
quoteSearchNone^The library has no line from {who} carrying “{words}” — {n} lines were searched. Try another word, or ask for {who} on a topic like fear, anger, time, death, money or power.^书库里{who}没有含「{words}」的句子——搜了 {n} 句。换个词试试，或问{who}论恐惧、愤怒、时间、死亡、金钱、权力。^書庫の{who}に「{words}」を含む一節はない——{n} 節を探した。別の言葉を試すか、{who}の恐れ・怒り・時間・死・金・力について問え。
quoteSearch^{n} lines from {who} carry “{words}”. One: {text}¶— {from}^{who}有 {n} 句含「{words}」。其一：{text}¶——{from}^{who}に「{words}』を含む一節は {n}。その一つ：{text}¶——{from}
anyone^the library^书库^書庫
gameName_sakura^Sakura 2048^樱花 2048^桜 2048
gameName_koi^Koi^锦鲤^鯉
gameName_sweeper^the lantern sweeper^灯笼扫雷^灯籠さがし
gameName_slide^the sliding picture^拼图^絵合わせ
gameName_catch^petal catch^接花瓣^花びら受け
gameName_terrarium^the terrarium^玻璃花房^テラリウム
gameName_go^Go against Ayaka^和绫华下围棋^綾華と囲碁
gameName_chess^chess against Ayaka^和绫华下国际象棋^綾華とチェス
gameName_matcha^Matcha Match^抹茶配对^抹茶あわせ
gameName_konpira^Konpira Fune Fune^金比罗船船^こんぴらふねふね
scene_morning^morning^早晨^朝
scene_afternoon^afternoon^午后^昼下がり
scene_evening^evening^傍晚^夕暮れ
scene_night^night^夜^夜
*`,`timeHere^It is {time} in Singapore (SGT) — {jst} in Tokyo (JST), {utc} UTC.^新加坡现在 {time}（SGT）——东京 {jst}（JST），UTC {utc}。^シンガポールは {time}（SGT）——東京は {jst}（JST）、UTC は {utc} です。
timeIn^It is {time} in {city} ({zone}).^{city}现在 {time}（{zone}）。^{city}は {time}（{zone}）です。
timeUnknownCity^I only know a few dozen cities by name. Try Tokyo, Singapore, London, New York, Sydney, Beijing, Seoul, Paris — or a zone like UTC.^我只认识几十个城市。试试东京、新加坡、伦敦、纽约、悉尼、北京、首尔、巴黎，或 UTC。^知っている都市は数十だけです。東京、シンガポール、ロンドン、ニューヨーク、シドニー、北京、ソウル、パリ、または UTC をどうぞ。
date^Today is {date}.^今天是 {date}。^今日は {date} です。
wadokei^On the wadokei it is the hour of the {animal} — {branch} ({romaji}), {window}. The clock card is second in the Overview wing.^和时计上现在是{animal}之刻——{branch}（{romaji}），{window}。和时计卡在总览的第二张。^和時計では{animal}の刻——{branch}（{kana}）、{window}。和時計のカードは本館の二枚目です。`,`weather^Here, now: {label} in {city}.{cached}^此刻{city}：{label}。{cached}^いま{city}は {label}。{cached}
weatherNone^No weather reading is available right now — the geo feed reports {status}. The estate does not invent a temperature.^现在没有天气读数——地理信息源报告 {status}。屋敷不会编造温度。^いまは天気の読みがありません——位置情報のフィードは {status} と報告しています。屋敷は温度を作りません。
location^The page host is {host}. The public IP is {ip} — {city}, {region}, {country}{isp}.{cached}^页面主机是 {host}。公开 IP 是 {ip}——{city}，{region}，{country}{isp}。{cached}^ページのホストは {host}。公開 IP は {ip}——{city}、{region}、{country}{isp}。{cached}
locationNone^The geo feed is not available right now ({status}). No IP is shown because none was measured.^地理信息源现在不可用（{status}）。没有测到 IP，所以不显示。^位置情報のフィードはいま使えません（{status}）。測れていない IP は表示しません。`,`fxRate^{code} ({name}): {rate} SGD per 1 {code}, {change} on the day.{status}^{code}（{name}）：1 {code} = {rate} 新元，当日 {change}。{status}^{code}（{name}）：1 {code} = {rate} SGD、当日 {change}。{status}
fxAll^Against the Singapore dollar today: {list}.{status}^今日对新元：{list}。{status}^本日のシンガポールドル建て：{list}。{status}
fxConvert^{amount} {from} ≈ {result} {to} at today’s rates.{status}^{amount} {from} ≈ {result} {to}（按今日汇率）。{status}^{amount} {from} ≈ {result} {to}（本日のレート）。{status}
fxUnknown^The FX card carries {list} against SGD; {code} is not one of them.^汇率卡只有 {list} 对新元，没有 {code}。^為替カードにあるのは {list} 対 SGD だけで、{code} はありません。
fxNone^No FX rates are on the page right now — the feed reports {status}. I will not quote a stale or invented number.^页面上现在没有汇率——信息源报告 {status}。我不报陈旧或编造的数字。^いまページに為替レートはありません——フィードは {status} と報告しています。古い数字や作った数字は言いません。
stock^{sym}: \${price}, {chg} — {market}.{status}^{sym}：\${price}，{chg}——{market}。{status}^{sym}：\${price}、{chg}——{market}。{status}
stocksAll^US stocks on the card: {list} — {market}.{status}^卡片上的美股：{list}——{market}。{status}^カードの米国株：{list}——{market}。{status}
stockUnknown^The stocks card follows {list}; {sym} is not one of them.^股票卡只跟踪 {list}，没有 {sym}。^株価カードが追うのは {list} だけで、{sym} はありません。
stockNone^No stock prices are on the page right now — the feed reports {status}.^页面上现在没有股价——信息源报告 {status}。^いまページに株価はありません——フィードは {status} と報告しています。
live^ Live.^ 实时。^ ライブ。
cachedAs^ {label} — a real capture, not live.^ {label}——真实快照，非实时。^ {label}——本物の記録ですが、ライブではありません。`,`cachedLabel^Cached^缓存^キャッシュ
feedError^ERR^错误^エラー`,`hostAll^{hostname} — {os} {release} on {arch}, {cpu} ({cores} cores), {ram} GB RAM ({used}% used). Node {node}. Up {uptime}.{status}^{hostname}——{os} {release}，{arch}，{cpu}（{cores} 核），{ram} GB 内存（已用 {used}%）。Node {node}。已运行 {uptime}。{status}^{hostname}——{os} {release}、{arch}、{cpu}（{cores} コア）、{ram} GB メモリ（使用 {used}%）。Node {node}。稼働 {uptime}。{status}
hostUptime^The host has been up {uptime}; this page’s server process {proc}.{status}^主机已运行 {uptime}；本页的服务进程 {proc}。{status}^ホストの稼働は {uptime}、このページのサーバープロセスは {proc}。{status}
hostNone^There is no host reading: {label}. On a static host there is no /api, so the estate says so instead of showing a number.^没有主机读数：{label}。静态主机上没有 /api，屋敷会直说，而不是显示一个数字。^ホストの読みはありません：{label}。静的ホストには /api がないので、屋敷は数字を出さずそう言います。
traffic^This tab has made {requests} requests ({blocked} blocked), {rps} per second lately, last latency {latency} ms.^本标签页已发出 {requests} 个请求（{blocked} 个被拦），近期每秒 {rps} 个，最近延迟 {latency} 毫秒。^このタブのリクエストは {requests} 件（{blocked} 件ブロック）、最近は毎秒 {rps} 件、直近の遅延は {latency} ms。
feeds^Right now — FX: {fx}. Stocks: {stocks}. Place & weather: {geo}. Host: {host}.{offline}^此刻——汇率：{fx}。股票：{stocks}。位置与天气：{geo}。主机：{host}。{offline}^いま——為替：{fx}。株価：{stocks}。位置と天気：{geo}。ホスト：{host}。{offline}
feedsOffline^ The estate is working offline, so every live card shows a dated capture.^ 屋敷正在离线工作，每张实时卡都显示带日期的快照。^ 屋敷はオフラインで動いているので、ライブカードはすべて日付付きの記録を出しています。
status^{s}^{s}^{s}`,`openingGame^To the courtyard — {what} is on the table.^去庭院——{what}已摆好。^中庭へ——{what}を出しておきます。
openingTable^To the tea room — {what}. It asks for its phrase first if this visit has not given it yet.^去茶室——{what}。这次来访若还没给过暗语，它会先问。^茶室へ——{what}。この訪問でまだ合言葉を渡していなければ、先に尋ねられます。
game_terrarium_name^the terrarium^玻璃花房^テラリウム
game_sakura_name^Sakura 2048^樱花 2048^桜 2048
game_koi_name^the koi^锦鲤^鯉
game_sweeper_name^the lantern sweeper^灯笼扫雷^灯籠さがし
game_slide_name^the picture puzzle^拼图^絵合わせ
game_catch_name^petal catch^接花瓣^花びら受け
game_record_name^the record book^记录册^記録帳`,`game_tetris_name^Tetris^俄罗斯方块^テトリス
game_sudoku_name^sudoku^数独^数独
table_go^a game of Go^一局围棋^囲碁を一局
table_chess^a game of chess^一局国际象棋^チェスを一局
table_matcha^Matcha Match^抹茶配对^抹茶あわせ
table_konpira^Konpira Fune Fune^金比罗船船^こんぴらふねふね
opening^Opening {what}.^正在打开{what}。^{what}を開きます。
going^Taking you to {what}.^带你去{what}。^{what}へ案内します。
done^Done — {what}.^好了——{what}。^はい——{what}。
gardenWatered^Watered — every plot with something growing in it is full again.^浇过了——每一块有作物的地都重新蓄满了水。^水をやりました——何か植わっている区画はすべて満たしました。
gardenTending^I will look after them from now on: the plots are watered as they dry, so nothing withers while you are away. The growing still takes the hours it takes. Say “stop watering them” to take it back.^往后由我照看：地干了就浇，你不在时也不会枯萎。生长仍需它该用的时间。想收回就说「别再浇了」。^これからは私が世話をします：乾けば水をやるので、留守の間に枯れることはありません。育つのに要る時間はそのままです。やめるときは「水やりをやめて」と。
gardenUntended^The watering can is yours again — the plots will dry as they always did.^水壶还给你了——地会像从前一样慢慢变干。^じょうろはお返しします——区画はこれまで通り乾いていきます。
*
*
undoing^Putting that back.^这就改回去。^元に戻します。
*
*
teaLocked^The tea room asks for its phrase at the door — I can take you to the prompt, but the phrase is yours to type.^茶室在门口要一句暗语——我可以带你到提示处，但暗语要你自己输入。^茶室は入口で合言葉を求めます——入口までは案内できますが、合言葉はあなたが打つものです。
bareOn^Estate view — the painting alone. Escape or the menu brings the estate back; Space triggers BANKAI.^庭园视图——只剩画面。按退出键或用菜单回来；空格触发卍解。^絵だけの眺めに。エスケープキーかメニューで戻り、スペースで卍解します。
whereDoor^You are at the front door.^你在正门。^正門にいます。
whereDeck^You are in the {wing} wing of the deck.^你在牌桌的{wing}区。^デッキの{wing}にいます。
here_door^The front door: the gate at this hour, the greeting, one honest line of place and weather, and a phrase that changes every ten seconds. 入る enters; 茶 asks for the tea room’s phrase.^正门：此刻的大门、问候、一句真实的地点与天气，以及每十秒换一句的话。「入る」进屋；「茶」问茶室的暗语。^正門：いまの時刻の門、挨拶、場所と天気の正直な一行、十秒ごとに変わる一句。「入る」で中へ、「茶」で茶室の合言葉を。
here_deck^The main hall: the deck of cards in six wings — live clocks, feeds and markets, study and lab tools, the desk. Cards can be pinned, hidden and reordered; ⌘K searches everything.^本馆：六个区的卡片——实时时钟、数据与行情、学习与实验工具、书桌。卡片可置顶、隐藏、排序；⌘K 搜索一切。^本館：六つの棟のカード——生きた時計、フィード、市場、学びと工房の道具、机。カードは固定・非表示・並べ替えができ、⌘K で何でも検索。
here_tea^The tea room: Ayaka, a cup, and games on the table — Go, chess, Matcha Match, Konpira Fune Fune. Her lines follow the EN / 中文 / 日本語 toggle; the eye hides the controls.^茶室：绫华、一盏茶，桌上的游戏——围棋、国际象棋、抹茶配对、金比罗船船。她的台词跟随 EN / 中文 / 日本語；眼睛图标隐藏控件。^茶室：綾華と一服、卓上の遊び——囲碁、チェス、抹茶あわせ、こんぴらふねふね。台詞は EN / 中文 / 日本語 に従い、目のボタンで操作を隠せます。
here_bible^The Bible: the whole King James, 和合本 and 口語訳, read as a book that turns. Search every word, mark chapters read; your place is remembered.^圣经：完整的英王钦定本、和合本与口語訳，像一本会翻页的书。可全文搜索、标记已读章节；会记住你读到的地方。^聖書：欽定訳・和合本・口語訳の全文を、めくれる本として。全語検索、読了の印、開いた場所は覚えています。
here_wall^The wall of quotes: the whole vendored library drifting past — Marcus Aurelius, Epictetus, Seneca, Sun Tzu, Lao Tzu, Confucius, Machiavelli, and lines rendered by the estate for Musashi and Hagakure.^语录墙：整座藏书漂过——马可·奥勒留、爱比克泰德、塞内卡、孙子、老子、孔子、马基雅维利，以及屋敷为武藏与《叶隐》所写的句子。^言葉の壁：蔵書のすべてが流れます——マルクス・アウレリウス、エピクテトス、セネカ、孫子、老子、孔子、マキャヴェリ、そして屋敷が武蔵と葉隠のために綴った行。
here_browser^Every line: the library as a list — search it, star lines, and starred lines can hang on the front door.^所有句子：藏书的清单——搜索、加星，加星的句子可以挂在正门上。^すべての行：蔵書を一覧で——検索し、星をつけ、星の行は正門に掛けられます。
here_settings^Settings: the estate’s language, the tea room’s light, the painting behind the deck, and the phrases on the door.^设置：屋敷语言、茶室的光、牌桌后的画、门上的句子。^設定：屋敷の言語、茶室の光、デッキの背景の絵、門の句。
here_handbook^The handbook: every room, key and flag of the estate, searchable.^手册：屋敷的每个房间、快捷键与参数，可搜索。^手引き：屋敷のすべての部屋、キー、フラグ。検索できます。
here_bare^Estate view: the painting alone, nothing in the way. Escape or the corner ⋮ menu brings everything back; Space triggers BANKAI.^庭园视图：只有画，别无他物。按退出键或用角落的 ⋮ 菜单回来；空格触发卍解。^屋敷ビュー：絵だけ、邪魔なし。エスケープキーか角の ⋮ メニューで戻り、スペースで卍解します。
here_courtyard^The courtyard: the garden pavilion, painted for the hour. Nine tiles — the terrarium that grows in real time, Sakura 2048, Koi, Lantern sweeper, the picture puzzle, Petal catch, the falling blocks, Sudoku, and the record book of every round.^庭院：按时辰绘成的花园亭子。九格——实时生长的玻璃花房、樱花 2048、锦鲤、灯笼扫雷、拼图、接花瓣、落方块、数独，以及记下每一局的记录册。^中庭：時刻ごとに描かれた庭の東屋。九つの区画——実時間で育つテラリウム、桜 2048、鯉、灯籠さがし、絵合わせ、花びら受け、積み木、数独、そして一局ごとの記録帳。
here_heron^The White Heron Room — 白鷺の間 — the living room of the main house, painted at four hours. A quiet room with nothing to win: the scroll on the wall shows a line from the door’s pool (“Another” turns it), the ledger is this browser’s records — garden, best scores, chapters read, starred lines — and the hour is the clock, here and in Tokyo.^白鹭之间——本馆的起居之室，按四个时辰绘成。安静的房间，无需争胜：壁上挂轴显示门上句子库中的一句（「换一句」可换），帐簿是这台浏览器的记录——花园、最佳分数、已读章节、加星的句子——时辰是此地与东京的时钟。^白鷺の間——本館の居間、四つの時刻に描かれています。勝ち負けのない静かな部屋：壁の掛軸は門の句から一句（「別の一句」で替わる）、帳はこのブラウザの記録——庭、最高記録、読了の章、星の行——時はここと東京の時計。
here_windchime^The Wind-chime Garden: the small pavilion left of the pond beside the bamboo. Autumn glass and summer blue Rimuru chimes follow the estate’s morning, afternoon, evening and night, or a time you choose. Switch designs yourself or every ten minutes; doors cover the change until ready. Soft sound begins on entry, with mute; visible clapper contact rings the bell with wind rustle. Display mode leaves a quiet view for your monitor.^风铃庭：池塘左侧、竹林旁的小亭。秋日玻璃与夏日蓝色利姆露风铃跟随屋敷的早晨、午后、傍晚、夜晚，也可手动选时辰。造型可手动切换或每十分钟轮换，门会遮住切换直到就绪。入庭时声音轻柔开启，可静音；铃舌触碰时响铃，伴着风声。展示模式适合留在显示器上静静观赏。^風鈴の庭：池の左、竹林のそばの小さな東屋。秋のガラスと夏の青いリムルの風鈴は、屋敷の朝・昼・夕・夜に従い、時刻を手動でも選べます。意匠は手動か十分ごとの自動切り替えで、準備ができるまで扉が覆います。入庭時は小さな音で始まり、消音もできます。舌が触れる動きで鳴り、風のそよぎが添います。表示モードでモニターに静かな眺めを残せます。
here_map^The estate map: the whole estate from above, six waypoints — the gate, the main hall, the White Heron Room, the tea room, the courtyard and the Wind-chime Garden. Pick one to see it as it looks now, then Teleport. Drag and scroll to look around.^屋敷地图：从上方看整座屋敷，六个传送点——正门、本馆、白鹭之间、茶室、庭院、风铃庭。选一个看它此刻的样子，然后传送。拖动、滚动查看。^屋敷の地図：屋敷全体を上から、目印は六つ——正門、本館、白鷺の間、茶室、中庭、風鈴の庭。選べば今の様子が見え、ワープ。ドラッグとスクロールで見回せます。
chipMap^Open the map^打开地图^地図を開いて
chipBare^Estate view^庭园视图^屋敷ビュー
cannot_write^I do not write for people — no drafts, no rewrites, no summaries; there is no model behind me to do it and I would rather say so. The Notebook card on the Desk wing keeps what you write yourself, and the Prompt library card holds templates you can take to a real writing model.^我不替人写作——不起草、不改写、不总结；我背后没有模型，我宁愿直说。书桌区的「笔记本」卡保存你自己写的东西，「提示词库」卡里有可以带去真正写作模型的模板。^私は人の代わりに書きません——下書きも書き直しも要約もなし。裏にモデルがないので、そう言うほうが正直です。机の棟のノートはあなた自身の文章を保ち、プロンプト集のカードには本物の文章モデルへ持っていける型があります。
cannot_code^I cannot write or debug code — I am rules, not a model. What the estate does have: the Complexity card, Token & cost, VRAM and Tensor shapes in the Lab wing, and this page’s own source, downloadable from the ⋮ menu, if you want to read how I work.^我不能写代码或调试——我是规则，不是模型。屋敷有的是：实验区的「复杂度」卡、「Token 与成本」、「VRAM」、「张量形状」，以及这页自己的源码，可从 ⋮ 菜单下载，如果你想读我是怎么运作的。^コードは書けもデバッグもできません——私はルールで、モデルではないので。屋敷にあるのは：工房の棟の計算量カード、トークンとコスト、VRAM、テンソルの形、そして ⋮ メニューから落とせるこのページ自身のソース——私の仕組みを読みたければ。
cannot_story^I do not make things up — not even a story, and a poem would be worse. What this house does have is other people’s words, honestly attributed: thirty-one thousand verses and a library of Seneca, Marcus Aurelius, Lao Tzu and the rest. Ask for a verse or a quote and I will read one.^我不编造——连故事也不编，诗就更不行了。这屋子有的是别人的话，如实标注出处：三万一千节经文，还有塞内卡、马可·奥勒留、老子等人的藏书。要一节经文或一句名言，我读给你。^私は作りません——物語も、詩ならなおのこと。この家にあるのは、出所を正しく記した他人の言葉：三万一千の聖句と、セネカ、マルクス・アウレリウス、老子たちの蔵書。聖句か名言を求めれば読みます。
cannot_image^I cannot draw or generate pictures. The estate’s paintings were made by its operator — the map (m) shows the whole place from above, and every room is painted at four hours of the day.^我不能画画或生成图片。屋敷的画都是主人所作——地图（m）从上方看整座屋敷，每个房间都按一天四个时辰绘成。^絵を描くことも画像を生成することもできません。屋敷の絵は主人が描いたもの——地図（m）は屋敷全体を上から、どの部屋も一日四つの時刻で描かれています。
cannot_medical^I am not a doctor and I will not guess at your health — a wrong answer here costs more than an honest “I cannot”. Please see a clinician or a pharmacist; if it is urgent, call your local emergency number. The one health sum I do is BMI, and even that comes with a disclaimer.^我不是医生，也不会猜你的健康——在这里答错的代价，比坦白说「我不能」大得多。请去看医生或药师；若情况紧急，请拨当地急救电话。我唯一会算的健康数字是 BMI，而且还附带免责声明。^私は医師ではなく、あなたの健康を推測しません——ここで間違える代償は、正直に「できない」と言うより大きい。医師か薬剤師に。急ぎなら地域の救急番号へ。私ができる唯一の健康の計算は BMI で、それにも但し書きがつきます。
cannot_legal^I am not a lawyer and this page is not legal advice — laws differ by country and by the details I do not have. A qualified lawyer or a legal aid service is the right door. The nearest thing here is what the Bible says on a matter, if you want to search it.^我不是律师，这页也不是法律建议——法律因国家和我不知道的细节而不同。合格的律师或法律援助机构才是对的门。这里最接近的，是圣经对某事的说法，如果你想搜的话。^私は弁護士ではなく、このページは法的助言ではありません——法は国と、私の知らない事情で変わる。資格のある弁護士か法律相談窓口が正しい扉です。ここにある一番近いものは、聖書がその事柄に何と言うか——探すなら。
cannot_finance^I give no investment advice and make no predictions — nobody honest can tell you where a price goes. The Markets wing shows real prices only, when the feed is up, and labels the ones that are cached. Decisions about your money belong with a licensed adviser, not a page.^我不给投资建议，也不做预测——没有诚实的人能告诉你价格往哪走。行情区只显示真实价格，数据正常时才显示，缓存的也会标出。关于你的钱的决定，该交给持牌顾问，而不是一个网页。^投資の助言も予測もしません——価格の行き先を言える正直な者はいない。市場の棟はフィードが生きているときだけ本物の価格を出し、キャッシュには印をつけます。お金の判断は、ページではなく資格ある助言者に。
cannot_recipe^No cookbook in this house, I am afraid — I would be inventing quantities. The tea room does have tea, and I can tell you what matcha is; for a recipe, a written one from a cook you trust beats anything I could guess.^这屋子里没有食谱，抱歉——我只会编分量。茶室有茶，我能告诉你抹茶是什么；至于食谱，你信得过的厨师写下的，胜过我能猜的一切。^この家に料理本はありません——分量を作り上げることになってしまう。茶室にはお茶があり、抹茶とは何かは言えます。レシピは、信頼できる料理人が書いたものが、私の推測より確かです。
cannot_homework^I will not do the assignment for you — but the Study wing was built for exactly this: the Formula scroll, the Recall deck for what must be memorised, the Focus timer, GPA/CAP. And I do sums, conversions and dates exactly, if you ask them one at a time.^我不会替你做作业——但学习区正是为此而建：「公式卷」、用来记忆的「回忆卡组」、「专注计时」、GPA/CAP。算术、换算和日期我算得精确，只要你一次问一个。^課題を代わりにやることはしません——けれど学びの棟はまさにそのために：公式の巻物、暗記のための想起デッキ、集中タイマー、GPA/CAP。計算、換算、日付は一つずつ聞いてくれれば正確に。
cannot_browse^I cannot browse. The one outside source I may consult, when the estate is connected, is the public encyclopaedia — by title, and I say “fetched just now” when I do. No search engines, no video sites, no links of my own.^我不能上网浏览。屋敷联网时，我唯一可以查阅的外部来源是公开百科——按标题查，查了会写明「刚刚获取」。没有搜索引擎，没有视频网站，也没有我自己给出的链接。^閲覧はできません。屋敷がつながっているとき、唯一参照できる外部は公開の百科事典——項目名で引き、そのときは「いま取得」と記します。検索エンジンも動画サイトも、私が出すリンクもありません。
cannot_remember^I keep this conversation in this browser only (the ayaka_assistant key) — nothing goes to any server, and clearing the site’s storage forgets it. Two things I will keep on request: what to call you (“call me …”), and an answer you teach me (“remember: bin day = Tuesday”), both in this browser and both in the estate backup. Nothing is carried to another device on its own. Write what matters in the Notebook, or back the whole estate up from the Desk wing.^我只把这段对话存在这台浏览器里（ayaka_assistant 键）——不会发到任何服务器，清除站点存储就会忘记。你要求的话，我会记两样：怎么称呼你（「叫我……」），以及你教我的答案（「记住：倒垃圾日 = 星期二」）——都只在这台浏览器，也都随屋敷备份走。不会自己带到别的设备。重要的写进「笔记本」，或者从书桌区备份整座屋敷。^この会話はこのブラウザにだけ保ちます（ayaka_assistant キー）——どのサーバーにも送らず、サイトのストレージを消せば忘れます。頼まれれば二つだけ留めます：あなたの呼び名（「…と呼んで」）と、あなたが教えた答え（「覚えて：ゴミの日 = 火曜」）。どちらもこのブラウザの中と屋敷の控えの中だけで、ひとりでに他の端末へは行きません。大事なことはノートに、あるいは机の棟から屋敷全体をバックアップして。
cannot_learn^I do not learn. Every answer I give is a rule someone wrote into this page, and it stays exactly as written until the operator changes it — which is why I never drift and never invent. What I can do is hold a note: teach me an answer and I keep it in this browser, read it back only where I have nothing of my own to say, and always tell you it came from you. That changes no rule of the house. If I am wrong about something, the source is downloadable and the rule can be fixed.^我不学习。我的每个回答都是有人写进这页的规则，在主人修改之前一字不变——所以我从不偏移，也从不编造。我能做的是替你记一条：教我一个答案，我把它存在这台浏览器里，只在我自己无话可说时读回，并且每次都说明这是你教的。屋敷的规则一条也不会因此改变。如果我哪里错了，源码可以下载，规则可以修正。^私は学びません。私の答えはすべて誰かがこのページに書いたルールで、主人が変えるまで一字も変わりません——だから逸れも作り話もしない。できるのは控えを持つことです：答えを教われば、このブラウザに留め、こちらに言うことが何もないときだけ読み返し、必ずあなたから教わったと断ります。それで屋敷のルールが変わることはありません。何か間違っていれば、ソースは落せて、ルールは直せます。
cannot_opinion^I hold no opinions — on politics, faith, people or anything else — and would not pretend to. What I can do is search the words others left: the Bible on a subject, or the Stoics. Ask “bible on justice” or “Seneca on power” and you will get their lines, not mine.^我没有观点——政治、信仰、人物，什么都没有——也不会假装有。我能做的是搜索别人留下的话：圣经对某个题目的说法，或斯多葛派。问「圣经关于公义」或「塞内卡论权力」，你得到的是他们的话，不是我的。^私に意見はありません——政治も信仰も人物も何も——あるふりもしません。できるのは他人が残した言葉を探すこと：聖書がある主題に何と言うか、あるいはストア派。「聖書は正義について」「セネカの権力について」と聞けば、私ではなく彼らの言葉が返ります。
cannot_realtime^No news, scores, forecasts or prices reach this page except the feeds you can see on it: exchange rates, a few stocks, the weather here and now, and the host’s own vitals. Everything else would be a guess, and I do not guess. Ask “what is live” to see which feeds are up.^除了页面上能看到的数据源——汇率、几只股票、此地此刻的天气、主机自身的状态——没有新闻、比分、预报或价格能到达这页。其他一切都是猜，而我不猜。问「what is live」看哪些数据源正常。^このページに届くのは、見えているフィードだけ——為替、いくつかの株、ここのいまの天気、ホストの状態。ニュースもスコアも予報も価格も、それ以外は推測になり、私は推測しません。「what is live」と聞けばどのフィードが生きているかわかります。
cannot_act^I cannot reach outside this page — no email, no calls, no bookings, no music, no lights. Everything I can do happens here: open a room, a card or a wing, change the language, the light or the layout, and keep your notes in the Notebook.^我到不了这页之外——不发邮件、不打电话、不订东西、不放音乐、不开灯。我能做的都在这里：打开房间、卡片或分区，切换语言、光线或布局，把你的笔记存进「笔记本」。^このページの外には手が届きません——メールも電話も予約も音楽も照明も。できることはすべてここで：部屋やカードや棟を開く、言語や光や配置を変える、ノートにあなたの記録を保つ。
cannot_shop^I keep no catalogue and no prices for things — I would be inventing them. The only costs on this page are model token prices in the Token & cost card, editable and dated. For a purchase, a shop’s own listing beats my guess.^我没有商品目录，也没有价格——说了就是编。这页上唯一的费用是「Token 与成本」卡里的模型价格，可编辑、有日期。买东西，商店自己的页面胜过我的猜测。^商品の目録も価格も持ちません——言えば作り話になる。このページにある唯一の費用は、トークンとコストのカードのモデル料金で、編集でき日付があります。買い物は、店の掲載が私の推測より確かです。
cannot_quiz^I will not set you a test — a quiz I could not mark honestly is not a quiz. The Recall deck card in the Study wing is built for that: write the cards, and it schedules them (SM-2). Or ask me a riddle, or a fact at random, and we can go from there.^我不会给你出测验——一场我没法诚实评分的考试不算考试。学习区的「回忆卡组」正是为此而建：写下卡片，它会安排复习（SM-2）。或者向我要一个谜语、一个随机知识，从那儿开始。^テストは出しません——正直に採点できないクイズはクイズではない。学びの棟の想起デッキはそのために：カードを書けば、それが復習を組みます（SM-2）。あるいはなぞなぞや、ランダムな事実を私に——そこから始めましょう。
cannot_tictactoe^Not with me — I would have to invent a board and keep score in my head, and I do neither. But the estate has real games with real engines: Go, chess and Matcha Match in the tea room, and six in the courtyard. Shall I take you?^跟我不行——我得凭空造一个棋盘，还要在脑子里记分，这两件我都不做。但屋敷有真正的游戏和真正的引擎：茶室里的围棋、国际象棋、抹茶配对，庭院里还有六个。要我带你去吗？^私とはできません——盤を作り、勝敗を頭で数えねばならず、どちらもしないので。けれど屋敷には本物のエンジンを持つ本物の遊びが：茶室の囲碁、チェス、抹茶あわせ、中庭の六つ。お連れしましょうか？
cannot_voice^I have no voice and no ears — I read what you type. Ayaka does speak, in the tea room: sixty-six recorded lines in three languages, none of them generated. That is the only voice in this house.^我没有声音也没有耳朵——我读你打的字。绫华会说话，在茶室：六十六句录好的台词，三种语言，没有一句是生成的。那是这屋子里唯一的声音。^私には声も耳もなく、打たれた文字を読みます。綾華は茶室で話します：三言語で六十六の録音、生成されたものは一つもない。この家の唯一の声です。
cannot_bulk^I will not delete everything at once — there is no sweeping delete here, and nothing was removed. Delete things one at a time where they live: a note in the Notebook, a task in its list, a deadline on its card.^我不会一次删除所有东西——这里没有一键全删，什么都没有被删除。要删就在各自的地方一条条删：笔记在「笔记本」里，任务在任务列表里，截止日期在它的卡片上。^すべてを一度に消すことはしません——一括削除はなく、何も消えていません。消すときはそれぞれの場所で一つずつ：ノートは「ノート」で、タスクはそのリストで、締め切りはそのカードで。
cannot_place^There is no room, card or wing called “{target}” in the estate, so nothing opens. The map shows every place I can take you.^屋敷里没有叫「{target}」的房间、卡片或分区，所以不会打开任何东西。地图上有我能带你去的每一个地方。^屋敷に「{target}」という部屋・カード・棟はないので、何も開きません。案内できる場所はすべて地図に載っています。
spelt^{text}: {out}^{text}：{out}^{text}：{out}
sorted^In order: {out}^排好了：{out}^並べ替え：{out}
shuffled^Shuffled: {out}^打乱了：{out}^シャッフル：{out}
picked^I pick: {out}^我选：{out}^選んだのは：{out}
listTooShort^I need at least two items, separated by commas or spaces.^至少要两项，用逗号或空格分开。^少なくとも二つ、コンマか空白で区切って。
passwordMade^Here: {out} — made from this device’s randomness, shown once and kept nowhere. Copy it before it scrolls away.^给：{out}——由本设备的随机数生成，只显示一次，不保存在任何地方。滚走之前复制好。^これを：{out}——この端末の乱数から作り、一度だけ表示、どこにも保存しません。流れる前にコピーを。
counted^To {n}: {out}^数到 {n}：{out}^{n} まで：{out}
pctChanged^From {a} to {b} is {pc}% — {dir}.^从 {a} 到 {b} 是 {pc}%——{dir}。^{a} から {b} は {pc}%——{dir}。
pctFromZero^A change from zero has no percentage — anything divided by nothing.^从零开始的变化没有百分比——任何数除以零都没意义。^ゼロからの変化にはパーセントがありません——何かをゼロで割ることになる。
up^up^上涨^増加
down^down^下跌^減少
split^{total} split {n} ways is {each} each.^{total} 分给 {n} 个人，每人 {each}。^{total} を {n} 人で割ると、一人 {each}。
splitTip^{total} plus a {pct}% tip ({tip}) is {grand}; split {n} ways, {each} each.^{total} 加 {pct}% 小费（{tip}）共 {grand}；{n} 个人分，每人 {each}。^{total} にチップ {pct}%（{tip}）で {grand}。{n} 人で割って一人 {each}。
splitBad^I need an amount and a number of people from 1 to 1000 — “split 120 between 4”.^需要一个金额和 1 到 1000 之间的人数——「120 分 4 个人」。^金額と 1〜1000 の人数が要ります——「120 を 4 人で割り勘」。
stat_mean^Mean of {n} numbers: {v} (sum {sum}, from {min} to {max}).^{n} 个数的平均：{v}（总和 {sum}，从 {min} 到 {max}）。^{n} 個の平均：{v}（合計 {sum}、{min} から {max}）。
stat_sum^Sum of {n} numbers: {v} (mean {mean}).^{n} 个数的总和：{v}（平均 {mean}）。^{n} 個の合計：{v}（平均 {mean}）。
stat_median^Median of {n} numbers: {v} (mean {mean}).^{n} 个数的中位数：{v}（平均 {mean}）。^{n} 個の中央値：{v}（平均 {mean}）。
stat_max^Largest of {n} numbers: {v} (smallest {min}).^{n} 个数中最大：{v}（最小 {min}）。^{n} 個の最大：{v}（最小 {min}）。
stat_min^Smallest of {n} numbers: {v} (largest {max}).^{n} 个数中最小：{v}（最大 {max}）。^{n} 個の最小：{v}（最大 {max}）。
baseFromDecimal^{n} in {base} is {out}.^{n} 的{base}是 {out}。^{n} を{base}にすると {out}。
baseToDecimal^{src} is {out} in decimal.^{src} 是十进制的 {out}。^{src} は十進数で {out}。
baseBad^I can convert whole numbers from 0 up to 2⁵³ — no negatives, no fractions, and digits that fit the base.^我能转换 0 到 2⁵³ 的整数——不含负数、小数，且数字要符合进制。^0 から 2⁵³ までの整数を変換できます——負数も小数もなし、桁は基数に合うものを。
base_binary^binary^二进制^二進数
base_octal^octal^八进制^八進数
base_hex^hexadecimal^十六进制^十六進数
base_decimal^decimal^十进制^十進数
starSignIs^That birthday falls under {sign}. The sign is a calendar fact; what it means about anyone is not something this house will claim.^这个生日属于{sign}。星座是日历上的事实；它说明一个人什么，这屋子不会去断言。^その誕生日は{sign}。星座は暦の事実で、人について何を意味するかはこの家では言いません。
starSignAsk^Tell me the month and day — “star sign 5 september” — and I will name the sign. I do not read horoscopes; the sign is the only part that is a fact.^告诉我月和日——「星座 9月5日」——我说出星座。我不看运势；星座是唯一算得上事实的部分。^月と日を——「星座 9月5日」——と言えば星座を言います。占いは読みません。星座だけが事実の部分です。
echoed^{out}^{out}^{out}
echoNothing^Say what, exactly? There was nothing after the word.^说什么呢？那个词后面没有东西。^何を、でしょう。言葉のあとに何もありませんでした。
riddleAsked^{q} — say “answer” when you give up, or “another” for a different one.^{q}——放弃时说「答案」，或说「再来一个」换一个。^{q}——降参なら「答え」、別のものなら「もう一つ」と。
riddleAnswer^{a}^{a}^{a}
riddleNone^I have not asked you a riddle yet — say “riddle” and I will.^我还没给你出谜语——说「谜语」我就出。^まだなぞなぞを出していません——「なぞなぞ」と言えば出します。
fromRiddles^twelve old riddles written into the estate^写进屋敷的十二个老谜语^屋敷に書かれた十二の古いなぞなぞ
chipAnswer^answer^答案^答え
chipAnotherRiddle^another riddle^再来一个谜语^もう一つなぞなぞ
chipRiddle^tell me a riddle^出个谜语^なぞなぞを出して
chipAnotherFact^another fact^再来一个知识^もう一つ事実を
chipNotebook^open the notebook^打开笔记本^ノートを開いて
chipPrompts^open the prompt library^打开提示词库^プロンプト集を開いて
chipComplexity^open the complexity card^打开复杂度卡^計算量カードを開いて
chipSource^how was this built^这是怎么建的^これはどう作られた
chipVerse^a random verse^随机一节经文^ランダムな聖句
chipBmi^bmi 70 kg 175 cm^bmi 70公斤 175cm^bmi 70キロ 175センチ
chipBible^open the bible^打开圣经^聖書を開いて
chipMarkets^go to markets^去行情区^市場の棟へ
chipMatcha^what is matcha^什么是抹茶^抹茶とは
chipFormula^open the formula scroll^打开公式卷^公式の巻物を開いて
chipRecall^open the recall deck^打开回忆卡组^想起デッキを開いて
chipLookup^what can you look up^你能查什么^何を調べられる
chipBackup^back up the estate^备份屋敷^屋敷をバックアップ
chipBibleOn^bible on justice^圣经关于公义^聖書は正義について
chipStoics^seneca on anger^塞内卡论愤怒^セネカの怒りについて
chipTea^take me to the tea room^带我去茶室^茶室へ連れて行って
chipTokens^open token & cost^打开 Token 与成本^トークンとコストを開いて
greetName^Good to see you again, {name}.^{name}，又见到你了。^{name}さん、またお会いできて。
nameSet^{name} it is. Kept in this browser only — nothing leaves the page — and “forget my name” clears it.^好，{name}。只存在这台浏览器里——什么都不会离开这页——说「忘记我的名字」即可清除。^{name}さん、承知しました。このブラウザにだけ保ち、ページの外へは出ません。「名前を忘れて」で消えます。
nameForgot^Forgotten. I never wrote it anywhere but here.^忘了。我只写在这里，别处都没有。^忘れました。ここ以外のどこにも書いていません。
nameNone^There was no name to forget — you never told me one.^没有名字可忘——你从没告诉过我。^忘れる名前がありません——聞いていませんから。
nameIs^You asked me to call you {name}.^你让我叫你{name}。^{name}さんとお呼びするように言われています。
nameUnknown^I do not know your name — I only keep what you tell me to. Say “call me …” and I will, in this browser only.^我不知道你的名字——我只记你让我记的。说「叫我……」，我就记住，只在这台浏览器里。^お名前は知りません——言われたことだけを覚えます。「〜と呼んで」と言えば、このブラウザの中だけで覚えます。
chipForgetName^forget my name^忘记我的名字^名前を忘れて
bibleContinue^You were at {ref}. Opening the book on the page you left.^你读到{ref}。翻开书，回到你停下的那一页。^{ref}まで読んでいました。開いていた頁で本を開きます。
bibleNoPlace^The book has not been opened in this browser yet — it opens at Genesis 1. Your page is remembered from then on.^这台浏览器里还没翻开过这本书——它从创世记第一章开始。之后会记住你读到的页。^このブラウザでは本はまだ開かれていません——創世記 1 章から開きます。以後は頁を覚えます。
fromRecords^this browser’s own records^这台浏览器的记录^このブラウザの記録
whereRoom^You are in {room}.^你在{room}。^{room}にいます。`,`card^{label} — {hint}. It lives in the {wing} wing. {body}^{label}——{hint}。在{wing}区。{body}^{label}——{hint}。{wing}にあります。{body}
cardNone^I could not match that to a card. The deck has {n} cards across six wings — say “open Markets” or ask for a card by name.^没找到对应的卡片。牌桌有 {n} 张卡，分六区——说「打开市场」或按名字找卡。^それに合うカードが見つかりません。デッキには六つの棟に {n} 枚のカードがあります——「市を開いて」や、カード名でどうぞ。`,`bibleOpen^Opening the Bible at {ref}.^打开圣经 {ref}。^聖書の {ref} を開きます。
bibleVerse^{ref} — “{text}”^{ref}——「{text}」^{ref}——「{text}」
bibleSearch^{total} verses contain {words}. First: {ref} — “{text}”^{total} 节经文含有{words}。第一处：{ref}——「{text}」^{words} を含む聖句は {total} 節。最初：{ref}——「{text}」
bibleSearchNone^No verse in the {translation} contains {words}.^{translation}里没有一节含有{words}。^{translation}に {words} を含む聖句はありません。`,`bibleSearchNoneEither^No verse contains {words} — I looked in the {translation} and the {from}.^没有一节含有{words}——朕查了{translation}和{from}。^{words} を含む聖句はない——{translation}と{from}を引いた。
bibleProgress^You have read {read} of 1189 chapters — {percent}% of the Bible. Progress is kept in this browser only.^你已读 1189 章中的 {read} 章——全书的 {percent}%。进度只存在本浏览器。^1189 章中 {read} 章を読みました——全体の {percent}%。進捗はこのブラウザにだけ保存されます。
bibleAbout^Three whole Bibles are shipped with the estate — the King James (31,102 verses), 和合本简体 (31,103) and 口語訳 (30,629) — 66 books, 1,189 chapters each, all public domain, read from this site and never fetched from anyone else. Open it from the ⋮ menu; it reopens on the page you left.^屋敷自带三部完整圣经——英王钦定本（31,102 节）、和合本简体（31,103 节）、口語訳（30,629 节）——各 66 卷 1,189 章，全部公有领域，从本站读取，不向他人索取。从 ⋮ 菜单打开，会回到你上次的那一页。^屋敷には聖書が三つ丸ごと入っています——欽定訳（31,102 節）、和合本简体（31,103 節）、口語訳（30,629 節）——それぞれ 66 巻 1,189 章、すべてパブリックドメインで、このサイトから読み、他所からは取りません。⋮ メニューから開け、閉じたページで再び開きます。`,`quote^“{text}” — {from}^「{text}」——{from}^「{text}」——{from}
quoteNone^The library has nothing that matches that author and topic together. It holds {authors}.^书库里没有同时符合这位作者和这个主题的句子。书库收录：{authors}。^その著者と主題の両方に合う言葉は書庫にありません。書庫にあるのは {authors}。
libraryAbout^The library holds {lines} lines from {works} works — {authors} — {standalone} of which stand on their own. All public-domain translations, vendored once and never fetched at runtime. Musashi and Hagakure have no public-domain English translation, so their lines are rendered by the estate and say so. Topics are matched by keyword, which is a rough sort.^书库有 {works} 部作品、{lines} 行——{authors}——其中 {standalone} 行可独立成句。全是公有领域译本，一次收录，运行时不联网。宫本武藏与《叶隐》没有公有领域英译，所以那些句子由屋敷自行转述，并如实标注。主题按关键词匹配，只是粗分。^書庫には {works} 作品 {lines} 行——{authors}——うち {standalone} 行が単独で成り立つ言葉です。すべてパブリックドメインの訳で、一度だけ取り込み、実行時には取りに行きません。武蔵と『葉隠』はパブリックドメインの英訳がないため、屋敷が言葉にし、そう明記しています。主題はキーワード照合で、大まかな分類です。
renderedNote^ (rendered by the estate, not a translation)^（屋敷转述，非译文）^（屋敷による言い換え、訳ではありません）`,`formula^{name}: {expr} — {note}^{name}：{expr}——{note}^{name}：{expr}——{note}
formulaNone^That is not on the formula scroll. It carries: {list}.^公式卷上没有这个。卷上有：{list}。^それは公式の巻物にありません。あるのは：{list}。
syllabus^The syllabus, in order: {list}. Maths before frameworks; tick a step when you could teach it.^课程顺序：{list}。先数学后框架；能教会别人时再打勾。^シラバスの順：{list}。フレームワークより先に数学を。人に教えられるようになったら印を。
tokens^About {tokens} tokens ({chars} characters, {words} words). A character-class heuristic, ±15% — not a tokeniser.^约 {tokens} 个 token（{chars} 字符，{words} 词）。按字符类别估算，±15%——不是分词器。^およそ {tokens} トークン（{chars} 文字、{words} 語）。文字種による概算で ±15%——トークナイザではありません。`,`page^This is the Kamisato estate — a front door for an IIS server that shows the garden and real measurements instead of a stock welcome page: clocks, FX, stocks, the public IP and weather, a tea room with Ayaka, a library of the stoics and the sword schools, and three whole Bibles.^这里是神里家的屋敷——一台 IIS 服务器的门面，用庭园和真实观测取代了默认欢迎页：时钟、汇率、股价、公开 IP 与天气，有绫华的茶室，斯多葛与剑术流派的书库，以及三部完整圣经。^ここは神里の屋敷——IIS サーバーの玄関で、既定の歓迎ページの代わりに庭と本物の観測を見せます：時計、為替、株価、公開 IP と天気、綾華のいる茶室、ストア派と剣術流派の書庫、そして三つの聖書。
can^Read live clocks, FX, stocks, place and weather; study with twenty tools in the Study, Lab and Desk wings; sit in the tea room and play Go, chess or Matcha Match; raise plants and play seven games in the courtyard’s pavilion; relax in the Wind-chime Garden; teleport between the rooms on the estate map; read the Bible in three languages; browse and star lines from the library; and put the whole thing on a phrase at the door. All of it runs in this browser.^看实时时钟、汇率、股价、位置与天气；用学·工房·机三区的二十个工具学习；在茶室下围棋、国际象棋或玩抹茶配对；在庭院的亭子里养植物、玩七个游戏；在风铃庭静坐；用屋敷地图在房间之间传送；读三种语言的圣经；浏览并收藏书库的句子；还能在门上放一句话。全部在本浏览器里运行。^生きた時計、為替、株価、位置と天気を読む。学・工房・机の三棟にある二十の道具で学ぶ。茶室で囲碁、チェス、抹茶あわせを遊ぶ。中庭の東屋で草木を育て、七つの遊びを楽しむ。風鈴の庭でくつろぐ。屋敷の地図で部屋のあいだをワープする。三か国語の聖書を読む。書庫の言葉を眺めて星をつける。門に一言を掲げる。すべてこのブラウザの中で動きます。
purpose^It greets visitors at the server’s door with hospitality and without fake numbers, in the manner of the Kamisato house.^它在服务器门口以待客之道迎接来访者，不用虚假数字——神里家的风格。^サーバーの戸口で、偽りのない数字とおもてなしで来訪者を迎えるためです。神里の家風です。
numbers^Yes. Every figure is a live feed or a dated capture labelled as such. When a feed fails you see its real status — 429, ERR, “n/a without /api” — and a Retry, never a placeholder, never a random walk, never an invented IP.^是的。每个数字都是实时源或标明日期的快照。信息源失败时你会看到真实状态——429、ERR、「n/a without /api」——和重试按钮，绝不是占位符、随机游走或编造的 IP。^はい。数字はすべてライブか、日付を明記した記録です。フィードが落ちたら本当の状態——429、ERR、「n/a without /api」——と再試行が出ます。仮の値も、乱数も、作った IP もありません。
shortcuts^⌘/Ctrl+K or / opens the palette; ? the handbook; m the estate map; 1–7 pick a wing; [ and ] step wings; ← → stroll the cards, then p pins, x hides, , and . move; Space is BANKAI; Esc unwinds a layer and finally returns to the door. In the Bible ← → turn pages.^⌘/Ctrl+K 或 / 打开命令面板；? 手册；m 屋敷地图；1–7 选区；[ ] 切区；← → 逐卡浏览，然后 p 固定、x 隐藏、, . 移动；空格是 BANKAI；Esc 一层层退出，最后回到正门。圣经里 ← → 翻页。^⌘/Ctrl+K か / でパレット、? で手引き、m で地図、1–7 で棟、[ ] で棟送り、← → でカード巡り、そして p で留める、x で隠す、, . で動かす。スペースは BANKAI。Esc は一枚ずつ閉じ、最後は正門へ。聖書では ← → でページをめくります。
flags^Address flags: ?view=overview|network|markets|study|lab|desk|all, ?card=<id>, ?tea=1, ?door=1, ?map=1, ?courtyard=1 (&game=terrarium|sakura|koi|sweeper|slide|catch|tetris|sudoku|record), ?offline=1, ?quiet=1, ?palette=1, ?help=1, ?ask=1 or ?ask=<a question>, ?period=morning|afternoon|night (screenshots only).^地址参数：?view=overview|network|markets|study|lab|desk|all、?card=<id>、?tea=1、?door=1、?map=1、?courtyard=1（&game=terrarium|sakura|koi|sweeper|slide|catch|tetris|sudoku|record）、?offline=1、?quiet=1、?palette=1、?help=1、?ask=1 或 ?ask=<问题>、?period=morning|afternoon|night（仅截图用）。^アドレスのフラグ：?view=overview|network|markets|study|lab|desk|all、?card=<id>、?tea=1、?door=1、?map=1、?courtyard=1（&game=terrarium|sakura|koi|sweeper|slide|catch|tetris|sudoku|record）、?offline=1、?quiet=1、?palette=1、?help=1、?ask=1 または ?ask=<質問>、?period=morning|afternoon|night（スクリーンショット用）。
privacy^Nothing you type here leaves this browser. Notes, deadlines, grades, starred lines, Bible progress and this conversation live in localStorage under ayaka_* keys; the Estate backup card in the Desk wing exports and restores all of it. The only outbound calls are the live feeds (FX, stocks, geo, weather, and /api/status on a Node host), and “Work offline” stops those.^你在这里输入的内容不会离开本浏览器。笔记、截止日期、成绩、收藏的句子、圣经进度和这段对话都存在 localStorage 的 ayaka_* 键下；机区的「屋敷备份」卡可导出和恢复全部。唯一的外发请求是实时源（汇率、股票、地理、天气，以及 Node 主机上的 /api/status），「离线工作」会停止它们。^ここで打ったものはこのブラウザから出ません。メモ、締切、成績、星をつけた言葉、聖書の進捗、この会話は localStorage の ayaka_* に置かれ、机の「屋敷のバックアップ」カードで書き出しと復元ができます。外へ出る通信はライブフィード（為替、株価、位置、天気、Node ホストの /api/status）だけで、「オフラインで動く」で止まります。
games^In the tea room: Go on a 9×9 board (capture, suicide and ko are enforced), chess against a hand-written engine in a worker, and Matcha Match, a memory table; strength 500–2700 Elo in Settings. In the courtyard’s pavilion: the terrarium (six plants in real time), Sakura 2048, the koi, the lantern sweeper, the picture puzzle, petal catch, the falling blocks and sudoku, with the record book keeping every round. Say “take me to the courtyard”.^茶室里：9×9 围棋（提子、自杀、劫都按规则）、对手写引擎的国际象棋，以及记忆游戏「抹茶配对」；棋力 500–2700 Elo 在设置里调。庭院的亭子里：玻璃花房（六株植物实时生长）、樱花 2048、锦鲤、灯笼扫雷、拼图、接花瓣、落方块和数独，还有记录册记下每一局。说「带我去庭院」。^茶室では：9×9 の囲碁（取り・自殺手・コウを判定）、手書きエンジンとのチェス、神経衰弱の「抹茶あわせ」；強さは設定で 500〜2700 Elo。中庭の東屋では：テラリウム（六株を実時間で）、桜 2048、鯉、灯籠さがし、絵合わせ、花びら受け、積み木、数独。記録帳がどの一局も記します。「中庭へ連れて行って」と言ってください。
phrases^The door shows one line at a time under the greeting: your own, the 150 built-in ones (a hundred King James verses and fifty stoic and sword-school lines, no names on them), both, or only what you have starred. Hold to pause, tap either half or ← → to step. Set it in Settings.^门上问候语下方一次显示一句：你自己的、内置的 150 句（一百句英王钦定本经文加五十句斯多葛与剑术流派的话，不署名）、两者都有，或只显示你收藏的。按住暂停，点任一半或 ← → 切换。在设置里选。^門の挨拶の下に一行ずつ：自分の言葉、内蔵の 150 行（欽定訳の聖句が百、ストア派と剣術流派の言葉が五十、名前なし）、その両方、または星をつけたものだけ。長押しで止まり、左右のタップか ← → で送ります。設定で選べます。
voiceAbout^Ayaka’s lines are pre-recorded MP3s in English, 中文 and 日本語 (public Microsoft Neural voices). Nothing is synthesised at runtime; a line with no clip stays silent rather than speaking in a different voice. I have no voice at all — I only write.^绫华的台词是预先录好的 MP3，英文、中文、日文各一套（公开的微软 Neural 声音）。运行时不合成；没有音频的句子保持沉默，不会换一个声音说。我没有声音——只会写字。^綾華の台詞は英語・中文・日本語であらかじめ録音した MP3（公開の Microsoft Neural 音声）です。実行時の合成はなく、音声のない行は別の声で話さず黙ります。私には声がありません——書くだけです。
handbook^{term} — {body}^{term}——{body}^{term}——{body}
gardenEmpty^The terrarium is empty — six plots waiting in the courtyard’s pavilion. {blooms}^玻璃花房空着——庭院亭子里有六块地等着。{blooms}^テラリウムは空です——中庭の東屋で六つの区画が待っています。{blooms}
garden^In the terrarium: {list}. {blooms}^玻璃花房里：{list}。{blooms}^テラリウムには：{list}。{blooms}
gardenPlant^{name} {stage}, water {water}%^{name}{stage}，水 {water}%^{name}は{stage}、水 {water}%
gardenBlooms^{n} blooms picked so far.^至今采了 {n} 朵花。^これまでに {n} 輪摘みました。
gardenDry^ — thirsty^——缺水^——水切れ
scores^Your bests — Sakura 2048: {sakura} · Koi: {koi} petals · Lantern sweeper: {wins} wins{sweeper} · Picture puzzle: {slide} · Petal catch: {catch}.^你的最佳——樱花 2048：{sakura} · 锦鲤：{koi} 片 · 灯笼扫雷：{wins} 胜{sweeper} · 拼图：{slide} · 接花瓣：{catch}。^あなたの最高——桜 2048：{sakura} · 鯉：{koi} 枚 · 灯籠さがし：{wins} 勝{sweeper} · 絵合わせ：{slide} · 花びら受け：{catch}。
scoresNone^No scores yet — the pavilion is in the courtyard.^还没有分数——亭子在庭院里。^まだ記録はありません——東屋は中庭に。
chipCourtyard^Take me to the courtyard^带我去庭院^中庭へ連れて行って
tour^The estate has six map destinations, including the deck. The front door greets you; the deck behind it is six wings of cards — live numbers, study tools, the desk. The tea room (茶, behind its phrase) is Ayaka, tea, Go, chess and Matcha Match. The courtyard is the garden pavilion: a terrarium, seven games and the record book. The White Heron Room is the living room of the main house — a scroll, the household ledger, the hour. The Wind-chime Garden is the small pavilion left of the pond beside the bamboo, with autumn glass and summer blue Rimuru chimes. The map (m) teleports between them. The ⋮ menu holds the Bible, the library wall, settings; ⌘K searches everything. Ask either of us anything on the way.^屋敷有六个地图目的地，包括牌桌。正门迎客；后面的牌桌是六区卡片——实时数据、学习工具、书桌。茶室（茶，暗语之后）有绫华、茶、围棋、国际象棋和抹茶配对。庭院是花园亭子：玻璃花房、七个游戏和记录册。白鹭之间是本馆的起居之室——挂轴、帐簿、时辰。风铃庭在池塘左侧、竹林旁的小亭，有秋日玻璃和夏日蓝色利姆露风铃。地图（m）在它们之间传送。⋮ 菜单里有圣经、语录墙、设置；⌘K 搜索一切。一路上随时问我们。^屋敷にはデッキを含め六つの行き先があります。正門が迎え、その奥のデッキは六つの棟のカード——生きた数字、学びの道具、机。茶室（茶、合言葉の先）には綾華、お茶、囲碁、チェス、抹茶あわせ。中庭は東屋：テラリウム、七つの遊び、記録帳。白鷺の間は本館の居間——掛軸、帳、時。風鈴の庭は池の左、竹林のそばの小さな東屋で、秋のガラスと夏の青いリムルの風鈴があります。地図（m）で行き来できます。⋮ メニューに聖書、言葉の壁、設定；⌘K で何でも検索。道すがら、何でも聞いてください。
whatsnew^Newest: the Wind-chime Garden, the sixth map destination. Autumn glass and summer blue Rimuru chimes have four times of day, gradual light, contact-driven sound with mute, manual or ten-minute design changes behind the doors, and a quiet display mode.^最新：风铃庭，地图上的第六个目的地。秋日玻璃和夏日蓝色利姆露风铃拥有四个时辰、渐变光线、随铃舌接触而响的声音及静音，可手动或每十分钟在门后切换造型，还有安静的展示模式。^新しく加わったのは風鈴の庭、地図の六つ目の行き先です。秋のガラスと夏の青いリムルの風鈴に、四つの時刻、ゆっくり移る光、舌の接触で鳴る音と消音、扉に覆われた手動または十分ごとの意匠切り替え、静かな表示モードがあります。
maker^Kellen Quek created and directed this estate. Claude led implementation; Astra / Codex contributed art, reviews, integration and delivery. The credits tell its story.^Kellen Quek 创作并指导这座屋敷。Claude 主导实现；Astra / Codex 参与美术、审查、集成与交付。制作名单记录了这段故事。^Kellen Quek がこの屋敷を発案し、制作を指揮しました。Claude が実装を主導し、Astra / Codex が美術、レビュー、統合、公開に携わりました。クレジットで歩みを読めます。
ai^No model is behind us — no ChatGPT, no Claude, nothing called over the wire. We are hand-written rules in this page’s own code, reading this page’s own data, and we say so under every answer. When the estate is connected, Wu Ze Tian may consult the public encyclopaedia, and says that too.^我们背后没有模型——不是 ChatGPT，不是 Claude，也不调用任何远端。我们是这页代码里手写的规则，读这页自己的数据，每个答案下面都写明出处。屋敷联网时，武则天可以查阅公开百科，也会如实注明。^私たちの後ろにモデルはいません——ChatGPT でも Claude でもなく、回線の向こうに何も呼びません。このページのコードに手書きされたルールで、このページのデータを読み、どの答えにも出所を添えます。つながっていれば武則天が公開の百科を引き、それも明記します。
translate^The tea room has a translator: the TRANSLATE bar under Ayaka’s line turns what you type into English, 中文 and 日本語 (MyMemory, when connected; it says unavailable rather than guessing). I only switch the estate’s language — say “switch to 日本語”.^茶室有翻译器：绫华台词下方的 TRANSLATE 栏能把你输入的文字译成英文、中文、日文（联网时用 MyMemory；连不上会说不可用，而不是乱猜）。我只负责切换屋敷语言——说「切换到中文」。^茶室に翻訳があります：綾華の台詞の下の TRANSLATE バーが、打った言葉を英語・中文・日本語に（つながっていれば MyMemory；だめなら当てずに「使えない」と言います）。私は屋敷の言語を切り替えるだけ——「日本語にして」と。
mapfacts^Six waypoints: the front gate, the main hall (the cards), the White Heron Room (the living room: a scroll, the ledger, the hour), the tea room (it asks for its phrase), the courtyard and the Wind-chime Garden (the small pavilion left of the pond beside the bamboo). Teleport also returns you to the place you are already in. Press m or 地図, pick a waypoint to see it as it looks now, then Teleport. Drag and scroll to look around; places you have not visited wear a “new” tag.^六个传送点：正门、本馆（卡片）、白鹭之间（起居之室：挂轴、帐簿、时辰）、茶室（要暗语）、庭院和风铃庭（池塘左侧、竹林旁的小亭）。传送也能把你送回已在的地方。按 m 或 地図，选一个传送点看它此刻的样子，然后传送。拖动和滚动查看；没去过的地方带着「未到」标签。^目印は六つ：正門、本館（カード）、白鷺の間（居間：掛軸、帳、時）、茶室（合言葉が要る）、中庭、風鈴の庭（池の左、竹林のそばの小さな東屋）。m か 地図 を押し、目印を選んで今の様子を見て、ワープ。ドラッグとスクロールで見回せます。未訪問の場所には「未踏」の札。
game_sakura^Sakura 2048: arrow keys or swipe to slide the whole board; two matching blooms join into the next. Undo takes back one move; New board starts over; Escape or the ← Pavilion button leaves. Reach 桜 (2048).^樱花 2048：方向键或滑动移动整个棋盘；两朵相同的花合成下一级。撤销退回一步；新棋盘重开；退出键或「← 回亭」离开。达到 桜（2048）。^桜 2048：矢印キーかスワイプで盤全体を滑らせ、同じ花二つが次の花に。戻すは一手前へ、新しい盤でやり直し、エスケープキーか「← 東屋へ」で退出。桜（2048）を目指して。
game_koi^Koi: arrow keys, a swipe on the pond, or the buttons steer; the fish cannot turn back on itself. Each petal grows it and quickens it; the walls end it. Escape or ← Pavilion leaves.^锦鲤：方向键、在池上滑动或按钮转向；鱼不能掉头。每片花瓣让它变长变快；撞壁即结束。退出键或「← 回亭」离开。^鯉：矢印キー、池のスワイプ、ボタンで舵取り。魚は反転できません。花びらごとに伸びて速くなり、壁で終わり。エスケープキーか「← 東屋へ」で退出。
game_sweeper^Lantern sweeper: click a stone to lift it; a number counts the lanterns touching it; right-click or long-press marks a stone. The first stone is never a lantern. Lift every safe stone to win; the clock runs while a field is live.^灯笼扫雷：点击掀开石头；数字是相邻灯笼数；右键或长按做标记。第一块石头绝不是灯笼。掀开所有安全石头即胜；进行中计时。^灯籠さがし：石をクリックで上げ、数字は隣の灯籠の数、右クリックか長押しで印。最初の石は灯籠ではありません。安全な石をすべて上げれば勝ち。盤が生きている間は時計が動きます。
game_slide^Picture puzzle: click a tile beside the hole to slide it; the whole painting sits beside the board as the target. 3×3 or 4×4; Shuffle changes the painting. Fewest moves wins.^拼图：点击空位旁的方块滑动；整幅画在棋盘旁作为目标。3×3 或 4×4；打乱会换一幅画。步数越少越好。^絵合わせ：空きの隣のタイルをクリックして滑らせる。盤の横に絵全体が目標として。3×3 か 4×4、シャッフルで絵が変わる。手数が少ないほど良い。
game_catch^Petal catch: move the basket with the pointer, a drag, or ← →; catch the pink petals, keep snowflakes out (each costs one). A round is 20, 30 or 45 seconds, your choice.^接花瓣：用指针、拖动或 ← → 移动篮子；接粉色花瓣，别让雪花进篮（每片扣一分）。一局二十、三十或四十五秒，由你选。^花びら受け：ポインタ、ドラッグ、← → で籠を動かし、桃色の花びらを受けて、雪は入れない（一点減）。一回は二十・三十・四十五秒から選べます。
game_terrarium^Terrarium: Plant picks a species; Water tops it up (water runs out in real hours); a plant grows only while watered, faster in afternoon light and in spring. Pick the bloom when it is full; Uproot clears a plot. It keeps going while the page is closed.^玻璃花房：「种下」选品种；「浇水」补水（水会在真实小时里流失）；植物只在有水时生长，下午光照和春天更快。盛开时采摘；「拔除」清空。关掉页面也照样生长。^テラリウム：植えるで種類を選び、水やりで補う（水は実時間で減る）。水がある間だけ育ち、午後の光と春は速い。満開になったら摘み、抜くで空ける。ページを閉じても進みます。
game_go^Go, in the tea room: 9×9, capture by surrounding, no suicide, ko is enforced. Two passes end it and open the counting, where you click any dead group to lift it off; area scoring with komi 6.5, so no draws. Six problems sit beside the free game. Type go in the CMD bar; strength is set in Settings (500–2700 Elo).^围棋在茶室：9×9，围而提子，禁自杀，判劫。连续两次虚手结束并进入点目：点一下死子的那块，便把它提走；数子法，贴目 6.5，故无和棋。自由对局旁另有六道死活题。在 CMD 栏输入 go；棋力在设置里调（500–2700 Elo）。^囲碁は茶室で：9×9、囲んで取り、自殺手なし、コウあり。二回パスで終局して整地に入り、死んだ石は一団ずつ押して上げる。中国ルールの地、コミ 6.5 なので引き分けはない。自由対局のほかに詰碁が六題。CMD バーに go と打つ。強さは設定で（500〜2700 Elo）。
game_chess^Chess, in the tea room: tap a white piece, then a square; a pawn reaching the last rank asks what it becomes. There is a clock if you want one (3+2 up to 15+10), a scoresheet you can click to look back, both trays of taken pieces, and the last twelve games are kept to be stepped through and reviewed. The engine runs in a worker so the room stays smooth. Type chess in the CMD bar; strength in Settings.^国际象棋在茶室：先点白子，再点格子；兵到底线会问你要升变成什么。想计时就有钟（3+2 到 15+10），棋谱可点着回看，两边被吃的子都摆出来，最近十二局会留着，可以逐步回放与复盘。引擎在 worker 里跑，房间不卡。在 CMD 栏输入 chess；棋力在设置里调。^チェスは茶室で：白の駒を押してから升を押す。ポーンが最終段に着いたら、何になるかを尋ねる。時計もある（3+2 から 15+10）。棋譜は押せば戻って眺められ、取った駒は両側とも並び、直近十二局は残るので一手ずつ並べ直して振り返れる。エンジンはワーカーで動くので部屋は軽い。CMD バーに chess と打つ。強さは設定で。
game_matcha^Matcha Match, in the tea room: turn two cards; a pair stays up; clear the table. Type matcha in the CMD bar.^抹茶配对在茶室：翻两张牌；配对的留着；清空桌面。在 CMD 栏输入 matcha。^抹茶あわせは茶室で：二枚めくり、揃えば残り、卓を空にする。CMD バーに matcha と打つ。
game_konpira^Konpira Fune Fune, in the tea room: a bowl between you and Ayaka. On your beat, open hand on the bowl if it is there (Space or tap the bowl), fist on the table if she has taken it (F). The chant quickens every verse; a wrong or late hand ends the round. Type konpira in the CMD bar.^金比罗船船在茶室：你和绫华之间一只碗。轮到你时，碗在就手掌按碗（空格或点碗），她拿走了就拳头敲桌（F）。每节歌加快；出错或迟了就结束这一局。在 CMD 栏输入 konpira。^こんぴらふねふねは茶室で：綾華とのあいだに碗。あなたの拍で、碗があれば手のひらを碗に（スペースか碗をタップ）、取られていれば拳を卓に（F）。歌は節ごとに速くなり、間違いか遅れで一巻の終わり。CMD バーに konpira と。
game_general^In the courtyard: Sakura 2048, Koi, Lantern sweeper, Picture puzzle, Petal catch and the Terrarium — Escape or ← Pavilion leaves any of them. In the tea room: Go, chess, Matcha Match and Konpira Fune Fune. Ask “how do I play koi” for one of them.^庭院里：樱花 2048、锦鲤、灯笼扫雷、拼图、接花瓣和玻璃花房——退出键或「← 回亭」可离开。茶室里：围棋、国际象棋、抹茶配对和金比罗船船。问「锦鲤怎么玩」可了解某一个。^中庭では：桜 2048、鯉、灯籠さがし、絵合わせ、花びら受け、テラリウム——エスケープキーか「← 東屋へ」で出られます。茶室では：囲碁、チェス、抹茶あわせ、こんぴらふねふね。「鯉の遊び方」と聞けば一つずつ。
calc^{expr} = {result}^{expr} = {result}^{expr} = {result}
calcNone^I could not read that as a sum. Try “12 × 34”, “sqrt 2”, “15% of 80”.^这个算式朕读不懂。试试「12 × 34」「sqrt 2」「15% of 80」。^その式は読めない。「12 × 34」「sqrt 2」「15% of 80」と試せ。
convert^{value} {from} = {result} {to}^{value} {from} = {result} {to}^{value} {from} = {result} {to}
paperNone^Nothing in {papers} carries “{words}”. I read what is in a document; I do not tell you what it means.^{papers}里没有「{words}」。朕只读文件里有的字，不替它作解。^{papers}に「{words}」はない。文書にある字を読むだけで、意味づけはしない。
paperHits^{total} line{s} in {papers} mention “{words}”. {lines}^{papers}中有 {total} 行提到「{words}」。{lines}^{papers}に「{words}」を含む行が {total}。{lines}
paperNoneHeld^You have given me no documents. Drop a text, markdown, CSV or JSON file on this panel and I will read it here — it stays in this browser.^你还没给朕文件。把 txt、markdown、csv 或 json 拖到这面板上，朕在本机读它——不外传。^まだ文書を預かっていない。txt・markdown・csv・json をこのパネルに落とせ。この端末の中だけで読む。
paperList^I am holding {list}. They stay in this browser and go when the tab closes.^朕手上有{list}。只在本浏览器，关掉标签就没了。^預かっているのは{list}。この browser の中だけ、タブを閉じれば消える。
paperForgot^Forgotten. Nothing of them is kept.^已忘。什么也没留下。^忘れた。何も残していない。
*
*
*
fromPaper^your document · {name}^你的文件 · {name}^あなたの文書 · {name}
paperDrop^Drop a document here^把文件拖到这里^文書をここに落とす`,`*
*
*
*`,`*
*
*
*`,`teachAsk^Tell me what to say when someone asks “{q}”, and I will keep it in this browser and read it back as yours. Say “cancel” to drop it.^告诉朕：有人问「{q}」时该怎么答。朕把它存在这台浏览器里，读回来时会说明是你教的。说「取消」就作罢。^「{q}」と聞かれたとき何と答えるか言え。この browser に留め、読み返すときは「あなたが教えたこと」と断る。やめるなら「キャンセル」と言え。
teachHow^Teach me like this: “remember: bin day = Tuesday”, or ask me something I cannot answer and take the offer under it. A taught answer lives in this browser, is read back only where I have nothing of my own to say, and always carries your name on it — I do not learn, and no rule of the house changes.^这样教朕：「记住：倒垃圾日 = 星期二」，或者问一个朕答不上的问题，再点下面的提议。教过的答案只存在这台浏览器，只在朕自己无话可说时才读回，并且每次都注明是你教的——朕不学习，屋敷的规则也不会改。^こう教えよ：「覚えて：ゴミの日 = 火曜」。あるいは答えられない問いを出し、その下の申し出を受けよ。教わった答えはこの browser にだけ残り、こちらに言うことが何もないときだけ読み返し、必ず「あなたが教えたこと」と断る——学習はしないし、屋敷の規則も変わらない。
teachSaved^Kept. Ask “{q}” again and I will read back your words. It stays in this browser, goes into the estate backup with everything else, and I will always say it came from you. Say “forget what I taught you about {q}” to drop it.^记下了。再问「{q}」，朕就把你的话读回来。它只在这台浏览器里，随屋敷备份一起走，读回时朕会说这是你教的。想删就说「忘记我教你的{q}」。^留めた。もう一度「{q}」と問えば、あなたの言葉を読み返す。この browser の中だけに在り、屋敷の控えと共に移り、読むときは必ずあなたのものと断る。消すなら「{q}について教えたことを忘れて」と言え。
teachReplaced^Kept, in place of what you taught me before about “{q}”. One question, one answer.^记下了，替掉你先前教的「{q}」。一问一答，不留两个。^留めた。「{q}」について前に教わったものと入れ替えた。一つの問いに一つの答え。
teachCancelled^Dropped. Nothing was kept.^作罢。什么也没存。^やめた。何も留めていない。
teachTooShort^That is not enough to keep. Give me a question of more than one character and an answer to go with it.^这样存不住。给朕一个像样的问题，和它的答案。^それでは留められない。一文字より長い問いと、その答えを寄越せ。
teachFull^Kept — and I was already holding {max}, so the oldest note went to make room.^记下了——朕本已存了 {max} 条，最旧的那条腾了位子。^留めた——すでに {max} 件あったので、最も古いものが場所を譲った。
teachList^You have taught me {n} thing{s}: {list}^你教过朕 {n} 条：{list}^あなたが教えたのは {n} 件：{list}
teachListEmpty^You have taught me nothing yet. Say “remember: bin day = Tuesday”, or ask me something I cannot answer and take the offer under it.^你还什么都没教朕。说「记住：倒垃圾日 = 星期二」，或者问一个朕答不上的问题，再点下面的提议。^まだ何も教わっていない。「覚えて：ゴミの日 = 火曜」と言うか、答えられない問いを出してその下の申し出を受けよ。
teachForgot^Forgotten: “{q}”. I no longer have an answer for it.^已忘：「{q}」。朕手上再没有它的答案。^忘れた：「{q}」。もうその答えは持たない。
teachForgotNone^You never taught me that, so there is nothing to forget.^你没教过朕这个，无从忘起。^それは教わっていない。忘れるものがない。
teachForgotAll^All {n} of your notes are gone. Nothing of them is kept.^你的 {n} 条笔记全没了，一点不留。^あなたの控え {n} 件はすべて消えた。何も残していない。
fromTaught^taught by you · {when} — your words, not the estate’s^你教的 · {when}——是你的话，不是屋敷的^あなたが教えたこと · {when}——屋敷ではなく、あなたの言葉
chipTeach^Teach me the answer^教朕怎么答^答えを教える
chipTaught^What have I taught you?^我教过你什么？^何を教えた？
schoolNone^I can work that kind of question only when I can do it exactly — equations, factorising, differentiating and integrating polynomials, sequences, statistics, counting, HCF and LCM, Pythagoras, interest. This one I cannot do, and I will not guess at a student’s answer.^朕只在能算准时才作答——方程、因式分解、多项式的微积分、数列、统计、排列组合、最大公因数与最小公倍数、勾股、利息。这一题朕做不了，也不会替学生瞎猜。^正確にできるものだけを解く——方程式、因数分解、多項式の微積分、数列、統計、順列組合せ、最大公約数と最小公倍数、三平方、利息。これは解けない。学生の答えを当てずっぽうで言うことはしない。
fromWorking^worked exactly · {topic}^精确演算 · {topic}^厳密に計算 · {topic}
convertNone^I convert length, area, mass, temperature, data, volume and speed — say “5 km in miles”, “800 cm² in m²”, “30 °C to °F”, “2 GB in MB”.^朕能换算长度、面积、质量、温度、数据、体积和速度——说「5 km in miles」「800 cm2 to m2」「30 c to f」「2 gb in mb」。^長さ・面積・質量・温度・データ・体積・速さを換算する——「5 km in miles」「800 cm2 to m2」「30 c to f」「2 gb in mb」と言え。
days^{date} is {n} days away ({weekday}).^{date} 还有 {n} 天（{weekday}）。^{date} まであと {n} 日（{weekday}）。
daysPast^{date} was {n} days ago ({weekday}).^{date} 是 {n} 天前（{weekday}）。^{date} は {n} 日前（{weekday}）。
daysToday^{date} is today.^{date} 就是今天。^{date} は今日だ。
weekday^{date} is a {weekday}.^{date} 是{weekday}。^{date} は{weekday}。
dateNone^I could not read a date in that. Try “2026-12-25”, “25 December”, or “12月25日”.^朕没读出日期。试试「2026-12-25」「25 December」或「12月25日」。^日付が読めない。「2026-12-25」「25 December」「12月25日」と試せ。
fromSums^arithmetic, exact^精确算术^厳密な計算
teaPhrase^The phrase is asked at the tea room’s door and it is yours to type, not mine to hand out — it is etiquette, not a secret, and a wrong one only makes the door wait. If you have forgotten it, the operator set it.^暗语在茶室门口才问，该由你来输入，不由我发放——这是礼数，不是机密，输错了门只是稍等片刻。忘了的话，是主人定的。^合言葉は茶室の入口で尋ねられ、打つのはあなたです。私が配るものではありません——礼儀であって秘密ではなく、間違えても門が少し待つだけ。忘れたなら、決めたのは主人です。
ayaka^Kamisato Ayaka, first daughter of the house — she receives visitors in the tea room, speaks in pre-recorded lines (English, 中文, 日本語), and will sit with you over Go, chess or Matcha Match. The room asks for its phrase at the door.^神里绫华，神里家的长女——她在茶室接待来客，用预先录好的台词说话（英文、中文、日文），并陪你下围棋、国际象棋或玩抹茶配对。茶室在门口要一句暗语。^神里綾華、神里家の長女——茶室で来客をもてなし、あらかじめ録った台詞（英語・中文・日本語）で話し、囲碁やチェス、抹茶あわせに付き合ってくれます。茶室は入口で合言葉を求めます。
lookup^{title} — {extract}^{title}——{extract}^{title}——{extract}
lookupNone^The encyclopaedia has no entry I could match to “{topic}”.^百科里找不到能对上「{topic}」的条目。^百科に「{topic}」に合う項目はありませんでした。
lookupFailed^I could not reach the encyclopaedia just now ({error}). Nothing was made up in its place.^刚才连不上百科（{error}）。没有用编造的内容代替。^いま百科に届きませんでした（{error}）。代わりに作った答えはありません。
textUnread^I could not read the estate’s own {what} just now ({error}). Rather than answer from memory, I would sooner say so — try again in a moment.^刚才读不到本宅的{what}（{error}）。与其凭印象作答，不如照实说——请稍后再试。^いま屋敷の{what}を読めませんでした（{error}）。記憶で答えるより、そう申し上げます——少し置いてお試しください。
textBible^Bibles^圣经^聖書
textLibrary^library^文库^文庫
fromLookup^{source} · fetched just now^{source} · 刚刚获取^{source} · たった今取得
chipOpenSource^Open the source^打开出处^出典を開く
*
fromLive^live^实时^ライブ
fromHandbook^handbook › {term}^手册 › {term}^手引き › {term}
fromClock^this device’s clock^本设备的时钟^この端末の時計
fromLibrary^library › {work}^书库 › {work}^書庫 › {work}
fromBible^{translation}^{translation}^{translation}
fromCode^written into the estate^写在屋敷代码里^屋敷のコードに書かれたもの
fromCard^card › {label}^卡片 › {label}^カード › {label}
fromGarden^your garden, kept in this browser^你的花园，存在这台浏览器里^このブラウザに残るあなたの庭
fromScores^your scores, kept in this browser^你的成绩，存在这台浏览器里^このブラウザに残るあなたの記録
fromBibleRead^your reading, kept in this browser^你的读经进度，存在这台浏览器里^このブラウザに残るあなたの読書記録
chipHelp^What can I ask?^能问什么？^何が聞ける？
chipTime^What time is it?^现在几点？^いま何時？
chipFx^USD rate^美元汇率^ドルのレート
chipWeather^Weather here^这里的天气^ここの天気
chipLive^What is live?^哪些是实时的？^どれがライブ？
chipQuote^Seneca on anger^塞内卡谈愤怒^セネカの怒りについて
chipOpenBible^Open it in the Bible^在圣经里打开^聖書で開く
chipAnother^Another one^再来一句^もう一つ
chipShortcuts^Keyboard shortcuts^快捷键^ショートカット
*
*
*
*
*
*`,`*
*
*
*
editWord^Edit^编辑^編集
forgetWord^Forget^忘记^忘れて
chipPlayGo^Play a game of Go^来一局围棋^囲碁を打とう
chipKoi^Take me to the koi^带我去看锦鲤^鯉のところへ連れて行って
chipWhereWasI^Where was I in the Bible?^我读到哪了？^どこまで読んだ？
chipHereRoom^What is this room for?^这个房间是做什么的？^この部屋は何のため？`].join(`
`));function r(t,r,i){return e(n,t,r,i)}export{n as SAY,r as say};