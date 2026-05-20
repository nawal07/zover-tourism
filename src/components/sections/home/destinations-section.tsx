import { getLocale, getTranslations } from "next-intl/server";
import { DestinationCard } from "@/components/cards/destination-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { featuredDestinations } from "@/data/home-content";

export async function DestinationsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.destinations");

  return (
    <SectionWrapper id="destinations">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {featuredDestinations.map((dest, i) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            locale={locale}
            index={i}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <LinkButton href={ROUTES.inquiry} variant="outline">
          {t("cta")}
        </LinkButton>
      </div>
    </SectionWrapper>
  );
}
