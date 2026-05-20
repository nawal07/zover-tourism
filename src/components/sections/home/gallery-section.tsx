import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { galleryImages } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

export async function GallerySection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.gallery");

  return (
    <SectionWrapper variant="sand" id="gallery">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-12 grid auto-rows-[130px] grid-cols-2 gap-2 sm:auto-rows-[160px] sm:gap-3 md:auto-rows-[200px] lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <MotionWrapper
            key={img.id}
            delay={i * 0.06}
            className={cn("relative overflow-hidden rounded-xl", img.span)}
          >
            <Image
              src={img.src}
              alt={pickLocalized(img.alt, locale)}
              fill
              sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-midnight/0 transition-colors duration-300 hover:bg-midnight/20"
              aria-hidden
            />
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
