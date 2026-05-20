import { setRequestLocale } from "next-intl/server";
import { ServicesPageContent } from "@/components/pages/services-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.services,
    path: "/services",
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesPageContent />;
}
