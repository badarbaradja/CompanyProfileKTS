import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | PT KTS",
  description: "Updates, technical notes, and perspectives from PT Kappa Technology Solution.",
};

export default function InsightsPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Insights
            </span>
          </div>
          <h1 className="font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "var(--text-h1)" }}>
            Insights
          </h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8" style={{ fontSize: "var(--text-body-lg)" }}>
            Updates, technical notes, and perspectives from the KTS team.
          </p>
          <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              The insights section is being prepared. Articles and updates will be published here.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline">← Back to home</Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
