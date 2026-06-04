import { site } from '@/data/site'
import { absoluteUrl } from '@/seo/siteUrl'

export function restaurantJsonLd() {
  const location = site.locations[0]
  const [street] = site.footer.addressLines

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    description: site.tagline,
    url: absoluteUrl('/'),
    image: absoluteUrl(site.ogImage),
    telephone: site.phone,
    servesCuisine: 'Cuban',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: 'Brownsville',
      addressRegion: 'TX',
      postalCode: '78526',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.934,
      longitude: -97.496,
    },
    hasMap: location.mapsUrl,
    sameAs: site.social.map((item) => item.href),
    potentialAction: {
      '@type': 'OrderAction',
      target: site.phoneHref,
    },
    areaServed: {
      '@type': 'City',
      name: 'Brownsville',
    },
  }
}
