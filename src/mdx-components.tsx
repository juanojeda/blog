import type { MDXComponents } from 'mdx/types'
import { defaultMdxComponents, getMdxComponents } from 'mui-markdown';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  }
}