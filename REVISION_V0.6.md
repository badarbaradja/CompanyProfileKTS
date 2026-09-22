# REVISION v0.6 --- Kontak asli, draf visi & misi, isi lengkap katalog produk

> Untuk coding agent. Disimpan verbatim di sini sebagai sumber kebenaran,
> mengikuti pola REVISION_V0.2/V0.3/V0.5. Status: diterapkan pada branch
> `v0.2-struktur-kts`.

Lanjutkan di branch v0.2-struktur-kts. Jangan push. Aturan penulisan v0.5 tetap berlaku
(tanpa em dash, kalimat pendek, tanpa klise pemasaran). Jalankan npm run check:copy sebelum commit.

==================================================
A. DATA KONTAK ASLI
==================================================
Isi di content/site.ts:
- email: "kappasolution25@gmail.com"
- whatsapp: "6282119563800"
- alamat: "Jl. Sukasenang 143, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522"
- instagram tetap @kappasolution

Catatan penting:
1. Nomor WhatsApp itu milik pribadi Pak Ramdlan, dipakai sementara sebagai contact person.
   Beri label "WhatsApp (contact person)" di halaman Contact, bukan "Company phone".
2. Alamat di atas belum dikonfirmasi tim. Simpan catatan ini di REVIEW_NOTES.md,
   tapi JANGAN menampilkan keraguan itu di halaman publik.
3. Hapus <Pending> untuk email, WhatsApp, dan alamat, karena datanya sudah ada.
4. Form kontak dan tombol "Ask about this item" sekarang aktif. Uji bahwa link wa.me dan mailto terbentuk benar.

==================================================
B. VISI DAN MISI (DRAF, menunggu persetujuan tim)
==================================================
Isi di content/site.ts. Tandai di REVIEW_NOTES.md bahwa ini draf yang masih harus disetujui tim.

vision:
"Appropriate technology that the people who use it can run and maintain themselves."

mission:
1. "Supply equipment that can be operated, serviced, and repaired locally."
2. "Design systems that fit the site, the budget, and the skills of the people who will run them."
3. "Develop our own equipment through engineering work, and test it in the field before we offer it."
4. "Train every user, so the equipment keeps working long after handover."
5. "Support education and research through ESIC Network."

Tampilkan di /about, di bawah profil perusahaan. Visi ditulis besar, misi sebagai daftar bernomor.
JANGAN menambah kalimat pemanis di sekitarnya.

==================================================
C. ISI KATALOG PRODUK (DATA CONTOH)
==================================================
Tujuan: tim bisa membayangkan bentuk akhir halaman produk. Semua isi di bagian ini adalah CONTOH.

C.1 Penanda data contoh (wajib, supaya tidak ada yang mengira ini fakta)
- Tambah field `isSample: true` pada setiap produk dan pada setiap foto contoh.
- Di halaman detail produk, spesifikasi dan foto yang isSample diberi badge kecil "Sample data"
  dengan gaya netral sesuai design system. Satu badge per blok, jangan bertebaran.
- Badge ini muncul walau DRAFT_MODE mati, karena isinya memang belum nyata.
- Di REVIEW_NOTES.md, tulis daftar semua field contoh yang harus diganti tim.

C.2 Foto contoh
- Ambil dari Unsplash atau Pexels (lisensi bebas pakai). 1 sampai 2 foto per produk.
- Simpan di public/photos/samples/, format WebP, sisi terpanjang maksimal 1400px, metadata dibersihkan.
- Catat sumber tiap foto (URL, fotografer, lisensi) di content/photos.ts dan di REVIEW_NOTES.md.
- Kata kunci pencarian per produk:
  lab practicum       : "science laboratory equipment", "electronics workbench"
  engineered equipment: "workshop fabrication metal", "engineer prototype machine"
  system design       : "engineering blueprint desk", "technical drawing"
  hydroponic/aquaponic: "hydroponic greenhouse", "aquaponics system"
  filters             : "water filtration tank", "aquaculture filter"
  aeration            : "aquaculture pond aerator", "air pump fish farm"
  biofloc             : "biofloc fish tank", "round fish farming tank"
  shredder            : "organic waste shredder machine", "wood chipper"
  incinerator         : "industrial furnace", "waste burning chamber"
  composter           : "compost bin organic", "composting basket"
  gasification stove  : "biomass stove", "wood gas stove"
