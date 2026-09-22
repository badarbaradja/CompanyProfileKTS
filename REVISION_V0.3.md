# REVISION v0.3 — English + redesign mengikuti gaya repo saya sendiri

> Untuk coding agent. Dua koreksi di bawah ini **MENGGANTIKAN** instruksi
> bahasa Indonesia di `REVISION_V0.2.md` (bagian 3 #6, 4.1, dan 5). Semua
> bagian lain `REVISION_V0.2.md` (struktur perusahaan, katalog produk per
> unit, skema kalender kegiatan, aturan e-commerce, aturan konten
> dummy/Pending) tetap berlaku.
>
> Status: diterapkan pada branch `v0.2-struktur-kts` (branch tidak berganti
> nama). Disimpan verbatim di sini sebagai sumber kebenaran; dokumen
> operasional lain (PRD.md, CLAUDE.md, CONTENT.md, PRODUCT_CATALOG.md,
> README.md, REVIEW_NOTES.md) telah diperbarui mengikuti isi dokumen ini.

Lanjutkan di branch v0.2-struktur-kts. JANGAN push atau buka PR dulu; itu setelah revisi ini saya review.

Ada dua koreksi terhadap REVISION_V0.2.md. Keduanya MENGGANTIKAN instruksi sebelumnya:

==================================================
A. BAHASA: WEBSITE BERBAHASA INGGRIS
==================================================
Website ini akan diakses pihak luar, jadi seluruh konten publik ditulis dalam bahasa Inggris.

1. Kembalikan route ke bahasa Inggris:
   /            Home
   /about       Profile, vision & mission, structure, team
   /services    4 business lines + 3 business units
   /products    Catalog per unit (#kappa-solution, #nara-aquaponics, #bumi-hijau)
   /products/[slug]
   /training    Training & camp
   /events      Events calendar + ESIC Network
   /contact
   Hapus route Indonesia (/tentang, /layanan, /produk, /pelatihan, /kegiatan, /kontak) dan redirect-nya.
   Redirect lama yang mengarah ke route Indonesia juga dihapus. Satu-satunya redirect yang dipertahankan:
   /innovation → /services, /projects → /events, /insights → /events.
2. <html lang="en">, openGraph locale "en_US".
3. Terjemahkan seluruh isi content/site.ts, content/products/index.ts, content/events.ts, dan semua teks UI
   (nav, tombol, label form, 404, banner draf, komponen Pending) ke bahasa Inggris yang natural dan profesional.
   Nama brand tidak diterjemahkan: PT Kappa Technology Solution, Kappa Solution, Nara Aquaponics, Bumi Hijau, ESIC Network, JESIC, RAMPUS.
   Istilah lini usaha:
   - Penyediaan Barang → Equipment Supply
   - Konsultan → Consulting
   - Pengembangan Rekayasa → Engineering Development
   - Pelatihan → Training
   Nama produk:
   - Lab Practicum Equipment
   - Engineering-Developed Equipment
   - System Design
   - Hydroponic & Aquaponic System Design-Build
   - Mechanical & Biological Filters
   - Aeration Systems
   - Biofloc Ponds
   - Waste Shredder
   - RAMPUS Incinerator
   - Takakura Composter
   - Gasification Stove
   Slug produk ikut versi Inggris (mis. /products/rampus-incinerator).
4. Pesan WhatsApp pre-filled boleh tetap berbahasa Indonesia, karena penerimanya tim KTS.
5. Susun data konten agar bisa ditambah terjemahan Indonesia di kemudian hari
   (semua string di file content/, tidak ada teks hardcoded di komponen). Jangan bangun i18n sekarang.
6. Perbarui semua dokumen (PRD, CLAUDE, CONTENT, PRODUCT_CATALOG, README, REVIEW_NOTES, REVISION_V0.2)
   supaya tidak ada lagi instruksi "Bahasa Indonesia".

==================================================
B. DESAIN: IKUTI GAYA REPO SPARKTALKS & BESTIE TRAVEL
==================================================
Desain saat ini terasa "generic AI". Saya ingin bahasa desain dari dua project saya sendiri: sparktalks dan bestie travel (di akun GitHub badarbaradja).

Langkah 1 — Bedah referensi (wajib sebelum mengubah UI)
- Temukan kedua repo (gh repo list badarbaradja, atau cek folder lokal saya). Clone ke folder terpisah di luar repo ini.
  Jika tidak ketemu, BERHENTI dan tanyakan path/nama repo ke saya. Jangan menebak gaya dari nama project.
- Jalankan keduanya jika memungkinkan, lalu ambil screenshot (Playwright) di 390px dan 1440px.
- Catat secara konkret:
  font (family, weight, ukuran heading/body), palet warna, spacing & grid, radius, bayangan,
  gaya tombol/link/nav/footer, pola layout section (hero, grid, list, CTA),
  perlakuan foto/gambar, gaya ikon, animasi/scroll interaction, dan copywriting tone.
- Tulis hasilnya ke DESIGN.md versi baru, bagian "Reference analysis", disertai path file sumber
  (mis. tailwind config, globals.css, komponen). Tentukan mana yang diambil dari sparktalks dan mana dari bestie travel.
  Jika keduanya bertentangan, pilih satu arah dan jelaskan alasannya.

Langkah 2 — Design system KTS
- Turunkan token (warna, tipografi, spacing, radius, motion) dari referensi di atas ke app/globals.css.
- Warna aksen boleh diselaraskan dengan logo KTS (biru #4472C4, hijau #00B050, merah #FF0000), tapi jangan dipakai ketiganya sekaligus sebagai warna utama.
- Font tetap self-hosted (next/font/local).
- Pakai ulang pola komponen dari repo referensi sejauh cocok.
  Salin seperlunya, jangan menambah dependency tanpa alasan jelas.

Langkah 3 — Hilangkan ciri "desain AI". Hapus atau ganti pola ini:
- Eyebrow label kecil berhuruf kapital dengan garis pendek di atas SETIAP section
- Grid 3/4 kartu seragam berulang di hampir semua section
- Ikon garis di dalam kotak tinted kecil
- Kartu bertumpuk miring (rotate) dan bayangan tipis generik
- Background grid-pattern dan blob gradient radial
- Nomor "01 / 02 / 03" dekoratif
- Heading berpola slogan ("X, built from the ground up.", "Have a problem worth solving?")
  dan em dash berlebihan dalam copy
Gantikan dengan pola dari referensi: ritme section yang bervariasi, hierarki tipografi tegas, visual yang dominan.
Untuk foto produk yang belum ada: pakai placeholder yang terlihat sengaja (sesuai gaya referensi),
bukan ilustrasi mesin palsu.

Langkah 4 — Terapkan
- Kerjakan Home dulu sampai tuntas, lalu terapkan pola yang sama ke halaman lain.
- Semua aturan konten dari REVISION_V0.2.md tetap berlaku: tidak ada data karangan,
  data kosong ditandai <Pending> di draft mode, hal internal tidak tampil.

==================================================
C. VERIFIKASI VISUAL (sebelumnya belum dilakukan)
==================================================
- Pakai Playwright + Chromium untuk screenshot full-page setiap route di 360, 390, 768, 1280, 1440, 1920px.
- Cek: tidak ada horizontal overflow (bandingkan scrollWidth dengan innerWidth, dan cek tidak ada elemen yang keluar dari container),
  tidak ada console error, gambar lazy-load benar-benar termuat (scroll dulu sebelum screenshot),
  navigasi keyboard (Tab melalui nav, menu mobile, form), dan prefers-reduced-motion.
- Simpan screenshot Home 390px dan 1440px, masing-masing untuk before (v0.2) dan after (v0.3), di folder docs/screenshots/
  (jangan di-commit jika ukurannya > 5 MB total).

==================================================
D. LAPORAN AKHIR
==================================================
Laporkan:
1. ringkasan analisis referensi (apa yang diambil dari sparktalks vs bestie travel)
2. daftar commit
3. hasil tsc/lint/build
4. path screenshot before/after
5. apa pun yang tidak bisa diverifikasi
