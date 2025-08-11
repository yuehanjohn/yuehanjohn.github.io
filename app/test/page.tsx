import React from "react";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-server";
import { BlogPostMeta } from "@/lib/blog";
import { TopBar } from "@/components/blog/topbar";
import {
  BlogIndexClient,
  CommentsSection,
} from "@/components/blog/blog-index-client";
import { BlogHero } from "@/components/blog/hero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A clean, fast, and accessible blog with search, pagination, and dark mode.",
  openGraph: {
    title: "Blog",
    description:
      "A clean, fast, and accessible blog with search, pagination, and dark mode.",
    type: "website",
    images: [
      {
        url: "/assets/images/dev2.jpg",
        width: 1200,
        height: 630,
        alt: "Blog preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "A clean, fast, and accessible blog with search, pagination, and dark mode.",
    images: ["/assets/images/dev2.jpg"],
  },
};

export default async function TestBlogPage() {
  // SSG: evaluated at build time; for ISR, could wrap in a route handler or fetch with revalidate.
  const posts: BlogPostMeta[] = getAllPosts();
  const latest = posts[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Accessible top bar with dark mode */}
      <TopBar count={posts.length} />

      {/* Billion-dollar minimalist hero */}
      <BlogHero latest={latest} />

      {/* Main listing with search + pagination */}
      <main className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        {posts.length === 0 ? (
          <p className="py-24 text-center text-foreground-600">
            No posts yet. Check back soon.
          </p>
        ) : (
          <BlogIndexClient posts={posts} pageSize={6} />
        )}
      </main>
    </div>
  );
}
