import type { PhotoItem } from '@/data/menuItems'
import styles from './PhotoGrid.module.css'

type PhotoGridProps = {
  items: PhotoItem[]
  variant?: 'default' | 'pair'
  className?: string
  'aria-label'?: string
}

export function PhotoGrid({
  items,
  variant = 'default',
  className,
  'aria-label': ariaLabel,
}: PhotoGridProps) {
  const gridClass = [
    styles.grid,
    variant === 'pair' && styles.pair,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Tag = ariaLabel ? 'section' : 'div'

  return (
    <Tag className={gridClass} aria-label={ariaLabel}>
      {items.map((item) => (
        <figure key={item.src}>
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            width={item.width ?? 800}
            height={item.height ?? 600}
          />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </Tag>
  )
}
