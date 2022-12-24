import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'body': {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400
  },

  '::-webkit-scrollbar': {
    width: 7,
  },
  '::-webkit-scrollbar-track': {
    background: '$gray800',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$green300',
    borderRadius: 5,
  },

  a: {
    color: 'inherit'
  },

  button: {
    cursor: 'pointer'
  }
})