import 'materialize-css'
import { AuthContext } from 'context/auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from 'shared/auth'
import { paths } from 'shared/routing'

import { HomePageConnector as AddHomePageConnector } from 'flows/add-expenses'
import { AuthConnector } from 'flows/auth'
import { HomePageConnector as ShowHomePageConnector } from 'flows/expenses'

import { Loader } from 'ui/atoms'

import { SnackBarConnector } from './shared/snack'

const queryClient = new QueryClient()

type TRoute = {
  path: string
  element: JSX.Element
}

const withAuthRoutes: TRoute[] = [
  {
    path: paths.addExpenses.home,
    element: <AddHomePageConnector />,
  },
  {
    path: paths.showExpenses.home,
    element: <ShowHomePageConnector />,
  },
  {
    path: '*',
    element: <Navigate to={paths.addExpenses.home} />,
  },
]

const withoutAuthRoutes: TRoute[] = [
  {
    path: paths.auth.home,
    element: <AuthConnector />,
  },
  {
    path: '*',
    element: <Navigate to={paths.auth.home} />,
  },
]

export const App = () => {
  const { token, login, logout, userId, ready } = useAuth()

  const isAuthenticated = !!token

  if (!ready) {
    return <Loader />
  }

  const routes = isAuthenticated ? withAuthRoutes : withoutAuthRoutes

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
            {routes.map((item, key) => (
              <Route key={key} {...item} />
            ))}
          </Routes>
        </Router>
        <SnackBarConnector />
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}
