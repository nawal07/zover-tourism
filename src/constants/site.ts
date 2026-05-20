export const SITE_CONFIG = {
  name: "Zover International Travel & Tourism",
  nameAr: "زوفر العالمية للسفر والسياحة",
  legalName: "Zover International Travel and Tourism",
  foundedYear: 2004,
  defaultLocale: "en" as const,
  locales: ["en", "ar"] as const,
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zuvar.com.sa",
  contact: {
    email: "info@zuvar.com.sa",
    phones: ["+966504235805", "+966550534946"],
    address: {
      en: "Al Madinah Al Munawwarah Road, Al Badeiah District, Riyadh, Saudi Arabia",
      ar: "طريق المدينة المنورة، حي البديعة، الرياض، المملكة العربية السعودية",
    },
    whatsapp: "+966504235805",
  },
  social: {
    instagram: "#",
    linkedin: "#",
    x: "#",
  },
} as const;

export type Locale = (typeof SITE_CONFIG.locales)[number];
