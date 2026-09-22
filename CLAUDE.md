# CLAUDE.md --- PT KTS Website Agent Instructions

## Project

You are building the official website for:

**PT Kappa Technology Solution (PT KTS)**

The website is a premium technology-company profile and research-derived
product showcase.

------------------------------------------------------------------------

## Read before coding

Always read, in this order:

1.  `REVISION_V0.6.md` --- source of truth, most recent. Real contact
    details, a draft vision/mission, and sample catalog content
    (`summary`/`highlights`/`applications`/`specs`/photos, all marked
    `isSample: true`) for every product.
2.  `REVISION_V0.5.md` --- writing-rules pass (see the "Writing rules"
    section below); no content-fact or layout changes.
3.  `REVISION_V0.3.md` --- corrects `REVISION_V0.2.md` on language
    (English, not Indonesian) and design direction; everything else in
    `REVISION_V0.2.md` still applies.
4.  `REVISION_V0.2.md` --- source of truth for company structure,
    product catalog, events schema, e-commerce rule, and the
    draft-mode/`<Pending>` content rules.
5.  `PRD.md`
6.  `DESIGN.md`
7.  `ARCHITECTURE.md`
8.  `CONTENT.md`
9.  `PRODUCT_CATALOG.md`
10. `ROADMAP.md`

Do not begin a large implementation without understanding these
documents.

------------------------------------------------------------------------

## Core product principle

As of v0.2, the website must communicate PT KTS's real structure
(see `REVISION_V0.2.md` section 2):

-   **4 business lines:** Equipment Supply, Consulting, Engineering
    Development, Training
-   **3 business units:** Kappa Solution, Nara Aquaponics, Bumi Hijau
-   PT KTS **supports** ESIC Network (ESIC, JESIC, Summer Camp,
    Training) --- this relationship is now shown on the site.

This replaces the earlier "From Research to Real-World Solutions" /
research-to-product positioning from v0.1, which did not reflect the
actual company structure.

Training and camp activities ARE part of the business and ARE shown on
the site (`/training`, `/events`) --- this reverses the v0.1 exclusion.

PT KTS should still NOT be presented as:

-   a student organization
-   a generic software house
-   a marketplace (no cart, checkout, or payment --- see the e-commerce
    rule below)

------------------------------------------------------------------------

## Critical content rule

NEVER invent company facts and present them as real.

Never fabricate, as a verified fact:

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

**Exception (as of v0.6):** illustrative content used only to preview a
page's finished shape (e.g. the sample product catalog, see the Product
rule below) is allowed, but only when it is impossible to mistake for a
verified fact: mark it `isSample: true` in the data and show a visible
"Sample data" badge next to it in the UI. Never let sample content
appear without that marker.

------------------------------------------------------------------------

## Product rule

Products/services in `PRODUCT_CATALOG.md` are real catalog items sourced
from the "Struktur" meeting slide (2026-09-14), grouped by business unit.
They are not concept placeholders.

As of v0.6, every product's `summary`, `description`, `highlights`,
`applications`, `specs`, and photo (`content/photos.ts` →
`sampleProductPhotos`) are illustrative sample content, not verified
data --- see `REVISION_V0.6.md` part C and `REVIEW_NOTES.md` section 6.3
for the full list of what the team must still supply. Every product has
`isSample: true`, and the detail page shows a "Sample data" badge on the
specs block and a "Sample" badge on the photo. Do not remove those
badges, and do not quote any sample figure (capacity, dimensions,
power draw, timeline, price) to a customer as if verified.

Use status labels such as Concept, In Development, Prototype, or Coming
Soon only when appropriate.

------------------------------------------------------------------------

## Language rule

The site is **English-only** (see `REVISION_V0.3.md` part A) --- it will
be accessed by external audiences. Brand names are never translated: PT
Kappa Technology Solution, Kappa Solution, Nara Aquaponics, Bumi Hijau,
ESIC Network, JESIC, RAMPUS. All public-facing strings live in
`content/` (never hardcoded in a component), so an Indonesian
translation layer can be added later without touching component code ---
but do not build i18n infrastructure now. Exception: the pre-filled
WhatsApp inquiry message may stay in Indonesian, since its recipient is
the PT KTS team.

------------------------------------------------------------------------

## E-commerce rule

No cart, checkout, or payment. A single "Shop online" / "Online Shop"
link (`site.contact.shopUrl` in `content/site.ts`) may appear in the
navbar/footer/product detail, shown only when the URL is set. The current
shop account belongs personally to Pak Ramdlan (company e-commerce
account cannot be created yet --- documents incomplete) --- never label
it as an official PT KTS store without team confirmation.

Product/service CTAs use an "Ask about this product" / "Ask about this
service" action (WhatsApp `wa.me` with a pre-filled message, in
Indonesian) when a WhatsApp number exists, else link to `/contact`.

