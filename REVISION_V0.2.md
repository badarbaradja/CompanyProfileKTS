# Instruksi Revisi v0.2 — Website PT KTS

> Untuk coding agent. Baca seluruh dokumen ini sebelum menulis kode.
> Dokumen ini **mengoreksi** PRD.md, CLAUDE.md, CONTENT.md, PRODUCT_CATALOG.md,
> dan ROADMAP.md. Jika ada yang bertentangan, **dokumen ini yang berlaku**.
>
> Status: diterapkan pada branch `v0.2-struktur-kts`. Disimpan verbatim di sini
> sebagai catatan rapat / sumber kebenaran; dokumen operasional lain (PRD.md,
> CLAUDE.md, CONTENT.md, PRODUCT_CATALOG.md, ROADMAP.md, README.md) telah
> diperbarui mengikuti isi dokumen ini.
>
> **DIKOREKSI oleh REVISION_V0.3.md (part A):** seluruh instruksi "Bahasa
> Indonesia untuk konten dan route" di dokumen ini (bagian 3 baris #6, bagian
> 4.1 nama-nama route, dan bagian 5) **tidak lagi berlaku** — situs sekarang
> berbahasa Inggris, lihat `REVISION_V0.3.md`. Semua bagian lain dari dokumen
> ini (struktur perusahaan, katalog produk per unit, skema kalender kegiatan,
> aturan e-commerce, aturan konten dummy/Pending) tetap berlaku.

---

## 0. Sumber kebenaran

1. Notulensi Rapat ESIC bersama dosen, 14 September 2026 (bagian 1 di bawah)
2. Slide "Meeting KTS — 14 September 2026", slide *Struktur* (bagian 2 di bawah)
3. Dokumen lama di repo, **hanya** untuk hal yang tidak dikoreksi di sini (sistem desain, aturan aksesibilitas, quality gate, arsitektur Cloudflare)

## 1. Ringkasan notulensi (14 Sep 2026)

- Website berisi **company profile**.
- Cukup **kerangka** dulu. Yang penting websitenya sudah terbentuk; isi boleh data dummy atau bertuliskan "under construction".
- Akun e-commerce resmi perusahaan **belum bisa dibuat** karena dokumen perusahaan (NIB, NPWP, rekening, akta, cap) belum lengkap. **Sementara ini akun e-commerce memakai akun pribadi Pak Ramdlan.**
- JESIC masih akan dibahas (Pak Abrar, Aisha, Intan).
- Ada **gambaran training** dari 3 postingan Instagram:
  - https://www.instagram.com/p/DOat_4CgZHA/
  - https://www.instagram.com/p/DJ24bwcTH2n/
  - https://www.instagram.com/p/DHsFbx1pzw-/
- Jenis pekerjaan ada 2: internal dan jasa. **Ini urusan internal dan TIDAK ditampilkan di website.**
- **Dibutuhkan kalender kegiatan.**

## 2. Struktur perusahaan (slide Struktur)

```
PT KTS ──support──▶ ESIC Network  (aktivitas: ESIC, JESIC, Summer Camp, Pelatihan)

Lini usaha PT KTS:  Penyediaan Barang · Konsultan · Pengembangan Rekayasa · Pelatihan

Unit usaha:
├─ Kappa Solution   : alat hasil pengembangan rekayasa, alat praktikum, desain sistem, pelatihan, camp
├─ Nara Aquaponics  : rancang bangun sistem hidroponik & akuaponik, filter mekanik & biologi,
│                     sistem aerasi, kolam bioflok, dll
└─ Bumi Hijau       : pencacah sampah, insinerator RAMPUS, komposter Takakura, tungku gasifikasi, dll
```

Logo tersedia di `public/brand/` (lihat bagian 7): `kts-logo.png`, `kts-mark.png`,
`kappa-solution.png`, `nara-aquaponics.png`, `bumi-hijau.png`, `esic-network.png`.

## 3. Miskonsepsi di v0.1 yang WAJIB diperbaiki

