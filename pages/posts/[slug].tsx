import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POST_API = 'http://localhost:3000/api/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(POST_API);
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(POST_API);
  const posts = await res.json();
  const post = posts.find((post: any) => post.slug === params?.slug);

  const { data, content } = matter(post.content);
  const htmlContent = marked(content);

  return {
    props: {
      frontmatter: data,
      content: htmlContent,
    },
  };
};

const Post = ({ frontmatter, content }: { frontmatter: any; content: string }) => {
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default Post;