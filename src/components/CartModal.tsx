import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import logoImg from '../assets/logo.svg'
import { X } from 'phosphor-react'
import { Overlay, Content, Close, ProductWrapper, ProductList } from "../styles/components/CartModal";
import { useCart } from "../hooks/useCart";

export function CartModal() {
  const { cart, cartTotal, removeFromCart } = useCart()
  const cartQuantity = cart.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight='bold' />
        </Close>

        <section>
          <strong>Sacola de compras</strong>
          {cartQuantity > 0 ? (
            <ProductList>
              {cart.map(cartItem => (
                <ProductWrapper key={cartItem.id}>
                  <aside>
                    <Image src={cartItem.imageUrl} height={93} width={102} alt="" />
                  </aside>
                  <div>
                    <header>
                      <p>{cartItem.name}</p>
                      <span>{cartItem.price}</span>
                    </header>
                    <button onClick={() => removeFromCart(cartItem.id)}>Remover</button>
                  </div>
                </ProductWrapper>
              ))}
            </ProductList>
          ) : (
            <p> Parece que seu carrinho está vazio :(</p>
          )}
        </section>

        {
          cartQuantity > 0 && (
            <footer>
              <div>
                <div>
                  <p>Quantidade</p>
                  <span>{cartQuantity} {cartQuantity === 1 ? 'item' : 'items'}</span>
                </div>
                <div>
                  <strong>Valor total</strong>
                  <span>{formattedCartTotal}</span>
                </div>
              </div>
              <button>Finalizar compra</button>
            </footer>
          )
        }
      </Content>
    </Dialog.Portal>
  )
}
