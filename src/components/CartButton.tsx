import { CartButtonContainer } from '../styles/components/CartButton'
import { Handbag } from 'phosphor-react'
import { ComponentPropsWithoutRef } from 'react'

type CartButtonProps = ComponentPropsWithoutRef<typeof CartButtonContainer> & {
  quantity?: number
}

export function CartButton({ quantity = 0, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag size={24} weight="bold" />
      {
        Boolean(quantity) && <span>{quantity}</span>
      }
    </CartButtonContainer>
  )
}
