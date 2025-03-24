"use client";
import Typography from "@mui/material/Typography";

const PostLayout = ({ frontmatter, children }: { frontmatter: any; children: React.ReactNode }) => {
  return (
    <article>
      <Typography variant="h1">{frontmatter.title}</Typography>
      {children}
    </article>
  );
};

export default PostLayout;