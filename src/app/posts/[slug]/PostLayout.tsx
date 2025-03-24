"use client";
import Typography from "@mui/material/Typography";

const PostLayout = ({ frontmatter, children }: { frontmatter: any; content: string; children: React.ReactNode }) => {
  return (
    <article>
      <Typography variant="h1">{frontmatter.title}</Typography>
      {children}
    </article>
  );
};

export const PostLayout2 = ({children}) => {
  return (
    <article>
      {children}
    </article>
  );
}

export default PostLayout;