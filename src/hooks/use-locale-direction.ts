import type { Locale } from "@/constants/site";

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}
