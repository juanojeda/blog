import { getPosts } from "functions/getPosts";
import PostLayout from "./PostLayout";
import { getRelatedPosts } from "functions/getRelatedPosts";

export async function generateStaticParams() {
  const posts = await getPosts();
  const paths = posts.map((post: any) => [{slug: post.slug}]);

  return paths;
}

export default async function Post({params}) {
  const {slug} = await params;
  // @/content alias doesn't work for some reason
  const { default: Post, frontmatter } = await import('../../../content/' + slug + '.mdx');

  const relatedPosts = await getRelatedPosts(slug)

  return <PostLayout frontmatter={frontmatter} relatedPosts={relatedPosts}><Post /></PostLayout>;
}