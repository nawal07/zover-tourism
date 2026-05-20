import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  /** Light pill background for dark headers */
  onDark?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  variant = "full",
  className,
  onDark = false,
  priority = false,
}: BrandLogoProps) {
  const isIcon = variant === "icon";
  const width = isIcon ? BRAND.logo.iconWidth : BRAND.logo.width;
  const height = isIcon ? BRAND.logo.iconHeight : BRAND.logo.height;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center",
        onDark && "rounded-lg bg-pearl/95 px-2 py-1.5 shadow-soft",
        className,
      )}
    >
      <Image
        src={BRAND.logo.src}
        alt="Zover Travel & Tourism"
        width={width}
        height={height}
        className={cn(
          "h-auto w-auto max-w-full object-contain object-start",
          isIcon ? "max-h-10 max-w-[3rem]" : "max-h-11 max-w-[min(12.5rem,46vw)] sm:max-h-14 sm:max-w-none",
        )}
        style={{ width: "auto", height: "auto", maxWidth: width, maxHeight: height }}
        priority={priority}
      />
    </span>
  );
}
