import { CartButtonContainer } from '../styles/components/CartButton'
import { Handbag } from 'phosphor-react'
import { ComponentPropsWithoutRef } from 'react'

type CartButtonProps = ComponentPropsWithoutRef<typeof CartButtonContainer>

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag size={24} weight="bold" />
    </CartButtonContainer>
  )
}
