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

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxHeight: 'calc(100vh - 182px - 4.5rem - 3rem)',

    strong: {
      color: '$gray100',
      fontSize: '$lg',
      lineHeight: 1.6
    },
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    paddingTop: '0.625rem',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,

      div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        color: '$gray100',

        span: {
          fontSize: '$md'
        },

        '&:nth-child(2)': {
          fontWeight: 'bold',

          strong: {
            fontSize: '$md'
          },

          span: {
            fontSize: '$xl'
          }
        }
      }
    },

    button: {
      background: '$green500',
      color: '$white',
      border: 0,
      paddingBlock: '1.25rem',
      borderRadius: 8,
      fontSize: '$md'
    }
  }
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

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  maxHeight: 705,
  overflow: 'auto'
})

export const ProductWrapper = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  'aside': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    img: {
      objectFit: 'cover'
    },
  },

  'div': {
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
  }
})