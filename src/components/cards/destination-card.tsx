import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { HomeDestination } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

type DestinationCardProps = {
  destination: HomeDestination;
  locale: Locale;
};

const layoutClasses: Record<NonNullable<HomeDestination["layout"]>, string> = {
  tall: "md:col-span-2 md:row-span-2",
  large: "md:col-span-2",
  default: "",
};

export function DestinationCard({ destination, locale }: DestinationCardProps) {
  const layout = destination.layout ?? "default";

  return (
    <article
      className={cn(
        "group relative min-h-[220px] overflow-hidden rounded-2xl md:min-h-0",
        layoutClasses[layout],
      )}
    >
      <Image
        src={destination.image}
        alt={pickLocalized(destination.imageAlt, locale)}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent transition-colors duration-400 group-hover:from-purple/80"
        aria-hidden
      />
      <span
        className={cn(
          "absolute end-4 top-4 flex size-9 items-center justify-center rounded-full bg-gold/90 text-sm text-pearl",
          "scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100",
        )}
        aria-hidden
      >
        <ArrowUpRight className="size-4 rtl:-scale-x-100" />
      </span>
      <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-300 group-hover:translate-y-0 sm:p-6">
        <h3 className="font-display text-[1.4rem] font-bold text-pearl">
          {pickLocalized(destination.name, locale)}
        </h3>
        <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.1em] text-yellow">
          {pickLocalized(destination.tagline, locale)}
        </p>
      </div>
    </article>
  );
}
