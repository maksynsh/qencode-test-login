import type { Preview } from '@storybook/react'

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import theme from '../src/config/theme'
import GlobalStyles from '../src/config/globalStyles'

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: theme
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles,
  })
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
