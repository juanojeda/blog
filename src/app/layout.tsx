import {firaCode, firaSans, merriweather} from '@/components/fonts/fonts';import { ThemeProvider } from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import theme from '@/app/theme';
import { AppBar, Box, Container, CssBaseline, Link, Typography } from '@mui/material';

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
            <AppBar elevation={0} position="static" sx={{
              py: 2,
            }}>
              <Container>
                <Typography component="h1" variant="body1" sx={{mb: 0, fontWeight: 'bold'}}>
                  <Link href="/" underline="none" color="inherit">
                    Juan Ojeda
                  </Link>
                </Typography>
              </Container>
            </AppBar>
            <Box sx={{
              my: 4,
            }}>
              <Container maxWidth="md">
                {children}
              </Container>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}