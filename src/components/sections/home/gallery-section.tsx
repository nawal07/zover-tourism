import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
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
    <SectionWrapper id="gallery" className="!py-24">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <ScrollReveal className="mt-12">
        <div className="grid grid-cols-2 gap-3 auto-rows-[180px] sm:auto-rows-[220px] md:grid-cols-4 md:auto-rows-[220px] md:gap-4 md:[grid-template-rows:220px_300px]">
          {galleryImages.map((img) => (
            <figure
              key={img.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                img.span,
              )}
            >
              <Image
                src={img.src}
                alt={pickLocalized(img.alt, locale)}
                fill
                sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
                className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-purple/70 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="text-[0.8rem] font-semibold text-pearl">
                  {pickLocalized(img.alt, locale)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
