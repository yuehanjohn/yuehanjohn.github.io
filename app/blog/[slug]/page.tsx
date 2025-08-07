import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog-server";
import BlogPost from "@/components/blog/blog-post";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description || `Read ${post.title} by ${post.author?.name}`,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    publishedTime: post.publishedAt,
    keywords: post.tags,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPost
      title={post.title}
      content={post.content}
      author={post.author}
      publishedAt={post.publishedAt}
      tags={post.tags}
      readTime={post.readTime}
      featured={post.featured}
    />
  );
}
