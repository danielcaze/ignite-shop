import type { AppProps } from 'next/app'
import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'
import { useEffect, useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isScrolling, setIsScrolling] = useState(false)

  function showNavbarOnScroll() {
    if (window.scrollY > 0) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showNavbarOnScroll)
    return () => window.removeEventListener('scroll', showNavbarOnScroll)
  }, [])

  return (
    <CartProvider>
      <Container className={`${isScrolling ? 'scroll' : ''}`}>
        <Header className={`${isScrolling ? 'scroll' : ''}`} />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