| # | Di v0.1 | Seharusnya |
|---|---------|------------|
| 1 | Positioning "From Research to Real-World Solutions" / perusahaan riset-ke-produk | Perusahaan dengan **4 lini usaha** dan **3 unit usaha** (bagian 2) |
| 2 | Pelatihan, camp, ESIC, dan JESIC **dikecualikan** dari situs; KTS "bukan training provider" | Pelatihan adalah salah satu lini usaha. Camp adalah aktivitas Kappa Solution. KTS mendukung ESIC Network. **Semuanya tampil di situs.** |
| 3 | Kalender/event dianggap *out of scope* | Notulensi meminta **kalender kegiatan** → masuk scope |
| 4 | Produk berupa konsep karangan (Livestock Waste Carbonization System, dll.) + ilustrasi mesin "CARBONIZATION SYSTEM" di hero | Hapus semuanya. Katalog memakai item nyata dari bagian 2, dikelompokkan per unit |
| 5 | Tidak ada tautan e-commerce | Tambahkan tautan "Toko Online" (URL placeholder, lihat bagian 4.6) |
| 6 | Situs berbahasa Inggris | **Bahasa Indonesia** untuk seluruh konten dan route |
| 7 | Build gagal tanpa akses internet (`next/font/google`) | Self-host font Inter dengan `next/font/local` |
| 8 | Catatan "provisional" tersebar sebagai teks biasa di halaman | Satu komponen penanda konten sementara yang konsisten (bagian 5) |

## 4. Scope v0.2

### 4.1 Sitemap

```
/                 Beranda
/tentang          Profil, visi & misi, struktur (diagram), tim
/layanan          4 lini usaha + 3 unit usaha
/produk           Katalog per unit (anchor #kappa-solution, #nara-aquaponics, #bumi-hijau)
/produk/[slug]    Detail item + CTA "Tanyakan"
/pelatihan        Pelatihan & camp (gambaran training, dokumentasi)
/kegiatan         Kalender kegiatan + ESIC Network (ESIC, JESIC, Summer Camp, Pelatihan)
/kontak           Kontak + form pertanyaan
```

Hapus `/innovation`, `/insights`, `/projects`. Tambahkan redirect permanen dari route lama
(`/about`, `/products`, `/contact`, dst.) ke route baru di `next.config.ts`.

### 4.2 Beranda
1. Hero: nama perusahaan, ringkasan 4 lini usaha dan 3 unit. Visual memakai logo asli dan struktur nyata, bukan ilustrasi fiktif.
2. 4 lini usaha
3. 3 unit usaha (logo, bidang, daftar aktivitas sesuai slide)
4. Produk unggulan (jumlah kelipatan 3 supaya grid penuh)
5. Pelatihan & kegiatan terdekat (ambil dari data kalender)
6. ESIC Network
7. CTA kontak + tautan toko online

### 4.3 Katalog produk
Item awal (nama persis seperti di slide):

- **Kappa Solution:** Alat Praktikum, Alat Hasil Pengembangan Rekayasa, Desain Sistem (layanan)
- **Nara Aquaponics:** Rancang Bangun Sistem Hidroponik & Akuaponik (layanan), Filter Mekanik dan Biologi, Sistem Aerasi, Kolam Bioflok
- **Bumi Hijau:** Pencacah Sampah, Insinerator RAMPUS, Komposter Takakura, Tungku Gasifikasi

Deskripsi hanya berupa penjelasan umum fungsi alat. **Dilarang** mencantumkan kapasitas, suhu, daya, harga, sertifikasi, atau angka kinerja. Field `specs` dan `images` dibiarkan kosong sampai data resmi ada.

### 4.4 Pelatihan (`/pelatihan`)
- Jelaskan bahwa KTS menyelenggarakan pelatihan dan camp (lini usaha Pelatihan + unit Kappa Solution).
- Tampilkan 3 postingan Instagram di bagian 1 sebagai "gambaran pelatihan": kartu tautan ke Instagram. **Jangan** scraping, dan jangan menyalin caption atau foto dari Instagram.
- Tempat untuk video dokumentasi (ESIC, Camp, abdimas) berupa iframe YouTube yang aktif hanya jika URL diisi.

### 4.5 Kalender kegiatan (`/kegiatan`)
- **Tanpa CMS dan tanpa database.** Data statis di `content/events.ts`:
  ```ts
  interface KTSEvent {
    slug: string;
    title: string;
    type: "pelatihan" | "camp" | "esic" | "jesic" | "lainnya";
    startDate: string;   // ISO, "2026-10-12"
    endDate?: string;
    location?: string;
    description?: string;
    registrationUrl?: string;
    status: "terjadwal" | "selesai" | "tentatif";
  }
  ```
- Tampilkan "Akan datang" dan "Sudah terlaksana" (dihitung dari tanggal saat build). Bentuknya daftar per bulan; tidak perlu grid kalender.
- Isi dengan **data contoh yang jelas ditandai dummy** (bagian 5). Jangan mengarang tanggal yang terlihat seperti jadwal resmi.
- Section ESIC Network: ESIC, JESIC (tulis "segera hadir"), Summer Camp, Pelatihan.

