export type Frontmatter = {
  title: string;
  summary?: string;
  date?: string;
  tags?: string[];
};

// mdx-custom.d.ts
declare module "*.mdx" {
  export const frontmatter: Frontmatter;
}
