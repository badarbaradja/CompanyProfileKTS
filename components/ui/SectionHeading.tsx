import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Optional — per DESIGN.md, not every section needs one. No decorative line. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

/**
 * Heading pattern for section/page intros. Deliberately plain — no
 * eyebrow underline, no forced use on every section (see DESIGN.md
 * section 15). `title` accepts JSX so callers can add an inline
 * italic accent word where it earns its place.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h1",
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-3">
          {eyebrow}
        </p>
      )}

      <Heading
        className="leading-[1.1] tracking-tight mb-4"
        style={{ fontSize: Heading === "h1" ? "var(--text-h1)" : "var(--text-h2)" }}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={cn(
            "text-[var(--color-text-muted)] leading-relaxed",
            centered && "mx-auto max-w-2xl"
          )}
          style={{ fontSize: "var(--text-body-lg)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
