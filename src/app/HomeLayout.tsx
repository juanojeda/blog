import HalftoneImage from '@/components/HalftoneImage';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';
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
          px: 4
        }}>
          <Typography variant='poster' color="primary.contrastText" textAlign="center">Hi, I'm Juan.</Typography>
        </Stack>
      </Grid>
      <Grid size={{
        xs: 12,
        sm: 12,
        md: 6,
      }}>
      </Grid>
    </Grid >
  );
}

export default HomeLayout;