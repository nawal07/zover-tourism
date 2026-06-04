"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/site";
import { IMAGES } from "@/constants/images";
import { heroStats } from "@/data/home-content";
import { getWhatsAppUrl } from "@/lib/rtl";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const common = useTranslations("common");

  return (
    <section
      aria-labelledby="hero-heading"
      className="group/hero relative -mt-[calc(var(--nav-h)+env(safe-area-inset-top,0px))] min-h-[100svh] min-h-[700px] overflow-hidden text-pearl lg:-mt-[calc(var(--nav-h-lg)+env(safe-area-inset-top,0px))]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[8000ms] ease-out group-hover/hero:scale-[1.12] scale-[1.08]"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-br from-dark/88 via-purple-dark/65 to-dark/75"
        aria-hidden
      />
      <div className="hero-grid-overlay absolute inset-0" aria-hidden />

      <div
        className="pointer-events-none absolute -start-[5%] -top-[10%] size-[400px] rounded-full bg-purple/40 blur-[80px] animate-float-orb"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute end-[5%] bottom-[10%] size-[300px] rounded-full bg-gold/25 blur-[80px] animate-float-orb [animation-delay:-3s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute end-[20%] top-[40%] size-[200px] rounded-full bg-yellow/20 blur-[80px] animate-float-orb [animation-delay:-5s]"
        aria-hidden
      />

      <div className="container-luxury relative z-10 flex min-h-[calc(100svh-5rem)] max-w-[960px] flex-col items-center justify-center pb-32 pt-28 text-center lg:min-h-[calc(100svh-6rem)] lg:pb-36 lg:pt-32">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/12 px-4 py-1.5 text-[0.78rem] uppercase tracking-[0.12em] text-yellow"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-gold" aria-hidden />
          {t("eyebrow")}
        </m.div>

        <m.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-balance font-black leading-[1.05] text-pearl text-[clamp(3rem,7vw,6.5rem)]"
        >
          {t("titleBefore")}{" "}
          <em className="gradient-text-accent font-black not-italic">
            {t("titleHighlight")}
          </em>
          <br />
          {t("titleAfter")}
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-[560px] text-[1.1rem] font-light leading-[1.7] text-pearl/60"
        >
          {t("subtitle")}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <LinkButton href="/#destinations" size="lg">
            {t("explore")} →
          </LinkButton>
          <LinkButton href={ROUTES.contact} variant="outline" size="lg">
            {t("plan")}
          </LinkButton>
          <a
            href={getWhatsAppUrl(SITE_CONFIG.contact.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-wa inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide text-pearl transition-all touch-manipulation"
          >
            <MessageCircle className="size-4" aria-hidden />
            {common("cta.whatsapp")}
          </a>
        </m.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-pearl/6 bg-dark/85 backdrop-blur-[20px]">
        <div className="container-luxury flex flex-wrap items-center justify-center gap-8 py-6 sm:gap-12 lg:gap-16 lg:py-6">
          {heroStats.map((stat, i) => (
            <m.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-[2rem] font-bold leading-none text-yellow">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-yellow"
                />
              </p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-pearl/40">
                {t(stat.labelKey)}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
