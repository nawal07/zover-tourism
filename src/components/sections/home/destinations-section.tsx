import { getLocale, getTranslations } from "next-intl/server";
import { DestinationCard } from "@/components/cards/destination-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { featuredDestinations } from "@/data/home-content";
import { Link } from "@/i18n/navigation";

export async function DestinationsSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.destinations");

  return (
    <SectionWrapper id="destinations">
      <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="start"
          className="mx-0 max-w-none"
        />
        <ScrollReveal>
          <Link
            href={ROUTES.services}
            className="inline-flex items-center gap-1 text-[0.82rem] tracking-[0.08em] text-pearl/50 transition-colors hover:border-b hover:border-gold hover:text-gold"
          >
            {t("viewAll")} →
          </Link>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="grid grid-cols-2 gap-3 auto-rows-[200px] sm:gap-4 md:grid-cols-4 md:auto-rows-[260px] lg:grid-cols-5 lg:auto-rows-[400px] lg:gap-4 [&>*:nth-child(1)]:lg:row-span-2">
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} locale={locale} />
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
