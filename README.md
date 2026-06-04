# Cuban Grill

React + Vite site for Cuban Grill.

The landing page follows the restaurant layout from the design reference (header, nav bar, hero). Hero image: `public/hero/hero-image.webp`. Older pages are archived in [`src/archive/v1-home/`](src/archive/v1-home/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Import the GitHub repo `aaronong-dev/Cuban-Grill` in [Vercel](https://vercel.com).
2. Framework preset: **Vite** (build: `npm run build`, output: `dist`).
3. Add environment variable **`VITE_SITE_URL`** to your production domain (no trailing slash), e.g. `https://cubangrill.com`. Vercel preview builds can omit this; the build falls back to the deployment URL.
4. Deploy — `vercel.json` handles SPA routing, security headers, and asset caching. `sitemap.xml` and `robots.txt` are generated at build time.

## Legacy

The original static coming-soon page is preserved at [`legacy/coming-soon.html`](legacy/coming-soon.html).

## Images

Photos in `public/` are served as WebP. To regenerate optimized images after adding new assets:

```bash
npx sharp-cli -i public/photo.png -o public/photo.webp resize 1200
```

Or use the `sharp` dev dependency with a similar resize pipeline (max width 1200px, quality 82).
