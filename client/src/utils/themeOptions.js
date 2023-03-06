import { ThemeOptions } from '@mui/material/styles';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0e643e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c93860',
    },
    background: {
      default: '#e4ecff',
      paper: '#ffffff',
    },
    error: {
      main: '#fb0743',
    },
    text: {
      primary: 'rgba(20,33,70,0.87)',
      secondary: 'rgba(20,33,70,0.62)',
      disabled: 'rgba(20,33,70,0.33)',
    },
  },
  typography: {
    fontFamily: 'PT serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  }
};

export default themeOptions