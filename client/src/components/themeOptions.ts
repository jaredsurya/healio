import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0e643e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#079ee2',
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
    fontFamily: 'Lora',
  },
};

export default themeOptions