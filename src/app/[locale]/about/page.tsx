import { setRequestLocale } from "next-intl/server";
import { AboutPageContent } from "@/components/pages/about-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.about,
    path: "/about",
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageContent />;
}
