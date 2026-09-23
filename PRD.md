# Product Requirements Document --- PT KTS Website

> v0.3. Corrected against `REVISION_V0.2.md` (meeting notes 2026-09-14 +
> "Struktur" slide) and `REVISION_V0.3.md` (English language, redesign
> direction). Where this document disagrees with either, the newer
> revision doc wins --- `REVISION_V0.3.md` over `REVISION_V0.2.md`.

## 1. Product overview

PT Kappa Technology Solution (PT KTS) is being positioned through this
website as a company with **4 business lines** and **3 business units**,
operating alongside (and supporting) **ESIC Network**.

The first website is a **premium company profile**: enough of a
skeleton to exist publicly, with dummy/placeholder content where real
data is not yet available. It is explicitly not required to be complete
at launch --- see section 10.

It is not intended to be a marketplace. No cart, checkout, or payment.

### Core structure (from the 2026-09-14 "Struktur" slide)

```
PT KTS ──support──▶ ESIC Network (ESIC, JESIC, Summer Camp, Pelatihan)

Lini usaha: Penyediaan Barang · Konsultan · Pengembangan Rekayasa · Pelatihan

Unit usaha:
├─ Kappa Solution   — alat hasil pengembangan rekayasa, alat praktikum, desain sistem, pelatihan, camp
├─ Nara Aquaponics  — rancang bangun sistem hidroponik & akuaponik, filter mekanik & biologi, sistem aerasi, kolam bioflok
└─ Bumi Hijau       — pencacah sampah, insinerator RAMPUS, komposter Takakura, tungku gasifikasi
```

This positioning is sourced directly from meeting notes and must not be
altered without a new source document.

------------------------------------------------------------------------

## 2. Business goals

### Primary goals

1.  Make a first-time visitor understand PT KTS's structure (4 business
    lines, 3 business units, ESIC Network relationship) within seconds.
2.  Present the real product/service catalog per business unit.
3.  Provide a training/camp overview and an activity calendar.
4.  Convert interest into a WhatsApp inquiry or store visit.
5.  Establish a credible digital presence while company legal documents
    (NIB, NPWP, bank account) are still incomplete.

### Secondary goals

-   Support product/service presentations to potential customers.
-   Prepare the site for future commerce without prematurely building a
    full marketplace.
-   Give the PT KTS team and their advising lecturer a reviewable
    artifact (`REVIEW_NOTES.md`) that lists what's still missing.

------------------------------------------------------------------------

## 3. Target audiences

### Primary

**Potential customers / buyers** for Kappa Solution, Nara Aquaponics, or
Bumi Hijau products and services.

### Secondary

**Prospective training/camp participants**, **business/technology
partners**, and **researchers/academics** evaluating PT KTS and ESIC
Network.

### General

**Curious visitors** asking: "What is PT KTS, and what does it actually
do?"

------------------------------------------------------------------------

## 4. Positioning

PT KTS should feel: practical, credible, modern, human, premium,
structured.

PT KTS should NOT feel like:

-   a student organization
-   a generic software house
-   a marketplace / reseller with a random product catalog

PT KTS training, camp, and ESIC Network activities ARE part of the
public identity (reversing the v0.1 exclusion) --- they are real
business lines and unit activities, not out-of-scope extras.

------------------------------------------------------------------------

## 5. Scope --- v0.2

### In scope

-   Beranda (home)
-   Tentang (profile, vision/mission, structure diagram, team)
-   Layanan (4 business lines + 3 business units)
-   Produk (catalog grouped by unit) + product/service detail
-   Pelatihan (training & camp overview, Instagram showcase, optional
    YouTube documentation)
-   Kegiatan (activity calendar: upcoming/past, static data) + ESIC
    Network section
-   Kontak (contact info + client-side inquiry form → WhatsApp/mailto)
-   "Toko Online" link, shown only when a shop URL is configured
-   Draft-mode banner + `<Pending>` markers for missing data
-   Responsive navigation and footer
-   Motion system (respecting `prefers-reduced-motion`)
-   SEO metadata, sitemap, robots (noindex while in draft mode)
-   Permanent redirects from the old v0.1 routes

