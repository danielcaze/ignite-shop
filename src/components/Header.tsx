import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { HeaderContainer } from '../styles/components/Header'
import Link from 'next/link'
import { CartButton } from './CartButton'
import * as Dialog from '@radix-ui/react-dialog'
import { CartModal } from './CartModal'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CartButton />
        </Dialog.Trigger>

        <CartModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
