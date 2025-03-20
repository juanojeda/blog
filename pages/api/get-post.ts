import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface GetPostQuery extends NextApiRequest {
  query: {
    slug: string;
  }
}

export default function handler({query: {slug}}: GetPostQuery, res: NextApiResponse) {
  const filename = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filename, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  res.status(200).json({slug, frontmatter, content});
}