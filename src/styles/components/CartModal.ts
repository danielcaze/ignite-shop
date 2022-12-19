import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  height: '100vh',
  width: '100vw',
  inset: 0,
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.75)'
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  minWidth: 480,
  padding: '3rem',
  paddingTop: '4.5rem',

  backgroundColor: '$gray800',

  strong: {
    color: '$gray100',
    fontSize: '$lg',
    lineHeight: 1.6
  },
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',

  svg: {
    color: '$gray700'
  }
})

export const ProductWrapper = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  marginTop: '2rem',

  'aside': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    img: {
      objectFit: 'cover'
    },
  },
})

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  header: {
    p: {
      fontSize: '$md',
      color: '$gray300',
      lineHeight: 1.6
    },

    span: {
      display: 'block',
      marginTop: '0.125rem',
      color: '$gray100',
      fontWeight: 'bold',
      lineHeight: 1.6
    },
  },

  button: {
    backgroundColor: 'transparent',
    border: 0,
    color: '$green500',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    cursor: 'pointer',
    lineHeight: 1.6
  },

  'button:hover': {
    color: '$green300',
  }
})