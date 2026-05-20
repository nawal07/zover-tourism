"use client";

import { MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { SITE_CONFIG, type Locale } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/rtl";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const url = getWhatsAppUrl(SITE_CONFIG.contact.whatsapp);
  const isRtl = locale === "ar";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed z-40 inline-flex size-14 min-h-[3.5rem] min-w-[3.5rem] touch-manipulation items-center justify-center rounded-full",
        "bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))]",
        isRtl
          ? "start-[calc(1rem+env(safe-area-inset-left,0px))]"
          : "end-[calc(1rem+env(safe-area-inset-right,0px))]",
        "max-sm:size-12 max-sm:min-h-12 max-sm:min-w-12 max-sm:bottom-[calc(1rem+env(safe-area-inset-bottom,0px))]",
        isRtl
          ? "max-sm:start-[calc(0.875rem+env(safe-area-inset-left,0px))]"
          : "max-sm:end-[calc(0.875rem+env(safe-area-inset-right,0px))]",
        "bg-[#25D366] text-pearl shadow-luxury transition-transform duration-300",
        "hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        className,
      )}
      aria-label={t("cta.whatsapp")}
    >
      <MessageCircle className="size-6 max-sm:size-5" aria-hidden />
    </a>
  );
}
