import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { UnitLogo } from "@/components/brand/Logo";
import { buttonClasses } from "@/components/ui/Button";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-[var(--color-canvas)]">
      <Container className="pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-5">
                {site.legalName}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1
                id="hero-heading"
                className="leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: "var(--text-display)" }}
              >
                Four business lines,
                <br />
                three business units,
                <br />
                <em className="italic text-[var(--color-accent)]">one innovation network.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p
                className="text-[var(--color-text-muted)] mb-9 leading-relaxed max-w-[52ch]"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                {site.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-wrap gap-3">
                <Link href="/services" className={buttonClasses("primary", "lg")}>
                  See Our Services
                </Link>
                <Link href="/products" className={buttonClasses("outline", "lg")}>
                  Explore Products
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Visual — real unit logos on an intentional placeholder panel, not a fictional product illustration */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative rounded-[var(--radius-xl)] bg-[var(--color-dark)] aspect-[4/5] lg:aspect-[3/4] overflow-hidden flex flex-col items-center justify-center px-8 shadow-[var(--shadow-lg)]">
              <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-widest text-white/45 bg-white/10 rounded-full px-2.5 py-1">
                Photo coming soon
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">
                Our business units
              </p>
              <div className="flex flex-col gap-8 items-center">
                {site.businessUnits.map((unit) => (
                  <UnitLogo key={unit.slug} unit={unit} monochrome className="h-9" />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
