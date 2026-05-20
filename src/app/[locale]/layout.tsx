import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LocaleShell } from "@/components/layout/locale-shell";
import { SiteChrome } from "@/components/layout/site-chrome";
import { PageSeo } from "@/components/seo/page-seo";
import { SITE_CONFIG, type Locale } from "@/constants/site";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return SITE_CONFIG.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2a2858",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <LocaleShell locale={locale as Locale}>
      <NextIntlClientProvider messages={messages}>
        <PageSeo />
        <div className="flex min-h-full flex-col">
          <SiteChrome>{children}</SiteChrome>
        </div>
      </NextIntlClientProvider>
    </LocaleShell>
  );
}
