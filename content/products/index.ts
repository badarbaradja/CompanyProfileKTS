/**
 * content/products/index.ts
 *
 * PT KTS product/service catalog — v0.3.
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

export type ProductType = "product" | "service";

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
    slug: "lab-practicum-equipment",
    unit: "kappa-solution",
    type: "product",
    name: "Lab Practicum Equipment",
    tagline: "Practicum equipment developed by Kappa Solution.",
    description:
      "Lab practicum equipment developed by Kappa Solution to support hands-on learning and training activities.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "engineering-developed-equipment",
    unit: "kappa-solution",
    type: "product",
    name: "Engineering-Developed Equipment",
    tagline: "Equipment engineered directly by Kappa Solution.",
    description:
      "A category of equipment produced through Kappa Solution's engineering development process, tailored to field application needs.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "system-design",
    unit: "kappa-solution",
    type: "service",
    name: "System Design",
    tagline: "System design services for specific engineering needs.",
    description:
      "Consulting and system design services from Kappa Solution, supporting the implementation of engineering solutions tailored to client needs.",
    status: "in-development",
    featured: true,
    images: [],
  },

  // --- Nara Aquaponics ---
  {
    slug: "hydroponic-aquaponic-design-build",
    unit: "nara-aquaponics",
    type: "service",
    name: "Hydroponic & Aquaponic System Design-Build",
    tagline: "Design-build service for hydroponic and aquaponic systems.",
    description:
      "Nara Aquaponics' service for designing and building hydroponic and aquaponic systems tailored to site and scale.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "mechanical-biological-filters",
    unit: "nara-aquaponics",
    type: "product",
    name: "Mechanical & Biological Filters",
    tagline: "Filter components for aquaponic systems.",
    description:
      "Mechanical and biological filters used as part of Nara Aquaponics systems to maintain water quality.",
    status: "in-development",
    featured: false,
    images: [],
  },
  {
    slug: "aeration-systems",
    unit: "nara-aquaponics",
    type: "product",
    name: "Aeration Systems",
    tagline: "Aeration systems for ponds and aquaponic systems.",
    description:
      "Aeration systems developed by Nara Aquaponics to support oxygenation needs in ponds and aquaponic systems.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "biofloc-ponds",
    unit: "nara-aquaponics",
    type: "product",
    name: "Biofloc Ponds",
    tagline: "Biofloc ponds for fish farming.",
    description:
      "Biofloc ponds designed by Nara Aquaponics to support fish farming using the biofloc approach.",
    status: "in-development",
    featured: true,
    images: [],
  },

  // --- Bumi Hijau ---
  {
    slug: "waste-shredder",
    unit: "bumi-hijau",
    type: "product",
    name: "Waste Shredder",
    tagline: "Shredding equipment for waste management.",
    description:
      "A waste shredder developed by Bumi Hijau to support waste processing before further treatment.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "rampus-incinerator",
    unit: "bumi-hijau",
    type: "product",
    name: "RAMPUS Incinerator",
    tagline: "RAMPUS incinerator for waste management.",
    description:
      "The RAMPUS incinerator is developed by Bumi Hijau for waste management. The full expansion of \"RAMPUS\" is not yet available.",
    status: "in-development",
    featured: true,
    images: [],
  },
  {
    slug: "takakura-composter",
    unit: "bumi-hijau",
    type: "product",
    name: "Takakura Composter",
    tagline: "Takakura-method composter for organic waste.",
    description:
      "A composter using the Takakura method, developed by Bumi Hijau to process organic waste at household or community scale.",
    status: "in-development",
    featured: false,
    images: [],
  },
  {
    slug: "gasification-stove",
    unit: "bumi-hijau",
    type: "product",
    name: "Gasification Stove",
    tagline: "Gasification stove for organic waste management.",
    description:
      "The gasification stove is developed by Bumi Hijau for organic-waste management.",
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
