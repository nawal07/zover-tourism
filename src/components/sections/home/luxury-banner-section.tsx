import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { luxuryBanner } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";

export async function LuxuryBannerSection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("home.luxury");

  return (
    <section className="relative min-h-[70vh] overflow-hidden" aria-labelledby="luxury-title">
      <Image
        src={luxuryBanner.image}
        alt={pickLocalized(luxuryBanner.imageAlt, locale)}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-midnight/55"
        aria-hidden
      />
      <div className="container-luxury relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-24 text-center text-pearl">
        <MotionWrapper>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light">
            {t("eyebrow")}
          </p>
          <h2
            id="luxury-title"
            className="font-display max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl"
          >
            {pickLocalized(luxuryBanner.title, locale)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pearl/80">
            {pickLocalized(luxuryBanner.subtitle, locale)}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
