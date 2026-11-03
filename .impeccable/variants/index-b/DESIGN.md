---
name: FLI home, variant B (the programme bill)
description: Two inks on newsprint; FLI's mother tongues billed as headliners in fitted wood type.
colors:
  burgundy: "#5B0404"
  burgundy-second: "#741414"
  brass: "#D8A847"
  ivory: "#F8F1E7"
  paper: "#FFFCF7"
  ivory-deep: "#EFE3D2"
  sand-wall: "#EAD7B8"
  body-ink: "#33231F"
  muted-ink: "#6E5B53"
  hairline: "#E6D8C6"
  on-ink-muted: "#D9B3A8"
  on-ink-soft: "#EDD6CF"
  on-ink-rule: "#8C3A31"
  ivory-rule: "#DCC4BA"
  error: "#B3261E"
typography:
  display:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(48px, 10.4vw, 150px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 58..150, fitted per line"
  headline:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 5.8vw, 86px)"
    fontWeight: 800
    lineHeight: 0.86
    fontVariation: "'wdth' 76"
  title:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 68px)"
    fontWeight: 800
    lineHeight: 0.86
    fontVariation: "'wdth' 70"
  bill:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "24px to 52px, fitted per line"
    fontWeight: 800
    lineHeight: 1.04
    fontVariation: "'wdth' 62..146, fitted per line"
  index:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "clamp(20px, 1.7vw, 24px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 84, 94 on hover"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Anybody, Arial Narrow, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 88"
  caption:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.45
  nastaliq:
    fontFamily: "Noto Nastaliq Urdu, Scheherazade New, serif"
    fontSize: "26px to 44px, fitted per line"
    fontWeight: 500
    lineHeight: 2.15
rounded:
  none: "0px"
spacing:
  wall-gap: "10px"
  wall-gap-mobile: "6px"
  margin: "clamp(16px, 3.4vw, 48px)"
  section: "clamp(56px, 7vw, 104px)"
  container: "1360px"
components:
  stub:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "52px"
  stub-hover:
    backgroundColor: "{colors.burgundy-second}"
    textColor: "{colors.ivory}"
  stub-on-ink:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.burgundy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "52px"
  stub-on-ink-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.burgundy}"
  stub-alt:
    backgroundColor: "{colors.ivory-deep}"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.none}"
    height: "52px"
  stub-alt-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ivory}"
  stub-small:
    padding: "0 16px"
    height: "44px"
  go-link:
    textColor: "{colors.burgundy}"
    typography: "{typography.label}"
    height: "44px"
  icon-button:
    backgroundColor: "{colors.burgundy-second}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.burgundy}"
  input-field:
    backgroundColor: "{colors.ivory-deep}"
    textColor: "{colors.burgundy}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "56px"
  input-field-focus:
    backgroundColor: "{colors.paper}"
  masthead:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ivory}"
    height: "68px"
  nav-item-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.burgundy}"
  bill-name-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ivory}"
---

