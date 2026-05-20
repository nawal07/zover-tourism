import type { ReactNode } from "react";
import "./globals.css";

/** Root layout — locale-specific html/body live in `[locale]/layout.tsx` */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
