# Review Notes --- v0.1 → v0.7

For the PT KTS team and advising lecturer. This documents what changed,
what's still a placeholder, and what needs a decision from the team.
Sources: `REVISION_V0.2.md` (meeting notes 2026-09-14 + "Struktur" slide),
`REVISION_V0.3.md` (English language + design direction), the v0.4
photo/draft-banner revision (chat instructions, not saved as a separate
file that round), `REVISION_V0.5.md` (copy/writing-rules pass),
`REVISION_V0.6.md` (contact/vision-mission/sample-catalog), and
`REVISION_V0.7.md` (fixes from a visual review of v0.6).

------------------------------------------------------------------------

## 1. What changed (v0.1 → v0.2)

| # | v0.1 | v0.2 |
|---|------|------|
| 1 | Positioning: "From Research to Real-World Solutions" | PT KTS's real structure: 4 business lines (Equipment Supply, Consulting, Engineering Development, Training) + 3 business units (Kappa Solution, Nara Aquaponics, Bumi Hijau) |
| 2 | Training, camp, ESIC, and JESIC excluded from the site | Training is a business line, Camp is a Kappa Solution activity, PT KTS supports ESIC Network --- all now shown (`/training`, `/events`) |
| 3 | No activity calendar | `/events` --- static calendar (`content/events.ts`), upcoming/past, dummy entries labeled "Example" |
| 4 | Invented product concepts (e.g. "Livestock Waste Carbonization System") + a fictional "CARBONIZATION SYSTEM" hero illustration | Real catalog: 11 items from the Struktur slide, grouped by unit |
| 5 | No e-commerce link | Conditional "Online Shop" button (hidden until `site.contact.shopUrl` is set) |
| 6 | English site | Bahasa Indonesia for all site content and routes (later reverted, see v0.3 below) |
| 7 | Build required network access (`next/font/google`) | Self-hosted font via `next/font/local` |
| 8 | "Provisional" notes scattered as inline text | One consistent `<Pending>` component + a draft-mode banner (banner later removed, see v0.4 below) |

## 2. What changed (v0.2 → v0.3)

| # | v0.2 | v0.3 |
|---|------|------|
| 1 | Bahasa Indonesia site content and routes (`/tentang`, `/layanan`, `/produk`, `/pelatihan`, `/kegiatan`, `/kontak`) | **English** site content and routes (`/about`, `/services`, `/products`, `/training`, `/events`, `/contact`) --- the site is accessed by external audiences. Brand names stay untranslated. WhatsApp inquiry messages stay in Indonesian (recipient is the PT KTS team) |
| 2 | Redirects for every renamed v0.1 route | Only `/innovation → /services`, `/projects → /events`, `/insights → /events` kept --- `/about`, `/products`, `/products/[slug]`, `/contact` are unchanged v0.1 paths |
| 3 | Product slugs in Indonesian (e.g. `/produk/insinerator-rampus`) | English slugs (e.g. `/products/rampus-incinerator`) |
| 4 | Original generated visual design | Visual design derived from the founder's own `sparktalks` and `bestiego-app` repos --- see `DESIGN.md` "Reference analysis". Generic-AI patterns (eyebrow-on-every-section, uniform 3/4-card grids, boxed tinted icons, decorative numbering, slogan headings) removed |
| 5 | Visual verification not performed | Playwright-based check across 6 breakpoints (360/390/768/1280/1440/1920px) for overflow, console errors, and reduced-motion; before/after screenshots in `docs/screenshots/` |

## 3. What changed (v0.3 → v0.4)

| # | v0.3 | v0.4 |
|---|------|------|
| 1 | Visible "Website under development" banner on every page | Banner and `DraftBanner` component removed entirely. `NEXT_PUBLIC_DRAFT_MODE` is kept, but only drives `robots`/`noindex` now --- the site just isn't submitted for indexing yet, with no visible "under construction" messaging |
| 2 | No real photography anywhere; hero/product visuals were placeholders or logo panels | 13 curated, optimized documentation photos from ESIC Conference 2026 and Engineering Camp 2026 (see section 8 below), used for the Home hero, an `/about` photo, a `/training` gallery, and `/events` (documentation gallery + a thumbnail per completed event) |
| 3 | `content/events.ts` had only example/dummy entries | Added two real, non-dummy events: **ESIC Conference 2026** (2026-09-01) and **Engineering Camp 2026** (2026-09-03 to 09-05), both `status: "completed"` |
| 4 | Product cards used a generic dark placeholder | Unchanged in v0.4 --- product cards still used the placeholder pattern (later replaced with sample photos in v0.6, see section 10). None of the photos reviewed for v0.4 were confirmed as product photography (see section 9) |

