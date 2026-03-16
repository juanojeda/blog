# Delayed LinkedIn Post Scheduling - Spec document

---
Status: done
Last updated: 2026-03-16
---

## Purpose
Allow blog posts to be deployed and publicly visible at any time, while controlling when the LinkedIn post goes out — automatically, on the next scheduled rebuild after the post's `date`.

## Objectives
1. Filter the RSS feed to exclude notes where `date` is in the future
2. Schedule a daily rebuild via GitHub Actions + Netlify Build Hook at 11am on weekdays

## Scope

### In scope
- RSS feed filtering by `date` frontmatter field
- GitHub Actions workflow for scheduled weekday rebuilds via Netlify Build Hook

### Out of scope
- Changes to how posts are rendered on the site (all deployed posts remain publicly visible regardless of `date`)
- New frontmatter fields (no `publishDate` — `date` is sufficient)
- Recipes (not in RSS feed — see `docs/specs/2026-03-15-rss-feed.md`)
- Zapier configuration changes (no changes needed)

## Requirements

### Functional requirements
1. Given a note has a `date` in the future, when the RSS feed is generated, then that note is excluded from the feed
2. Given a note has a `date` of today or earlier, when the RSS feed is generated, then that note is included in the feed
3. Given it is a weekday at 11am AEDT, when the scheduled GitHub Actions workflow runs, then a Netlify rebuild is triggered via the Build Hook

### Non-functional requirements
1. Given the site is rebuilt, when the RSS feed is served, then it remains statically generated (no dynamic server rendering)

## Architecture overview

```
frontmatter: date (existing field)
       │
       ▼
RSS route filters by date <= today ──► /rss.xml
                                           │
                                           ▼
                                      Zapier polls
                                           │
                                           ▼
                                     LinkedIn post

GitHub Actions (cron: weekdays 11am AEDT)
       │
       ▼
Netlify Build Hook ──► rebuild ──► new /rss.xml with newly eligible posts
```

**Typical workflow:**
- Write post Monday evening, set `date: 2026-12-07` (Monday's date), deploy
- RSS rebuild at 11am Monday already ran → post excluded from feed that day
- Scheduled rebuild fires Tuesday 8th at 11am → `date` is now in the past → post enters feed → Zapier fires → LinkedIn post goes out
- Site shows "7 Dec 2026" which accurately reflects when the post was written

## Tools & Technology
- `gray-matter` frontmatter parsing (existing)
- Next.js Route Handler for `/rss.xml` (existing)
- GitHub Actions (new workflow: `.github/workflows/scheduled-build.yml`)
- Netlify Build Hook (new, URL stored as GitHub Actions secret `NETLIFY_BUILD_HOOK_URL`)

## Implementation plan

### 1 - RSS feed filtering by `date` - done

#### TODO list
- [x] In `src/app/rss.xml/route.ts`, filter out posts where `date` is strictly in the future (compare date string to today's date at build time)

#### How to test
1. Add a note with `date` set to tomorrow's date, deploy
2. Run `npm run build` and open `/rss.xml`
3. Confirm the note does not appear in the feed
4. Change `date` to yesterday's date, rebuild, confirm the note appears
5. Confirm all existing posts (dates in the past) still appear — no regressions

### 2 - Scheduled rebuild via GitHub Actions - done

#### TODO list
- [x] Create a Netlify Build Hook in the Netlify dashboard for the production site
- [x] Add the Build Hook URL as a GitHub Actions secret: `NETLIFY_BUILD_HOOK_URL`
- [x] Create `.github/workflows/scheduled-build.yml` with cron `32 0 * * 1-5` (UTC+10:32, ~11am AEST/AEDT year-round)

#### How to test
1. Manually trigger the workflow via `workflow_dispatch` and confirm a Netlify build is triggered
2. Confirm the build completes and the site is redeployed

## Open questions
- [x] What UTC offset to use in the cron schedule? → Use AEST UTC+10:32 (cron: `32 0 * * 1-5`). Fires at ~11am year-round regardless of daylight saving (AEST: 11:02am, AEDT: 11:32am), and the non-round time looks organic on LinkedIn.

## Dependencies
1. Netlify Build Hook URL — required before GitHub Actions workflow can be configured

## Decision / change log
| Date       | Decision                                                                         | Rationale                                                                                                                          | Approver |
| ---------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 2026-03-16 | Use existing `date` field for RSS filtering instead of a new `publishDate` field | Simpler — no new frontmatter convention; `date` already reflects when the post was written and doubles as the RSS eligibility gate | Juan     |
| 2026-03-16 | Deploying before 11am on a business day is treated as "publish immediately"      | Intentional — if same-day posting is not desired, set `date` to a future date                                                      | Juan     |

## References
- `docs/adrs/0002-delayed-linkedin-post-scheduling.md`
- `docs/adrs/0001-linkedin-post-scheduling-via-zapier-rss.md`
- `docs/specs/2026-03-15-rss-feed.md`
