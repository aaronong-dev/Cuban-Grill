import { site } from '@/data/site'
import styles from './Footer.module.css'

export function Footer() {
  const { mapsUrl } = site.locations[0]
  const { logo, locationTitle, addressLines, hours, menu } = site.footer

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          <img
            className={styles.logo}
            src={logo}
            alt={`${site.name} logo`}
            width={200}
            height={136}
          />
        </a>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{locationTitle}</h3>
            <address className={styles.columnBody}>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.columnLink}
              >
                {addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </a>
            </address>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>HOURS</h3>
            <div className={styles.columnBody}>
              <span>{hours}</span>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>MENU</h3>
            <div className={styles.columnBody}>
              <a href={menu.href} className={styles.columnLink}>
                {menu.label}
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>CONTACT</h3>
            <div className={styles.columnBody}>
              <a href={site.phoneHref} className={styles.columnLink}>
                {site.phone}
              </a>
              {site.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={item.label}
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.copyright}>
          © 2026 Cuban Grill. Serving authentic Cuban flavors in the Rio Grande
          Valley.
        </p>
      </div>
    </footer>
  )
}