## 4. What changed (v0.4 → v0.5)

A copy-only pass: removed every em dash/en dash and AI-sounding phrasing
(forced triads, rhetorical-question headings, filler words like
"solutions") from all user-visible text, per a 9-rule writing brief. No
layout, component, or data-shape changes. Added `scripts/check-copy.mjs`
(`npm run check:copy`, runs before every build) so the pattern can't
silently reappear, and a permanent "Writing rules" section in
`CLAUDE.md`/`DESIGN.md`. Full instruction text saved to
`REVISION_V0.5.md`; full before/after string table delivered in that
revision's report (not duplicated here — see git history for
`v0.2-struktur-kts`).

## 5. What changed (v0.5 → v0.6)

| # | v0.5 | v0.6 |
|---|------|------|
| 1 | Contact details empty, `<Pending>` shown everywhere | Real WhatsApp, email, and address filled in (see section 7.1) --- `<Pending>` no longer shows for these three fields, the inquiry form and product CTA links are live |
| 2 | Vision/mission `undefined`, shown as `<Pending>` | Draft vision (one sentence) and mission (5-item numbered list) added to `/about`, marked with a "Draft, pending approval" badge (see section 7.2) |
| 3 | All 11 products had empty `specs`/`images`; product cards used a placeholder panel | Full sample catalog content added: `summary`, `highlights`, `applications`, `specs` (as an ordered `{label, value}[]`, replacing the old `Record<string,string>`), and one sourced sample photo per product, all flagged `isSample: true` and marked with a "Sample data"/"Sample" badge (see section 7.3 and section 10) |
| 4 | `Product.specs` was `Record<string, string>` (unordered) | `Product.specs` is now `ProductSpec[]` (`{label, value}[]`), so spec order is stable and matches the source content |
| 5 | `Product.tagline` (card blurb, doubled as the detail-page lede) | Renamed to `Product.summary` --- same role (card blurb, metadata description, detail-page lede), one field instead of two near-duplicate ones |

## 6. What changed (v0.6 → v0.7)

A visual-review fix pass --- no new facts added, several invented or
contradictory bits removed.

