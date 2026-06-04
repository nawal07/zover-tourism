import { getLocale, getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="relative z-10 mb-4 flex gap-0.5 text-[0.85rem] tracking-[0.1em] text-yellow"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export async function TestimonialsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.testimonials");

  return (
    <SectionWrapper id="testimonials" variant="gradient">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
        {testimonials.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 100}>
            <blockquote className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-pearl/6 bg-card p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/20 hover:shadow-luxury sm:p-8">
              <span
                className="pointer-events-none font-display text-[6rem] leading-none text-gold/10"
                aria-hidden
              >
                &ldquo;
              </span>
              <div className="relative -mt-6">
                <StarRating rating={item.rating} />
                <p className="text-[0.92rem] italic leading-[1.7] text-pearl/65">
                  {pickLocalized(item.quote, locale)}
                </p>
              </div>
              <footer className="mt-6 flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple to-gold text-sm font-bold text-pearl"
                  aria-hidden
                >
                  {pickLocalized(item.author, locale).charAt(0)}
                </span>
                <cite className="not-italic">
                  <span className="text-[0.85rem] font-semibold text-pearl">
                    {pickLocalized(item.author, locale)}
                  </span>
                  <span className="mt-0.5 block text-[0.75rem] text-pearl/35">
                    {pickLocalized(item.role, locale)}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
