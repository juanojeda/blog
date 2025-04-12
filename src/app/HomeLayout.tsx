import HalftoneImage from '@/components/HalftoneImage';
import { Box, Grid2 as Grid, Link, Paper, Stack, Typography } from '@mui/material';
import profilePic from '@/public/images/profile.jpg';
import HalftoneBox from '@/components/HalftoneBox';
import React from 'react';
import WordScroller from '@/components/WordScroller';

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
      }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
          <HalftoneImage src={profilePic} alt="profile picture of Juan, smiling with hands on hips" width="100%" height="100%" />
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
        <HalftoneBox sx={{ px: 4 }} height="100%" display="flex" flexDirection="column" justifyContent="center" fade='40%'>
          <Typography variant="h1">I'm a <WordScroller timeoutMs={3000} defaultWord="software engineer" otherWords={[
            "designer",
            "tech lead",
            "problem solver"
          ]} /> in Melbourne, Australia.</Typography>
          <Typography variant="h5" component="p">
            Let me tell you <Link variant="h5" href="/about">about myself</Link>.
          </Typography>
          <Typography variant="h5" component="p">
            Or maybe you'd prefer to read some of <Link variant="h5" href="/notes">my notes.</Link>
          </Typography>
        </HalftoneBox>
      </Grid>
    </Grid >
  );
}

export default HomeLayout;