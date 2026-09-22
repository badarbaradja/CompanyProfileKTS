import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { UnitLogo } from "@/components/brand/Logo";
import { getProductsByUnit } from "@/content/products";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Produk",
  description: `Katalog produk dan layanan ${site.legalName}, dikelompokkan per unit usaha.`,
};

export default function ProdukPage() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn className="max-w-2xl mb-8">
          <SectionHeading
            eyebrow="Produk"
            title="Katalog produk & layanan"
            description="Dikelompokkan berdasarkan unit usaha. Foto, spesifikasi teknis, dan skema harga belum tersedia untuk sebagian besar item."
          />
        </FadeIn>

        <FadeIn className="mb-14 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex gap-3 items-start max-w-2xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
          </svg>
          <p className="text-sm text-[var(--color-text-muted)]">
            Deskripsi berikut hanya menjelaskan fungsi umum. Kapasitas, spesifikasi teknis,
            sertifikasi, dan harga belum diverifikasi oleh tim PT KTS.
          </p>
        </FadeIn>

        <div className="space-y-20">
          {site.businessUnits.map((unit) => {
            const unitProducts = getProductsByUnit(unit.slug);
            return (
              <div key={unit.slug} id={unit.slug} className="scroll-mt-[calc(var(--nav-height)+var(--banner-height)+1rem)]">
                <div className="flex items-center gap-4 mb-8">
                  <UnitLogo unit={unit} className="h-9" />
                  <h2 className="font-semibold text-[var(--color-text)]" style={{ fontSize: "var(--text-h3)" }}>
                    {unit.name}
                  </h2>
                </div>

                <StaggerContainer
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  staggerDelay={0.06}
                >
                  {unitProducts.map((product) => (
                    <StaggerItem key={product.slug}>
                      <ProductCard product={product} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
