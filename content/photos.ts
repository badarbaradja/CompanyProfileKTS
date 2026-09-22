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
    alt: "A large group of Engineering Camp 2026 participants sitting outdoors on a field, listening to an instructor giving a briefing with a megaphone, with all-terrain vehicles and a building in the background.",
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
