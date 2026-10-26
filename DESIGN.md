---
name: Forum for Language Initiatives (fli-online.org)
description: Navy-and-sun public home for FLI's language work in northern Pakistan; home.html's world, extended to every page.
colors:
  navy: "#0d1b3e"
  navy-2: "#13275a"
  blue: "#2f5bea"
  sun: "#ffc23d"
  sun-deep: "#f0a800"
  ground: "#f4f6fb"
  white: "#ffffff"
  ink: "#0d1b3e"
  body: "#2a3553"
  muted: "#5c6886"
  line: "#e3e7f1"
  on-dark-muted: "#9fb0d6"
  on-dark-soft: "#c9d2ea"
  on-dark-card: "#b6c2df"
  on-sun-text: "#5b4300"
  error: "#c0283a"
  family-indo-aryan: "#2f5bea"
  family-iranian: "#14946b"
  family-nuristani: "#e5781f"
  family-tibeto-burman: "#0d1b3e"
  family-isolate: "#d93a49"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(46px, 7.4vw, 112px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  display-page:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(42px, 6.4vw, 96px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 60px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.4vw, 48px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title-card:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-prose:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
  urdu:
    fontFamily: "Noto Nastaliq Urdu, Scheherazade New, serif"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "0"
rounded:
  xs: "6px"
  sm: "10px"
  control: "12px"
  button: "14px"
  panel-sm: "18px"
  card-sm: "20px"
  card: "22px"
  panel: "28px"
  slab: "36px"
  section-cap: "40px"
  pill: "999px"
spacing:
  gutter-mobile: "16px"
  gap-sm: "14px"
  gap: "18px"
  gap-lg: "22px"
  card-pad: "26px"
  gutter: "28px"
  box-pad: "44px"
  head-gap: "48px"
  section-tight: "72px"
  section-mobile: "80px"
  section: "110px"
  container: "1280px"
components:
  button-sun:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-sun-hover:
    backgroundColor: "{colors.sun-deep}"
    textColor: "{colors.navy}"
  button-dark:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.blue}"
  button-glass:
    backgroundColor: "rgba(255,255,255,.12)"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-line:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-small:
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-event:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.on-sun-text}"
    rounded: "{rounded.card}"
  chip:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  chip-hover:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.navy}"
  filter-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  filter-chip-pressed:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  tab:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  tab-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  input-field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 16px"
    height: "52px"
  input-field-focus:
    backgroundColor: "{colors.white}"
  nav-bar:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel-sm}"
    padding: "10px 12px 10px 20px"
  download-row:
    backgroundColor: "{colors.white}"
    rounded: "16px"
    padding: "16px 18px 16px 16px"
    height: "72px"
  download-row-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
---

# Design System: Forum for Language Initiatives

## Overview

**Creative North Star: "The Field Office Lit by Sun"**

The site is a deep navy field office with a single warm light source. Every page opens on a navy hero (a real fieldwork photo, the language-map texture, or plain navy) under a floating white nav bar, then drops onto a cool pale ground where white, rounded cards sit flat until touched. Sun yellow is the one warm voice: the primary call to action, highlighted words in headlines, timeline dots, step numerals, and the occasional whole sun tile or card. Blue carries links, roles and secondary emphasis.

Type is one family, Plus Jakarta Sans, worked hard: 800 weight with tight negative tracking for every heading, so the voice is confident and contemporary rather than institutional. Density is generous on hubs (110px section rhythm, bento grids, big boxes) and calm on reading pages (68ch prose at 18px, sticky white side cards). Urdu is a first-class script, set right to left in Nastaliq, never faked in the Latin face.

The system is the user's approved `home.html`, extended one-to-one into 163 pages from one stylesheet (`site/assets/fli.css`). The site will be rebuilt in WordPress with Elementor free, so every surface reduces to a small set of reusable section types, cards and buttons listed below.

**Key Characteristics:**
- Navy hero, pale ground, white cards: three surface levels, always in that order.
- Sun yellow as the single warm accent; blue as the working link colour.
- Plus Jakarta Sans 800, tracking -0.03em, on every heading.
- Soft, generous radii (22px cards, 28px panels, 999px pills and chips).
- Flat at rest; hover lifts cards 4px with one diffuse navy shadow.
- Language-family colours match the legend of FLI's language map.

## Colors

A navy-dominant palette with one warm accent (sun), one cool working accent (blue), and a fixed five-colour family code borrowed from FLI's language map.

### Primary
- **Field Navy** (navy): heroes, footer, navy sections, dark tiles and buttons, the date block on events, and all heading ink (ink is the same value). The ground everything else sits on in the first viewport.
- **Deep Navy Step** (navy-2): the second navy for tiles and social buttons on navy surfaces, step cards on navy sections, people-card photo wells, and the mid stop of the CTA slab gradient.

