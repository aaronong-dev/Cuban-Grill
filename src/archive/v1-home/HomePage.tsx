import { Helmet } from 'react-helmet-async'
import { Contact } from '@/components/Contact/Contact'
import { FbDeliveryRow } from '@/components/FbDeliveryRow/FbDeliveryRow'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { Layout } from '@/components/Layout/Layout'
import { MenuShowcase } from '@/components/MenuShowcase/MenuShowcase'
import { PhotoGrid } from '@/components/PhotoGrid/PhotoGrid'
import { behindTheScenesPhotos } from '@/data/behindTheScenes'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cuban Grill — Home of the Original Sloppy Cuban</title>
        <meta
          name="description"
          content="Cuban Grill — Home of the Original Sloppy Cuban. Mobile kitchen at The Broken Sprocket, Brownsville, TX. Catering and authentic Cuban flavors."
        />
      </Helmet>
      <Hero />
      <Layout>
        <MenuShowcase />
        <FbDeliveryRow />
        <PhotoGrid
          items={behindTheScenesPhotos}
          aria-label="Behind the scenes"
        />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