- Foto TIDAK boleh diberi keterangan seolah-olah alat milik PT KTS.
  alt text bersifat umum, misalnya "Sample photo: hydroponic growing system".

C.3 Struktur data per produk (tambahkan field baru di content/products/index.ts)
  summary, description, highlights: string[], applications: string[], specs: {label,value}[], images, isSample

C.4 Isi (pakai apa adanya, hanya rapikan tata bahasa jika perlu)

[KAPPA SOLUTION]

1. Lab Practicum Equipment
summary: Teaching kits for hands-on practicum sessions.
description: Practicum equipment for schools, universities, and training centers. Each kit is built around one
  topic, so a class can go through a full experiment in a single session. Kappa Solution can adjust a kit to
  match a syllabus or an existing lab setup.
highlights: Built around one topic per kit | Sized for a class group | Spare parts available locally |
  Can be matched to an existing syllabus
applications: School science labs | University teaching labs | Vocational training centers | Training providers
specs: Kit format "Bench unit" | Group size "2 to 4 students" | Power "220V AC" | Manual "Indonesian and English"

2. Engineering-Developed Equipment
summary: Equipment that came out of our own engineering work.
description: Some of our equipment starts as an internal engineering project. A problem is studied, a prototype
  is built, and the design is revised until it works under field conditions. What survives that process becomes
  a product we offer to customers.
highlights: Designed and built in house | Tested in the field before release | Parts chosen for local
  availability | Design can be adapted per site
applications: Research groups | Pilot projects | Community programs | Small production units
specs: Status "Field tested" | Build "Made to order" | Lead time "4 to 6 weeks" | Documentation "Operating and maintenance manual"

3. System Design (service)
summary: System planning, from requirements to build-ready drawings.
description: We study the site, the target output, and the budget, then produce a technical design that a
  builder can work from. The result covers layout, component sizing, and an operating procedure. Customers can
  build it themselves or have us build it.
highlights: Site survey first | Component sizing with calculations | Build-ready drawings |
  Operating procedure included
applications: Aquaponic and hydroponic installations | Waste processing units | Teaching labs | Campus facilities
specs: Deliverable "Drawings and specification" | Timeline "2 to 4 weeks" | Revisions "Two rounds" |
  Format "PDF and editable source"

[NARA AQUAPONICS]

4. Hydroponic and Aquaponic System Design-Build (service)
summary: Growing systems designed and built for your site.
description: An aquaponic system raises fish and plants in one water loop, where fish waste feeds the plants and
  the plants clean the water. A hydroponic system grows plants without soil. We size both to the space, water
  source, and crop you have in mind, then build and commission the system.
highlights: Sized to your space and water source | Fish and plant loop in one system | Built and commissioned
  on site | Operator training included
applications: School and campus gardens | Community farming | Small commercial growers | Demonstration plots
specs: Coverage "12 to 200 m2" | Media "NFT, DWC, or media bed" | Water source "PDAM or well" |
  Handover "Includes operator training"

5. Mechanical and Biological Filters
summary: Filters that keep the water clean enough to reuse.
description: The mechanical stage traps solid waste before it breaks down. The biological stage holds the
  bacteria that convert ammonia into nitrate, which plants can use. Together they let the same water circulate
  instead of being replaced.
highlights: Two filter stages in one line | Media can be cleaned and reused | Sized to fish load |
  Serviceable without draining the pond
applications: Aquaponic systems | Fish ponds | Ornamental fish | Hatcheries
specs: Flow "1,000 to 8,000 L/h" | Mechanical media "Filter brush and mat" | Biological media "Bioball and K1" |
  Housing "Food-grade tank"

6. Aeration Systems
summary: Oxygen supply for ponds and growing systems.
description: Fish and filter bacteria both consume oxygen, and the level drops fastest at night and at high
  stocking density. An aeration system keeps dissolved oxygen in a safe range, which supports growth and lowers
  the risk of sudden loss.
highlights: Runs continuously | Sized to pond volume | Diffuser layout planned per pond shape |
  Low maintenance blower
applications: Biofloc ponds | Aquaponic sumps | Fish nurseries | Live fish holding tanks
specs: Air output "40 to 150 L/min" | Power "60 to 250 W" | Diffuser "Nano tube or air stone" |
  Installation "Surface mounted blower"

