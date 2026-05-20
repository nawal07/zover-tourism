import { getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/rtl";

export async function ContactCtaSection() {
  const t = await getTranslations("home.contactCta");
  const common = await getTranslations("common");

  return (
    <SectionWrapper variant="dark" id="contact-cta">
      <div className="mx-auto max-w-3xl text-center">
        <MotionWrapper>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-light">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-balance text-4xl text-pearl sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pearl/75">
            {t("description")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={ROUTES.contact} size="lg">
              {common("cta.contact")}
            </LinkButton>
            <LinkButton href={ROUTES.inquiry} variant="outline" size="lg">
              {t("inquiry")}
            </LinkButton>
            <a
              href={getWhatsAppUrl(SITE_CONFIG.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-brand-green px-6 text-sm font-heading tracking-wide text-pearl transition-opacity hover:opacity-90"
            >
              {common("cta.whatsapp")}
            </a>
          </div>
          <p className="mt-8 text-sm text-pearl/50">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-gold-light hover:underline"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </p>
        </MotionWrapper>
      </div>
    </SectionWrapper>
  );
}
