import { GetStaticPaths, GetStaticProps } from 'next';
import { marked } from 'marked';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/list-posts');
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
  const res = await fetch(`http://localhost:3000/api/get-post?slug=${params?.slug}`);

  const post = await res.json();


  const { frontmatter, content } = post;
  const htmlContent = marked(content);

  return {
    props: {
      frontmatter,
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