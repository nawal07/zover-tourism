import { setRequestLocale } from "next-intl/server";
import { ContactCtaSection } from "@/components/sections/home/contact-cta-section";
import { DestinationsSection } from "@/components/sections/home/destinations-section";
import { GallerySection } from "@/components/sections/home/gallery-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhyChooseSection } from "@/components/sections/home/why-choose-section";
import type { Locale } from "@/constants/site";
import { homeSEO } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  return buildPageMetadata({
    locale: locale as Locale,
    seo: homeSEO,
    path: "",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <DestinationsSection />
      <ServicesSection />
      <WhyChooseSection />
      <PartnersSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactCtaSection />
    </main>
  );
}
