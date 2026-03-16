# ADR 0001: LinkedIn Post Scheduling via Zapier + RSS Feed

## Status

Accepted

## Context

When new notes are published to the blog, there is no automated way to notify followers on LinkedIn. Manually creating LinkedIn posts for each new note is tedious and easy to forget.

## Decision

Add an RSS feed endpoint to the blog and use Zapier to watch it and create LinkedIn posts automatically when new items appear.

1. Add an `/rss.xml` route to the Next.js app that generates a valid RSS 2.0 feed from `getPosts()`
2. Create a Zapier Zap:
   - **Trigger**: "New Item in Feed" (RSS by Zapier) — polling the blog's RSS feed URL
   - **Action**: "Create Share Update" (LinkedIn) — using the note's `title` and `description` (from `socialPost` frontmatter if present, otherwise `summary`) as the post body, with a link back to the note

## Consequences

- New posts are shared to LinkedIn automatically on deploy with no manual steps
- Requires a Zapier account (free tier supports this use case but has a ~15 min polling delay)
- Post content is limited to what's in the frontmatter — no manual customisation per post unless done via the `socialPost` frontmatter field
