import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/content/products";

export function InnovationsSection() {
  const products = getFeaturedProducts();

  return (
    <section
      id="innovations"
      aria-labelledby="innovations-heading"
      className="section-padding bg-[var(--color-canvas)]"
    >
      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <FadeIn className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Innovations
              </span>
            </div>
            <h2
              id="innovations-heading"
              className="font-bold leading-tight tracking-tight"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Technology in development.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="shrink-0">
            <Link
              href="/products"
              id="innovations-view-all"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              View all products
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Disclosure note */}
        <FadeIn>
          <div className="mb-10 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex gap-3 items-start">
            <InfoIcon />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              <strong className="text-[var(--color-text)] font-medium">Innovations in development.</strong>{" "}
              PT KTS is currently developing a portfolio of research-derived technologies.
              Product information will be published as each solution reaches an appropriate
              stage of development and validation. The entries below are concept placeholders.
            </p>
          </div>
        </FadeIn>

        {/* Product grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}
