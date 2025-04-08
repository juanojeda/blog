import { getPosts } from 'functions/getPosts';
import AboutLayout from './AboutLayout';

export default async function () {

  const { default: Post, frontmatter } = await import('./About.mdx');

  return <AboutLayout frontmatter={frontmatter}><Post /></AboutLayout>;
}