import { createSlice } from '@reduxjs/toolkit'
import { AuthResponse } from 'src/api/types/auth.type'
import StorageKeys from 'src/constants/storage-keys'

interface UserState {
  user: AuthResponse
}

const initialState: UserState = {
  user: localStorage.getItem(StorageKeys.USER) ? JSON.parse(localStorage.getItem(StorageKeys.USER) || '{}') : {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

const userReducer = userSlice.reducer

export default userReducer
