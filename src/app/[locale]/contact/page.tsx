import { setRequestLocale } from "next-intl/server";
import { ContactPageContent } from "@/components/pages/contact-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.contact,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageContent />;
}
