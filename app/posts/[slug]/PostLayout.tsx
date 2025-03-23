"use client";
import Typography from "@mui/material/Typography";

const PostLayout = ({ frontmatter, content }: { frontmatter: any; content: string }) => {
  return (
    <article>
      <Typography variant="h1">{frontmatter.title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default PostLayout;