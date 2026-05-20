import type { ReactNode } from "react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "gradient-hero border-b border-border/30 pb-12 pt-24 text-pearl sm:pb-14 sm:pt-28 lg:pb-20 lg:pt-32",
        className,
      )}
      aria-labelledby="page-title"
    >
      <div className="container-luxury">
        <MotionWrapper>
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-light/90">
              {eyebrow}
            </p>
          )}
          <h1
            id="page-title"
            className="font-display max-w-3xl text-balance text-[clamp(2rem,4vw+1.25rem,3.75rem)] leading-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-pearl/75 sm:mt-5 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </MotionWrapper>
      </div>
    </section>
  );
}
