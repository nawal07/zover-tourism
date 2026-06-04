import type { ReactNode } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG, type Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { getWhatsAppUrl } from "@/lib/rtl";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1";

export async function ContactPageContent() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("pages.contact");
  const address = pickLocalized(SITE_CONFIG.contact.address, locale);

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl text-pearl">
              {t("infoTitle")}
            </h2>
            <ul className="mt-8 space-y-6">
              <ContactInfoItem
                icon={MapPin}
                label={t("addressLabel")}
                value={address}
              />
              <ContactInfoItem
                icon={Mail}
                label={t("emailLabel")}
                value={
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-gold hover:underline"
                    dir="ltr"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                }
              />
              {SITE_CONFIG.contact.phones.map((phone) => (
                <ContactInfoItem
                  key={phone}
                  icon={Phone}
                  label={t("phoneLabel")}
                  value={
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="unicode-bidi-plaintext text-gold hover:underline"
                      dir="ltr"
                    >
                      {phone}
                    </a>
                  }
                />
              ))}
              <ContactInfoItem
                icon={Clock}
                label={t("hoursLabel")}
                value={t("hoursValue")}
              />
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(SITE_CONFIG.contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-h-12 items-center justify-center rounded-md bg-brand-green px-6 text-sm font-heading text-pearl touch-manipulation transition-opacity hover:opacity-90"
              >
                {t("whatsapp")}
              </a>
              <LinkButton href={ROUTES.inquiry} variant="outline">
                {t("inquiryLink")}
              </LinkButton>
            </div>
          </div>

          <MotionWrapper>
            <div className="rounded-xl border border-pearl/8 bg-card p-6 shadow-soft lg:p-8">
              <h2 className="font-heading text-xl text-pearl">
                {t("formTitle")}
              </h2>
              <p className="mt-2 text-sm text-muted">{t("formDescription")}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="elevated">
        <h2 className="font-heading text-xl text-pearl">{t("mapTitle")}</h2>
        <p className="mt-2 text-sm text-muted">{address}</p>
        <div className="relative mt-6 min-h-[240px] overflow-hidden rounded-xl border border-pearl/8 bg-card sm:aspect-video sm:min-h-0">
          <iframe
            title={t("mapTitle")}
            src={MAP_EMBED}
            className="absolute inset-0 size-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-xs text-muted">{t("mapNote")}</p>
      </SectionWrapper>
    </>
  );
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
        <p className="mt-1 text-pearl/80">{value}</p>
      </div>
    </li>
  );
}
