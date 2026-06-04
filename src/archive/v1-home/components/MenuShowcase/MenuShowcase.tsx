import { menuItems } from '@/data/menuItems'
import { PhotoGrid } from '@/components/PhotoGrid/PhotoGrid'
import typography from '@/styles/typography.module.css'
import styles from './MenuShowcase.module.css'

export function MenuShowcase() {
  return (
    <section
      id="menu"
      className={styles.menuShowcase}
      aria-labelledby="menu-showcase-heading"
    >
      <h2 id="menu-showcase-heading" className={typography.sectionHeading}>
        From the menu
      </h2>
      <p className={typography.sectionLede}>A taste of what&apos;s coming</p>
      <PhotoGrid items={menuItems} />
    </section>
  )
}
