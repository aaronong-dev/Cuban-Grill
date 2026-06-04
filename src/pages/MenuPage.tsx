import { Footer } from '@/components/Footer/Footer'
import { site } from '@/data/site'
import { SiteSeo } from '@/seo/SiteSeo'
import styles from './MenuPage.module.css'

const MENU_IMAGE = {
  src: '/Cuban-Grill-Menu.png',
  alt: 'Cuban Grill menu featuring Media Noche, plantain chips, white rice, black beans, and picadillo',
  width: 1262,
  height: 996,
}

const MENU_TITLE = `Menu — ${site.name}`
const MENU_DESCRIPTION =
  'Cuban Grill menu — Media Noche, plantain chips, rice, beans, picadillo, the Sloppy Cuban, and more authentic Cuban favorites in Brownsville, TX.'

export function MenuPage() {
  return (
    <>
      <SiteSeo
        title={MENU_TITLE}
        description={MENU_DESCRIPTION}
        path="/menu"
        image={MENU_IMAGE.src}
      />
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
            decoding="async"
          />
        </figure>
      </main>
      <Footer />
    </>
  )
}
