import type { ReactNode } from 'react'
import styles from './Layout.module.css'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <main className={styles.page}>{children}</main>
}
