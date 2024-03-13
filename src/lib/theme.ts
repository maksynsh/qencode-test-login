const theme = {
  colors: {
    primary: '#316FEA',
    blue: '#0055D5',
    lightBlue: '#A6C9FF',
    white: '#fff',
    black: '#1A1919',
    grey: '#060E1E',
    lightGrey: '#D3D8DC',
    light: '#E3E6E9',
    red: '#D21C1C',
  },
  fontSizes: {
    lg: '30px',
    md: '16px',
    sm: '14px',
    xs: '12px',
  },
  fontWeight: {
    semiBold: 700,
    medium: 500,
    regular: 400,
  },
  space: {
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    2.5: '20px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    10: '80px',
  },
  transitions: {
    default: '150ms ease-in',
  },
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
  zIndex: {
    topApp: '9999',
    topSection: '9998',
  },
  rowSize: {
    sm: '40px',
    md: '48px',
    lg: '56px',
  },
} as const

export type CustomTheme = typeof theme

export default theme
