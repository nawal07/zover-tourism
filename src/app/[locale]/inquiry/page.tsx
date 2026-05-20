import { setRequestLocale } from "next-intl/server";
import { InquiryPageContent } from "@/components/pages/inquiry-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.inquiry,
    path: "/inquiry",
  });
}

export default async function InquiryPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <InquiryPageContent />;
}
