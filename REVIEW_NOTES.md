# Review Notes --- v0.1 → v0.4

For the PT KTS team and advising lecturer. This documents what changed,
what's still a placeholder, and what needs a decision from the team.
Sources: `REVISION_V0.2.md` (meeting notes 2026-09-14 + "Struktur" slide),
`REVISION_V0.3.md` (English language + design direction), and the v0.4
photo/draft-banner revision (chat instructions, not saved as a separate
file this round).

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
| 2 | No real photography anywhere; hero/product visuals were placeholders or logo panels | 13 curated, optimized documentation photos from ESIC Conference 2026 and Engineering Camp 2026 (see section 5 below), used for the Home hero, an `/about` photo, a `/training` gallery, and `/events` (documentation gallery + a thumbnail per completed event) |
| 3 | `content/events.ts` had only example/dummy entries | Added two real, non-dummy events: **ESIC Conference 2026** (2026-09-01) and **Engineering Camp 2026** (2026-09-03 to 09-05), both `status: "completed"` |
| 4 | Product cards used a generic dark placeholder | Unchanged --- product cards still use the placeholder pattern. None of the reviewed photos were confirmed as product photography (see section 6) |

## 4. What's still placeholder / dummy

- **Contact details** (`content/site.ts` → `contact`): WhatsApp, email,
  and office address are empty strings. The site falls back to `/contact`
  and shows `<Pending>` markers until these are filled in.
- **Vision & mission** (`content/site.ts` → `vision`/`mission`):
  currently `undefined`, shown as `<Pending>` on `/about`.
- **Team** (`/about`): intentionally shows only a `<Pending>` block ---
  we did not decide who appears on the site or with what titles/photos
  (see open question #4 below), so no names are published yet.
- **Product/service data** (`content/products/index.ts`): all 11 items
  have empty `specs` and `images`, and product cards still use the
  placeholder treatment --- see section 6 for why no real photo was used.
- **Activity calendar** (`content/events.ts`): 3 of 5 entries are still
  example data (`isDummy: true`, "(Example)" suffix, visible "Example"
  badge). Two entries (ESIC Conference 2026, Engineering Camp 2026) are
  now real.
- **Online Shop**: `site.contact.shopUrl` is empty, so the button is
  hidden everywhere (navbar, footer, product detail, contact CTA).
- **ESIC expansion** (`site.esicNetwork.expansion`): not set, shown as
  `<Pending>` on the homepage ESIC section.
- **YouTube documentation** (`site.training.youtubeUrl`): empty, so
  `/training` shows `<Pending>` instead of an iframe.

Turn `NEXT_PUBLIC_DRAFT_MODE=false` once real data replaces these --- as
of v0.4 that only removes every `<Pending>` marker and switches
`robots.ts` back to indexable (there is no more visible banner to
remove).

## 5. Photo curation (v0.4)

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

## 6. Candidate product photos --- **none found**

The brief asked me to flag any photo that appeared to show equipment,
machines, prototypes, circuits, or hydroponic/aquaponic/waste systems,
for your confirmation before ever using it as a product photo. Across
the ~70 photos reviewed, none showed PT KTS/unit hardware: the ESIC
Conference photos are a lecture-hall presentation (slides only, no
physical apparatus), and the Engineering Camp photos are a farm-site
visit, a Telkom University campus tour, and outdoor
team-building/paintball activities --- no lab equipment, hydroponic/
aquaponic rigs, or waste-processing machines appear in any of them.
Product cards on `/products` therefore still use the placeholder
treatment, unchanged from v0.3.

## 7. Open questions --- do not guess these

1.  Official vision & mission for PT KTS.
2.  Official WhatsApp number, email, and office address.
3.  Shopee/shop store URL, and whether it may be shown publicly while
    still under Pak Ramdlan's personal account.
4.  Team job titles and photos --- who exactly will appear on the site.
5.  Photos, specifications, and pricing model for each product/service;
    what "RAMPUS" stands for (RAMPUS Incinerator, Bumi Hijau).
6.  What "ESIC" stands for, and current JESIC status (still being
    discussed by Pak Abrar, Aisha, Intan).
7.  ~~Real event dates for `/events`~~ --- partially answered in v0.4 for
    ESIC Conference 2026 and Engineering Camp 2026 (see section 5); the
    camp's Day 1/2 dates and all other events are still open.
8.  Whether "Nisha Snacks" (logo present on the slide but outside the
    org chart) is a PT KTS business unit.
9.  Domain for the Cloudflare Workers deployment (`NEXT_PUBLIC_SITE_URL`).
10. Whether it's okay to publish the 13 curated photos publicly as-is
    (they show identifiable participants' faces) --- assumed yes since
    they were supplied for this purpose, but not explicitly confirmed.
11. Whether any of PT KTS's own equipment was photographed at either
    event but simply isn't in the photo set you shared --- if more
    photos exist, they can be added to `content/photos.ts` and
    `scripts/optimize-photos.mjs`.

## 8. Where to make changes

All company facts live in these files --- never edit page components
directly for content changes:

- `content/site.ts` --- company info, contact, business lines/units,
  ESIC Network, training references
- `content/products/index.ts` --- product/service catalog
- `content/events.ts` --- activity calendar
- `content/photos.ts` --- documentation photo metadata (references
  `public/photos/`, generated by `scripts/optimize-photos.mjs` from
  raw sources that are never committed)

## 9. What could not be verified in this pass

See the final report delivered alongside this branch for the full list
(reference-repo analysis method, build/lint/type-check results, and
anything Playwright could not check, e.g. real device testing, screen
readers, or visual polish beyond automated overflow/console checks).
