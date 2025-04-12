import HalftoneImage from '@/components/HalftoneImage';
import { Box, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import profilePic from '@/public/images/profile.jpg';

const HomeLayout = () => {
  return (
    <Grid container minHeight={"calc(100vh - 60px)"}>
      <Grid size={{
        xs: 12,
        sm: 12,
        md: 6,
      }} sx={{
        bgcolor: "primary.dark",
        position: "relative",
        height: { xs: "40vh", md: "initial" }
      }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
          <HalftoneImage src={profilePic} alt="Halftone" width="100%" height="100%" />
        </Box>
        <Stack sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
          px: 4,
          pointerEvents: "none"
        }}>
          <Typography variant='poster' color="primary.contrastText" textAlign="center">Hi, I'm Juan.</Typography>
        </Stack>
      </Grid>
      <Grid size={{
        xs: 12,
        sm: 12,
        md: 6,
      }} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{ px: 4 }}>
          <Typography variant="h1">I'm a software engineer in Melbourne, Australia.</Typography>
          <Typography variant="h5" component="p">
            Let me tell you <Link variant="h5" href="/about">about myself</Link>.
          </Typography>
          <Typography variant="h5" component="p">
            Or maybe you'd prefer to read some of <Link variant="h5" href="/notes">my notes.</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid >
  );
}

export default HomeLayout;