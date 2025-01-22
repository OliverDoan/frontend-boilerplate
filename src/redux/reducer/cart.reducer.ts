import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'src/api/types/product.type'

interface CartState {
  cartItems: (Product & { quantity: number })[]
}

const initialState: CartState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number; product: Product; quantity: number }>) => {
      // newItem = { id, product, quantity }
      const newItem = action.payload
      const index = state.cartItems.findIndex((x) => x.id === newItem.id)

      if (index >= 0) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity
      } else {
        // add to cart
        state.cartItems.push({ ...newItem.product, quantity: newItem.quantity })
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const idNeedToRemove = action.payload
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove)
    },
    setQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const { id, quantity } = action.payload
      // check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cartItems[index].quantity = quantity
      }
    }
  }
})

const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, setQuantity } = cartSlice.actions

export default cartReducer
