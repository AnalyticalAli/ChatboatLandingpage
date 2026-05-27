import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("section-badge", className)}>{children}</span>
  );
}
