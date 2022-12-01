import 'materialize-css'
import { AuthContext } from 'context/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { paths } from 'shared/routing'

import { HomePageConnector as AddHomePageConnector } from 'flows/add-expenses'
import { HomePageConnector as ShowHomePageConnector } from 'flows/expenses'
import { HomePageConnector as MainHomePageConnector } from 'flows/main'

import { AuthConnector } from './flows/auth'
import { useAuth } from './shared/auth'
import { Loader } from './ui/atoms'

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
        <Router>
          <Routes>
            <Route path={paths.home} element={<AuthConnector />} />
          </Routes>
        </Router>
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
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}
