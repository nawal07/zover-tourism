import { getTranslations } from "next-intl/server";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { partnerPlaceholders } from "@/data/home-content";

export async function PartnersSection() {
  const t = await getTranslations("home.partners");

  return (
    <SectionWrapper id="partners" className="!py-20">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <ScrollReveal className="mt-12 overflow-hidden">
        <div className="flex animate-marquee gap-0 whitespace-nowrap motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-3 motion-reduce:whitespace-normal">
          {[...partnerPlaceholders, ...partnerPlaceholders].map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="mx-2 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-pearl/8 bg-card px-8 py-3 text-[0.85rem] font-semibold tracking-[0.04em] text-pearl/60 transition-colors hover:border-gold hover:text-gold"
            >
              <span aria-hidden>{partner.icon}</span>
              {partner.name}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
