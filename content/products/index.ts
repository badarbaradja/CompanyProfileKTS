/**
 * content/products/index.ts
 *
 * PT KTS product/service catalog — v0.2.
 *
 * These are real catalog items sourced from the 2026-09-14 "Struktur"
 * meeting slide, grouped by business unit (see PRODUCT_CATALOG.md and
 * REVISION_V0.2.md section 4.3). They are NOT invented concepts.
 *
 * `specs` and `images` are intentionally left empty until the PT KTS
 * team supplies verified data — do not fill them in with guessed
 * values. See REVIEW_NOTES.md open question #5.
 */

import type { BusinessUnitSlug } from "@/content/site";
import type { ProductStatus } from "@/components/ui/Badge";

export type ProductType = "produk" | "layanan";

export interface Product {
  /** URL slug for the product/service detail page */
  slug: string;
  /** Which business unit this belongs to */
  unit: BusinessUnitSlug;
  /** Product (barang) or service (jasa) */
  type: ProductType;
  /** Name, exactly as listed on the Struktur slide */
  name: string;
  /** One-line summary shown on cards */
  tagline: string;
  /** General explanation of function only — no specs/pricing/performance claims */
  description: string;
  /** Development/availability status */
  status: ProductStatus;
  /** Featured on the homepage? (kept to a multiple of 3) */
  featured: boolean;
  /** Verified specifications — left empty until supplied by the team */
  specs?: Record<string, string>;
  /** Verified photos — left empty until supplied by the team */
  images: string[];
}

export const products: Product[] = [
  // --- Kappa Solution ---
  {
    slug: "alat-praktikum",
    unit: "kappa-solution",
    type: "produk",
    name: "Alat Praktikum",
    tagline: "Alat penunjang praktikum hasil pengembangan Kappa Solution.",
    description:
      "Alat praktikum yang dikembangkan oleh Kappa Solution untuk mendukung kegiatan pembelajaran dan pelatihan berbasis praktik.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "alat-hasil-pengembangan-rekayasa",
    unit: "kappa-solution",
    type: "produk",
    name: "Alat Hasil Pengembangan Rekayasa",
    tagline: "Alat hasil rekayasa yang dikembangkan langsung oleh Kappa Solution.",
    description:
      "Kategori alat yang dihasilkan dari proses pengembangan rekayasa Kappa Solution, disesuaikan dengan kebutuhan penerapan di lapangan.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "desain-sistem",
    unit: "kappa-solution",
    type: "layanan",
    name: "Desain Sistem",
    tagline: "Layanan desain sistem untuk kebutuhan rekayasa spesifik.",
    description:
      "Layanan konsultasi dan desain sistem oleh Kappa Solution, untuk mendukung penerapan solusi rekayasa sesuai kebutuhan klien.",
    status: "in-development",
    featured: true,
    images: [],
  },

  // --- Nara Aquaponics ---
  {
    slug: "rancang-bangun-sistem-hidroponik-akuaponik",
    unit: "nara-aquaponics",
    type: "layanan",
    name: "Rancang Bangun Sistem Hidroponik & Akuaponik",
    tagline: "Layanan rancang bangun sistem hidroponik dan akuaponik.",
    description:
      "Layanan Nara Aquaponics untuk merancang dan membangun sistem hidroponik maupun akuaponik sesuai kebutuhan lokasi dan skala.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "filter-mekanik-dan-biologi",
    unit: "nara-aquaponics",
    type: "produk",
    name: "Filter Mekanik dan Biologi",
    tagline: "Komponen filter untuk sistem akuaponik.",
    description:
      "Filter mekanik dan biologi yang digunakan sebagai bagian dari sistem akuaponik Nara Aquaponics untuk menjaga kualitas air.",
    status: "in-development",
    featured: false,
    images: [],
  },
  {
    slug: "sistem-aerasi",
    unit: "nara-aquaponics",
    type: "produk",
    name: "Sistem Aerasi",
    tagline: "Sistem aerasi untuk mendukung kolam dan sistem akuaponik.",
    description:
      "Sistem aerasi yang dikembangkan Nara Aquaponics untuk mendukung kebutuhan oksigenasi pada kolam dan sistem akuaponik.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "kolam-bioflok",
    unit: "nara-aquaponics",
    type: "produk",
    name: "Kolam Bioflok",
    tagline: "Kolam bioflok untuk budidaya ikan.",
    description:
      "Kolam bioflok yang dirancang Nara Aquaponics untuk mendukung sistem budidaya ikan dengan pendekatan bioflok.",
    status: "in-development",
    featured: true,
    images: [],
  },

  // --- Bumi Hijau ---
  {
    slug: "pencacah-sampah",
    unit: "bumi-hijau",
    type: "produk",
    name: "Pencacah Sampah",
    tagline: "Alat pencacah untuk pengelolaan sampah.",
    description:
      "Alat pencacah sampah yang dikembangkan Bumi Hijau untuk mendukung proses pengelolaan sampah sebelum diolah lebih lanjut.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "insinerator-rampus",
    unit: "bumi-hijau",
    type: "produk",
    name: "Insinerator RAMPUS",
    tagline: "Insinerator RAMPUS untuk pengelolaan sampah.",
    description:
      "Insinerator RAMPUS yang dikembangkan Bumi Hijau sebagai bagian dari solusi pengelolaan sampah. Kepanjangan RAMPUS belum tersedia.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "komposter-takakura",
    unit: "bumi-hijau",
    type: "produk",
    name: "Komposter Takakura",
    tagline: "Komposter metode Takakura untuk pengelolaan sampah organik.",
    description:
      "Komposter dengan metode Takakura yang dikembangkan Bumi Hijau untuk mengolah sampah organik skala rumah tangga maupun komunitas.",
    status: "in-development",
    featured: false,
    images: [],
  },
  {
    slug: "tungku-gasifikasi",
    unit: "bumi-hijau",
    type: "produk",
    name: "Tungku Gasifikasi",
    tagline: "Tungku gasifikasi untuk pengelolaan limbah organik.",
    description:
      "Tungku gasifikasi yang dikembangkan Bumi Hijau sebagai bagian dari solusi pengelolaan limbah organik.",
    status: "in-development",
    featured: true,
    images: [],
  },
];

/** Get only featured products (kept to a multiple of 3 for a full grid) */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Get a product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Get all products belonging to a business unit */
export function getProductsByUnit(unit: BusinessUnitSlug): Product[] {
  return products.filter((p) => p.unit === unit);
}
