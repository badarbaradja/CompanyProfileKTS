/**
 * content/products/index.ts
 *
 * PT KTS product/service catalog — v0.7.
 *
 * The 11 items and their business-unit grouping are real, sourced from
 * the 2026-09-14 "Struktur" meeting slide (see PRODUCT_CATALOG.md and
 * REVISION_V0.2.md section 4.3). They are NOT invented concepts.
 *
 * `summary`, `description`, `highlights`, `applications`, `specs`, and
 * `images` are SAMPLE data added in REVISION v0.6 part C so the team can
 * see the final shape of a product page. Every product is marked
 * `isSample: true` and the detail page shows a "Sample data" badge on
 * the specs and photo blocks. None of this is a verified fact about a
 * real, priced, or certified PT KTS product — see REVIEW_NOTES.md
 * section "Sample catalog content" for the full list of fields the team
 * needs to replace, and `content/photos.ts` for photo sourcing/licenses.
 *
 * As of REVISION v0.7 part A, there is no `status` field (no "In
 * Development"/"Prototype"/etc. badge) — the team never confirmed a
 * real status for any item, so showing one was an invented claim. Add
 * it back once the team supplies real per-item status data.
 */

import type { BusinessUnitSlug } from "@/content/site";

export type ProductType = "product" | "service";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  /** URL slug for the product/service detail page */
  slug: string;
  /** Which business unit this belongs to */
  unit: BusinessUnitSlug;
  /** Product (barang) or service (jasa) */
  type: ProductType;
  /** Name, exactly as listed on the Struktur slide */
  name: string;
  /** One-line summary shown on cards and as the detail-page lede */
  summary: string;
  /** General explanation of function only — no pricing/performance claims */
  description: string;
  /** Short feature list, shown as a plain list (not a card grid) */
  highlights: string[];
  /** Where this is used, shown as a tag list (not a card grid) */
  applications: string[];
  /** Featured on the homepage? (kept to a multiple of 3) */
  featured: boolean;
  /** Specifications — sample data until the team supplies verified values */
  specs: ProductSpec[];
  /** Photo src paths — see content/photos.ts for alt text and licensing */
  images: string[];
  /** True while summary/description/highlights/applications/specs/images are sample data, not verified facts */
  isSample: boolean;
}

