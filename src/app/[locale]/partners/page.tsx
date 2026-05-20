import { setRequestLocale } from "next-intl/server";
import { PartnersPageContent } from "@/components/pages/partners-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.partners,
    path: "/partners",
  });
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PartnersPageContent />;
}
