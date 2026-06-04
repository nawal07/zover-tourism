"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/constants/site";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function LanguageSwitcher({
  variant = "dark",
  className,
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("common.language");
  const targetLocale: Locale = locale === "en" ? "ar" : "en";

  const styles =
    variant === "light"
      ? "border-pearl/12 bg-pearl/8 text-pearl/70 hover:border-gold hover:text-gold"
      : "border-border bg-card text-pearl/70 hover:border-gold hover:text-gold";

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      className={cn(
        "font-lang inline-flex min-h-10 min-w-[3rem] items-center justify-center rounded-full border px-3.5 py-2 text-[0.78rem] tracking-[0.06em] transition-all duration-300 touch-manipulation",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        styles,
        className,
      )}
      aria-label={`${t("current")} — switch to ${t("switchTo")}`}
    >
      {t("switchTo")}
    </Link>
  );
}
