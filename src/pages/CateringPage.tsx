import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { cateringHero, cateringHeroSlides } from '@/data/catering'
import { site } from '@/data/site'
import { SiteSeo } from '@/seo/SiteSeo'
import styles from './CateringPage.module.css'

const CATERING_TITLE = `Catering — ${site.name}`
const CATERING_DESCRIPTION =
  'Cuban Grill catering for events and large orders in Brownsville, TX. Call ahead to plan your order — authentic Cuban flavors from our mobile kitchen.'

export function CateringPage() {
  return (
    <>
      <SiteSeo
        title={CATERING_TITLE}
        description={CATERING_DESCRIPTION}
        path="/catering"
      />
      <div className={styles.heroShell}>
        <Hero hero={cateringHero} slides={cateringHeroSlides} />
      </div>
      <Footer />
    </>
  )
}
