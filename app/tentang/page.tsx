import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: `Profil, struktur, dan unit usaha ${site.legalName}.`,
};

export default function TentangPage() {
  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl">
            <SectionHeading
              eyebrow="Tentang"
              title={`Tentang ${site.legalName}`}
              description={site.description}
            />
          </FadeIn>

          <FadeIn className="max-w-2xl mt-10 space-y-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                Visi
              </h2>
              {site.vision ? (
                <p className="text-[var(--color-text-muted)] leading-relaxed">{site.vision}</p>
              ) : (
                <Pending label="Visi resmi PT KTS" />
              )}
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
                Misi
              </h2>
              {site.mission ? (
                <p className="text-[var(--color-text-muted)] leading-relaxed">{site.mission}</p>
              ) : (
                <Pending label="Misi resmi PT KTS" />
              )}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Structure diagram */}
      <section className="section-padding-sm bg-[var(--color-surface-raised)]">
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <SectionHeading as="h2" eyebrow="Struktur" title="Struktur PT KTS" />
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col items-center gap-6">
              {/* PT KTS node */}
              <div className="rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-8 py-5 text-center">
                <span className="font-semibold text-[var(--color-text)]">PT KTS</span>
              </div>

              {/* support arrow */}
              <div className="flex flex-col items-center text-[var(--color-text-faint)]">
                <span className="text-xs uppercase tracking-widest">support</span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
                  <path d="M8 0v20M2 15l6 7 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* ESIC Network node */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-5 text-center">
                <span className="font-semibold text-[var(--color-text)]">{site.esicNetwork.name}</span>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {site.esicNetwork.activities.map((a) => a.name).join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-4 text-center md:text-left">
                  Lini Usaha
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {site.businessLines.map((line) => (
                    <span
                      key={line.name}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)]"
                    >
                      {line.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-4 text-center md:text-left">
                  Unit Usaha
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
                  {site.businessUnits.map((unit) => (
                    <UnitLogo key={unit.slug} unit={unit} className="h-8" />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding-sm">
        <Container>
          <FadeIn className="max-w-2xl mb-8">
            <SectionHeading as="h2" eyebrow="Tim" title="Tim PT KTS" />
          </FadeIn>
          <FadeIn className="max-w-2xl">
            <Pending label="Jabatan, foto, dan daftar anggota tim yang akan ditampilkan di website" />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
