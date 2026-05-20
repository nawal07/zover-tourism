import type { LocalizedString } from "@/types/content";
import type { HomeService } from "@/data/home-content";

export type ServiceCategory = {
  id: string;
  icon: HomeService["icon"];
  title: LocalizedString;
  summary: LocalizedString;
  items: LocalizedString[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "flights",
    icon: "plane",
    title: { en: "Flight Ticketing & Trip Organization", ar: "إصدار التذاكر وتنظيم الرحلات" },
    summary: {
      en: "Competitive domestic and international fares with full airline coverage.",
      ar: "أسعار تنافسية للرحلات المحلية والدولية مع تغطية شاملة لشركات الطيران.",
    },
    items: [
      { en: "Domestic and international flight bookings", ar: "حجز تذاكر الطيران المحلية والدولية" },
      { en: "Boarding pass issuance for all routes", ar: "إصدار بطاقات صعود الطائرة" },
      { en: "Reservation confirmation on all airlines", ar: "تأكيد الحجوزات على جميع شركات الطيران" },
      { en: "Private jet and charter flight organization", ar: "تنظيم الطيران الخاص والرحلات التشارتر" },
    ],
  },
  {
    id: "tours",
    icon: "compass",
    title: { en: "Tours, Cruises & Guides", ar: "الجولات والرحلات البحرية" },
    summary: {
      en: "Custom programs with multilingual guides and premium cruise arrangements.",
      ar: "برامج مخصصة مع مرشدين متعددي اللغات وترتيبات كروز راقية.",
    },
    items: [
      { en: "Custom cultural and tourist landmark programs", ar: "برامج زيارة المعالم الثقافية والسياحية" },
      { en: "Cruise trips with accommodation and activities", ar: "رحلات بحرية مع الإقامة والأنشطة" },
      { en: "Qualified multilingual tour guides", ar: "مرشدون سياحيون مؤهلون بعدة لغات" },
      { en: "Honeymoon packages with destination recommendations", ar: "برامج شهر العسل مع اقتراحات الوجهات" },
    ],
  },
  {
    id: "hotels",
    icon: "hotel",
    title: { en: "Hotels & Accommodation", ar: "حجوزات الفنادق والإقامة" },
    summary: {
      en: "Worldwide hotel options with trusted reviews and tailored room types.",
      ar: "خيارات فندقية حول العالم مع تقييمات موثوقة وأنواع غرف مناسبة.",
    },
    items: [
      { en: "Hotel bookings in KSA and worldwide at special rates", ar: "حجوزات فنادق داخل المملكة وحول العالم" },
      { en: "Trusted hotel reviews for informed decisions", ar: "تقييمات موثوقة للفنادق" },
      { en: "Private rooms and family suites", ar: "غرف خاصة وأجنحة عائلية" },
      { en: "Honeymoon and luxury stay planning", ar: "تخطيط إقامة شهر العسل والإقامة الفاخرة" },
    ],
  },
  {
    id: "transport",
    icon: "car",
    title: { en: "Transportation Services", ar: "خدمات النقل والمواصلات" },
    summary: {
      en: "Seamless ground transport from airport transfers to group coaches.",
      ar: "نقل بري سلس من المطارات إلى الحافلات المجهزة للمجموعات.",
    },
    items: [
      { en: "Comfortable airport transfers", ar: "نقل مريح من وإلى المطارات" },
      { en: "Private car rental with or without driver", ar: "تأجير سيارات خاصة مع أو بدون سائق" },
      { en: "Equipped buses for group travel", ar: "حافلات مجهزة للمجموعات" },
      { en: "Meet-and-assist at airports worldwide", ar: "خدمة اللقاء والمساعدة في المطارات" },
    ],
  },
  {
    id: "insurance",
    icon: "shield",
    title: { en: "Insurance, Visas & Documentation", ar: "التأمين والتأشيرات والوثائق" },
    summary: {
      en: "Complete travel protection and documentation support for global journeys.",
      ar: "حماية سفر شاملة ودعم وثائق للرحلات العالمية.",
    },
    items: [
      { en: "Travel insurance — medical, emergencies, luggage", ar: "تأمين سفر — طبي، طوارئ، أمتعة" },
      { en: "European rail pass issuance", ar: "إصدار بطاقات القطار الأوروبي" },
      { en: "Tourist visa assistance — standard and e-visas", ar: "المساعدة في التأشيرات السياحية" },
      { en: "International driving licenses and carnets", ar: "رخص القيادة الدولية ودفاتر المرور" },
    ],
  },
  {
    id: "mice",
    icon: "crown",
    title: { en: "MICE, VIP & Consulting", ar: "الفعاليات وVIP والاستشارات" },
    summary: {
      en: "Corporate events, personal travel advisors, and bespoke luxury packages.",
      ar: "فعاليات الشركات، مستشارو سفر شخصيون، وباقات فاخرة مخصصة.",
    },
    items: [
      { en: "Conferences, seminars, and workshops locally and abroad", ar: "مؤتمرات وندوات وورش عمل" },
      { en: "Full logistical support for corporate events", ar: "دعم لوجستي كامل للفعاليات" },
      { en: "Personal travel advisor from planning to execution", ar: "مستشار سفر شخصي من التخطيط للتنفيذ" },
      { en: "VIP packages — butler services, private charters, luxury rentals", ar: "باقات VIP — خدمات حصرية وطيران خاص" },
      { en: "Custom travel plans and destination consulting", ar: "خطط سفر مخصصة واستشارات الوجهات" },
    ],
  },
];
