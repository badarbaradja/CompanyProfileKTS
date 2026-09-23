# REVISION v0.8 --- Peta interaktif di halaman Contact

> Untuk coding agent. Disimpan verbatim di sini sebagai sumber kebenaran,
> mengikuti pola REVISION_V0.2/V0.3/V0.5/V0.6/V0.7. Status: diterapkan
> pada branch `v0.2-struktur-kts`.

Lanjutkan di branch v0.2-struktur-kts. Jangan push. Aturan penulisan v0.5 tetap berlaku.
Jangan mengambil screenshot; verifikasi seperti bagian D.

==================================================
A. GANTI GAMBAR PETA STATIS DENGAN PETA INTERAKTIF
==================================================
Koordinat kantor (dari Badar):
  latitude:  -6.890875319895791
  longitude: 107.54733362424025
Alamat: Jl. Sukasenang 143, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522

1. Simpan koordinat di content/site.ts sebagai bagian dari data kontak:
   coordinates: { lat: -6.890875319895791, lng: 107.54733362424025 }
   Jangan hardcode angka ini di dalam komponen.

2. Hapus public/photos/map/cimahi-location.webp, scripts/generate-location-map.mjs,
   dan keterangan "General area only, not a precise pin on the office address."
   Koordinatnya sekarang sudah presisi, jadi keterangan itu tidak berlaku lagi.

3. Pasang peta interaktif dengan Leaflet:
   - npm i leaflet dan @types/leaflet. JANGAN pakai react-leaflet (dependency berlebih untuk satu peta).
   - Buat components/contact/LocationMap.tsx sebagai client component.
     Leaflet menyentuh window, jadi import lewat next/dynamic dengan ssr: false,
     atau import("leaflet") di dalam useEffect.
   - Tile: OpenStreetMap standar, https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
     Wajib mencantumkan atribusi: '&copy; OpenStreetMap contributors'. Jangan dihapus.
   - Zoom awal 16, marker di koordinat di atas, popup berisi nama perusahaan dan alamat.
   - scrollWheelZoom: false saat halaman dimuat, supaya peta tidak membajak scroll halaman.
     Aktifkan setelah pengguna mengeklik peta, lalu matikan lagi saat peta kehilangan fokus.
   - Sediakan kontrol zoom, dan pastikan bisa dioperasikan dengan keyboard.
   - CSS Leaflet di-import di komponen, bukan di globals.css.
   - Ukuran: tinggi sekitar 320px di mobile dan 400px di desktop, sudut membulat
     mengikuti radius design system, border tipis.

4. Di bawah peta, beri dua tautan teks:
   - "Open in Google Maps" → https://www.google.com/maps/search/?api=1&query=LAT,LNG
   - "Get directions" → https://www.google.com/maps/dir/?api=1&destination=LAT,LNG
   Keduanya dibangun dari nilai di content/site.ts, target _blank, rel noopener noreferrer.

5. Jika peta gagal dimuat, misalnya karena jaringan diblokir, tampilkan kotak berisi alamat
   dan kedua tautan di atas. Jangan sampai muncul area kosong.

6. Alamat teks di kolom kiri tetap ada. Peta melengkapi, bukan menggantikan.

==================================================
B. YANG TIDAK BOLEH DIPAKAI
==================================================
- Jangan pakai Google Maps Embed API, Mapbox, atau layanan lain yang butuh API key.
- Jangan memuat skrip pihak ketiga selain Leaflet dari node_modules.
- Jangan menyematkan iframe Google Maps.

==================================================
C. PERIKSA DAMPAK KE HALAMAN
==================================================
- Pastikan halaman /contact tetap statis (bukan berubah jadi dynamic rendering).
  Peta hanya dimuat di sisi klien.
- Periksa ukuran bundle halaman /contact sebelum dan sesudah, laporkan angkanya.
  Leaflet hanya boleh masuk ke bundle halaman Contact, bukan ke shared chunk.
- Ruang kosong di kolom kiri halaman Contact yang dulu diisi gambar statis sekarang diisi peta.
  Pastikan tata letaknya tetap seimbang di mobile.

==================================================
D. VERIFIKASI (tanpa screenshot)
==================================================
1. check:copy, tsc, lint, build lolos.
2. Jalankan scripts/verify-pages.mjs seperti biasa, cetak tabel teksnya.
   Tambahkan pemeriksaan khusus untuk /contact:
   - elemen peta ada di DOM dan tingginya lebih dari 0
   - teks atribusi OpenStreetMap ada
   - href kedua tautan Google Maps mengandung koordinat yang benar
   - tidak ada console error
   Jika lingkungan tanpa jaringan sehingga tile gagal dimuat, laporkan sebagai catatan,
   dan pastikan fallback pada poin A.5 yang muncul.
3. Laporkan: ukuran bundle /contact sebelum dan sesudah, hasil verifikasi, dan daftar commit.
