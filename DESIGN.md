# Design System & UX Direction --- PT KTS

> v0.3. Supersedes the v0.1 speculative design direction (undecided
> accent color, "recommend a new logo" language) per `REVISION_V0.3.md`
> part B. The design system below is derived from two of the founder's
> own repositories, not invented from scratch --- see "Reference
> analysis" immediately below before changing any UI.

------------------------------------------------------------------------

## 0. Reference analysis

Per `REVISION_V0.3.md` part B step 1. Two repos were located locally
(both also exist on GitHub under `badarbaradja`):

- **sparktalks** --- `D:\USER\website_dev\sparktalks` (GitHub:
  `badarbaradja/SparkTalks`). Next.js 14 + Tailwind v3. A public-speaking
  coaching brand ("SPARK Talks — Where Confidence Begins").
- **bestiego-app** --- `D:\USER\website_dev\bestiego\bestiego-app`
  (GitHub: `badarbaradja/bestiego-app`). Next.js 16 + Tailwind v4. A
  private travel-assistant brand ("BESTIEGO — Travel With Heart"), the
  "bestie travel" repo referenced in the brief.

Both were run locally (`next dev`) and screenshotted full-page with
Playwright/Chromium at 390px and 1440px (content was scrolled through
first so IntersectionObserver-based reveal animations had fired before
capture). Source files read directly: `tailwind.config.ts` +
`src/app/globals.css` + `src/app/layout.tsx` (sparktalks);
`src/app/globals.css` + `src/app/layout.tsx` (bestiego-app); plus
`WhyJoinSection.tsx`/`StatsBar.tsx`/`Footer.tsx` (sparktalks) and
`WhyBestiego.tsx`/`Navbar.tsx`/`SectionReveal.tsx` (bestiego-app).

### What both repos agree on (adopted directly)

- **Display typeface: Cormorant Garamond** (serif, with an italic
  cut), used for every heading in both repos
  (`sparktalks/tailwind.config.ts` → `fontFamily.heading`;
  `bestiego-app/src/app/globals.css` line 28, `--font-display`). This is
  clearly the founder's own recurring choice, not incidental — adopted
  as PT KTS's display face.
- **Warm off-white/cream canvas**, not pure white or cool gray
  (sparktalks `--color-bg: #F5EFE8`; bestiego `--beige: #F8F4EE`).
- **One saturated accent + one dark ink color**, never three
  competing brand colors at once (sparktalks: burgundy `#6A0B23` +
  espresso `#221516`; bestiego: gold `#C8A96B` + navy `#10233F`).
- **Pill-shaped buttons** (`border-radius: 100px` in both), large
  rounded-corner cards/photos (1--2rem radius), soft **color-tinted**
  shadows (never flat black shadows) --- e.g. bestiego
  `--shadow-md: 0 4px 20px rgba(16,35,63,0.12)`.
- **Scroll-reveal-on-view motion**, once per element, translateY +
  opacity, ~0.5--0.7s ease-out (sparktalks: inline framer-motion
  `whileInView`; bestiego: `SectionReveal.tsx` using `useInView`). This
  matches this project's existing `FadeIn`/`StaggerContainer`
  primitives almost exactly --- kept as-is, only restyled.
- **Full-bleed color-block sections** (dark navy/espresso bands) used
  as rhythm breaks between light sections, not just at the very top or
  bottom (sparktalks `StatsBar`; bestiego `MuslimFriendlySection`,
  `CTASection`).
- **Plain, colored line icons with no tinted background box** for
  simple feature strips (sparktalks `StatsBar.tsx`: icon → title →
  subtitle, divided by thin vertical rules, no box). Where a repo *does*
  box an icon (bestiego `WhyBestiego.tsx`: a 60px tinted rounded-square
  behind each icon), that specific treatment is explicitly excluded per
  `REVISION_V0.3.md` part B step 3 ("icon in a small tinted box" is a
  banned AI pattern) — PT KTS follows the boxless `StatsBar` treatment
  instead.
