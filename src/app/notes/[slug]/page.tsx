import { getPosts } from "functions/getPosts";
import PostDetail from "./PostDetail";
import { getRelatedPosts } from "functions/getRelatedPosts";
import { notFound } from "next/navigation";
import CommonLayout from "@/components/CommonLayout";

export async function generateStaticParams() {
  const posts = await getPosts();
  const paths = posts.map((post: any) => [{ slug: post.slug }]);
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // @/content alias doesn't work for some reason
  const { frontmatter } = await import("../../../content/" + slug + ".mdx");

  const metadata = {
    title: `Juan Ojeda — ${frontmatter.title}`,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      url: `https://www.juanojeda.com/notes/${slug}`,
    },
  };

  return metadata;
}

export default async function Post({ params }) {
  const { slug } = await params;
  try {
    // @/content alias doesn't work for some reason
    const { default: Post, frontmatter } = await import(
      "../../../content/" + slug + ".mdx"
    );
    const relatedPosts = await getRelatedPosts(slug);

    return (
      <CommonLayout fade="20vh">
        <PostDetail frontmatter={frontmatter} relatedPosts={relatedPosts}>
          <Post />
        </PostDetail>
      </CommonLayout>
    );
  } catch (e) {
    notFound();
  }
}
