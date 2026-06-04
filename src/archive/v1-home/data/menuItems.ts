export type PhotoItem = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export const menuItems: PhotoItem[] = [
  {
    src: '/Menu/plate-1.webp',
    alt: 'Cuban plate with rice, beans, and plantains',
    caption: 'Combo Plate',
    width: 800,
    height: 600,
  },
  {
    src: '/Menu/sandwhich-2.webp',
    alt: 'The Sloppy Cuban — Cuban Grill signature sandwich',
    caption: 'The Sloppy Cuban',
    width: 800,
    height: 600,
  },
  {
    src: '/Menu/sandwhich-1.webp',
    alt: 'Media Noche sandwich on a plate',
    caption: 'Media Noche',
    width: 800,
    height: 600,
  },
]
