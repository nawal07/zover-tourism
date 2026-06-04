import {
  Car,
  Compass,
  Crown,
  Hotel,
  Plane,
  Shield,
  type LucideIcon,
} from "lucide-react";
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
  compact?: boolean;
};

export function ServiceCard({ service, locale, compact }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article
      className={cn(
        "group relative overflow-hidden bg-dark p-6 transition-colors duration-300 sm:p-8",
        "hover:bg-purple/8",
        compact && "border-0",
        !compact &&
          "rounded-xl border border-border bg-card hover:border-gold/20",
      )}
    >
      <span
        className="absolute start-0 top-0 h-0 w-[3px] bg-gradient-to-b from-gold to-purple transition-[height] duration-400 group-hover:h-full"
        aria-hidden
      />
      <span
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold",
          "transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/20",
        )}
      >
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="mt-5 text-base font-semibold tracking-tight text-pearl">
        {pickLocalized(service.title, locale)}
      </h3>
      <p className="mt-2 text-[0.82rem] leading-relaxed text-pearl/40">
        {pickLocalized(service.description, locale)}
      </p>
    </article>
  );
}
