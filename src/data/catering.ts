import { site } from '@/data/site'

export const cateringHero = {
  eyebrow: 'Events & Large Orders',
  headline: ['CATERING', 'BY CUBAN GRILL'],
  cta: { label: 'CALL TO ORDER', href: site.phoneHref },
}

export const cateringHeroSlides: { src: string; alt: string }[] = [
  {
    src: '/catering/1.jpg',
    alt: 'Cuban Grill catering staff serving guests at a tropical-themed buffet with chafing dishes and colorful leis',
  },
  {
    src: '/catering/2.jpg',
    alt: 'Cuban-themed catering buffet setup with chafing dishes, palm plants, and Puerto Rican flag decorations',
  },
  {
    src: '/catering/3.jpg',
    alt: 'Guests at a Cuban Grill catering event with buffet tables, tropical decor, and branded signage',
  },
]
