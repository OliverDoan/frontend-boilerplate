import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store'

const cartItemsSelector = (state: RootState) => state.cart.cartItems

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
)

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
)
