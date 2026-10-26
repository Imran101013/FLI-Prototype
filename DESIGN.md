---
name: Forum for Language Initiatives (fli-online.org)
description: Burgundy-and-ivory public home for FLI's language work in northern Pakistan; home.html's world, extended to every page.
colors:
  burgundy: "#5B0404"
  burgundy-2: "#741414"
  ivory: "#F8F1E7"
  ivory-deep: "#EFE3D2"
  paper: "#FFFCF7"
  sand: "#EAD7B8"
  blush: "#F0E0D8"
  brass: "#D8A847"
  brass-deep: "#A87A22"
  ink: "#5B0404"
  body: "#33231F"
  muted: "#6E5B53"
  line: "#E6D8C6"
  on-dark-muted: "#D9B3A8"
  on-dark-soft: "#EDD6CF"
  on-dark-card: "#E2C3BA"
  error: "#B3261E"
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
  button-primary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.burgundy}"
  button-dark:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.burgundy-2}"
  button-glass:
    backgroundColor: "rgba(255,255,255,.12)"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.button}"
    padding: "15px 26px"
    height: "48px"
  button-small:
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "44px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-event:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.burgundy-2}"
    rounded: "{rounded.card}"
  chip:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  chip-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.burgundy}"
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  filter-chip-pressed:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
  tab:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  tab-active:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
  input-field:
    backgroundColor: "{colors.ivory-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 16px"
    height: "52px"
  input-field-focus:
    backgroundColor: "{colors.paper}"
  nav-bar:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel-sm}"
    padding: "10px 12px 10px 20px"
  download-row:
    backgroundColor: "{colors.paper}"
    rounded: "16px"
    padding: "16px 18px 16px 16px"
    height: "72px"
  download-row-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
---

# Design System: Forum for Language Initiatives

## Overview

**Creative North Star: "The Clothbound Library"**

The site is one of FLI's books: burgundy binding, ivory pages, a touch of brass foil. Every page opens on a burgundy hero under a floating paper nav bar. The hero is a real fieldwork photo, the language-map texture, or plain burgundy. Below it sits a warm ivory ground where paper-white rounded cards lie flat until touched.

Burgundy covers about a quarter of each page: the hero, the footer, and at most one feature band or slab between. Brass is the small accent, and it only ever sits on burgundy: highlighted words in headlines, timeline dots, step numerals, and hovers. On light surfaces, emphasis comes from burgundy itself, plus a sand tint for feature tiles. The burgundy matches the maroon of FLI's logo lettering and the header of its 2026 quarterly newsletter.

Type is one family, Plus Jakarta Sans, worked hard: 800 weight with tight negative tracking for every heading, so the voice is confident and contemporary rather than institutional. Density is generous on hubs (110px section rhythm, bento grids, big boxes) and calm on reading pages (68ch prose at 18px, sticky white side cards). Urdu is a first-class script, set right to left in Nastaliq, never faked in the Latin face.

The system is the user's approved `home.html`, extended one-to-one into 74 pages from one stylesheet (`assets/fli.css`). The site will be rebuilt in WordPress with Elementor free, so every surface reduces to a small set of reusable section types, cards and buttons listed below.

**Key Characteristics:**
- Burgundy hero, ivory ground, paper cards: three surface levels, always in that order.
- Burgundy on about 25–30% of each page; ivory and paper for the rest.
- Brass as the one small accent, used only on burgundy; sand for feature tiles on light surfaces.
- Plus Jakarta Sans 800, tracking -0.03em, on every heading.
- Soft, generous radii (22px cards, 28px panels, 999px pills and chips).
- Flat at rest; hover lifts cards 4px with one diffuse warm shadow.
- Language-family colours match the legend of FLI's language map.

## Colors

The palette has three parts:
- Two brand colours, burgundy and warm ivory, each in a few steps.
- One small brass accent that only sits on burgundy.
- The fixed five-colour family code from FLI's language map.

Every text pairing passes WCAG AA. Burgundy on ivory is 12.8:1.

### Primary
- **Burgundy** (burgundy): used for:
  - heroes, the footer, dark sections, tiles and quotes;
  - dark buttons and the event date block;
  - all heading ink (ink has the same value);
  - text links.

  Burgundy is only 1.04:1 against body text, so links in running text are always underlined.
- **Burgundy Step** (burgundy-2): the second burgundy, used for:
  - button hover;
  - tiles and social buttons on burgundy;
  - step cards on burgundy sections;
  - people-card photo wells;
  - the second feature colour: the resources box, the mailing-list route, and every second report tile;
  - the CTA slab gradient, which runs on to #8A2216 at the far corner.

