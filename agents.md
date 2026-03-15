# agents.md — juan-blog

## Project Overview

A personal blog built with **Next.js 15** (App Router) and **React 19**, deployed on **Netlify**. Content is authored in **MDX** files and rendered at build time as static pages. The site has two content types: notes (blog posts) and recipes.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static generation)
- **UI**: MUI (Material UI v7) with Emotion, custom theme in `src/app/theme.ts`
- **Content**: MDX files parsed with `@next/mdx`, frontmatter via `gray-matter` + `remark-mdx-frontmatter`
- **MDX plugins**: remark-frontmatter, remark-gfm, rehype-slug, rehype-autolink-headings, rehype-prism-plus
- **Deployment**: Netlify (`netlify.toml`). Run locally with `netlify dev`.
- **Styling**: CSS Modules + MUI theming + Emotion
- **Fonts**: Custom fonts in `src/components/fonts/fonts.ts`

## Directory Structure

```
src/
  app/                  # Next.js App Router pages
    layout.tsx          # Root layout (ThemeRegistry, SiteHeader, fonts)
    page.tsx            # Home page → renders HomePage.tsx
    not-found.tsx       # 404 page
    about/              # /about route
    notes/              # /notes route (post list + [slug] detail)
    recipes/            # /recipes route (recipe list + [slug] detail)
  components/           # Shared UI components
    CommonLayout/       # Page wrapper with optional fade
    FootnoteHighlight/  # Highlights footnotes on hover
    FormattedDate/      # Date formatting component
    HalftoneBox/        # Decorative halftone box
    HalftoneImage/      # Halftone-effect image component
    NextLink/           # MUI-compatible Next.js Link wrapper
    SiteHeader/         # Top nav with ResponsiveMenu
    WordScroller/       # Animated word cycling component
    fonts/              # Font definitions (next/font)
  content/              # MDX source files
    *.mdx               # Blog posts (notes), named YYYY-MM-DD-slug.mdx
    recipes/            # Recipe MDX files
  functions/            # Data-fetching utilities (server-side only)
    getPosts.ts         # Reads all notes from src/content/*.mdx
    getRecipes.ts       # Reads all recipes from src/content/recipes/*.mdx
    getRelatedPosts.ts  # Returns related posts by tag overlap
  types/
    mdxType.ts          # Shared TypeScript types for MDX frontmatter
  mdx-components.tsx    # Global MDX component overrides (useMDXComponents)
  public/               # Static assets (favicon, images)
```

## Content Model

### Notes (blog posts)
- Location: `src/content/*.mdx`
- Filename convention: `YYYY-MM-DD-slug.mdx`
- Frontmatter fields: `title`, `date`, `tags` (array), `summary`
- Accessed via: `getPosts()` (list), dynamic `import("../../../content/" + slug + ".mdx")` (detail)

### Recipes
- Location: `src/content/recipes/*.mdx`
- Frontmatter fields: `title`, `tags`, `prep time`, `cook time`, `servings`, `makes`, `summary`
- Accessed via: `getRecipes()` (list), `getRecipeBySlug()` (detail)

## Routing

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Home page |
| `/about` | `src/app/about/page.tsx` | About page |
| `/notes` | `src/app/notes/page.tsx` | Post list |
| `/notes/[slug]` | `src/app/notes/[slug]/page.tsx` | Post detail, statically generated |
| `/recipes` | `src/app/recipes/page.tsx` | Recipe list |
| `/recipes/[slug]` | `src/app/recipes/[slug]/page.tsx` | Recipe detail, statically generated |
| `/posts/:slug` | — | Redirects permanently to `/notes/:slug` |

All content pages use `generateStaticParams` for build-time static generation.

## CI/CD & Deployment

Deployment is handled entirely by **Netlify's Git integration** — there are no GitHub Actions workflows in this repo.

**How it works:**
- The GitHub repo is connected directly to a Netlify site via the Netlify dashboard
- Pushing to the `main` branch automatically triggers a production deploy on Netlify
- Pull requests automatically get **deploy previews** — Netlify builds and hosts each PR at a unique URL for review before merging

**Build configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

- `@netlify/plugin-nextjs` adapts the Next.js build output for Netlify's infrastructure (handles SSR, image optimisation, redirects, etc.)
- The `.next` directory is the publish target

**To deploy**: just push or merge to `main`. No manual steps required.

## Key Conventions

- **Page vs. Detail component split**: Each route has a `page.tsx` (data fetching, metadata) and a co-located `*Detail.tsx` or `*List.tsx` (rendering). Keep data fetching in `page.tsx`.
- **MDX imports**: The `@/content` alias doesn't resolve in dynamic imports — use relative paths (`../../../content/` + slug).
- **No test suite** currently exists in the project.
- **Linting/formatting**: ESLint (`eslint-config-next` + `eslint-config-prettier`) and Prettier. Run `npm run lint` and `npm run format`.
- **TypeScript**: Strict mode off; `tsconfig.json` uses path aliases `@/*` → `src/*` and `functions/*` → `src/functions/*`.

## Running the Project

```bash
netlify dev        # Recommended: mimics Netlify deployment environment
npm run dev        # Standard Next.js dev server
npm run build      # Production build
```
