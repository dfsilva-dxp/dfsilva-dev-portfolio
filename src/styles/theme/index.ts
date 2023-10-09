'use client';

const defaultTheme = {
  grid: {
    sm: '54rem',
    md: '72rem',
    lg: '96rem',
    xlg: '114rem',
    xxlg: '132rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 300,
      medium: 400,
      semibold: 500,
      bold: 700
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.4rem',
      xlarge: '3.6rem',
      xxlarge: '6rem',
      huge: '22rem'
    }
  },
  colors: {
    white: '#FFF',
    primary: {
      main: '#545CBF',
      dark: '#040506'
    },
    purple: {
      main: '#3A3051',
      500: '#AE95EF',
      700: '#CD62C5',
      800: '#3A3051'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F2F3F5',
      200: '#C7CFD9',
      300: '#AFBFD6',
      400: '#8D95AF',
      700: '#212A36',
      800: '#0E1116'
    },
    green: {
      main: '#43F0C7'
    },
    red: {
      main: '#FF6347'
    },
    yellow: {
      main: '#E1DB74'
    },
    orange: {
      main: '#DD7D3B'
    },
    blue: {
      main: '#2B8AEF'
    }
  },
  layers: {
    base: 10,
    menu: 30,
    overlay: 20,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;

export default defaultTheme;
