import { getLocale, getTranslations } from "next-intl/server";
import { Quote } from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";

export async function TestimonialsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.testimonials");

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <MotionWrapper key={item.id} delay={i * 0.1}>
            <blockquote className="flex h-full flex-col rounded-xl border border-border bg-pearl p-8 shadow-soft">
              <Quote
                className="size-8 text-gold/40"
                strokeWidth={1}
                aria-hidden
              />
              <p className="mt-4 flex-1 leading-relaxed text-navy-soft">
                &ldquo;{pickLocalized(item.quote, locale)}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="font-heading text-midnight">
                    {pickLocalized(item.author, locale)}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {pickLocalized(item.role, locale)}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
