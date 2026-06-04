import { IMAGES } from "@/constants/images";
import type { LocalizedString } from "@/types/content";

export type HomeDestination = {
  id: string;
  image: string;
  imageAlt: LocalizedString;
  name: LocalizedString;
  tagline: LocalizedString;
  layout?: "tall" | "large" | "default";
};

export type HomeService = {
  id: string;
  icon: "plane" | "hotel" | "compass" | "car" | "shield" | "crown";
  title: LocalizedString;
  description: LocalizedString;
};

export type HomeStrength = {
  id: string;
  num: string;
  emoji: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const heroStats = [
  { id: "destinations", value: 120, suffix: "+", labelKey: "statDestinations" as const },
  { id: "years", value: 20, suffix: "", labelKey: "statYears" as const },
  { id: "travelers", value: 15, suffix: "K+", labelKey: "statTravelers" as const },
  { id: "partners", value: 50, suffix: "+", labelKey: "statPartners" as const },
] as const;

export const featuredDestinations: HomeDestination[] = [
  {
    id: "alula",
    layout: "tall",
    image: IMAGES.destinations.alula,
    imageAlt: { en: "AlUla sandstone formations", ar: "تكوينات العلا الحجرية" },
    name: { en: "AlUla", ar: "العلا" },
    tagline: { en: "Heritage & wonder", ar: "تراث وعجائب" },
  },
  {
    id: "dubai",
    layout: "large",
    image: IMAGES.destinations.dubai,
    imageAlt: { en: "Dubai skyline", ar: "أفق دبي" },
    name: { en: "Dubai", ar: "دبي" },
    tagline: { en: "Skyline & luxury", ar: "أفق ورفاهية" },
  },
  {
    id: "paris",
    image: IMAGES.destinations.paris,
    imageAlt: { en: "Paris at golden hour", ar: "باريس في الساعة الذهبية" },
    name: { en: "Paris", ar: "باريس" },
    tagline: { en: "Timeless romance", ar: "رومانسية خالدة" },
  },
  {
    id: "riyadh",
    layout: "large",
    image: IMAGES.destinations.riyadh,
    imageAlt: { en: "Riyadh skyline at dusk", ar: "أفق الرياض عند الغروب" },
    name: { en: "Riyadh", ar: "الرياض" },
    tagline: { en: "Capital of ambition", ar: "عاصمة الطموح" },
  },
  {
    id: "red-sea",
    image: IMAGES.destinations.redSea,
    imageAlt: { en: "Red Sea luxury coast", ar: "ساحل البحر الأحمر الفاخر" },
    name: { en: "Red Sea", ar: "البحر الأحمر" },
    tagline: { en: "Coastal elegance", ar: "أناقة ساحلية" },
  },
  {
    id: "switzerland",
    image: IMAGES.destinations.switzerland,
    imageAlt: { en: "Swiss alpine lake", ar: "بحيرة سويسرية جبلية" },
    name: { en: "Switzerland", ar: "سويسرا" },
    tagline: { en: "Alpine serenity", ar: "هدوء جبلي" },
  },
];

export const homeServices: HomeService[] = [
  {
    id: "flights",
    icon: "plane",
    title: { en: "Flights & Charters", ar: "الطيران والرحلات الخاصة" },
    description: {
      en: "Domestic and international ticketing, private jets, and charter arrangements.",
      ar: "تذاكر محلية ودولية، طيران خاص، وتنظيم رحلات تشارتر.",
    },
  },
  {
    id: "hotels",
    icon: "hotel",
    title: { en: "Luxury Stays", ar: "إقامة فاخرة" },
    description: {
      en: "Curated hotels worldwide with trusted reviews and bespoke suites.",
      ar: "فنادق مختارة حول العالم مع تقييمات موثوقة وأجنحة مخصصة.",
    },
  },
  {
    id: "tours",
    icon: "compass",
    title: { en: "Tours & Cruises", ar: "جولات وكروز" },
    description: {
      en: "Custom itineraries, cultural landmarks, and premium cruise experiences.",
      ar: "برامج مخصصة، معالم ثقافية، وتجارب كروز راقية.",
    },
  },
  {
    id: "transport",
    icon: "car",
    title: { en: "Transport", ar: "النقل والمواصلات" },
    description: {
      en: "Airport transfers, private chauffeurs, and group transportation.",
      ar: "توصيل المطارات، سائقون خاصون، ونقل للمجموعات.",
    },
  },
  {
    id: "insurance",
    icon: "shield",
    title: { en: "Visas & Insurance", ar: "تأشيرات وتأمين" },
    description: {
      en: "Travel insurance, visa assistance, and international driving licenses.",
      ar: "تأمين السفر، التأشيرات، ورخص القيادة الدولية.",
    },
  },
  {
    id: "vip",
    icon: "crown",
    title: { en: "VIP & MICE", ar: "VIP والفعاليات" },
    description: {
      en: "Personal travel advisors, corporate events, and exclusive packages.",
      ar: "مستشارو سفر شخصيون، فعاليات الشركات، وباقات حصرية.",
    },
  },
];

export const homeStrengths: HomeStrength[] = [
  {
    id: "expertise",
    num: "01",
    emoji: "🎯",
    title: { en: "Deep Expertise", ar: "خبرة عميقة" },
    description: {
      en: "20+ years of specialized knowledge delivering innovative, tailored solutions for every traveler.",
      ar: "أكثر من 20 عاماً من المعرفة المتخصصة وحلول مبتكرة لكل مسافر.",
    },
  },
  {
    id: "technology",
    num: "02",
    emoji: "⚡",
    title: { en: "Advanced Technology", ar: "تقنية متقدمة" },
    description: {
      en: "Cutting-edge booking systems for precise, prompt service — available 24/7.",
      ar: "أنظمة حجز متطورة لخدمة دقيقة وسريعة — على مدار الساعة.",
    },
  },
  {
    id: "partnerships",
    num: "03",
    emoji: "🌐",
    title: { en: "Global Partnerships", ar: "شراكات عالمية" },
    description: {
      en: "Strategic alliances with leading airlines and hotels at competitive rates worldwide.",
      ar: "تحالفات مع أبرز شركات الطيران والفنادق بأسعار تنافسية.",
    },
  },
  {
    id: "vision",
    num: "04",
    emoji: "🛡️",
    title: { en: "Vision 2030 Aligned", ar: "مواكبة رؤية 2030" },
    description: {
      en: "Supporting Saudi Arabia's global ambitions through excellence and tourism innovation.",
      ar: "دعم طموحات المملكة العالمية عبر التميز والابتكار السياحي.",
    },
  },
];

export const partnerPlaceholders = [
  { name: "Saudia", icon: "✈️" },
  { name: "Emirates", icon: "✈️" },
  { name: "Qatar Airways", icon: "✈️" },
  { name: "Marriott", icon: "🏨" },
  { name: "Hilton", icon: "🏨" },
  { name: "Accor", icon: "🏨" },
  { name: "Ministry of Tourism", icon: "🏛️" },
  { name: "NEOM", icon: "🌊" },
  { name: "Turkish Airlines", icon: "✈️" },
  { name: "IHG", icon: "🏨" },
  { name: "flydubai", icon: "✈️" },
  { name: "Flynas", icon: "✈️" },
] as const;

export const testimonials = [
  {
    id: "1",
    rating: 5,
    quote: {
      en: "Zover handled every detail of our corporate retreat flawlessly — from flights to VIP ground transport.",
      ar: "تولت زوفر كل تفاصيل ملتقى شركتنا بإتقان — من الطيران إلى النقل الفاخر.",
    },
    author: { en: "Corporate Client", ar: "عميل شركات" },
    role: { en: "Riyadh", ar: "الرياض" },
  },
  {
    id: "2",
    rating: 5,
    quote: {
      en: "Our honeymoon itinerary was beyond expectations. True luxury, true care.",
      ar: "برنامج شهر العسل فاق التوقعات. فخامة حقيقية وعناية حقيقية.",
    },
    author: { en: "Private Traveler", ar: "مسافر خاص" },
    role: { en: "Jeddah", ar: "جدة" },
  },
  {
    id: "3",
    rating: 5,
    quote: {
      en: "Twenty years of trust. Zover remains our family's travel partner.",
      ar: "عشرون عاماً من الثقة. زوفر لا تزال شريكنا في السفر.",
    },
    author: { en: "Family Traveler", ar: "عائلة مسافرة" },
    role: { en: "Dammam", ar: "الدمام" },
  },
] as const;

export const visionMission = {
  vision: {
    title: { en: "Our Vision", ar: "رؤيتنا" },
    body: {
      en: "To keep pace with Saudi Vision 2030 through excellence and innovation — redefining travel while supporting the Kingdom's global stature.",
      ar: "مواكبة رؤية المملكة 2030 بالتميز والابتكار — إعادة تعريف السفر ودعم مكانة المملكة عالمياً.",
    },
  },
  mission: {
    title: { en: "Our Mission", ar: "رسالتنا" },
    body: {
      en: "Comprehensive travel services that elevate every journey through innovation, quality, and attention to detail.",
      ar: "خدمات سفر متكاملة ترتقي بكل رحلة عبر الابتكار والجودة والاهتمام بالتفاصيل.",
    },
  },
};

export const luxuryBanner = {
  image: IMAGES.luxuryBanner,
  imageAlt: {
    en: "Serene lake surrounded by mountains",
    ar: "بحيرة هادئة محاطة بالجبال",
  },
  title: {
    en: "Journeys that inspire",
    ar: "رحلات تُلهم",
  },
  subtitle: {
    en: "Where inspiration meets adventure — crafted for discerning travelers across the Gulf and beyond.",
    ar: "حيث يلتقي الإلهام بالمغامرة — لمسافرين مميزين في الخليج وحول العالم.",
  },
};

export const galleryImages = [
  {
    id: "g1",
    src: IMAGES.gallery.travel,
    alt: { en: "Desert highway at sunset", ar: "طريق صحراوي عند الغروب" },
    span: "md:col-span-2",
  },
  {
    id: "g2",
    src: IMAGES.gallery.dubai,
    alt: { en: "Dubai skyline", ar: "أفق دبي" },
    span: "",
  },
  {
    id: "g3",
    src: IMAGES.gallery.resort,
    alt: { en: "Luxury resort pool", ar: "مسبح منتجع فاخر" },
    span: "",
  },
  {
    id: "g4",
    src: IMAGES.gallery.flight,
    alt: { en: "Aircraft wing above clouds", ar: "جناح طائرة فوق السحب" },
    span: "",
  },
  {
    id: "g5",
    src: IMAGES.gallery.beach,
    alt: { en: "Tropical beach resort", ar: "منتجع شاطئي استوائي" },
    span: "md:col-span-2",
  },
] as const;
