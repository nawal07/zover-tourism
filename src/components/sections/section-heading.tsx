import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  titleHighlightOnNewLine?: boolean;
  description?: string;
  align?: "start" | "center";
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  titleHighlightOnNewLine = false,
  description,
  align = "center",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={cn(
          "font-display text-balance font-black leading-[1.1] text-pearl",
          "text-[clamp(2.2rem,4vw,3.5rem)]",
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {titleHighlightOnNewLine ? <br /> : " "}
            <em className="gradient-text-accent font-black not-italic">
              {titleHighlight}
            </em>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-[520px] text-base font-light leading-[1.7] text-pearl/50 sm:text-[1rem]",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
