# DCT — Department of Culture and Tourism, Abu Dhabi — Design System

The corporate brand design system for the **Department of Culture and Tourism – Abu Dhabi (DCT)**. It encodes DCT's colour, typography, logo, and layout standards as reusable tokens, components, and full-surface UI kits so that any agent can produce on-brand presentations, documents, dashboards, and web content.

> First mention in copy: **Department of Culture and Tourism – Abu Dhabi**; thereafter **DCT** is acceptable.

## Sources
- `uploads/DCT_AI_Brand_Reference_Updated.docx` — v1.7, March 2026. The authoritative rule set (colour, type, logo, presentations, documents, dashboards, writing style). Everything here derives from it.
- `uploads/DCT Corporate Guidelines - AUGUST 2025.pdf` and `…- colors.pdf` — the corporate guidelines (positioning, logo, colour, typography, imagery, graphic & layout systems).
- `uploads/DCT - Fonts.zip` — real licensed webfonts (Helvetica LT Pro English OTF + Helvetica Neue LT Arabic TTF), extracted to `assets/fonts/`.
- Six brandmark PNGs (horizontal/vertical × primary/black/white), copied to `assets/logos/`.

No codebase or Figma was provided; the system is built from the brand reference + real assets.

---

## Brand positioning (in brief)
DCT stewards Abu Dhabi's culture and heritage and grows it as a global tourism destination. The visual language is **clean, modern, Swiss-inspired**: strong hierarchy, generous whitespace, a warm desert-derived palette, and cinematic golden-hour imagery of Abu Dhabi's architecture, culture and people.

---

## CONTENT FUNDAMENTALS — how DCT writes
- **Voice:** clear, concise, professional, confident. Active voice. Institutional but warm — speaks on behalf of Abu Dhabi.
- **Person:** third-person / organisational ("Abu Dhabi welcomed…", "DCT is committed to…"). Not chatty first-person "we'll", not direct-address "you" marketing.
- **Spelling:** **British English** — colour, organisation, programme, centre, prioritise.
- **Casing:** Sentence case for body and most headings. Uppercase reserved for short eyebrow/section labels and document-type labels (e.g. `STRATEGIC PAPER`). Title is always *Department of Culture and Tourism – Abu Dhabi* (en-dash, not hyphen).
- **Length:** short sentences; bullets over paragraphs; clear section headings. Max 6 bullets per slide.
- **Emoji:** none. Not part of the brand.
- **Numbers:** present as crisp KPIs ("24M visitors", "+18%", "AED 11.2B"). Currency is AED.
- **Examples:** "Culture is the heart of Abu Dhabi." · "A living heritage, a global destination." · "Record cultural programming across museums and heritage sites."
- **Footer string:** `© Department of Culture & Tourism Abu Dhabi`.

---

## VISUAL FOUNDATIONS
**Colour.** Primary palette — **Dawn `#F77860`** (signature accent, must appear in every output; highlights/accents/dividers only — *never* body text or a full background), **Sandstone `#E3DCD3`** (dominant neutral, default content background), **Black `#1A1A1A`** (text, dark surfaces), **White `#F9F9F9`** (off-white page; never pure `#FFFFFF`). Secondary — **Stargaze `#4832B8`**, **Flamingo `#CD3151`**, **Palm `#1C9667`**; use **one at a time**, never mixed. Charts: Dawn primary, Black labels, one secondary for a second series.

**Typography.** **Helvetica LT Pro** (English) — Bold 700 headlines/CTAs, Roman 400 sub-heads, Light 300 body. **Helvetica Neue LT Arabic** for Arabic, matching the English weight, RTL. Max 3 weights per page; build hierarchy through **size, not added weights**. Character spacing always normal (`0`). Generous line spacing 1.2–1.5. Left-align body; centre only titles and hero statements.

**Layout.** Grid-based, Swiss. Strong hierarchy with one dominant element per surface. Generous margins/padding; breathing room over density. Logo top-right by default (white variant on dark); stacked logo top-centre only. Clear space around logo ≥ 2× wordmark x-height; min digital height 43px (125px on dashboards).

**Backgrounds.** Solid brand colours, not gradients. Dark (Black) for covers, section dividers, closing slides and dashboards; Sandstone or off-white for content. Imagery is full-bleed cinematic photography — architecture, culture, people, **golden-hour warm tones** — never generic stock. Dawn colour blocks for section dividers.

**Cards & surfaces.** Near-square corners (radius 0–8px; the brand is geometric). Subtle neutral shadows only — no coloured glows. White cards carry a faint shadow + Sandstone-line border; dark cards (`#2A2A2A`) carry none. The **Callout** device — narrow Dawn stripe + Sandstone fill — is the signature highlight.

**Motion.** Calm and functional: ease-out (`cubic-bezier(0.2,0,0,1)`), 120–320ms, simple fades/translates. No bounce, no decorative loops.

**States.** Hover: Dawn → Dawn-press `#E25E45`; neutral surfaces darken ~6%. Press: 1px downward nudge (no shrink). Focus: 3px Stargaze ring. Disabled: 40% opacity.

**Graphic system.** A geometric **supergraphic** — a diamond motif of rotated squares and quarter-circles in Black/Sandstone/Dawn/Stargaze — appears as a decorative marker in document headers/footers (rotated 270°/90°). It is *not* the logo. The **official corporate vector** is supplied at `assets/brand/supergraphics.svg` (`DCT_Corporate_Supergraphics_Master_rgb`) — tint it via CSS `mask` to recolour; never redraw it. See the **Supergraphic — Master Artwork** card.