### Secondary
- **Warm Ivory** (ivory): the page background, the primary button on burgundy (with burgundy text), and quiet controls (icon buttons, tabs at rest, download-row icons).
- **Paper** (paper): cards, the opaque nav bar, mega menus, white sections, and text on burgundy.
- **Deep Ivory** (ivory-deep): form fields.
- **Sand** (sand): used for:
  - feature tiles, cards, routes and boxes on light surfaces;
  - icon squares on light cards;
  - checklist ticks and ordered-list numerals;
  - the Other publications series.

  Body copy on sand is burgundy-2; headings stay burgundy.
- **Blush** (blush): pale tags, and the highlight on a table row you jumped to.

### Accent
- **Brass** (brass): only on burgundy. It is used for:
  - highlighted words inside H1s (`h1 span`);
  - timeline dots and years, and step numerals;
  - hover on chips, footer links and social buttons;
  - the primary button's hover, and the download-row icon on hover;
  - focus rings on dark surfaces, and text selection;
  - the Language & Culture series, as a fill under burgundy text.

  Brass is 6.6:1 on burgundy but 2.4:1 on ivory, so it is never text on a light surface. The `mark` highlight on ivory is a 50% brass band behind burgundy text.
- **Brass Deep** (brass-deep): decorative quote marks on light cards, the 404 zero, and the calendar swatch.

### Neutral
- **Body Ink** (body): long-form prose, list text and table cells; a warm near-black, so paragraphs read calmer than burgundy.
- **Muted** (muted): secondary text, metadata, labels, card summaries on light surfaces.
- **Hairline** (line): dividers, card footers, table rules, line-button borders.
- **On-dark text** (on-dark-muted, on-dark-soft, on-dark-card): three stepped warm creams for metadata, leads and card copy on burgundy. Use them instead of opacity on paper.
- **Error Red** (error): field errors and invalid borders only.

### Language families
- **Indo-Aryan** (family-indo-aryan), **Iranian** (family-iranian), **Nuristani** (family-nuristani), **Tibeto-Burman** (family-tibeto-burman), **Isolate** (family-isolate). Each appears as a 10px dot beside the family name (the family marker), in legends, filter chips and language cards.
- The Tibeto-Burman dot renders at #7f8bb0 so it stays visible on burgundy heroes and pressed chips. The legend meaning is unchanged.

### Class names
The class names come from the earlier navy palette and were kept so the 74 pages did not need re-tagging:
- `.navy`, `.navyb`, `.navyq`, `.navyr` render burgundy.
- `.sun`, `.sunb`, `.sunr`, `.card.event`, `.card.noimg` render sand.
- `.blue`, `.box.res`, `.bluer` render burgundy-2.
- `.btn-sun` is the ivory primary button.

### Named Rules
**The Map Legend Rule.** Family colours mean language family and nothing else, and they match FLI's language-map legend. Never reuse green, orange or red as decoration, and never reassign a family to a different colour.

**The Quarter Burgundy Rule.** Burgundy covers about a quarter of a page: the hero, the footer, and at most one feature band or slab between. Everything else is ivory or paper.

**The Brass On Burgundy Rule.** Brass appears only on burgundy, and only in small doses: a phrase, a dot, a numeral, a hover. Use one ivory primary button per hero.

**The Natural Photo Rule.** Photos keep their own colours. Burgundy fades in only behind the text, never as a wash over the whole photo.

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
- **Photo hero:** section hubs (About, Our Work, Get Involved, and similar) open on a distinct FLI fieldwork photo in its natural colours.
  - Burgundy fades in from the left (94% at the edge, clear by 88% of the width) and from the foot (97%). The breadcrumbs, H1, lead and facts strip therefore sit on burgundy, while the right of the photo shows true.
  - Below 700px the text spans the full width, so the fade runs from the top (60%) down to 97%.
  - The tall variant fills min(780px, 86vh), with content bottom-aligned.
  - The home hero fades from the foot only, reaching 78% at 40% of its height (70% at 18% on phones).
- **Map hero:** language pages (index, profiles, atlas) show FLI's language map on burgundy: inverted, greyscaled and screened at 17% opacity, with a faint brass glow top right.
- **Plain burgundy:** document pages (publications, papers, legal) use solid burgundy. Publications shows real covers on a fanned shelf at the right.
- Every inner hero carries:
  - breadcrumbs, the H1 and a lead;
  - at most one ivory primary button;
  - a facts strip where facts exist: a hairline-topped row of bold values with on-dark-muted captions.
- Articles use their own hero: breadcrumb, H1, meta row, and a 28px-rounded lead image that overlaps the body by 160px.

