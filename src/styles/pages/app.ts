import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  overflow: 'hidden',
  paddingInline: '1rem',

  '@tablet': {
    justifyContent: 'flex-start',
  }
})