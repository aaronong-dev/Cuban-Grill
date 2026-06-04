import { useEffect, useId, useState } from 'react'
import { Link, useLocation, type To } from 'react-router-dom'
import { site } from '@/data/site'
import styles from './Header.module.css'

function navLinkTo(href: string, pathname: string): To {
  if (href.startsWith('/#')) {
    return { pathname: '/', hash: href.slice(2) }
  }
  if (href.startsWith('#')) {
    return { pathname, hash: href.slice(1) }
  }
  return href
}

export function Header() {
  const { pathname } = useLocation()
  const overHero = pathname === '/'
  const [menuState, setMenuState] = useState({ open: false, path: pathname })
  const menuOpen = menuState.open && menuState.path === pathname
  const setMenuOpen = (open: boolean) => setMenuState({ open, path: pathname })
  const navId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`${styles.header} ${overHero ? styles.overHero : ''}`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img
            className={styles.logo}
            src={site.logo}
            alt={`${site.name} logo`}
            width={240}
            height={163}
          />
        </Link>

        <div className={styles.actions}>
          <nav
            id={navId}
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Main"
          >
            <ul className={styles.links}>
              {site.nav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={navLinkTo(item.href, pathname)}
                    className={`${styles.link} ${item.highlight ? styles.linkHighlight : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className={`${styles.cta} ${styles.ctaDisabled}`}>
            Coming Soon
          </span>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls={navId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  )
}
