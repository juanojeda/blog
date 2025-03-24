'use client';
import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts';
import { createTheme } from '@mui/material/styles';
import {NextLink} from "@/components/NextLink";
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
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: FIRA_SANS,
      fontSize: "2.488rem",
      lineHeight: 1.167,
    },
    h3: {
      fontFamily: FIRA_SANS,
      fontSize: "2.074rem",
      lineHeight: 1.167,
    },
    h4: {
      fontFamily: FIRA_SANS,
      fontSize: "1.728rem",
      lineHeight: 1.167,
    },
    h5: {
      fontFamily: FIRA_SANS,
      fontSize: "1.44rem",
      lineHeight: 1.167,
    },
    h6: {
      fontFamily: FIRA_SANS,
      fontSize: "1.2rem",
      lineHeight: 1.167,
    },
    body1: {
      fontFamily: MERRIWEATHER,
      fontSize: "1rem",
      lineHeight: 1.6,
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
