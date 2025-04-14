import RecipeDetail from "./RecipeDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CommonLayout from "@/components/CommonLayout";
import { formatFrontmatter, getRecipes } from "functions/getRecipes";

export async function generateStaticParams() {
  const posts = await getRecipes();
  const paths = posts.map((post: any) => [{ slug: post.slug }]);

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // @/content alias doesn't work for some reason
  const { frontmatter } = await import("../../../content/recipes/" + slug + ".mdx");

  const metadata = {
    title: `Juan Ojeda — ${frontmatter.title}`,
    description: "A recipe by Juan Ojeda",
    openGraph: {
      title: frontmatter.title,
      description: "A recipe by Juan Ojeda",
      url: `https://www.juanojeda.com/recipes/${slug}`,
    },
  };

  return metadata;
}

export default async function NotesListPage({ params }) {
  const { slug } = await params;

  try {
    // @/content alias doesn't work for some reason
    const { default: Post, frontmatter } = await import(
      "../../../content/recipes/" + slug + ".mdx"
    );

    return (
      <CommonLayout fade="10%">
        <RecipeDetail frontmatter={formatFrontmatter(frontmatter)}>
          <Post />
        </RecipeDetail>
      </CommonLayout>
    );
  } catch (e) {
    notFound();
  }
}
