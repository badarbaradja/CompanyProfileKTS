import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BusinessUnit } from "@/content/site";

type KTSLogoVariant = "mark" | "full";

interface KTSLogoProps {
  /** "mark" — compact square mark for navbar/footer. "full" — wordmark lockup. */
  variant?: KTSLogoVariant;
  className?: string;
  priority?: boolean;
}

const SOURCES: Record<KTSLogoVariant, { src: string; width: number; height: number }> = {
  mark: { src: "/brand/kts-mark.png", width: 256, height: 223 },
  full: { src: "/brand/kts-logo.png", width: 600, height: 448 },
};

/** Official PT KTS logo, supplied from the meeting slide (public/brand/). */
export function KTSLogo({ variant = "mark", className, priority }: KTSLogoProps) {
  const { src, width, height } = SOURCES[variant];
  return (
    <Image
      src={src}
      alt="PT Kappa Technology Solution"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}

interface UnitLogoProps {
  unit: BusinessUnit;
  className?: string;
}

/** Business-unit logo. Applies mix-blend-multiply for white-background source files. */
export function UnitLogo({ unit, className }: UnitLogoProps) {
  return (
    <Image
      src={unit.logo}
      alt={unit.name}
      width={320}
      height={160}
      className={cn(
        "h-10 w-auto object-contain",
        unit.logoBlend === "multiply" && "mix-blend-multiply",
        className
      )}
    />
  );
}
