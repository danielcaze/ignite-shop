import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  marginInline: 'auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:not(:disabled):hover': {
      color: '$green300'
    }
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    'div + div': {
      marginLeft: 'calc(140px / -3)',
    },

    '& + h1': {
      marginTop: '4rem',
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(100deg, #1ea483 0%, #7455d4 100%)',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  variants: {
    quantity: {
      one: {
        borderRadius: 8,
        marginTop: '4rem',
      },
      multiple: {
        borderRadius: '50%',
        boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
        position: "relative",
        width: 140,
        maxWidth: 140,
        height: 140,
      }
    }
  },

  defaultVariants: {
    quantity: 'one'
  }
})