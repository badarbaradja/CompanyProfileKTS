import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";
import { photos } from "@/content/photos";

const aboutPhoto = photos.find((p) => p.src.includes("camp-lunch-together"));

export const metadata: Metadata = {
  title: "About",
  description: `Profile, structure, and business units of ${site.legalName}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <div>
              <FadeIn>
                <SectionHeading
                  eyebrow="About"
                  title={`About ${site.legalName}`}
                  description={site.description}
                />
              </FadeIn>

              <FadeIn className="mt-10 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                      Vision
                    </h2>
                    {site.vision && <SampleBadge label="Draft, pending approval" />}
                  </div>
                  {site.vision ? (
                    <p
                      className="font-display italic leading-snug text-[var(--color-text)]"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      {site.vision}
                    </p>
                  ) : (
                    <Pending label="Official vision statement" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                      Mission
                    </h2>
                    {site.mission && <SampleBadge label="Draft, pending approval" />}
                  </div>
                  {site.mission && site.mission.length > 0 ? (
                    <ol className="list-decimal list-outside pl-5 space-y-2 text-[var(--color-text-muted)] leading-relaxed">
                      {site.mission.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <Pending label="Official mission statement" />
                  )}
                </div>
              </FadeIn>
            </div>

            {aboutPhoto && (
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)]">
                  <Image
                    src={aboutPhoto.src}
                    alt={aboutPhoto.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  {aboutPhoto.caption && (
                    <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-white/85 bg-black/30 rounded-full px-3 py-1 backdrop-blur-sm">
                      {aboutPhoto.caption}
                    </span>
                  )}
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </section>

      {/* Structure diagram */}
      <section className="section-padding-sm bg-[var(--color-surface-raised)]">
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <SectionHeading as="h2" eyebrow="Structure" title="PT KTS structure" />
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col items-center gap-6">
              {/* PT KTS node */}
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-8 py-5 text-center shadow-[var(--shadow-sm)]">
                <span className="font-display text-lg font-medium text-[var(--color-text)]">PT KTS</span>
              </div>

              {/* support arrow */}
              <div className="flex flex-col items-center text-[var(--color-text-faint)]">
                <span className="text-xs uppercase tracking-widest">supports</span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
                  <path d="M8 0v20M2 15l6 7 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* ESIC Network node */}
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-dark)] px-8 py-5 text-center">
                <span className="font-display text-lg font-medium text-[var(--color-canvas)]">{site.esicNetwork.name}</span>
                <p className="mt-1 text-xs text-[var(--color-dark-muted)]">
                  {site.esicNetwork.activities.map((a) => a.name).join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-4 text-center md:text-left">
                  Business lines
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
                  Business units
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
            <SectionHeading as="h2" eyebrow="Team" title="The PT KTS team" />
          </FadeIn>
          <FadeIn className="max-w-2xl">
            <Pending label="Team members' roles, photos, and who will be featured on this site" />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
