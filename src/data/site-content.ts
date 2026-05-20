import type { LocalizedString, SEOContent } from "@/types/content";

/** CMS-ready content objects — swap with Sanity queries in Phase 4+ */
export const homeSEO: SEOContent = {
  title: {
    en: "Zover International Travel & Tourism | Premium Saudi Travel",
    ar: "زوفر العالمية للسفر والسياحة | سفر فاخر في السعودية",
  },
  description: {
    en: "Gateway to extraordinary travel since 2004. Flights, luxury accommodation, bespoke tours, VIP services, and Vision 2030-aligned experiences.",
    ar: "بوابتكم لتجارب سفر استثنائية منذ 2004. تذاكر طيران، إقامة فاخرة، برامج سياحية مخصصة، خدمات VIP، وتجارب متوافقة مع رؤية 2030.",
  },
};

export const brandStory: LocalizedString = {
  en: "In a world brimming with opportunities, Zover International Travel and Tourism was established in 2004 to be your gateway to extraordinary travel experiences across Saudi Arabia and the region.",
  ar: "في عالم مليء بالفرص والاكتشافات، تأسست شركة زوفر العالمية للسفر والسياحة عام 2004 لتكون نافذتكم إلى تجارب سفر استثنائية في المملكة والمنطقة.",
};

export const coreValues = [
  {
    id: "innovation",
    title: { en: "Innovation", ar: "الابتكار" },
    description: {
      en: "Cutting-edge booking systems and tailored solutions.",
      ar: "أنظمة حجز متطورة وحلول مخصصة.",
    },
  },
  {
    id: "quality",
    title: { en: "Quality", ar: "الجودة" },
    description: {
      en: "Meticulous attention to every detail of your journey.",
      ar: "اهتمام دقيق بكل تفاصيل رحلتكم.",
    },
  },
  {
    id: "transparency",
    title: { en: "Transparency", ar: "الشفافية" },
    description: {
      en: "Trust and clarity at every step of your travel.",
      ar: "ثقة ووضوح في كل خطوة من رحلتكم.",
    },
  },
] as const;
