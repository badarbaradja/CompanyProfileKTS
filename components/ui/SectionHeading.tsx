import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared eyebrow + heading + optional description pattern used at the
 * top of every page/section (previously duplicated inline per page).
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
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-5",
          centered && "justify-center"
        )}
      >
        <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {eyebrow}
        </span>
      </div>

      <Heading
        className="font-bold leading-tight tracking-tight mb-5"
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
