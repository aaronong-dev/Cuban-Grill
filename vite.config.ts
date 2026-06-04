import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function resolveSiteUrl(env: Record<string, string>): string {
  const fromEnv = env.VITE_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '')
  }
  return 'https://cuban-grill.vercel.app'
}

function sitemapPlugin(siteUrl: string) {
  const routes = ['/', '/menu']
  const lastmod = new Date().toISOString().slice(0, 10)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  return {
    name: 'cuban-grill-sitemap',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml)
      const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = resolveSiteUrl(env)

  return {
    plugins: [react(), sitemapPlugin(siteUrl)],
    envPrefix: 'VITE_',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
