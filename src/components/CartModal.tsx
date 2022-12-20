import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import logoImg from '../assets/logo.svg'
import { X } from 'phosphor-react'
import { Overlay, Content, Close, ProductWrapper, ProductList } from "../styles/components/CartModal";

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight='bold' />
        </Close>

        <main>
          <strong>Sacola de compras</strong>

          <ProductList>
            <ProductWrapper>
              <aside>
                <Image src={logoImg} height={93} width={102} alt="" />
              </aside>
              <div>
                <header>
                  <p>Camiseta Beyond the limits</p>
                  <span>R$ 79,90</span>
                </header>
                <button>Remover</button>
              </div>
            </ProductWrapper>
          </ProductList>
        </main>

        <footer>
          <div>
            <div>
              <p>Quantidade</p>
              <span>3 itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <span>R$ 270,00</span>
            </div>
          </div>
          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
