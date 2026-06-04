import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full resize-y rounded-md border border-pearl/12 bg-card px-4 py-3 text-sm text-pearl",
        "placeholder:text-pearl/35 transition-colors",
        "focus-visible:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-gold/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
