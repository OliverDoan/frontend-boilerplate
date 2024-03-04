import http from 'src/apis/axiosClient'

export const URL_REGISTER = '/api/register'
export const URL_LOGIN = '/api/login'

const authApi = {
  register(body: { email: string; password: string }) {
    return http.post(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return http.post(URL_LOGIN, body)
  }
}

export default authApi
