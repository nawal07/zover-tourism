import { getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { partnerPlaceholders } from "@/data/home-content";

export async function PartnersSection() {
  const t = await getTranslations("home.partners");

  return (
    <SectionWrapper variant="sand" id="partners">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-12 overflow-hidden">
        <div className="flex animate-marquee gap-6 whitespace-nowrap motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-3 motion-reduce:whitespace-normal sm:gap-8">
          {[...partnerPlaceholders, ...partnerPlaceholders].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex min-w-[140px] items-center justify-center rounded-lg border border-border bg-pearl px-6 py-4 font-heading text-sm tracking-wide text-navy-soft/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <MotionWrapper className="mt-10 text-center">
        <LinkButton href={ROUTES.partners} variant="outline">
          {t("cta")}
        </LinkButton>
      </MotionWrapper>
    </SectionWrapper>
  );
}
