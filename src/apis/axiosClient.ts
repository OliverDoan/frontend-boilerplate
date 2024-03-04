import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://reqres.in',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'expire-access-token': 60 * 60 * 24, // 1 ngày
    'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
  }
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
