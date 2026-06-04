import { Helmet } from 'react-helmet-async'
import { site } from '@/data/site'
import { absoluteUrl, siteUrl } from '@/seo/siteUrl'

type SiteSeoProps = {
  title: string
  description: string
  /** Path after origin, e.g. `/menu` */
  path?: string
  image?: string
  noindex?: boolean
}

export function SiteSeo({
  title,
  description,
  path = '/',
  image = site.ogImage,
  noindex = false,
}: SiteSeoProps) {
  const pageUrl = `${siteUrl}${path === '/' ? '' : path}`
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${site.name} — ${site.tagline}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${site.name} — ${site.tagline}`} />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Brownsville" />
    </Helmet>
  )
}
