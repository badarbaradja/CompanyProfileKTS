# PT KTS Website --- v0.3

**Company:** PT Kappa Technology Solution (PT KTS)\
**Project status:** v0.3 skeleton --- structure is real, most detail
content is placeholder/dummy pending team review\
**Document status:** Updated --- 22 September 2026

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

1.  `REVISION_V0.3.md` --- most recent correction: English language,
    design direction from `sparktalks`/`bestiego-app`. Overrides
    `REVISION_V0.2.md` on language and design only.
2.  `REVISION_V0.2.md` --- meeting notes (2026-09-14) and the Struktur
    slide; source of truth for company structure, product catalog,
    events schema, and the e-commerce rule.
3.  `PRD.md` --- what we are building and why
4.  `DESIGN.md` --- how it should look and behave
5.  `ARCHITECTURE.md` --- how it should be implemented
6.  `CONTENT.md` --- approved/placeholder content rules
7.  `PRODUCT_CATALOG.md` --- real product/service catalog, grouped by
    unit
8.  `CLAUDE.md` --- coding-agent operating rules
9.  `ROADMAP.md` --- implementation phases
10. `REVIEW_NOTES.md` --- change log, missing data, and open questions
    for the PT KTS team / advising lecturer

## Important

Company structure (business lines, business units, ESIC Network
relationship) is verified from meeting notes and slides. Most other
details --- contact info, product specs/pricing, team roles, vision/mission
--- remain **placeholders** and must never be presented as verified
facts. See `REVIEW_NOTES.md` for the full list of what's still needed.

While `NEXT_PUBLIC_DRAFT_MODE` is `true` (the default), the site marks
every missing field with a `<Pending>` indicator and is set to
`noindex`.

## Development

```bash
npm install
npm run dev
```

See `ARCHITECTURE.md` for the Cloudflare Workers deployment path.
