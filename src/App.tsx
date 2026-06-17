import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header/Header'
import { CateringPage } from '@/pages/CateringPage'
import { HomePage } from '@/pages/HomePage'
import { MenuPage } from '@/pages/MenuPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function scrollForLocation(hash: string) {
  if (hash) {
    const id = decodeURIComponent(hash.slice(1))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    return
  }
  window.scrollTo(0, 0)
}

function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    scrollForLocation(hash)
    if (!hash) return

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollForLocation(hash))
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
