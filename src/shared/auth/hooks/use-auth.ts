import { useCallback, useEffect, useState } from 'react'

const storageName = 'expensesUserData'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken }),
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const dataStorage = localStorage.getItem(storageName)

    const data: {
      token: string
      userId: string
    } | null = dataStorage ? JSON.parse(dataStorage) : null

    if (data && data.token) {
      login(data.token, data.userId)
    }

    setReady(true)
  }, [login])

  return {
    login,
    logout,
    token,
    userId,
    ready,
  }
}
