# DevBlog — Astro Blog

A modern tech blog built with [Astro](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/), featuring a professional flat design aesthetic.

## ✨ Features

- **Content Collections** — Blog posts and authors managed via Astro's content collections (Markdown / MDX + YAML)
- **File-System Routing** — Alternative blog section using file-system based posts
- **Pagination** — Paginated blog listing with Previous / Next navigation
- **Author Profiles** — Author pages with avatar, bio, social links, and posts by author
- **Tag System** — Posts categorized with tag pills
- **Table of Contents** — Auto-generated on post detail pages
- **View Transitions** — Smooth page transitions via Astro Client Router
- **Responsive Design** — Mobile-first layout with Tailwind utility classes
- **Flat Design** — Clean aesthetic with Inter font, flat cards, and a navy/slate color palette

## 🚀 Project Structure

```text
src/
├── components/
│   ├── AuthorCard.astro       # Author profile card
│   ├── BlogPost.astro         # Blog card (file-system posts)
│   └── TypedBlogPost.astro    # Blog card (content collection posts)
├── content/
│   ├── author/                # Author YAML files + avatars
│   └── blog/                  # Blog posts (md/mdx) + images
├── content.config.ts          # Content collection schemas
├── layouts/
│   ├── MainLayout.astro       # Main site layout (header + footer)
│   ├── BlogLayout.astro       # Post detail layout
│   └── BlogLayoutFileSystem.astro
├── pages/
│   ├── index.astro            # Home page
│   ├── blog-file-system.astro # File-system blog listing
│   ├── authors/index.astro    # Authors listing
│   ├── blog/[page].astro      # Paginated blog
│   ├── blog/[author].astro    # Posts by author
│   └── posts/[slug].astro     # Post detail
├── styles/
│   └── global.css             # Design system (flat design tokens)
└── utils/
    └── formatter.ts           # Date formatter (en-US)
```

## 🧰 Tech Stack

| Technology       | Version |
| :--------------- | :------ |
| Astro            | v6      |
| Tailwind CSS     | v4      |
| MDX              | v5      |
| Node.js          | ≥22.12  |

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the build locally before deploying   |
| `npx astro check` | Run Astro type checking                      |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Astro Discord](https://astro.build/chat)
