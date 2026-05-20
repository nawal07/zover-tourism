import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-heading text-sm tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        primary: "bg-gold text-pearl hover:bg-gold-muted shadow-soft",
        outline:
          "border border-gold/60 bg-transparent text-gold hover:bg-gold/10",
        ghost: "text-pearl hover:bg-pearl/10",
        dark: "bg-midnight text-pearl hover:bg-navy-soft",
        light: "bg-pearl text-midnight hover:bg-sand",
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
        className={cn(linkButtonVariants({ variant, size }), "touch-manipulation", className)}
      {...props}
    />
  );
}
