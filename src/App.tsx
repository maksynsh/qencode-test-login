import { ThemeProvider } from 'styled-components'

import theme from '@lib/theme'
import GlobalStyles from '@lib/globalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Hello World!
    </ThemeProvider>
  )
}

export default App
