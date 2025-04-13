"use client";
import theme from "@/app/theme";
import {
  alpha,
  Box,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FormattedDate from "@/components/FormattedDate";
import { Suspense } from "react";


const RecipePage = ({ frontmatter, children }) => {

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
                {children}
              </Suspense>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RecipePage;
