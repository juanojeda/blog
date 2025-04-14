"use client";
import { FootnoteHighlight } from "@/components/FootnoteHighlight";
import { Box, Chip, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";

const RecipeMetadata = ({ servings, makes, prepTime, cookTime }) => {
  const chipProps = {
    size: "small",
    variant: "outlined",
    color: "secondary",
    sx: {
      mr: 1,
    },
  };
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "block",
        },
        pb: {
          xs: 2,
          md: 0,
        },
        px: {
          xs: 0,
          md: 4,
        },
      }}
    >
      {servings && <Chip label={`Serves: ${servings}`} {...chipProps} />}
      {makes && <Chip label={`Makes ${makes}`} {...chipProps} />}
      {prepTime && <Chip label={`Prep time: ${prepTime}`} {...chipProps} />}
      {cookTime && <Chip label={`Cook time: ${cookTime}`} {...chipProps} />}
    </Box>
  );
};

const RecipeDetail = ({ frontmatter, children }) => {
  return (
    <>
      <Link href="/recipes">← Back to recipes</Link>
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
        </Grid>
        <Grid container>
          <Grid
            order={{
              xs: 2,
              md: 0,
            }}
            size={{ xs: 12, md: 8, lg: 9 }}
          >
            <Paper
              sx={{
                py: 4,
                px: 4,
              }}
              elevation={0}
            >
              {frontmatter.summary && (
                <Typography variant="body1" color="text.secondary">
                  {frontmatter.summary}
                </Typography>
              )}
              <Suspense>
                <FootnoteHighlight>{children}</FootnoteHighlight>
              </Suspense>
            </Paper>
          </Grid>
          <Grid
            order={{
              xs: 1,
              md: 0,
            }}
            size={{ xs: 12, md: 4, lg: 3 }}
          >
            <RecipeMetadata {...frontmatter} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipeDetail;
