import { AuthRequest, AuthResponse } from 'src/api/types/auth.type'
import axiosClient from './axiosClient'

export const URL_REGISTER = 'api/v1/users'
export const URL_LOGIN = 'api/v1/auth/login'

const userApi = {
  register(body: AuthRequest) {
    return axiosClient.post<AuthResponse>(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return axiosClient.post<{ access_token: string; refresh_token: string }>(URL_LOGIN, body)
  }
}

export default userApi
