import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import matter from 'gray-matter';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data?.title,
      date: data?.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;