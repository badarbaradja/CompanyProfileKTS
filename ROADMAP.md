# PT KTS Website Roadmap

> v0.2. Corrected against `REVISION_V0.2.md`.

## Phase 0 --- Foundation

Status: DONE for v0.2 skeleton

-   [x] Define company structure (4 lini usaha, 3 unit usaha, ESIC
        Network relationship) --- source: 2026-09-14 meeting + Struktur
        slide
-   [x] Define v0.2 sitemap (`/`, `/tentang`, `/layanan`, `/produk`,
        `/produk/[slug]`, `/pelatihan`, `/kegiatan`, `/kontak`)
-   [x] Receive unit/company logos (`public/brand/`)
-   [ ] Verify company facts (vision/mission, contact details, legal
        info) --- see `REVIEW_NOTES.md`
-   [ ] Gather real product/service photos and specifications
-   [ ] Approve brand direction beyond the supplied logos

------------------------------------------------------------------------

## Phase 1 --- v0.2 skeleton (current)

Goal: a coherent, navigable site using real structure + dummy/placeholder
detail, explicitly marked as such (draft banner + `<Pending>`).

-   [ ] Content layer (`content/site.ts`, `content/products/index.ts`,
        `content/events.ts`)
-   [ ] Self-hosted Inter font (`next/font/local`)
-   [ ] Shared components: `SectionHeading`, `Pending`, `DraftBanner`,
        KTS logo component
-   [ ] Beranda, Tentang, Layanan, Produk (+ detail), Pelatihan,
        Kegiatan, Kontak
-   [ ] Redirects from v0.1 routes, updated `sitemap.ts`/`robots.ts`,
        Indonesian 404
-   [ ] `REVIEW_NOTES.md` for lecturer/team review
-   [ ] Quality gate (see `CLAUDE.md`)

------------------------------------------------------------------------

## Phase 2 --- Real content

Replace, once supplied and verified:

-   official vision/mission
-   product/service photos, specs, and (if applicable) pricing model
-   founder data, team roles and photos
-   real WhatsApp number, email, office address
-   real activity-calendar dates (replacing `isDummy: true` entries)
-   JESIC status (currently "segera hadir")
-   Cloudflare deployment domain

When real content lands, turn `NEXT_PUBLIC_DRAFT_MODE` off.

------------------------------------------------------------------------

## Phase 3 --- Product inquiry refinement

-   [ ] Confirm WhatsApp inquiry copy/flow with the team
-   [ ] Email workflow (if a form beyond `mailto:` is ever needed)
-   [ ] Decide whether the "Toko Online" link can be shown as PT KTS's
        official store, or must stay labeled as Pak Ramdlan's personal
        account (blocked on NIB/NPWP/bank account/legal docs)

------------------------------------------------------------------------

## Phase 4 --- Content management

Only if the team finds the static `content/` files difficult to
maintain manually:

-   [ ] Admin authentication
-   [ ] Product/event CRUD
-   [ ] Media management
-   [ ] D1
-   [ ] R2

------------------------------------------------------------------------

## Phase 5 --- Commerce

Only after PT KTS has its own legal e-commerce account and a confirmed
commercial model:

-   [ ] Product availability
-   [ ] Cart
-   [ ] Checkout
-   [ ] Payment gateway
-   [ ] Order management
-   [ ] Customer notifications

------------------------------------------------------------------------

## Phase 6 --- Scale

Potential: multilingual (Indonesian stays primary), product comparison,
downloadable brochures, partner portal, analytics dashboard, CRM
integration.
