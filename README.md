# PT KTS Website --- v0.6

**Company:** PT Kappa Technology Solution (PT KTS)\
**Project status:** v0.6 --- structure and contact details are real;
vision/mission are a team-pending draft; the product catalog's
`summary`/`highlights`/`applications`/`specs`/photos are sample content
(marked `isSample: true`) previewing the finished page, not verified
data\
**Document status:** Updated --- 23 September 2026

## Purpose

This repository contains the product, design, architecture, content, and
agent guidance for the PT KTS website.

As of v0.2, the site presents PT KTS's real company structure: **4
business lines** (Equipment Supply, Consulting, Engineering Development,
Training) delivered through **3 business units** (Kappa Solution, Nara
Aquaponics, Bumi Hijau), alongside PT KTS's support role for **ESIC
Network** (ESIC, JESIC, Summer Camp, Training). This reverses the v0.1
decision to exclude training/ESIC/JESIC from the public site.

As of v0.3, the site is **English-only** (it will be accessed by
external audiences) and its visual design is derived from two of the
founder's own repos, `sparktalks` and `bestiego-app` --- see `DESIGN.md`
section "Reference analysis".

## Source of truth

Read documents in this order:

1.  `REVISION_V0.6.md` --- most recent: real contact details, a draft
    vision/mission, and sample catalog content for every product.
2.  `REVISION_V0.5.md` --- writing-rules pass (em dash/en dash and
    AI-cliché removal); no content-fact or layout changes.
3.  `REVISION_V0.3.md` --- English language, design direction from
    `sparktalks`/`bestiego-app`. Overrides `REVISION_V0.2.md` on
    language and design only.
4.  `REVISION_V0.2.md` --- meeting notes (2026-09-14) and the Struktur
    slide; source of truth for company structure, product catalog,
    events schema, and the e-commerce rule.
5.  `PRD.md` --- what we are building and why
6.  `DESIGN.md` --- how it should look and behave
7.  `ARCHITECTURE.md` --- how it should be implemented
8.  `CONTENT.md` --- approved/placeholder content rules
9.  `PRODUCT_CATALOG.md` --- real product/service catalog, grouped by
    unit
10. `CLAUDE.md` --- coding-agent operating rules
11. `ROADMAP.md` --- implementation phases
12. `REVIEW_NOTES.md` --- change log, missing data, and open questions
    for the PT KTS team / advising lecturer

## Important

Company structure (business lines, business units, ESIC Network
relationship) is verified from meeting notes and slides. Contact details
(WhatsApp, email, address) were supplied 2026-09-23 --- the WhatsApp
number is Pak Ramdlan's personal line, used temporarily, and the address
is not yet confirmed by the team. Vision/mission are a 2026-09-23 draft,
still pending team approval. The product catalog's `summary`,
`description`, `highlights`, `applications`, `specs`, and photos are
sample content added so the team can see a finished product page ---
every one of them is marked `isSample: true` and shown with a "Sample
data"/"Sample" badge in the UI, and none of it should be presented as a
verified fact. Team roles/photos remain a placeholder. See
`REVIEW_NOTES.md` for the full list of what's still needed.

While `NEXT_PUBLIC_DRAFT_MODE` is `true` (the default), the site marks
every missing field with a `<Pending>` indicator and is set to
`noindex`.

## Development

```bash
npm install
npm run dev
```

See `ARCHITECTURE.md` for the Cloudflare Workers deployment path.
