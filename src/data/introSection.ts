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
      src: '/Menu/Sloppy-Cuban.webp',
      alt: 'The Sloppy Cuban — Cuban Grill signature sandwich with plantain chips',
      width: 896,
      height: 1195,
    },
    top: {
      src: '/Menu/Cuban-Plate.webp',
      alt: 'Picadillo bowl with white rice, black beans, and plantain chips',
      width: 896,
      height: 1195,
    },
    bottom: {
      src: '/Menu/Media-Noche.webp',
      alt: 'Media Noche sandwich with ham, roasted pork, Swiss cheese, and plantain chips',
      width: 896,
      height: 1196,
    },
  } satisfies Record<string, IntroImage>,
}
