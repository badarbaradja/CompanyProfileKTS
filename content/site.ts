/**
 * content/site.ts
 *
 * Central company data for the PT KTS website — company structure,
 * contact details, business lines/units, and the ESIC Network
 * relationship.
 *
 * Structure (business lines, business units, ESIC Network relationship)
 * is sourced from the 2026-09-14 meeting notes and the "Struktur" slide
 * — see REVISION_V0.2.md. Contact details were supplied 2026-09-23 (see
 * REVISION v0.6 part A) — the WhatsApp number is Pak Ramdlan's personal
 * line, used temporarily as the contact person, and the address is not
 * yet confirmed by the team. Vision/mission are a 2026-09-23 draft,
 * still pending team approval. Team member names (only) were restored
 * 2026-09-23 (REVISION v0.7 part B) — job titles, official name
 * spelling, and photos are still missing. See REVIEW_NOTES.md for the
 * open-questions list.
 *
 * All public-facing English copy lives in this file (never hardcoded in
 * a component) so an Indonesian translation layer can be added later
 * without touching component code — see REVISION_V0.3.md item A.5.
 *
 * NEVER hardcode company facts directly in a component — add/edit them
 * here instead.
 */

export interface BusinessLine {
  name: string;
  description: string;
}

export type BusinessUnitSlug = "kappa-solution" | "nara-aquaponics" | "bumi-hijau";

export interface BusinessUnit {
  slug: BusinessUnitSlug;
  name: string;
  logo: string;
  /** Logo has a white/light background and needs blend-mode treatment */
  logoBlend?: "multiply";
  field: string;
  description: string;
  activities: string[];
}

export type EsicActivityStatus = "active" | "coming-soon";

export interface EsicActivity {
  name: string;
  status: EsicActivityStatus;
}

export interface TrainingReference {
  label: string;
  url: string;
}

export interface TeamMember {
  name: string;
}

