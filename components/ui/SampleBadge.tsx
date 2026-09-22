import { cn } from "@/lib/utils";

interface SampleBadgeProps {
  label?: string;
  className?: string;
}

/**
 * Neutral marker for placeholder catalog/profile content — see
 * REVISION v0.6 part C.1. Distinct from StatusBadge (which communicates
 * development status): this marks a block of content as example data
 * or an unapproved draft, not yet a verified fact.
 */
export function SampleBadge({ label = "Sample data", className }: SampleBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-border)] text-[var(--color-text-muted)] border border-[var(--color-border-strong)]",
        className
      )}
    >
      {label}
    </span>
  );
}
