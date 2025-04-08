'use client'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Grid2 as Grid, Paper } from "@mui/material";
import FormattedDate from "@/components/FormattedDate";

export default function HomePage({ posts }) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ mt: 2 }}>Recent notes</Typography>

      <Grid container>
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper elevation={0} sx={{ px: 4, py: 4, mb: 2 }}>
            {posts.map((post) => (
              <Box key={post.slug} sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mt: 0, mb: 1 }}>
                  <Link variant="h5" href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </Typography>
                <FormattedDate date={post.date} />
                <Typography variant="body1" component="p">
                  {post.summary}
                </Typography>
                <Link href={`/posts/${post.slug}`}>
                  Read more →
                </Link>
              </Box>
            ))}

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}