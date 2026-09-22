import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * An honest, intentional future state until approved project stories exist.
 * This satisfies the homepage application-story slot without inventing work.
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding bg-[var(--color-canvas)]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-20">
          <FadeIn className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Projects & applications
              </span>
            </div>
            <h2
              id="projects-heading"
              className="mb-5 font-bold leading-tight tracking-tight"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Technology is only meaningful in use.
            </h2>
            <p
              className="leading-relaxed text-[var(--color-text-muted)]"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              Project and application stories will be published when their
              details are approved for public disclosure.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)]">
                  Project archive
                </span>
                <span className="border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  In preparation
                </span>
              </div>
              <div className="border-t border-[var(--color-border)] pt-5">
                <p className="max-w-[44ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
                  We are preparing a clearer view of where KTS technology can
                  be applied, without publishing unverified project claims.
                </p>
                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-[gap] duration-200 hover:gap-3"
                >
                  Visit projects
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
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
