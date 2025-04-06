import { AppBar, Container, Link, Paper, Typography } from '@mui/material';

const SiteHeader = () => {

  return (<AppBar elevation={0} position="sticky" sx={{
    height: 60,
    py: 2,
    pt: 0
  }}>
    <Container max-width="lg">
      <Paper elevation={0} sx={{ p: 1, bgcolor: 'text.primary', width: 80, height: 80, left: 0, display: "flex", alignItems: 'center', justifyContent: 'center', borderRadius: 0 }}>
        <Typography component="h1" variant="h6" color="white" margin="0">
          <Link href="/" underline="none" color="inherit">
            Juan Ojeda
          </Link>
        </Typography>
      </Paper>
    </Container>
  </AppBar>)
}

export default SiteHeader;