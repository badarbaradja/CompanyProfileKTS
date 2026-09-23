/**
 * content/photos.ts
 *
 * Curated documentation photos — see REVISION v0.4 part B/C.
 *
 * Source files (raw camera exports from Google Drive/phone/drone) live
 * outside the repo and are never committed — see .gitignore. This file
 * only references the optimized WebP output of
 * `scripts/optimize-photos.mjs` in `public/photos/`.
 *
 * `alt` describes only what is visibly in the photo — no invented names,
 * equipment identification, or outcomes. See REVIEW_NOTES.md for the
 * full curation notes and the (empty) "candidate product photo" list.
 */

export type PhotoEvent = "esic-conference-2026" | "engineering-camp-2026";
export type PhotoUsage = "hero" | "about" | "training" | "events";

export interface Photo {
  src: string;
  alt: string;
  event: PhotoEvent;
  /** Camp day label, when known from the source folder structure */
  day?: string;
  width: number;
  height: number;
  usage: PhotoUsage[];
  /** Short "what event + year" caption only — no names, no claims */
  caption?: string;
}

export const photos: Photo[] = [
  // --- ESIC Conference 2026 ---
  {
    src: "/photos/esic-conference/esic-presentation-01.webp",
    alt: "A speaker presenting at a lectern during ESIC Conference 2026, with a presentation slide projected behind him.",
    event: "esic-conference-2026",
    width: 1400,
    height: 933,
    usage: ["events"],
    caption: "ESIC Conference 2026",
  },
  {
    src: "/photos/esic-conference/esic-audience-qa.webp",
    alt: "Conference attendees seated in a Q&A session, with one participant asking a question into a microphone.",
    event: "esic-conference-2026",
    width: 1400,
    height: 933,
    usage: ["events", "about"],
    caption: "ESIC Conference 2026",
  },
  {
    src: "/photos/esic-conference/esic-presentation-02.webp",
    alt: "A second speaker presenting at the lectern during ESIC Conference 2026.",
    event: "esic-conference-2026",
    width: 1400,
    height: 933,
    usage: ["events"],
    caption: "ESIC Conference 2026",
  },
  {
    src: "/photos/esic-conference/esic-title-slide.webp",
    alt: "A projected presentation slide reading \"ESIC 2026, Ibis Hotel, September 1st, 2026\" with a speaker visible at the lectern.",
    event: "esic-conference-2026",
    width: 1400,
    height: 933,
    usage: ["events"],
    caption: "ESIC Conference 2026",
  },

  // --- Engineering Camp 2026 ---
  {
    src: "/photos/camp/camp-outdoor-briefing.webp",
    alt: "A large group of Engineering Camp 2026 participants sitting outdoors, listening to an instructor with a megaphone. All-terrain vehicles and a building are in the background.",
    event: "engineering-camp-2026",
    day: "Day 3",
    width: 2000,
    height: 1125,
    usage: ["hero", "training", "events"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-group-circle-briefing.webp",
    alt: "Engineering Camp 2026 participants standing and sitting in a group outdoors, facing an instructor holding a megaphone.",
    event: "engineering-camp-2026",
    day: "Day 3",
    width: 1400,
    height: 788,
    usage: ["training"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-farm-visit-briefing.webp",
    alt: "Engineering Camp 2026 participants seated under a covered shelter, listening to a presentation during a site visit.",
    event: "engineering-camp-2026",
    day: "Day 3",
    width: 1400,
    height: 788,
    usage: ["training"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-team-gear-up.webp",
    alt: "Two Engineering Camp 2026 participants in protective gear helping each other adjust equipment straps before an outdoor activity.",
    event: "engineering-camp-2026",
    day: "Day 3",
    width: 1400,
    height: 788,
    usage: ["training"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-team-lineup.webp",
    alt: "A team of Engineering Camp 2026 participants in protective gear and helmets standing in a line outdoors.",
    event: "engineering-camp-2026",
    day: "Day 3",
    width: 1400,
    height: 788,
    usage: ["training", "events"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/campus-walkway-group.webp",
    alt: "Engineering Camp 2026 participants walking together along a covered outdoor walkway during a campus visit.",
    event: "engineering-camp-2026",
    day: "Day 4",
    width: 1400,
    height: 786,
    usage: ["training", "about"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/campus-garden-walk.webp",
    alt: "Engineering Camp 2026 participants walking through a landscaped garden path during a campus visit.",
    event: "engineering-camp-2026",
    day: "Day 4",
    width: 1400,
    height: 786,
    usage: ["training"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-lunch-together.webp",
    alt: "Engineering Camp 2026 participants sitting together at classroom desks sharing a meal, with a hazy city skyline visible through the windows.",
    event: "engineering-camp-2026",
    day: "Day 4",
    width: 1400,
    height: 786,
    usage: ["about", "training"],
    caption: "Engineering Camp 2026",
  },
  {
    src: "/photos/camp/camp-classroom-discussion.webp",
    alt: "Engineering Camp 2026 participants in a classroom discussion, with one participant raising a hand and a whiteboard with notes visible.",
    event: "engineering-camp-2026",
    day: "Day 4",
    width: 1400,
    height: 786,
    usage: ["training", "events"],
    caption: "Engineering Camp 2026",
  },
];

export function getPhotosByUsage(usage: PhotoUsage): Photo[] {
  return photos.filter((p) => p.usage.includes(usage));
}

export function getHeroPhoto(): Photo | undefined {
  return photos.find((p) => p.usage.includes("hero"));
}

/**
 * Sample product photos — see REVISION v0.6 part C.2.
 *
 * One free-license photo per catalog item, sourced from Unsplash to
 * show the shape of a finished product page. None of these show PT
 * KTS/unit equipment — `alt` is deliberately generic ("Sample photo:
 * ...") so it's never read as a claim that PT KTS owns the pictured
 * item. Processed by `scripts/optimize-sample-photos.mjs` into
 * `public/photos/samples/` (resized, WebP, EXIF/GPS stripped).
 *
 * The Unsplash License lets these be used freely, commercially, without
 * permission or credit — the photographer/source fields below are kept
 * anyway as a courtesy record for REVIEW_NOTES.md and for the team to
 * swap out once real product photos exist.
 *
 * REVISION v0.7 part D: the Mechanical & Biological Filters and RAMPUS
 * Incinerator photos were replaced — the originals showed a large
 * aerial sewage-treatment plant and industrial incineration-plant
 * chimneys, which misrepresented PT KTS's actual small equipment scale.
 */
export interface SampleProductPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  photographerUrl: string;
  source: "Unsplash";
  sourceUrl: string;
  license: string;
  isSample: true;
}

export const sampleProductPhotos: Record<string, SampleProductPhoto> = {
  "/photos/samples/lab-practicum-equipment.webp": {
    src: "/photos/samples/lab-practicum-equipment.webp",
    alt: "Sample photo: laboratory microscopes on a bench.",
    width: 1400,
    height: 933,
    photographer: "Ousa Chea",
    photographerUrl: "https://unsplash.com/@cheaousa?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/gKUC4TMhOiY",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/engineering-developed-equipment.webp": {
    src: "/photos/samples/engineering-developed-equipment.webp",
    alt: "Sample photo: metal welding and fabrication work.",
    width: 1400,
    height: 933,
    photographer: "Rob Lambert",
    photographerUrl: "https://unsplash.com/@roblambertjr?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/9Q_pLLP_jmA",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/system-design.webp": {
    src: "/photos/samples/system-design.webp",
    alt: "Sample photo: technical blueprint and drafting tools on a desk.",
    width: 1400,
    height: 942,
    photographer: "Lucas Kepner",
    photographerUrl: "https://unsplash.com/@lucaskphoto?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/Yn8D5B8C-eY",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/hydroponic-aquaponic-design-build.webp": {
    src: "/photos/samples/hydroponic-aquaponic-design-build.webp",
    alt: "Sample photo: rows of plants growing inside a greenhouse.",
    width: 1400,
    height: 787,
    photographer: "Denis Sobnakov",
    photographerUrl: "https://unsplash.com/@sobden?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/vZY9FKJ9i9A",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/mechanical-biological-filters.webp": {
    src: "/photos/samples/mechanical-biological-filters.webp",
    alt: "Sample photo: a small row of filter tanks plumbed together outdoors.",
    width: 1400,
    height: 933,
    photographer: "Alexey Demidov",
    photographerUrl: "https://unsplash.com/@alexeydemidov?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/wzcyEpk2eWw",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/aeration-systems.webp": {
    src: "/photos/samples/aeration-systems.webp",
    alt: "Sample photo: a fountain aerator spraying water into a pond.",
    width: 1400,
    height: 933,
    photographer: "Kuyune",
    photographerUrl: "https://unsplash.com/@kuyuneth2543?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/u6XStYWSrZA",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/biofloc-ponds.webp": {
    src: "/photos/samples/biofloc-ponds.webp",
    alt: "Sample photo: aerial view of round fish farming ponds.",
    width: 1400,
    height: 933,
    photographer: "Shalev Cohen",
    photographerUrl: "https://unsplash.com/@shalevcohen?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/8pSNBO0ZsAI",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/waste-shredder.webp": {
    src: "/photos/samples/waste-shredder.webp",
    alt: "Sample photo: aerial view of a wood chipper shredding branches.",
    width: 1400,
    height: 787,
    photographer: "Daniel Miksha",
    photographerUrl: "https://unsplash.com/@danielmiksha?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/iPKoGMksfAE",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/rampus-incinerator.webp": {
    src: "/photos/samples/rampus-incinerator.webp",
    alt: "Sample photo: wood burning inside a small metal barrel.",
    width: 1400,
    height: 933,
    photographer: "DDP",
    photographerUrl: "https://unsplash.com/@moino007?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/8dRytMlVKzE",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/takakura-composter.webp": {
    src: "/photos/samples/takakura-composter.webp",
    alt: "Sample photo: a household compost bin next to kitchen scraps.",
    width: 1400,
    height: 933,
    photographer: "Lenka Dzurendova",
    photographerUrl: "https://unsplash.com/@lenkamou?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/FTCQPjPfFS4",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
  "/photos/samples/gasification-stove.webp": {
    src: "/photos/samples/gasification-stove.webp",
    alt: "Sample photo: an outdoor wood stove cooking over an open flame.",
    width: 1400,
    height: 933,
    photographer: "Alan Jiang",
    photographerUrl: "https://unsplash.com/@alan_j?utm_source=pt_kts_website&utm_medium=referral",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/r1pX08YRdKo",
    license: "Unsplash License (free to use)",
    isSample: true,
  },
};

export function getSampleProductPhoto(src: string): SampleProductPhoto | undefined {
  return sampleProductPhotos[src];
}
