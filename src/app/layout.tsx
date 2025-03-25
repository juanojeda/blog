import {firaCode, firaSans, merriweather} from '@/components/fonts/fonts';import { ThemeProvider } from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import theme from '@/app/theme';
import { CssBaseline } from '@mui/material';

const fontClasses = [
  firaSans.variable,
  firaCode.variable,
  merriweather.variable,
].join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontClasses}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}