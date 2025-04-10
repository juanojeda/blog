import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-frontmatter"],
      [
        "remark-mdx-frontmatter",
        {
          name: "frontmatter",
        },
      ],
      ["remark-gfm"],
    ],
    rehypePlugins: [
      ["rehype-slug"],
      [
        "rehype-autolink-headings",
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
      ["rehype-prism-plus", { ignoreMissing: true }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/notes/:slug",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
