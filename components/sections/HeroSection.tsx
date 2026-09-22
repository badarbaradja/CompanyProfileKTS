import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { UnitLogo } from "@/components/brand/Logo";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--color-canvas)]"
    >
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div
          className="absolute right-[-8%] top-[-12%] w-[55vw] max-w-[800px] aspect-square rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10 py-20 lg:py-28">
        {/* Text */}
        <div className="max-w-3xl">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[var(--color-accent)]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                {site.legalName}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              id="hero-heading"
              className="font-bold text-[var(--color-text)] leading-[1.1] tracking-[-0.03em] mb-6"
              style={{ fontSize: "var(--text-display)" }}
            >
              {site.tagline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-[60ch]"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              {site.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/layanan"
                id="hero-cta-primary"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
              >
                Lihat Layanan Kami
                <ArrowRight />
              </Link>
              <Link
                href="/produk"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-[var(--color-text)] border border-[var(--color-border-strong)] hover:bg-[var(--color-border)] transition-colors duration-150"
              >
                Jelajahi Produk
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Unit logo strip — real structure, not a fictional illustration */}
        <FadeIn delay={0.3} direction="up">
          <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
              Tiga unit usaha PT KTS
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              {site.businessUnits.map((unit) => (
                <UnitLogo key={unit.slug} unit={unit} className="h-8 opacity-80" />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
