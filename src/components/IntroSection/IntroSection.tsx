import { introSection } from '@/data/introSection'
import styles from './IntroSection.module.css'

export function IntroSection() {
  const { id, eyebrow, headline, body, menuHref, images } = introSection

  return (
    <section id={id} className={styles.section} aria-labelledby="intro-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="intro-heading" className={styles.headline}>
            {headline}
          </h2>
          <p className={styles.body}>
            <span id="catering" className={styles.anchor} tabIndex={-1} />
            {body.map((part, index) =>
              typeof part === 'string' ? (
                <span key={index}>{part}</span>
              ) : (
                <a key={part.label} href={part.href} className={styles.bodyLink}>
                  {part.label}
                </a>
              ),
            )}
          </p>
          <a href={menuHref} className={styles.btn}>
            View menu
          </a>
        </div>

        <div className={styles.gallery} aria-label="Featured dishes">
          <figure className={styles.mainPhoto}>
            <img
              src={images.main.src}
              alt={images.main.alt}
              width={images.main.width}
              height={images.main.height}
              loading="lazy"
            />
          </figure>
          <figure className={styles.sidePhoto}>
            <img
              src={images.top.src}
              alt={images.top.alt}
              width={images.top.width}
              height={images.top.height}
              loading="lazy"
            />
          </figure>
          <figure className={styles.sidePhoto}>
            <img
              src={images.bottom.src}
              alt={images.bottom.alt}
              width={images.bottom.width}
              height={images.bottom.height}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
