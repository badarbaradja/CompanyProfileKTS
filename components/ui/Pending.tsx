import { isDraftMode } from "@/lib/draft";
import { cn } from "@/lib/utils";

interface PendingProps {
  /** What data is missing, e.g. "Official WhatsApp number" */
  label: string;
  /** Use "dark" inside a `.section-dark` block — a plain className override
   * can't reliably win against Tailwind's default cascade order. */
  variant?: "light" | "dark";
  className?: string;
}

const VARIANT_CLASSES: Record<"light" | "dark", string> = {
  light: "border-amber-300 bg-amber-50 text-amber-900",
  dark: "border-amber-400/40 bg-amber-400/10 text-amber-200",
};

/**
 * Consistent placeholder marker for missing data — see
 * REVISION_V0.2.md section 5. Renders nothing once
 * NEXT_PUBLIC_DRAFT_MODE is turned off, so the surrounding section
 * disappears cleanly instead of showing a stale placeholder.
 */
export function Pending({ label, variant = "light", className }: PendingProps) {
  if (!isDraftMode()) return null;

  return (
    <div
      role="note"
      data-pending="true"
      className={cn(
        "flex items-start gap-2.5 rounded-[var(--radius-sm)] border px-4 py-3 text-sm",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 opacity-80"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
      <p>
        <span className="font-semibold">Waiting on data:</span> {label}
      </p>
    </div>
  );
}
