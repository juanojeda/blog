import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
      frontmatter: data,
      content,
    };
  });

  res.status(200).json(posts);
}