import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from 'src/api/axiosClient'
import { AuthRequest, AuthResponse } from 'src/api/types/auth.type'
import StorageKeys from 'src/constants/storage-keys'

const URL_REGISTER = 'api/v1/users'
const URL_LOGIN = 'api/v1/auth/login'

interface UserState {
  token: string
}

const initialState: UserState = {
  token: localStorage.getItem(StorageKeys.TOKEN) || ''
}

export const register = createAsyncThunk('user/register', async (body: AuthRequest) => {
  const response = await axiosClient.post<AuthResponse>(URL_REGISTER, body)
  return response.data
})

export const login = createAsyncThunk('user/login', async (body: { email: string; password: string }) => {
  const response = await axiosClient.post<{ access_token: string; refresh_token: string }>(URL_LOGIN, body)
  localStorage.setItem(StorageKeys.TOKEN, response.data.access_token)
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.access_token
    })
  }
})

const userReducer = userSlice.reducer

export default userReducer