### Secondary
- **Hindukush Sun** (sun): the primary CTA fill, highlighted words inside H1s (`h1 span`), the `mark` underline highlight, timeline dots, step and ordered-list numerals, quote marks, text selection, focus rings on dark surfaces, and whole sun tiles, cards, routes and boxes. Hover deepens to **Sun Deep** (sun-deep).

### Tertiary
- **Working Blue** (blue): inline prose links, text links, list markers, role labels, filter-search focus borders, focus rings on light surfaces, blue tiles/boxes/routes, and the end stop of the CTA slab gradient.

### Neutral
- **Cool Ground** (ground): the page background and the fill of quiet controls (icon buttons, tabs at rest, form inputs, download-row icons).
- **White** (white): cards, the nav bar, mega menus, white sections.
- **Body Ink** (body): long-form prose and list text, slightly softer than heading ink.
- **Muted Slate** (muted): secondary text, metadata, labels, card summaries on light surfaces.
- **Hairline** (line): dividers, card footers, table rules, line-button borders.
- **On-dark text** (on-dark-muted, on-dark-soft, on-dark-card): three stepped light blues for metadata, leads and card copy on navy. Use them instead of opacity on white.
- **Sun Ink** (on-sun-text): body copy on any sun surface; navy stays the heading colour there.
- **Error Red** (error): field errors and invalid borders only.

### Language families
- **Indo-Aryan** (family-indo-aryan), **Iranian** (family-iranian), **Nuristani** (family-nuristani), **Tibeto-Burman** (family-tibeto-burman), **Isolate** (family-isolate). Shown as a 10px dot beside the family name (the family marker), in legends, filter chips and language cards. The Tibeto-Burman dot renders at #7f8bb0 rather than navy so it stays visible on navy heroes and pressed chips; the legend meaning is unchanged.

### Named Rules
**The Map Legend Rule.** Family colours mean language family and nothing else, and they match FLI's language-map legend. Never reuse green, orange or red as decoration, and never reassign a family to a different colour.

**The One Warm Voice Rule.** Sun is the only warm accent. One sun CTA per hero; sun text appears only as highlighted words or labels on navy, never as body copy on white (it fails contrast there).

## Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif), weights 400 to 800 from Google Fonts.
**Body Font:** Plus Jakarta Sans.
**Urdu Font:** Noto Nastaliq Urdu (with Scheherazade New, serif), loaded only on pages that contain Urdu.

**Character:** A single geometric-humanist sans pushed to 800 with tight tracking gives headings a compact, poster-like weight; at 400 to 600 the same family reads plainly for long passages. Nastaliq gives Urdu its own calligraphic register rather than a Latin compromise.

### Hierarchy
- **Display** (800, clamp(46px, 7.4vw, 112px), 1.05): home hero H1 only.
- **Display-page** (800, clamp(42px, 6.4vw, 96px), 1.05, max 15ch, balanced): inner-page hero H1. Article heroes step down to clamp(36px, 4.8vw, 68px) at 20ch.
- **Headline** (800, clamp(34px, 4.4vw, 60px)): section heads. A smaller section H2 runs clamp(30px, 3.4vw, 46px); prose H2 is clamp(26px, 2.6vw, 34px).
- **Statement** (700, clamp(28px, 3.4vw, 48px), 1.12): vision and mission sentences; lighter than headings so a full sentence does not shout.
- **Title** (800, 28px): tile and language-card names; panels 36 to 38px, boxes 36px, routes 32px.
- **Title-card** (800, 22px, 1.2, -0.02em): news, people, step and event card titles.
- **Lead** (400, 19px): hero leads in on-dark-soft, max 640px; drops to 17px under 560px.
- **Body** (400, 16px, 1.6): default text. **Body-prose** (18px, 1.75, max 68ch, body ink) for articles and profiles; the opening paragraph runs 22px at 500.
- **Label** (600, 13 to 14px, sentence case): metadata, breadcrumbs, field labels, definition-list terms. Numbers in tables, times and stat figures use tabular numerals.
- **Stat figures** (800, clamp(32px, 3.6vw, 52px) in the home stats; clamp(21px, 2.1vw, 28px) in facts strips; up to 72px in the impact number list), line-height 1, tracking -0.03 to -0.04em.

### Named Rules
**The Heavy Head Rule.** Every heading is 800 weight with negative tracking (-0.03em at H1 to H3, -0.02em on card titles). Only statements and Urdu step down.

**The Nastaliq Rule.** Any Urdu string carries `lang="ur"`, which switches it to Nastaliq at 400 with zero tracking and RTL direction, and raises line-height to about 1.9 to 2 so the script's descenders clear. Urdu H1s drop to clamp(34px, 4.6vw, 64px). Load the Urdu fonts only where Urdu appears.

