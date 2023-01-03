import { AddedToCartPopUpContainer } from "../styles/components/AddedToCartPopUp";
import { ShoppingCartSimple } from 'phosphor-react'
import { HTMLAttributes } from "react";

export function AddedToCartPopUp({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <AddedToCartPopUpContainer {...rest}>
      Item Adicionado ao carrinho. <ShoppingCartSimple size={24} />
    </AddedToCartPopUpContainer>
  )
}
