import PostLayout from "./PostLayout";

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => [{slug: post.slug}]);

  return paths;
}

export default async function Post({params}) {
  const {slug} = await params;
  const { default: Post, frontmatter } = await import('@/content/' + slug + '.mdx');

  return <PostLayout frontmatter={frontmatter}><Post /></PostLayout>;
}