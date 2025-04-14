"use client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Grid, Paper } from "@mui/material";

export default function RecipesList({ recipes }) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ mt: 3, mb: 0 }}>
        My recipes
      </Typography>

      <Grid container sx={{ pt: 6 }}>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Paper elevation={0} sx={{ px: 4, py: 4, mb: 2 }}>
            {recipes.map((recipe) => (
              <Box key={recipe.slug} sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mt: 0, mb: 1 }}>
                  <Link variant="h5" href={`/recipes/${recipe.slug}`}>
                    {recipe.title}
                  </Link>
                </Typography>
                <Typography variant="body1" component="p">
                  {recipe.summary}
                </Typography>
                <Link href={`/recipes/${recipe.slug}`}>Read the recipe →</Link>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
