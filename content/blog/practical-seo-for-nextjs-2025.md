---
title: "Practical SEO for Next.js in 2025"
publishedAt: "2025-06-05"
author:
  name: "Yuehan John"
  avatar: "/assets/portraits/profile.PNG"
  bio: "Full-stack developer and AI enthusiast"
tags: ["SEO", "Next.js", "Marketing"]
readTime: "6 min"
featured: true
description: "Actionable steps to improve discoverability: metadata, sitemaps, structured data, and performance."
img: "/assets/business/seo.jpg"
tldr: "Ship fast pages, correct metadata, and useful content—everything else is bonus."
---

# Practical SEO for Next.js in 2025

SEO is no longer mysterious—it's mostly good engineering plus great content.

![Search results](/assets/business/youtube.jpg)

## Metadata and Open Graph

Use a central helper to define titles, descriptions, and social images.

```tsx
export const metadata = {
  title: "My Page",
  description: "What this page is about",
  openGraph: {
    images: ["/og-image.png"],
  },
};
```

## Structured Data

Add JSON-LD for articles and products when relevant.

## Performance

Core Web Vitals still matter—optimize LCP, CLS, and INP.

## Sitemaps and Robots

Expose `sitemap.xml` and check `robots.txt` for crawl rules.

Ship value; search engines will follow.
