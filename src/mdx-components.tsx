import type { MDXComponents } from "mdx/types";
import { defaultMdxComponents } from "mui-markdown";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}
