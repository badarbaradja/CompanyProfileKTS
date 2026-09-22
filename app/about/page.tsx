import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PT KTS",
  description:
    "Learn about PT Kappa Technology Solution — a technology and innovation company transforming research and engineering ideas into real-world solutions.",
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              About
            </span>
          </div>

          <h1
            className="font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: "var(--text-h1)" }}
          >
            About PT Kappa Technology Solution
          </h1>

          <div
            className="space-y-5 text-[var(--color-text-muted)] leading-relaxed mb-10"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            <p>
              PT Kappa Technology Solution is a technology and innovation
              company focused on transforming research and engineering ideas
              into practical products and real-world solutions.
            </p>
            <p>
              We develop and commercialize technology rooted in systematic
              research and engineering — taking ideas from concept through to
              validated, deployable products.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] mb-10">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              ℹ️ This page is a placeholder. Full company profile, team
              information, and company history will be added after team review.
              Details are intentionally minimal to avoid publishing unverified
              information.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline"
          >
            ← Back to home
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
