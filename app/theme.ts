'use client';
import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts';
import { createTheme } from '@mui/material/styles';

const wrapInVariable = (font) => `var(${font.variable})`;

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: [
      firaSans.variable,
      merriweather.variable,
      firaCode.variable
    ].map(wrapInVariable).join(","),
  },
});

export default theme;
