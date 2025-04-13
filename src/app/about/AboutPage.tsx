import { Box, Grid, Paper, Typography } from "@mui/material";

const AboutLayout = ({ frontmatter, children }) => {
  return (
    <Box sx={{ py: 4 }} component={"article"}>
      <Typography sx={{ mb: 0, mt: 3 }} variant="h1">
        {frontmatter.title}
      </Typography>
      <Grid
        sx={{ pt: 6 }}
        container
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Grid size={12}></Grid>
      </Grid>
      <Grid container>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Paper
            sx={{
              py: 4,
              px: 4,
            }}
            elevation={0}
          >
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutLayout;
