/* eslint-disable no-dupe-keys */
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(105, 73, 255, 1)',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    secondary: {
      main: 'rgba(255, 193, 7, 1)',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    tertiary: {
      main: 'rgba(99,	53,	248, 0.87)',
      contrastText: 'rgba(99,	53,	248, 0.87)',
      contrast: 'rgba(99,	53,	248, 0.87)',
      Shades: {
        '8p': 'rgba(99,	53,	248, 0.08)',
        '12p': 'rgba(	99,	53,	248, 0.12)',
        '16p': 'rgba(	99,	53,	248, 0.16)',
        '30p': 'rgba(	99,	53,	248, 0.3)',
        '50p': 'rgba(	99,	53,	248, 0.5)',
      },
    },
    error: {
      main: 'rgba(244, 67, 54, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    warning: {
      main: 'rgba(255, 167, 38, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: 'rgba(18, 209, 142, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: 'rgba(41, 182, 246, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    Success: {
      Main: 'rgb(18, 209, 142, 1)',
      Contrast: 'rgba(0, 0, 0, 0.87)',
      Shades: {
        '8p': 'rgb(18, 209, 142, 0.08)',
        '12p': 'rgb(18, 209, 142, 0.12)',
        '30p': 'rgb(18, 209, 142, 0.3)',
        '50p': 'rgb(18, 209, 142, 0.5)',
        '160p': 'rgb(18, 209, 142, 1)',
        '190p': 'rgb(18, 209, 142, 1)',
      },
    },
    Dark_Colors: {
      Dark: {
        1: '#181A20',
        2: '#1F222A',
        3: '#262A35',
        4: '#35383F',
        5: '#242731',
      },
    },
    Greyscale: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9E9E9E',
      498: '#898989',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#F5F5F5',
      50: '#FAFAFA',
    },
    Common: {
      Black: {
        '4p': 'rgba(0, 0, 0, 0.04)',
        '12p': 'rgba(0, 0, 0, 0.12)',
        '30p': 'rgba(0, 0, 0, 0.3)',
        '100p': 'rgba(0, 0, 0, 1)',
      },
      White: {
        '8p': 'rgba(255, 255, 255, 0.08)',
        '12p': 'rgba(255, 255, 255, 0.12)',
        '30p': 'rgba(255, 255, 255, 0.3)',
        '100p': 'rgba(255, 255, 255, 1)',
      },
    },
    A100: 'rgba(130, 177, 255, 1)',
    A200: 'rgba(68, 138, 255, 1)',
    A400: 'rgba(41, 121, 255, 1)',
    A700: 'rgba(41, 98, 255, 1)',
  },
  typography: {
    h1: {
      fontStyle: 'normal',
      fontFamily: 'Satoshi Black',
      fontWeight: 300,
      fontSize: '96px',
      textTransform: 'none',
    },
    h2: {
      fontStyle: 'normal',
      fontFamily: 'Satoshi Bold',
      fontWeight: 300,
      fontSize: '60px',
      textTransform: 'none',
    },
  },
  //   breakpoints: {
  //     values: {
  //       xs: 320,
  //       sm: 576.5,
  //       tab: 767.5,
  //       md: 1024,
  //       lg: 1280,
  //       xl: 1536,
  //       xxl: 1921,
  //     },
  //   },
});

export default theme;
