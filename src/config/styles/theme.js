import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  fontWeights: {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700
  },
  palette: {
    main: {
      primary: '#0652DD',
      lighter: '#3783ff',
      darken: '#0652AA',
      white: '#ffffff',
      black: '#000000',
      gray1: '#52ffff'
    }
  },
  typography: {
    families: {
      roboto: ['Roboto', 'sans-serif'].join(',')
    }
  }
});

export default theme;
