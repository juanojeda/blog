import CommonLayout from "@/components/CommonLayout";
import { Box, Grid2 as Grid, Link, Paper, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <CommonLayout>
      <Box component={'article'} sx={{ px: 0, py: 3 }}>
        <Typography sx={{ mb: 0 }} variant="h1">Uh oh, that page doesn't exist!</Typography>
      </Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Paper sx={{
            py: 4,
            px: 4,
          }} elevation={0}>
            <Typography variant="body1">We can't find the page you're looking for.</Typography>
            <Link variant="h5" href="/">
              Back to home
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </CommonLayout>
  )
}