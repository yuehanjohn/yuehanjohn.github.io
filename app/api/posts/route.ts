export const dynamic = "force-static";

import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog-server';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
