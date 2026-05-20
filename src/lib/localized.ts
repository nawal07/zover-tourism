import type { Locale } from "@/constants/site";
import type { LocalizedString } from "@/types/content";

export function pickLocalized<T extends LocalizedString>(
  value: T,
  locale: Locale,
): string {
  return value[locale];
}
