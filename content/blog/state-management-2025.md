---
title: "State Management in 2025: Signals, Stores, and Server Components"
publishedAt: "2025-03-12"
author:
  name: "Yuehan John"
  avatar: "/assets/portraits/profile.PNG"
  bio: "Full-stack developer and AI enthusiast"
tags: ["React", "State", "Architecture"]
readTime: "8 min"
featured: false
description: "The modern state toolkit: when to keep it local, when to reach for a store, and how Server Components change the picture."
img: "/assets/images/dev.jpg"
tldr: "Prefer local and server state; stores for true cross-cutting client data."
---

# State Management in 2025

The best state is the state you don't have to manage.

![State flows](/assets/graphics/dive.jpg)

## Heuristics

- Server Components for data fetching and composition
- Local state for UI-only concerns
- Stores for cross-cutting client data (theme, auth)

## Pitfalls

- Over-globalizing state
- Leaky cache boundaries
- Mixing concerns across layers

Keep it simple and delete state when possible.
