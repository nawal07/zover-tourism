import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-pearl/12 bg-card px-4 text-sm text-pearl",
        "placeholder:text-pearl/35 transition-colors",
        "focus-visible:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
