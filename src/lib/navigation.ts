import { NAV_LINKS, ROUTES, type RouteKey } from "@/constants/routes";

export type NavItem = {
  key: RouteKey;
  href: (typeof ROUTES)[RouteKey];
  labelKey: `common.nav.${RouteKey}`;
};

export const MAIN_NAV: NavItem[] = NAV_LINKS.map((key) => ({
  key,
  href: ROUTES[key],
  labelKey: `common.nav.${key}`,
}));

export const FOOTER_NAV_SECONDARY: NavItem[] = [
  { key: "blog", href: ROUTES.blog, labelKey: "common.nav.blog" },
  { key: "inquiry", href: ROUTES.inquiry, labelKey: "common.nav.inquiry" },
];
