import { useId, useState } from 'react'
import styles from './Landing.module.css'

function ErrorMessage({ id }: { id: string }) {
  return (
    <p id={id} className={styles.error} role="alert">
      <svg
        className={styles.errorIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="8" fill="currentColor" />
        <rect x="4" y="7.25" width="8" height="1.5" rx="0.75" fill="#fff" />
      </svg>
      Please enter a valid answer
    </p>
  )
}

export function Landing() {
  const [headline, setHeadline] = useState('')
  const [summary, setSummary] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [showMore, setShowMore] = useState(false)

  const headlineId = useId()
  const summaryId = useId()
  const summaryErrorId = useId()
  const coverId = useId()
  const coverErrorId = useId()

  const summaryInvalid = summary.trim() === ''
  const coverInvalid = coverLetter.trim() === ''

  return (
    <div className={styles.page}>
      <article className={styles.card} aria-labelledby="landing-title">
        <header className={styles.header}>
          <h1 id="landing-title" className={styles.title}>
            Apply to Al Warren Oil
          </h1>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ×
          </button>
        </header>

        <div className={styles.actionRow}>
          <button type="button" className={styles.btnPrimary}>
            Upload resume
          </button>
          <button type="button" className={styles.btnSecondary}>
            <span className={styles.sparkle} aria-hidden>
              ✨
            </span>
            Tailor resume with AI
          </button>
          <button
            type="button"
            className={styles.moreLink}
            aria-expanded={showMore}
            onClick={() => setShowMore((open) => !open)}
          >
            {showMore ? 'Hide resumes' : 'Show 4 more resumes'}
            <span className={styles.chevron} aria-hidden>
              {showMore ? '▴' : '▾'}
            </span>
          </button>
        </div>

        {showMore ? (
          <p className={styles.label} style={{ marginBottom: '1.25rem' }}>
            Additional resumes (placeholder)
          </p>
        ) : null}

        <div className={styles.field}>
          <label className={styles.label} htmlFor={headlineId}>
            Headline
          </label>
          <input
            id={headlineId}
            className={styles.input}
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={summaryId}>
            Summary<span aria-hidden>*</span>
          </label>
          <textarea
            id={summaryId}
            className={`${styles.textarea} ${summaryInvalid ? styles.textareaError : ''}`}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            aria-invalid={summaryInvalid}
            aria-describedby={summaryInvalid ? summaryErrorId : undefined}
          />
          {summaryInvalid ? <ErrorMessage id={summaryErrorId} /> : null}
        </div>

        <section className={styles.section} aria-labelledby="cover-letter-heading">
          <h2 id="cover-letter-heading" className={styles.sectionTitle}>
            Cover letter
          </h2>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={coverId}>
              Cover letter<span aria-hidden>*</span>
            </label>
            <textarea
              id={coverId}
              className={`${styles.textarea} ${coverInvalid ? styles.textareaError : ''}`}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              aria-invalid={coverInvalid}
              aria-describedby={coverInvalid ? coverErrorId : undefined}
            />
            {coverInvalid ? <ErrorMessage id={coverErrorId} /> : null}
          </div>
        </section>
      </article>
    </div>
  )
}
