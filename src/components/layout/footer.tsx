import { getLocale, getTranslations } from "next-intl/server";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG, type Locale } from "@/constants/site";
import { Link } from "@/i18n/navigation";
import { FOOTER_NAV_SECONDARY, MAIN_NAV } from "@/lib/navigation";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("common");
  const footer = await getTranslations("footer");
  const address = pickLocalized(SITE_CONFIG.contact.address, locale);
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-midnight text-pearl"
      role="contentinfo"
    >
      <div className="container-luxury pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-16 lg:pb-12 lg:pt-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href={ROUTES.home} className="inline-block">
              <BrandLogo variant="full" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pearl/70">
              {footer("tagline")}
            </p>
            <p className="mt-3 font-display text-lg text-gold-light/90">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <LanguageSwitcher variant="light" />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h2 className="text-xs font-heading uppercase tracking-[0.25em] text-gold">
                {footer("explore")}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {MAIN_NAV.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="relative inline-flex min-h-11 items-center py-2 text-sm text-pearl/75 transition-colors hover:text-gold"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-heading uppercase tracking-[0.25em] text-gold">
                {footer("more")}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAV_SECONDARY.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="relative inline-flex min-h-11 items-center py-2 text-sm text-pearl/75 transition-colors hover:text-gold"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-heading uppercase tracking-[0.25em] text-gold">
                {footer("contact")}
              </h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-start gap-3 text-sm text-pearl/75 transition-colors hover:text-gold"
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    <span>{SITE_CONFIG.contact.email}</span>
                  </a>
                </li>
                {SITE_CONFIG.contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-start gap-3 text-sm text-pearl/75 transition-colors hover:text-gold"
                      dir="ltr"
                    >
                      <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                      <span className="unicode-bidi-plaintext">{phone}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <p className="flex items-start gap-3 text-sm text-pearl/70">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    <span>{address}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-heading uppercase tracking-[0.25em] text-gold">
              {footer("follow")}
            </h2>
            <div className="mt-4 flex gap-3">
              <SocialLink
                href={SITE_CONFIG.social.instagram}
                label="Instagram"
                icon={Share2}
              />
              <SocialLink
                href={SITE_CONFIG.social.linkedin}
                label="LinkedIn"
                icon={Globe}
              />
            </div>
            <dl className="mt-8 space-y-2 text-xs text-pearl/50">
              <div className="flex justify-between gap-4 border-b border-pearl/10 pb-2">
                <dt>{footer("cr")}</dt>
                <dd dir="ltr">1010249001</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-pearl/10 pb-2">
                <dt>{footer("vat")}</dt>
                <dd dir="ltr">310117141500003</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-pearl/10 pt-8 text-center text-xs text-pearl/45 sm:flex-row sm:text-start">
          <p>
            © {year} {locale === "ar" ? SITE_CONFIG.nameAr : SITE_CONFIG.name}.{" "}
            {footer("rights")}
          </p>
          <p>{footer("crafted")}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Mail;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-pearl/20",
        "text-pearl/80 transition-colors hover:border-gold hover:text-gold",
      )}
    >
      <Icon className="size-4" aria-hidden />
    </a>
  );
}
