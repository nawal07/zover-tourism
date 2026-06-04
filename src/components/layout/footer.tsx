import { getLocale, getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG, type Locale } from "@/constants/site";
import { Link } from "@/i18n/navigation";
import { FOOTER_NAV_SECONDARY, MAIN_NAV } from "@/lib/navigation";
import { pickLocalized } from "@/lib/localized";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("common");
  const footer = await getTranslations("footer");
  const address = pickLocalized(SITE_CONFIG.contact.address, locale);
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-pearl/5 bg-dark-footer text-pearl"
      role="contentinfo"
    >
      <div className="container-luxury pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] pt-16 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href={ROUTES.home} className="inline-block">
              <BrandLogo variant="full" onDark />
            </Link>
            <p className="mt-5 max-w-xs text-[0.85rem] leading-[1.7] text-pearl/35">
              {footer("tagline")}
            </p>
            <p className="mt-4 inline-block text-[0.72rem] uppercase tracking-[0.12em] text-gold">
              {t("tagline")}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.72rem] uppercase tracking-[0.12em] text-pearl/30">
              {footer("explore")}
            </h2>
            <ul className="mt-5 space-y-2.5">
              {MAIN_NAV.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[0.85rem] text-pearl/50 transition-colors hover:text-gold"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.72rem] uppercase tracking-[0.12em] text-pearl/30">
              {footer("more")}
            </h2>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_NAV_SECONDARY.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-[0.85rem] text-pearl/50 transition-colors hover:text-gold"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.72rem] uppercase tracking-[0.12em] text-pearl/30">
              {footer("contact")}
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-start gap-2 text-[0.82rem] text-pearl/45 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              {SITE_CONFIG.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-2 text-[0.82rem] text-pearl/45 transition-colors hover:text-gold"
                    dir="ltr"
                  >
                    <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                    <span className="unicode-bidi-plaintext">{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <p className="flex items-start gap-2 text-[0.82rem] text-pearl/45">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{address}</span>
                </p>
              </li>
            </ul>
            <dl className="mt-8 space-y-2 text-xs text-pearl/25">
              <div className="flex justify-between gap-4 border-b border-pearl/5 pb-2">
                <dt>{footer("cr")}</dt>
                <dd dir="ltr">1010249001</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-pearl/5 pb-2">
                <dt>{footer("vat")}</dt>
                <dd dir="ltr">310117141500003</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-pearl/5 pt-8 text-center text-[0.78rem] text-pearl/25 sm:flex-row sm:text-start">
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
