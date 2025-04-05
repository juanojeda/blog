import {firaCode, firaSans, merriweather} from '@/components/fonts/fonts';import { ThemeProvider } from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import theme from '@/app/theme';
import { AppBar, Box, Container, CssBaseline, Link, Paper, Typography } from '@mui/material';

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
              height: 60,
              py: 2,
            }}>
              <Container>
                <Paper elevation={0} sx={{ p: 1, bgcolor: 'text.primary', width: 80, height: 80, display: "flex", alignItems: 'center', justifyContent: 'center', borderRadius: 0, position: "absolute", top: 0 }}>
                  <Typography component="h1" variant="h6" color="white" margin="0">
                    <Link href="/" underline="none" color="inherit">
                      Juan Ojeda
                    </Link>
                  </Typography>
                </Paper>
              </Container>
            </AppBar>
            <Box sx={{
              my: 4,
            }}>
              <Container maxWidth="lg">
                {children}
              </Container>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}