---

## ICONOGRAPHY — the DCT pictogram system
DCT has a **proprietary pictogram system** (Corporate Guidelines, *Graphic system*), not an off-the-shelf icon font. Pictograms are **primary brand assets** and the brand's main storytelling device.

- **Hero shapes.** Every icon, pictogram, pattern and framing device is built from only **three shapes — Quadrant, Diamond, Square** — inspired by Abu Dhabi and **Al Sadu** weaving (DCT and partners "coming together as a collective").
- **Construction.** Built on a **7×7 base grid**. All three hero shapes must appear in every icon ("3 shapes in a row" rule). Build with **Dawn** (or Sandstone when the background is Dawn), **one secondary colour**, **white** as a palette cleanser, and **black** for definition — applied **symmetrically** (mirror left/right or top/bottom), optically balanced across **4 colours**, with no colour repeating **more than 3 cells in a row**.
- **Three uses.** *Storytelling* pictograms (values, emotional symbols); *Literal* pictograms (content & data — film, plane, dialogue, palm tree); *Numerals* (data viz, editorial, PowerPoint — **always use the supplied artwork files; never recreate**).
- **Colourways.** *Full colour* on colour backgrounds; *Transparency* over imagery (adjust white opacity — e.g. 100 / 60 / 30% — symmetrically across shapes).
- **No emoji.** Not part of the brand.

**Graphic system.** In addition to pictograms, an **A–Z pictogram alphabet** is supplied (`assets/brand/alphabet_color.png` + `alphabet_construction.png`; see the **Pictogram Alphabet** card) — display letterforms built from the hero shapes for large headlines/monograms only. Numeral artwork not yet supplied.

The `guidelines/` cards **Hero Shapes**, **Pictogram Construction**, and **Pictogram Types & Colourways** document this system; the geometric examples are CSS reconstructions of the *method*. **Production pictograms and numerals must use DCT's official artwork files** — request these for any real work.

Where purely functional UI icons are unavoidable (dashboards, forms) and no DCT icon or pictogram fits, use a thin geometric line set — **substitute: [Lucide](https://lucide.dev)** — and **flag the substitution**. Unicode marks (▲ ▼ · “ ”) are used sparingly.

> Note: PNGs are raster crops of vector source. For production, request the **original vector icon artwork (SVG/AI)** from DCT for crisp scaling and recolouring.

---

## VISUAL ASSETS
- `assets/logos/` — six brandmark variants: `dct_logo_hor{,_black,_white}.png`, `dct_logo_ver{,_black,_white}.png`. Primary/full-colour preferred on light backgrounds; white on dark.
- `assets/photography/` — approved DCT image library (16 photographs): Abu Dhabi skyline, Louvre Abu Dhabi, Sheikh Zayed Grand Mosque, mangroves, desert, oasis heritage, salt lakes, glamping, golf, campfire dining. Wide cinematic shots + lifestyle moments. Used across the website kit and the **Photography** card.
- `assets/fonts/` — Helvetica LT Pro (Light/Roman/Bold OTF) + Helvetica Neue LT Arabic (Light/Roman/Bold TTF).

---

## INDEX — what's in this system
**Tokens** (`styles.css` → `tokens/`)
- `tokens/colors.css` — primary/secondary palettes, derived tints, dashboard dark surfaces, semantic aliases.
- `tokens/typography.css` — font stacks, weights, type scale, line-heights.
- `tokens/spacing.css` — 4px scale, radii, shadows, motion.
- `tokens/fonts.css` — `@font-face` for the real DCT webfonts.

**Components** (`components/`) — `const { X } = window.DCTDesignSystem_8882b5`
- `core/` — **Button**, **Badge**, **Card**, **Callout** (signature device), **Stat**, **SectionLabel**.
- `forms/` — **Input**.

**UI kits** (`ui_kits/`)
- `dashboard/` — dark-mode tourism performance dashboard (Chart.js, standalone HTML).
- `document/` — A4 Strategic Paper cover page (supergraphic, callout, metadata table).
- `website/` — dct.gov.ae corporate homepage recreation: utility bar, sticky header with mega-nav dropdowns, rotating hero (with the official supergraphic motif), the three sectors, News/Circulars tabs, e-services grid, Go Safe + Convention Bureau strip, social feed, full footer with newsletter validation. Standalone HTML; functional icons via Lucide.

**Slides** (`slides/`) — 7 specimen layouts (1280×720): cover, agenda, section divider, content+image, stat, quote, closing.

**Collateral** (`collateral/`) — brand application templates:
- `certificate.html` — bilingual A4-landscape Certificate of Participation (editable recipient name; Tourism Youth Summer Camp specimen).

**Foundation cards** (`guidelines/`) — Colours, Type, Spacing, Brand specimen cards shown in the Design System tab.

**`SKILL.md`** — Agent-Skills-compatible entry point.

---

## Caveats / open items
- **Supergraphic:** ✓ resolved — official corporate vector supplied at `assets/brand/supergraphics.svg`. (The document kit's header/footer markers are still small CSS motifs; swap them for the real vector if desired.)
- **Imagery:** ✓ resolved — approved photo library (16 images) supplied in `assets/photography/` and wired into the website kit + Photography card. The dashboard/document kits still use neutral placeholders; say the word to bring real photos into those too.
- **Icons:** Lucide substituted; not an official DCT set — confirm before production.
- **Arabic:** Helvetica Neue LT Arabic included and wired, but Arabic layouts are demonstrated minimally.
