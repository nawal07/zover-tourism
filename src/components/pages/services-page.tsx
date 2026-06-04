import { getLocale, getTranslations } from "next-intl/server";
import {
  Car,
  Compass,
  Crown,
  Hotel,
  Plane,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { serviceCategories } from "@/data/services-content";
import type { HomeService } from "@/data/home-content";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

const iconMap: Record<HomeService["icon"], LucideIcon> = {
  plane: Plane,
  hotel: Hotel,
  compass: Compass,
  car: Car,
  shield: Shield,
  crown: Crown,
};

export async function ServicesPageContent() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("pages.services");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <SectionWrapper>
        <p className="mx-auto max-w-3xl text-center text-lg text-muted">
          {t("intro")}
        </p>
      </SectionWrapper>

      <div className="space-y-0">
        {serviceCategories.map((category, index) => {
          const Icon = iconMap[category.icon];
          const isAlt = index % 2 === 1;

          return (
            <SectionWrapper
              key={category.id}
              id={category.id}
              variant={isAlt ? "sand" : "default"}
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <MotionWrapper className="lg:col-span-4">
                  <span className="inline-flex size-14 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold text-pearl">
                    {pickLocalized(category.title, locale)}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {pickLocalized(category.summary, locale)}
                  </p>
                </MotionWrapper>
                <MotionWrapper delay={0.1} className="lg:col-span-8">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li
                        key={item.en}
                        className={cn(
                          "flex items-start gap-3 rounded-lg border border-pearl/8 bg-card p-4",
                        )}
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden
                        />
                        <span className="text-sm leading-relaxed text-pearl/65">
                          {pickLocalized(item, locale)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MotionWrapper>
              </div>
            </SectionWrapper>
          );
        })}
      </div>

      <SectionWrapper variant="cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-pearl sm:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="mt-4 text-base text-pearl/80 sm:text-lg">{t("ctaDescription")}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <LinkButton
              href={ROUTES.inquiry}
              size="lg"
              className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-0"
            >
              {t("ctaInquiry")}
            </LinkButton>
            <LinkButton
              href={ROUTES.contact}
              variant="outline"
              size="lg"
              className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-0"
            >
              {t("ctaContact")}
            </LinkButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
