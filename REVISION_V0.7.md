# REVISION v0.7 --- Perbaikan dari review visual

> Untuk coding agent. Disimpan verbatim di sini sebagai sumber kebenaran,
> mengikuti pola REVISION_V0.2/V0.3/V0.5/V0.6. Status: diterapkan pada
> branch `v0.2-struktur-kts`.

Lanjutkan di branch v0.2-struktur-kts. Jangan push. Aturan penulisan v0.5 tetap berlaku.

CATATAN VERIFIKASI: JANGAN mengambil screenshot pada revisi ini. Verifikasi cukup lewat
build, grep, dan satu script pemeriksa yang hasilnya berupa teks. Lihat bagian G.

==================================================
A. HAPUS STATUS "IN DEVELOPMENT" (prioritas utama)
==================================================
Semua 11 item katalog menampilkan badge "In Development". Tidak ada yang mengonfirmasi status itu,
jadi ini klaim karangan, dan janggal untuk layanan seperti System Design.

1. Hapus field status dan komponen StatusBadge dari kartu produk dan halaman detail.
2. Badge yang tersisa di kartu hanya: jenis item (Product / Service) dan penanda "Sample".
3. Catat di REVIEW_NOTES.md bahwa status per item bisa dihidupkan lagi kalau tim memberi datanya.

==================================================
B. HALAMAN TEAM KOSONG (kemunduran)
==================================================
Section Team di /about sekarang hanya berisi kotak "Waiting on data", padahal nama-nama ini
sudah ada dan pernah tampil di versi sebelumnya:

Founders: Abrar, Mukhammad Ramdlan KI, Tri Ayodha
Team: Galuh Intan Khumaira, Febianeu Putri Agna, Aisha Laila Mardiyah, Badar Zaki Baradja

1. Tampilkan kembali kedua daftar, dipisah antara Founders dan Team.
2. Jangan mengarang jabatan. Kartu cukup nama, dengan inisial sebagai pengganti foto.
3. Kotak Pending boleh tetap di bawah daftar, isinya: jabatan, ejaan nama resmi, dan foto.

ATURAN UMUM: kotak Pending tidak boleh menjadi satu-satunya isi sebuah section.
Section yang tidak punya data lain selain Pending harus disembunyikan.
Periksa semua halaman, termasuk blok ESIC di /events yang kini hanya berisi satu kalimat
dan satu kotak Pending.

==================================================
C. TEKS YANG BERTENTANGAN DENGAN TAMPILAN
==================================================
Halaman /products masih berbunyi "Photos, technical specifications, and pricing are not yet available
for most items", dan ada kotak info kedua tentang spesifikasi yang belum diverifikasi. Padahal setiap
item kini punya foto dan spesifikasi contoh.

Ganti keduanya dengan satu kalimat saja:
"Photos and specifications on this page are sample data. The PT KTS team will replace them."
Cukup satu pemberitahuan per halaman.

==================================================
D. FOTO CONTOH YANG SKALANYA MENYESATKAN
==================================================
Dua foto menggambarkan fasilitas industri besar, sedangkan produk KTS berskala kecil:
- Mechanical and Biological Filters: foto udara instalasi pengolahan air
- RAMPUS Incinerator: foto cerobong pabrik insinerasi

Ganti dengan foto berskala kecil. Kata kunci: "aquarium sump filter", "fish tank filter media",
"small brick kiln", "metal burn barrel". Kalau tidak ada yang cocok dan jujur, pakai placeholder
netral daripada foto yang membesar-besarkan skala. Foto lain boleh tetap.

==================================================
E. HEADLINE DAN RITME TEKS
==================================================
1. Headline hero sekarang "Equipment, consulting, engineering development, and training.
   Three business units." Itu daftar, bukan kalimat, dan memakan lima baris di desktop.
   Ganti dengan: "Equipment built to be run by the people who use it."
   Subjudul tetap. Kalau Badar memilih alternatif lain, pakai pilihannya.
2. Pola "kalimat tegak diikuti potongan italic hijau" dipakai di hero, CTA kontak, dan beberapa judul.
   Karena berulang, efeknya hilang. Sisakan hanya di hero; judul lain ditulis tegak seluruhnya.
3. Di /about, penghubung "SUPPORTS" berhuruf kapital pada diagram struktur diganti "supports".

==================================================
F. RUANG KOSONG
==================================================
1. /contact: kolom kiri berhenti di Instagram dan menyisakan ruang kosong besar sebelum footer.
   Isi dengan peta statis lokasi Cimahi (gambar statis, tanpa skrip pihak ketiga) atau jam operasional
   kalau sudah ada. Kalau tidak ada keduanya, rapatkan layout agar tidak menganga.
2. /events: pindahkan blok ESIC Network ke atas, tepat setelah daftar kegiatan, dan hapus jarak
   berlebih di bawahnya.

==================================================
G. VERIFIKASI (tanpa screenshot, hemat token)
==================================================
1. npm run check:copy, tsc, lint, dan build lolos.
2. Grep pada app/ components/ content/:
   - "In Development" dan "StatusBadge" tidak ditemukan lagi
   - nama ketujuh anggota tim ada di content/site.ts
   - kalimat "not yet available for most items" sudah hilang
3. Tulis scripts/verify-pages.mjs yang menjalankan Playwright headless TANPA screenshot,
   membuka setiap route di 390px dan 1440px, lalu MENCETAK RINGKASAN TEKS saja:
   - nama route, lebar viewport
   - selisih document.scrollWidth dengan window.innerWidth (harus 0)
   - jumlah console error (harus 0)
   - jumlah section yang isinya hanya elemen Pending (harus 0; beri penanda data-pending pada
     komponen Pending supaya mudah diperiksa)
   - jarak vertikal kosong terbesar antar section dalam piksel (laporkan nilainya saja)
   - tinggi halaman dalam piksel
   Cetak sebagai satu tabel teks. Jangan simpan gambar. Reset viewport sebelum pindah halaman,
   supaya tidak terulang bug tinggi viewport seperti di v0.5.
4. Laporkan ke saya: tabel before/after teks yang berubah, daftar foto yang diganti,
   dan keluaran tabel dari verify-pages.mjs. Tanpa gambar.