- **Real photography carries the page**, not icon illustrations.
  Product/package cards are photo-first with a caption strip below, not
  a small icon in a colored panel.
- Section headings often eyebrow + heading, but the eyebrow appears
  on maybe half of all sections, never as a rigid rule applied to every
  section, and it's letter-spaced caps text alone --- no separate
  decorative short line/rule element next to it. PT KTS follows this:
  eyebrows are used only where they add real wayfinding value.

### Where the two repos differ (decision made, with reasoning)

| Token | sparktalks | bestiego-app | PT KTS choice | Why |
|---|---|---|---|---|
| Body typeface | Poppins (rounded geometric) | DM Sans (neutral geometric) | **DM Sans** | PT KTS is an engineering/B2B brand, not a lifestyle brand; DM Sans's more neutral, technical character pairs better with Cormorant Garamond for this context than Poppins's softer roundness. |
| Section padding rhythm | ad hoc per section (`py-20 md:py-28`, `py-10 md:py-14`, ...) | one shared `--section-py: 5rem` token | **Single `--section-py` token**, per bestiego | A shared token is easier to keep consistent across many more pages than PT KTS has sections for, and this project already favors CSS custom properties (v0.2's `globals.css` used the same pattern). |
| Card radius scale | not tokenized (ad hoc `rounded-2xl` etc.) | explicit `--radius-sm/md/lg/xl` scale | **Explicit radius scale**, per bestiego | Same reasoning — token discipline scales better than repeating literals. |
| Mobile nav | inline dropdown panel below the navbar (no focus trap, no ARIA) | same pattern | **Neither, kept from v0.2**: an off-canvas drawer with `role="dialog"`, `aria-modal`, focus trap, and Escape-to-close | Both references' mobile nav is visually fine but has weaker accessibility than what v0.2 already built; CLAUDE.md's accessibility rules are not something REVISION_V0.3.md asked to relax, so the accessible drawer mechanics are kept and only its visual skin (color/type/radius) is restyled to match the new system. |

### Accent color: derived from the KTS logo, not copied from either reference

`REVISION_V0.3.md` part B step 2 requires the accent to come from the
KTS logo (blue `#4472C4`, green `#00B050`, red `#FF0000`), not from
sparktalks' burgundy or bestiego's gold, and forbids using all three
logo colors as primary UI colors at once. Following the references'
"one dark ink + one saturated accent" structure:

- **Ink (dark sections, headings, nav-solid text):** a deepened,
  desaturated version of KTS blue, `#0F2438` --- plays bestiego navy's
  structural role.
- **Accent (CTAs, links, active states):** KTS green, tuned for
  AA contrast on white, `#0A8A4B` --- plays the "one saturated accent"
  role that burgundy/gold play in the references.
- **Red is not used as a UI color.** It stays only inside the
  multicolor logo artwork itself. This satisfies "don't use all three
  as primary colors" without discarding blue or green, PT KTS's two
  most structurally useful logo colors.

------------------------------------------------------------------------

## 1. Design concept

**Premium, editorial, photography-forward** --- not generic-corporate,
not "AI-generated startup template." Apple-like restraint stays the
goal, but expressed through the founder's own recurring visual language
(serif display type, warm cream canvas, one dark ink + one accent color,
photo-first cards, varied section rhythm) rather than through icon grids
and tinted boxes.

Do not copy another company's exact visual identity beyond the two
reference repos explicitly named above.

------------------------------------------------------------------------

## 2. Brand personality

PT KTS should communicate: engineering-credible, precise, useful,
confident, modern, structured, human.

Avoid: childish, overly futuristic, neon tech aesthetics, generic
corporate stock-photo layouts, and every pattern listed in section 15
("Patterns to avoid").

------------------------------------------------------------------------

## 3. Color system

```
Canvas          #F7F4EC   (warm cream, not pure white)
Surface          #FFFFFF
Surface raised   #FBF9F4
Ink (dark)       #0F2438   (deepened KTS blue — dark sections, headings)
Ink muted        #4B5A6B
Ink faint        #8B95A1
Border           #E7E1D3
Border strong    #D4CCB8
Accent (KTS green) #0A8A4B
Accent hover     #087A41
Accent light     #E4F3EA
```

Red from the KTS logo is intentionally not part of this palette (see
section 0). If a future brand refresh wants to reintroduce it, do so as
a single, deliberate secondary accent — never alongside blue and green
at equal visual weight.

------------------------------------------------------------------------

## 4. Typography

- **Display (headings): Cormorant Garamond**, self-hosted via
  `next/font/local`, weights 400/500/600/700 + italic 400/500. Used for
  every `h1`--`h4` and for the recurring "two-line heading" pattern
  (a dark serif line followed by an italic accent-color serif line) ---
  borrowed from bestiego, used selectively (not on every heading, to
  avoid becoming its own repetitive tic).
- **Body/UI: DM Sans**, self-hosted via `next/font/local`, weights
  400/500/600/700. Used for body copy, nav, buttons, labels, forms.

```
Display: clamp(2.75rem, 5vw + 1rem, 5.5rem)
H1:      clamp(2.25rem, 4vw + 1rem, 4rem)
H2:      clamp(1.875rem, 3vw + 1rem, 3rem)
H3:      clamp(1.375rem, 2vw + 1rem, 2rem)
H4:      clamp(1.125rem, 1.5vw + 1rem, 1.375rem)
Body lg: 1.0625rem
Body:    1rem
Small:   0.875rem
```

------------------------------------------------------------------------

## 5. Layout & spacing

- Desktop: max content width ~1200--1280px, generous horizontal
  margins.
- Section vertical rhythm driven by a single `--section-py` token
  (5rem desktop, reduced on small screens), per the bestiego pattern —
  not ad hoc per-section padding.
- Mobile: 16--24px horizontal padding, stacked content, touch targets
  ≥44px.
- **Section rhythm must vary**: not every section is a centered
  heading + N-column card grid. Alternate: full-bleed color-block bands,
  asymmetric two-column splits, photo-dominant layouts, list-style
  content (events), and card grids — in that kind of mix, the way both
  reference homepages do.

------------------------------------------------------------------------

## 6. Navigation

Fixed navbar, transparent over the hero and turning solid
(cream/blur + shadow) after ~40px of scroll — same mechanic as both
references. Desktop: wordmark (display font) + link row + a single pill
CTA (Online Shop, shown only when `site.contact.shopUrl` is set). Mobile:
hamburger opens an accessible off-canvas drawer (focus-trapped,
`Escape` to close, restyled to the new tokens — see section 0's decision
table for why the drawer mechanics are kept from v0.2).

------------------------------------------------------------------------

## 7. Cards

- **Product cards:** photo-first (or an intentional placeholder, see
  section 10), a small pill/tag row over the photo (unit + type), title,
  one-line tagline, and a simple text+arrow CTA. No star ratings, no
  fake pricing, no "HOT" labels, no crowded spec tables on listing
  cards.
- **Feature/pillar strips:** plain colored icon (no tinted box) above a
  title and short description, laid out as a divided row (à la
  sparktalks `StatsBar`) or a loose grid — not a uniform bordered card
  grid repeated section after section.
- Radius scale: `--radius-sm: 0.5rem`, `--radius-md: 1rem`,
  `--radius-lg: 1.5rem`, `--radius-xl: 2rem`. Buttons: fully pill
  (`border-radius: 100px`).
- Shadows are soft and tinted toward the ink color, never flat black:
  `--shadow-sm/md/lg` per section 0's reference formulas.

------------------------------------------------------------------------

## 8. Product detail

Header (unit, type, status) → description → specifications (or
`<Pending>`) → "Inquire" CTA. Kept from v0.2's information architecture;
only the visual skin changes.

------------------------------------------------------------------------

## 9. Motion

`FadeIn`/`StaggerContainer` (already built, matching both references'
`whileInView`/`useInView` pattern) stay as the motion primitives — only
restyle their consumers. Preferred: opacity + translateY, ~0.5--0.7s
ease-out, once per element. Respect `prefers-reduced-motion` (unchanged
from v0.2's `globals.css` rule).

------------------------------------------------------------------------

## 10. Imagery & placeholders

Priority: real product/unit photography > real event/training photos >
an **intentional placeholder** > a fake technical illustration. Since
PT KTS has no product photography yet, every product card and hero
visual uses a deliberately-styled placeholder in the reference repos'
visual language (a solid ink/accent-tinted panel with a small, clearly
labeled "Photo coming soon" caption and the unit's real logo watermark)
— never a fabricated exploded-diagram illustration standing in for a
photo (that was v0.1's "CARBONIZATION SYSTEM" mistake).

------------------------------------------------------------------------

## 11. Mobile UX

Unchanged from v0.2: hero readable without excessive scrolling, large
tap targets, no hover-dependent interactions, tables become stacked
cards, no text baked into images for essential information.

------------------------------------------------------------------------

## 12. Accessibility

Unchanged: semantic HTML, visible focus states, keyboard navigation,
sufficient contrast (both new ink/accent colors are checked against
white and cream for AA body-text contrast), alt text, reduced-motion
support, logical heading hierarchy, buttons instead of clickable divs,
form labels.

------------------------------------------------------------------------

## 13. Logo

The real PT KTS/unit logos (`public/brand/`) are final assets supplied
by the team, not a placeholder to be redesigned. Use them via the
`KTSLogo`/`UnitLogo` components; do not invent a new mark.

------------------------------------------------------------------------

## 14. Empty / future states

Use `<Pending>` ("Waiting on data: …") and the draft-mode banner
consistently (see CONTENT.md section 4) — never lorem ipsum.

------------------------------------------------------------------------

## 15. Patterns to avoid

Per `REVISION_V0.3.md` part B step 3 — these read as generic
AI-generated UI and are explicitly banned on this project:

- A small-caps eyebrow label with a short accent line above **every**
  section (an eyebrow alone, used on roughly half of sections where it
  helps wayfinding, is fine — the line decoration and the
  every-single-section rule are what's banned).
- The same 3-or-4-card uniform grid repeated in nearly every section.
- Line icons sitting inside a small tinted box.
- Rotated/stacked "fanned" cards with a generic soft shadow.
- SVG grid-pattern or radial-gradient "blob" backgrounds.
- Decorative "01 / 02 / 03" numbering.
- Slogan-shaped headings ("X, built from the ground up.", "Have a
  problem worth solving?") and overuse of em dashes in body copy.

------------------------------------------------------------------------

## 16. Writing rules

Per `REVISION_V0.5.md` part B. Applies to every string a visitor can
read: `content/*.ts`, JSX text and string props in `app/**` and
`components/**`, metadata, alt text, aria-labels, form copy.

1.  No em dash (---) or en dash (--). Use a period, colon, comma, or
    parentheses; date/number ranges use "to". Enforced by
    `npm run check:copy` (runs before every build).
2.  One sentence, one idea --- split anything stacking two or more
    inserted clauses. Under 20 words per sentence on average, 28 max.
3.  Cut AI-cliché phrasing: forced adjective triads, "not just X, but
    Y", "from X to Y" openers, "built from the ground up", "at the
    heart of", filler words (seamless, cutting-edge, empowering,
    leverage, robust, holistic, journey, "solutions" as vague filler),
    "designed to" / "ensuring" where a direct verb works, rhetorical-
    question headings, content-free flattery.
4.  Factual and concrete; cut sentences that don't add information.
5.  Titles are short descriptive phrases, not slogans, no trailing
    period ("Products", "Business units" --- not "Technology in
    development.").
6.  Buttons are short direct verbs ("View products", "Contact us"),
    never "Explore" / "Discover" / "Learn more about X".
7.  Alt text factually describes the photo --- no dashes, no marketing
    language.
8.  American English, sentence case for titles, "and" instead of "&"
    in prose (official brand/product names are never changed).
9.  Never change a fact or add a new claim while editing for style.
