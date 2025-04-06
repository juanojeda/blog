import { getPosts } from 'functions/getPosts';
import PostList from './PostList';

export default async function () {

  const posts = await getPosts();

  return <PostList posts={posts} />;
}