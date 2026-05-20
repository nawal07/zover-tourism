# Zover — Premium Travel & Tourism (Frontend Demo)

Luxury bilingual (EN/AR) tourism website for **Zover International Travel & Tourism**, built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and next-intl.

## Phase 5 (current)

- **Safe areas** — Notch / home-indicator padding (`viewportFit: cover`), nav offset uses `--nav-h` + `safe-area-inset-top`
- **Touch targets** — Buttons, footer links, language switcher, FAB-style WhatsApp (RTL-aware horizontal inset)
- **Responsive rhythm** — Fluid hero title, tighter section gutters on phones, hero CTAs full-width on small screens
- **Overflow** — `overflow-x: clip` on `html` / `body` + horizontal safe-area inset on body
- **`prefers-reduced-motion`** — Marquee disables; scroll smoothing off
- **Partners / gallery / contact** — Narrow-first grids, taller map area on phones, compressed partner tiles

## Phase 4 (complete)

- About, Services, Partners, Contact, Inquiry, Blog stub; CMS-ready data modules

## Phase 3 (complete)

- Home page sections, logo, brand colors

## Phase 2 (complete)

- Navbar, footer, language switcher, RTL chrome, WhatsApp float

## Phase 1 (complete)

- Project scaffold, i18n, typography, design tokens

## Commands

```bash
npm run dev    # http://localhost:3000 → redirects to /en
npm run build
npm run start
```

## Routes

| Path | Description |
|------|-------------|
| `/en`, `/ar` | Home |
| `/{locale}/about` | About |
| `/{locale}/services` | Services |
| `/{locale}/partners` | Partners |
| `/{locale}/contact` | Contact (+ form demo) |
| `/{locale}/blog` | Blog stub (noindex) |
| `/{locale}/inquiry` | Inquiry form (noindex) |

## Brand assets

Logo: `public/brand/zover-logo.png`. Partner placeholders: `public/partners/` (see `README.md` there).

## Next phases

6–7. SEO structure (JSON-LD, sitemap), animation UX refinement
