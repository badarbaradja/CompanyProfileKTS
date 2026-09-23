# Content Source of Truth --- PT KTS

> v0.3. Corrected against `REVISION_V0.2.md` and `REVISION_V0.3.md`
> (English language). Where this document disagrees with either, the
> newer revision doc wins --- `REVISION_V0.3.md` over `REVISION_V0.2.md`.

## 1. Verified information currently supplied

### Company

**PT Kappa Technology Solution** --- short name **PT KTS**.

### Structure (Struktur slide, meeting 2026-09-14)

-   **4 lini usaha:** Penyediaan Barang, Konsultan, Pengembangan
    Rekayasa, Pelatihan
-   **3 unit usaha:**
    -   **Kappa Solution** --- alat hasil pengembangan rekayasa, alat
        praktikum, desain sistem, pelatihan, camp
    -   **Nara Aquaponics** --- rancang bangun sistem hidroponik &
        akuaponik, filter mekanik & biologi, sistem aerasi, kolam
        bioflok
    -   **Bumi Hijau** --- pencacah sampah, insinerator RAMPUS,
        komposter Takakura, tungku gasifikasi
-   PT KTS **supports** ESIC Network, whose activities include ESIC,
    JESIC, Summer Camp, and Pelatihan.

### Assets

Logos supplied from the meeting slide, in `public/brand/`: `kts-logo.png`,
`kts-mark.png`, `kappa-solution.png`, `nara-aquaponics.png`,
`bumi-hijau.png`, `esic-network.png`.

### Founders supplied by team (v0.1, unverified for v0.2 --- see open
questions in `REVIEW_NOTES.md`)

1.  Abrar
2.  Mukhammad Ramdlan KI
3.  Tri Ayodha

### Current team supplied by team (job titles intentionally omitted
until verified)

1.  Galuh Intan Khumaira
2.  Febianeu Putri Agna
3.  Aisha Laila Mardiyah
4.  Badar Zaki Baradja

### Social

Instagram: https://www.instagram.com/kappasolution/

### Training references (meeting 2026-09-14)

Three Instagram posts used only as external link cards on `/training`
--- never scraped, mirrored, or captioned from:

-   https://www.instagram.com/p/DOat_4CgZHA/
-   https://www.instagram.com/p/DJ24bwcTH2n/
-   https://www.instagram.com/p/DHsFbx1pzw-/

------------------------------------------------------------------------

## 2. Public positioning draft

> PT Kappa Technology Solution runs four business lines (Equipment
> Supply, Consulting, Engineering Development, Training) through three
> business units --- Kappa Solution, Nara Aquaponics, and Bumi Hijau ---
> and supports ESIC Network.

This replaces the v0.1 "From Research to Real-World Solutions" draft,
which did not reflect the company's actual structure. This is still
**draft marketing copy**, not verified legal/company-profile text.

------------------------------------------------------------------------

## 3. Current missing information

The following should remain placeholders (see `REVIEW_NOTES.md` for the
full open-questions list from `REVISION_V0.2.md` section 8):

-   official vision & mission
-   WhatsApp number, official email, office address
-   Shopee/shop URL, and whether the personal (Pak Ramdlan) account may
    be shown publicly
-   team job titles and photos; who exactly appears on the site
-   product/service photos, specifications, and pricing model
-   what "RAMPUS" stands for
-   what "ESIC" stands for, and current JESIC status
-   real activity-calendar dates
-   whether "Nisha Snacks" (logo present on the slide but outside the
    org chart) is a KTS unit
-   the Cloudflare deployment domain
-   NIB, NPWP, establishment date, legal company description, business
    classification

------------------------------------------------------------------------

## 4. Content rules

### Never invent

Do not invent: legal facts, certifications, customer names, product
performance, capacity, dimensions, pricing, revenue, awards, patents,
research results, or environmental impact numbers.

### Allowed for prototype

Use explicitly marked placeholders via the `<Pending>` component
("Menunggu data: ...") and the draft-mode banner, not bare placeholder
text scattered through pages.

Dummy example data (e.g. sample calendar events) must be flagged
`isDummy: true` in its content file and shown with a visible "Contoh"
label in the UI --- never presented as a real, confirmed date/fact.

------------------------------------------------------------------------

## 5. Temporary website copy (English)

As of v0.3, all site-facing copy is in **English** --- the site is
accessed by external audiences (see `REVISION_V0.3.md` part A). Brand
names are never translated: PT Kappa Technology Solution, Kappa
Solution, Nara Aquaponics, Bumi Hijau, ESIC Network, JESIC, RAMPUS.
Every string lives in `content/`, never hardcoded in a component, so an
Indonesian translation layer can be added later without touching
component code. Exception: the pre-filled WhatsApp inquiry message may
stay in Indonesian, since its recipient is the PT KTS team.

### Hero

> Four business lines, three business units, one innovation network.

> We supply equipment, provide consulting and engineering development,
> and run training through Kappa Solution, Nara Aquaponics, and Bumi
> Hijau.

### Services CTA

> See our services.

### Products CTA

> Explore our products.

### Contact CTA

> Got something we can help with?

> Get in touch with PT KTS.

------------------------------------------------------------------------

## 6. Relationship with ESIC Network

**Reversed from v0.1.** ESIC Network, JESIC, Summer Camp, and Training
ARE part of the public information architecture as of v0.2, per the
2026-09-14 meeting notes and Struktur slide. PT KTS's role is described
as "support" (PT KTS ──support──▶ ESIC Network) --- do not describe PT
KTS as being the same organization as ESIC Network. JESIC is shown with
a "Coming Soon" label until Pak Abrar/Aisha/Intan finalize it.
