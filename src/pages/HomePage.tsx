import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { IntroSection } from '@/components/IntroSection/IntroSection'
import { LocationMap } from '@/components/LocationMap/LocationMap'
import { site } from '@/data/site'
import { SiteSeo } from '@/seo/SiteSeo'
import { restaurantJsonLd } from '@/seo/restaurantJsonLd'
import styles from './HomePage.module.css'

const HOME_TITLE = `${site.name} — ${site.tagline}`
const HOME_DESCRIPTION =
  'Authentic Cuban food from our mobile kitchen in Brownsville, TX. Home of the Sloppy Cuban — view the menu, find us at The Broken Sprocket, and call for catering.'

export function HomePage() {
  const jsonLd = restaurantJsonLd()

  return (
    <>
      <SiteSeo
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.heroShell}>
        <Hero />
      </div>
      <IntroSection />
      <LocationMap />
      <Footer />
    </>
  )
}
