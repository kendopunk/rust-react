/**
 * src/lib/async/axiosConfig.ts
 */
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_ACTIX_SERVER,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/'
    }
  }
)

export default instance
