import { styled } from "..";

export const CartButtonContainer = styled('button', {
  padding: '0.75rem',
  border: 0,
  borderRadius: 6,
  cursor: 'pointer',
  position: 'relative',

  '&:disabled': {
    cursor: 'not-allowed'
  },

  span: {
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    lineHeight: '0',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    position: "absolute",
    top: "calc(1.5rem / -3)",
    right: "calc(1.5rem / -3)",
    outline: "3px solid $gray900",
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500'
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        }
      }
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24
        }
      },
      large: {
        width: "3.5rem",
        height: '3.5rem',

        svg: {
          fontSize: 32
        }
      }
    }
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium'
  }
})