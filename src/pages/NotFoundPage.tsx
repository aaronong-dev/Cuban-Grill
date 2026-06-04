import { Link } from 'react-router-dom'
import { SiteSeo } from '@/seo/SiteSeo'
import { site } from '@/data/site'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <>
      <SiteSeo
        title={`Page not found — ${site.name}`}
        description="The page you requested could not be found."
        noindex
      />
      <main className={styles.main}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.body}>
          That link doesn&apos;t exist. Head back to the home page or view our
          menu.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
        </div>
      </main>
    </>
  )
}
