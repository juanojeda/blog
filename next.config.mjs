import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-frontmatter"], ["remark-mdx-frontmatter"]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
