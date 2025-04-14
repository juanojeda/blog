"use client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Grid, Paper } from "@mui/material";

export default function RecipesList({ posts }) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ mt: 3, mb: 0 }}>
        Recent recipes
      </Typography>

      <Grid container sx={{ pt: 6 }}>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Paper elevation={0} sx={{ px: 4, py: 4, mb: 2 }}>
            {posts.map((post) => (
              <Box key={post.slug} sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mt: 0, mb: 1 }}>
                  <Link variant="h5" href={`/recipes/${post.slug}`}>
                    {post.title}
                  </Link>
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
