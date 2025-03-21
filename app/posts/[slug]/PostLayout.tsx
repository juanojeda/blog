"use client";

import typography from "@/components/typography/_typography.module.css";

const PostLayout = ({ frontmatter, content }: { frontmatter: any; content: string }) => {
  return (
    <article>
      <h1 className={`${typography.h1} ${typography.heading}`}>{frontmatter.title}</h1>
      <div className={typography.marked} dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default PostLayout;