import { styled } from "..";

export const AddedToCartPopUpContainer = styled('div', {
  padding: '1rem',
  width: 'min(300px, calc(100vw - 2rem))',
  height: 100,
  background: '$gray800',
  color: '$green300',

  zIndex: 99,
  position: 'fixed',
  left: '1rem',
  right: '1rem',
  bottom: '1rem',
  transform: 'translateX(-110%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  userSelect: 'none',

  borderRadius: 12,

  transition: 'all 0.2s ease-in-out',

  '&.show': {
    transform: 'translateX(0%)',
  }
})