### Named Rules
**The Breadcrumb Not Eyebrow Rule.** Pages orient with breadcrumbs and facts strips. No page, the home page included, puts an eyebrow pill above a heading; the heading carries its own label (the home vision line reads "Our vision is to see…").

## Elevation & Depth

Flat at rest. Depth comes from tonal layering (burgundy hero, ivory ground, paper card) and from the radius change between levels. All shadows belong to one soft, warm-brown family (`rgba(60,8,4,…)`). They appear in three places: the floating nav bar and its overlays, interaction (hover lift), and physical objects (book covers).

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 24px 50px -24px rgba(60,8,4,.35)`): cards, tiles, language cards, events, videos and report tiles on hover, paired with translateY(-3 to -6px).
- **Floating bar** (`box-shadow: 0 10px 40px -12px rgba(60,8,4,.25)`): the fixed nav bar, always on.
- **Menu** (`box-shadow: 0 30px 60px -20px rgba(60,8,4,.3)`): mega menu and mobile nav sheet.
- **Overlay** (`box-shadow: 0 40px 80px -30px rgba(60,8,4,.6)`): the search dialog, over a 55% dark-burgundy (`rgba(40,6,4,.55)`) blurred scrim.
- **Book** (`box-shadow: 0 22px 30px -20px rgba(60,8,4,.55)`): book covers at rest, deepening on hover. Covers also carry a darkened 8px spine strip.

### Named Rules
**The Lift On Touch Rule.** A card earns a shadow only while hovered. At rest, paper on ivory is enough.

## Shapes

Soft, generous rounding throughout, scaled to the element: 999px pills for chips, tabs, filter chips and tags; 12 to 14px for buttons, inputs and icon buttons; 16 to 22px for cards and rows; 28px for panels, boxes and routes; 36px for the CTA slab; and a 40px top-only cap on a section that rises over the one before it. Book covers and report tiles are asymmetric (5px spine side, 14 to 18px fore-edge) so they read as objects. Icons are 18px line icons, 1.9 stroke, round caps and joins, in currentColor. Ordered information (process steps, objectives, ordered lists) uses rounded-square counters (34 to 46px, 10 to 12px radius).

## Components

### Buttons
Confident, chunky and sentence-case.
- **Shape:** gently rounded (14px); small size 12px.
- **Primary** (`.btn-sun`): used on burgundy.
  - Ivory fill, burgundy text, 700 at 15px, 15px 26px padding, 48px minimum height.
  - Hover turns brass and lifts 2px.
  - On the paper nav bar and the 404 page it renders burgundy with paper text.
- **Dark:** burgundy fill, paper text; hover turns burgundy-2. This is the default on ivory, paper and sand.
- **Glass:** 12% white with a 25% white border and 8px backdrop blur; the secondary action on photo heroes.
- **Line:** paper with a 1.5px hairline border; the border turns burgundy on hover.
- **Text link:** burgundy 700 with an underline on hover, offset 4px. Inline links in prose and fact tables are always underlined.
- **Focus:** 3px burgundy outline with 3px offset; brass outline on burgundy surfaces.

### Chips and tags
- **Language chip:** pill with a 20% white border on burgundy, 600 at 17px; hover fills brass with burgundy text. A light variant (paper fill, hairline border, up to 21px) sits on ivory and hovers burgundy with paper text.
- **Filter chip:** paper pill, 1.5px hairline border, muted 700 text, optional family dot and count; the pressed state is burgundy with paper text.
- **Tag:** small 800 pill at 12px. Three variants:
  - sand with burgundy-2 text (default);
  - blush with burgundy text (`.tag.blue`);
  - ivory with muted text (`.tag.grey`).

### Cards / Containers
- **Corner Style:** 22px (cards, quotes, people, events, tables); 20px (language cards, keyboard cards, gallery, videos); 28px (panels, boxes, routes).
- **Background:** paper on ivory, and ivory rows inside paper sections. Sand, burgundy and burgundy-2 are deliberate feature variants (event cards, imageless news cards, routes, boxes, tiles).
- **Shadow Strategy:** none at rest; hover lift per Elevation.
- **Border:** none; internal dividers are 1px hairlines.
- **Internal Padding:** 26 to 30px (cards, tiles), 36 to 44px (feature boxes, routes).
- **News card:** 16:10 image well whose photo scales 1.04 on hover, a meta row with a burgundy category, and a 22px title. A lead card spans two columns with the image beside the text.

### Inputs / Fields
- **Style:** deep-ivory fill, 1.5px transparent border, 14px radius, 52px minimum height, 16px text; label 700 at 14px above.
- **Focus:** the border turns burgundy and the fill turns paper.
- **Error:** error-red border on paper and a 13px error line beneath.
- **Filter search and select:** paper fill with a hairline border, 50px tall; burgundy focus border.
- **Newsletter form:** translucent white pill-box inside the CTA slab, with the input and an ivory button inline.

### Navigation
- **Header bar:** an opaque paper bar floating 16px from the top, with an 18px radius.
  - Logo on the left. It uses `mix-blend-mode: multiply`, so the PNG's white box disappears into the paper.
  - Burgundy links, 600 at 15px.
  - A right cluster with the search icon button and a burgundy Get Involved button.
  - Hovering a link fills it with ivory. The current section gets a short 3px burgundy underbar.
- **Mega menus:** paper, 18px radius, a two-column list of bold titles with muted descriptions, fading in 8px.
- **Below 1180px:** a menu button opens a paper sheet with expandable sub-menus and a burgundy Get Involved row. Escape closes it.
- **Footer:** burgundy, five columns, a paper logo plate, brass hover on links, and 44px social squares in burgundy-2 that turn brass.

### Signature components
- **Facts strip:** hairline-topped auto-fit row (170px min) of 800 values with on-dark-muted captions, closing each hero.
- **Family marker:** 10px family-colour dot plus the family name in 700 at 13px.
- **Download row:** paper row with a 44px ivory icon square, bold title, muted size line and a file-type tag. On hover the row turns burgundy and the icon square brass.
- **Book cover:**
  - Coloured by series: Vernacular burgundy, Language and Culture brass, Other publications sand, Translations burgundy-2.
  - Spine shade and an 800 title; Urdu titles in Nastaliq RTL.
  - Real cover images replace the colour block where available.
- **Publication list:** one page with no per-book pages, mirroring FLI's live Publications page.
  - Each series is a paper table. Columns: a series-coloured rounded-square number (burgundy, brass or sand), the title, language, author and year.
  - Titles appear in burgundy. Urdu titles are in Nastaliq as published, with an English gloss beneath. The other cells use body ink.
  - Rows carry ids (`#ver-01`, `#lc-18`, `#pr-21`), so language pages and search link straight to a row, which highlights blush.
  - A sticky search and language filter above the tables hides empty series.
  - Below 700px, each row becomes the number plus a title block and one wrapped meta line.
