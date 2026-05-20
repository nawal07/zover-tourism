import type { Locale } from "@/constants/site";

/** Tailwind classes for direction-aware icon chevrons */
export const chevronFlip = "rtl:-scale-x-100";

export function getWhatsAppUrl(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function localeFontClass(locale: Locale): string {
  return locale === "ar" ? "font-heading" : "font-heading";
}
