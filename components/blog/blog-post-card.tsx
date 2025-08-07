"use client";

import React from "react";
import { Card, CardBody, CardHeader, Chip, User } from "@heroui/react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
  isFeatured?: boolean;
}

export default function BlogPostCard({ post, isFeatured = false }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isFeatured) {
    return (
      <Card
        key={post.slug}
        className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
        isPressable
        as={Link}
        href={`/blog/${post.slug}`}
      >
        <CardHeader className="flex flex-col items-start gap-2 sm:gap-3 p-4 sm:p-5 md:p-6">
          <div className="flex justify-between items-start w-full">
            <Chip color="primary" variant="flat" size="sm">
              Featured
            </Chip>
            <div className="text-xs sm:text-sm text-foreground-600">
              {formatDate(post.publishedAt)}
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          {post.description && (
            <p className="text-sm sm:text-base text-foreground-700 line-clamp-3">
              {post.description}
            </p>
          )}
        </CardHeader>
        <CardBody className="pt-0 px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {post.author && (
                <User
                  name={post.author.name}
                  avatarProps={{
                    src: post.author.avatar || "/assets/portraits/profile.PNG",
                    size: "sm",
                  }}
                  classNames={{
                    name: "text-xs sm:text-sm",
                  }}
                />
              )}
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground-600">
              {post.readTime && <span>{post.readTime} read</span>}
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Chip
                  key={index}
                  variant="bordered"
                  size="sm"
                  className="text-xs"
                >
                  {tag}
                </Chip>
              ))}
              {post.tags.length > 3 && (
                <Chip variant="bordered" size="sm" className="text-xs">
                  +{post.tags.length - 3} more
                </Chip>
              )}
            </div>
          )}
        </CardBody>
      </Card>
    );
  }

  return (
    <Card
      key={post.slug}
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
      isPressable
      as={Link}
      href={`/blog/${post.slug}`}
    >
      <CardHeader className="flex flex-col items-start gap-2 sm:gap-3 p-3 sm:p-4">
        <div className="flex justify-between items-start w-full">
          <div className="text-xs sm:text-sm text-foreground-600">
            {formatDate(post.publishedAt)}
          </div>
          {post.readTime && (
            <div className="text-xs sm:text-sm text-foreground-600">
              {post.readTime} read
            </div>
          )}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-xs sm:text-sm text-foreground-700 line-clamp-2">
            {post.description}
          </p>
        )}
      </CardHeader>
      <CardBody className="pt-0 px-3 sm:px-4 pb-3 sm:pb-4">
        {post.author && (
          <div className="mb-2 sm:mb-3">
            <User
              name={post.author.name}
              avatarProps={{
                src: post.author.avatar || "/assets/portraits/profile.PNG",
                size: "sm",
              }}
              classNames={{
                name: "text-xs sm:text-sm",
              }}
            />
          </div>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                variant="bordered"
                size="sm"
                className="text-xs"
              >
                {tag}
              </Chip>
            ))}
            {post.tags.length > 2 && (
              <Chip variant="bordered" size="sm" className="text-xs">
                +{post.tags.length - 2}
              </Chip>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
