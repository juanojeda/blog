import RecipeDetail from "./RecipeDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CommonLayout from "@/components/CommonLayout";
import { getRecipes } from "functions/getRecipes";

export async function generateStaticParams() {
  const posts = await getRecipes();
  const paths = posts.map((post: any) => [{ slug: post.slug }]);

  return paths;
}

export default async function NotesListPage({ params }) {
  const { slug } = await params;

  try {
    // @/content alias doesn't work for some reason
    const { default: Post, frontmatter } = await import(
      "../../../../content/recipes/" + slug + ".mdx"
    );

    return (
      <CommonLayout>
        <RecipeDetail frontmatter={frontmatter}>
          <Post />
        </RecipeDetail>
      </CommonLayout>
    );
  } catch (e) {
    notFound();
  }
}
