import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RtlAwareProps = {
  children: ReactNode;
  className?: string;
  /** Reverse flex row in RTL */
  flip?: boolean;
  /** Mirror directional icons (chevrons, arrows) in RTL */
  mirrorIcon?: boolean;
};

/**
 * Wrapper for layouts that need explicit RTL mirroring beyond logical CSS.
 * Prefer Tailwind `start-*` / `end-*` and `ms-*` / `me-*` where possible.
 */
export function RtlAware({
  children,
  className,
  flip = false,
  mirrorIcon = false,
}: RtlAwareProps) {
  return (
    <div
      className={cn(
        flip && "flex [dir=rtl]:flex-row-reverse",
        mirrorIcon && "[&_svg.arrow-icon]:flip-rtl",
        className,
      )}
    >
      {children}
    </div>
  );
}
