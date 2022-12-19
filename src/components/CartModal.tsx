import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import logoImg from '../assets/logo.svg'
import { X } from 'phosphor-react'
import { Overlay, Content, Close, ProductWrapper, ProductContent } from "../styles/components/CartModal";

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} weight='bold' />
        </Close>

        <strong>Sacola de compras</strong>

        <ProductWrapper>
          <aside>
            <Image src={logoImg} height={93} width={102} alt="" />
          </aside>
          <ProductContent>
            <header>
              <p>Camiseta Beyond the limits</p>
              <span>R$ 79,90</span>
            </header>
            <button>Remover</button>
          </ProductContent>
        </ProductWrapper>
      </Content>
    </Dialog.Portal>
  )
}