export const site = {
  legalName: "PT Kappa Technology Solution",
  shortName: "PT KTS",

  tagline: "Equipment supply, consulting, engineering development, and training",

  description:
    "PT Kappa Technology Solution works in four areas: equipment supply, consulting, engineering development, and training. The work is carried out by three business units: Kappa Solution, Nara Aquaponics, and Bumi Hijau. PT KTS also supports ESIC Network.",

  /** Draft vision — supplied 2026-09-23, still pending team approval. See REVIEW_NOTES.md. */
  vision: "Appropriate technology that the people who use it can run and maintain themselves." as string | undefined,
  /** Draft mission — supplied 2026-09-23, still pending team approval. See REVIEW_NOTES.md. */
  mission: [
    "Supply equipment that can be operated, serviced, and repaired locally.",
    "Design systems that fit the site, the budget, and the skills of the people who will run them.",
    "Develop our own equipment through engineering work, and test it in the field before we offer it.",
    "Train every user, so the equipment keeps working long after handover.",
    "Support education and research through ESIC Network.",
  ] as string[] | undefined,

  contact: {
    /**
     * WhatsApp number in international format without symbols. This is
     * Pak Ramdlan's personal number, used temporarily as the contact
     * person while PT KTS does not yet have its own company line — see
     * REVIEW_NOTES.md. Labeled "WhatsApp (contact person)" on /contact,
     * never "Company phone".
     */
    whatsapp: "6282119563800",
    email: "kappasolution25@gmail.com",
    /** Address supplied 2026-09-23, not yet confirmed by the team — see REVIEW_NOTES.md. Shown publicly as-is per that revision's instruction. */
    address: "Jl. Sukasenang 143, Cigugur Tengah, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40522",
    instagram: "https://www.instagram.com/kappasolution/",
    instagramHandle: "@kappasolution",
    /**
     * Online shop URL. Empty until confirmed — the current shop account
     * belongs personally to Pak Ramdlan because PT KTS's own legal/
     * e-commerce documents (NIB, NPWP, bank account, akta, cap) are not
     * yet complete. Never label this as an "official PT KTS store"
     * without explicit team confirmation.
     */
    shopUrl: "",
    shopIsPersonalAccount: true,
  },

  businessLines: [
    {
      name: "Equipment Supply",
      description:
        "Supplying tools and equipment developed by PT KTS's business units.",
    },
    {
      name: "Consulting",
      description:
        "Technical consulting for engineering needs and technology adoption.",
    },
    {
      name: "Engineering Development",
      description:
        "Design and development of systems and equipment for real-world needs.",
    },
    {
      name: "Training",
      description:
        "Training and camps run together with our business units, especially Kappa Solution.",
    },
  ] satisfies BusinessLine[],

  businessUnits: [
    {
      slug: "kappa-solution",
      name: "Kappa Solution",
      logo: "/brand/kappa-solution.png",
      field: "Equipment, systems, and engineering training",
      description:
        "Develops engineering-developed equipment and lab practicum equipment, provides system design, and runs training and camps.",
      activities: [
        "Engineering-developed equipment",
        "Lab practicum equipment",
        "System design",
        "Training",
        "Camp",
      ],
    },
    {
      slug: "nara-aquaponics",
      name: "Nara Aquaponics",
      logo: "/brand/nara-aquaponics.png",
      field: "Hydroponic and aquaponic systems",
      description:
        "Designs and builds hydroponic and aquaponic systems, complete with mechanical and biological filters, aeration systems, and biofloc ponds.",
      activities: [
        "Hydroponic and aquaponic system design-build",
        "Mechanical and biological filters",
        "Aeration systems",
        "Biofloc ponds",
      ],
    },
    {
      slug: "bumi-hijau",
      name: "Bumi Hijau",
      logo: "/brand/bumi-hijau.png",
      logoBlend: "multiply",
      field: "Waste and organic-waste management",
      description:
        "Develops waste and organic-waste management equipment: waste shredders, RAMPUS incinerators, Takakura composters, and gasification stoves.",
      activities: [
        "Waste shredder",
        "RAMPUS incinerator",
        "Takakura composter",
        "Gasification stove",
      ],
    },
  ] satisfies BusinessUnit[],

  esicNetwork: {
    name: "ESIC Network",
    logo: "/brand/esic-network.png",
    relationship: "PT KTS supports ESIC Network.",
    /** Full expansion of "ESIC" not yet supplied — see REVIEW_NOTES.md */
    expansion: undefined as string | undefined,
    activities: [
      { name: "ESIC", status: "active" },
      { name: "JESIC", status: "coming-soon" },
      { name: "Summer Camp", status: "active" },
      { name: "Training", status: "active" },
    ] satisfies EsicActivity[],
  },

  /**
   * Names supplied 2026-09-23 (REVISION v0.7 part B) — they appeared on
   * an earlier version of the site and are being restored. Job titles,
   * the official spelling of each name, and photos are NOT supplied yet
   * — do not invent them. Only `name` is shown; see the /about Team
   * section's `<Pending>` note for what's still missing.
   */
  team: {
    founders: [
      { name: "Abrar" },
      { name: "Mukhammad Ramdlan KI" },
      { name: "Tri Ayodha" },
    ] satisfies TeamMember[],
    members: [
      { name: "Galuh Intan Khumaira" },
      { name: "Febianeu Putri Agna" },
      { name: "Aisha Laila Mardiyah" },
      { name: "Badar Zaki Baradja" },
    ] satisfies TeamMember[],
  },

  training: {
    description:
      "Through its Training business line and the Kappa Solution unit, PT KTS runs training sessions and camps.",
    /** Reference posts from the 2026-09-14 meeting — link cards only, never scraped/mirrored. */
    instagramShowcase: [
      { label: "Training documentation 1", url: "https://www.instagram.com/p/DOat_4CgZHA/" },
      { label: "Training documentation 2", url: "https://www.instagram.com/p/DJ24bwcTH2n/" },
      { label: "Training documentation 3", url: "https://www.instagram.com/p/DHsFbx1pzw-/" },
    ] satisfies TrainingReference[],
    /** YouTube documentation video — iframe only renders when this is set. */
    youtubeUrl: "",
  },
};

export type Site = typeof site;
