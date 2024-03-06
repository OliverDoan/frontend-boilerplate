import axiosClient from './axiosClient'

export const URL_REGISTER = '/api/register'
export const URL_LOGIN = '/api/login'

const authApi = {
  register(body: { email: string; password: string }) {
    return axiosClient.post(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return axiosClient.post(URL_LOGIN, body)
  }
}

export default authApi
