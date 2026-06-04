"use client";

import Image from "next/image";
import { useState } from "react";
import type { PartnerSlot } from "@/data/partners-content";
import { cn } from "@/lib/utils";

type PartnerLogoCardProps = {
  partner: PartnerSlot;
};

export function PartnerLogoCard({ partner }: PartnerLogoCardProps) {
  const [imgError, setImgError] = useState(false);
  const showLogo = partner.logo && !imgError;

  const initials = partner.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-24 items-center justify-center rounded-xl border border-border bg-card p-4 sm:h-28 sm:p-6",
        "transition-all duration-300 hover:border-gold/40 hover:shadow-soft",
      )}
    >
      {showLogo ? (
        <Image
          src={partner.logo!}
          alt={partner.name}
          width={140}
          height={56}
          className="max-h-14 w-auto object-contain opacity-90 grayscale transition-all duration-300 hover:grayscale-0"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-center">
          <span
            className="flex size-12 items-center justify-center rounded-lg bg-card font-heading text-sm text-pearl/50"
            aria-hidden
          >
            {initials}
          </span>
          <span className="text-xs font-heading tracking-wide text-muted">
            {partner.name}
          </span>
        </div>
      )}
    </div>
  );
}
