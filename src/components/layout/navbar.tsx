"use client";

import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
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
  const transparent = isHome && !scrolled && !mobileOpen;
  const drawerOffset = locale === "ar" ? "-100%" : "100%";

  return (
    <>
      <header
        className={cn(
          "safe-nav-pt fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "bg-transparent"
            : "border-b border-border/60 bg-cream/92 shadow-soft backdrop-blur-md",
        )}
        role="banner"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-midnight"
        >
          {t("a11y.skipToContent")}
        </a>

        <nav
          className="container-luxury flex h-[var(--nav-h)] items-center justify-between gap-2 sm:gap-4 lg:h-[var(--nav-h-lg)]"
          aria-label={t("a11y.mainNav")}
        >
          <Link
            href={ROUTES.home}
            className="group shrink-0 transition-opacity hover:opacity-90"
            aria-label={t("brandName")}
          >
            <BrandLogo
              variant="full"
              onDark={transparent}
              priority
              className="hidden sm:block"
            />
            <BrandLogo
              variant="icon"
              onDark={transparent}
              priority
              className="sm:hidden"
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== ROUTES.home && pathname.startsWith(item.href));

              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                      transparent && !active
                        ? "text-pearl/85 hover:text-gold-light"
                        : "text-midnight/75 hover:text-gold",
                      active && "text-gold",
                    )}
                  >
                    {t(`nav.${item.key}`)}
                    {active && (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher variant={transparent ? "light" : "dark"} />
            <Link href={ROUTES.contact} className="hidden md:block">
              <Button
                size="sm"
                variant={transparent ? "outline" : "primary"}
                className={cn(
                  transparent &&
                    "border-pearl/30 text-pearl hover:bg-pearl/10 hover:text-gold-light",
                )}
              >
                {t("cta.contact")}
              </Button>
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-md transition-colors lg:hidden",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                transparent
                  ? "text-pearl hover:bg-pearl/10"
                  : "text-midnight hover:bg-sand",
              )}
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <m.button
              type="button"
              className="absolute inset-0 bg-midnight/70 backdrop-blur-sm"
              aria-label={t("a11y.closeMenu")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              className="absolute inset-y-0 end-0 flex w-[min(100%,24rem)] max-w-full flex-col bg-cream shadow-luxury"
              initial={{ x: drawerOffset }}
              animate={{ x: 0 }}
              exit={{ x: drawerOffset }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <BrandLogo variant="full" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 text-midnight hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
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
                          "block min-h-12 rounded-lg px-4 py-3.5 text-lg font-heading leading-snug tracking-wide transition-colors",
                          "active:bg-sand",
                          active
                            ? "bg-sand text-gold"
                            : "text-midnight hover:bg-sand/80",
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    </m.li>
                  );
                })}
              </ul>

              <div className="space-y-4 border-t border-border px-5 py-5 sm:px-6 sm:py-6 sm:pb-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
                <LanguageSwitcher variant="dark" className="w-full justify-center" />
                <Link href={ROUTES.contact} onClick={() => setMobileOpen(false)}>
                  <Button className="w-full" size="lg">
                    {t("cta.contact")}
                  </Button>
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
