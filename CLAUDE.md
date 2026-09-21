# CLAUDE.md --- PT KTS Website Agent Instructions

## Project

You are building the official website for:

**PT Kappa Technology Solution (PT KTS)**

The website is a premium technology-company profile and research-derived
product showcase.

------------------------------------------------------------------------

## Read before coding

Always read:

1.  `PRD.md`
2.  `DESIGN.md`
3.  `ARCHITECTURE.md`
4.  `CONTENT.md`
5.  `PRODUCT_CATALOG.md`
6.  `ROADMAP.md`

Do not begin a large implementation without understanding these
documents.

------------------------------------------------------------------------

## Core product principle

The website must communicate:

> Research → Engineering → Product → Real-world impact

PT KTS is not currently being presented as:

-   an event organizer
-   a training company
-   a student organization
-   a generic software house
-   a marketplace

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

The provisional products in `PRODUCT_CATALOG.md` exist only to build the
UI.

They must not be represented as verified commercial products.

Use status labels such as:

-   Concept
-   In Development
-   Prototype
-   Coming Soon

only when appropriate.

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
