import type { LocalizedString } from "@/types/content";

export const aboutIntro: LocalizedString[] = [
  {
    en: "In a world brimming with opportunities and discoveries, Zover International Travel and Tourism was established in 2004 to be your gateway to extraordinary travel experiences. With confident strides and an innovative vision, Zover has become one of the leading travel and tourism companies in Saudi Arabia and the region.",
    ar: "في عالم مليء بالفرص والاكتشافات، تأسست شركة زوفر العالمية للسفر والسياحة عام 2004 لتكون نافذتكم إلى تجارب سفر استثنائية. بخطوات واثقة ورؤية مبتكرة، أصبحت زوفر من أبرز شركات السياحة والسفر في المملكة والمنطقة.",
  },
  {
    en: "At Zover, we believe travel is more than moving from one place to another — it is a rich experience blending inspiration and adventure. From flight bookings to luxury accommodation, guided tours to bespoke journeys, we ensure comfort and exceptional experiences by every measure.",
    ar: "نؤمن في زوفر أن السفر ليس مجرد انتقال من مكان إلى آخر، بل تجربة ثرية تمزج بين الإلهام والمغامرة. من حجز التذاكر إلى الإقامة الفاخرة، والجولات السياحية إلى الرحلات المصممة خصيصاً، نضمن راحة عملائنا وتجربة استثنائية بكل المقاييس.",
  },
];

export const aboutTeam: LocalizedString = {
  en: "Our team is the driving force behind Zover's success. With exceptional expertise and passion, they deliver tailored services with meticulous attention to detail. Leveraging advanced digital booking systems, they build lasting client relationships founded on trust, quality, and immediate support throughout every journey.",
  ar: "فريق العمل هو القوة الدافعة وراء نجاح زوفر. بخبرة وشغف استثنائيين، يقدمون خدمات مخصصة مع عناية بأدق التفاصيل. ومن خلال أحدث أنظمة الحجز الرقمية، يبنون علاقات قوية مع العملاء تقوم على الثقة والجودة والدعم الفوري طوال الرحلة.",
};

export const aboutMilestones = [
  {
    year: "2004",
    title: { en: "Founded in Riyadh", ar: "التأسيس في الرياض" },
    description: {
      en: "Zover International Travel & Tourism opens as your gateway to the world.",
      ar: "انطلاق زوفر العالمية للسفر والسياحة كبوابة نحو العالم.",
    },
  },
  {
    year: "2030",
    title: { en: "Vision 2030 aligned", ar: "مواكبة رؤية 2030" },
    description: {
      en: "Innovative services supporting the Kingdom's tourism transformation.",
      ar: "خدمات مبتكرة تدعم تحول المملكة السياحي.",
    },
  },
  {
    year: "2034",
    title: { en: "Global events ready", ar: "جاهزون للفعاليات العالمية" },
    description: {
      en: "Strategic partner for major international hosting aspirations.",
      ar: "شريك استراتيجي لتطلعات استضافة الفعاليات العالمية.",
    },
  },
] as const;

export const targetSegments = [
  {
    id: "leisure",
    title: { en: "Leisure Travelers", ar: "السياح الترفيهيون" },
    description: {
      en: "Cities, beaches, mountains, and heritage landmarks within the Kingdom and abroad.",
      ar: "المدن والشواطئ والجبال والمعالم التراثية داخل المملكة وخارجها.",
    },
  },
  {
    id: "business",
    title: { en: "Business Travel", ar: "سفر الأعمال" },
    description: {
      en: "Conferences, meetings, trade exhibitions, and corporate incentive programs.",
      ar: "المؤتمرات والاجتماعات والمعارض وبرامج حوافز الشركات.",
    },
  },
  {
    id: "luxury",
    title: { en: "Luxury Tourism", ar: "السياحة الفاخرة" },
    description: {
      en: "Private tours, premium hotels, and high-end personalized services.",
      ar: "جولات خاصة وفنادق راقية وخدمات شخصية عالية الجودة.",
    },
  },
  {
    id: "family",
    title: { en: "Family Travel", ar: "السياحة العائلية" },
    description: {
      en: "Entertainment and cultural experiences for families of all ages.",
      ar: "تجارب ترفيهية وثقافية للعائلات بمختلف الأعمار.",
    },
  },
  {
    id: "cultural",
    title: { en: "Cultural Tourism", ar: "السياحة الثقافية" },
    description: {
      en: "Historical sites, exchange programs, and immersive local experiences.",
      ar: "المواقع التاريخية وبرامج التبادل والتجارب المحلية الغامرة.",
    },
  },
  {
    id: "medical",
    title: { en: "Wellness & Medical", ar: "السياحة العلاجية" },
    description: {
      en: "Specialized destinations for treatment and premium healthcare travel.",
      ar: "وجهات متخصصة للعلاج والسفر الصحي الراقي.",
    },
  },
] as const;

export const targetCustomers = [
  {
    title: { en: "Individuals & Families", ar: "الأفراد والعائلات" },
    description: {
      en: "Personalized and unique travel experiences crafted to your passions.",
      ar: "تجارب سفر شخصية وفريدة مصممة وفق شغفكم.",
    },
  },
  {
    title: { en: "Businesses", ar: "الشركات" },
    description: {
      en: "Corporate travel, employee incentives, and event management solutions.",
      ar: "سفر الشركات، حوافز الموظفين، وإدارة الفعاليات.",
    },
  },
] as const;
