import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { PartnerLogoCard } from "@/components/cards/partner-logo-card";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { partnerCategories, partnerSlots } from "@/data/partners-content";

export async function PartnersPageContent() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("pages.partners");

  const categories = ["airline", "hotel", "government", "corporate"] as const;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <SectionWrapper>
        <MotionWrapper>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-pearl/65 sm:text-lg">
            {t("intro")}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted">
            {t("logoNote")}
          </p>
        </MotionWrapper>
      </SectionWrapper>

      {categories.map((cat, catIndex) => {
        const slots = partnerSlots.filter((p) => p.category === cat);
        if (slots.length === 0) return null;

        return (
          <SectionWrapper
            key={cat}
            variant={catIndex % 2 === 0 ? "sand" : "default"}
          >
            <SectionHeading
              title={partnerCategories[cat][locale]}
              align="start"
            />
            <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {slots.map((partner) => (
                <PartnerLogoCard key={partner.id} partner={partner} />
              ))}
            </div>
          </SectionWrapper>
        );
      })}

      <SectionWrapper variant="cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl text-pearl sm:text-3xl">{t("ctaTitle")}</h2>
          <p className="mt-4 text-sm text-pearl/80 sm:text-base">{t("ctaDescription")}</p>
          <div className="mt-8">
            <LinkButton href={ROUTES.contact} size="lg">
              {t("cta")}
            </LinkButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
