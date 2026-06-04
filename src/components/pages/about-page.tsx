import { getLocale, getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/sections/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/constants/site";
import {
  aboutIntro,
  aboutMilestones,
  aboutTeam,
  targetCustomers,
  targetSegments,
} from "@/data/about-content";
import { visionMission, homeStrengths } from "@/data/home-content";
import { coreValues } from "@/data/site-content";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

export async function AboutPageContent() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("pages.about");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-6">
          {aboutIntro.map((paragraph, i) => (
            <MotionWrapper key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-pearl/65">
                {pickLocalized(paragraph, locale)}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="sand">
        <div className="grid gap-6 md:grid-cols-3">
          {aboutMilestones.map((m, i) => (
            <MotionWrapper key={m.year} delay={i * 0.1}>
              <article className="rounded-xl border border-border bg-card border border-pearl/8 p-6 text-center">
                <p className="font-display text-4xl text-gold">{m.year}</p>
                <h3 className="mt-3 font-heading text-lg text-pearl">
                  {pickLocalized(m.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {pickLocalized(m.description, locale)}
                </p>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-2">
          {[visionMission.vision, visionMission.mission].map((block, i) => (
            <MotionWrapper key={block.title.en} delay={i * 0.1}>
              <article className="h-full rounded-xl border border-border p-8">
                <h2 className="font-display text-2xl text-pearl">
                  {pickLocalized(block.title, locale)}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  {pickLocalized(block.body, locale)}
                </p>
              </article>
            </MotionWrapper>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {coreValues.map((v) => (
            <li
              key={v.id}
              className="rounded-lg bg-card px-5 py-4 text-center"
            >
              <p className="font-heading text-pearl">
                {pickLocalized(v.title, locale)}
              </p>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <SectionHeading
          eyebrow={t("teamEyebrow")}
          title={t("teamTitle")}
        />
        <MotionWrapper className="mx-auto mt-8 max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-pearl/80">
            {pickLocalized(aboutTeam, locale)}
          </p>
        </MotionWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow={t("segmentsEyebrow")}
          title={t("segmentsTitle")}
          description={t("segmentsDescription")}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {targetSegments.map((seg, i) => (
            <MotionWrapper key={seg.id} delay={i * 0.06}>
              <li className="h-full rounded-xl border border-border bg-card border border-pearl/8 p-6">
                <h3 className="font-heading text-lg text-pearl">
                  {pickLocalized(seg.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pickLocalized(seg.description, locale)}
                </p>
              </li>
            </MotionWrapper>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper variant="sand">
        <SectionHeading
          eyebrow={t("clientsEyebrow")}
          title={t("clientsTitle")}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {targetCustomers.map((c, i) => (
            <MotionWrapper key={c.title.en} delay={i * 0.1}>
              <article
                className={cn(
                  "rounded-xl border border-gold/20 bg-card border border-pearl/8 p-8",
                  "border-s-4 border-s-gold",
                )}
              >
                <h3 className="font-display text-2xl text-pearl">
                  {pickLocalized(c.title, locale)}
                </h3>
                <p className="mt-3 text-muted">
                  {pickLocalized(c.description, locale)}
                </p>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow={t("strengthsEyebrow")}
          title={t("strengthsTitle")}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {homeStrengths.map((s, i) => (
            <MotionWrapper key={s.id} delay={i * 0.08}>
              <li className="flex gap-4 rounded-lg border border-border p-5">
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-heading text-gold"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-pearl">
                    {pickLocalized(s.title, locale)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {pickLocalized(s.description, locale)}
                  </p>
                </div>
              </li>
            </MotionWrapper>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <LinkButton href={ROUTES.contact}>{t("cta")}</LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
