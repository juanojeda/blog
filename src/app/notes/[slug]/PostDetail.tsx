"use client";
import { Box, Grid, Link, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import FormattedDate from "@/components/FormattedDate";
import { Suspense } from "react";
import { FootnoteHighlight } from "@/components/FootnoteHighlight";

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

const PostDetail = ({ frontmatter, children, relatedPosts }: PostLayoutProps) => {
  const hasRelatedPosts = relatedPosts && relatedPosts.length > 0;

  return (
    <>
      <Link href="/notes">← Back to notes</Link>
      <Box component={"article"}>
        <Grid
          sx={{ px: 0, py: 3 }}
          container
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <Grid size={12}>
            <Typography sx={{ mb: 0 }} variant="h1">
              {frontmatter.title}
            </Typography>
          </Grid>
          <Grid size={12}>
            <FormattedDate date={frontmatter.date} />
          </Grid>
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
              <Suspense>
                <FootnoteHighlight>{children}</FootnoteHighlight>
              </Suspense>
            </Paper>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4, lg: 3 }}
            sx={{
              px: 4,
            }}
          >
            <Typography variant="h5" color="text.secondary">
              Related Posts
            </Typography>
            {hasRelatedPosts ? (
              <List sx={{ py: 0 }}>
                {relatedPosts?.map((post) => (
                  <ListItem key={post.slug} sx={{ px: 0 }}>
                    <Stack>
                      <Box>
                        <Link href={`/notes/${post.slug}`}>
                          <Typography variant="body2" component="span">
                            {post.title}
                          </Typography>
                        </Link>
                      </Box>
                      <FormattedDate date={post.date} />
                    </Stack>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No related posts
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PostDetail;