### Out of scope for v0.2

-   customer accounts / public registration
-   admin dashboard / CMS
-   shopping cart / checkout / payment gateway
-   order management
-   database (event and product data stay static in `content/`)
-   scraping or mirroring Instagram/YouTube content
-   internal work classification (internal vs. jasa), KTS finances,
    profit/wage distribution --- never shown publicly
-   NIB, NPWP, bank account numbers --- not public content
-   naming individual internal staff as task owners

These can be added later if the business requires them.

------------------------------------------------------------------------

## 6. Information architecture

``` text
/
├── /about
├── /services
├── /products
│   └── /products/[slug]
├── /training
├── /events
└── /contact
```

`/about`, `/products`, `/products/[slug]`, and `/contact` are unchanged
v0.1 paths. `/innovation`, `/projects`, and `/insights` have no direct
v0.3 equivalent and permanently redirect to the closest replacement
(`/services`, `/events`, `/events` respectively) --- see
`REVISION_V0.3.md` part A.1.

### Main navigation

Home · About · Services · Products · Training · Events · Contact

Primary CTA (conditional): **Online Shop** --- shown only when
`site.contact.shopUrl` is set.

------------------------------------------------------------------------

## 7. Homepage requirements

1.  **Hero** --- company name, one-line summary of the 4 business lines
    and 3 business units. Visual uses the real logos and real structure,
    not a fictional product illustration.
2.  **4 business lines** --- Equipment Supply, Consulting, Engineering
    Development, Training.
3.  **3 business units** --- Kappa Solution, Nara Aquaponics, Bumi
    Hijau, each with logo, field, and activity list per the Struktur
    slide.
4.  **Featured products** --- featured items in a multiple of 3 (full
    grid rows).
5.  **Upcoming training & events** --- pulled from `content/events.ts`.
6.  **ESIC Network** --- what it is, and that PT KTS supports it.
7.  **Contact CTA** + Online Shop link (conditional).

------------------------------------------------------------------------

## 8. Product/service page requirements

Each catalog item belongs to a business unit and is either a product or
a service. Structure:

``` text
Header (unit, category, status)
↓
Description (general function only)
↓
Specifications (only if verified --- otherwise omitted/Pending)
↓
CTA: "Inquire" → WhatsApp with a pre-filled message, or /contact if no
     WhatsApp number is configured yet
```

Never publish capacity, temperature, power, output percentages, pricing,
or certifications until the team verifies them.

------------------------------------------------------------------------

## 9. Contact requirements

At minimum: WhatsApp, email, address (all placeholders until supplied),
Instagram `@kappasolution`, and a client-side inquiry "form" that
composes a message and opens WhatsApp or `mailto:` --- no backend, no
stored data, no spam-protection requirement since nothing is persisted.

------------------------------------------------------------------------

## 10. Content integrity

The meeting explicitly allows dummy/"under construction" content as long
as it is clearly marked. The site must distinguish between:

-   verified company information
-   approved/meeting-sourced copy (this document, `REVISION_V0.2.md`)
-   dummy example data (e.g. sample calendar events) --- flagged
    `isDummy: true` and labeled "Contoh" in the UI
-   missing information --- shown via the `<Pending>` component while
    `NEXT_PUBLIC_DRAFT_MODE` is true, hidden neatly otherwise

Never turn a placeholder into an apparent fact.

------------------------------------------------------------------------

## 11. Success criteria

A first-time visitor should be able to answer these within 10 seconds:

-   What is PT KTS, and what are its business lines/units?
-   What does each unit (Kappa Solution, Nara Aquaponics, Bumi Hijau)
    make or do?
-   How is PT KTS related to ESIC Network?
-   How can I learn more, ask about a product, or contact the company?

The website should work cleanly at 360--430px mobile, tablet, and
1280/1440/1920px desktop, with no horizontal overflow and no important
information hidden only behind hover.

------------------------------------------------------------------------

## 12. Future roadmap

See `ROADMAP.md`.
