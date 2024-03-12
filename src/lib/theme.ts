const theme = {
  colors: {
    greys: {
      900: '#1A1919',
      800: '#060E1E',
      400: '#D3D8DC',
    },
    primary: '#316FEA',
    white: '#fff',
    black: '#000',
  },
  fontSizes: {
    lg: '30px',
    md: '16px',
    sm: '15px',
    xs: '14px',
  },
  fontWeight: {
    semiBold: 700,
    medium: 500,
    regular: 400,
  },
  space: {
    '0,5': '4px',
    1: '8px',
    '1,5': '12px',
    2: '16px',
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
  containerGutters: {
    xs: 20,
    sm: 25,
    md: 30,
    lg: 40,
    xl: 80,
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

export default theme
