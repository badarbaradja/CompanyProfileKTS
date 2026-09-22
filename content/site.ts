/**
 * content/site.ts
 *
 * Central company data for the PT KTS website — company structure,
 * contact details, business lines/units, and the ESIC Network
 * relationship.
 *
 * Structure (business lines, business units, ESIC Network relationship)
 * is sourced from the 2026-09-14 meeting notes and the "Struktur" slide
 * — see REVISION_V0.2.md. Contact details, vision/mission, and team
 * data are placeholders until the PT KTS team supplies verified values
 * — see REVIEW_NOTES.md for the open-questions list.
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

export type EsicActivityStatus = "aktif" | "segera-hadir";

export interface EsicActivity {
  name: string;
  status: EsicActivityStatus;
}

export interface TrainingReference {
  label: string;
  url: string;
}

export const site = {
  legalName: "PT Kappa Technology Solution",
  shortName: "PT KTS",

  tagline: "Empat lini usaha, tiga unit usaha, satu jaringan inovasi.",

  description:
    "PT Kappa Technology Solution menjalankan empat lini usaha — Penyediaan Barang, Konsultan, Pengembangan Rekayasa, dan Pelatihan — melalui tiga unit usaha: Kappa Solution, Nara Aquaponics, dan Bumi Hijau, serta mendukung ESIC Network.",

  /** Official vision — not yet supplied by the team. Do not invent. */
  vision: undefined as string | undefined,
  /** Official mission — not yet supplied by the team. Do not invent. */
  mission: undefined as string | undefined,

  contact: {
    /** WhatsApp number in international format without symbols, e.g. "62812xxxxxxxx". Empty = not yet supplied. */
    whatsapp: "",
    email: "",
    address: "",
    instagram: "https://www.instagram.com/kappasolution/",
    instagramHandle: "@kappasolution",
    /**
     * "Toko Online" URL. Empty until confirmed — the current shop
     * account belongs personally to Pak Ramdlan because PT KTS's own
     * legal/e-commerce documents (NIB, NPWP, bank account, akta, cap)
     * are not yet complete. Never label this as an "official PT KTS
     * store" without explicit team confirmation.
     */
    shopUrl: "",
    shopIsPersonalAccount: true,
  },

  businessLines: [
    {
      name: "Penyediaan Barang",
      description:
        "Menyediakan alat dan perangkat hasil pengembangan rekayasa dari unit-unit usaha PT KTS.",
    },
    {
      name: "Konsultan",
      description:
        "Layanan konsultasi teknis untuk kebutuhan rekayasa dan penerapan teknologi.",
    },
    {
      name: "Pengembangan Rekayasa",
      description:
        "Rancang bangun dan pengembangan sistem/alat sesuai kebutuhan lapangan.",
    },
    {
      name: "Pelatihan",
      description:
        "Pelatihan dan camp yang diselenggarakan bersama unit usaha, khususnya Kappa Solution.",
    },
  ] satisfies BusinessLine[],

  businessUnits: [
    {
      slug: "kappa-solution",
      name: "Kappa Solution",
      logo: "/brand/kappa-solution.png",
      field: "Alat, sistem, dan pelatihan rekayasa",
      description:
        "Mengembangkan alat hasil pengembangan rekayasa dan alat praktikum, menyediakan desain sistem, serta menyelenggarakan pelatihan dan camp.",
      activities: [
        "Alat hasil pengembangan rekayasa",
        "Alat praktikum",
        "Desain sistem",
        "Pelatihan",
        "Camp",
      ],
    },
    {
      slug: "nara-aquaponics",
      name: "Nara Aquaponics",
      logo: "/brand/nara-aquaponics.png",
      field: "Sistem hidroponik & akuaponik",
      description:
        "Merancang dan membangun sistem hidroponik dan akuaponik, lengkap dengan filter mekanik & biologi, sistem aerasi, dan kolam bioflok.",
      activities: [
        "Rancang bangun sistem hidroponik & akuaponik",
        "Filter mekanik dan biologi",
        "Sistem aerasi",
        "Kolam bioflok",
      ],
    },
    {
      slug: "bumi-hijau",
      name: "Bumi Hijau",
      logo: "/brand/bumi-hijau.png",
      logoBlend: "multiply",
      field: "Pengelolaan sampah & limbah organik",
      description:
        "Mengembangkan alat pengelolaan sampah dan limbah organik: pencacah sampah, insinerator RAMPUS, komposter Takakura, dan tungku gasifikasi.",
      activities: [
        "Pencacah sampah",
        "Insinerator RAMPUS",
        "Komposter Takakura",
        "Tungku gasifikasi",
      ],
    },
  ] satisfies BusinessUnit[],

  esicNetwork: {
    name: "ESIC Network",
    logo: "/brand/esic-network.png",
    relationship: "PT KTS mendukung (support) ESIC Network.",
    /** Full expansion of "ESIC" not yet supplied — see REVIEW_NOTES.md */
    expansion: undefined as string | undefined,
    activities: [
      { name: "ESIC", status: "aktif" },
      { name: "JESIC", status: "segera-hadir" },
      { name: "Summer Camp", status: "aktif" },
      { name: "Pelatihan", status: "aktif" },
    ] satisfies EsicActivity[],
  },

  training: {
    description:
      "PT KTS, melalui lini usaha Pelatihan dan unit Kappa Solution, menyelenggarakan pelatihan dan camp. Berikut gambaran pelatihan dari dokumentasi Instagram kami.",
    /** Reference posts from the 2026-09-14 meeting — link cards only, never scraped/mirrored. */
    instagramShowcase: [
      { label: "Dokumentasi pelatihan 1", url: "https://www.instagram.com/p/DOat_4CgZHA/" },
      { label: "Dokumentasi pelatihan 2", url: "https://www.instagram.com/p/DJ24bwcTH2n/" },
      { label: "Dokumentasi pelatihan 3", url: "https://www.instagram.com/p/DHsFbx1pzw-/" },
    ] satisfies TrainingReference[],
    /** YouTube documentation video — iframe only renders when this is set. */
    youtubeUrl: "",
  },
};

export type Site = typeof site;
