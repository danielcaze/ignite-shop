import { styled } from "..";

export const ProductContaienr = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  paddingBottom: '2.5rem',

  maxWidth: 1180,
  marginInline: 'auto',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 300px',
    justifyItems: 'center',

    paddingBottom: '2rem',
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '2xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    '@tablet': {
      maxHeight: 100,
      overflowY: "scroll"
    }
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  }
})