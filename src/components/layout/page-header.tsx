import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "gradient-hero-page border-b border-pearl/6 pb-12 pt-24 text-pearl sm:pb-14 sm:pt-28 lg:pb-20 lg:pt-32",
        className,
      )}
      aria-labelledby="page-title"
    >
      <div className="container-luxury">
        <ScrollReveal>
          {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
          <h1
            id="page-title"
            className="font-display max-w-3xl text-balance font-black leading-tight text-[clamp(2rem,4vw+1.25rem,3.75rem)] sm:text-5xl lg:text-6xl"
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <em className="gradient-text-accent not-italic font-black">
                  {titleHighlight}
                </em>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-pearl/60 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </ScrollReveal>
      </div>
    </section>
  );
}
