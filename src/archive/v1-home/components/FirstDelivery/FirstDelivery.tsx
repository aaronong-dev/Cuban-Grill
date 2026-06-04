import { firstDeliveryPhotos } from '@/data/firstDeliveryPhotos'
import { PhotoGrid } from '@/components/PhotoGrid/PhotoGrid'
import typography from '@/styles/typography.module.css'
import styles from './FirstDelivery.module.css'

export function FirstDelivery() {
  return (
    <section
      id="first-delivery"
      className={styles.firstDelivery}
      aria-labelledby="first-delivery-heading"
    >
      <p className={typography.eyebrow}>First delivery</p>
      <h2 id="first-delivery-heading" className={typography.sectionHeading}>
        Off the truck and onto the table
      </h2>
      <p className={`${typography.sectionLede} ${styles.sectionLede}`}>
        Cuban Grill catered our first order, Sloppy Cubans and sides, delivered
        to Tipotex, Brownsville, Texas. Thank you for trusting us with your
        team.
      </p>
      <PhotoGrid
        items={firstDeliveryPhotos}
        variant="pair"
        className={styles.photoGridPair}
      />
    </section>
  )
}
