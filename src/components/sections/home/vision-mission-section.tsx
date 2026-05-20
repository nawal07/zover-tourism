import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { coreValues } from "@/data/site-content";
import { visionMission } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

export async function VisionMissionSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.vision");

  return (
    <SectionWrapper variant="sand" id="vision">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[visionMission.vision, visionMission.mission].map((block, i) => (
          <MotionWrapper key={block.title.en} delay={i * 0.1}>
            <article className="h-full rounded-xl border border-border bg-pearl p-8 shadow-soft">
              <h3 className="font-display text-2xl text-navy">
                {pickLocalized(block.title, locale)}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {pickLocalized(block.body, locale)}
              </p>
            </article>
          </MotionWrapper>
        ))}
      </div>

      <div className="mt-12">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-gold">
          {t("valuesTitle")}
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {coreValues.map((value, i) => (
            <MotionWrapper key={value.id} delay={0.1 + i * 0.08}>
              <li
                className={cn(
                  "rounded-lg border border-border bg-pearl/80 px-5 py-6 text-center",
                )}
              >
                <p className="font-heading text-lg text-midnight">
                  {pickLocalized(value.title, locale)}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {pickLocalized(value.description, locale)}
                </p>
              </li>
            </MotionWrapper>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
