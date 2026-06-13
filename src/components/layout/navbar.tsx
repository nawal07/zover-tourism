"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import { Link, usePathname } from "@/i18n/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { MAIN_NAV } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === ROUTES.home;
  const glass = scrolled || mobileOpen || !isHome;
  const drawerOffset = locale === "ar" ? "-100%" : "100%";

  return (
    <>
      <header
        className={cn(
          "safe-nav-pt fixed inset-x-0 top-0 z-50 transition-all duration-400",
          "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md",
          glass && "py-0",
        )}
        role="banner"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-pearl"
        >
          {t("a11y.skipToContent")}
        </a>

        <nav
          className={cn(
            "container-luxury flex items-center justify-between gap-2 transition-[height,padding] duration-400 sm:gap-4",
            glass ? "h-[4rem] lg:h-[4.25rem]" : "h-[var(--nav-h)] lg:h-[var(--nav-h-lg)]",
          )}
          aria-label={t("a11y.mainNav")}
        >
          <Link
            href={ROUTES.home}
            className="group shrink-0 transition-opacity hover:opacity-90"
            aria-label={t("brandName")}
          >
            <BrandLogo variant="full" priority className="hidden sm:block" />
            <BrandLogo variant="icon" priority className="sm:hidden" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {MAIN_NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== ROUTES.home && pathname.startsWith(item.href));

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link-underline relative text-[0.85rem] font-medium uppercase tracking-[0.08em] text-gray-600 transition-colors duration-300 hover:text-gray-900",
                      active && "text-gray-900",
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={ROUTES.contact}
                className="inline-flex rounded-full bg-gold px-5 py-2.5 text-[0.85rem] font-semibold uppercase tracking-[0.04em] text-pearl transition-all hover:-translate-y-px hover:bg-[#ff8c42] hover:shadow-[0_8px_24px_rgba(249,122,48,0.4)]"
              >
                {t("cta.contact")}
              </Link>
            </li>
            <li>
              <LanguageSwitcher variant="on-light" />
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <LanguageSwitcher variant="on-light" />
            <button
              type="button"
              className="inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            >
              {mobileOpen ? (
                <X className="size-6" aria-hidden />
              ) : (
                <Menu className="size-6" aria-hidden />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label={t("a11y.mobileNav")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 lg:hidden"
          >
            <m.button
              type="button"
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              aria-label={t("a11y.closeMenu")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              className="absolute inset-y-0 end-0 flex w-[min(100%,24rem)] max-w-full flex-col border-s border-pearl/10 bg-dark shadow-luxury"
              initial={{ x: drawerOffset }}
              animate={{ x: 0 }}
              exit={{ x: drawerOffset }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between border-b border-pearl/10 px-6 py-5">
                <BrandLogo variant="full" onDark />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 text-pearl hover:bg-pearl/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  aria-label={t("a11y.closeMenu")}
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {MAIN_NAV.map((item, i) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== ROUTES.home &&
                      pathname.startsWith(item.href));

                  return (
                    <m.li
                      key={item.key}
                      initial={{ opacity: 0, x: locale === "ar" ? -16 : 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block min-h-12 rounded-lg px-4 py-3.5 text-lg font-medium uppercase tracking-wide transition-colors active:bg-pearl/5",
                          active
                            ? "bg-pearl/10 text-gold"
                            : "text-pearl/85 hover:bg-pearl/5 hover:text-pearl",
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    </m.li>
                  );
                })}
              </ul>

              <div className="space-y-4 border-t border-pearl/10 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
                <Link
                  href={ROUTES.contact}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold uppercase tracking-wide text-pearl transition-all hover:bg-[#ff8c42]"
                >
                  {t("cta.contact")}
                </Link>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "pointer-events-none shrink-0 transition-[height] duration-300",
          "h-[calc(var(--nav-h)+env(safe-area-inset-top,0px))] lg:h-[calc(var(--nav-h-lg)+env(safe-area-inset-top,0px))]",
        )}
        aria-hidden
      />
    </>
  );
}
