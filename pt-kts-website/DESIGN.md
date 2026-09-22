# Design System & UX Direction --- PT KTS

## 1. Design concept

### Core idea

**Premium technology, not generic corporate.**

Visual reference principles:

-   Apple-like restraint
-   modern engineering companies
-   editorial product storytelling
-   industrial precision
-   generous whitespace
-   large product imagery
-   subtle motion

Do not copy another company's website, assets, or exact visual identity.

------------------------------------------------------------------------

## 2. Brand personality

PT KTS should communicate:

-   Innovative
-   Precise
-   Useful
-   Confident
-   Modern
-   Responsible
-   Human

Avoid:

-   childish
-   overly futuristic
-   excessive gradients
-   excessive glassmorphism
-   excessive rounded cards
-   neon tech aesthetics
-   generic corporate stock-photo layouts

------------------------------------------------------------------------

## 3. Color direction

The existing logo uses blue, green, and red. This should NOT
automatically become the website palette.

Recommended base:

``` text
Canvas        #F5F5F3
Surface       #FFFFFF
Text          #111111
Muted text    #6B6B6B
Border        #E7E7E3
Dark section  #111111
```

Accent color is intentionally unresolved until the new logo/brand
direction is approved.

Rule:

> Use one controlled accent, not three competing primary colors.

------------------------------------------------------------------------

## 4. Typography

Preferred direction:

-   Geist or Inter for interface/body
-   strong large display typography
-   high contrast between heading and supporting text

Suggested hierarchy:

``` text
Display: 64–96px desktop / 44–56px mobile
H1:      48–64px desktop / 36–44px mobile
H2:      36–48px desktop / 30–36px mobile
H3:      24–32px
Body:    16–18px
Small:   13–14px
```

Use fluid typography where appropriate.

------------------------------------------------------------------------

## 5. Layout

Desktop:

-   12-column grid
-   max content width around 1200--1400px
-   generous horizontal margins
-   large section spacing

Mobile:

-   4-column conceptual grid
-   16--24px horizontal padding
-   stacked content
-   no tiny text
-   touch targets at least approximately 44px

------------------------------------------------------------------------

## 6. Navigation

Desktop:

``` text
KTS | About | Innovation | Products | Projects | Insights | Contact
                                                        [Explore Products]
```

Keep navigation compact.

Mobile:

``` text
KTS                                      Menu
```

Use a clean drawer/sheet.

Sticky navigation may be used if it remains visually light.

------------------------------------------------------------------------

## 7. Product cards

Cards should feel editorial rather than marketplace-like.

Preferred:

-   large image
-   minimal metadata
-   strong title
-   one short description
-   simple arrow CTA

Avoid:

-   star ratings
-   fake reviews
-   fake pricing
-   discount badges
-   "HOT" labels
-   crowded specification tables on listing cards

------------------------------------------------------------------------

## 8. Product detail

The product detail page should feel like a product launch story.

Hero:

-   product name
-   one-line value proposition
-   large visual
-   primary CTA

Then progressively reveal:

Problem → Solution → Technology → Application → Evidence → Specification
→ Inquiry.

------------------------------------------------------------------------

## 9. Motion

Motion should be subtle.

Preferred:

-   opacity
-   translateY
-   scale 0.98 → 1
-   image parallax used sparingly
-   smooth hover transitions
-   section reveal on scroll

Avoid:

-   bouncing
-   spinning
-   constant floating
-   aggressive parallax
-   animation that delays access to content

Motion must respect `prefers-reduced-motion`.

------------------------------------------------------------------------

## 10. Imagery

Priority:

1.  Real product photography
2.  Real research/development photography
3.  High-quality product renders
4.  Controlled placeholder renders
5.  Generic stock photography only when unavoidable

For MVP, placeholder visuals are acceptable but must be clearly treated
as temporary.

------------------------------------------------------------------------

## 11. Mobile UX

Mobile is a first-class design target.

Rules:

-   hero remains readable without excessive scrolling
-   product images remain dominant
-   CTA buttons are easy to tap
-   horizontal carousels only when genuinely useful
-   no text embedded inside images for essential information
-   no hover-dependent interactions
-   tables become stacked cards or horizontally scrollable sections

------------------------------------------------------------------------

## 12. Accessibility

Minimum:

-   semantic HTML
-   visible focus states
-   keyboard navigation
-   sufficient contrast
-   alt text
-   reduced-motion support
-   logical heading hierarchy
-   buttons instead of clickable divs
-   form labels

------------------------------------------------------------------------

## 13. Logo direction

The existing logo is temporary.

Recommended redesign directions:

### Direction A --- KTS monogram

A simple geometric KTS mark that can work as:

-   favicon
-   navbar logo
-   product stamp
-   social avatar

### Direction B --- Abstract K

A distinctive K built from engineering/connection geometry.

### Direction C --- Wordmark

Minimal:

> KAPPA TECHNOLOGY SOLUTION

with a small symbol.

Do not force the logo into a circular badge.

------------------------------------------------------------------------

## 14. Empty / future states

Use premium placeholders:

-   Coming Soon
-   In Development
-   Prototype
-   More innovations are being developed

Never use lorem ipsum in the production UI.
