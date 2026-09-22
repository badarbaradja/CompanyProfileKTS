import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding">
      <Container>
        <div className="max-w-xl mx-auto text-center py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-4">
            404
          </p>
          <h1
            className="leading-tight tracking-tight mb-4"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Page not found
          </h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            The page you&apos;re looking for isn&apos;t available or has moved.
          </p>
          <Link href="/" className={buttonClasses("primary", "md")}>
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
