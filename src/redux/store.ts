import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartReducer from 'src/redux/reducer/cart.reducer'
import categoryReducer from 'src/redux/reducer/category.reducer'
import productReducer from 'src/redux/reducer/product.reducer'
import userReducer from 'src/redux/reducer/user.reducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
