export type PhotoItem = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export const menuItems: PhotoItem[] = [
  {
    src: '/Menu/Cuban-Plate.png',
    alt: 'Picadillo bowl with white rice, black beans, and plantain chips',
    caption: 'Combo Plate',
    width: 896,
    height: 1195,
  },
  {
    src: '/Menu/Sloppy-Cuban.png',
    alt: 'The Sloppy Cuban — Cuban Grill signature sandwich with plantain chips',
    caption: 'The Sloppy Cuban',
    width: 896,
    height: 1195,
  },
  {
    src: '/Menu/Media-Noche.png',
    alt: 'Media Noche sandwich with ham, roasted pork, Swiss cheese, and plantain chips',
    caption: 'Media Noche',
    width: 896,
    height: 1196,
  },
]
