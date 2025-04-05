import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content');

export const getPosts = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.filter(filename => /.*.mdx/.test(filename)).map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: {title, date, tags, summary} } = matter(fileContents);
    const slug = filename.replace(/\.mdx$/, '');
    return {
      slug,
      title,
      date,
      tags: tags || [],
      summary
    };
  }).sort(({date: aDate}, {date: bDate}) => aDate > bDate ? -1 : 1);

  return posts;
};