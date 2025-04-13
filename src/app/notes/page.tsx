import { getPosts } from 'functions/getPosts';
import PostList from './PostList';
import { Metadata } from 'next';
import CommonLayout from '@/components/CommonLayout';

export async function generateMetadata() {
  const metadata: Metadata = {
    title: 'Juan Ojeda — Notes',
    description: 'Notes and musings by Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.',
  }

  return metadata;
}

export default async function () {

  const posts = await getPosts();

  return (
    <CommonLayout>
      <PostList posts={posts} />
    </CommonLayout>
  )
}