export const products: Product[] = [
  // --- Kappa Solution ---
  {
    slug: "lab-practicum-equipment",
    unit: "kappa-solution",
    type: "product",
    name: "Lab Practicum Equipment",
    summary: "Teaching kits for hands-on practicum sessions.",
    description:
      "Practicum equipment for schools, universities, and training centers. Each kit is built around one topic, so a class can go through a full experiment in a single session. Kappa Solution can adjust a kit to match a syllabus or an existing lab setup.",
    highlights: [
      "Built around one topic per kit",
      "Sized for a class group",
      "Spare parts available locally",
      "Can be matched to an existing syllabus",
    ],
    applications: [
      "School science labs",
      "University teaching labs",
      "Vocational training centers",
      "Training providers",
    ],
    featured: true,
    specs: [
      { label: "Kit format", value: "Bench unit" },
      { label: "Group size", value: "2 to 4 students" },
      { label: "Power", value: "220V AC" },
      { label: "Manual", value: "Indonesian and English" },
    ],
    images: ["/photos/samples/lab-practicum-equipment.webp"],
    isSample: true,
  },
  {
    slug: "engineering-developed-equipment",
    unit: "kappa-solution",
    type: "product",
    name: "Engineering-Developed Equipment",
    summary: "Equipment that came out of our own engineering work.",
    description:
      "Some of our equipment starts as an internal engineering project. A problem is studied, a prototype is built, and the design is revised until it works under field conditions. What survives that process becomes a product we offer to customers.",
    highlights: [
      "Designed and built in house",
      "Tested in the field before release",
      "Parts chosen for local availability",
      "Design can be adapted per site",
    ],
    applications: [
      "Research groups",
      "Pilot projects",
      "Community programs",
      "Small production units",
    ],
    featured: true,
    specs: [
      { label: "Status", value: "Field tested" },
      { label: "Build", value: "Made to order" },
      { label: "Lead time", value: "4 to 6 weeks" },
      { label: "Documentation", value: "Operating and maintenance manual" },
    ],
    images: ["/photos/samples/engineering-developed-equipment.webp"],
    isSample: true,
  },
  {
    slug: "system-design",
    unit: "kappa-solution",
    type: "service",
    name: "System Design",
    summary: "System planning, from requirements to build-ready drawings.",
    description:
      "We study the site, the target output, and the budget, then produce a technical design that a builder can work from. The result covers layout, component sizing, and an operating procedure. Customers can build it themselves or have us build it.",
    highlights: [
      "Site survey first",
      "Component sizing with calculations",
      "Build-ready drawings",
      "Operating procedure included",
    ],
    applications: [
      "Aquaponic and hydroponic installations",
      "Waste processing units",
      "Teaching labs",
      "Campus facilities",
    ],
    featured: true,
    specs: [
      { label: "Deliverable", value: "Drawings and specification" },
      { label: "Timeline", value: "2 to 4 weeks" },
      { label: "Revisions", value: "Two rounds" },
      { label: "Format", value: "PDF and editable source" },
    ],
    images: ["/photos/samples/system-design.webp"],
    isSample: true,
  },

  // --- Nara Aquaponics ---
  {
    slug: "hydroponic-aquaponic-design-build",
    unit: "nara-aquaponics",
    type: "service",
    name: "Hydroponic & Aquaponic System Design-Build",
    summary: "Growing systems designed and built for your site.",
    description:
      "An aquaponic system raises fish and plants in one water loop, where fish waste feeds the plants and the plants clean the water. A hydroponic system grows plants without soil. We size both to the space, water source, and crop you have in mind, then build and commission the system.",
    highlights: [
      "Sized to your space and water source",
      "Fish and plant loop in one system",
      "Built and commissioned on site",
      "Operator training included",
    ],
    applications: [
      "School and campus gardens",
      "Community farming",
      "Small commercial growers",
      "Demonstration plots",
    ],
    featured: true,
    specs: [
      { label: "Coverage", value: "12 to 200 m2" },
      { label: "Media", value: "NFT, DWC, or media bed" },
      { label: "Water source", value: "PDAM or well" },
      { label: "Handover", value: "Includes operator training" },
    ],
    images: ["/photos/samples/hydroponic-aquaponic-design-build.webp"],
    isSample: true,
  },
  {
    slug: "mechanical-biological-filters",
    unit: "nara-aquaponics",
    type: "product",
    name: "Mechanical & Biological Filters",
    summary: "Filters that keep the water clean enough to reuse.",
    description:
      "The mechanical stage traps solid waste before it breaks down. The biological stage holds the bacteria that convert ammonia into nitrate, which plants can use. Together they let the same water circulate instead of being replaced.",
    highlights: [
      "Two filter stages in one line",
      "Media can be cleaned and reused",
      "Sized to fish load",
      "Serviceable without draining the pond",
    ],
    applications: ["Aquaponic systems", "Fish ponds", "Ornamental fish", "Hatcheries"],
    featured: false,
    specs: [
      { label: "Flow", value: "1,000 to 8,000 L/h" },
      { label: "Mechanical media", value: "Filter brush and mat" },
      { label: "Biological media", value: "Bioball and K1" },
      { label: "Housing", value: "Food-grade tank" },
    ],
    images: ["/photos/samples/mechanical-biological-filters.webp"],
    isSample: true,
  },
  {
    slug: "aeration-systems",
    unit: "nara-aquaponics",
    type: "product",
    name: "Aeration Systems",
    summary: "Oxygen supply for ponds and growing systems.",
    description:
      "Fish and filter bacteria both consume oxygen, and the level drops fastest at night and at high stocking density. An aeration system keeps dissolved oxygen in a safe range, which supports growth and lowers the risk of sudden loss.",
    highlights: [
      "Runs continuously",
      "Sized to pond volume",
      "Diffuser layout planned per pond shape",
      "Low maintenance blower",
    ],
    applications: [
      "Biofloc ponds",
      "Aquaponic sumps",
      "Fish nurseries",
      "Live fish holding tanks",
    ],
    featured: true,
    specs: [
      { label: "Air output", value: "40 to 150 L/min" },
      { label: "Power", value: "60 to 250 W" },
      { label: "Diffuser", value: "Nano tube or air stone" },
      { label: "Installation", value: "Surface mounted blower" },
    ],
    images: ["/photos/samples/aeration-systems.webp"],
    isSample: true,
  },
  {
    slug: "biofloc-ponds",
    unit: "nara-aquaponics",
    type: "product",
    name: "Biofloc Ponds",
    summary: "Fish ponds that process their own waste.",
    description:
      "In a biofloc pond, controlled aeration and feeding grow clumps of microorganisms that consume uneaten feed and fish waste. The flocs become a supplementary food source and cut water exchange, which suits sites where water is limited.",
    highlights: [
      "Less water exchange",
      "Flocs serve as extra feed",
      "Round tank for even circulation",
      "Frame and liner can be replaced",
    ],
    applications: [
      "Catfish and tilapia farming",
      "Home scale farming",
      "Community programs",
      "Training facilities",
    ],
    featured: true,
    specs: [
      { label: "Diameter", value: "2 to 4 m" },
      { label: "Volume", value: "3 to 12 m3" },
      { label: "Frame", value: "Galvanized wire and bracing" },
      { label: "Liner", value: "Tarpaulin, replaceable" },
    ],
    images: ["/photos/samples/biofloc-ponds.webp"],
    isSample: true,
  },

  // --- Bumi Hijau ---
  {
    slug: "waste-shredder",
    unit: "bumi-hijau",
    type: "product",
    name: "Waste Shredder",
    summary: "Cuts waste down to a size that can be processed.",
    description:
      "Whole organic waste composts slowly and is hard to handle. The shredder reduces it to small, even pieces, which speeds up composting and makes the material easier to feed into the next stage.",
    highlights: ["Even output size", "Replaceable blades", "Wheeled frame", "Hopper sized for garden waste"],
    applications: ["Composting units", "Waste banks", "Urban farms", "Campus and office grounds"],
    featured: true,
    specs: [
      { label: "Capacity", value: "100 to 300 kg/h" },
      { label: "Motor", value: "5.5 kW electric or gasoline" },
      { label: "Blade", value: "Hardened steel, replaceable" },
      { label: "Dimensions", value: "120 x 70 x 110 cm" },
    ],
    images: ["/photos/samples/waste-shredder.webp"],
    isSample: true,
  },
  {
    slug: "rampus-incinerator",
    unit: "bumi-hijau",
    type: "product",
    name: "RAMPUS Incinerator",
    summary: "Controlled burning for waste that cannot be composted.",
    description:
      "RAMPUS burns waste inside a closed chamber, so the process stays contained instead of running as an open fire. It is intended for residual waste at sites that have no collection service, and it works alongside sorting rather than replacing it. The full expansion of \"RAMPUS\" is not yet available.",
    highlights: [
      "Closed combustion chamber",
      "Chimney with a secondary stage",
      "Ash drawer for easy clearing",
      "Fixed installation on a concrete base",
    ],
    applications: ["Village waste facilities", "Waste banks", "Institutional grounds", "Remote sites"],
    featured: true,
    specs: [
      { label: "Capacity", value: "50 to 150 kg per cycle" },
      { label: "Chamber", value: "Firebrick lined" },
      { label: "Chimney", value: "3 m with secondary chamber" },
      { label: "Fuel", value: "Waste with a starter fuel" },
    ],
    images: ["/photos/samples/rampus-incinerator.webp"],
    isSample: true,
  },
  {
    slug: "takakura-composter",
    unit: "bumi-hijau",
    type: "product",
    name: "Takakura Composter",
    summary: "Household composting for kitchen waste.",
    description:
      "The Takakura method uses a fermentation starter in a ventilated basket, which turns kitchen waste into compost without an outdoor pit. It suits households and offices with little space, and it produces compost that can go straight into planters.",
    highlights: ["Fits indoors or on a balcony", "Starter medium included", "No pit required", "Low odor when maintained"],
    applications: ["Households", "Offices", "Schools", "Community waste programs"],
    featured: false,
    specs: [
      { label: "Volume", value: "40 to 60 L" },
      { label: "Cycle", value: "2 to 4 weeks" },
      { label: "Body", value: "Ventilated basket with cover" },
      { label: "Includes", value: "Starter medium and guide" },
    ],
    images: ["/photos/samples/takakura-composter.webp"],
    isSample: true,
  },
  {
    slug: "gasification-stove",
    unit: "bumi-hijau",
    type: "product",
    name: "Gasification Stove",
    summary: "Turns biomass into burnable gas for cooking and heating.",
    description:
      "A gasification stove heats biomass with a limited air supply, so it releases a combustible gas that burns at the top of the chamber. The flame is cleaner than open burning, and it runs on wood chips, shells, and other dry residue. Charcoal is left in the chamber at the end of a run.",
    highlights: [
      "Runs on dry biomass residue",
      "Cleaner flame than open burning",
      "Leaves charcoal after each run",
      "Portable stainless body",
    ],
    applications: ["Field kitchens", "Small food producers", "Farms with crop residue", "Demonstrations and training"],
    featured: true,
    specs: [
      { label: "Fuel", value: "Wood chips, shells, dry residue" },
      { label: "Burn time", value: "45 to 90 min per load" },
      { label: "Body", value: "Stainless steel" },
      { label: "Output", value: "Cooking flame plus charcoal residue" },
    ],
    images: ["/photos/samples/gasification-stove.webp"],
    isSample: true,
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
