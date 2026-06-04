import { useCallback, useState } from 'react'
import { site } from '@/data/site'
import styles from './Hero.module.css'

export function Hero() {
  const { hero, heroSlides } = site
  const slideCount = heroSlides.length
  const [activeSlide, setActiveSlide] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      if (index === activeSlide) return
      setActiveSlide(((index % slideCount) + slideCount) % slideCount)
    },
    [activeSlide, slideCount],
  )

  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          aria-live="polite"
        >
          {heroSlides.map((slide, index) => (
            <div key={slide.src} className={styles.slide}>
              <img
                className={styles.image}
                src={slide.src}
                alt={slide.alt}
                fetchPriority={index === 0 ? 'high' : undefined}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrim} aria-hidden />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="hero-heading" className={styles.title}>
          {hero.headline.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
        <a className={styles.cta} href={hero.cta.href}>
          {hero.cta.label}
        </a>
      </div>

      {slideCount > 1 ? (
        <div className={styles.dots} role="tablist" aria-label="Choose slide">
          {heroSlides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={`Slide ${index + 1} of ${slideCount}`}
              className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
