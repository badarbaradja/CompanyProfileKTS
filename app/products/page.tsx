import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products | PT KTS",
  description:
    "Research-derived technology products from PT Kappa Technology Solution. Currently in development.",
};

export default function ProductsPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Products
            </span>
          </div>

          <h1
            className="font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Innovations in Development
          </h1>

          <p
            className="text-[var(--color-text-muted)] leading-relaxed mb-6"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            PT KTS is currently developing a portfolio of research-derived
            technologies. Product information will be published as each
            solution reaches an appropriate stage of development and
            validation.
          </p>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex gap-3 items-start">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <p className="text-sm text-[var(--color-text-muted)]">
              The entries below are concept placeholders. No specifications,
              pricing, or performance claims have been verified.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
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
