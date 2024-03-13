import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import theme from '@lib/theme'
import GlobalStyles from '@lib/globalStyles'
import Layout from '@components/Layout'

import Login from '@pages/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<div>Hello World!</div>} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
