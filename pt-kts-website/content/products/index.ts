/**
 * content/products/index.ts
 *
 * PROVISIONAL PRODUCT DATA — FOR UI DEVELOPMENT ONLY.
 *
 * These are concept placeholder entries created to allow the website UI
 * to be built before real product information is available.
 *
 * DO NOT treat these as verified PT KTS products.
 * Every entry must be reviewed and replaced/updated by the PT KTS team
 * before public launch.
 *
 * See PRODUCT_CATALOG.md for sourcing notes.
 */

import type { ProductStatus } from "@/components/ui/Badge";

export interface Product {
  /** URL slug for the product detail page */
  slug: string;
  /** Working name — provisional, needs team approval */
  name: string;
  /** Category label shown on cards */
  category: string;
  /** One-line value proposition — provisional */
  tagline: string;
  /** Short description shown on cards — provisional */
  description: string;
  /** Development status */
  status: ProductStatus;
  /** Featured on homepage? */
  featured: boolean;
  /**
   * Problem statement — provisional.
   * Used on product detail page.
   */
  problem?: string;
}

/**
 * Provisional product concepts.
 * Source: PRODUCT_CATALOG.md v0.1 — all entries are placeholders.
 */
export const products: Product[] = [
  {
    slug: "livestock-waste-carbonization",
    name: "Livestock Waste Carbonization System",
    category: "Agricultural Technology",
    tagline:
      "Converting livestock waste into carbon-based material through a controlled processing system.",
    description:
      "A machine/system concept for processing livestock waste — such as cattle manure — into carbon-based material. Targeting livestock farms, agricultural businesses, and waste-processing operators.",
    status: "prototype",
    featured: true,
    problem:
      "Livestock waste creates handling, odor, sanitation, and waste-management challenges for farms and surrounding communities.",
  },
  {
    slug: "agricultural-waste-processing",
    name: "Agricultural Waste Processing Technology",
    category: "Agricultural Technology",
    tagline:
      "A product family for converting agricultural waste into useful materials or outputs.",
    description:
      "Concept technology for transforming agricultural by-products into more valuable outputs, reducing waste and supporting circular agricultural systems.",
    status: "concept",
    featured: true,
  },
  {
    slug: "organic-waste-processing",
    name: "Organic Waste Processing System",
    category: "Waste Technology",
    tagline:
      "Processing selected organic waste streams into more useful outputs.",
    description:
      "Technology concept for converting organic waste streams into functional materials, supporting sustainable waste management for communities and businesses.",
    status: "concept",
    featured: true,
  },
];

/** Get only featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Get a product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
