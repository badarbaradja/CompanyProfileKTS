# PT KTS Website Roadmap

> v0.3. Corrected against `REVISION_V0.2.md` and `REVISION_V0.3.md`
> (English language, sparktalks/bestiego-derived design system).

## Phase 0 --- Foundation

Status: DONE

-   [x] Define company structure (4 business lines, 3 business units,
        ESIC Network relationship) --- source: 2026-09-14 meeting +
        Struktur slide
-   [x] Define v0.3 sitemap (`/`, `/about`, `/services`, `/products`,
        `/products/[slug]`, `/training`, `/events`, `/contact`)
-   [x] Receive unit/company logos (`public/brand/`)
-   [x] Derive a design system from the founder's own reference repos
        (sparktalks, bestiego-app) --- see `DESIGN.md`
-   [ ] Verify company facts (vision/mission, contact details, legal
        info) --- see `REVIEW_NOTES.md`
-   [ ] Gather real product/service photos and specifications
-   [ ] Approve brand direction beyond the supplied logos

------------------------------------------------------------------------

## Phase 1 --- v0.3 skeleton (current)

Goal: a coherent, navigable, English-language site using real structure
+ dummy/placeholder detail, explicitly marked as such (draft banner +
`<Pending>`), styled per `DESIGN.md`.

-   [x] Content layer (`content/site.ts`, `content/products/index.ts`,
        `content/events.ts`) --- English
-   [x] Self-hosted fonts (`next/font/local`)
-   [ ] Shared components restyled per `DESIGN.md`: `Pending`,
        `DraftBanner`, KTS logo component
-   [ ] Home, About, Services, Products (+ detail), Training, Events,
        Contact --- English + new design system
-   [x] Redirects from v0.1 routes, updated `next.config.ts`
-   [ ] Updated `sitemap.ts`/`robots.ts`, English 404
-   [ ] `REVIEW_NOTES.md` updated for v0.3
-   [ ] Quality gate (see `CLAUDE.md`), including Playwright visual
        verification across breakpoints

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

Potential: multilingual (add an Indonesian translation on top of the
English content, per REVISION_V0.3.md part A.5), product comparison,
downloadable brochures, partner portal, analytics dashboard, CRM
integration.
