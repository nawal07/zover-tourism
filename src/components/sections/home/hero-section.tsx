"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/brand/brand-logo";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/rtl";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1469854523086-cc02e5d916c2?w=1920&q=85";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const common = useTranslations("common");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative -mt-[calc(var(--nav-h)+env(safe-area-inset-top,0px))] min-h-[100svh] overflow-hidden text-pearl lg:-mt-[calc(var(--nav-h-lg)+env(safe-area-inset-top,0px))]"
    >
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-midnight/75 via-midnight/55 to-midnight/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(232,119,34,0.25), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(63,61,139,0.4), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="container-luxury relative z-10 flex min-h-[100svh] flex-col justify-center pb-[max(5rem,env(safe-area-inset-bottom))] pt-24 sm:pt-28 lg:pt-32">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 lg:hidden"
        >
          <BrandLogo onDark priority />
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-light"
        >
          {t("eyebrow")}
        </m.p>

        <m.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display max-w-4xl text-balance text-[clamp(2rem,6.5vw+1rem,4.5rem)] leading-[1.08] sm:text-6xl sm:leading-[1.1] lg:text-7xl"
        >
          {t("title")}
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-pearl/85 sm:mt-6 sm:text-lg"
        >
          {t("subtitle")}
        </m.p>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 font-display text-2xl text-brand-gold sm:text-3xl"
        >
          {common("tagline")}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <LinkButton
            href={ROUTES.services}
            size="lg"
            className="w-full min-h-12 touch-manipulation sm:w-auto sm:min-h-0"
          >
            {common("cta.explore")}
          </LinkButton>
          <LinkButton
            href={ROUTES.contact}
            variant="outline"
            size="lg"
            className="w-full min-h-12 touch-manipulation sm:w-auto sm:min-h-0"
          >
            {common("cta.contact")}
          </LinkButton>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-h-12 w-full items-center justify-center rounded-md border border-pearl/30 px-6 text-sm tracking-wide text-pearl transition-colors hover:border-brand-green hover:bg-brand-green/25 touch-manipulation sm:w-auto"
          >
            {common("cta.whatsapp")}
          </a>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 hidden items-center gap-6 border-t border-pearl/15 pt-6 sm:flex sm:gap-8 sm:pt-8 lg:mt-16"
        >
          <div>
            <p className="font-display text-3xl text-pearl">2004</p>
            <p className="text-xs uppercase tracking-widest text-pearl/50">
              {t("statFounded")}
            </p>
          </div>
          <div className="h-10 w-px bg-pearl/20" aria-hidden />
          <div>
            <p className="font-display text-3xl text-pearl">2030</p>
            <p className="text-xs uppercase tracking-widest text-pearl/50">
              {t("statVision")}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