### 4.6 E-commerce
- **Jangan** membangun keranjang, checkout, atau pembayaran.
- Tambahkan `contact.shopUrl` di file konten. Jika terisi, tampilkan tombol "Toko Online" di navbar/footer/detail produk. Jika kosong, tombol disembunyikan.
- Akun toko saat ini milik pribadi Pak Ramdlan. **Jangan** melabelinya sebagai "toko resmi PT KTS" sampai dikonfirmasi tim.
- CTA utama tiap produk: "Tanyakan" → WhatsApp (`wa.me`) dengan pesan terisi. Jika nomor belum ada, arahkan ke `/kontak`.

### 4.7 Kontak
- WhatsApp, email, alamat, dan Instagram `@kappasolution` (https://www.instagram.com/kappasolution/).
- Form pertanyaan tanpa backend: menyusun pesan lalu membuka WhatsApp/`mailto`. Tidak ada data yang disimpan.

### 4.8 Yang TIDAK boleh tampil di website
- Kas KTS, sumber modal, pembagian upah/keuntungan, dan jenis pekerjaan internal vs jasa
- NIB, NPWP, nomor rekening (belum ada, dan bukan konten publik)
- Nama PIC internal (Badar, Devdan, Farid, dsb.) sebagai penanggung jawab tugas

## 5. Konten dummy / "under construction"

Notulensi mengizinkan data dummy, **asalkan tidak menyesatkan**:

- Semua data perusahaan terpusat di `content/site.ts`, `content/products/index.ts`, dan `content/events.ts`. **Tidak ada** fakta perusahaan yang ditulis langsung di komponen.
- Buat `NEXT_PUBLIC_DRAFT_MODE` (default `true`). Selama aktif:
  - tampilkan banner tipis "Website dalam pengembangan"
  - tampilkan komponen `<Pending>` (kotak kuning "Menunggu data: …") di setiap tempat yang datanya kosong
  - `robots`: noindex
- Jika `false`: banner dan `<Pending>` tidak dirender, dan bagian yang datanya kosong disembunyikan dengan rapi.
- Data dummy (misalnya event contoh) diberi flag `isDummy: true` dan label "Contoh" yang terlihat di UI.

## 6. Urutan kerja

1. **Perbarui dokumen dulu** (commit terpisah): PRD.md, CLAUDE.md, CONTENT.md, PRODUCT_CATALOG.md, ROADMAP.md, README.md, supaya isinya sesuai dokumen ini. Hapus larangan lama soal pelatihan/ESIC/kalender.
2. Lapisan konten: `content/site.ts`, `content/products/index.ts`, `content/events.ts`
3. Perbaikan build: self-host font
4. Komponen bersama: SectionHeading, Pending, DraftBanner, logo KTS
5. Halaman sesuai sitemap 4.1, lalu redirect, sitemap.ts, robots.ts, dan halaman 404 berbahasa Indonesia
6. Buat `REVIEW_NOTES.md` untuk review dosen, berisi: tabel perubahan v0.1 → v0.2, daftar data yang masih dibutuhkan, dan pertanyaan terbuka (bagian 8)
7. Quality gate (CLAUDE.md): `tsc`, lint, dan build lolos; tanpa horizontal overflow di 360/390/430px, tablet, dan 1280/1440/1920px; navigasi keyboard berfungsi; reduced motion dihormati; tanpa error di console

Commit kecil dengan pesan yang jelas, di branch `v0.2-struktur-kts`.

## 7. Aset

Logo diambil dari file slide rapat. Letakkan di `public/brand/` dengan nama file di bagian 2.
Logo Bumi Hijau berlatar putih (JPEG): pakai `mix-blend-multiply` di atas latar terang.

## 8. Pertanyaan terbuka — JANGAN ditebak

Tulis di REVIEW_NOTES.md dan pakai placeholder:

1. Visi & misi resmi
2. Nomor WhatsApp, email, dan alamat resmi
3. URL toko Shopee, dan apakah boleh ditampilkan meskipun masih akun pribadi
4. Jabatan dan foto tim; siapa saja yang tampil di website
5. Foto, spesifikasi, dan skema harga tiap produk; kepanjangan RAMPUS
6. Kepanjangan ESIC dan penjelasannya; status JESIC
7. Jadwal kegiatan nyata untuk kalender
8. Apakah Nisha Snacks (logonya ada di slide, tapi tidak masuk bagan) termasuk unit KTS?
9. Domain untuk deploy di Cloudflare
