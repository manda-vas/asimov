---
trigger: always_on
---

# Code — Next.js · TypeScript · Tailwind

## TypeScript
- Never use `any` — use `unknown` and narrow the type if needed
- Every component must have an explicit `interface` or `type` for its props
- No type assertions (`as Type`) without a comment explaining why

## Next.js
- Use `<Image>` from `next/image` — never raw `<img>`
- Use `<Link>` from `next/link` — never `<a>` for internal links
- Load fonts via `next/font` — never a `<link>` tag
- Prefer Server Components — only add `"use client"` when strictly necessary

## Tailwind
- Use design tokens from `tailwind.config` for colors and spacing
- Extract repeated class combinations into components

## General
- Component files in kebab-case: `hero-section.tsx`
- Component names in PascalCase: `HeroSection`
- No unused imports or variables