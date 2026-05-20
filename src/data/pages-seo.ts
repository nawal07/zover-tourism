import type { SEOContent } from "@/types/content";

export const pagesSEO = {
  about: {
    title: {
      en: "About Zover | Premium Saudi Travel Since 2004",
      ar: "من نحن | زوفر للسفر والسياحة منذ 2004",
    },
    description: {
      en: "Discover Zover International Travel — leading tourism in Saudi Arabia with innovation, quality, and Vision 2030 alignment.",
      ar: "تعرف على زوفر العالمية للسفر والسياحة — رائدة في المملكة بالابتكار والجودة ومواكبة رؤية 2030.",
    },
  },
  services: {
    title: {
      en: "Travel Services | Flights, Hotels, VIP & MICE",
      ar: "خدماتنا | طيران، فنادق، VIP وفعاليات",
    },
    description: {
      en: "Comprehensive travel services: flight ticketing, luxury stays, tours, visas, insurance, corporate travel, and VIP experiences.",
      ar: "خدمات سفر شاملة: تذاكر طيران، إقامة فاخرة، جوالات، تأشيرات، تأمين، قطاع الأعمال وVIP.",
    },
  },
  partners: {
    title: {
      en: "Our Partners & Clients | Zover",
      ar: "شركاؤنا وعملاؤنا | زوفر",
    },
    description: {
      en: "Trusted by leading organizations across Saudi Arabia and the region.",
      ar: "موثوقون من قبل مؤسسات رائدة في المملكة والمنطقة.",
    },
  },
  contact: {
    title: {
      en: "Contact Zover | Riyadh Travel Experts",
      ar: "اتصل بنا | زوفر الرياض",
    },
    description: {
      en: "Reach Zover in Riyadh for bespoke travel planning. Email, phone, and WhatsApp support.",
      ar: "تواصل مع زوفر في الرياض لتخطيط رحلاتك. بريد إلكتروني، هاتف وواتساب.",
    },
  },
  blog: {
    title: {
      en: "Travel Insights | Zover Blog",
      ar: "رؤى السفر | مدونة زوفر",
    },
    description: {
      en: "Destination guides, travel tips, and luxury tourism insights from Zover.",
      ar: "أدلة الوجهات ونصائح السفر ورؤى السياحة الفاخرة من زوفر.",
    },
    noIndex: true,
  },
  inquiry: {
    title: {
      en: "Travel Inquiry | Plan Your Journey",
      ar: "استفسار سفر | خطط رحلتك",
    },
    description: {
      en: "Submit your travel inquiry for flights, packages, and bespoke itineraries.",
      ar: "أرسل استفسارك للرحلات والبرامج والخطط المخصصة.",
    },
    noIndex: true,
  },
} as const satisfies Record<string, SEOContent>;
