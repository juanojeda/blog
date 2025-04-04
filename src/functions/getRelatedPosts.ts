import { getPosts } from './getPosts';

export const getRelatedPosts = async (currentPostSlug: string) => {
  const posts = await getPosts();

  // Find the current post
  const currentPost = posts.find(post => post.slug === currentPostSlug);
  if (!currentPost) return [];

  const currentTags = currentPost.tags;

  // Filter posts with overlapping tags, excluding the current post
  const relatedPosts = posts.filter(post => 
    post.slug !== currentPostSlug &&
    post.tags.some(tag => currentTags.includes(tag))
  );

  return relatedPosts;
};