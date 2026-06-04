import type { ReactNode } from "react";
import type { Locale } from "@/constants/site";
import { getDirection } from "@/hooks/use-locale-direction";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers/app-providers";

type LocaleShellProps = {
  locale: Locale;
  children: ReactNode;
  className?: string;
};

export function LocaleShell({ locale, children, className }: LocaleShellProps) {
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction} className={cn(fontVariables, "h-full")}>
      <body
        className={cn(
          "min-h-full flex flex-col bg-dark text-pearl antialiased",
          className,
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
