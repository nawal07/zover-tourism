import type { ReactNode } from "react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { cn } from "@/lib/utils";

type CtaBlockProps = {
  children: ReactNode;
  className?: string;
};

export function CtaBlock({ children, className }: CtaBlockProps) {
  return (
    <MotionWrapper
      delay={0.15}
      className={cn("flex flex-wrap items-center gap-4", className)}
    >
      {children}
    </MotionWrapper>
  );
}
