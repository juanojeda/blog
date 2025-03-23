'use client'
import Link from 'next/link';
import Typography from "@mui/material/Typography";
 
export default function HomePage({ posts }) {
  return (
    <div>
      <Typography variant="h1">My Blog</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <Typography variant='body1'>{post.date}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}