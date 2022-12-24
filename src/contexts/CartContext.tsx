import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useReducer, useRef, useState } from "react";

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPrice: string
  defaultPriceId: string
}

interface CartContextProps {
  cart: IProduct[]
  cartTotal: number
  addToCart(item: IProduct): void
  removeFromCart(productId: string): void
  checkIfItemAlreadyExists(productId: string): boolean
  clearCart(): void
}

export const CartContext = createContext({} as CartContextProps)

interface ContextProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])
  const firstRender = useRef(true)
  const { pathname } = useRouter();

  const isSuccessPage = pathname === "/success";

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

  function clearCart() {
    localStorage.removeItem('ignite-shop@cart:1.0.0')
  }

  useEffect(() => {
    const storedCartValue = localStorage.getItem('ignite-shop@cart:1.0.0')
    if (storedCartValue) setCart(JSON.parse(storedCartValue))
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const jsonCartValue = JSON.stringify(cart)
    localStorage.setItem('ignite-shop@cart:1.0.0', jsonCartValue)
  }, [cart])

  const value = { cart, cartTotal, addToCart, removeFromCart, checkIfItemAlreadyExists, clearCart }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}