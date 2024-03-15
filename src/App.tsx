import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import theme from '@lib/theme'
import GlobalStyles from '@lib/globalStyles'
import Layout from '@components/Layout'
import ProtectedRoute from '@components/ProtectedRoute'
import AuthProvider from '@providers/Auth'

import Home from '@pages/Home'
import Login from '@pages/Login'
import ForgotPassword from '@pages/ForgotPassword'
import CreateNewPassword from '@pages/CreateNewPassword'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/create-new-password" element={<CreateNewPassword />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
