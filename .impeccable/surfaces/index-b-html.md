---
version: 1
slug: "index-b-html"
primary_target: "index-b.html"
related_targets: ["index.html"]
---

# FLI home, variant B: the programme bill

Scope: `index-b.html`, an alternative home page the user will compare with `index.html`. Mode: Persuade. Same facts and destinations as index.html; colour scheme pinned by the user (burgundy, ivory, brass); everything else new. The user said "do everything by yourself", so no decision page was shown.

Audience and job: funders judge credibility, communities and researchers reach languages, books and keyboards, partners find a way in.

## Direction contract

THESIS: Home as a bazaar programme bill, the bilingual letterpress poster pasted up for every mushaira in Chitral and Gilgit, billing 29 mother tongues as headliners. Refuses photo hero, stat row, tabs and rounded cards.

OWN-WORLD: Two inks on newsprint: burgundy floods sheets, ivory reverses out, brass is the action ink only. Anybody wood type, each billing line fitted to the measure by width axis and size; Schibsted Grotesk text; Nastaliq names as FLI printed them. Square corners, double rules, perforations, tear-off tabs, plate captions; no shadows, gradients or cards.

STORY: Read top to bottom: who is on stage, the language bill, what's on, the record, notices, library and keyboards; tear off a subscription stub.

FIRST VIEWPORT: Burgundy sheet under a masthead nav strip; "Mother tongues, / in the driving seat." fitted edge to edge; left lead, brass programmes stub, tonal languages stub; right Plate 1, Kalkoti mushaira photo; foot nine Nastaliq names between double rules, then a printer's imprint line.

FORM: Mushaira programme bill, candidate 5 of 7, seed 8cf166bc.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises (from the declined challengers)

- Arcade palette law: brass prints only where something can be done (stubs, hovered links, focus).
- Step-row never-wrap law: billing lines never wrap ragged; each is fitted to the full measure.
- Forging rows: one programme per full-width ruled row.
- Paper-shell plates: every photograph carries a numbered plate caption saying what and where.
- Vinyl-wrap panels: sections are separate pasted sheets meeting at visible seams.
- Tanaka planes: structure is flat ink fields and printer's rules, never outlined boxes.

## Signature interaction

Hovering or focusing a language in the A–Z roll reverses its row out and widens the name; programme titles breathe along the width axis on hover. (The 29 languages were first set as one giant fitted bill with a hover caption. On 3 Nov 2026 the user found its type too large, and it became the roll, with family and place printed on every row.) One authored load moment: the hero headline prints in a second, misregistered brass pass that settles into register.

## Ratified at finish review

- Hero imprint line (Islamabad, established 2002, CRRFA/ICT/27, Who we are) closes the hero sheet like a printer's imprint.
- News categories sit under each headline, never above it (no kickers).
- The keyboard languages are billed like the language bill, not tiled.

## WordPress build (3 Nov 2026)

- The page is shaped for WordPress with Elementor free, at the user's request.
- Header, footer and search belong in the theme (header.php, footer.php). Everything in `<main>` is Elementor containers and free widgets, labelled `el-*` in the source.
- The language roll, the family tally and the news lists are shortcode output. The newsletter form is MC4WP.
- Styling hangs on classes only, with no data attributes or inline styles in editor-made parts. Fitted lines and bills read their settings from CSS custom properties.

## Unresolved

- If chosen, the other 86 pages need this world rolled out (DESIGN.md would be replaced then, not now).
