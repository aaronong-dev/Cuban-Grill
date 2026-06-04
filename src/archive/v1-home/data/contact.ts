export type ContactPerson = {
  name: string
  phone: string
  phoneHref: string
}

export const contacts: ContactPerson[] = [
  {
    name: 'Lenny Vera',
    phone: '956-454-4141',
    phoneHref: 'tel:+19564544141',
  },
]

export const location = {
  venue: 'The Broken Sprocket',
  lines: ['6305 Paredes Line Rd', 'Brownsville, TX 78526'],
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=The+Broken+Sprocket+6305+Paredes+Line+Rd+Brownsville+TX+78526',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=The+Broken+Sprocket,+6305+Paredes+Line+Rd,+Brownsville,+TX+78526&z=18&t=k&output=embed',
}
