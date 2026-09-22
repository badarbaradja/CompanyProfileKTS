# CLAUDE.md --- PT KTS Website Agent Instructions

## Project

You are building the official website for:

**PT Kappa Technology Solution (PT KTS)**

The website is a premium technology-company profile and research-derived
product showcase.

------------------------------------------------------------------------

## Read before coding

Always read, in this order:

1.  `REVISION_V0.2.md` --- source of truth. If any other document
    conflicts with it, `REVISION_V0.2.md` wins.
2.  `PRD.md`
3.  `DESIGN.md`
4.  `ARCHITECTURE.md`
5.  `CONTENT.md`
6.  `PRODUCT_CATALOG.md`
7.  `ROADMAP.md`

Do not begin a large implementation without understanding these
documents.

------------------------------------------------------------------------

## Core product principle

As of v0.2, the website must communicate PT KTS's real structure
(see `REVISION_V0.2.md` section 2):

-   **4 business lines (lini usaha):** Penyediaan Barang, Konsultan,
    Pengembangan Rekayasa, Pelatihan
-   **3 business units (unit usaha):** Kappa Solution, Nara Aquaponics,
    Bumi Hijau
-   PT KTS **supports** ESIC Network (ESIC, JESIC, Summer Camp,
    Pelatihan) --- this relationship is now shown on the site.

This replaces the earlier "From Research to Real-World Solutions" /
research-to-product positioning from v0.1, which did not reflect the
actual company structure.

Pelatihan (training) and camp activities ARE part of the business and
ARE shown on the site (`/pelatihan`, `/kegiatan`) --- this reverses the
v0.1 exclusion.

PT KTS should still NOT be presented as:

-   a student organization
-   a generic software house
-   a marketplace (no cart, checkout, or payment --- see the e-commerce
    rule below)

------------------------------------------------------------------------

## Critical content rule

NEVER invent company facts.

Never fabricate:

-   products
-   technical specifications
-   prices
-   customers
-   certifications
-   patents
-   awards
-   performance metrics
-   research outcomes
-   legal information
-   founder biographies
-   team positions

If information is unavailable, use an explicit placeholder or omit it.

------------------------------------------------------------------------

## Product rule

Products/services in `PRODUCT_CATALOG.md` are real catalog items sourced
from the "Struktur" meeting slide (2026-09-14), grouped by business unit.
They are not concept placeholders, but their `specs` and `images` fields
must stay empty until the team supplies verified data.

Never publish capacity, temperature, power draw, output figures, pricing,
or certifications for a product/service until verified.

Use status labels (shown in Indonesian on the site) such as:

-   Konsep (Concept)
-   Dalam Pengembangan (In Development)
-   Prototipe (Prototype)
-   Segera Hadir (Coming Soon)

only when appropriate.

------------------------------------------------------------------------

## Language rule

All site-facing content and routes are in **Bahasa Indonesia** (see
`REVISION_V0.2.md` section 4.1 for the route list). Internal engineering
docs (this file, `PRD.md`, `ARCHITECTURE.md`, etc.) stay in English.

------------------------------------------------------------------------

## E-commerce rule

No cart, checkout, or payment. A single "Toko Online" link
(`site.contact.shopUrl` in `content/site.ts`) may appear in the
navbar/footer/product detail, shown only when the URL is set. The current
shop account belongs personally to Pak Ramdlan (company e-commerce
account cannot be created yet --- documents incomplete) --- never label
it as an official PT KTS store without team confirmation.

Product/service CTAs use "Tanyakan" (WhatsApp `wa.me` with a pre-filled
message) when a WhatsApp number exists, else link to `/kontak`.

------------------------------------------------------------------------

## Design rule

The site should feel:

-   premium
-   minimal
-   modern
-   technology-driven
-   editorial
-   precise

Avoid:

-   generic bootstrap-looking layouts
-   excessive cards
-   excessive gradients
-   excessive rounded corners
-   neon cyberpunk styling
-   unnecessary glassmorphism
-   excessive animation

------------------------------------------------------------------------

## UX rule

A visitor should understand PT KTS within seconds.

Prioritize:

1.  clarity
2.  product storytelling
3.  credibility
4.  conversion

Do not sacrifice readability for visual effects.

------------------------------------------------------------------------

## Responsive rule

Mobile is not an afterthought.

Every feature must be verified at:

-   360px
-   390px
-   430px
-   tablet
-   1280px
-   1440px
-   1920px

Never introduce horizontal overflow.

------------------------------------------------------------------------

## Animation rule

Motion should support hierarchy and storytelling.

Use:

-   fade
-   translate
-   subtle scale
-   controlled parallax

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

## Technical rule

Prefer:

-   Next.js App Router
-   TypeScript
-   server components
-   static generation where possible
-   minimal client components
-   Cloudflare Workers deployment
-   current Cloudflare-recommended Next.js deployment path
-   self-hosted fonts via `next/font/local` (not `next/font/google` ---
    the build must not depend on network access to Google Fonts)

Do not introduce:

-   database
-   authentication
-   CMS
-   payment
-   complex backend

unless the requirement exists.

------------------------------------------------------------------------

## Component rule

Before creating a new UI component:

1.  Search existing components.
2.  Reuse existing primitives.
3.  Avoid duplicate components.
4.  Keep component APIs simple.
5.  Keep business content separate from presentation.

------------------------------------------------------------------------

## Dependency rule

Do not add dependencies without a clear reason.

Prefer existing platform/browser capabilities when practical.

------------------------------------------------------------------------

## Quality gate

Before declaring work complete:

``` text
TypeScript passes
Lint passes
Build passes
No horizontal overflow
Mobile verified
Desktop verified
Keyboard navigation checked
Reduced motion checked
Images optimized
No console errors
No invented company facts
```

------------------------------------------------------------------------

## Git rule

Make small, understandable commits.

Commit messages should describe the actual change.

Example:

``` text
feat(home): add innovation storytelling sections
fix(products): prevent mobile card overflow
refactor(ui): unify product card variants
```

------------------------------------------------------------------------

## Agent behavior

When requirements are ambiguous:

-   inspect the repository
-   inspect project documents
-   choose the smallest reversible implementation
-   do not invent business requirements
-   leave a clear TODO for missing information

The agent should optimize for a coherent product, not for adding the
maximum number of features.
