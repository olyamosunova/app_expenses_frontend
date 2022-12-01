import axios from 'axios'
import env from 'react-dotenv'

export const createAxiosInstance = () => {
  const instance = axios.create({ baseURL: env.REACT_APP_BASE_URL })

  return instance
}
