# ADR 0002: Delayed LinkedIn Post Scheduling

## Status

Accepted

## Context

ADR 0001 established that new notes are automatically shared to LinkedIn via Zapier when a new RSS item appears after deploy. This means the LinkedIn post goes out immediately on deploy, with no control over timing.

The desired behaviour is: publish a blog post at any time, but have the LinkedIn post go out on the following business day at 11am.

Three options were considered:

**Option A: Deploy on the day**
Simply merge to `main` on the next business day at 11am. The deploy triggers the RSS update, Zapier picks it up, LinkedIn post goes out.
- ✅ Zero code changes, no extra infrastructure
- ❌ Requires remembering to merge at the right time
- ❌ Blog post is not live until then

**~~Option B: Future `date` in frontmatter~~** (Rejected)
Set the note's `date` frontmatter to the next business day at 11am, relying on Zapier to respect `<pubDate>` for trigger filtering.
- ❌ Zapier free tier does not respect `pubDate` — it fires as soon as the item appears in the feed regardless of `pubDate`

**Option C: `publishDate` frontmatter field + RSS filter + scheduled rebuild**
Add an optional `publishDate` frontmatter field. Filter posts from the RSS feed where `publishDate` is in the future. Add a scheduled daily rebuild via GitHub Actions + Netlify Build Hook at 11am on weekdays.
- ✅ Blog post is publicly accessible immediately after deploy
- ✅ `date` reflects when the post was written; `publishDate` controls LinkedIn timing
- ✅ LinkedIn timing is fully automated
- ❌ Requires code changes to the RSS route and a new frontmatter convention
- ❌ Requires a Netlify Build Hook secret and a GitHub Actions workflow

## Decision

Implement Option C. Add a `publishDate` frontmatter field to notes, filter the RSS feed to exclude posts where `publishDate` is in the future, and add a scheduled daily rebuild via GitHub Actions + Netlify Build Hook triggering at 11am on weekdays.

## Consequences

- Blog posts can be deployed and made publicly visible at any time
- LinkedIn posts are automatically delayed until `publishDate`, with no manual steps required on the day
- Authors must remember to set `publishDate` in frontmatter when writing a post; omitting it will cause the post to appear in RSS immediately
- A Netlify Build Hook URL must be stored as a GitHub Actions secret
- A new `scheduled-build.yml` GitHub Actions workflow is added to the repo
