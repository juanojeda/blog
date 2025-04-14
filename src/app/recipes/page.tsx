import { getRecipes } from "functions/getRecipes";
import RecipeList from "./RecipeList";
import { Metadata } from "next";
import CommonLayout from "@/components/CommonLayout";

export async function generateMetadata() {
  const metadata: Metadata = {
    title: "Juan Ojeda — Recipes",
    description:
      "Food experiments and recipes by Juan Ojeda, a home cook and problem solver based in Melbourne, Australia.",
  };

  return metadata;
}

export default async function RecipesListPage() {
  const posts = await getRecipes();

  return (
    <CommonLayout>
      <RecipeList posts={posts} />
    </CommonLayout>
  );
}
