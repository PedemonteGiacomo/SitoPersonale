import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // cyan accent
    },
    secondary: {
      main: '#009688', // teal/green accent
    },
  },
});

export default theme;