<!-- VARIANT ONLY. This file describes index-b.html ("variant B: the programme bill"), an alternative home page the user has not yet chosen over index.html. It does NOT govern the other 86 pages: the root DESIGN.md and .impeccable/design.json still document the incumbent world. This file would replace the root DESIGN.md only if the user adopts this direction site-wide. The colour scheme (burgundy #5B0404, ivory #F8F1E7, brass #D8A847 and the related tokens) is shared with the incumbent by the user's instruction; everything else recorded here (wood type, pasted sheets, stubs, printer's rules, plates, line fitting) is new to this variant. -->

# Design System: FLI home, variant B (the programme bill)

## Overview

**Creative North Star: "The Mushaira Programme Bill"**

The page is the bilingual letterpress poster pasted up for every mushaira in Chitral and Gilgit: two inks on newsprint, billing FLI's mother tongues as headliners. Burgundy floods whole sheets and ivory reverses out of it; brass is a third ink that prints only where something can be done. Every section is its own pasted sheet, separated from its neighbours by a strip of sand wall, so the page reads top to bottom as a programme: who is on stage, the language bill, what's on, the record, notices, the library and keyboards, then a tear-off subscription stub and the printer's imprint.

Display type is Anybody wood type, uppercase and fitted to the full measure by the width axis first and size second, the way a compositor chooses wood type; billing lines never wrap ragged. Running text is Schibsted Grotesk. Language names FLI prints in Nastaliq appear in Noto Nastaliq Urdu, right to left, as FLI's own books spell them. Structure comes from flat ink fields and printer's rules (double rules, hairlines, perforations), never from outlined boxes, cards, gradients or rounded corners.

Density is poster-like at the top of each sheet (very large wood type at line-height under 0.9) and ledger-like underneath (full-width ruled rows, hairline lists, tabular numerals).

**Key Characteristics:**
- Two inks plus one action ink: burgundy, ivory, brass.
- Sheets pasted on a sand wall with visible seams.
- Fitted wood-type billing lines that fill the measure exactly.
- Square corners everywhere.
- Double printer's rules (4px over 1px) opening every major block.
- Numbered plate captions on every photograph.
- Perforated stubs as buttons; a tear-off edge on the subscription sheet.

## Colors

Two inks on newsprint, with brass held back as the action ink.

### Primary
- **Mushaira Burgundy**: the flood ink. Fills the masthead, hero, record and footer sheets; on light sheets it is the ink of every headline, rule, billed name and link, and the focus outline colour.
- **Second-Pass Burgundy**: a lighter second impression. Fills the library sheet, icon buttons and social squares on burgundy, and is the hover state of a burgundy stub.

### Secondary
- **Brass Action Ink**: prints only on things that can be acted on: stubs on burgundy sheets and in the masthead, hovered links and icon buttons on burgundy, focus outlines on burgundy, text selection, and the hero's misregistered load pass.

### Neutral
- **Reversed Ivory**: type reversed out of burgundy; also the flood of the language-bill and subscription sheets, the mega menu, the mobile menu and the search panel.
- **Newsprint White**: the brightest sheet (programmes, notices, keyboards) and the paper chip behind the logo.
- **Deep Ivory**: alternate stub fill, input field fill, quick-search chips.
- **Sand Wall**: the wall the sheets are pasted on; shows through the seams and the tear-off perforation.
- **Body Ink**: running text on light sheets.
- **Muted Ink**: captions, section deks, meta lines and placeholders on light sheets.
- **Hairline**: thin dividers inside light sheets (programme link lists, mega menu, search results).
- **On-Ink Muted, On-Ink Soft, On-Ink Rule**: muted text, soft text and hairline rules inside burgundy sheets.
- **Ivory Rule**: the hairline between rows of the language roll, strong enough to read on the ivory sheet where the paler Hairline disappears.
- **Error Red**: the invalid-email underline only.

### Named Rules
**The Arcade Rule.** Brass prints only where something can be done: stubs, hovered links, focus, selection. Never as the fill of a heading, a rule or a decorative field.

**The Two Inks Rule.** Every sheet is either flooded burgundy with ivory reversed out, or a light paper (ivory or newsprint white) inked in burgundy. Text never sits on an in-between tint.

## Typography

**Display Font:** Anybody, variable width 50 to 150 and weight 400 to 900 (with Arial Narrow)
**Body Font:** Schibsted Grotesk, weight 400 to 800 (with system-ui)
**Label/Mono Font:** Anybody at label sizes; Noto Nastaliq Urdu 500 for Urdu-script names, subset to the names shown (with Scheherazade New)

**Character:** Bazaar-bill wood type against a clean modern grotesk. The wood type does the shouting, uppercase at 800 or 900; the grotesk carries every sentence.

### Hierarchy
- **Display** (800/900, fitted, roughly 48 to 150px, 0.88): the hero headline only, two lines of contrasting width: the first condensed, the second expanded at 900. Each line is fitted to the measure by script.
- **Headline** (800, clamp(40px, 5.8vw, 86px), 0.86, width 76): section heads, set on a double rule with a muted grotesk dek to the right.
- **Title** (800, clamp(36px, 4.4vw, 68px), 0.86, width 70): programme titles in full-width rows; the library, keyboard and subscription sheet heads sit at the same tier (62 to 64px max, width 78 to 80).
- **Bill** (800, fitted 24 to 52px, leading 1.04 of the preferred size): the keyboard bill. Names are separated by small square bullets; lines are balanced, then each fitted to the measure.
- **Index** (800, clamp(20px, 1.7vw, 24px), 1, width 84; 17px on phones): names in the language roll. The index letter beside it is the same size at 900, width 118. The family (grotesk 600, second burgundy) and place (grotesk 400, muted) run beneath at 14px.
- **Ledger figure** (800 with numbers in 900, fitted, max 84px): one fitted line per record entry.
- **Statement** (700, clamp(30px, 3.7vw, 56px), 1.02, width 86): the vision statement on the record sheet, the one mixed-case use of the wood type.
- **Body** (400, 17px, 1.6): running text; leads and deks held to 31 to 46ch.
- **Label** (800, 13 to 15px, width 85 to 92, tracking 0.02 to 0.05em, uppercase): stubs, arrow links, nav, plate numbers, footer column heads, quick-search chips.
- **Caption** (500, 13px, 1.45, grotesk): plate captions and the hero imprint line.
- **Nastaliq** (500, fitted 26 to 44px, leading 2.15): Urdu-script language names, right to left, separated by square bullets, never stretched on a width axis.

### Named Rules
**The Never-Wrap Rule.** A billing line never wraps ragged. Hero lines, bill lines, ledger figures and the footer signature are each fitted to the full measure, width axis first, then size. Without JavaScript they may wrap; with it they fill edge to edge.

**The Wood-Type-Is-Uppercase Rule.** Anybody is set uppercase at 800 or above everywhere except the single mixed-case vision statement. Sentences belong to Schibsted Grotesk.

## Layout

Sheets are full-bleed blocks inset from the viewport by the wall gap and stacked with the same gap, so the sand wall shows as a seam between every sheet (the gap narrows under 560px). Content inside a sheet sits in the 1360px container with fluid side margins; section sheets carry fluid 56 to 104px vertical padding.

Grids are asymmetric two-column splits on twelfths: hero 5/7, section head 7/5, notices 5/7, record head 8/4, subscription 7/5. Programmes are one act per full-width ruled row on a 4.4 / 4.6 / 3 split (title; text and links; plate). The library and keyboard sheets sit side by side as two half sheets with the wall gap between them.

Breakpoints: 1180px (nav collapses into a full-screen ivory menu), 1050px (act rows go two-column, footer grid to two), 900px (every split stacks, half sheets stack, the ledger goes single column), 700px (act rows single column, vertical tear-off tabs lie horizontal), 560px (narrower wall gap, shorter masthead, stubs full width).

The masthead strip is sticky at 68px (62px under 560px).

## Elevation & Depth

Flat. Depth is two inks and pasted paper: a burgundy sheet sits forward of an ivory one only by tone, and sheets are separated by the sand wall, never by shadow. The one shadow-like device in the world is text: on load, the hero headline prints in a second, misregistered brass pass (an offset brass text-shadow) that settles into register over 1.1s. The news-row hover uses a flat burgundy bleed past the column edge, not a shadow.

### Named Rules
**The Pasted-Sheet Rule.** Sections are separate sheets meeting at visible sand seams. Never separate sections with shadows, gradients or outlined boxes.

**The Tanaka Plane Rule.** Structure is flat ink fields and printer's rules. A group is made with a rule above it, never with a box around it.

## Shapes

Every corner is square (0px): stubs, inputs, icon buttons, sheets, chips, plates. The recurring printer's marks:
- **Double rule:** a 4px rule over a 1px rule with a 3px gap, in the current ink. It opens section heads, closes the Nastaliq band, and tops the ledger, the library series list, the news list and the footer grid. These thick top rules are the world's native printer's rule, not an accent bar.
- **Hairline rule:** 1px, burgundy on light sheets and on-ink-rule on burgundy, between rows.
- **Perforation:** a dotted vertical line separating a stub's arrow tab from its label.
- **Tear-off edge:** a row of sand half-circles biting into the top edge of the subscription sheet, with dashed fringes between its tear-off tabs.
- **Square bullet:** a small square in the ink colour between billed names, Latin and Nastaliq alike.

## Components

### Buttons
Square tickets with a perforated tear-off tab carrying the arrow ("stubs").
- **Shape:** square (0px), 52px tall (44px small; 56px beside the email field); wood-type label with 20px side padding; the arrow tab is separated by a dotted perforation.
- **Primary on light sheets:** burgundy with ivory type; hover to second burgundy. The alternate stub is deep ivory with burgundy type, hovering to burgundy.
- **Primary on burgundy sheets and the masthead:** brass with burgundy type; hover to ivory. The alternate is second burgundy (burgundy on the library sheet) with ivory type, hovering to ivory.
- **Hover / Focus:** colour swap over 0.18s; the arrow slides 4px right on the expressive ease (cubic-bezier(.16,1,.3,1)). Focus is a 3px outline offset 3px, burgundy on light sheets, brass on burgundy.
- **Arrow links:** uppercase wood-type labels (14px, width 90) with a 16px square-capped arrow, 44px target; hover underlines and nudges the arrow 4px. Used in rows under bills, notices and tool lists.
- **Icon buttons:** 44px squares in second burgundy, hovering to brass with burgundy icon.

### Inputs / Fields
- **Style:** deep ivory fill, no border, a 3px burgundy underline drawn inset, square, 56px tall, 17px grotesk in burgundy.
- **Focus:** fill lifts to newsprint white, plus a 3px burgundy outline offset 3px.
- **Error:** the underline turns error red.

### Navigation
A sticky burgundy masthead strip. The logo sits on a newsprint-white chip. Top-level items are wood-type labels (14px, width 86) divided by 1px on-ink-rule seams; hover or focus reverses the whole cell to ivory with burgundy type. Mega menus drop as ivory sheets under a 4px burgundy top rule, two columns of wood-type titles over grotesk descriptions, hairline-divided. Under 1180px the nav becomes a full-screen ivory sheet with 24px wood-type items on burgundy rules and a chevron toggle per submenu.

### The Language Roll
The 29 languages set as a programme index, A to Z, reading down three columns (two under 1180px). Each row has a wood-type index letter in the gutter (shown on the first name of each initial and at the top of a column), the name in index type, and beneath it the family, a square bullet and where the language is spoken. Rows are explicit grid rows, so their ivory-rule hairlines align across columns like a ledger. Hovering or focusing a row reverses it out (burgundy fill bleeding 12px past the column, ivory type), widens the name from 84 to 94 and slides in an arrow. On phones the place line drops, leaving name and family in two columns. A family tally (By family: 21 Indo-Aryan, 5 Iranian, 1 Nuristani, 1 Tibeto-Burman, 1 isolate) sits under the closing rule beside the arrow links.

### Bills
Short lists of names billed in fitted wood type, separated by square bullets, balanced into even lines that each fill the measure: the keyboard languages, and a right-to-left, unstretched Nastaliq version that closes the hero sheet. Keep bills to about 15 names; a longer list becomes a wall of shouting type and belongs in the roll.

### Programme rows
One act per full-width row: a condensed wood-type title that breathes from width 70 to 84 on hover over 0.6s, a grotesk paragraph over a hairline link list (600 weight, 44px rows, arrow on the right), and a plate. Rows are divided by 1px burgundy rules.

### Plates
Every photograph is a plate with a numbered caption: "PLATE n" in wood-type label, then a grotesk sentence saying what and where. Plate numbers run in sequence down the page. Object photographs (book covers) sit uncropped and multiplied onto the paper.

### Ledger
The record on a burgundy sheet: a two-column ledger opened by the ivory double rule, each entry a fitted wood-type line with its numbers in 900, followed by a muted grotesk explanation.

### Notice list
A lead notice (plate, headline, then date and category beneath it, standfirst) beside a ruled list of dated rows: a wood-type date block (46px day over a month line, tabular numerals) and a grotesk headline with its category beneath. Hover floods the row burgundy and bleeds the fill 14px past the column.

### Tear-off stub
The subscription sheet has a perforated top edge and a fringe of vertical tear-off tabs (email, phone, partner, volunteer, support) separated by dashed rules; each tab floods burgundy on hover. Under 700px the tabs lie horizontal.

### Imprint
The hero sheet and the footer each close with a printer's imprint: a line of grotesk caption facts (place, establishment, registration) spread across the measure under a rule. The footer opens with the organisation's name fitted as a single wood-type signature line.

## Do's and Don'ts

### Do:
- **Do** fit every billing line (hero, bills, ledger, footer signature) to the full measure, width axis first, then size.
- **Do** keep brass for stubs, hovered links, focus and selection only (The Arcade Rule).
- **Do** open every major block with the double rule (4px over 1px) in the current ink.
- **Do** give every photograph a numbered plate caption saying what and where.
- **Do** separate sections as pasted sheets with a sand seam (10px; 6px under 560px).
- **Do** put a news category under its headline, never above it.
- **Do** set the full language list as the A–Z roll and short lists as a fitted bill, never as tiles or cards.
- **Do** keep every corner square (0px).

### Don't:
- **Don't** use rounded corners, cards, outlined boxes, gradients or drop shadows.
- **Don't** put a kicker or eyebrow label above a headline.
- **Don't** let a wood-type billing line wrap ragged.
- **Don't** print headings, rules or decorative fields in brass.
- **Don't** stretch Nastaliq on a width axis or set it in any face but Noto Nastaliq Urdu.
- **Don't** use a photo hero, a stat row of numbers in boxes, or tabs.
