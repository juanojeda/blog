import {firaCode, firaSans, merriweather} from '@/components/fonts/fonts';import { ThemeProvider } from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import theme from '@/app/theme';
import typography from '@/components/typography/_typography.module.css'
import '@/styles/globals.css';

const fontClasses = [
  merriweather.variable,
  firaSans.variable,
  firaCode.variable
].join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontClasses} ${typography.__base}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}