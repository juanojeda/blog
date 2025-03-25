import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content');

export interface Post {
  slug: string;
  title: string;
  date: string;
}

export async function GET() {

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.mdx$/, '');
    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  return Response.json(posts)
}