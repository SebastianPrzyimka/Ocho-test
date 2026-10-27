# Notes for coding agents

This is the Ocho Glasgow website: a fully static Astro 7 site (Tailwind CSS 4, TypeScript). There is no server code.

## Commands
- `npm run dev`: local dev server (http://localhost:4321)
- `npm run build`: `astro check` + `astro build` into `dist/`. Must pass before every push.
- `npm run deploy:dry-run`: validates `wrangler.jsonc` (assets-only Worker for the test deployment).
- Node 22.23+ is required (see `.node-version`).

## Rules
- Content lives in `src/config/` and `src/content/`. Keep it out of components.
- Never invent facts: opening hours, prices, menu items, allergens, reviews, awards or contact details.
  Unknown values stay `null` and render as visible placeholders.
- Never add Flipdish or Dojo IDs, URLs or embed code that the owner has not supplied (`src/config/integrations.ts`).
- Use only photos the owner supplied (`src/assets/photos/`), never images from Google, review sites or social media.
- Keep the test-build safeguards unless the owner approves launch: `PUBLIC_SITE_MODE` defaults to test, which adds
  the banner, `noindex` and a disallow-all `robots.txt`.
- Do not change DNS, the live site, or Flipdish/Dojo settings.
- Keep pages accessible (WCAG 2.2 AA) and respect `prefers-reduced-motion`.
