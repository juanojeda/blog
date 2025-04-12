import { firaCode, firaSans, merriweather } from '@/components/fonts/fonts'; import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import theme from '@/app/theme';
import { CssBaseline } from '@mui/material';
import SiteHeader from '@/components/SiteHeader';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
const fontClasses = [
  firaSans.variable,
  firaCode.variable,
  merriweather.variable,
].join(' ');

export const metadata: Metadata = {
  title: 'Juan Ojeda — Home',
  description: 'Personal website of Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontClasses}`}>
        <GoogleAnalytics gaId={process.env.GOOGLE_TRACKING_ID || "test"} />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SiteHeader />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}