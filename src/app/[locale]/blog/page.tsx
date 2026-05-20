import { setRequestLocale } from "next-intl/server";
import { BlogPageContent } from "@/components/pages/blog-page";
import type { Locale } from "@/constants/site";
import { pagesSEO } from "@/data/pages-seo";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: pagesSEO.blog,
    path: "/blog",
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogPageContent />;
}
