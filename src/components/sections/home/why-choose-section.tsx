import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { brandStory } from "@/data/site-content";
import { homeStrengths } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";

export async function WhyChooseSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.why");

  return (
    <SectionWrapper variant="dark" id="why-us">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={pickLocalized(brandStory, locale)}
            align="start"
            dark
          />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {homeStrengths.map((item, i) => (
            <MotionWrapper key={item.id} delay={i * 0.08}>
              <li className="rounded-xl border border-pearl/10 bg-pearl/5 p-5 backdrop-blur-sm">
                <h3 className="font-heading text-lg text-gold-light">
                  {pickLocalized(item.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/70">
                  {pickLocalized(item.description, locale)}
                </p>
              </li>
            </MotionWrapper>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
