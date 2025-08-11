"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Tooltip,
} from "@heroui/react";
import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostMeta;
  isFeatured?: boolean;
}

export default function BlogPostCard({
  post,
  isFeatured = false,
}: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      key={post.slug}
      className="group hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border-none bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden"
      isPressable
      as={Link}
      href={`/blog/${post.slug}`}
    >
      <CardBody className="p-0 relative flex-none">
        <div className="relative overflow-hidden">
          <div className="absolute top-4 left-4 right-4 z-20">
            <div className="flex items-center gap-2 mb-2">
              {(post.featured || isFeatured) && (
                <Chip className="z-20" color="primary" variant="flat">
                  Featured
                </Chip>
              )}
              {post.readTime && (
                <Chip variant="flat" color="secondary">
                  {post.readTime}
                </Chip>
              )}
            </div>
          </div>
          <Image
            alt={post.title}
            className="w-full h-auto aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500"
            src={post.img || "/assets/images/dev.jpg"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </CardBody>
      <CardFooter className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors text-ellipsis text-left w-full h-fit">
          {post.title.length > 80
            ? post.title.slice(0, 77) + "..."
            : post.title}
        </h3>
        {post.description && (
          <p className="text-sm text-foreground/70 line-clamp-2">
            {post.description}
          </p>
        )}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3">
            <p className="text-xs text-foreground/70">
              {post.author?.name && <span className="mr-2">By {post.author.name}</span>}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </p>
          </div>
          {post.tldr && (
            <Tooltip
              content={
                <div className="px-1 py-2 max-w-64">
                  <div className="text-md">{post.tldr}</div>
                </div>
              }
            >
              <Button
                size="sm"
                variant="flat"
                color="primary"
                className="min-w-0"
              >
                Tl;DR
              </Button>
            </Tooltip>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
