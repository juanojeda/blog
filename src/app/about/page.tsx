import CommonLayout from '@/components/CommonLayout';
import AboutLayout from './AboutPage';


export async function generateMetadata() {
  const metadata = {
    title: 'Juan Ojeda — About',
    description: 'About Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.'
  }
  return metadata;
}

export default async function About() {

  const { default: Post, frontmatter } = await import('./About' + '.mdx');

  return (
    <CommonLayout>
      <AboutLayout frontmatter={frontmatter}>
        <Post />
      </AboutLayout>
    </CommonLayout>
  );
}