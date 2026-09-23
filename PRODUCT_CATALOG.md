# Product Catalog --- v0.3

> Corrected against `REVISION_V0.2.md` section 4.3 and `REVISION_V0.3.md`
> part A.3 (English names/slugs). These are **real** catalog items
> sourced from the 2026-09-14 "Struktur" meeting slide, grouped by
> business unit --- not invented concepts like v0.1's "Livestock Waste
> Carbonization System" (removed).

Every entry below is a genuine product/service name from the source
slide, translated to English per `REVISION_V0.3.md`. What is still
missing --- photos, specifications, pricing --- must stay empty
(`specs: undefined`, `images: []`) until the PT KTS team supplies
verified data. See `REVIEW_NOTES.md` open question #5.

------------------------------------------------------------------------

## Kappa Solution

Engineering-developed equipment, lab practicum equipment, system
design, training, camp.

1.  **Lab Practicum Equipment** (product) --- `/products/lab-practicum-equipment`
2.  **Engineering-Developed Equipment** (product) --- `/products/engineering-developed-equipment`
3.  **System Design** (service) --- `/products/system-design`

------------------------------------------------------------------------

## Nara Aquaponics

Hydroponic & aquaponic system design-build, mechanical & biological
filters, aeration systems, biofloc ponds.

1.  **Hydroponic & Aquaponic System Design-Build** (service) --- `/products/hydroponic-aquaponic-design-build`
2.  **Mechanical & Biological Filters** (product) --- `/products/mechanical-biological-filters`
3.  **Aeration Systems** (product) --- `/products/aeration-systems`
4.  **Biofloc Ponds** (product) --- `/products/biofloc-ponds`

------------------------------------------------------------------------

## Bumi Hijau

Waste shredder, RAMPUS incinerator, Takakura composter, gasification
stove.

1.  **Waste Shredder** (product) --- `/products/waste-shredder`
2.  **RAMPUS Incinerator** (product) --- `/products/rampus-incinerator`
    --- "RAMPUS" is not yet expanded; see `REVIEW_NOTES.md` open
    question #5.
3.  **Takakura Composter** (product) --- `/products/takakura-composter`
4.  **Gasification Stove** (product) --- `/products/gasification-stove`

------------------------------------------------------------------------

## Content rules for every entry

Description is a general explanation of function only. **Never**
publish:

-   capacity
-   temperature
-   power/energy consumption
-   output percentage / yield
-   pricing
-   certifications

until the PT KTS team verifies them.

------------------------------------------------------------------------

## Product/service detail template

As of REVISION v0.7, every catalog entry provides:

``` text
Unit (Kappa Solution / Nara Aquaponics / Bumi Hijau)
Type (product / service)
Name
Summary (one line)
Description (general function only)
Highlights (short feature list)
Applications (where it's used)
Specifications ({label, value}[])
One sample photo
```

Summary, description, highlights, applications, specs, and the photo
are SAMPLE data (`isSample: true`, shown with a "Sample data"/"Sample"
badge) — see REVIEW_NOTES.md section 6.3 for the full list of what the
team must replace with verified values. There is deliberately no
per-item status field (Concept/In Development/etc.) — the team never
confirmed a real status for any item, so showing one was an invented
claim (see REVISION_V0.7.md part A). Add a status field back once the
team supplies real per-item status data.

Once verified data exists, entries may also add: dimensions, materials,
safety, certifications, additional photos, documentation, and a
price/inquiry model. Only verified fields should replace sample ones.

------------------------------------------------------------------------

## Featured selection (homepage)

Featured items must be a multiple of 3 so the grid renders full rows.
Current selection (`featured: true` in `content/products/index.ts`):
all 3 Kappa Solution items, plus 3 selected Nara Aquaponics items
(excluding Mechanical & Biological Filters), plus 3 selected Bumi Hijau
items (excluding Takakura Composter) --- 9 total.
