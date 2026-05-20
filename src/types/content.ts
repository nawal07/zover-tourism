import type { Locale } from "@/constants/site";

/** Sanity-ready localized field pattern */
export type LocalizedString = Record<Locale, string>;

export type LocalizedRichText = Record<Locale, string>;

export interface SEOContent {
  title: LocalizedString;
  description: LocalizedString;
  keywords?: LocalizedString;
  ogImage?: string;
  noIndex?: boolean;
}

export interface PageContent {
  slug: string;
  seo: SEOContent;
}

export interface NavItem {
  key: string;
  href: string;
  label: LocalizedString;
}
