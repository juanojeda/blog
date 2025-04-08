import AboutLayout from './AboutLayout';

export default async function About() {

  const { default: Post, frontmatter } = await import('./About' + '.mdx');

  return <AboutLayout frontmatter={frontmatter}><Post /></AboutLayout>;
}