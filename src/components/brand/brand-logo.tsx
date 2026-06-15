import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  /** Light pill background for dark headers */
  onDark?: boolean;
  priority?: boolean;
  size?: "default" | "sm";
};

export function BrandLogo({
  variant = "full",
  className,
  onDark = false,
  priority = false,
  size = "default",
}: BrandLogoProps) {
  const isIcon = variant === "icon";
  const width = isIcon ? BRAND.logo.iconWidth : BRAND.logo.width;
  const height = isIcon ? BRAND.logo.iconHeight : BRAND.logo.height;

  const displayMaxHeight = !isIcon && size === "sm" ? 56 : height;
  const displayMaxWidth = !isIcon && size === "sm" ? 80 : width;

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
          "h-auto w-auto max-w-full object-contain object-start transition-all duration-300",
          isIcon
            ? "max-h-14 max-w-20"
            : size === "sm"
              ? "max-h-14 max-w-20"
              : "max-h-32 max-w-45.5",
        )}
        style={{ width: "auto", height: "auto", maxWidth: displayMaxWidth, maxHeight: displayMaxHeight }}
        priority={priority}
      />
    </span>
  );
}
