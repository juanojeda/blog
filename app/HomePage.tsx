'use client'
import Text from '@/components/Text/Text';
import Link from 'next/link';
 
export default function HomePage({ posts }) {
  return (
    <div>
      <Text as="h1">My Blog</Text>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <Text>{post.date}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}