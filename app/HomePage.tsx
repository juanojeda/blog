'use client'
import Link from 'next/link';
 
export default function HomePage({ posts }) {
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
}