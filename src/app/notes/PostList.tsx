'use client'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Paper } from "@mui/material";
import FormattedDate from "@/components/FormattedDate";

export default function HomePage({ posts }) {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h2">Recent notes</Typography>

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
    </Box>
  );
}