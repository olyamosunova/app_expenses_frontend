import axios from 'axios'

export const createAxiosInstance = () => {
  const instance = axios.create({ baseURL: '/api' })

  return instance
}
