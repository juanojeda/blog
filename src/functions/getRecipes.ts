import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/recipes");

export const getRecipes = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((filename) => /.*.mdx/.test(filename))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const {
        data: {
          title,
          tags,
          "prep time": prepTime,
          "cook time": cookTime,
          servings,
          makes,
        },
      } = matter(fileContents);

      const slug = filename.replace(/\.mdx$/, "");
      return {
        slug,
        title,
        prepTime,
        cookTime,
        servings,
        makes,
        tags: tags || [],
      };
    });

  return posts;
};
