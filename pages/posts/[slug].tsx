import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
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