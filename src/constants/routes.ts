export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  partners: "/partners",
  contact: "/contact",
  blog: "/blog",
  inquiry: "/inquiry",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const NAV_LINKS: RouteKey[] = [
  "home",
  "about",
  "services",
  "partners",
  "contact",
];
