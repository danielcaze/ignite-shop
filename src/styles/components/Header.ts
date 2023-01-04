import { styled } from "..";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1168,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    marginLeft: 'auto'
  },

  '@tablet': {
    '&.scroll': {
      zIndex: 100,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '$gray900'
    }
  }
})