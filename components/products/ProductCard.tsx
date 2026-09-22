import Link from "next/link";
import Image from "next/image";
import { StatusBadge } from "@/components/ui/Badge";
import { site } from "@/content/site";
import { getSampleProductPhoto } from "@/content/photos";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

/**
 * Editorial, photo-first product card — per DESIGN.md section 7.
 * No fake prices, ratings, or reviews. Photos are sample photography
 * (see REVISION v0.6 part C.2) marked with a "Sample" corner badge;
 * a product without a photo falls back to the intentional placeholder.
 */
export function ProductCard({ product }: ProductCardProps) {
  const unit = site.businessUnits.find((u) => u.slug === product.unit)!;
  const photo = getSampleProductPhoto(product.images[0] ?? "");

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-[var(--color-surface)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
      aria-label={`View ${product.name}`}
    >
      {photo ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isSample && (
            <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-widest text-white/90 bg-black/40 rounded-full px-2.5 py-1 backdrop-blur-sm">
              Sample
            </span>
          )}
        </div>
      ) : (
        <PlaceholderPhoto unitName={unit.name} />
      )}

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <StatusBadge status={product.status} />
          <span className="text-xs font-medium text-[var(--color-text-faint)]">
            {product.type === "service" ? "Service" : "Product"}
          </span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
          {unit.name}
        </span>
        <h3 className="font-display text-xl font-medium text-[var(--color-text)] leading-snug mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
          {product.summary}
        </p>

        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
          <span>View details</span>
          <ArrowRight />
        </div>
      </div>
    </Link>
  );
}

/**
 * Intentional "photo coming soon" placeholder — a solid ink-tinted
 * panel with a visible label, never a fake machine illustration.
 */
function PlaceholderPhoto({ unitName }: { unitName: string }) {
  return (
    <div className="relative aspect-[4/3] bg-[var(--color-dark)] overflow-hidden flex items-center justify-center">
      <span className="font-display italic text-2xl text-white/25">{unitName}</span>
      <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-widest text-white/50 bg-white/10 rounded-full px-2.5 py-1">
        Photo coming soon
      </span>
    </div>
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
