import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import type { HomeDestination } from "@/data/home-content";
import type { Locale } from "@/constants/site";
import { pickLocalized } from "@/lib/localized";
import { cn } from "@/lib/utils";

type DestinationCardProps = {
  destination: HomeDestination;
  locale: Locale;
  index?: number;
};

export function DestinationCard({
  destination,
  locale,
  index = 0,
}: DestinationCardProps) {
  return (
    <MotionWrapper delay={index * 0.08} className="h-full">
      <article className="group relative h-full min-h-[220px] overflow-hidden rounded-xl sm:min-h-[280px] md:min-h-[320px]">
        <Image
          src={destination.image}
          alt={pickLocalized(destination.imageAlt, locale)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-xl text-pearl sm:text-2xl">
                {pickLocalized(destination.name, locale)}
              </h3>
              <p className="mt-1 text-sm text-pearl/70">
                {pickLocalized(destination.tagline, locale)}
              </p>
            </div>
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full border border-pearl/30",
                "text-pearl transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-pearl",
              )}
              aria-hidden
            >
              <ArrowUpRight className="size-4 rtl:-scale-x-100" />
            </span>
          </div>
        </div>
      </article>
    </MotionWrapper>
  );
}
