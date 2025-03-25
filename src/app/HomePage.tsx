'use client'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
 
export default function HomePage({ posts }) {
  return (
    <div>
      <Typography variant="h2">Recent posts</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <Typography component={'span'} variant='body1'> - {post.date}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}