/** Canonical origin (no trailing slash). Set VITE_SITE_URL in Vercel for custom domains. */
export const siteUrl = (
  import.meta.env.VITE_SITE_URL || 'https://cuban-grill.vercel.app'
).replace(/\/$/, '')

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
