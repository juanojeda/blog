'use client';
import { createTheme } from '@mui/material/styles';

export const fontVariables = {
  merriweather: "--font-merriweather",
  firaSans: "--font-fira-sans",
  firaCode: "--font-fira-code",
}

const theme = createTheme({
  cssVariables: true,
  typography: {
    htmlFontSize: 16,
    fontFamily: `var(${fontVariables.merriweather})`,
    h1: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
    h2: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
    h3: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
    h4: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
    h5: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
    h6: {
      fontFamily: `var(${fontVariables.firaSans})`,
    },
  },
});

export default theme;
