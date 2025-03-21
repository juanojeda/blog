import HomePage from './HomePage';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface Props {
  posts: Post[];
}

const getPosts = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return posts;
};

export default async function () {
  const posts = await getPosts();
  return <HomePage posts={posts} />;
}