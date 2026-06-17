import { Footer } from '@/components/Footer/Footer'
import { site } from '@/data/site'
import { SiteSeo } from '@/seo/SiteSeo'
import styles from './MenuPage.module.css'

const MENU_TITLE = `Menu — ${site.name}`
const MENU_DESCRIPTION =
  'Our menu is being updated. Check back soon for Cuban Grill favorites in Brownsville, TX.'

export function MenuPage() {
  return (
    <>
      <SiteSeo title={MENU_TITLE} description={MENU_DESCRIPTION} path="/menu" />
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What we serve</p>
          <h1 className={styles.headline}>Menu</h1>
        </header>
        <div className={styles.notice} role="status">
          <p className={styles.noticeTitle}>Menu coming soon</p>
          <p className={styles.noticeText}>
            We&apos;re currently updating our menu. Please check back soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
