// components/layout/Container.tsx
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Max-width container with responsive horizontal padding.
 * Matches the --max-width and --padding-x design tokens.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("container-kts", className)}>
      {children}
    </Tag>
  );
}
