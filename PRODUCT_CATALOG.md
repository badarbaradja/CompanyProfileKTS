# Product Catalog --- v0.2

> Corrected against `REVISION_V0.2.md` section 4.3. These are **real**
> catalog items sourced from the 2026-09-14 "Struktur" meeting slide,
> grouped by business unit --- not invented concepts like v0.1's
> "Livestock Waste Carbonization System" (removed).

Every entry below is a genuine product/service name from the source
slide. What is still missing --- photos, specifications, pricing --- must
stay empty (`specs: undefined`, `images: []`) until the PT KTS team
supplies verified data. See `REVIEW_NOTES.md` open question #5.

------------------------------------------------------------------------

## Kappa Solution

Alat hasil pengembangan rekayasa, alat praktikum, desain sistem,
pelatihan, camp.

1.  **Alat Praktikum** (produk)
2.  **Alat Hasil Pengembangan Rekayasa** (produk)
3.  **Desain Sistem** (layanan)

------------------------------------------------------------------------

## Nara Aquaponics

Rancang bangun sistem hidroponik & akuaponik, filter mekanik & biologi,
sistem aerasi, kolam bioflok.

1.  **Rancang Bangun Sistem Hidroponik & Akuaponik** (layanan)
2.  **Filter Mekanik dan Biologi** (produk)
3.  **Sistem Aerasi** (produk)
4.  **Kolam Bioflok** (produk)

------------------------------------------------------------------------

## Bumi Hijau

Pencacah sampah, insinerator RAMPUS, komposter Takakura, tungku
gasifikasi.

1.  **Pencacah Sampah** (produk)
2.  **Insinerator RAMPUS** (produk) --- "RAMPUS" is not yet expanded;
    see `REVIEW_NOTES.md` open question #5.
3.  **Komposter Takakura** (produk)
4.  **Tungku Gasifikasi** (produk)

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

Every catalog entry currently provides only:

``` text
Unit (Kappa Solution / Nara Aquaponics / Bumi Hijau)
Type (produk / layanan)
Name
Short description (general function only)
Status (Konsep / Dalam Pengembangan / Prototipe / Segera Hadir)
```

Once verified data exists, entries may add: specifications, dimensions,
capacity, power, materials, safety, certifications, gallery,
documentation, and a price/inquiry model. Only verified fields should be
published; use `<Pending>` for the rest.

------------------------------------------------------------------------

## Featured selection (homepage)

Featured items must be a multiple of 3 so the grid renders full rows.
Current selection (`featured: true` in `content/products/index.ts`):
all 3 Kappa Solution items, plus 3 selected Nara Aquaponics items, plus
3 selected Bumi Hijau items (9 total).
