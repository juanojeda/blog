import { getPosts } from 'functions/getPosts';
import HomePage from './HomePage';

export default async function () {
  
  const posts = await getPosts();
  return <HomePage posts={posts} />;
}