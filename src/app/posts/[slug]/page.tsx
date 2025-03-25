import PostLayout from "./PostLayout";

export async function generateStaticParams() {
  const res = await fetch('/api/posts');
  const posts = await res.json();
  const paths = posts.map((post: any) => [{slug: post.slug}]);

  return paths;
}

export default async function Post({params}) {
  const {slug} = await params;
  // @/content alias doesn't work for some reason
  const { default: Post, frontmatter } = await import('../../../content/' + slug + '.mdx');

  return <PostLayout frontmatter={frontmatter}><Post /></PostLayout>;
}