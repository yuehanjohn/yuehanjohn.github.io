import { getAllPosts } from "@/lib/blog-server";
import { BlogIndexClient } from "@/components/blog/blog-index-client";
import BlogHeader from "@/components/blog/blog-header";
import { TopBar } from "@/components/blog/topbar";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full" >
      <TopBar count={posts.length} />
      <BlogHeader />
      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        {posts.length === 0 ? (
          <p className="py-24 text-center text-foreground-600">
            No posts yet. Check back soon.
          </p>
        ) : (
          <BlogIndexClient posts={posts} pageSize={6} />
        )}
      </main>
    </main>
  );
}
