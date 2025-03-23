'use client';
import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts';
import { createTheme } from '@mui/material/styles';

const MERRIWEATHER = merriweather.style.fontFamily;
const FIRA_SANS = firaSans.style.fontFamily;
const FIRA_CODE = firaCode.style.fontFamily;

const theme = createTheme({
  cssVariables: true,
  typography: {
    htmlFontSize: 16,
    fontFamily: MERRIWEATHER,
    h1: {
      fontFamily: FIRA_SANS,
      fontSize: "2.986rem",
    },
    h2: {
      fontFamily: FIRA_SANS,
      fontSize: "2.488rem",
    },
    h3: {
      fontFamily: FIRA_SANS,
      fontSize: "2.074rem",
    },
    h4: {
      fontFamily: FIRA_SANS,
      fontSize: "1.728rem",
    },
    h5: {
      fontFamily: FIRA_SANS,
      fontSize: "1.44rem",
    },
    h6: {
      fontFamily: FIRA_SANS,
      fontSize: "1.2rem",
    },
    body1: {
      fontFamily: MERRIWEATHER,
      fontSize: "1rem",
    },
    body2: {
      fontFamily: MERRIWEATHER,
      fontSize: "0.833rem",
    },
    caption: {
      fontFamily: FIRA_SANS,
      fontSize: "0.694rem",
    },
    button: {
      fontFamily: FIRA_SANS,
      fontSize: "1rem",
    },
    overline: {
      fontFamily: FIRA_SANS,
      fontSize: "0.694rem",
    }
  },
});

export default theme;
