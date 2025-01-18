import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthRequest, AuthResponse } from 'src/api/types/auth.type'
import userApi from 'src/api/userApi'
import StorageKeys from 'src/constants/storage-keys'

interface UserState {
  user: AuthResponse
}

const initialState: UserState = {
  user: localStorage.getItem(StorageKeys.USER) ? JSON.parse(localStorage.getItem(StorageKeys.USER) || '{}') : {}
}

export const register = createAsyncThunk('user/register', async (payload: AuthRequest) => {
  const response = await userApi.register(payload)
  return response
})

export const login = createAsyncThunk('user/login', async (payload: { email: string; password: string }) => {
  const response = await userApi.login(payload)
  return response
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

const userReducer = userSlice.reducer

export default userReducer
