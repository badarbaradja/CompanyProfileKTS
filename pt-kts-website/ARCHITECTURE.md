# Technical Architecture --- PT KTS

## 1. Principle

Build the MVP as a fast, mostly static, Cloudflare-native Next.js
website.

Do not introduce infrastructure before the business needs it.

------------------------------------------------------------------------

## 2. Recommended stack

``` text
Next.js
TypeScript
Tailwind CSS
shadcn/ui (only where useful)
Framer Motion
Cloudflare Workers
Cloudflare R2 (future media storage)
Cloudflare D1 (future content/data storage)
Cloudflare DNS
Cloudflare Web Analytics (optional)
```

Cloudflare currently recommends its `vinext` path for new Next.js
applications on Workers. Existing OpenNext projects remain supported,
but Cloudflare recommends vinext for new applications. See the official
Cloudflare Next.js guide:
https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/

------------------------------------------------------------------------

## 3. Deployment strategy

### MVP

If content is hardcoded/static:

``` text
GitHub
  ↓
Cloudflare Workers
  ↓
Next.js
  ↓
Visitor
```

No database is required.

### Future

``` text
Visitor
  ↓
Cloudflare
  ↓
Next.js / Workers
  ├── D1
  ├── R2
  └── APIs
```

Cloudflare D1 is a managed serverless SQL database with SQLite semantics
and Worker bindings.

Cloudflare R2 is the preferred future object-storage candidate for
product images, brochures, galleries, and other media if media storage
needs grow.

------------------------------------------------------------------------

## 4. Database decision

Do NOT create D1 for MVP unless dynamic content is required.

Potential future entities:

``` text
products
product_categories
projects
insights
media
inquiries
```

Potential future relationships:

``` text
product
  ├── media
  ├── projects
  └── research references
```

------------------------------------------------------------------------

## 5. Admin decision

No public login in MVP.

No admin dashboard in MVP.

If content becomes difficult to maintain manually, introduce an
authenticated admin/CMS later.

Public users must never need an account to browse products.

------------------------------------------------------------------------

## 6. Commerce strategy

MVP:

``` text
Product
  ↓
Product detail
  ↓
Request Product Information
  ↓
WhatsApp / email / inquiry
```

Future:

``` text
Product
  ↓
Cart
  ↓
Checkout
  ↓
Payment
  ↓
Order
```

Do not build payment/order infrastructure before the commercial model is
confirmed.

------------------------------------------------------------------------

## 7. Suggested repository structure

``` text
app/
  page.tsx
  about/
  innovation/
  products/
    page.tsx
    [slug]/
  projects/
  insights/
    page.tsx
    [slug]/
  contact/

components/
  layout/
  navigation/
  sections/
  products/
  projects/
  insights/
  ui/

content/
  products/
  projects/
  insights/

lib/
  content/
  utils/

public/
  brand/
  products/
  projects/
  team/
```

------------------------------------------------------------------------

## 8. Rendering strategy

Prefer:

-   static generation
-   server components
-   minimal client components
-   client-side JavaScript only where interaction requires it

Do not turn the whole website into a client component.

------------------------------------------------------------------------

## 9. Performance

Targets:

-   optimized images
-   responsive image sizes
-   lazy-load below-the-fold media
-   minimal third-party scripts
-   avoid unnecessary JS
-   avoid giant animation libraries when CSS is enough
-   use font optimization
-   monitor Core Web Vitals

------------------------------------------------------------------------

## 10. Security

Even for a company profile:

-   no secrets in source code
-   environment variables for secrets
-   sanitize inquiry input
-   rate-limit public forms
-   anti-spam protection
-   safe external links
-   security headers where appropriate

------------------------------------------------------------------------

## 11. SEO

Every public page should have:

-   unique title
-   meta description
-   canonical URL where needed
-   Open Graph metadata
-   Twitter/X card metadata where appropriate
-   structured data where useful
-   semantic headings
-   descriptive URLs
-   sitemap
-   robots configuration

Product pages are especially important for search discovery.

------------------------------------------------------------------------

## 12. Environment variables

Never commit real secrets.

Use:

``` text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP=
```

Only add private variables when a real backend integration exists.

------------------------------------------------------------------------

## 13. Cloudflare note

For a new Next.js + Cloudflare project in September 2026, use the
current Cloudflare Workers/Next.js guidance rather than older Pages-only
tutorials.

Cloudflare explicitly states that Workers is its primary platform for
new application projects and recommends vinext for Next.js on Workers.
