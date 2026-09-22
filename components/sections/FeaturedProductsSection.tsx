import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/content/products";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <section id="produk-unggulan" aria-labelledby="produk-unggulan-heading" className="section-padding-sm">
      <Container>
        <FadeIn className="max-w-2xl mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            as="h2"
            eyebrow="Produk Unggulan"
            title="Sebagian produk dan layanan kami"
          />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.06}
        >
          {featured.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10">
          <Link
            href="/produk"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline"
          >
            Lihat semua produk & layanan →
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