**The Sentence Case Rule.** Labels, tags, buttons and metadata are sentence case at 12 to 14px, weight 600 to 800. The system has no uppercase tracked label style.

## Layout

A centred 1280px container with 28px gutters (16px under 560px). Sections stack on a 110px vertical rhythm (72px tight, 80px on phones); section heads sit in a flex row with the H2 left and a short muted paragraph right, 48px above the content.

Hub pages compose from bento grids (6 columns, 18px gap, 220px minimum rows), 2- and 3-column card grids (22px gap), split boxes and route panels (2 columns). Reading pages use a two-column split: content at minmax(0,1fr) beside a 360px sticky aside (320px on articles), stuck 116px from the top to clear the floating nav. Libraries and directories use auto-fill grids (language cards 270px minimum, books 190px, people 280px, keyboards 300px).

Breakpoints: 1180px (nav collapses to the menu button, asides unstick, columns stack), 1050px (two-column heroes and splits stack; 3-up grids go 2-up), 700px (everything single-column; tables reflow into stacked rows), 560px (tight gutters, smaller hero padding, 2-up books).

### Hero variants
- **Photo hero:** section hubs (About, Our Work, Get Involved, and similar) open on a distinct FLI fieldwork photo at 50% opacity under a navy gradient that deepens to 97% at the foot; tall variant fills min(780px, 86vh) with content bottom-aligned.
- **Map hero:** language pages (index, profiles, atlas) show FLI's language map inverted, greyscaled and screened at 17% opacity, with a blue radial glow top right.
- **Plain navy:** document pages (library, book, newsletters, papers, legal) use solid navy; the library shows real covers on a fanned shelf at the right.
- Every inner hero carries breadcrumbs, the H1, a lead, at most one sun CTA, and a facts strip (a hairline-topped row of bold values with on-dark-muted captions) where facts exist. Articles use their own hero: breadcrumb, H1, meta row, and a 28px-rounded lead image that overlaps the body by 160px.

### Named Rules
**The Breadcrumb Not Eyebrow Rule.** Pages orient with breadcrumbs and facts strips. No page, the home page included, puts an eyebrow pill above a heading; the heading carries its own label (the home vision line reads "Our vision is to see…").

## Elevation & Depth

