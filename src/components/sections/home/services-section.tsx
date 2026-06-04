import { getLocale, getTranslations } from "next-intl/server";
import { ServiceCard } from "@/components/cards/service-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
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
    <SectionWrapper id="services" variant="gradient">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-20">
        <div>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleHighlight={t("titleHighlight")}
            description={t("description")}
            align="start"
            className="mx-0 max-w-none"
          />
          <ScrollReveal className="mt-10">
            <LinkButton href={ROUTES.services} size="md">
              {t("cta")} →
            </LinkButton>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="overflow-hidden rounded-[20px] border border-pearl/6 bg-pearl/6">
            <div className="grid grid-cols-1 gap-px bg-pearl/6 sm:grid-cols-2">
              {homeServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  locale={locale}
                  compact
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
