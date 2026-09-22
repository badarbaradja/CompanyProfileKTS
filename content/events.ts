/**
 * content/events.ts
 *
 * Static activity-calendar data for /kegiatan — see REVISION_V0.2.md
 * section 4.5. No CMS, no database: this file IS the data source.
 *
 * All entries below are example/dummy data (`isDummy: true`) and are
 * labeled "Contoh" in the title and in the UI. Do not invent real
 * schedule dates — replace these once the PT KTS team supplies actual
 * activity dates (see REVIEW_NOTES.md open question #7).
 */

export type KTSEventType = "pelatihan" | "camp" | "esic" | "jesic" | "lainnya";
export type KTSEventStatus = "terjadwal" | "selesai" | "tentatif";

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
  /** Marks example/placeholder data — always show a visible "Contoh" label */
  isDummy: boolean;
}

export const events: KTSEvent[] = [
  {
    slug: "contoh-pelatihan-alat-praktikum",
    title: "Pelatihan Alat Praktikum (Contoh)",
    type: "pelatihan",
    startDate: "2026-10-15",
    location: "Menyusul",
    description:
      "Contoh data kegiatan — jadwal sebenarnya belum ditentukan oleh tim PT KTS.",
    status: "terjadwal",
    isDummy: true,
  },
  {
    slug: "contoh-camp-rekayasa-bumi-hijau",
    title: "Camp Rekayasa Bumi Hijau (Contoh)",
    type: "camp",
    startDate: "2026-11-02",
    endDate: "2026-11-05",
    location: "Menyusul",
    description:
      "Contoh data kegiatan — jadwal sebenarnya belum ditentukan oleh tim PT KTS.",
    status: "tentatif",
    isDummy: true,
  },
  {
    slug: "contoh-jesic",
    title: "JESIC (Contoh — segera hadir)",
    type: "jesic",
    startDate: "2026-12-01",
    location: "Menyusul",
    description:
      "JESIC masih dibahas oleh Pak Abrar, Aisha, dan Intan. Tanggal ini hanya contoh, bukan jadwal resmi.",
    status: "tentatif",
    isDummy: true,
  },
  {
    slug: "contoh-pelatihan-sistem-aquaponik",
    title: "Pelatihan Sistem Aquaponik (Contoh)",
    type: "pelatihan",
    startDate: "2026-08-10",
    location: "Menyusul",
    description:
      "Contoh data kegiatan yang telah lewat — jadwal sebenarnya belum ditentukan oleh tim PT KTS.",
    status: "selesai",
    isDummy: true,
  },
  {
    slug: "contoh-esic-summer-camp",
    title: "ESIC Summer Camp (Contoh)",
    type: "esic",
    startDate: "2026-07-20",
    endDate: "2026-07-25",
    location: "Menyusul",
    description:
      "Contoh data kegiatan yang telah lewat — jadwal sebenarnya belum ditentukan oleh tim PT KTS.",
    status: "selesai",
    isDummy: true,
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

const INDONESIAN_MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/** Groups events by "Bulan Tahun" label (Indonesian), preserving input order. */
export function groupEventsByMonth(list: KTSEvent[]): { label: string; items: KTSEvent[] }[] {
  const groups = new Map<string, KTSEvent[]>();
  for (const event of list) {
    const d = toDate(event.startDate);
    const label = `${INDONESIAN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label)!.push(event);
  }
  return Array.from(groups.entries()).map(([label, items]) => ({ label, items }));
}

export function formatEventDate(event: KTSEvent): string {
  const start = toDate(event.startDate);
  const startLabel = `${start.getDate()} ${INDONESIAN_MONTHS[start.getMonth()]} ${start.getFullYear()}`;
  if (!event.endDate) return startLabel;

  const end = toDate(event.endDate);
  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  if (sameMonth) {
    return `${start.getDate()}–${end.getDate()} ${INDONESIAN_MONTHS[end.getMonth()]} ${end.getFullYear()}`;
  }
  const endLabel = `${end.getDate()} ${INDONESIAN_MONTHS[end.getMonth()]} ${end.getFullYear()}`;
  return `${startLabel} – ${endLabel}`;
}
