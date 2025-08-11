---
title: "Edge Runtime APIs in Next.js: What, When, and Why"
publishedAt: "2025-04-18"
author:
  name: "Yuehan John"
  avatar: "/assets/portraits/profile.PNG"
  bio: "Full-stack developer and AI enthusiast"
tags: ["Next.js", "Edge", "Serverless"]
readTime: "6 min"
featured: false
description: "Leverage the Edge Runtime for ultra-low latency and request-time personalization."
img: "/assets/graphics/dive.jpg"
tldr: "Use Edge for fast, stateless logic near users; keep heavy compute on Node."
---

# Edge Runtime APIs in Next.js

The Edge Runtime unlocks sub-50ms logic for personalization, A/B testing, and more.

![Edge locations](/assets/business/containership.jpg)

## Sweet Spots

- Geographic personalization
- Header rewriting
- Bot detection

## Watchouts

- No Node APIs
- Cold starts are rare but possible
- Keep bundles tiny

Choose Edge when speed trumps everything else.
