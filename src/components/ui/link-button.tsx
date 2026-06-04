import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        primary: "btn-pill-primary text-pearl",
        outline:
          "btn-pill-secondary text-pearl",
        ghost: "text-pearl hover:bg-pearl/10",
        dark: "bg-purple text-pearl hover:bg-purple-light",
        light: "bg-pearl/10 text-pearl hover:bg-pearl/15",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type LinkButtonProps = ComponentProps<typeof Link> &
  VariantProps<typeof linkButtonVariants>;

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        linkButtonVariants({ variant, size }),
        "touch-manipulation",
        className,
      )}
      {...props}
    />
  );
}
