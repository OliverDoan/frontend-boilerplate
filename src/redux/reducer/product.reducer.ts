import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit'
import axiosClient from 'src/api/axiosClient'
import { Product } from 'src/api/types/product.type'

const URL_PRODUCT = 'api/v1/products'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface ProductState {
  productList: Product[]
  loading: boolean
  currentRequestId: undefined | string
}

const initialState: ProductState = {
  productList: [],
  loading: false,
  currentRequestId: undefined
}

export const getAllProduct = createAsyncThunk(
  'product/getAll',
  async ({ offset, limit, categoryId }: { offset: number; limit: number; categoryId?: number }, thunkAPI) => {
    const response = await axiosClient.get<Product[]>(
      `${URL_PRODUCT}?offset=${offset}&limit=${limit}&categoryId=${categoryId}`,
      {
        signal: thunkAPI.signal
      }
    )
    return response.data
  }
)

export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async ({ id }: { id: number }, thunkAPI) => {
    const response = await axiosClient.get<Product>(`${URL_PRODUCT}/${id}`, {
      signal: thunkAPI.signal
    })
    return response.data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.productList = action.payload
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.currentRequestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, state)
      })
  }
})

const productReducer = productSlice.reducer
export default productReducer
