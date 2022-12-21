import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPrice: string
}

interface CartContextProps {
  cart: IProduct[]
  cartTotal: number
  addToCart(item: IProduct): void
  removeFromCart(productId: string): void
  checkIfItemAlreadyExists(productId: string): boolean
}

export const CartContext = createContext({} as CartContextProps)

interface ContextProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])
  const cartTotal = cart.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function addToCart(item: IProduct) {
    setCart((prev) => [...prev, item])
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((product) => product.id !== productId))
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cart.some((product) => product.id === productId)
  }

  const value = { cart, cartTotal, addToCart, removeFromCart, checkIfItemAlreadyExists }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}