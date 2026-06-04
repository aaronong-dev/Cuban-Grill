export type IntroImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const introSection = {
  id: 'about',
  eyebrow: 'Fresh Cuban flavors, served your way',
  headline: 'Sandwiches, plates & combos made to order',
  body: [
    'Cuban Grill is your go-to for bold island flavors, from the signature Sloppy Cuban to hearty combo plates with rice, beans, and sweet plantains. ',
    'We prep fresh at our mobile kitchen and serve walk-up at ',
    { type: 'link' as const, label: 'The Broken Sprocket', href: '#locations' },
    ' in ',
    { type: 'link' as const, label: 'Brownsville', href: '#locations' },
    '. Call ahead for catering and large orders.',
  ],
  menuHref: '/menu',
  images: {
    main: {
      src: '/Menu/sandwhich-2.webp',
      alt: 'The Sloppy Cuban — Cuban Grill signature sandwich',
      width: 800,
      height: 1000,
    },
    top: {
      src: '/Menu/plate-1.webp',
      alt: 'Cuban plate with rice, beans, and plantains',
      width: 800,
      height: 500,
    },
    bottom: {
      src: '/Menu/sandwhich-1.webp',
      alt: 'Media Noche sandwich on a plate',
      width: 800,
      height: 500,
    },
  } satisfies Record<string, IntroImage>,
}
