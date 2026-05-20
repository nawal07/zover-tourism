"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
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
      ? "text-pearl/90 hover:text-gold border-pearl/20 hover:border-gold/40"
      : "text-midnight/80 hover:text-gold border-midnight/15 hover:border-gold/50";

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      className={cn(
        "inline-flex min-h-11 min-w-[3rem] items-center justify-center gap-2 rounded-full border px-3.5 py-2 text-xs font-heading tracking-wide transition-colors duration-300 touch-manipulation sm:min-h-10 sm:min-w-0",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        styles,
        className,
      )}
      aria-label={`${t("current")} — switch to ${t("switchTo")}`}
    >
      <Languages className="size-3.5 shrink-0 opacity-80" aria-hidden />
      <span className="hidden sm:inline">{t("switchTo")}</span>
      <span className="sm:hidden">{targetLocale.toUpperCase()}</span>
    </Link>
  );
}
