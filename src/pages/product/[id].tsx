import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContaienr, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const { data } = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })
      const { checkoutUrl } = data

      window.location.href = checkoutUrl
    } catch (error) {
      // conectar com uma ferramenta de observabilidade (datadog, sentry)
      setIsCreatingCheckoutSession(false)
      alert('Failed to redirect')
    }
  }

  return (
    <ProductContaienr>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContaienr>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [{ params: { id: 'prod_MyrHxYN5JivaCT' } }]

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  const revalidate = 60 * 60 * 1 // 1 Hour

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount as number / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate
  }
}