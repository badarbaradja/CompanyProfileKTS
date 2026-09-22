import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90svh] flex flex-col justify-center overflow-hidden bg-[var(--color-canvas)]"
    >
      {/* Background geometry */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Accent circle */}
        <div
          className="absolute right-[-8%] top-[-12%] w-[55vw] max-w-[800px] aspect-square rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-[var(--color-accent)]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  PT Kappa Technology Solution
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.08}>
              <h1
                id="hero-heading"
                className="font-bold text-[var(--color-text)] leading-[1.08] tracking-[-0.03em] mb-6"
                style={{ fontSize: "var(--text-display)" }}
              >
                From Research to{" "}
                <span
                  className="relative"
                  style={{ color: "var(--color-accent)" }}
                >
                  Real-World
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)] opacity-30 rounded-full"
                    aria-hidden="true"
                  />
                </span>{" "}
                Solutions.
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.16}>
              <p
                className="text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-[52ch]"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                We turn research and engineering ideas into practical
                technology for real-world impact.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.24}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  id="hero-cta-primary"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-150"
                >
                  Explore Products
                  <ArrowRight />
                </Link>
                <Link
                  href="/about"
                  id="hero-cta-secondary"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-[var(--color-text)] border border-[var(--color-border-strong)] hover:bg-[var(--color-border)] transition-colors duration-150"
                >
                  Discover KTS
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: hero visual */}
          <FadeIn delay={0.18} direction="left">
            <div className="relative">
              <HeroVisual />
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-canvas))",
        }}
      />
    </section>
  );
}

/** Premium hero visual — CSS/SVG art representing industrial processing technology */
function HeroVisual() {
  return (
    <div className="relative aspect-square max-w-[500px] mx-auto">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-[var(--color-border)] opacity-60"
        style={{ transform: "rotate(-3deg)" }}
        aria-hidden="true"
      />

      {/* Main card surface */}
      <div className="relative rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[0_8px_60px_rgba(0,0,0,0.06)] overflow-hidden aspect-square flex flex-col items-center justify-center p-10">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg className="w-full h-full">
            <defs>
              <pattern id="vis-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#111" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vis-pattern)" />
          </svg>
        </div>

        {/* Central machine illustration */}
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[220px] relative z-10"
          aria-label="Technology concept illustration"
          role="img"
        >
          {/* Base platform */}
          <rect x="60" y="210" width="160" height="12" rx="4" fill="#E7E7E3" />

          {/* Main chamber */}
          <rect x="80" y="120" width="120" height="90" rx="8" fill="white" stroke="#E7E7E3" strokeWidth="1.5" />

          {/* Chamber inlet pipe */}
          <rect x="110" y="95" width="16" height="30" rx="4" fill="white" stroke="#E7E7E3" strokeWidth="1.5" />
          <rect x="116" y="80" width="4" height="18" rx="2" fill="var(--color-accent)" />

          {/* Chamber outlet pipe */}
          <rect x="154" y="95" width="16" height="30" rx="4" fill="white" stroke="#E7E7E3" strokeWidth="1.5" />
          <rect x="160" y="80" width="4" height="18" rx="2" fill="#D0D0CB" />

          {/* Inner chamber detail */}
          <rect x="96" y="136" width="88" height="58" rx="5" fill="#F5F5F3" stroke="#E7E7E3" strokeWidth="1" />

          {/* Process arrows inside chamber */}
          <g stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M108 162h16M124 155l10 7-10 7" />
            <path d="M148 162h16M164 155l10 7-10 7" />
          </g>

          {/* Status dot */}
          <circle cx="190" cy="130" r="5" fill="var(--color-accent)" opacity="0.8" />

          {/* Control panel */}
          <rect x="88" y="178" width="104" height="28" rx="4" fill="#F5F5F3" stroke="#E7E7E3" strokeWidth="1" />
          <circle cx="110" cy="192" r="4" fill="var(--color-accent)" opacity="0.6" />
          <circle cx="126" cy="192" r="4" fill="#E7E7E3" />
          <rect x="142" y="187" width="36" height="10" rx="3" fill="#E7E7E3" />

          {/* Input label */}
          <text x="106" y="76" textAnchor="middle" fontSize="8" fill="var(--color-accent)" fontFamily="system-ui" fontWeight="600">IN</text>

          {/* Output label */}
          <text x="162" y="76" textAnchor="middle" fontSize="8" fill="#9B9B9B" fontFamily="system-ui" fontWeight="600">OUT</text>

          {/* Process flow label */}
          <rect x="60" y="52" width="160" height="22" rx="6" fill="var(--color-accent)" opacity="0.06" />
          <text x="140" y="66" textAnchor="middle" fontSize="9" fill="var(--color-accent)" fontFamily="system-ui" fontWeight="700" letterSpacing="1">CARBONIZATION SYSTEM</text>

          {/* Prototype badge */}
          <rect x="96" y="226" width="88" height="16" rx="4" fill="var(--color-accent)" opacity="0.1" />
          <text x="140" y="237" textAnchor="middle" fontSize="7.5" fill="var(--color-accent)" fontFamily="system-ui" fontWeight="700" letterSpacing="0.5">PROTOTYPE — CONCEPT ONLY</text>
        </svg>

        {/* Card footer */}
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
            PT KTS Technology
          </span>
          <span className="text-[10px] text-[var(--color-text-faint)]">
            v0.1 — Concept
          </span>
        </div>
      </div>
    </div>
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
