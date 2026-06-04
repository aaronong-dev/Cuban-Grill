import { heroContent } from '@/data/heroContent'
import { LocationBlock } from '@/components/LocationBlock/LocationBlock'
import typography from '@/styles/typography.module.css'
import styles from './Hero.module.css'

function HeroGallery() {
  const { images } = heroContent

  if (images.length === 0) {
    return (
      <div className={`${styles.gallery} ${styles.galleryEmpty}`} aria-hidden>
        <p className={styles.placeholder}>
          Hero photos go in <strong>public/hero/</strong> — then add paths in{' '}
          <strong>src/data/heroContent.ts</strong>
        </p>
      </div>
    )
  }

  const [featured, ...rest] = images
  const galleryClass = [
    styles.gallery,
    images.length === 1 && styles.gallerySingle,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={galleryClass}>
      <figure className={`${styles.imageCell} ${styles.featured}`}>
        <img
          src={featured.src}
          alt={featured.alt}
          width={featured.width ?? 1200}
          height={featured.height ?? 900}
          fetchPriority="high"
        />
      </figure>
      {rest[0] ? (
        <figure className={`${styles.imageCell} ${styles.secondaryTop}`}>
          <img
            src={rest[0].src}
            alt={rest[0].alt}
            loading="lazy"
            width={rest[0].width ?? 800}
            height={rest[0].height ?? 600}
          />
        </figure>
      ) : null}
      {rest[1] ? (
        <figure className={`${styles.imageCell} ${styles.secondaryBottom}`}>
          <img
            src={rest[1].src}
            alt={rest[1].alt}
            loading="lazy"
            width={rest[1].width ?? 800}
            height={rest[1].height ?? 600}
          />
        </figure>
      ) : null}
    </div>
  )
}

export function Hero() {
  const { eyebrow, headline, lede, logo, images } = heroContent
  const hasImages = images.length > 0

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.visual}>
        <HeroGallery />
        {hasImages ? <div className={styles.scrim} aria-hidden /> : null}
        <div className={styles.content}>
          <div className={styles.logoWrap}>
            <img
              className={styles.logo}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
          <p className={typography.eyebrow}>{eyebrow}</p>
          <h1 id="hero-heading" className={styles.title}>
            <span>{headline}</span>
          </h1>
          <p className={styles.lede}>{lede}</p>
          <div className={styles.locationWrap}>
            <LocationBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
