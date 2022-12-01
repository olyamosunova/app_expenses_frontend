import { createContext } from 'react'

const noop = () => {}

export const AuthContext = createContext<{
  token: string | null
  userId: string | null
  login: (jwtToken: string, id: string) => void
  logout: () => void
  isAuthenticated: boolean
}>({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})
