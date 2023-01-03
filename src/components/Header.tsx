import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { HeaderContainer } from '../styles/components/Header'
import Link from 'next/link'
import { CartButton } from './CartButton'
import * as Dialog from '@radix-ui/react-dialog'
import { CartModal } from './CartModal'
import { useRouter } from 'next/router'
import { useCart } from '../hooks/useCart'
import { HTMLAttributes } from 'react'

export function Header({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  const { cart } = useCart()
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";
  return (
    <HeaderContainer {...rest}>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {
        showCartButton && (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <CartButton quantity={cart.length} />
            </Dialog.Trigger>

            <CartModal />
          </Dialog.Root>
        )
      }
    </HeaderContainer>
  )
}
