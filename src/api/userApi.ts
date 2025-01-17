import { AuthRequest, AuthResponse } from 'src/api/types/auth.type'
import axiosClient from './axiosClient'

export const URL_REGISTER = 'api/v1/users'

const userApi = {
  register(body: AuthRequest) {
    return axiosClient.post<AuthResponse>(URL_REGISTER, body)
  }
}

export default userApi
