import { cn } from "@/lib/utils";

export type ProductStatus =
  | "prototype"
  | "in-development"
  | "concept"
  | "coming-soon";

interface BadgeProps {
  status: ProductStatus;
  className?: string;
}

const statusConfig: Record<ProductStatus, { label: string; classes: string }> = {
  prototype: {
    label: "Prototype",
    classes:
      "bg-amber-50 text-amber-700 border border-amber-200",
  },
  "in-development": {
    label: "In Development",
    classes:
      "bg-blue-50 text-blue-700 border border-blue-200",
  },
  concept: {
    label: "Concept",
    classes:
      "bg-[var(--color-border)] text-[var(--color-text-muted)] border border-[var(--color-border-strong)]",
  },
  "coming-soon": {
    label: "Coming Soon",
    classes:
      "bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[#b3d9cf]",
  },
};

/**
 * Status badge for product cards.
 * Clearly communicates that products are provisional / in development.
 */
export function StatusBadge({ status, className }: BadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        config.classes,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" aria-hidden="true" />
      {config.label}
    </span>
  );
}
