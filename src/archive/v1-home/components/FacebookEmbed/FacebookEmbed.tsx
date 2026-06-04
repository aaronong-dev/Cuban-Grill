import styles from './FacebookEmbed.module.css'

const FACEBOOK_POST_URL =
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthebrokensprocketrgv%2Fposts%2Fpfbid0zcqUwdWB8UUqphNmPn7yQraQyi69Y9HYE7Uuyarvy2vj2UHC3WFqRRgZExcM8dqJl&show_text=true&width=500'

type FacebookEmbedProps = {
  inRow?: boolean
}

export function FacebookEmbed({ inRow = false }: FacebookEmbedProps) {
  return (
    <section
      className={`${styles.embed} ${inRow ? styles.inRow : ''}`}
      aria-label="Latest on Facebook"
    >
      <iframe
        src={FACEBOOK_POST_URL}
        width={500}
        height={729}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title="Facebook post from the Broken Sprocket"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </section>
  )
}
