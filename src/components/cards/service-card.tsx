import {
  Car,
  Compass,
  Crown,
  Hotel,
  Plane,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import type { HomeService } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

const iconMap: Record<HomeService["icon"], LucideIcon> = {
  plane: Plane,
  hotel: Hotel,
  compass: Compass,
  car: Car,
  shield: Shield,
  crown: Crown,
};

type ServiceCardProps = {
  service: HomeService;
  locale: Locale;
  index?: number;
};

export function ServiceCard({ service, locale, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <MotionWrapper delay={index * 0.06}>
      <article
        className={cn(
          "group h-full rounded-xl border border-border bg-pearl p-6",
          "transition-all duration-300 hover:border-gold/40 hover:shadow-soft",
        )}
      >
        <span className="inline-flex size-12 items-center justify-center rounded-lg bg-navy/8 text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden />
        </span>
        <h3 className="mt-5 font-heading text-lg text-midnight">
          {pickLocalized(service.title, locale)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {pickLocalized(service.description, locale)}
        </p>
      </article>
    </MotionWrapper>
  );
}
