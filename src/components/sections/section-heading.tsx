import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <MotionWrapper
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs uppercase tracking-[0.3em]",
            dark ? "text-gold-light" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-balance text-[clamp(1.625rem,3.5vw+1rem,3rem)] sm:text-4xl lg:text-5xl",
          dark ? "text-pearl" : "text-midnight",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-pearl/75" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </MotionWrapper>
  );
}
