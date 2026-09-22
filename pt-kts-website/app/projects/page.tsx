import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | PT KTS",
  description: "Applications and implementation projects from PT Kappa Technology Solution.",
};

export default function ProjectsPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Projects
            </span>
          </div>
          <h1 className="font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "var(--text-h1)" }}>
            Projects &amp; Applications
          </h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8" style={{ fontSize: "var(--text-body-lg)" }}>
            Implementation projects and real-world applications of KTS technology.
          </p>
          <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              Project information will be published as implementations are completed and approved for public disclosure.
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
