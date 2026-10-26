# FLI Website Audit — fli-online.org

**Site:** https://fli-online.org (Forum for Language Initiatives, Islamabad)
**Audit date:** 21 October 2026
**Method:** Every main-menu item, the homepage buttons and footer links, and a sample of posts, sub-pages and orphan pages were loaded. The WordPress REST API was used to list all published content. Internal links on 48 top-level pages (311 URLs) were checked. Mobile was tested at 390 px and tablet at about 900 px.

---

## 0. Snapshot

| Item | Finding |
|---|---|
| CMS / theme | WordPress, **Enfold** theme (Avia Layout Builder) |
| Page builders in use | **3 at once**: Avia, Elementor 4.3.5 (incl. Elementor AI / MCP composer), SiteOrigin Panels |
| Hosting | Hostinger (hcdn). Returns "Error establishing a database connection" (HTTP 500) under modest parallel load |
| Content volume | **235 pages**, **217 posts**, **1,067 media files**, 1 custom post type (`portfolio`, theme demo only) |
| Post categories | News & Events (183), News Home (135), Uncategorized (30), subscriptions (5), Images (8), Personal (0) |
| Plugins detected | Contact Form 7, Forminator, MC4WP (Mailchimp for WP), Subscribe2, Elementor + Elementor One/AI, SiteOrigin Panels + Widgets Bundle, LayerSlider, Really Simple Security (2FA), Hostinger Reach, WPMU DEV Hub Connector |
| SEO | No SEO plugin. **No meta descriptions** on any page checked. No Open Graph. No schema. **0 H1 on the homepage** and on most pages. robots.txt lists 3 sitemaps, **all 404** |
| Analytics | No GA4 / GTM detected |
| Performance (desktop, warm) | TTFB ~650 ms, DOMContentLoaded ~1.2 s, **132 requests, 58 JS + 57 CSS files** on the homepage. A full-screen **preloader** hides the content on every page load |
| Languages | Content in English and Urdu (RTL). Urdu tables are pasted from MS Word (`MsoTable` markup) |
| Donations | None (no donate page; `/donate/` returns 404) |
| Privacy policy | None for the site (`/privacy-policy/` returns 404). Only a 2022 conference refund policy exists |

---

## 1. Page-by-page audit

> Legend: **W** = approximate word count of the main content. "Comment form" means a WordPress "Leave a Reply / You must be logged in" block is showing on a static page.

### Global elements (every page)

- **Top bar:** "Call us now: +92 (0)51 22500 68" plus X, Facebook, YouTube, LinkedIn and Instagram icons.
- **Header:** FLI logo (maroon serif "FLI" with a grey quill), menu (Home, About, Target Languages, Program & Services, News & Media, Contact Us) and a search icon.
- **Footer (inside the content area):** "IMPRINT" (P.O. Box 763, Islamabad, phone), a "DISCLAIMER" paragraph, social icons, and a developer credit to dynasols.com.
- **Problems:**
  - The footer email link is coded as `href="\"info@fli-online.org\""`. It is **404 on every page** (it resolves to `/<page>/%22info@fli-online.org%22`), so there is no working email link anywhere on the site.
  - At about 900 px (tablet landscape or a small laptop), the **logo overlaps "HOME / ABOUT"** and "CONTACT US" wraps onto a second row.
  - The mobile hamburger icon is **bright green**, which is not a brand colour.
  - A full-screen preloader (logo plus spinner) runs on every page and delays visible content.
  - No skip link, no H1 on most templates, and many images have no alt text.

### 1.1 Homepage — `/`

- **Title:** "Forum for Language Initiatives (FLI) – Preserving the wealth of regional cultures and languages of Pakistan"
- **Purpose / audience:** Front door for donors, partners, researchers and language communities.
- **Structure (all H2/H3, no H1):**
  1. Hero with the vision quote on a mountain photo: "We are Striving 'To See all Ethnolinguistic Communities in Pakistan Flourishing Culturally and Economically'"
  2. Three cards: Quick About FLI, Our Values, Our Objectives
  3. "News & Updates…" showing **only 2 posts per page, with pagination "Page 1 of 68"**
  4. Six tiles: Events, Free Resources, Success Stories, Media Gallery, News & Updates, Our Publications
  5. "We are at the forefront…" text, a "Get in touch" button and a "Subscribe Here" form
