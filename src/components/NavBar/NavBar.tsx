import { site } from '@/data/site'
import styles from './NavBar.module.css'

export function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${styles.link} ${item.highlight ? styles.linkActive : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className={`${styles.cta} ${styles.ctaDisabled}`}>
          Coming Soon
        </span>
      </div>
    </nav>
  )
}
