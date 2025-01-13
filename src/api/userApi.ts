import axiosClient from './axiosClient'

const userApi = {
  register(data: FormData) {
    const url = '/auth/local/register'
    return axiosClient.post(url, data)
  },
  login(data: FormData) {
    const url = '/auth/local'
    return axiosClient.post(url, data)
  }
}

export default userApi
