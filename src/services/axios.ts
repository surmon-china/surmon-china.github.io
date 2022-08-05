import axios from 'axios'

const service = axios.create()

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.warn('Fetch failed:', error)
    return Promise.reject(error)
  }
)

export default service
