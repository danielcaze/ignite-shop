import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import { ButtonsContainer, HomeContainer, Product } from "../styles/pages/home";
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { CartButton } from "../components/CartButton";
import { useCart } from "../hooks/useCart";
import { IProduct } from "../contexts/CartContext";
import { MouseEvent, useEffect, useState } from "react";
import SkeletonHomeScreen from "../components/SkeletonHomeScreen";

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(3)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 48 },
      },
      "(max-width: 648px)": {
        slides: { perView: 1, spacing: 40 },
      },
    },
    slides: {
      perView: 3,
      spacing: 48
    },
    created(slider) {
      setSlidesPerPage(slider.options.slides!.perView)
    }
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  useEffect(() => {
    const skeletonLoading = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(skeletonLoading)
  }, [])

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    addToCart(product)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setSlidesPerPage(instanceRef.current?.options.slides?.perView))

    return () => window.removeEventListener('resize', () => setSlidesPerPage(instanceRef.current?.options.slides?.perView))
  }, [currentSlide])

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      {
        isLoading ? (
          <>
            <SkeletonHomeScreen size={3} />
          </>
        ) : (
          <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map(product => (
              <Product key={product.id} href={`/product/${product.id}`} prefetch={false} className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <CartButton color='green' size='large' onClick={(e) => handleAddToCart(e, product)} disabled={checkIfItemAlreadyExists(product.id)} />
                </footer>
              </Product>
            )
            )}
            {
              currentSlide !== 0 && (
                <button
                  className="prev"
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                >&lt;</button>
              )
            }
            {
              products.length - slidesPerPage !== currentSlide && (
                <button
                  className="next"
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === products.length - 1}
                >&gt;</button>
              )
            }
          </HomeContainer>
        )
      }


    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount as number / 100),
      numberPrice: price.unit_amount as number / 100,
      defaultPriceId: price.id
    }
  })

  const revalidate = 60 * 60 * 2 // 2 Hours

  return {
    props: {
      products
    },
    revalidate
  }
}