7. Biofloc Ponds
summary: Fish ponds that process their own waste.
description: In a biofloc pond, controlled aeration and feeding grow clumps of microorganisms that consume
  uneaten feed and fish waste. The flocs become a supplementary food source and cut water exchange, which suits
  sites where water is limited.
highlights: Less water exchange | Flocs serve as extra feed | Round tank for even circulation |
  Frame and liner can be replaced
applications: Catfish and tilapia farming | Home scale farming | Community programs | Training facilities
specs: Diameter "2 to 4 m" | Volume "3 to 12 m3" | Frame "Galvanized wire and bracing" |
  Liner "Tarpaulin, replaceable"

[BUMI HIJAU]

8. Waste Shredder
summary: Cuts waste down to a size that can be processed.
description: Whole organic waste composts slowly and is hard to handle. The shredder reduces it to small,
  even pieces, which speeds up composting and makes the material easier to feed into the next stage.
highlights: Even output size | Replaceable blades | Wheeled frame | Hopper sized for garden waste
applications: Composting units | Waste banks | Urban farms | Campus and office grounds
specs: Capacity "100 to 300 kg/h" | Motor "5.5 kW electric or gasoline" | Blade "Hardened steel, replaceable" |
  Dimensions "120 x 70 x 110 cm"

9. RAMPUS Incinerator
summary: Controlled burning for waste that cannot be composted.
description: RAMPUS burns waste inside a closed chamber, so the process stays contained instead of running as an
  open fire. It is intended for residual waste at sites that have no collection service, and it works alongside
  sorting rather than replacing it.
highlights: Closed combustion chamber | Chimney with a secondary stage | Ash drawer for easy clearing |
  Fixed installation on a concrete base
applications: Village waste facilities | Waste banks | Institutional grounds | Remote sites
specs: Capacity "50 to 150 kg per cycle" | Chamber "Firebrick lined" | Chimney "3 m with secondary chamber" |
  Fuel "Waste with a starter fuel"

10. Takakura Composter
summary: Household composting for kitchen waste.
description: The Takakura method uses a fermentation starter in a ventilated basket, which turns kitchen waste
  into compost without an outdoor pit. It suits households and offices with little space, and it produces
  compost that can go straight into planters.
highlights: Fits indoors or on a balcony | Starter medium included | No pit required | Low odor when maintained
applications: Households | Offices | Schools | Community waste programs
specs: Volume "40 to 60 L" | Cycle "2 to 4 weeks" | Body "Ventilated basket with cover" |
  Includes "Starter medium and guide"

11. Gasification Stove
summary: Turns biomass into burnable gas for cooking and heating.
description: A gasification stove heats biomass with a limited air supply, so it releases a combustible gas that
  burns at the top of the chamber. The flame is cleaner than open burning, and it runs on wood chips, shells,
  and other dry residue. Charcoal is left in the chamber at the end of a run.
highlights: Runs on dry biomass residue | Cleaner flame than open burning | Leaves charcoal after each run |
  Portable stainless body
applications: Field kitchens | Small food producers | Farms with crop residue | Demonstrations and training
specs: Fuel "Wood chips, shells, dry residue" | Burn time "45 to 90 min per load" | Body "Stainless steel" |
  Output "Cooking flame plus charcoal residue"

C.5 Tampilan halaman detail produk
- Susunan: foto, nama, unit, ringkasan, deskripsi, highlights, applications, spesifikasi, CTA tanya.
- Highlights dan applications jangan sama-sama dibuat grid kartu. Pilih satu bentuk daftar untuk masing-masing.
- Kartu produk di halaman katalog memakai foto contoh, dengan badge "Sample" di pojok.
- Semua produk kini punya foto, jadi hapus placeholder "photo coming soon".

==================================================
D. VERIFIKASI & LAPORAN
==================================================
- check:copy, tsc, lint, build lolos. Ukuran public/photos total maksimal 10 MB.
- Screenshot /products, tiga halaman detail produk (satu per unit), /about, dan /contact
  di 390px dan 1440px, simpan ke docs/screenshots/v0.6/.
- Uji link wa.me dan mailto terbentuk dengan nomor dan email yang benar.
- Laporkan: daftar foto contoh beserta sumber dan lisensinya, daftar field contoh yang harus diganti tim,
  ukuran folder foto, dan hasil build.
