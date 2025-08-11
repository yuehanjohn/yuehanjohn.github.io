---
title: "Building Accessibility-First React Components"
publishedAt: "2025-06-20"
author:
  name: "Yuehan John"
  avatar: "/assets/portraits/profile.PNG"
  bio: "Full-stack developer and AI enthusiast"
tags: ["Accessibility", "React", "UI/UX"]
readTime: "9 min"
featured: false
description: "Practical patterns to make accessible components by default—focus management, keyboard nav, roles, and semantics."
img: "/assets/images/award.jpg"
tldr: "Design for keyboard and screen readers first; visual polish comes second."
---

# Building Accessibility-First React Components

Inclusive design is good design. Accessibility improves usability for everyone.

![Inclusive design](/assets/graphics/art.jpg)

## Keyboard Navigation

- Always support Tab/Shift+Tab
- Use `aria-activedescendant` for composite widgets
- Make focus visible with clear outlines

```tsx
<button
  className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
  onClick={() => { /* ... */ }}
>
  Submit
</button>
```

## Semantics and Roles

Pick the correct HTML element before adding ARIA.

```tsx
<nav aria-label="Main">
  <ul className="flex gap-4">
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
  </ul>
</nav>
```

## Focus Management

- Return focus to the trigger when closing modals
- Trap focus within dialogs
- Announce changes politely with live regions

## Testing

- Axe DevTools
- Keyboard-only testing
- Screen reader smoke tests (NVDA/VoiceOver)

Accessibility is a journey—ship improvements continuously.
