import localFont from "next/font/local";

/** English luxury display — profile brand font */
export const fontBernadette = localFont({
  src: "../../public/fonts/bernadette.ttf",
  variable: "--font-bernadette",
  display: "swap",
  weight: "400",
});

/** English / bilingual elegant headings */
export const fontElMessiri = localFont({
  src: "../../public/fonts/elmessiri-bold.otf",
  variable: "--font-elmessiri",
  display: "swap",
  weight: "700",
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
  fontBernadette.variable,
  fontElMessiri.variable,
  fontAlmarai.variable,
  fontDigiMaryam.variable,
].join(" ");
