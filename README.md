# Ocho Glasgow website

A fast, static website for Ocho, the brunch, lunch and cocktail café at 8 Speirs Wharf, Glasgow.

> **This repository is a private test build.** By default it shows a "test build" banner, tells search engines not to
> index it and blocks all crawlers in `robots.txt`. See [Going live](#going-live) for how to switch that off.

## Why Astro

The site is built with [Astro](https://astro.build) and outputs plain HTML, CSS and a few small scripts into `dist/`.

- **Fast:** no framework runs in the browser. Only the mobile menu, menu-tab highlighting and gallery lightbox use small scripts.
- **Responsive images:** photos are turned into AVIF/WebP in several sizes at build time.
- **Simple hosting:** `dist/` is a static folder, so it can be uploaded to Cloudflare Pages without a server, database or GitHub account.
- **Easy edits:** all content lives in a few clearly named files (below).

Styling uses Tailwind CSS 4. Fonts (Fraunces and Manrope) are self-hosted, so nothing is loaded from Google.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.23 or newer (24 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # type-check, then build the site into dist/
npm run preview    # serve the built dist/ folder locally
```

## Editing content

| What | File |
| --- | --- |
| Name, address, phone, email, social links | `src/config/site.ts` |
| Opening hours (eat-in and online orders, kept separate) | `src/content/hours.ts` |
| Menu (categories, dishes, prices, dietary labels) | `src/content/menu.ts` |
| Photos and their descriptions | `src/content/photos.ts` + `src/assets/photos/` |
| Guest reviews (verified only) | `src/content/testimonials.ts` |
| Flipdish ordering and Dojo booking | `src/config/integrations.ts` |
| Old addresses that should redirect | `public/_redirects` |
| Legal pages (drafts) | `src/pages/privacy.astro`, `cookies.astro`, `terms.astro`, `accessibility.astro` |

Anything not yet confirmed is `null` in these files and shows on the site as a clear "to be confirmed" placeholder.
Don't fill gaps with guesses.

### Updating the menu

Open `src/content/menu.ts`. Each dish looks like this:

```ts
{ name: "Dish name", description: "Short description", price: "£9.50", dietary: ["V"] }
```

Delete the `placeholderItems(...)` lines and list the real dishes. `price` can be `null` if it shouldn't be shown.
Only add dietary labels (V, VG, GF, DF) that the kitchen has confirmed. Once no placeholders are left, the
"development placeholder" notice disappears by itself.

### Adding photos

1. Copy the photo (JPG/PNG/WebP, ideally about 2400px on the long side) into `src/assets/photos/`.
2. In `src/content/photos.ts`, find the matching entry and set `file: "your-photo.jpg"`.
3. Check the `alt` text describes the photo, and add `credit` if needed.

Use only photos Ocho owns or has permission to use. Do not copy them from Google, Tripadvisor, Facebook or Instagram.

### Connecting Flipdish (Order Online)

1. Get the official web ordering embed snippet from Flipdish (it contains Ocho's App ID).
2. Ask Flipdish to whitelist every domain the site runs on (the test address and the final domain).
3. In `src/config/integrations.ts`, fill in `flipdish.embed` with the values from the snippet: the `<div>`'s id and
   attributes, and the `<script>`'s `src` and attributes. The script then loads on `/order/` only.
4. Change `flipdish.fallbackUrl` to Flipdish's own ordering link before the domain moves, so it doesn't point back to this site.

### Connecting Dojo (Book a Table)

1. Get the booking widget URL or iframe details from Dojo.
2. Fill in `dojo.embed` (`src`, `title`, optional `minHeight`) and `dojo.bookingUrl` in `src/config/integrations.ts`.
3. Styling inside the Dojo widget can only be changed in Dojo's own settings.

## Deploying to Cloudflare Pages (Direct Upload, no GitHub needed)

1. Run `npm run build`. The finished site is the `dist/` folder.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Upload assets**.
3. Name the project (e.g. `ocho-glasgow`) and drag in the **contents of `dist/`**. Deploy.
4. You get a `*.pages.dev` address to check everything before connecting the domain.

Or from the command line: `npx wrangler pages deploy dist --project-name ocho-glasgow`.

`_headers` (security and caching headers) and `_redirects` from `public/` are included in `dist/` automatically.

### Going live

Only do this once the owner has approved the site, the content and the legal pages.

1. Build in production mode, so the banner disappears and search engines may index the site:
   ```bash
   PUBLIC_SITE_MODE=production PUBLIC_SITE_URL=https://www.ochoglasgow.co.uk npm run build
   ```
2. Upload `dist/` as above.
3. In the Pages project: **Custom domains → Set up a domain**, and follow Cloudflare's steps. This changes DNS for
   the live domain, so plan it with whoever manages the domain and the current Flipdish site.
4. Before switching, make sure Flipdish has whitelisted the domain and the integration links no longer point to
   the old site.

### Future updates

Edit the content files, run `npm run build`, and upload `dist/` again as a new deployment in the same Pages project.

### Rolling back

In the Pages project, open **Deployments**, choose an earlier deployment and select **Rollback to this deployment**.
It goes live at once.

## The current test deployment

The test address `https://ocho-test.bastianstudioweb.workers.dev` is a Cloudflare **Worker with static assets**
(`wrangler.jsonc`), built from `main`. Its Cloudflare build settings must be:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Check the config without deploying: `npm run build && npm run deploy:dry-run`.

## Project structure

```
src/
  config/        site details, integrations, structured data
  content/       menu, hours, photos, reviews
  components/    header, footer, buttons, photo, gallery, Flipdish/Dojo embeds…
  layouts/       page shell (SEO tags, banner, header, footer)
  pages/         one file per page (file name = address)
  styles/        design tokens and global styles
public/          files copied as-is (_headers, _redirects, icons, og.png)
```
