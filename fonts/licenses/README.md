# Estate handwriting

All fonts are locally served under the SIL Open Font License 1.1; individual copyright notices and complete licenses accompany this file.

- **Lora**, Cyreal: [official Google Fonts source](https://github.com/google/fonts/tree/main/ofl/lora). Readable English serif with calligraphic details, served locally as variable WOFF2. Chinese and Japanese body text use the bundled Noto Serif families; WenKai and Klee are reserved for headings.
- **LXGW WenKai Screen v1.522**, LXGW / Klee Project: [official release](https://github.com/lxgw/LxgwWenKai-Screen/releases/tag/v1.522). Chinese calligraphy with stronger strokes for screen reading.
- **Klee One SemiBold**, Klee Project / Fontworks: [official upstream](https://github.com/fontworks-fonts/Klee), [Google Fonts distribution](https://github.com/google/fonts/tree/main/ofl/kleeone). Japanese handwritten forms.

The two CJK web fonts retain the characters used across the complete estate source, multilingual credits and all bundled Bible books, plus kana and punctuation. No outlines or shaping features are changed. Existing Noto faces remain fallbacks for uncommon characters pasted into notes. The original installable fonts are not shipped. Courgette retains its complete character set.

Reproduce with `python3 scripts/vendor-calligraphy.py` after installing `fonttools` and `brotli` in a temporary Python environment. Google source versions are pinned; WenKai is pinned to v1.522. `coverage.json` records upstream/output SHA256, byte counts and coverage. Regenerate when adding text in a previously unused CJK character.

Courgette is preloaded. CJK fonts load only when their Unicode ranges are used. Existing arrival and language-transition readiness waits include `document.fonts.ready`. Large CJK assets remain under the existing service-worker first-use runtime cache policy; there is no new multi-megabyte eager precache. Literal code, keyboard chords and fixed-column game numerals retain clear monospace/system faces.
