# Review Notes --- v0.1 → v0.2

For the PT KTS team and advising lecturer. This documents what changed,
what's still a placeholder, and what needs a decision from the team.
Source: `REVISION_V0.2.md` (meeting notes 2026-09-14 + "Struktur" slide).

------------------------------------------------------------------------

## 1. What changed (v0.1 → v0.2)

| # | v0.1 | v0.2 |
|---|------|------|
| 1 | Positioning: "From Research to Real-World Solutions" | PT KTS's real structure: 4 lini usaha (Penyediaan Barang, Konsultan, Pengembangan Rekayasa, Pelatihan) + 3 unit usaha (Kappa Solution, Nara Aquaponics, Bumi Hijau) |
| 2 | Training, camp, ESIC, and JESIC excluded from the site | Pelatihan is a business line, Camp is a Kappa Solution activity, PT KTS supports ESIC Network --- all now shown (`/pelatihan`, `/kegiatan`) |
| 3 | No activity calendar | `/kegiatan` --- static calendar (`content/events.ts`), upcoming/past, dummy entries labeled "Contoh" |
| 4 | Invented product concepts (e.g. "Livestock Waste Carbonization System") + a fictional "CARBONIZATION SYSTEM" hero illustration | Real catalog: 11 items from the Struktur slide, grouped by unit; hero now shows the real unit logos |
| 5 | No e-commerce link | Conditional "Toko Online" button (hidden until `site.contact.shopUrl` is set) |
| 6 | English site | Bahasa Indonesia for all site content and routes |
| 7 | Build required network access (`next/font/google`) | Self-hosted Inter via `next/font/local` |
| 8 | "Provisional" notes scattered as inline text | One consistent `<Pending>` component + a draft-mode banner |
| --- | Sitemap: `/about`, `/innovation`, `/products`, `/projects`, `/insights`, `/contact` | Sitemap: `/tentang`, `/layanan`, `/produk`, `/pelatihan`, `/kegiatan`, `/kontak` (old routes redirect; `/innovation`, `/projects`, `/insights` have no v0.2 equivalent and redirect to `/`) |

## 2. What's still placeholder / dummy

- **Contact details** (`content/site.ts` → `contact`): WhatsApp, email,
  and office address are empty strings. The site falls back to `/kontak`
  and shows `<Pending>` markers until these are filled in.
- **Vision & mission** (`content/site.ts` → `vision`/`mission`):
  currently `undefined`, shown as `<Pending>` on `/tentang`.
- **Team** (`/tentang`): intentionally shows only a `<Pending>` block ---
  we did not decide who appears on the site or with what titles/photos
  (see open question #4 below), so no names are published yet.
- **Product/service data** (`content/products/index.ts`): all 11 items
  have empty `specs` and `images`. Status is uniformly "Dalam
  Pengembangan" (In Development) --- we have no verified basis to
  differentiate maturity per item.
- **Activity calendar** (`content/events.ts`): all 5 entries are example
  data, `isDummy: true`, titled with a "(Contoh)" suffix and shown with
  a visible "Contoh" badge. Replace with real dates once available.
- **Toko Online**: `site.contact.shopUrl` is empty, so the button is
  hidden everywhere (navbar, footer, product detail, contact CTA).
- **ESIC expansion** (`site.esicNetwork.expansion`): not set, shown as
  `<Pending>` on the homepage ESIC section.
- **YouTube documentation** (`site.training.youtubeUrl`): empty, so
  `/pelatihan` shows `<Pending>` instead of an iframe.

Turn `NEXT_PUBLIC_DRAFT_MODE=false` once real data replaces these ---
that removes the draft banner and every `<Pending>` marker, and switches
`robots.ts` back to indexable.

## 3. Open questions --- do not guess these (REVISION_V0.2.md section 8)

1.  Visi & misi resmi PT KTS.
2.  Nomor WhatsApp, email, dan alamat kantor resmi.
3.  URL toko Shopee, dan apakah boleh ditampilkan meskipun masih akun
    pribadi Pak Ramdlan.
4.  Jabatan dan foto tim --- siapa saja yang akan tampil di website.
5.  Foto, spesifikasi, dan skema harga tiap produk/layanan; kepanjangan
    "RAMPUS" (Insinerator RAMPUS, Bumi Hijau).
6.  Kepanjangan "ESIC" dan penjelasannya; status JESIC saat ini
    (masih dibahas Pak Abrar, Aisha, Intan).
7.  Jadwal kegiatan nyata untuk `/kegiatan` (menggantikan data contoh).
8.  Apakah "Nisha Snacks" (logo ada di slide rapat, tapi di luar bagan
    struktur) termasuk unit usaha PT KTS?
9.  Domain untuk deploy di Cloudflare Workers (`NEXT_PUBLIC_SITE_URL`).

## 4. Where to make changes

All company facts live in three files --- never edit page components
directly for content changes:

- `content/site.ts` --- company info, contact, business lines/units,
  ESIC Network, training references
- `content/products/index.ts` --- product/service catalog
- `content/events.ts` --- activity calendar
