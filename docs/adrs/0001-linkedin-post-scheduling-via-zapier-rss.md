# ADR 0001: LinkedIn Post Scheduling via Zapier + RSS Feed

## Status

Accepted

## Date

2026-03-15

## Context

When new notes are published to the blog, there is no automated way to notify followers on LinkedIn. Manually creating LinkedIn posts for each new note is tedious and easy to forget.

We need a low-maintenance solution that automatically shares new notes to LinkedIn when they are published.

## Decision

Add an RSS feed endpoint to the blog and use Zapier to watch it and create LinkedIn posts automatically when new items appear.

**Implementation steps:**

1. Add an `/rss.xml` route to the Next.js app that generates a valid RSS 2.0 feed from `getPosts()`
2. Create a Zapier Zap:
   - **Trigger**: "New Item in Feed" (RSS by Zapier) — polling the blog's RSS feed URL
   - **Action**: "Create Share Update" (LinkedIn) — using the note's `title` and `summary` as the post body, with a link back to the note

## Consequences

**Good:**
- No custom infrastructure or API credentials to manage
- Zapier handles polling, retries, and LinkedIn OAuth
- New posts are shared automatically on deploy without any manual steps

**Bad:**
- Requires a Zapier account (free tier supports this use case but has a ~15 min polling delay)
- Requires building an RSS feed endpoint that doesn't currently exist
- Post content is limited to what's in the frontmatter (`title`, `summary`) — no manual customisation per post unless done in Zapier

## Alternatives Considered

### Manual posting + LinkedIn's native scheduler
- ✅ No setup required
- ✅ Full control over post content and timing
- ❌ Requires remembering to post every time
- ❌ No automation — doesn't scale

### Buffer / Hootsuite / Later
- ✅ Polished UI for scheduling and queuing posts
- ✅ Can customise post content before it goes out
- ❌ Still requires manual post creation per note
- ❌ Adds a paid third-party tool with no automation benefit over manual posting

### GitHub Action + LinkedIn API
- ✅ Fully automated on push to `main`
- ✅ Can customise post content from frontmatter or git diff
- ✅ Everything lives in the repo — no external accounts beyond LinkedIn
- ❌ Requires setting up a LinkedIn Developer App and managing OAuth tokens as repo secrets
- ❌ LinkedIn's API access for posting requires app review approval

### Netlify webhook + serverless function
- ✅ Triggered precisely on successful deploy (not just a push)
- ❌ Requires writing and maintaining a custom serverless function
- ❌ Same LinkedIn API complexity as the GitHub Action approach
- ❌ No meaningful advantage over GitHub Actions for this use case
