import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "outline" | "outline-light";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white border-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)]",
  dark:
    "bg-[var(--color-text)] text-white border-[var(--color-text)] hover:bg-[var(--color-dark-surface)] hover:border-[var(--color-dark-surface)]",
  outline:
    "bg-transparent text-[var(--color-text)] border-[var(--color-border-strong)] hover:bg-[var(--color-border)]",
  "outline-light":
    "bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-3.5 text-base",
};

/**
 * Shared pill-button class string — per DESIGN.md section 7. Used by
 * both the <Button> element below and by <Link>/<a> CTAs, which can't
 * render a <button> but should look identical.
 */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "btn-pill",
    variantClasses[variant],
    sizeClasses[size],
    "disabled:opacity-50 disabled:cursor-not-allowed",
    className
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
