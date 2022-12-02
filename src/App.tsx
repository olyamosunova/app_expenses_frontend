import 'materialize-css'
import { AuthContext } from 'context/auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from 'shared/auth'
import { paths } from 'shared/routing'

import { HomePageConnector as AddHomePageConnector } from 'flows/add-expenses'
import { AuthConnector } from 'flows/auth'
import { HomePageConnector as ShowHomePageConnector } from 'flows/expenses'
import { HomePageConnector as MainHomePageConnector } from 'flows/main'

import { Loader } from 'ui/atoms'
import { NotFound } from 'ui/pages'

const queryClient = new QueryClient()

export const App = () => {
  const { token, login, logout, userId, ready } = useAuth()

  const isAuthenticated = !!token

  if (!ready) {
    return <Loader />
  }

  if (!isAuthenticated) {
    return (
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuthenticated,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path={paths.home} element={<AuthConnector />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path={paths.home} element={<MainHomePageConnector />} />
            <Route
              path={paths.showExpenses.home}
              element={<ShowHomePageConnector />}
            />
            <Route
              path={paths.addExpenses.home}
              element={<AddHomePageConnector />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}
