import { getAllPosts } from "@/lib/blog-server";
import BlogList from "@/components/blog/blog-list";

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
