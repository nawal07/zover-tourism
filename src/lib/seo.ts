import type { Metadata } from "next";
import type { Locale } from "@/constants/site";
import { SITE_CONFIG } from "@/constants/site";
import type { SEOContent } from "@/types/content";

type BuildMetadataOptions = {
  locale: Locale;
  seo: SEOContent;
  path?: string;
};

export function buildPageMetadata({
  locale,
  seo,
  path = "",
}: BuildMetadataOptions): Metadata {
  const title = seo.title[locale];
  const description = seo.description[locale];
  const url = `${SITE_CONFIG.baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_CONFIG.baseUrl}/en${path}`,
        ar: `${SITE_CONFIG.baseUrl}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
  };
}