- **Report tile:** asymmetric tiles cycling burgundy / burgundy-2 / sand, with the year set huge; tilts -1deg and lifts on hover.
- **Process steps:** paper step cards headed by a rounded-square counter, because the order is the information. The counter is burgundy with a brass numeral; on burgundy sections it is brass with a burgundy numeral.
- **Event row:** burgundy square date block (38px day, brass month), title, place and time, action button.
- **CTA slab:** 135deg burgundy → burgundy-2 → #8A2216 gradient, 36px radius, headline beside the newsletter form.

## Do's and Don'ts

### Do:
- **Do** open every page on a burgundy hero and choose the variant by page type: photo for section hubs, language-map texture for language pages, plain burgundy for documents.
- **Do** keep the three surface levels in order: burgundy, ivory (#F8F1E7), paper cards.
- **Do** keep burgundy to about a quarter of each page: hero, footer, and at most one band or slab between.
- **Do** set every heading in Plus Jakarta Sans 800 with negative tracking, and highlight at most a phrase of an H1 in brass.
- **Do** use one ivory primary button per hero; pair it with a glass button on photos.
- **Do** keep photos in their natural colours and fade burgundy in only behind the text.
- **Do** underline links that sit in running text.
- **Do** tag every Urdu string `lang="ur"` so it renders RTL in Noto Nastaliq Urdu with a Scheherazade New fallback, and load those fonts only on pages that contain Urdu.
- **Do** use the family colours exactly as FLI's map legend, always beside the family name.
- **Do** keep tap targets at 44px or more (buttons 48px, chips and small buttons 44px, inputs 50 to 52px).
- **Do** use burgundy-2 for body copy on sand, and the on-dark creams for secondary copy on burgundy.

### Don't:
- **Don't** put eyebrow pills above headings on any page; use breadcrumbs and the facts strip.
- **Don't** add hard borders or resting shadows to cards; depth is tonal, shadow is a hover response.
- **Don't** use family colours as decoration or for status.
- **Don't** set Urdu in Plus Jakarta Sans or a system face, or track it.
- **Don't** use uppercase tracked labels; labels are sentence case.
- **Don't** set brass text on ivory, paper or sand (2.4:1).
- **Don't** wash a whole photo in burgundy or lower its opacity.
