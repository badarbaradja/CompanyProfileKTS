import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovation | PT KTS",
  description:
    "How PT Kappa Technology Solution turns research into engineered, validated technology products.",
};

export default function InnovationPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Innovation
            </span>
          </div>

          <h1
            className="font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Innovation at KTS
          </h1>

          <p
            className="text-[var(--color-text-muted)] leading-relaxed mb-8"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            We develop technology by connecting research, engineering, and
            practical application. Every innovation at KTS follows a
            disciplined path from research question to validated product.
          </p>

          <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] mb-10">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              ℹ️ Detailed innovation content — research background, technology
              pipeline, and project documentation — will be added in a future
              update.
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
