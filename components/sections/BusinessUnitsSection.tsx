import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";

const UNIT_TINT: Record<string, string> = {
  "kappa-solution": "#E4F3EA",
  "nara-aquaponics": "#E4EDF6",
  "bumi-hijau": "#F3EFE0",
};

export function BusinessUnitsSection() {
  return (
    <section id="business-units" aria-labelledby="business-units-heading" className="section-padding">
      <Container>
        <FadeIn className="max-w-xl mb-12">
          <SectionHeading
            as="h2"
            eyebrow="Our units"
            title="Three business units"
            description="Each unit runs its own field under PT KTS."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {site.businessUnits.map((unit, i) => (
            <FadeIn key={unit.slug} delay={i * 0.08}>
              <Link
                href={`/products#${unit.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-lg)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 overflow-hidden transition-all duration-300"
              >
                <div
                  className="flex items-center justify-center py-12"
                  style={{ backgroundColor: UNIT_TINT[unit.slug] }}
                >
                  <UnitLogo unit={unit} className="h-14" />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
                    {unit.field}
                  </span>
                  <h3
                    className="font-display font-medium text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200"
                    style={{ fontSize: "var(--text-h4)" }}
                  >
                    {unit.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                    {unit.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {unit.activities.map((activity) => (
                      <span
                        key={activity}
                        className="text-xs text-[var(--color-text-muted)] bg-[var(--color-canvas)] rounded-full px-3 py-1"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
