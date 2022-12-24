import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const hasOnlyOneItem = products.length === 1

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>


        {
          hasOnlyOneItem ? (
            <>
              <h1>Compra efetuada!</h1>
              <section>
                <ImageContainer key={products[0].name}>
                  <Image src={products[0].imageUrl} width={120} height={110} alt="" />
                </ImageContainer>
              </section>
            </>
          ) : (
            <>

              <section>
                {
                  products.map(product => (
                    <ImageContainer key={product.name} quantity='multiple'>
                      <Image src={product.imageUrl} width={120} height={110} alt="" />
                    </ImageContainer>
                  ))
                }
              </section>
              <h1>Compra efetuada!</h1>
            </>
          )
        }

        <p>
          Uhuul, <strong>{customerName}</strong>,{' '}
          {hasOnlyOneItem ? (
            <>
              sua <strong>{products[0].name}</strong> já está
            </>
          ) : (
            <>
              sua compra de {products.length} camisetas já está
            </>
          )} a caminho de sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details!.name

  const products = session.line_items!.data.map(product => product.price!.product) as Stripe.Product[]
  const productsData = products.map(product => {
    return {
      name: product.name,
      imageUrl: product.images[0]
    }
  })

  return {
    props: {
      customerName,
      products: productsData
    }
  }
}