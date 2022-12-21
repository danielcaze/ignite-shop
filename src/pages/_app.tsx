import type { AppProps } from 'next/app'
import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/global'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
