import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * About section — uses only verified/provisional information from CONTENT.md.
 * No invented bios, titles, or company history.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-[var(--color-canvas)]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Layered card stack */}
              <div
                className="absolute inset-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] opacity-50"
                aria-hidden="true"
                style={{ transform: "rotate(2deg)" }}
              />
              <div
                className="absolute inset-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] opacity-75"
                aria-hidden="true"
                style={{ transform: "rotate(-1deg)" }}
              />
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_4px_40px_rgba(0,0,0,0.05)]">
                {/* Founders grid */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-6">
                  Founders supplied by the team
                </p>
                <div className="space-y-4 mb-8">
                  {["Abrar", "Mukhammad Ramdlan KI", "Tri Ayodha"].map(
                    (name) => (
                      <div
                        key={name}
                        className="flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-full bg-[var(--color-border)] flex items-center justify-center shrink-0">
                          <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                            {name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-[var(--color-text)]">
                          {name}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="border-t border-[var(--color-border)] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
                    Team
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Galuh Intan Khumaira",
                      "Febianeu Putri Agna",
                      "Aisha Laila Mardiyah",
                      "Badar Zaki Baradja",
                    ].map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] text-[var(--color-text-faint)]">
                    Founder roles and public details are to be confirmed.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  About KTS
                </span>
              </div>

              <h2
                id="about-heading"
                className="font-bold leading-tight tracking-tight mb-6"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Technology built from the ground up.
              </h2>

              <div
                className="space-y-4 text-[var(--color-text-muted)] leading-relaxed mb-8"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                <p>
                  PT Kappa Technology Solution is a technology and innovation
                  company focused on transforming research and engineering ideas
                  into practical products and real-world solutions.
                </p>
                <p>
                  We believe that the most important technology is technology
                  that actually works — validated, deployable, and useful to the
                  people who need it.
                </p>
              </div>

              <p className="text-xs text-[var(--color-text-faint)] italic mb-8">
                Note: Company description is provisional draft copy. Official
                company information will be updated after team review.
              </p>

              <Link
                href="/about"
                id="about-cta"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:gap-3 transition-all duration-200"
              >
                Learn more about KTS
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
