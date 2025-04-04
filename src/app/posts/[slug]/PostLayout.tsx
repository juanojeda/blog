"use client";
import { Box, Grid2 as Grid, Link, List, ListItem, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

type PostLayoutProps = {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  children: React.ReactNode;
  relatedPosts?: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
  }[];
};

const PostLayout = ({ frontmatter, children, relatedPosts }: PostLayoutProps) => {
  const hasRelatedPosts = relatedPosts && relatedPosts.length > 0;
  return (
    <>
      <Link href="/">← Back home</Link>
      <Box component={'article'}>
        <Grid sx={{px: 0, py: 3}} container justifyContent={'space-between'} alignItems={'flex-end'}>
          <Grid>
            <Typography sx={{mb: 0}} variant="h1">{frontmatter.title}</Typography>
          </Grid>
          <Grid>
            <Typography variant="body2">Posted on {frontmatter.date}</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{xs: 12, md: 8, lg: 9}}>
            <Paper sx={{
              py:4,
              px:4,
            }} elevation={0} >
              {children}
            </Paper>
          </Grid>
          <Grid size={{xs: 12, md: 4, lg: 3}} sx={{
            px: 4}}>
            <Typography variant="h5" color="text.secondary">Related Posts</Typography>
            {hasRelatedPosts ? <List sx={{py: 0}}>
              {relatedPosts?.map((post) => (
              <ListItem key={post.slug} sx={{px: 0}}>
                  <Stack>
                    <Box>
                      <Link href={`/posts/${post.slug}`}>
                        <Typography variant="body2">{post.title}</Typography>
                      </Link>
                    </Box>
                      <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                  </Stack>
              </ListItem>
              ))}
            </List> : <Typography variant="body2" color="text.secondary">No related posts</Typography>}
          </Grid>
        </Grid>
      </Box>
    
    </>
  );
};

export default PostLayout;