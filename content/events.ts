/**
 * content/events.ts
 *
 * Static activity-calendar data for /events — see REVISION_V0.2.md
 * section 4.5. No CMS, no database: this file IS the data source.
 *
 * As of v0.4, two entries are real (`isDummy: false`), sourced from
 * documentation photos — see REVIEW_NOTES.md for how each date was
 * derived (slide text / EXIF / filename timestamps) and what's still
 * unconfirmed. Everything else below is example/dummy data
 * (`isDummy: true`), labeled "Example" in the UI. Do not invent real
 * schedule dates — replace these once the PT KTS team supplies actual
 * activity dates (see REVIEW_NOTES.md open question #7).
 */

export type KTSEventType = "training" | "camp" | "esic" | "jesic" | "other";
export type KTSEventStatus = "scheduled" | "completed" | "tentative";

export interface KTSEvent {
  slug: string;
  title: string;
  type: KTSEventType;
  /** ISO date, e.g. "2026-10-12" */
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  registrationUrl?: string;
  status: KTSEventStatus;
  /** Marks example/placeholder data — always show a visible "Example" label */
  isDummy: boolean;
}

export const events: KTSEvent[] = [
  {
    slug: "example-lab-equipment-training",
    title: "Lab Equipment Training (Example)",
    type: "training",
    startDate: "2026-10-15",
    location: "TBD",
    description:
      "Example event data — the real schedule has not yet been set by the PT KTS team.",
    status: "scheduled",
    isDummy: true,
  },
  {
    slug: "example-bumi-hijau-engineering-camp",
    title: "Bumi Hijau Engineering Camp (Example)",
    type: "camp",
    startDate: "2026-11-02",
    endDate: "2026-11-05",
    location: "TBD",
    description:
      "Example event data — the real schedule has not yet been set by the PT KTS team.",
    status: "tentative",
    isDummy: true,
  },
  {
    slug: "example-jesic",
    title: "JESIC (Example — Coming Soon)",
    type: "jesic",
    startDate: "2026-12-01",
    location: "TBD",
    description:
      "JESIC is still being discussed by Pak Abrar, Aisha, and Intan. This date is only an example, not an official schedule.",
    status: "tentative",
    isDummy: true,
  },
  {
    slug: "esic-conference-2026",
    title: "ESIC Conference 2026",
    type: "esic",
    // Date confirmed from a visible presentation slide ("Ibis Hotel,
    // September 1st, 2026") and corroborated by photo EXIF timestamps.
    startDate: "2026-09-01",
    location: "Ibis Hotel",
    description:
      "A research/engineering presentation conference held by ESIC Network, supported by PT KTS.",
    status: "completed",
    isDummy: false,
  },
  {
    slug: "engineering-camp-2026",
    title: "Engineering Camp 2026",
    type: "camp",
    // Confirmed from drone-camera filename timestamps in the supplied
    // photos (Day 3 = Sep 3, Day 4 = Sep 4, Day 5 folder implies Sep 5).
    // No Day 1/2 photos were supplied, so the camp's actual start date
    // is not confirmed — see REVIEW_NOTES.md.
    startDate: "2026-09-03",
    endDate: "2026-09-05",
    description:
      "A multi-day engineering camp held by ESIC Network, supported by PT KTS, including site visits and team activities.",
    status: "completed",
    isDummy: false,
  },
];

function toDate(value: string): Date {
  return new Date(`${value}T00:00:00`);
}

/** Events with a start date today or later, soonest first. */
export function getUpcomingEvents(referenceDate: Date = new Date()): KTSEvent[] {
  return events
    .filter((e) => toDate(e.startDate) >= startOfDay(referenceDate))
    .sort((a, b) => toDate(a.startDate).getTime() - toDate(b.startDate).getTime());
}

/** Events with a start date before today, most recent first. */
export function getPastEvents(referenceDate: Date = new Date()): KTSEvent[] {
  return events
    .filter((e) => toDate(e.startDate) < startOfDay(referenceDate))
    .sort((a, b) => toDate(b.startDate).getTime() - toDate(a.startDate).getTime());
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Groups events by "Month Year" label, preserving input order. */
export function groupEventsByMonth(list: KTSEvent[]): { label: string; items: KTSEvent[] }[] {
  const groups = new Map<string, KTSEvent[]>();
  for (const event of list) {
    const d = toDate(event.startDate);
    const label = `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(event);
  }
  return Array.from(groups.entries()).map(([label, items]) => ({ label, items }));
}

export function formatEventDate(event: KTSEvent): string {
  const start = toDate(event.startDate);
  const startLabel = `${MONTHS[start.getMonth()]} ${start.getDate()}, ${start.getFullYear()}`;
  if (!event.endDate) return startLabel;

  const end = toDate(event.endDate);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  if (sameMonth) {
    return `${MONTHS[start.getMonth()]} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`;
  }
  const endLabel = `${MONTHS[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
  return `${startLabel} – ${endLabel}`;
}
