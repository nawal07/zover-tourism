import { getTranslations } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/rtl";

export async function ContactCtaSection() {
  const t = await getTranslations("home.contactCta");

  return (
    <SectionWrapper
      variant="cta"
      id="contact-cta"
      className="relative overflow-hidden !py-28 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(249,122,48,0.12), transparent), radial-gradient(ellipse 50% 60% at 80% 50%, rgba(251,196,46,0.08), transparent)",
        }}
        aria-hidden
      />
      <ScrollReveal className="relative z-10 mx-auto max-w-3xl">
        <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
        <h2 className="font-display text-balance font-black leading-[1.1] text-pearl text-[clamp(2.5rem,5vw,4.5rem)]">
          {t("title")}
          <br />
          {t("titleLine2")}{" "}
          <em className="gradient-text-accent font-black not-italic">
            {t("titleHighlight")}
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-[500px] text-base font-light leading-[1.7] text-pearl/55">
          {t("description")}
        </p>
        <p className="mt-2 text-sm font-light text-pearl/40">{t("availability")}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <LinkButton href={ROUTES.contact} size="lg">
            {t("contactTeam")} →
          </LinkButton>
          <LinkButton href={ROUTES.inquiry} variant="outline" size="lg">
            {t("inquiry")}
          </LinkButton>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-wa inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide text-pearl transition-all"
          >
            <MessageCircle className="size-4" aria-hidden />
            {t("whatsapp")}
          </a>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
