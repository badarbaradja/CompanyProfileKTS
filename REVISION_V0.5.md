# REVISION v0.5 --- Copy pass: hilangkan gaya tulisan AI

> Untuk coding agent. Disimpan verbatim di sini sebagai sumber kebenaran
> untuk aturan penulisan. Status: diterapkan pada branch
> `v0.2-struktur-kts`. Aturan bagian B sekarang juga ada di CLAUDE.md
> ("Writing rules") dan DESIGN.md (bagian 16), berlaku untuk semua
> perubahan teks berikutnya.

Lanjutkan di branch v0.2-struktur-kts. Jangan push. Revisi ini HANYA menyentuh teks yang dilihat pengguna
(content/*.ts, string di komponen, metadata title/description, alt text, label tombol, teks 404, README bagian publik).
Jangan ubah layout, komponen, atau logika.

==================================================
A. MASALAH
==================================================
Contoh kalimat yang sekarang ada di situs:

  "PT Kappa Technology Solution runs four business lines --- Equipment Supply, Consulting, Engineering
   Development, and Training --- through three business units: Kappa Solution, Nara Aquaponics, and
   Bumi Hijau, and supports ESIC Network."

Masalahnya: em dash bersarang, satu kalimat memuat tiga gagasan, dan ritmenya khas teks buatan AI.
Versi yang saya inginkan:

  "PT Kappa Technology Solution works in four areas: equipment supply, consulting, engineering
   development, and training. The work is carried out by three business units: Kappa Solution,
   Nara Aquaponics, and Bumi Hijau. PT KTS also supports ESIC Network."

==================================================
B. ATURAN PENULISAN
==================================================
1. DILARANG memakai em dash (---) dan en dash (--) di teks yang dilihat pengguna.
   Ganti dengan titik, titik dua, koma, atau tanda kurung. Rentang angka/tanggal memakai kata "to".
2. Satu kalimat = satu gagasan. Pecah kalimat yang memuat dua sisipan atau lebih.
   Target: rata-rata di bawah 20 kata, maksimal 28 kata.
3. Hapus pola klise AI berikut (cari juga varian terjemahannya):
   - "not just X, but Y" / "we don't just X, we Y"
   - kalimat berpola tiga item sejajar yang dipaksakan ("innovative, reliable, and impactful")
   - "from X to Y" sebagai pembuka kalimat atau judul
   - "built from the ground up", "at the heart of", "in today's world", "bridging the gap"
   - "seamless", "cutting-edge", "state-of-the-art", "empowering", "unlock", "leverage",
     "robust", "holistic", "end-to-end", "journey", "solutions" sebagai kata kosong
   - "designed to", "ensuring", "allowing you to" yang bisa diganti kata kerja langsung
   - judul berupa pertanyaan retoris ("Have a problem worth solving?")
   - kalimat sanjungan tanpa isi ("Technology that actually works")
4. Tulis faktual dan konkret. Jika kalimatnya tidak menambah informasi, hapus saja.
   Lebih baik pendek daripada terdengar seperti brosur.
5. Judul halaman dan judul section: frasa pendek deskriptif, bukan slogan, tanpa titik di akhir.
   Contoh: "Products", "Business units", "Training and camps", bukan "Technology in development."
6. Tombol: kata kerja singkat. "View products", "Contact us", "Ask about this item".
   Hindari "Explore", "Discover", "Learn more about KTS".
7. Alt text: deskripsi faktual isi foto, tanpa em dash, tanpa kata pemasaran.
8. Konsisten: American English, sentence case untuk judul, "and" bukan "&" di kalimat
   (nama brand dan nama produk resmi tidak diubah).
9. Nama brand, nama unit, nama produk, dan nama kegiatan TIDAK diubah.
   Jangan mengubah makna atau menambah klaim baru. Kalau ragu, pertahankan fakta dan potong hiasannya.

==================================================
C. CAKUPAN
==================================================
- content/site.ts, content/products/index.ts, content/events.ts, content/photos.ts
- semua string di app/**/*.tsx dan components/**/*.tsx, termasuk metadata title/description dan aria-label
- teks halaman 404, label form, placeholder input, pesan WhatsApp pre-filled
- REVIEW_NOTES.md dan README.md tidak wajib, tapi jangan sampai kontradiktif

==================================================
D. PENJAGA (agar tidak terulang)
==================================================
1. Buat scripts/check-copy.mjs yang gagal (exit 1) jika menemukan "---" atau "--" di dalam
   string literal pada content/**/*.ts dan pada file .tsx di app/ dan components/.
   Daftarkan sebagai "check:copy" di package.json scripts, dan jalankan sebelum build.
2. Tambahkan bagian "Writing rules" di CLAUDE.md dan DESIGN.md berisi aturan di bagian B,
   supaya berlaku untuk semua perubahan teks berikutnya.

==================================================
E. VERIFIKASI & LAPORAN
==================================================
- npm run check:copy, tsc, lint, dan build lolos.
- Screenshot ulang Home, /about, /services, /products, /training, /events, /contact di 390px dan 1440px
  (docs/screenshots/v0.5/), pastikan tidak ada teks yang jadi terpotong atau layout yang pecah setelah teks berubah.
- Laporkan tabel before/after untuk SETIAP string yang diubah (kolom: file, teks lama, teks baru).
  Saya ingin membaca perubahannya, bukan hanya ringkasannya.
