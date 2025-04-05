'use client';
import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts';
import { createTheme, lighten } from '@mui/material/styles';
import {NextLink} from "@/components/NextLink";
const MERRIWEATHER = merriweather.style.fontFamily;
const FIRA_SANS = firaSans.style.fontFamily;
const FIRA_CODE = firaCode.style.fontFamily;

const baseTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(70, 90, 219)',
    },
    background: {
      default: 'hsl(195,34%,93%)',
      paper: 'hsl(235,14%,97%)',
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
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: lighten(baseTheme.palette.primary.main, 0.9),
          },
          variants: [
            {
              props: { variant: 'h5' },
              style: {
                color: baseTheme.palette.text.primary,
                display: 'inline-block',
                textDecoration: 'none',
                paddingBottom: baseTheme.spacing(0.5),
                position: 'relative',
                transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out',
                margin: 0,
                '&:hover': {
                  color: lighten(baseTheme.palette.primary.main, 0.2),
                },
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '60%',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  height: baseTheme.spacing(0.25),
                  backgroundColor: baseTheme.palette.primary.main,
                },
                '&:hover:after': {
                  width: '100%',
                  transition: 'width 0.2s ease-in-out',
                  transitionDelay: '0.3s',
                }
              }
            }
          ]
        }
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
