# Review Notes --- v0.1 → v0.3

For the PT KTS team and advising lecturer. This documents what changed,
what's still a placeholder, and what needs a decision from the team.
Sources: `REVISION_V0.2.md` (meeting notes 2026-09-14 + "Struktur" slide)
and `REVISION_V0.3.md` (English language + design direction).

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
| 8 | "Provisional" notes scattered as inline text | One consistent `<Pending>` component + a draft-mode banner |

## 2. What changed (v0.2 → v0.3)

| # | v0.2 | v0.3 |
|---|------|------|
| 1 | Bahasa Indonesia site content and routes (`/tentang`, `/layanan`, `/produk`, `/pelatihan`, `/kegiatan`, `/kontak`) | **English** site content and routes (`/about`, `/services`, `/products`, `/training`, `/events`, `/contact`) --- the site is accessed by external audiences. Brand names stay untranslated. WhatsApp inquiry messages stay in Indonesian (recipient is the PT KTS team) |
| 2 | Redirects for every renamed v0.1 route | Only `/innovation → /services`, `/projects → /events`, `/insights → /events` kept --- `/about`, `/products`, `/products/[slug]`, `/contact` are unchanged v0.1 paths |
| 3 | Product slugs in Indonesian (e.g. `/produk/insinerator-rampus`) | English slugs (e.g. `/products/rampus-incinerator`) |
| 4 | Original generated visual design | Visual design derived from the founder's own `sparktalks` and `bestiego-app` repos --- see `DESIGN.md` "Reference analysis". Generic-AI patterns (eyebrow-on-every-section, uniform 3/4-card grids, boxed tinted icons, decorative numbering, slogan headings) removed |
| 5 | Visual verification not performed | Playwright-based check across 6 breakpoints (360/390/768/1280/1440/1920px) for overflow, console errors, and reduced-motion; before/after screenshots in `docs/screenshots/` |

## 3. What's still placeholder / dummy

- **Contact details** (`content/site.ts` → `contact`): WhatsApp, email,
  and office address are empty strings. The site falls back to `/contact`
  and shows `<Pending>` markers until these are filled in.
- **Vision & mission** (`content/site.ts` → `vision`/`mission`):
  currently `undefined`, shown as `<Pending>` on `/about`.
- **Team** (`/about`): intentionally shows only a `<Pending>` block ---
  we did not decide who appears on the site or with what titles/photos
  (see open question #4 below), so no names are published yet.
- **Product/service data** (`content/products/index.ts`): all 11 items
  have empty `specs` and `images`. Status is uniformly "In Development"
  --- we have no verified basis to differentiate maturity per item.
- **Activity calendar** (`content/events.ts`): all 5 entries are example
  data, `isDummy: true`, titled with an "(Example)" suffix and shown with
  a visible "Example" badge. Replace with real dates once available.
- **Online Shop**: `site.contact.shopUrl` is empty, so the button is
  hidden everywhere (navbar, footer, product detail, contact CTA).
- **ESIC expansion** (`site.esicNetwork.expansion`): not set, shown as
  `<Pending>` on the homepage ESIC section.
- **YouTube documentation** (`site.training.youtubeUrl`): empty, so
  `/training` shows `<Pending>` instead of an iframe.

Turn `NEXT_PUBLIC_DRAFT_MODE=false` once real data replaces these ---
that removes the draft banner and every `<Pending>` marker, and switches
`robots.ts` back to indexable.

## 4. Open questions --- do not guess these (REVISION_V0.2.md section 8)

1.  Official vision & mission for PT KTS.
2.  Official WhatsApp number, email, and office address.
3.  Shopee/shop store URL, and whether it may be shown publicly while
    still under Pak Ramdlan's personal account.
4.  Team job titles and photos --- who exactly will appear on the site.
5.  Photos, specifications, and pricing model for each product/service;
    what "RAMPUS" stands for (RAMPUS Incinerator, Bumi Hijau).
6.  What "ESIC" stands for, and current JESIC status (still being
    discussed by Pak Abrar, Aisha, Intan).
7.  Real event dates for `/events`.
8.  Whether "Nisha Snacks" (logo present on the slide but outside the
    org chart) is a PT KTS business unit.
9.  Domain for the Cloudflare Workers deployment (`NEXT_PUBLIC_SITE_URL`).

## 5. Where to make changes

All company facts live in three files --- never edit page components
directly for content changes:

- `content/site.ts` --- company info, contact, business lines/units,
  ESIC Network, training references
- `content/products/index.ts` --- product/service catalog
- `content/events.ts` --- activity calendar

## 6. What could not be verified in this pass

See the final report delivered alongside this branch for the full list
(reference-repo analysis method, build/lint/type-check results, and
anything Playwright could not check, e.g. real device testing, screen
readers, or visual polish beyond automated overflow/console checks).
