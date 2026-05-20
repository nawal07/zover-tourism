import type { LocalizedString } from "@/types/content";

export type HomeDestination = {
  id: string;
  image: string;
  imageAlt: LocalizedString;
  name: LocalizedString;
  tagline: LocalizedString;
};

export type HomeService = {
  id: string;
  icon: "plane" | "hotel" | "compass" | "car" | "shield" | "crown";
  title: LocalizedString;
  description: LocalizedString;
};

export type HomeStrength = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const featuredDestinations: HomeDestination[] = [
  {
    id: "alula",
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd9fd228?w=800&q=80",
    imageAlt: { en: "AlUla sandstone formations", ar: "تكوينات العلا الحجرية" },
    name: { en: "AlUla", ar: "العلا" },
    tagline: {
      en: "Heritage & wonder",
      ar: "تراث وعجائب",
    },
  },
  {
    id: "riyadh",
    image:
      "https://images.unsplash.com/photo-1548013146-7249fbf9028f?w=800&q=80",
    imageAlt: { en: "Riyadh skyline at dusk", ar: "أفق الرياض عند الغروب" },
    name: { en: "Riyadh", ar: "الرياض" },
    tagline: { en: "Capital of ambition", ar: "عاصمة الطموح" },
  },
  {
    id: "red-sea",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    imageAlt: { en: "Red Sea luxury coast", ar: "ساحل البحر الأحمر الفاخر" },
    name: { en: "Red Sea", ar: "البحر الأحمر" },
    tagline: { en: "Coastal elegance", ar: "أناقة ساحلية" },
  },
  {
    id: "paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    imageAlt: { en: "Paris at golden hour", ar: "باريس في الساعة الذهبية" },
    name: { en: "Paris", ar: "باريس" },
    tagline: { en: "Timeless romance", ar: "رومانسية خالدة" },
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
    title: { en: "Expertise", ar: "الخبرة" },
    description: {
      en: "A specialized team delivering innovative, tailored solutions.",
      ar: "فريق متخصص يقدم حلولاً مبتكرة ومخصصة.",
    },
  },
  {
    id: "technology",
    title: { en: "Technology", ar: "التقنية" },
    description: {
      en: "Advanced booking systems for precise, prompt service.",
      ar: "أنظمة حجز متطورة لخدمة دقيقة وسريعة.",
    },
  },
  {
    id: "partnerships",
    title: { en: "Partnerships", ar: "الشراكات" },
    description: {
      en: "Global airline and hotel alliances at competitive rates.",
      ar: "تحالفات مع أبرز شركات الطيران والفنادق.",
    },
  },
  {
    id: "support",
    title: { en: "24/7 Support", ar: "دعم متواصل" },
    description: {
      en: "Continuous assistance for seamless travel experiences.",
      ar: "مساندة مستمرة لتجربة سفر سلسة.",
    },
  },
];

export const partnerPlaceholders = [
  "Saudia",
  "Emirates",
  "Qatar Airways",
  "Marriott",
  "Hilton",
  "Accor",
  "Ministry of Tourism",
  "NEOM",
] as const;

export const testimonials = [
  {
    id: "1",
    quote: {
      en: "Zover handled every detail of our corporate retreat flawlessly — from flights to VIP ground transport.",
      ar: "تولت زوفر كل تفاصيل ملتقى شركتنا بإتقان — من الطيران إلى النقل الفاخر.",
    },
    author: { en: "Corporate Client", ar: "عميل شركات" },
    role: { en: "Riyadh", ar: "الرياض" },
  },
  {
    id: "2",
    quote: {
      en: "Our honeymoon itinerary was beyond expectations. True luxury, true care.",
      ar: "برنامج شهر العسل فاق التوقعات. فخامة حقيقية وعناية حقيقية.",
    },
    author: { en: "Private Traveler", ar: "مسافر خاص" },
    role: { en: "Jeddah", ar: "جدة" },
  },
  {
    id: "3",
    quote: {
      en: "Twenty years of trust. Zover remains our family's travel partner.",
      ar: "عشرون عاماً من الثقة. زوفر لا تزال شريكنا في السفر.",
    },
    author: { en: "Family Traveler", ar: "عائلة مسافرة" },
    role: { en: "Dammam", ar: "الدمام" },
  },
] as const;

export const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1469854523086-cc02e5d916c2?w=900&q=80",
    alt: { en: "Desert highway at sunset", ar: "طريق صحراوي عند الغروب" },
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    alt: { en: "Dubai skyline", ar: "أفق دبي" },
    span: "",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    alt: { en: "Luxury resort pool", ar: "مسبح منتجع فاخر" },
    span: "",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    alt: { en: "Aircraft wing above clouds", ar: "جناح طائرة فوق السحب" },
    span: "",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80",
    alt: { en: "Tropical beach resort", ar: "منتجع شاطئي استوائي" },
    span: "lg:col-span-2",
  },
] as const;

export const visionMission = {
  vision: {
    title: { en: "Our Vision", ar: "رؤيتنا" },
    body: {
      en: "To keep pace with Saudi Vision 2030 through excellence and innovation — redefining travel while supporting the Kingdom's global stature, including aspirations for 2034.",
      ar: "مواكبة رؤية المملكة 2030 بالتميز والابتكار — إعادة تعريف السفر ودعم مكانة المملكة عالمياً، بما يشمل تطلعات 2034.",
    },
  },
  mission: {
    title: { en: "Our Mission", ar: "رسالتنا" },
    body: {
      en: "Comprehensive travel services that elevate every journey through innovation, quality, and attention to detail — turning each trip into a unique experience of genuine value.",
      ar: "خدمات سفر متكاملة ترتقي بكل رحلة عبر الابتكار والجودة والاهتمام بالتفاصيل — لتصبح كل رحلة تجربة فريدة ذات قيمة حقيقية.",
    },
  },
};

export const luxuryBanner = {
  image:
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=85",
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
