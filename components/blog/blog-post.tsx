"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Card, CardBody, Chip, User } from "@heroui/react";
import { Button } from "@heroui/button";
import Image from "next/image";
import { TracingBeam } from "@/components/effects/tracing-beam";
import { FaShare } from "react-icons/fa";

// Import highlight.js CSS for syntax highlighting
import "highlight.js/styles/github-dark.css";

interface BlogPostProps {
  title: string;
  content: string;
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  tags?: string[];
  readTime?: string;
  featured?: boolean;
}

export default function BlogPost({
  title,
  content,
  author,
  publishedAt,
  tags = [],
  readTime,
  featured = false,
}: BlogPostProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center h-16 sm:h-20 md:h-24 z-50 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden bg-background/80 backdrop-blur-md border-b border-divider">
        <img
          src="/assets/logos/logo.png"
          alt="Logo"
          className="h-4 sm:h-5 w-auto object-contain"
          style={{ aspectRatio: "auto" }}
        />
        <div className="hidden md:flex items-center gap-2 flex-row">
          <Button variant="light" as="a" href="/">
            Home
          </Button>
          <Button variant="light" as="a" href="/blog">
            Blog
          </Button>
          <Button variant="light" as="a" href="/about">
            About
          </Button>
          <Button variant="light" as="a" href="/contact">
            Contact
          </Button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="light" size="sm" as="a" href="/blog">
            ← Blog
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <TracingBeam>
        <div className="pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 sm:mb-10 md:mb-12 pt-6 sm:pt-8 md:pt-12">
              {featured && (
                <Chip
                  color="primary"
                  variant="flat"
                  className="mb-3 sm:mb-4"
                  size="sm"
                >
                  Featured
                </Chip>
              )}

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-foreground">
                {title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base text-foreground-600">
                <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                {readTime && (
                  <>
                    <span>•</span>
                    <span>{readTime} read</span>
                  </>
                )}
              </div>

              {/* Author */}
              {author && (
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
                  <User
                    name={author.name}
                    description={author.bio || "Author"}
                    avatarProps={{
                      src: author.avatar || "/assets/portraits/profile.PNG",
                      size: "md",
                    }}
                    classNames={{
                      name: "text-sm sm:text-base",
                      description: "text-xs sm:text-sm",
                    }}
                  />
                </div>
              )}
            </header>

            {/* Blog Content */}
            <Card className="mb-8 sm:mb-10 md:mb-12">
              <CardBody className="p-4 sm:p-6 md:p-8 lg:p-12">
                <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    components={{
                      // Custom component for images
                      img: ({ src, alt, ...props }) => (
                        <div className="my-6 sm:my-8">
                          <Image
                            src={src || ""}
                            alt={alt || "Blog image"}
                            width={800}
                            height={400}
                            className="rounded-lg shadow-md w-full h-auto"
                          />
                          {alt && (
                            <p className="text-center text-xs sm:text-sm text-foreground-600 mt-2 italic">
                              {alt}
                            </p>
                          )}
                        </div>
                      ),
                      // Custom component for headings
                      h1: ({ children }) => (
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-5 md:mb-6 text-foreground">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 text-foreground">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base sm:text-lg md:text-xl font-medium mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-3 text-foreground">
                          {children}
                        </h3>
                      ),
                      // Custom component for paragraphs
                      p: ({ children }) => (
                        <p className="mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base text-foreground-800">
                          {children}
                        </p>
                      ),
                      // Custom component for blockquotes
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 py-2 my-4 sm:my-6 bg-content2 rounded-r-lg">
                          <div className="text-sm sm:text-base text-foreground-700 italic">
                            {children}
                          </div>
                        </blockquote>
                      ),
                      // Custom component for code blocks
                      pre: ({ children }) => (
                        <div className="my-4 sm:my-6 overflow-x-auto">
                          <pre className="bg-content1 rounded-lg p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
                            {children}
                          </pre>
                        </div>
                      ),
                      // Custom component for inline code
                      code: ({ children, className }) => {
                        const isInline = !className;
                        if (isInline) {
                          return (
                            <code className="bg-content2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-mono text-primary">
                              {children}
                            </code>
                          );
                        }
                        return <code className={className}>{children}</code>;
                      },
                      // Custom component for lists
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 sm:mb-5 md:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-foreground-800">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 sm:mb-5 md:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-foreground-800">
                          {children}
                        </ol>
                      ),
                      // Custom component for links
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-primary hover:text-primary-600 underline underline-offset-2 break-words"
                          target={
                            href?.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href?.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </article>
              </CardBody>
            </Card>

            {/* Footer Navigation */}
            <div className="flex flex-row justify-between w-full items-start">
              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7 md:mb-8 mt-1">
                  {tags.map((tag, index) => (
                    <Chip
                      key={index}
                      variant="flat"
                      size="lg"
                      className="text-xs sm:text-sm"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
              <Button
                variant="light"
                color="primary"
                startContent={<FaShare />}
              >
                Share
              </Button>
            </div>

            {author && (
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
                <User
                  name={author.name}
                  description={author.bio || "Author"}
                  avatarProps={{
                    src: author.avatar || "/assets/portraits/profile.PNG",
                    size: "md",
                  }}
                  classNames={{
                    name: "text-sm sm:text-base",
                    description: "text-xs sm:text-sm",
                  }}
                />
              </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 sm:py-8 border-t border-divider">
              <Button
                variant="light"
                as="a"
                href="/blog"
                className="w-full sm:w-auto"
              >
                ← Back to Blog
              </Button>
              <Button
                variant="light"
                as="a"
                href="/"
                className="w-full sm:w-auto"
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}
