export type HeroImage = {
  /** Path under public/, e.g. /hero/hero-main.webp */
  src: string
  alt: string
  width?: number
  height?: number
}

export const heroContent = {
  eyebrow: 'Sabor · Cultura · Tradición',
  headline: 'Home of the Original Sloppy Cuban',
  lede:
    'Authentic Cuban flavors from our mobile kitchen. Find us at The Broken Sprocket in Brownsville — catering and walk-up service.',
  logo: {
    src: '/Cuban-Grill-Logo.webp',
    alt: 'Cuban Grill — Sabor, Cultura, Tradición. Home of the Original Sloppy Cuban.',
    width: 560,
    height: 560,
  },
  /**
   * Add images here after uploading to public/hero/
   * Suggested names: hero-main.webp (featured), hero-2.webp, hero-3.webp
   * First image is used as the large featured visual; others fill the side grid.
   */
  images: [] as HeroImage[],
}
