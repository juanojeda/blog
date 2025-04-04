'use client';
import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts';
import { createTheme } from '@mui/material/styles';
import {NextLink} from "@/components/NextLink";
const MERRIWEATHER = merriweather.style.fontFamily;
const FIRA_SANS = firaSans.style.fontFamily;
const FIRA_CODE = firaCode.style.fontFamily;

const baseTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#1B8346',
      light: '#5BAB7D',
      dark: '#236941',
    },
    background: {
      default: '#EFE9E6',
      paper: '#F7F4F3',
    },
    secondary: {
      main: '#96326b',
      light: '#AB5B88',
      dark: '#69234A',
    },
    success: {
      main: '#236941',
    },
    error: {
      main: '#d64c54',
      light: '#DE6F76',
      dark: '#95353A',
    },
    warning: {
      main: '#ff9147',
      light: '#FFA76B',
      dark: '#B26531',
    },
    info: {
      main: '#326B96',
      light: '#5B88AB',
      dark: '#234A69',
    },
    text: {
      primary: '#1B2021',
      secondary: '#69777A',
      disabled: '#A7B2B4',
    },
  }
});

const theme = createTheme( baseTheme, {
  typography: {
    htmlFontSize: 16,
    fontFamily: MERRIWEATHER,
    h1: {
      fontFamily: FIRA_SANS,
      fontSize: "2.986rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
    },
    h2: {
      fontFamily: FIRA_SANS,
      fontSize: "2.488rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    h3: {
      fontFamily: FIRA_SANS,
      fontSize: "2.074rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    h4: {
      fontFamily: FIRA_SANS,
      fontSize: "1.728rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
      marginTop: "1rem",
      fontWeight: 400,
      color: baseTheme.palette.text.secondary,
    },
    h5: {
      fontFamily: FIRA_SANS,
      fontSize: "1.44rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
      marginTop: "1rem",
      fontWeight: 400,
      color: baseTheme.palette.text.secondary,
    },
    h6: {
      fontFamily: FIRA_SANS,
      fontSize: "1.2rem",
      lineHeight: 1.167,
      marginBottom: "1rem",
      marginTop: "1rem",
      fontWeight: 400,
      color: baseTheme.palette.text.secondary,
    },
    body1: {
      fontFamily: MERRIWEATHER,
      fontSize: "1rem",
      lineHeight: 1.6,
      marginBottom: "1.6rem",
    },
    body2: {
      fontFamily: MERRIWEATHER,
      fontSize: "0.833rem",
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: FIRA_SANS,
      fontSize: "0.694rem",
      lineHeight: 1.6,
    },
    button: {
      fontFamily: FIRA_SANS,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    overline: {
      fontFamily: FIRA_SANS,
      fontSize: "0.694rem",
      lineHeight: 1.6,
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: NextLink,
      }
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NextLink
      }
    }
  }
});

export default theme;
