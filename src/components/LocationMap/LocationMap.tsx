import { site } from '@/data/site'
import styles from './LocationMap.module.css'

const location = site.locations[0]

export function LocationMap() {
  return (
    <section
      id="locations"
      className={styles.section}
      aria-labelledby="location-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Find us</p>
          <h2 id="location-heading" className={styles.headline}>
            Location
          </h2>
        </header>
        <div className={styles.map}>
          <iframe
            src={location.mapsEmbedUrl}
            title={`Google Maps — ${location.label}, Cuban Grill`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