- **CTAs and where they go:**
  - Quick About → `/about-us/`
  - Values → `/our-values/`
  - Objectives → `/our-objectives/`
  - **Events → `/IHCC4/`, a 2022 conference page**
  - **Free Resources → software.sil.org (external, not FLI's own resources page)**
  - Success Stories → `/success-stories/`
  - Media Gallery → `/site/photo-gallery/` (old `/site/` path, redirects)
  - News → `/news/`
  - Publications → `/site/flis-publications/` (redirects)
  - Get in touch → `/contact/`
- **Forms:** Subscribe2 email subscription, which posts to `/news-events/`.
- **Media:** 13 images, **9 with no alt text**. Images are served from the old `/site/wp-content/` path.
- **Design:**
  - Display font (Metrophobic-style) with a maroon / blue / yellow palette.
  - The "Quick About FLI" card uses grey text on white, which has low contrast.
  - Three different button styles (yellow pill, white pill, plain).
  - At 390 px the page is about **9,600 px tall**.
- **Problems:**
  - No H1 or meta description.
  - The Events tile points to a 2022 event.
  - The Free Resources tile sends users off-site.
  - Two-posts-per-page news pagination.
  - Raw image URLs and timestamps leak into the post-loop markup.

### 1.2 About (menu parent links to `/`, so it is not a real page)

| URL | Title | Purpose / key content | CTAs / downloads | Problems |
|---|---|---|---|---|
| `/our-values/` | Our Vision, Mission and Values | Vision, mission and core values in one block (W≈178) | — | H4 used for "Vision" and "Mission"; no H1; text only |
| `/our-objectives/` | Our Objectives | Goal statement plus 6–7 objectives about mother-tongue use, education and policy (W≈230) | — | **No headings at all**; text only |
| `/about-us/` | **"Impact Stories"** (page title) | Actually a **"Quick About FLI" fact table**: registration no. CRRFA/ICT/27, est. 2002, ED Fakhruddin Akhunzada, contacts | **Download FLI Brochure** (`FLI-Broucher-2025.pdf`, misspelt) | The page title, menu label ("Our Success Stories") and content all disagree. The Word table **overflows horizontally on mobile**. Large empty whitespace blocks |
| `/xxxx-2/` | Impact Stories | Community testimonials, "Stories of Those We Worked With", "Click for More Stories" | → `/more-impact-stories/` (empty page) | Placeholder slug `xxxx-2`; 2 images with no alt; the "more" page is blank, and a "(copy)" duplicate exists |
| `/fli-executive-board/` | FLI Executive Board | List of 8 board members (Chairman Rozi Khan Burki … ED) | Individual bio pages exist but are inconsistently linked | Bio pages have slugs like `/8635-2/` and `/8528-2/` (one with no title); there are **two more duplicate board pages**: `/fli-board-members/` and `/detailed-individual-information-about-fli-board-members/` |
| `/success-stories/` | Success Stories | Bullet list of achievements (CBOs formed, teachers trained…) (W≈379) | — | Overlaps with Impact Stories. A **post** also uses the same slug (`/success-stories/`, 2015) |

### 1.3 Target Languages

| URL | Title | Purpose / key content | Problems |
|---|---|---|---|
| `/languages/` | "Description of the languages spoken in our target area (Northern Pakistan)" | Numbered index of about 30 languages (Balti → Yadgha) in 3 columns, linking to profiles | Very long title; no H1; **"Madaklashti / Dari" not linked**; small tap targets on mobile (34 links under 24 px) |
| `/balti/`, `/torwali/`, `/yidgha/`, `/mankiyali/` … (about 30 profile pages) | Language name | Prose descriptions, 150–400 words: location, speakers, family, FLI work | **No common template** (no facts box for speakers, ISO code, region, script or resources). Some show a comment form. Recent ones (Yadgha, Domaaki, Gawarbati) were rewritten in 2026; most date from 2019–2022 |
| `/gawar-bati/` **and** `/domaaki/` | Gawar-Bati / **Gawarbati** | Two separate Gawarbati pages. The slug `/domaaki/` contains Gawarbati text, while Domaaki is at `/domaaki-2/` | Duplicate content and misleading URLs |
| `/<lang>-bibliography/`, `-multimedia/`, `-technical-resources/`, `-vernacular-publication/` (about 40 pages, 2019) | Bibliography / Multimedia / … | Per-language resource sub-pages left over from an older IA | **Mostly empty** (1–4 words). Many generic duplicates (`/bibliography-2/` … `-4/`, `/multimedia-2/` … `-7/`, `/vernacular-publications-2/` … `-5/`) |
| `/language-map-2/` | Language Map | One map image/PDF "Language Map of Northern Pakistan (Eng)" | Almost no text; comment form; `-2` slug |
| `/language-tree/` | Language Tree | Pakistan Language Tree in English and Urdu | PDF downloads only (2017 file); comment form |
| `/language-relatedness/` | Language Relatedness | **This is a blog post** (Uncategorized, Jul 2026) linked from the menu | "Click to Download" PDF; post-type mismatch; share buttons |
| `/list-of-pak-languages/` | List of Pak Languages | Table of about 75 Pakistani languages with alternative names (links to Ethnologue) | Not in the menu; the table overflows on mobile; 72 tiny tap targets |
| `/table-of-languages/`, `/list-of-languages/` | — | Empty shells | Remove |

### 1.4 Program & Services (parent links to `/flis-publications/`)

**Training**

| URL | Title | Content | Downloads | Problems |
|---|---|---|---|---|
| `/equipping-the-communities/` | Equipping the Communities | **Empty** (heading plus comment form) | — | Menu parent with no content |
| `/discovery/` | Discovery Course | "Discovery Course Offering – Click here for details" | 1 PDF (invitation letter) | Thin; old |
| `/mle-committee-training/` | MLE Committee Training | Links to 3 workshop reports | 3 PDFs | No explanation of the programme; duplicates exist (`-2`, `-3`, `-ii`, `/mile-committee-training/`) |
| `/curriculum-and-materials-development/` | Curriculum and Materials Development | LMD-1 to LMD-6 workshop report list | 5–6 PDFs | No context text; a `-2` duplicate exists |

**Publications** (parent links to `/`)

| URL | Title | Content | Problems |
|---|---|---|---|
| `/flis-publications/` | FLI's Publications | Hub with 6 headings (Vernacular, Language & Culture Series, Other, Newsletters, Cultural Calendar 2022, Translations) | No covers, descriptions or search. The Calendar 2022 PDF link is **404** when reached via `/site/flis-publications/` |
| `/publication-series-of-local-language-literature/` | Vernacular series | **Urdu (RTL) Word table** listing about 40 books: no., title, language, author, year | Not filterable; **overflows on mobile**; no covers or downloads; heading tags used for table cells |
| `/language-culture-series/` | FLI Language and Culture Series | English table of research books (2006 onward) | Table pasted as text; 206 small-text elements on mobile |
| `/other-books-published-by-fli/` | Other Books published by FLI | Urdu table of primers and alphabet books (2005 onward) | Same table issues; H2/H4 misused |
| `/newsletters/` | Newsletters | Quarterly 2026 reports plus annual newsletters 2016–2025 | 18 PDFs plus a heyzine flipbook. The best-maintained page, but still just a list of links |
| `/materials-translated-by-fli-into-urdu/` | Materials Translated into Local Languages | Child Rights Declaration, Human Rights Declaration, UNESCO booklets | The slug says "into Urdu" but the title says "Local Languages" |
| `/academic-papers/` (not in menu) | Academic & Technical Papers | About 20 linked papers (Liljegren, Akhunzada…) | 13 PDFs; orphaned from the menu |

**Digital Resources**

| URL | Title | Content | Problems |
|---|---|---|---|
| `/digital-resources/` | Digital Resources | **Completely empty** | Menu parent with no content |
| `/fonts/` | Fonts | Nafees Nastaleeq, Awami Nastaliq, Andika, Charis SIL, Lateef, Scheherazade | **`AwamiNastaliq-1.000.zip` link is 404**; mostly external SIL links |
| `/software/` | Software | Bloom, FLEx, Keyman, Toolbox, WeSay (external links) | No descriptions; comment form |
| `/fli-pc-keyboards-2/` | Keyboards | Elementor page with 3 buttons: Android, PC, Other | Uses a 3rd page builder; "Other Content" goes to a near-empty page |
| `/language-keyboards-2/` | Language Keyboards | 14 Android keyboards (Balti → Yadgha) | Downloads from Google Drive, Play Store and zip files; no install guide on the page |
| `/fli-pc-keyboard/` | FLI PC Keyboard | 15 PC keyboard zip downloads | Duplicates: `/fli-pc-keyboards/`, `/fli-pc-keyboards-3/`, `/pc-keyboards-2/`, `/indus-kohistani-keyboard/`, `/android-keyboards-for-…-google-play/` |
| `/covid-19/` | COVID-19 | 2020 awareness videos and banners in Kalasha, Shina, Khowar | **Outdated**; 2 H1s; YouTube embeds |

**Other Resources**

| URL | Title | Content | Problems |
|---|---|---|---|
| `/windows-configuration-settings-for-pakistani-languages/` | Windows Configuration Settings… | **Empty** (title plus comment form) | Remove or write it |
| `/research-tools/` | Research Tools | Toolbox, FLEx, WeSay links | Duplicates `/software/` |

**Advocacy & networking**

| URL | Title | Content | Problems |
|---|---|---|---|
| `/advocacy-awareness/` | Advocacy & Awareness | "Advocacy and Networking — Amplifying Voices…" overview (W≈458), updated 2025 | Good copy; text only |
| `/writers-worships/` | "FLI Hosts Regional Partners' Meeting in Peshawar…" | **A news article stored as a page**, under a misspelt slug ("worships") and menu label | It is also published as a post, so the content is duplicated |
| `/networking/` | Networking | **Empty** | — |

**Conferences**

| URL | Title | Content | Problems |
|---|---|---|---|
| `/conference-of-the-foundation-for-endangered-languages/` | Conference of the FEL | FEL XXVIII 2024 (Islamabad, AIOU): call for papers (closed), registration, venue, programme | **7 H1s**; outdated (2024); links to `/site` (404) |
| `/ihcc4/` (menu link) | **Conferences** | — | **HTTP 500 "Error establishing a database connection" every time it was tested.** The uppercase `/IHCC4/` works and shows the 2022 Hindukush Cultural Conference (6,400 words, 36 images, 28 without alt) |
| `/register-for-ihcc/`, `/ihcc4-registration/` | IHCC4 Registration | 2022 registration form (Forminator), steps, fee, **bank account details** | Event is over. One page shows a broken shortcode: "Module ID attribute is required!". Public bank details |
| About 17 old IHCC pages from 2020 (`/background/`, `/venue/`, `/themes/`, `/programme/`, `/keynote-speakers/`, `/online-registration-and-payment/` …) | — | Mostly empty shells | Archive or remove |

### 1.5 News & Media (parent links to `/`)

| URL | Title | Content | Problems |
|---|---|---|---|
| `/fli-in-the-media/` | FLI in the Media | BBC Urdu, Dawn, Mashriq, Chitral Express links and TV reports | Uses underscore lines ("______") as separators inside H3s; comment form |
| `/news/` | News | "Latest Event News" post list (titles, excerpts, dates) | Generic author "Administrator"; no filters by language or programme; 2 overlapping categories |
| Blog posts (217), e.g. `/fli-executive-board-meeting/` | Post title (H1) | Event reports, book launches, workshops, MoUs, 2013–2026; active (roughly 2–4 a month in 2026) | Featured images have no alt. "Uncategorized" is used. **Test posts are live**: "tsstet", "tets", "testtt 3", "test2222", "Test Post", "test subscription". Duplicate posts (e.g. "Awami Nastaliq Releases Updated Fonts" twice, "Collaborative Language Research Workshop" twice, "16 people trained…" twice, "How many languages spoken in Pakistan?" twice). Odd slugs (`/8830-2/`, `/5299/`, `/4789/` with no title). Old IHCC info pages stored as posts |
| `/photo-gallery/` (not in menu; linked from the homepage) | Photo Gallery | 79 images | **79 of 79 images have no alt**; a single unsorted grid |
| `/video-galary/` | Video Gallery | "Click Here for Event Reports" only | Misspelt slug; no videos; `/videos-library/` is empty too |

### 1.6 Contact — `/contact/`

- **Content:** "Subscribe to our News and Updates" (Subscribe2), address (P.O. Box 763, Islamabad), phone, and a "Write to us" form (Name, E-Mail, Subject, Message). The form is the Enfold Avia AJAX form with a captcha.
- **Problems:**
  - No email address shown (and the footer mailto is broken).
  - No map or office street address, no opening hours.
  - No privacy notice next to the forms.
  - The subscription form exposes honeypot labels ("Leave This Blank", "Do Not Change This") to screen readers.

### 1.7 Orphaned, theme-demo and test content that is publicly reachable

- **Enfold law-firm demo pages:**
  - `/practice-areas/` (litigation and "Criminal Defence Law Firm" lorem ipsum)
  - `/faq/` (lorem ipsum about lawyers and pricing)
  - `/about-us/our-lawyers/` ("Erwin Sanson, Adriana Aero…")
  - `/about-us/the-firm/`
- **Enfold feature demos:** `/blog/`, `/blog/masonry-blog/`, `/blog/blog-grid/`, `/post-slider/`, `/tabs/`, `/team/`, `/testimonials/`, `/pricing-and-data-tables/`, `/layer-slider/`, `/iconbox/`, `/transparent-header/` … (about 20 pages from 2019)
- **Portfolio CPT:** 4 demo items, e.g. `/portfolio-item/lorem-ipsum/` ("Single Portfolio: 2/3 Gallery")
- **Test pages:** `/test/`, `/test-2/`, `/test-3/`, `/test-4/`, `/test-page/`, `/coming-soon/`, `/8327-2/`, `/8528-2/` (no title)
- **Legacy stubs:** `/did-you-know/`, `/teacher-training/`, `/join-our-discussion-group/`, `/subscribe-for-information/`, `/email/`, `/find-us-on-facebook-and-twitter/`, `/news-and-events/`, `/news-events/`, `/literacy/`, `/approaches-to-literacy/`, `/mtb-mle-brochure/`, `/palula-mle-program/`, `/torwali-mle-program/`, `/gawri-mle-program/`, `/human-rights/`, `/annual-report-2016/`, `/folktales*`, `/stories-in-ushojo-language/` and others (mostly 1–40 words)
- **`/wp-login.php`** is publicly reachable (normal, but worth hardening)

### 1.8 Broken links and errors found

| Broken URL | Status | Found on |
|---|---|---|
| `"info@fli-online.org"` mailto (resolves to `/…/%22info@fli-online.org%22`) | 404 | **Every page** (footer) |
| `/ihcc4/` | **500 DB error** | Main menu → Conferences |
| `/site/wp-content/uploads/2017/10/AwamiNastaliq-1.000.zip` | 404 | `/fonts/` |
| `/site` | 404 | FEL conference page |
| `/site/call-for-abstracts/` | 404 | `/IHCC4/` |
| `/site/site/wp-content/uploads/2022/02/FLI-Cultural-Calendar-2022.pdf` | 404 | `/site/flis-publications/` (relative link) |
| `/sitemap.xml`, `/sitemap-index.xml`, `/sitemap-index-1.xml` | 404 | robots.txt |
| `/register-for-ihcc/` shortcode | "Module ID attribute is required!" | On the page |
| Random pages under load | 500 "Error establishing a database connection" | 7 of 27 pages failed when requested in parallel; all loaded when retried one at a time. This points to a hosting / DB connection limit |

---

## 2. Sitemap (current, as built)

```
fli-online.org
├── Home  /
├── About  (menu label only → /)
│   ├── Our Vision & Mission ............ /our-values/
│   ├── Our Strategic Objectives ........ /our-objectives/
│   ├── Our Success Stories ............. /about-us/          (titled "Impact Stories", contains "Quick About FLI")
│   ├── Impact Stories .................. /xxxx-2/
│   │   └── More Impact Stories ......... /more-impact-stories/   (empty) [+ "(copy)" duplicate]
│   └── FLI Executive Board ............. /fli-executive-board/
│       ├── Board bios .................. /dr-farhat-abdullah/, /fazal-karim/, /8635-2/, /8528-2/ …
│       ├── [dup] /fli-board-members/
│       └── [dup] /detailed-individual-information-about-fli-board-members/
├── Target Languages .................... /languages/
│   ├── Short description of Target Languages → /languages/
│   │   └── ~30 language profiles ....... /balti/ /bateri/ /burushaski/ /chilisso/ /dameli/
│   │       /domaaki-2/ /gawar-bati/ /domaaki/(=Gawarbati) /gawar-kalam-kohistani/(Gawri) /gojri/
│   │       /gowro/ /hindko/ /indus-kohistani/ /kalasha/ /kalkoti/ /kam-kataviri/ /kashmiri/
│   │       /khowar/ /kundal-shahi/ /mankiyali/ /ormuri/ /pathari-potwari/ /palula/ /pashto/
│   │       /shina/ /torwali/ /ushojo/ /wakhi/ /yidgha/  (Madaklashti: no page)
│   │       └── legacy sub-pages per language: -bibliography / -multimedia /
│   │           -technical-resources / -vernacular-publication (≈40, mostly empty)
│   ├── Language Map .................... /language-map-2/
│   ├── Language Tree ................... /language-tree/
│   ├── Language Relatedness ............ /language-relatedness/   (blog post)
│   └── [orphan] List of Pak Languages .. /list-of-pak-languages/
├── Program & Services .................. /flis-publications/
│   ├── Training ........................ /equipping-the-communities/   (empty)
│   │   ├── Discovery Course ............ /discovery/
│   │   ├── MLE Committee Training ...... /mle-committee-training/
│   │   └── Curriculum & Materials Dev .. /curriculum-and-materials-development/
│   ├── Publications (→ /)
│   │   ├── Vernacular Series ........... /publication-series-of-local-language-literature/
│   │   ├── Language & Culture Series ... /language-culture-series/
│   │   ├── Other Publications .......... /other-books-published-by-fli/
│   │   ├── Newsletters ................. /newsletters/
│   │   ├── Materials Translated ........ /materials-translated-by-fli-into-urdu/
│   │   └── [orphan] Academic Papers .... /academic-papers/
│   ├── Digital Resources ............... /digital-resources/   (empty)
│   │   ├── Fonts ....................... /fonts/
│   │   ├── Software .................... /software/
│   │   ├── Keyboards ................... /fli-pc-keyboards-2/
│   │   │   ├── Android ................. /language-keyboards-2/
│   │   │   ├── PC ...................... /fli-pc-keyboard/
│   │   │   └── Other ................... /fli-pc-keyboards-3/  [+ dups /fli-pc-keyboards/, /pc-keyboards-2/]
│   │   └── COVID-19 Awareness .......... /covid-19/
│   ├── Other Resources (→ /)
│   │   ├── Windows Config Settings ..... /windows-configuration-settings-for-pakistani-languages/ (empty)
│   │   └── Research Tools .............. /research-tools/
│   ├── Advocacy & Awareness ............ /advocacy-awareness/
│   │   ├── Writers' Workshops .......... /writers-worships/   (news article as page)
│   │   └── Networking .................. /networking/   (empty)
│   └── Conferences
│       ├── FEL Conference 2024 ......... /conference-of-the-foundation-for-endangered-languages/
│       └── IHCC4 (2022) ................ /ihcc4/  (500 error)   |  /IHCC4/ works
│           ├── /register-for-ihcc/ , /ihcc4-registration/ , /select-the-event/
│           ├── /fli-privacy-and-refund-policy-for-4th-ihcc/
│           └── ~17 legacy IHCC pages (/background/, /venue/, /programme/ …)
├── News & Media (→ /)
│   ├── FLI in the Media ................ /fli-in-the-media/
│   ├── News ............................ /news/
│   │   └── 217 posts  (/category/news/, /category/news-home/, /author/administrator/)
│   ├── [homepage-only] Photo Gallery ... /photo-gallery/
│   └── [orphan] Video Gallery .......... /video-galary/ , /videos-library/
├── Contact Us .......................... /contact/
├── Search .............................. /?s=
└── Not linked / should not be public
    ├── Enfold demo: /practice-areas/ /faq/ /about-us/our-lawyers/ /about-us/the-firm/ /blog/* /tabs/ /team/ …
    ├── Portfolio demo CPT: /portfolio-item/* (4)
    └── Test: /test/ /test-2/ /test-3/ /test-4/ /test-page/ /coming-soon/ + test posts
```

---

## 3. The organization, its audiences and the site's goals

**What FLI does.** The Forum for Language Initiatives is a non-profit registered in Islamabad (CRRFA/ICT/27, est. 2002, Executive Director Fakhruddin Akhunzada). It works to document, develop and revitalise the minority and endangered languages of northern Pakistan: Chitral, Gilgit-Baltistan, Swat, Kohistan, Dir and South Waziristan. It currently works with about 30 languages, including Palula, Kalkoti, Gawarbati, Yadgha, Ormuri, Torwali, Khowar, Shina and Dameli. Its work covers:

- **Capacity building:** writers' workshops, orthography development, language documentation training, linguistic map-making and vitality surveys.
- **Mother-tongue education (MTB-MLE):** curriculum and materials development, teacher training (e.g. Saraiki and Khowar subject teaching in government schools) and support for provincial language-in-education policy.
- **Publishing:** the Vernacular Series (about 40 titles), the Language & Culture research series, primers and alphabet books, poetry anthologies, translations of UN and UNESCO texts, and quarterly and annual newsletters.
- **Digital language technology:** Unicode fonts (Nafees Nastaleeq, Awami Nastaliq) and Android and PC keyboards for about 15 languages.
- **Community networking and advocacy:** support for about 23 community-based organisations, cultural festivals and mushairas, partner meetings, and MoUs (e.g. with the Mozilla Foundation and Palula and Ormuri groups).
- **Academic events:** International Hindukush Cultural Conference 2022 and the FEL XXVIII conference 2024.

**Who it serves.** FLI's own RFQ lists the audiences as:

1. Funders and donors
2. Language communities (speakers, writers, poets, CBOs, teachers, often on mobile and slow connections, and many reading Urdu)
3. Researchers and linguists
4. Educators and government education departments
5. Partners and media

**Main goals the site should achieve:**

1. Show credibility and impact to funders (annual reports, results, governance).
2. Distribute resources (books, fonts, keyboards, research) to communities and researchers.
3. Report news and events regularly.
4. Grow and keep an email subscriber base.
5. Act as an authoritative reference on the languages of northern Pakistan.

---

## 4. The 10 biggest weaknesses

1. **Broken core functions.**
   - The "Conferences" menu link returns a 500 database error.
   - The site-wide email link is 404 on every page.
   - Several downloads (Awami Nastaliq font, Cultural Calendar) return 404.
   - The robots.txt sitemaps don't exist.
   - The database fails under small bursts of traffic.
2. **Confused information architecture.**
   - Three menu parents ("About", "Publications", "Other Resources") link to the homepage.
   - Two parents ("Digital Resources", "Equipping the Communities") are empty pages.
   - "Program & Services" opens the Publications page.
   - Menu labels, page titles and URLs contradict each other (e.g. "Our Success Stories" → `/about-us/` titled "Impact Stories", which shows "Quick About FLI").
3. **Content bloat and duplication.**
   - 235 pages, of which roughly 100+ are empty, test, demo or duplicate.
   - Examples: four keyboard pages, three board pages, two Gawarbati pages, about 40 empty per-language sub-pages, duplicate posts.
4. **Public junk content that hurts credibility.**
   - Enfold law-firm demo pages ("Our Lawyers", "Practice Areas – Criminal Defence") and lorem-ipsum portfolio items are indexable.
   - Test posts are live ("tsstet", "testtt 3").
5. **Publications are not usable as a library.**
   - About 100 books are buried in Word-pasted tables (Urdu RTL) with no covers, summaries, download links, filters or search by language, type or year.
   - The tables overflow on phones.
6. **SEO is close to zero.**
   - No H1 on most pages, no meta descriptions, no Open Graph or schema, and no working XML sitemap.
   - Slugs include `/xxxx-2/`, `/8635-2/`, `/writers-worships/`, `/video-galary/` and `/domaaki/` (holding Gawarbati content).
   - Mixed `/site/` legacy URLs and no SEO plugin.
7. **Weak performance and technical stack.**
   - Enfold plus three page builders (Avia, Elementor, SiteOrigin) plus LayerSlider.
   - 58 JS and 57 CSS files on the homepage, and a blocking full-screen preloader on every page.
   - Two form plugins (CF7, Forminator) plus the Avia form, and two subscription plugins (Subscribe2, MC4WP).
   - Images are served through old `/site/` paths.
8. **Poor mobile and tablet experience.**
   - The header breaks at about 900 px (logo overlaps the menu).
   - Wide tables overflow at 390 px.
   - The homepage is about 9,600 px long.
   - Many tap targets are under 24 px, and the hamburger icon is off-brand green.
9. **Accessibility gaps.**
   - Images without alt text (79 of 79 in the gallery, 9 of 13 on the homepage).
   - Headings misused for layout (H3 for table cells, H1 used 7 times on one page, H4 for "Vision").
   - Low-contrast grey text, honeypot labels exposed, no skip link, a broken mailto link, and no `lang`/`dir` markup on Urdu blocks.
10. **Outdated, static, one-way content with no conversion paths.**
    - The homepage "Events" tile points to a 2022 conference, and COVID-19 is still in the menu.
    - Registration pages for past events, with bank details, are still live.
    - No donate or support path, no privacy policy, and no GA4 analytics.
    - The homepage shows only 2 news items with "Page 1 of 68".
    - Impact is told through bullet lists instead of numbers, stories and photos.

---

## 5. Content plan: keep, merge, rewrite, remove

### KEEP (migrate largely as is, re-templated)

- All **217 news posts**, after cleanup. These are the strongest evidence of activity. Recategorise them by programme and language.
- **Newsletters and annual reports** (2016–2026 PDFs and quarterly reports).
- **Advocacy & Awareness** overview copy.
- Recently rewritten **language profiles** (Yadgha, Domaaki, Gawarbati 2026, Mankiyali, Torwali, Balti …).
- **Board member bios** (the 2025–26 versions).
- **Fonts and keyboards** downloads (verify every file).
- **Academic & Technical Papers** list, **List of Pakistani Languages**, Language Tree and Map PDFs.
- **FLI in the Media** links.
- Brochure 2025 PDF (fix the file-name spelling).

### MERGE

| Merge these | Into |
|---|---|
| `/our-values/` + `/our-objectives/` + `/about-us/` (Quick About) + brochure | **About FLI** (one page: who we are, vision/mission/values, objectives, facts, brochure) |
| `/xxxx-2/` Impact Stories + `/success-stories/` + `/more-impact-stories/` (+ copy) | **Our Impact** (numbers, stories, testimonials) |
| `/fli-executive-board/` + `/fli-board-members/` + `/detailed-individual-…/` + bio pages | **Governance / Board** (Team CPT) |
| `/gawar-bati/` + `/domaaki/` | One **Gawarbati** profile (and keep `/domaaki-2/` as **Domaaki**) |
| 4 keyboard pages + `/indus-kohistani-keyboard/` + Android/Google Play page | **Keyboards** resource entries (one per language, with Android and PC versions) |
| `/software/` + `/research-tools/` + `/fonts/` + `/free-resources/` + `/digital-resources/` | **Digital Tools & Resources** hub |
| `/flis-publications/` + 3 book tables + translations | **Publications Library** (CPT with filters) |
| MLE / Discovery / LMD training pages + report PDFs | **Programmes** pages (Education & MLE; Capacity Building) with linked report resources |
| Language map + tree + relatedness | **Language Atlas** section under Languages |
| `/photo-gallery/` + `/video-galary/` + `/videos-library/` | **Media** (galleries attached to events and posts, plus a YouTube feed) |
| IHCC4 + FEL 2024 + all registration and legacy conference pages | **Events archive** (one entry per conference, with proceedings and programme PDFs) |
| News categories "News & Events" + "News Home" + "Uncategorized" | One **News** taxonomy (by programme and language) |

### REWRITE

- **Homepage:** a real H1, a clear value proposition, impact numbers, featured languages, latest publications, a working news list (6–9 items) and upcoming events. Add Subscribe and Support CTAs.
- **Language profiles:** use one standard template (speakers, region, family, ISO code, vitality, script, FLI's work, resources, related news). Write a Madaklashti/Dari profile.
- **Programme pages:** Training, MLE, Curriculum and Networking need real descriptions. They are currently empty or just lists of links.
- **Contact:** add the email address, street address and map, a working mailto, and a privacy note.
- **Publications:** a cover, summary, language, year, author, ISBN and download for each title, with bilingual Urdu/English fields.
- **`/writers-worships/`:** turn it into a post, or rewrite it as a "Writers' Workshops" programme page.
- **All page titles, slugs and meta descriptions** (with a 301 map from the old URLs).

### REMOVE (with 301 redirects where the URL has inbound value)

- Enfold demo content: `/practice-areas/`, `/faq/`, `/about-us/our-lawyers/`, `/about-us/the-firm/`, `/blog/*`, `/tabs/`, `/team/`, `/testimonials/`, `/pricing-and-data-tables/`, `/layer-slider/`, `/iconbox/`, `/iconlis/`, `/notificatio/`, `/progressbars/`, `/promo-box/`, `/toggles-accordions/`, `/video/`, `/portfolio-shortcode/`, `/post-slider/`, `/transparent-header/`, `/images-with-hotspots/`, and all 4 `portfolio-item` entries.
- Test content: `/test*/`, `/test-page/`, `/coming-soon/`, `/8327-2/`, `/8528-2/` (move the content to Razwal Kohistani's bio), and the test posts "tsstet", "tets", "testtt 3", "test2222", "Test Post", "test subscription", `/4789/`.
- Duplicate posts (Awami Nastaliq ×2, Collaborative Workshop ×2, "16 people trained" ×2, "How many languages" ×2, "Shekhani language" ×2, "3 books in 5 months" ×2).
- Empty shells: `/digital-resources/`, `/networking/`, `/equipping-the-communities/`, `/windows-configuration-settings…/`, `/table-of-languages/`, `/list-of-languages/`, about 40 empty `-bibliography`/`-multimedia`/`-technical-resources`/`-vernacular-publication` pages, `/did-you-know/`, `/join-our-discussion-group/`, `/subscribe-for-information/`, `/email/`, `/find-us-on-facebook-and-twitter/`, `/news-and-events/`, `/news-events/`, `/teacher-training/`, `/select-the-event/`.
- Past event registration flows: `/register-for-ihcc/`, `/ihcc4-registration/` (**remove the public bank details**), `/online-registration-and-payment/`, `/fli-privacy-and-refund-policy-for-4th-ihcc/`.
- The COVID-19 menu item. Move the content to the Resources archive with the topic "Health awareness".
- Unused category "Personal" and the "Images" category (use galleries instead).
- Unused media (audit the 1,067 files; many are probably theme-demo or duplicate images).

---

## 6. Features that need a plugin or custom post type

| Feature | Recommended build | Key fields / notes |
|---|---|---|
| **Publications library** | **CPT `publication`** + taxonomies `language`, `pub_series` (Vernacular, Language & Culture, Primers, Research, Newsletter/Report, Translation), `pub_year`, `topic` | Title (EN + Urdu), cover, author/compiler, year, ISBN, pages, summary, PDF download (with a download counter), external link (Heyzine), related language(s). **Schema: `Book` / `CreativeWork`**. RTL support |
| **Languages** | **CPT `language`** | Name and alternative names, ISO 639-3 code, family/branch, speakers, region(s), map coordinates, vitality status, script, FLI programmes, linked publications, keyboards and news (via relationship fields). Optionally an interactive map (Leaflet) |
| **Resources / digital tools** | **CPT `resource`** + taxonomy `resource_type` (Font, Android keyboard, PC keyboard, Software, Research tool, Awareness media, Paper) | Platform, version, file or store link, install guide, language relationship, last updated |
| **Events** | **CPT `event`**, or The Events Calendar (free) if the team wants calendar and iCal | Start/end date, venue, organisers and partners, registration status (open/closed/external), programme PDF, proceedings, gallery. Auto-archive past events. **Schema: `Event`** |
| **Programmes** | **CPT `programme`** (or structured pages) | Overview, objectives, outcomes and numbers, linked languages, reports, news, partners |
| **Impact stories / testimonials** | **CPT `story`** | Quote, person/community, language, photo, programme |
| **Team & board** | **CPT `person`** + taxonomy `group` (Board, Staff, Advisors) | Photo, role, bio, order. Replaces the 6+ scattered bio pages |
| **Partners & CBOs** | **CPT `partner`** | Logo, type (donor, academic, CBO, government), link, language served. Supports "23 CBOs" claims and donor credibility |
| **Media & press** | **CPT `press_item`** + native galleries / YouTube embeds (lite-youtube) | Outlet, date, link, type (print, TV, online) |
| **News** | Native posts, cleaned taxonomies (programme, language, region) | Retire "News Home" / "Uncategorized"; relate posts to the language and event CPTs |
| **Advanced filtered search** | **FacetWP** (paid) or **Search & Filter Pro**, with **Relevanssi** for full-text and PDF search | Filter by type, language, year, series and author, as required by FLI's own RFQ |
| **Donations** | **GiveWP** (free core) with a local gateway (e.g. bank transfer instructions, Stripe if available, or JazzCash/Easypaisa add-ons) | There is currently no way to support FLI online. Include a donor-facing "Support our work" page |
| **Newsletter / subscribers** | **Mailchimp (MC4WP) or MailPoet / Brevo**. Retire Subscribe2 after migrating the list | Automated emails for new publications, events and posts, as the RFQ requires. Double opt-in and a GDPR-style consent notice |
| **Forms** | **One** form plugin (Gravity Forms or Fluent Forms; drop CF7, Forminator and the Avia form) + Cloudflare Turnstile / reCAPTCHA | Contact, event registration, resource request, partner enquiry |
| **Relationship fields / custom fields** | **ACF Pro** (or Meta Box) | Powers the CPT fields and language↔publication↔resource↔event links |
| **Multilingual (Urdu / English)** | **Polylang** or WPML, or bilingual ACF fields if only some content is translated | RTL stylesheet, Noto Nastaliq Urdu / Awami Nastaliq web font, `lang="ur" dir="rtl"` markup |
| **SEO** | **Rank Math** or **Yoast** | XML sitemap, meta, OG, schema (Organization/NGO, Book, Event, Person), breadcrumbs |
| **Redirects** | **Redirection** plugin (or Rank Math redirects) | 301 map for about 450 legacy URLs, including the `/site/…` paths |
| **Performance** | LiteSpeed Cache / WP Rocket + image optimisation (ShortPixel/Imagify, WebP/AVIF) + CDN | Target PSI mobile 85+ (RFQ). Remove the preloader, LayerSlider and the extra builders |
| **Security & backups** | Wordfence or Solid Security, UpdraftPlus (off-site), keep Really Simple Security 2FA | Hide the login URL or rate-limit it; remove the WPMU DEV hub connector if it's unused |
| **Analytics** | GA4 via Site Kit or GTM, plus download event tracking | Measure publication and keyboard downloads (a key impact metric for funders) |
| **Accessibility** | Theme-level fixes; optional Equalize Digital Accessibility Checker for editors | Required alt text, heading checks, contrast, WCAG 2.1 AA (RFQ) |

---

### Appendix: Notes for a redesign proposal

FLI published an RFQ on this site (re-issued 25 Sep 2026, deadline 4 Oct 2026, submissions to finance@fli-online.org). It asks for:

- A custom theme. Pre-built or premium themes are disqualified.
- Three clickable HTML design concepts.
- CPTs for Publications, Events, Resources and News.
- Filtered search.
- A PageSpeed mobile score of 85+.
- Schema, a 301 map, GA4, subscriber migration to Mailchimp or similar, WCAG 2.1 AA, and staff training.

The findings above map directly onto its six problem areas: navigation and search, mobile, speed, SEO, publishing, and visual design.
