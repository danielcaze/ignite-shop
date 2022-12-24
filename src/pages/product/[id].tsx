import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import Stripe from "stripe";
import { IProduct } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContaienr, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart()
  const cartHasThisItem = checkIfItemAlreadyExists(product.id)

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Produto | {product.name}</title>
      </Head>
      <ProductContaienr>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={cartHasThisItem}
            onClick={(e) => handleAddToCart(e, product)}
          >
            {cartHasThisItem ? 'Item já está na sacola' : 'Adicionar na sacola'}
          </button>
        </ProductDetails>
      </ProductContaienr>
    </>
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
        numberPrice: price.unit_amount as number / 100,
        defaultPriceId: price.id
      }
    },
    revalidate
  }
}