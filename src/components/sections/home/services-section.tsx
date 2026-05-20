import { getLocale, getTranslations } from "next-intl/server";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { homeServices } from "@/data/home-content";

export async function ServicesSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.services");

  return (
    <SectionWrapper id="services">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            locale={locale}
            index={i}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <LinkButton href={ROUTES.services}>{t("cta")}</LinkButton>
      </div>
    </SectionWrapper>
  );
}
