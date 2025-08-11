import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostMeta, BlogPostData } from "./blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      // Use file creation time as deterministic fallback for publishedAt
      let publishedAt = data.publishedAt;
      if (!publishedAt) {
        const stats = fs.statSync(fullPath);
        publishedAt = stats.birthtime.toISOString();
      }
      return {
        slug,
        title: data.title || "Untitled",
        publishedAt,
        author: data.author || {
          name: "Anonymous",
          avatar: "/assets/portraits/profile.PNG",
        },
        tags: data.tags || [],
        readTime: data.readTime || "5 min",
        featured: data.featured || false,
        description: data.description || "",
        img: data.img || undefined,
        tldr: data.tldr || undefined,
      } as BlogPostMeta;
    })
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPostData | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    let fileContents: string;
    
    try {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } catch {
      // Try .mdx extension if .md doesn't exist
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
      fileContents = fs.readFileSync(mdxPath, "utf8");
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      publishedAt: data.publishedAt || new Date().toISOString(),
      author: data.author || {
        name: "Anonymous",
        avatar: "/assets/portraits/profile.PNG",
      },
      tags: data.tags || [],
      readTime: data.readTime || "5 min",
      featured: data.featured || false,
      description: data.description || "",
  img: data.img || undefined,
  tldr: data.tldr || undefined,
      content,
    } as BlogPostData;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""));
}