Flat at rest. Depth comes from tonal layering (navy hero, cool ground, white card) and from the radius change between levels. Shadows are all the same soft navy-tinted family and appear in three places: the floating nav bar and its overlays, interaction (hover lift), and physical objects (book covers).

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 24px 50px -24px rgba(13,27,62,.35)`): cards, tiles, language cards, events, videos and report tiles on hover, paired with translateY(-3 to -6px).
- **Floating bar** (`box-shadow: 0 10px 40px -12px rgba(13,27,62,.25)`): the fixed nav bar, always on.
- **Menu** (`box-shadow: 0 30px 60px -20px rgba(13,27,62,.3)`): mega menu and mobile nav sheet.
- **Overlay** (`box-shadow: 0 40px 80px -30px rgba(13,27,62,.6)`): search dialog over a 55% navy blurred scrim.
- **Book** (`box-shadow: 0 22px 30px -20px rgba(13,27,62,.6)`): book covers at rest, deepening on hover; covers also carry a darkened 8px spine strip.

### Named Rules
**The Lift On Touch Rule.** A card earns a shadow only while hovered. At rest, white on the cool ground is enough.

## Shapes

Soft, generous rounding throughout, scaled to the element: 999px pills for chips, tabs, filter chips and tags; 12 to 14px for buttons, inputs and icon buttons; 16 to 22px for cards and rows; 28px for panels, boxes and routes; 36px for the CTA slab; and a 40px top-only cap on a section that rises over the one before it. Book covers and report tiles are asymmetric (5px spine side, 14 to 18px fore-edge) so they read as objects. Icons are 18px line icons, 1.9 stroke, round caps and joins, in currentColor. Ordered information (process steps, objectives, ordered lists) uses rounded-square counters (34 to 46px, 10 to 12px radius).

## Components

### Buttons
Confident, chunky and sentence-case.
- **Shape:** gently rounded (14px); small size 12px.
- **Sun (primary):** sun fill, navy text, 700 at 15px, 15px 26px padding, 48px minimum height. Hover deepens to sun-deep and lifts 2px.
- **Dark:** navy fill, white text; hover turns blue. The default on sun and white surfaces.
- **Glass:** 12% white with a 25% white border and 8px backdrop blur; secondary action on photo heroes.
- **Line:** white with a 1.5px hairline border; border turns navy on hover.
- **Text link:** blue 700 with an underline on hover, offset 4px.
- **Focus:** 3px blue outline, 3px offset; sun outline on navy surfaces.

### Chips and tags
- **Language chip:** pill with a 20% white border on navy, 600 at 17px; hover fills sun with navy text. A light variant (white fill, hairline border, up to 21px) sits on the ground.
- **Filter chip:** white pill, 1.5px hairline border, muted 700 text, optional family dot and count; pressed state is navy with white text.
- **Tag:** small 800 pill at 12px in pale sun (default), pale blue, or ground grey.

### Cards / Containers
- **Corner Style:** 22px (cards, quotes, people, events, tables); 20px (language cards, keyboard cards, gallery, videos); 28px (panels, boxes, routes).
- **Background:** white on the ground; ground-filled rows inside white sections; sun, navy and blue as deliberate feature variants (event cards, imageless news cards, routes, boxes, tiles).
- **Shadow Strategy:** none at rest; hover lift per Elevation.
- **Border:** none; internal dividers are 1px hairlines.
- **Internal Padding:** 26 to 30px (cards, tiles), 36 to 44px (feature boxes, routes).
- **News card:** 16:10 image well whose photo scales 1.04 on hover, meta row with a blue category, 22px title. A lead card spans two columns with the image beside the text.

### Inputs / Fields
- **Style:** ground fill, 1.5px transparent border, 14px radius, 52px minimum height, 16px text; label 700 at 14px above.
- **Focus:** border turns blue and the fill turns white.
- **Error:** error-red border on white and a 13px error line beneath.
- **Filter search and select:** white fill with a hairline border, 50px tall; focus border blue.
- **Newsletter form:** translucent white pill-box inside the CTA slab with the input and a sun button inline.

### Navigation
- Fixed white bar floating 16px from the top, 18px radius, logo left, 600 links at 15px, right cluster with search icon button, Urdu language switch and a Get Involved button. Hover fills a link with the ground colour; the current section is blue with a short 3px sun underbar.
- Mega menus: white, 18px radius, two-column list of bold titles with muted descriptions, fading in 8px.
- Below 1180px: a menu button opens a white sheet with expandable sub-menus and a sun Get Involved row; Escape closes it.
- Footer: navy, five columns, white logo plate, sun hover on links, 44px social squares in navy-2 turning sun.

### Signature components
- **Facts strip:** hairline-topped auto-fit row (170px min) of 800 values with on-dark-muted captions, closing each hero.
- **Family marker:** 10px family-colour dot plus the family name in 700 at 13px.
- **Download row:** white row with a 44px ground icon square, bold title, muted size line and a file-type tag; hover turns the row navy and the icon square sun.
- **Book cover:** coloured cover by series (Verse navy, Language and Culture blue, Primers sun, Translations Iranian green), spine shade, 800 title, Urdu titles in Nastaliq RTL; real cover images replace the colour block where available.
- **Report tile:** asymmetric navy/blue/sun cycling tiles with the year set huge; tilt -1deg and lift on hover.
- **Process steps:** white step cards headed by a navy rounded-square counter with a sun numeral (inverted on navy sections), because the order is the information.
- **Event row:** navy square date block (38px day, sun month), title, place and time, action button.
- **CTA slab:** 135deg navy to navy-2 to blue gradient, 36px radius, headline beside the newsletter form.

## Do's and Don'ts

### Do:
- **Do** open every page on a navy hero and choose the variant by page type: photo for section hubs, language-map texture for language pages, plain navy for documents.
- **Do** keep the three surface levels in order: navy, cool ground (#f4f6fb), white cards.
- **Do** set every heading in Plus Jakarta Sans 800 with negative tracking, and highlight at most a phrase of an H1 in sun.
- **Do** use one sun button per hero; pair it with a glass button on photos.
- **Do** tag every Urdu string `lang="ur"` so it renders RTL in Noto Nastaliq Urdu with a Scheherazade New fallback, and load those fonts only on pages that contain Urdu.
- **Do** use the family colours exactly as FLI's map legend, always beside the family name.
- **Do** keep tap targets at 44px or more (buttons 48px, chips and small buttons 44px, inputs 50 to 52px).
- **Do** use on-sun-text (#5b4300) for body copy on sun and the on-dark blues for secondary copy on navy.

### Don't:
- **Don't** put eyebrow pills above headings on any page; use breadcrumbs and the facts strip.
- **Don't** add hard borders or resting shadows to cards; depth is tonal, shadow is a hover response.
- **Don't** use family colours as decoration or for status.
- **Don't** set Urdu in Plus Jakarta Sans or a system face, or track it.
- **Don't** use uppercase tracked labels; labels are sentence case.
- **Don't** set sun text on white or ground.
