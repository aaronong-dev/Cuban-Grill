import { contacts } from '@/data/contact'
import typography from '@/styles/typography.module.css'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={typography.sectionHeading}>
        Contact
      </h2>
      <p className={typography.sectionLede}>
        Questions or catering? Give us a call.
      </p>
      <ul className={styles.contactList}>
        {contacts.map((person) => (
          <li key={person.phoneHref} className={styles.contactCard}>
            <span className={styles.contactName}>{person.name}</span>
            <a className={styles.contactPhone} href={person.phoneHref}>
              {person.phone}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
