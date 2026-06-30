import { Footer } from '@/components/Footer/Footer'
import { site } from '@/data/site'
import { SiteSeo } from '@/seo/SiteSeo'
import styles from './MenuPage.module.css'

const MENU_TITLE = `Menu — ${site.name}`
const MENU_DESCRIPTION =
  'Side orders, entrees, and sandwiches from Cuban Grill in Brownsville, TX — home of the Original Sloppy Cuban.'

const MENU_IMAGE = {
  src: '/Menu/New-Menu.jpeg',
  alt: 'Cuban Grill menu with side orders, entrees, and sandwiches',
  width: 780,
  height: 1008,
}

export function MenuPage() {
  return (
    <>
      <SiteSeo title={MENU_TITLE} description={MENU_DESCRIPTION} path="/menu" />
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What we serve</p>
          <h1 className={styles.headline}>Menu</h1>
        </header>
        <figure className={styles.menuFigure}>
          <img
            src={MENU_IMAGE.src}
            alt={MENU_IMAGE.alt}
            width={MENU_IMAGE.width}
            height={MENU_IMAGE.height}
            className={styles.menuImage}
          />
        </figure>
      </main>
      <Footer />
    </>
  )
}
