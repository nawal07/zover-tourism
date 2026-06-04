import { getLocale, getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { homeStrengths } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";

export async function WhyChooseSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.why");

  return (
    <SectionWrapper variant="elevated" id="why-us">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        descriptionClassName="mx-auto text-center"
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        {homeStrengths.map((item, i) => (
          <ScrollReveal key={item.id} as="li" delay={i * 100}>
            <article className="group relative overflow-hidden rounded-[20px] border border-pearl/6 bg-card p-6 transition-all duration-400 hover:-translate-y-2 hover:border-gold/20 hover:bg-purple/8 sm:p-8">
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-purple via-gold to-yellow transition-transform duration-400 group-hover:scale-x-100"
                aria-hidden
              />
              <p
                className="font-display text-[3.5rem] font-black leading-none text-pearl/12 select-none"
                aria-hidden
              >
                {item.num}
              </p>
              <span className="mb-4 block text-[1.8rem]" aria-hidden>
                {item.emoji}
              </span>
              <h3 className="text-base font-semibold text-pearl">
                {pickLocalized(item.title, locale)}
              </h3>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-pearl/40">
                {pickLocalized(item.description, locale)}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </ul>
    </SectionWrapper>
  );
}
