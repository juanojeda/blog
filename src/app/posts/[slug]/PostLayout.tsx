"use client";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const PostLayout = ({ frontmatter, children }: { frontmatter: any; children: React.ReactNode }) => {
  return (
    <Box component={'article'}>
      <Box sx={{  mb: 4 }}>
        <Typography variant="h1">{frontmatter.title}</Typography>
        <Typography variant="body1">Posted on {frontmatter.date}</Typography>
      </Box>
      <Paper sx={{
        py:4,
        px:4,
      }} elevation={0} >
        {children}
      </Paper>
    </Box>
  );
};

export default PostLayout;