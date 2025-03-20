import { GetStaticProps } from 'next';
import Link from 'next/link';

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
  const res = await fetch('http://localhost:3000/api/list-posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;