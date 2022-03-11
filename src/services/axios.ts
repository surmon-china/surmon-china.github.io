/**
 * @file Axios service
 * @module service/axios
 * @author Surmon <https://github.com/surmon-china>
 */

import axios from 'axios'

const service = axios.create()

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('Fetch failed:', error)
    return Promise.reject(error)
  }
)

export default service
