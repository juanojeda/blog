"use client";
import { Box, Grid2 as Grid, Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const PostLayout = ({ frontmatter, children }: { frontmatter: any; children: React.ReactNode }) => {
  return (
    <>
      <Link href="/"> Back home</Link>
      <Box component={'article'}>
        <Grid sx={{px: 0, py: 3}} container justifyContent={'space-between'} alignItems={'flex-end'}>
          <Grid>
            <Typography sx={{mb: 0}} variant="h1">{frontmatter.title}</Typography>
          </Grid>
          <Grid>
            <Typography variant="body1">Posted on {frontmatter.date}</Typography>
          </Grid>
        </Grid>
        <Paper sx={{
          py:4,
          px:4,
        }} elevation={0} >
          {children}
        </Paper>
      </Box>
    
    </>
  );
};

export default PostLayout;