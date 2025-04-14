"use client";
import { FootnoteHighlight } from "@/components/FootnoteHighlight";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Suspense } from "react";

const RecipeDetail = ({ frontmatter, children }) => {
  return (
    <>
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
        </Grid>
      </Box>
    </>
  );
};

export default RecipeDetail;
