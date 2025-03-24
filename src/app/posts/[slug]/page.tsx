import PostLayout, { PostLayout2 } from "./PostLayout";
import { marked } from 'marked';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => [{slug: post.slug}]);

  return paths;
}

export default async function Post({params}) {
  const {slug} = await params;
  const { default: Post } = await import('@/content/' + slug + '.mdx');

  return <PostLayout2><Post /></PostLayout2>;
}