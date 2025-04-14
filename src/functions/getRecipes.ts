import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type RecipeFrontmatter = {
  title: string;
  tags: string[];
  prepTime: string;
  cookTime: string;
  servings: string;
  makes: string;
  summary: string;
};

export const RECIPES_DIR = path.join(process.cwd(), "src/content/recipes");

export const formatFrontmatter = (frontmatter) => {
  const formattedFrontmatter: RecipeFrontmatter = {
    title: frontmatter.title || "",
    tags: frontmatter.tags || [],
    prepTime: frontmatter["prep time"] || "",
    cookTime: frontmatter["cook time"] || "",
    servings: frontmatter.servings || "",
    makes: frontmatter.makes || "",
    summary: frontmatter.summary || "",
  };
  return formattedFrontmatter;
};

export const getRecipeBySlug = (filename) => {
  const filePath = path.join(RECIPES_DIR, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  const slug = filename.replace(/\.mdx$/, "");
  return { ...formatFrontmatter(data), slug };
};

export const getRecipes = async () => {
  const filenames = fs.readdirSync(RECIPES_DIR);
  const recipes = filenames
    .filter((filename) => /.*.mdx/.test(filename))
    .map((filename) => getRecipeBySlug(filename));

  return recipes;
};
