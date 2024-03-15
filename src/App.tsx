import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@components/Layout'
import ProtectedRoute from '@components/ProtectedRoute'
import AlertsContainer from '@components/AlertsContainer'
import AuthProvider from '@providers/Auth'
import theme from '@config/theme'
import GlobalStyles from '@config/globalStyles'
import routes from '@config/routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              {routes.map(({ protect, ...route }) =>
                protect ? (
                  <Route key={route.path} element={<ProtectedRoute />}>
                    <Route {...route} />
                  </Route>
                ) : (
                  <Route key={route.path} {...route} />
                ),
              )}
            </Route>
          </Routes>
          <AlertsContainer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
