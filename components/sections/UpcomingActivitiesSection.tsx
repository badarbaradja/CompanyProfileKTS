import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getUpcomingEvents, formatEventDate, type KTSEventType } from "@/content/events";

const TYPE_LABEL: Record<KTSEventType, string> = {
  pelatihan: "Pelatihan",
  camp: "Camp",
  esic: "ESIC",
  jesic: "JESIC",
  lainnya: "Kegiatan",
};

export function UpcomingActivitiesSection() {
  const upcoming = getUpcomingEvents().slice(0, 3);

  if (upcoming.length === 0) return null;

  return (
    <section
      id="kegiatan-terdekat"
      aria-labelledby="kegiatan-terdekat-heading"
      className="section-padding-sm bg-[var(--color-surface-raised)]"
    >
      <Container>
        <FadeIn className="max-w-2xl mb-12">
          <SectionHeading
            as="h2"
            eyebrow="Pelatihan & Kegiatan"
            title="Kegiatan terdekat"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {upcoming.map((event) => (
            <FadeIn key={event.slug}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    {TYPE_LABEL[event.type]}
                  </span>
                  {event.isDummy && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      Contoh
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {formatEventDate(event)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10">
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline"
          >
            Lihat kalender kegiatan →
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