------------------------------------------------------------------------

## Contact and profile rule

As of v0.6, `content/site.ts` → `contact` (WhatsApp, email, address) and
`vision`/`mission` are filled in --- see `REVISION_V0.6.md` parts A/B and
`REVIEW_NOTES.md` sections 6.1/6.2 for status:

-   The WhatsApp number is Pak Ramdlan's **personal** number, used
    temporarily as the contact person. Always label it "WhatsApp
    (contact person)", never "Company phone".
-   The office address has **not** been confirmed by the team. It is
    still shown publicly as supplied (per the v0.6 instruction), but
    don't treat it as settled if asked to change contact-related UI.
-   Vision/mission are a draft pending team approval, shown on `/about`
    with a "Draft, pending approval" badge (`SampleBadge`). Don't remove
    that badge or present the text as final without the team's sign-off.

------------------------------------------------------------------------

## Writing rules

As of v0.5, these apply to every piece of user-visible text on the site
(`content/*.ts`, strings and JSX text in `app/**` and `components/**`,
metadata, alt text, aria-labels, form copy, the WhatsApp message). See
`REVISION_V0.5.md` part B for the full brief and worked example.

1.  **No em dash (---) or en dash (--) anywhere in user-visible text.**
    Use a period, colon, comma, or parentheses instead. Number/date
    ranges use the word "to" ("September 3 to 5"), not a dash.
    `scripts/check-copy.mjs` (`npm run check:copy`, runs automatically
    before `npm run build`) fails the build if one slips in.
2.  **One sentence, one idea.** Split sentences that stack two or more
    inserted clauses. Aim for under 20 words per sentence; 28 is the
    hard ceiling.
3.  **No AI-cliché patterns.** Banned: "not just X, but Y"; forced
    three-item lists of empty adjectives ("innovative, reliable, and
    impactful"); "from X to Y" as an opener; "built from the ground
    up", "at the heart of", "in today's world", "bridging the gap";
    filler words used as empty flourish --- seamless, cutting-edge,
    state-of-the-art, empowering, unlock, leverage, robust, holistic,
    end-to-end, journey, "solutions" as a vague noun; "designed to" /
    "ensuring" / "allowing you to" when a direct verb says the same
    thing; rhetorical-question headings ("Have a problem worth
    solving?"); content-free flattery ("Technology that actually
    works").
4.  **Factual and concrete.** If a sentence doesn't add information,
    cut it. Short beats brochure-sounding.
5.  **Page and section titles are short descriptive phrases, not
    slogans, with no trailing period.** E.g. "Products", "Business
    units", "Training and camps" --- not "Technology in development."
6.  **Buttons use short, direct verbs.** E.g. "View products",
    "Contact us", "Ask about this item". Avoid "Explore", "Discover",
    "Learn more about X".
7.  **Alt text is a factual description of what's in the photo** --- no
    dashes, no marketing language.
8.  **American English, sentence case for titles, "and" instead of
    "&"** in prose (brand names and official product names, e.g.
    "Mechanical & Biological Filters", are never changed).
9.  **Never change a fact or add a new claim while editing style.**
    Brand, unit, product, and event names stay exactly as given. When
    in doubt, keep the fact and cut the decoration around it.

------------------------------------------------------------------------

## Design rule

As of v0.3, the visual language is derived from two of the founder's own
repos (`sparktalks`, `bestiego-app`) --- see `DESIGN.md` section "Reference
analysis" for the full breakdown and exact tokens.

The site should feel:

-   premium
-   editorial (serif display type + confident sans body)
-   photography/visual-forward, not icon-and-card-forward
-   varied in section rhythm --- not the same layout repeated

Avoid --- these read as generic AI-generated UI and are explicitly
banned (see `REVISION_V0.3.md` part B step 3):

-   a small-caps eyebrow label with a short accent line above every
    single section
-   the same 3/4-card uniform grid repeated in nearly every section
-   line icons sitting inside a small tinted box
-   rotated/stacked "fanned" cards with a generic soft shadow
-   SVG grid-pattern or radial gradient "blob" backgrounds
-   decorative "01 / 02 / 03" numbering
-   slogan-shaped headings ("X, built from the ground up.") and
    overuse of em dashes in copy

Also avoid the older generic-Bootstrap failure modes: excessive
gradients, excessive rounded corners on everything uniformly, neon
cyberpunk styling, unnecessary glassmorphism, excessive animation.

For product photography that doesn't exist yet, use an intentional
placeholder treatment (per the reference repos' style) rather than a
fake technical illustration. As of v0.6, a labeled sample stock photo
(with a visible "Sample" badge, see the Product rule above) is also an
acceptable stand-in for real product photography, since it's clearly
marked as not the actual item --- but never leave a sample photo
unlabeled.

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
