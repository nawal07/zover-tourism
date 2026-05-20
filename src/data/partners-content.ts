/**
 * Partner logo slots — add PNG/SVG files to `public/partners/{id}.png`
 * and set `logo` path. Until then, initials placeholder is shown.
 */
export type PartnerSlot = {
  id: string;
  name: string;
  /** e.g. `/partners/saudia.png` — optional until assets are added */
  logo?: string;
  category: "airline" | "hotel" | "government" | "corporate";
};

export const partnerCategories = {
  airline: { en: "Airlines", ar: "شركات الطيران" },
  hotel: { en: "Hotels", ar: "الفنادق" },
  government: { en: "Government", ar: "حكومي" },
  corporate: { en: "Corporate", ar: "شركات" },
} as const;

/** Placeholder grid — replace logos in public/partners/ when ready */
export const partnerSlots: PartnerSlot[] = [
  { id: "saudia", name: "Saudia", category: "airline", logo: "/partners/saudia.png" },
  { id: "emirates", name: "Emirates", category: "airline", logo: "/partners/emirates.png" },
  { id: "qatar", name: "Qatar Airways", category: "airline", logo: "/partners/qatar.png" },
  { id: "etihad", name: "Etihad", category: "airline", logo: "/partners/etihad.png" },
  { id: "marriott", name: "Marriott", category: "hotel", logo: "/partners/marriott.png" },
  { id: "hilton", name: "Hilton", category: "hotel", logo: "/partners/hilton.png" },
  { id: "accor", name: "Accor", category: "hotel", logo: "/partners/accor.png" },
  { id: "hyatt", name: "Hyatt", category: "hotel", logo: "/partners/hyatt.png" },
  { id: "tourism", name: "Ministry of Tourism", category: "government", logo: "/partners/tourism.png" },
  { id: "neom", name: "NEOM", category: "corporate", logo: "/partners/neom.png" },
  { id: "aramco", name: "Aramco", category: "corporate", logo: "/partners/aramco.png" },
  { id: "stc", name: "stc", category: "corporate", logo: "/partners/stc.png" },
];
