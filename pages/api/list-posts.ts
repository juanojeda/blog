import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
}

export type ListPostsResponse = NextApiResponse<Post[]>;
  

export default function handler(req: NextApiRequest, res: ListPostsResponse) {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  res.status(200).json(posts);
}