import HalftoneImage from '@/components/HalftoneImage';
import { Grid2 as Grid } from '@mui/material';
import profilePic from '@/public/images/profile.jpg';

const HomeLayout = () => {
  return (
    <Grid container minHeight={"calc(100vh - 60px)"}>
      <Grid size={6} bgcolor={"primary.dark"} color="white">
        <HalftoneImage src={profilePic} alt="Halftone" width="100%" height="100%" />
      </Grid>
      <Grid size={6}>
        Other thing
      </Grid>
    </Grid>
  );
}

export default HomeLayout;