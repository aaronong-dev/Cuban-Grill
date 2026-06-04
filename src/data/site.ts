export const site = {
  name: 'Cuban Grill',
  tagline: 'Home of the Original Sloppy Cuban',
  logo: '/Cuban-Grill-Logo.png',
  favicon: '/cuban-grill-favicon.png',
  /** Social preview image (absolute path on site) */
  ogImage: '/hero/Hero-Image.jpg',
  phone: '956-454-4141',
  phoneHref: 'tel:+19564544141',
  locations: [
    {
      id: 'brownsville',
      label: 'The Broken Sprocket',
      address: '6305 Paredes Line Rd, Brownsville',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=The+Broken+Sprocket+6305+Paredes+Line+Rd+Brownsville+TX+78526',
      mapsEmbedUrl:
        'https://www.google.com/maps?q=The+Broken+Sprocket,+6305+Paredes+Line+Rd,+Brownsville,+TX+78526&z=18&t=k&output=embed',
    },
  ],
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Location', href: '/#locations' },
    { label: 'Contact', href: '#contact' },
    { label: 'Catering', href: '/#catering', highlight: true },
  ],
  hero: {
    eyebrow: 'Authentic Cuban Flavors',
    headline: ['HOME OF THE ORIGINAL,', 'SLOPPY CUBAN'],
    cta: { label: 'VIEW MENU', href: '/menu' },
  },
  heroSlides: [
    {
      src: '/hero/Hero-Image.jpg',
      alt: 'Cuban Grill food truck at outdoor patio seating',
    },
    {
      src: '/hero/Hero-Image-2.jpg',
      alt: 'Cuban Grill food truck at an outdoor food truck park',
    },
  ],
  footer: {
    logo: '/Cuban-Grill-Logo.png',
    locationTitle: 'BROWNSVILLE',
    addressLines: ['6305 Paredes Line Rd', 'Brownsville, TX 78526'],
    hours: 'To be announced',
    menu: {
      href: '/menu',
      label: 'View Menu',
    },
  },
  social: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61589513254859',
      icon: 'facebook',
    },
  ],
}
