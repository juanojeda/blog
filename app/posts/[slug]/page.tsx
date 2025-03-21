import PostLayout from "./PostLayout";
import { marked } from 'marked';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => [{slug: post.slug}]);

  return paths;
}

async function getPost(params) {
  const res = await fetch(`http://localhost:3000/api/posts/${(await params).slug}`);
  const post = await res.json();

  const { frontmatter, content } = post;
  const htmlContent = await marked(content);

  return { frontmatter, content: htmlContent };
}

export default async function Post({params}) {
  const post = await getPost(params);
  return <PostLayout {...post} />;
}