import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit'
import axiosClient from 'src/api/axiosClient'
import { Category } from 'src/api/types/category.type'

const URL_CATEGORY = 'api/v1/categories'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface CategoryState {
  categoryList: Category[]
  loading: boolean
  currentRequestId: undefined | string
}

const initialState: CategoryState = {
  categoryList: [],
  loading: false,
  currentRequestId: undefined
}

export const getAllCategory = createAsyncThunk('category/getAll', async (_, thunkAPI) => {
  const response = await axiosClient.get<Category[]>(`${URL_CATEGORY}`, {
    signal: thunkAPI.signal
  })
  return response.data
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categoryList = action.payload
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

const categoryReducer = categorySlice.reducer
export default categoryReducer
