import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  variant?: "default" | "dark" | "sand";
};

const variantStyles = {
  default: "bg-cream",
  dark: "bg-midnight text-pearl",
  sand: "bg-sand",
} as const;

export function SectionWrapper({
  id,
  children,
  className,
  as: Component = "section",
  variant = "default",
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn("section-padding", variantStyles[variant], className)}
    >
      <div className="container-luxury">{children}</div>
    </Component>
  );
}
