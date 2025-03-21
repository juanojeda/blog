import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');


export async function GET(_request: Request, {params}: {params: Promise<{slug: string}>}) { 
  const { slug } = await params;

  const filename = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filename, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return Response.json({ slug, frontmatter, content });
}