| # | v0.6 | v0.7 |
|---|------|------|
| 1 | Every product card/detail showed an "In Development" status badge | Removed entirely --- `status` field and `StatusBadge`/`ProductStatus` deleted (`components/ui/Badge.tsx` removed). Nobody confirmed a real status for any item, and "In Development" made no sense for a service like System Design. Card badges are now just the type (Product/Service) and, when `isSample`, a "Sample" corner badge |
| 2 | `/about` Team section showed only a `<Pending>` block | Restored the two name lists (Founders, Team) that existed in an earlier version --- `content/site.ts` → `team`, initials-only avatars, no invented job titles. `<Pending>` now covers only what's still missing: job titles, official name spelling, photos |
| 3 | `/products` had two overlapping/contradictory notices ("not yet available for most items" + a second "not yet verified" info box), even though every item now has a photo and sample specs | Both replaced with one sentence: "Photos and specifications on this page are sample data. The PT KTS team will replace them." |
| 4 | Mechanical & Biological Filters photo: aerial industrial water-treatment plant. RAMPUS Incinerator photo: industrial incineration-plant chimneys | Both replaced with small-scale equivalents (a backyard filter-tank row; wood burning in a metal barrel) --- see section 10 |
| 5 | Hero h1: "Equipment, consulting, engineering development, and training. Three business units." (a list, 5 lines on desktop) | "Equipment built to be run / by the people who use it." (2 lines, one sentence, keeps the hero's upright-line-plus-italic-accent pattern) |
| 6 | The upright-line-plus-italic-accent heading pattern also appeared on the contact CTA (`AccentHeading`) | Reserved for the hero only --- `AccentHeading` component deleted, the contact CTA is now a plain upright `<h2>` |
| 7 | `/about` structure diagram connector rendered as "SUPPORTS" (`uppercase` CSS on lowercase text) | Renders as "supports" --- the `uppercase` transform removed |
| 8 | `/contact` left column ended after Instagram, leaving a large gap before the footer | Added a static location map image (`public/photos/map/cimahi-location.webp`, generated once from raw OpenStreetMap tiles by `scripts/generate-location-map.mjs` --- no client-side map script) |
| 9 | `/events` order: calendar → documentation photos → ESIC Network block (last, right before the footer) | ESIC Network moved up to right after the calendar, before the documentation photos |
| 10 | `/training`'s "Documentation video" section rendered a heading plus only a `<Pending>` box when no video URL was set | Section now hidden entirely until `training.youtubeUrl` is set (new site-wide rule: a `<Pending>` block can never be a section's only content --- see CLAUDE.md's Empty-section rule) |

## 7. What's still placeholder / dummy

- **Contact details** (`content/site.ts` → `contact`): WhatsApp, email,
  and address are now filled in (see section 7.1) --- no longer
  `<Pending>`. The WhatsApp number is Pak Ramdlan's **personal** line,
  used temporarily as the contact person (labeled "WhatsApp (contact
  person)" on `/contact`, never "Company phone"). The address has
  **not** been confirmed by the team yet; it is shown on the public site
  as supplied, per the v0.6 instruction, but treat it as unverified
  until confirmed.
- **Vision & mission** (`content/site.ts` → `vision`/`mission`): a draft
  supplied 2026-09-23 (see section 7.2), shown on `/about` with a
  "Draft, pending approval" badge. Not yet approved by the PT KTS team
  --- do not treat as final copy.
- **Team** (`content/site.ts` → `team`, `/about`): names only are shown
  (see section 7.4) --- job titles, the official spelling of each name,
  and photos are still missing. The `<Pending>` note directly under the
  two name lists covers exactly those three gaps; open question #4
  below tracks it.
- **Product/service data** (`content/products/index.ts`): all 11 items
  now have sample `summary`, `description`, `highlights`, `applications`,
  `specs`, and one sample photo each, all marked `isSample: true` with a
  visible "Sample data"/"Sample" badge on the detail page and card. None
  of it is verified --- see section 7.3 for the full list of what the
  team needs to replace, and section 10 for photo sourcing. There is
  also no per-item status field ("In Development" etc.) as of v0.7 ---
  see section 7.5.
- **Activity calendar** (`content/events.ts`): 3 of 5 entries are still
  example data (`isDummy: true`, "(Example)" suffix, visible "Example"
  badge). Two entries (ESIC Conference 2026, Engineering Camp 2026) are
  real.
- **Online Shop**: `site.contact.shopUrl` is empty, so the button is
  hidden everywhere (navbar, footer, product detail, contact CTA).
- **ESIC expansion** (`site.esicNetwork.expansion`): not set, shown as
  `<Pending>` on the homepage/`/events` ESIC section (alongside the
  real activities grid, so that section is never Pending-only).
- **YouTube documentation** (`site.training.youtubeUrl`): empty, so
  `/training` hides the "Documentation video" section entirely (as of
  v0.7 --- previously it showed a heading plus a lone `<Pending>` box,
  which is no longer allowed; see the Empty-section rule in CLAUDE.md).

Turn `NEXT_PUBLIC_DRAFT_MODE=false` once real data replaces these --- as
of v0.4 that only removes every `<Pending>` marker and switches
`robots.ts` back to indexable. Note it does **not** hide the "Sample
data"/"Sample" badges or the vision/mission draft badge --- those are
controlled by `isSample`/the presence of `site.vision`/`site.mission`
themselves, not draft mode, since the underlying content is genuinely
unverified either way (see `components/ui/SampleBadge.tsx`).

### 7.1 Contact details supplied (v0.6)

| Field | Value | Status |
|---|---|---|
| WhatsApp | `6282119563800` | Pak Ramdlan's personal number, temporary contact person |
| Email | `kappasolution25@gmail.com` | As supplied |
| Address | Jl. Sukasenang 143, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522 | **Not yet confirmed by the team** --- shown publicly per the v0.6 instruction, but flagged here for follow-up |
| Instagram | @kappasolution | Unchanged from v0.2 |

### 7.2 Vision & mission draft (v0.6)

Supplied 2026-09-23, explicitly a draft pending team approval --- do not
present as final:

> **Vision:** "Appropriate technology that the people who use it can run
> and maintain themselves."
>
> **Mission:**
> 1. Supply equipment that can be operated, serviced, and repaired locally.
> 2. Design systems that fit the site, the budget, and the skills of the people who will run them.
> 3. Develop our own equipment through engineering work, and test it in the field before we offer it.
> 4. Train every user, so the equipment keeps working long after handover.
> 5. Support education and research through ESIC Network.

### 7.3 Sample catalog content --- fields the team must replace (v0.6)

All 11 items in `content/products/index.ts` got sample `summary`,
`description`, `highlights`, `applications`, and `specs` values so the
team can see the finished shape of a product page (`isSample: true` on
every one, rendered with a visible "Sample data" badge next to
Specifications and a "Sample" badge on the photo). **None of the
following is verified** --- treat every one of these as needing
replacement, not just the numbers:

- **`summary`** (one-line card/lede text) --- all 11 products.
- **`description`** (paragraph) --- all 11 products.
- **`highlights`** (4 bullets each) --- all 11 products.
- **`applications`** (4 tags each) --- all 11 products.
- **`specs`** (4 `{label, value}` rows each, e.g. "Capacity: 100 to 300
  kg/h", "Power: 220V AC") --- **every number, dimension, material, and
  time estimate in every spec table is illustrative, not measured or
  confirmed.** Do not quote any of these figures to a customer.
- **Photos** --- see section 10; every photo is a generic stock photo of
  the general equipment category, not the actual PT KTS/unit item.

### 7.4 Team names restored (v0.7)

Supplied 2026-09-23. These names appeared on an earlier version of the
site; only the names are confirmed, nothing else:

> **Founders:** Abrar, Mukhammad Ramdlan KI, Tri Ayodha
>
> **Team:** Galuh Intan Khumaira, Febianeu Putri Agna, Aisha Laila
> Mardiyah, Badar Zaki Baradja

Still missing (shown as a `<Pending>` note under the two lists): job
titles, the officially correct spelling of each name, and photos.
Avatars are initials-only placeholders (`TeamMemberCard` in
`app/about/page.tsx`), not invented photos.

### 7.5 Product status field removed (v0.7)

Every product previously showed an "In Development" `StatusBadge`.
Nobody on the PT KTS team ever confirmed a real status for any of the
11 items, so this was an invented claim --- and a visibly wrong one for
a service like System Design, which isn't a physical item that can be
"in development." The `status` field, the `StatusBadge` component, and
the `ProductStatus` type were all deleted
(`components/ui/Badge.tsx` removed entirely).

**To bring status back:** add a `status: ProductStatus` field to the
`Product` interface in `content/products/index.ts`, re-add a status
badge component, and only fill in values the team has actually
confirmed per item --- do not default every item to the same status
again.

## 8. Photo curation (v0.4)

Source photos (raw camera exports, never committed --- see `.gitignore`):
`C:\Users\USER\Downloads\drive-download-20260922T162515Z-1-001\` (ESIC
Conference 2026, 50 photos) and `C:\Users\USER\Downloads\camp\` (Engineering
Camp 2026, 216 photos across `DAY 3`, `DAY 4`, `day 5`). Every candidate
was opened and visually reviewed (not chosen by filename) before
selection; roughly 70 photos were actually viewed to find these 13.
Full before/new-name/usage table is in the delivery report.

**Rejected categories** (per the curation brief): `DAY 3/CAM 1` turned
out to be a sunrise/tourist photo set (posed group shots, heavily
underexposed silhouettes) --- none used. `day 5` was bus-travel and a
zoo/snake photo op --- none used, and one frame there has "Telkom
University" embossed on a bus seat, confirming why that folder needed
manual review rather than a filename-based pick. One campus-tour photo
(building signage reading "Telkom University Landmark Tower") was
deliberately excluded per the instruction not to show Telkom University
branding.

**Dates**: ESIC Conference 2026's date (Sept 1, 2026) is read directly
off a presentation slide in one of the photos ("Ibis Hotel, September
1st, 2026") and corroborated by EXIF. Engineering Camp 2026's date range
(Sept 3--5, 2026) is inferred from drone-camera filename timestamps
(`DJI_20260903...`, `DJI_20260904...`) in the `DAY 3`/`DAY 4` folders and
the `day 5` folder name --- **no Day 1/2 photos were supplied**, so the
camp's actual start date is not confirmed. Note also that the `IMG_84xx`
camera's own EXIF clock was wrong (reads "2020-01-01"), so those dates
were derived from the other camera in the same folder, not from EXIF.

## 9. Candidate product photos in the documentation set --- **none found**

The v0.4 brief asked me to flag any documentation photo (from ESIC
Conference 2026 / Engineering Camp 2026) that appeared to show
equipment, machines, prototypes, circuits, or hydroponic/aquaponic/waste
systems, for confirmation before ever using it as a product photo.
Across the ~70 photos reviewed, none showed PT KTS/unit hardware: the
ESIC Conference photos are a lecture-hall presentation (slides only, no
physical apparatus), and the Engineering Camp photos are a farm-site
visit, a Telkom University campus tour, and outdoor
team-building/paintball activities --- no lab equipment, hydroponic/
aquaponic rigs, or waste-processing machines appear in any of them. This
is why the product photos (section 10 below) are sourced stock photos,
not documentation photos --- none exist yet.

## 10. Sample product photo sourcing (v0.6, corrected v0.7)

One free-license photo per catalog item, sourced from Unsplash and
processed by `scripts/optimize-sample-photos.mjs` (resize to 1400px
longest side, WebP, EXIF/GPS stripped) into `public/photos/samples/`.
Total folder size: 3.6 MB (limit was 10 MB). Full metadata (including
`alt`, dimensions, and license) lives in `content/photos.ts` →
`sampleProductPhotos`. None of these show PT KTS/unit equipment --- they
are generic stock photos chosen to represent the product's category,
and every `alt` starts with "Sample photo:" so it's never read as a
claim that PT KTS owns the pictured item.

**v0.7 correction:** the Mechanical & Biological Filters and RAMPUS
Incinerator rows below were replaced --- the v0.6 originals (an aerial
industrial water-treatment plant, and an industrial incineration-plant
chimney) misrepresented PT KTS's actual small equipment scale. The
table already reflects the replacements.

| Product | Photo | Photographer | Source | License |
|---|---|---|---|---|
| Lab Practicum Equipment | Microscope | Ousa Chea | [unsplash.com/photos/gKUC4TMhOiY](https://unsplash.com/photos/gKUC4TMhOiY) | Unsplash License |
| Engineering-Developed Equipment | Welder smoke sparks | Rob Lambert | [unsplash.com/photos/9Q_pLLP_jmA](https://unsplash.com/photos/9Q_pLLP_jmA) | Unsplash License |
| System Design | Architectural blueprints with drafting tools | Lucas Kepner | [unsplash.com/photos/Yn8D5B8C-eY](https://unsplash.com/photos/Yn8D5B8C-eY) | Unsplash License |
| Hydroponic & Aquaponic System Design-Build | Rows of plants in a greenhouse | Denis Sobnakov | [unsplash.com/photos/vZY9FKJ9i9A](https://unsplash.com/photos/vZY9FKJ9i9A) | Unsplash License |
| Mechanical & Biological Filters | A small row of filter tanks plumbed together outdoors | Alexey Demidov | [unsplash.com/photos/wzcyEpk2eWw](https://unsplash.com/photos/wzcyEpk2eWw) | Unsplash License |
| Aeration Systems | Fountain aerator in a pond | Kuyune | [unsplash.com/photos/u6XStYWSrZA](https://unsplash.com/photos/u6XStYWSrZA) | Unsplash License |
| Biofloc Ponds | Aerial view, round fish farm ponds | Shalev Cohen | [unsplash.com/photos/8pSNBO0ZsAI](https://unsplash.com/photos/8pSNBO0ZsAI) | Unsplash License |
| Waste Shredder | Aerial view, wood chipper | Daniel Miksha | [unsplash.com/photos/iPKoGMksfAE](https://unsplash.com/photos/iPKoGMksfAE) | Unsplash License |
| RAMPUS Incinerator | Wood burning inside a small metal barrel | DDP | [unsplash.com/photos/8dRytMlVKzE](https://unsplash.com/photos/8dRytMlVKzE) | Unsplash License |
| Takakura Composter | Household compost bin with kitchen scraps | Lenka Dzurendova | [unsplash.com/photos/FTCQPjPfFS4](https://unsplash.com/photos/FTCQPjPfFS4) | Unsplash License |
| Gasification Stove | Outdoor wood stove cooking | Alan Jiang | [unsplash.com/photos/r1pX08YRdKo](https://unsplash.com/photos/r1pX08YRdKo) | Unsplash License |

The Unsplash License permits free commercial use without permission or
credit; photographer credit is kept here anyway as a courtesy record and
so the team can find/replace each source quickly once real product
photos exist.

### 10.1 Location map (v0.7)

`/contact` now shows a static map image
(`public/photos/map/cimahi-location.webp`, ~100 KB), generated once by
`scripts/generate-location-map.mjs` from raw OpenStreetMap tiles (no
client-side map script, iframe, or API key). The marker sits on
Cigugur Tengah at a neighborhood-level zoom, not a precise pin on the
unconfirmed street address (see section 7.1) --- the caption under the
map says "General area only, not a precise pin on the office address."
OpenStreetMap tile data: © OpenStreetMap contributors, ODbL 1.0.

## 11. Open questions --- do not guess these

1.  ~~Official vision & mission for PT KTS~~ --- a draft was supplied
    2026-09-23 (section 7.2), shown on `/about` with a "Draft, pending
    approval" badge. Still needs formal team sign-off before that badge
    can be removed.
2.  ~~Official WhatsApp number, email, and office address~~ --- supplied
    2026-09-23 (section 7.1). WhatsApp is Pak Ramdlan's personal number
    (temporary); the address is still unconfirmed by the team.
3.  Shopee/shop store URL, and whether it may be shown publicly while
    still under Pak Ramdlan's personal account.
4.  ~~Team job titles and photos~~ --- names were restored 2026-09-23
    (section 7.4); job titles, official name spelling, and photos are
    still open.
5.  Real specifications, pricing model, and real photos for each
    product/service (section 7.3 has the full sample-data list); what
    "RAMPUS" stands for (RAMPUS Incinerator, Bumi Hijau).
6.  What "ESIC" stands for, and current JESIC status (still being
    discussed by Pak Abrar, Aisha, Intan).
7.  ~~Real event dates for `/events`~~ --- partially answered in v0.4 for
    ESIC Conference 2026 and Engineering Camp 2026 (see section 8); the
    camp's Day 1/2 dates and all other events are still open.
8.  Whether "Nisha Snacks" (logo present on the slide but outside the
    org chart) is a PT KTS business unit.
9.  Domain for the Cloudflare Workers deployment (`NEXT_PUBLIC_SITE_URL`).
10. Whether it's okay to publish the 13 curated documentation photos
    publicly as-is (they show identifiable participants' faces) ---
    assumed yes since they were supplied for this purpose, but not
    explicitly confirmed.
11. Whether any of PT KTS's own equipment was photographed at either
    documentation event but simply isn't in the photo set you shared ---
    if more photos exist, they can be added to `content/photos.ts` and
    `scripts/optimize-photos.mjs`, and would let the sample product
    photos (section 10) be replaced with the real thing.
12. Per-item product status (Concept/In Development/Prototype/Coming
    Soon) --- removed in v0.7 because nobody had confirmed it (section
    7.5). Supply real values per item if/when known.

## 12. Where to make changes

All company facts live in these files --- never edit page components
directly for content changes:

- `content/site.ts` --- company info, contact, business lines/units,
  ESIC Network, training references, vision/mission draft, team names
- `content/products/index.ts` --- product/service catalog (sample
  `summary`/`description`/`highlights`/`applications`/`specs`, no status
  field as of v0.7)
- `content/events.ts` --- activity calendar
- `content/photos.ts` --- documentation photo metadata (`photos`,
  referencing `public/photos/`, generated by
  `scripts/optimize-photos.mjs`) and sample product photo metadata
  (`sampleProductPhotos`, referencing `public/photos/samples/`,
  generated by `scripts/optimize-sample-photos.mjs`) --- raw sources for
  both are never committed. The `/contact` location map
  (`public/photos/map/`) is generated by
  `scripts/generate-location-map.mjs` and does not need `content/photos.ts`.

## 13. What could not be verified in this pass

See the final report delivered alongside this branch for the full list
(reference-repo analysis method, build/lint/type-check results, and
anything Playwright could not check, e.g. real device testing, screen
readers, or visual polish beyond automated overflow/console checks).
