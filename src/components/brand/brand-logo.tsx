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
        onDark && "brightness-110",
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
          isIcon
            ? "max-h-10 max-w-11"
            : "max-h-10 max-w-[min(12rem,44vw)] sm:max-h-12 sm:max-w-56",
        )}
        style={{ width: "auto", height: "auto", maxWidth: width, maxHeight: height }}
        priority={priority}
      />
    </span>
  );
}
