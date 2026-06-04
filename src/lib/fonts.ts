import { DM_Sans, Playfair_Display, Tajawal } from "next/font/google";
import localFont from "next/font/local";

/** English body & UI — DM Sans (reference homepage) */
export const fontDmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

/** English display — Playfair Display (reference homepage) */
export const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/** Arabic label on language switcher (reference) */
export const fontTajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

/** Arabic body */
export const fontAlmarai = localFont({
  src: [
    {
      path: "../../public/fonts/Almarai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Almarai-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Almarai-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-almarai",
  display: "swap",
});

/** Arabic decorative display */
export const fontDigiMaryam = localFont({
  src: "../../public/fonts/Digi-Maryam-Regular.ttf",
  variable: "--font-digi-maryam",
  display: "swap",
  weight: "400",
});

export const fontVariables = [
  fontDmSans.variable,
  fontPlayfair.variable,
  fontTajawal.variable,
  fontAlmarai.variable,
  fontDigiMaryam.variable,
].join(" ");
