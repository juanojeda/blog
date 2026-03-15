# RSS Feed for LinkedIn Auto-posting via Zapier

## Status

Done

## Overview

Add an `/rss.xml` route to the blog that generates a valid RSS 2.0 feed from all published notes. This feed will be consumed by a Zapier Zap to automatically create LinkedIn posts when new notes are published.

Reference: `docs/adrs/0001-linkedin-post-scheduling-via-zapier-rss.md`

## Requirements

### 1. `socialPost` Frontmatter Field

- [x] Add optional `socialPost?: string` to the `Frontmatter` type in `src/types/mdxType.ts`
- [x] When present on a note, `socialPost` is used as the RSS `<description>` (and therefore the LinkedIn post body) instead of `summary`
- [x] Field is optional — existing posts without it continue to work unchanged

### 2. RSS Feed Route

- [x] Create a `GET` route handler at `src/app/rss.xml/route.ts`
- [x] The route returns a valid RSS 2.0 XML document with `Content-Type: application/xml`
- [x] Feed metadata includes: blog title, description, site URL, and `lastBuildDate`
- [x] Each `<item>` is generated from a note returned by `getPosts()` and includes:
  - `<title>` — post `title` frontmatter field
  - `<description>` — post `socialPost` frontmatter field if present, otherwise falls back to `summary`
  - `<link>` — absolute URL to the note (`/notes/<slug>`)
  - `<pubDate>` — post `date` frontmatter field in RFC 822 format
  - `<guid>` — same as `<link>`

### 2. Static Generation

- [x] The route is statically generated at build time (no dynamic server rendering needed)
- [x] The feed reflects the state of posts at build time, consistent with how the rest of the site works

### 3. Zapier Setup (manual step, out of scope for code)

- [ ] After deploying, configure a Zapier Zap:
  - Trigger: "New Item in Feed" (RSS by Zapier) — point to `https://<blog-url>/rss.xml`
  - Action: "Create Share Update" (LinkedIn) — use `title` + `summary` + `link` as post body

## Out of Scope

- Recipes are not included in the RSS feed (notes only)
- No per-post customisation of LinkedIn post content beyond frontmatter fields
- No feed for recipes
