import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog-server";
import BlogPostCard from "@/components/blog/blog-post-card";
import BlogPost from "@/components/blog/blog-post";

// Next.js app router expects { params: { slug: string } }

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description:
      post.description || `Read ${post.title} by ${post.author?.name}`,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    publishedTime: post.publishedAt,
    keywords: post.tags,
  };
}

type PageProps = {
  params: { slug: string }
};

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Get all posts and filter similar ones by shared tags, excluding current post
  const allPosts = getAllPosts();
  const similarPosts = allPosts
    .filter(
      (p: import("@/lib/blog").BlogPostMeta) =>
        p.slug !== post.slug &&
        Array.isArray(p.tags) &&
        Array.isArray(post.tags) &&
        p.tags.some((tag: string) => post.tags?.includes(tag))
    )
    .slice(0, 3); // Show up to 3 similar posts

  return (
    <>
      <BlogPost
        title={post.title}
        content={post.content}
        author={post.author}
        publishedAt={post.publishedAt}
        tags={post.tags}
        readTime={post.readTime}
        featured={post.featured}
      />

      {/* Recommended Similar Posts Section */}
      {similarPosts.length > 0 && (
        <section className="mt-16 border-t pt-4 border-t-divider px-4 md:px-20">
          <h2 className="text-2xl font-bold mb-6">You might like :)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarPosts.map((similarPost) => (
              <div key={similarPost.slug}>
                <BlogPostCard post={similarPost} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
