import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  position: 'relative',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '& > button': {
    position: 'absolute',
    color: '$white',
    fontSize: '2rem',

    height: '100%',
    width: '3%',
    background: 'linear-gradient(270deg,#12121400 0%, #121214ff 150%)',
    border: 0,
    transition: 'all 0.2s',

    '&:hover': {
      fontSize: '3rem',
    },

    '&.next': {
      right: 0,
      background: 'linear-gradient(270deg,#121214ff -50%, #12121400 100%)',
    },
  },
})

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
        maxWidth: 290,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300'
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  },

  '@tablet': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})