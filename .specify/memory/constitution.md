<!--
SYNC IMPACT REPORT
==================
Version change: (template/unversioned) → 1.0.0
Bump rationale: MAJOR — first real constitution; all 5 principles newly defined from template placeholders.

Modified principles:
  [PRINCIPLE_1_NAME] → I. Content as First-Class Citizen (new)
  [PRINCIPLE_2_NAME] → II. Reader-First UX (new)
  [PRINCIPLE_3_NAME] → III. Static Generation by Default (new)
  [PRINCIPLE_4_NAME] → IV. Developer & Author Ergonomics (new)
  [PRINCIPLE_5_NAME] → V. UI Adaptability & Composability (new)

Added sections:
  - Tech Stack Constraints
  - Development Workflow

Removed sections: none

Template sync status:
  .specify/templates/plan-template.md  — ✅ Constitution Check section updated
  .specify/templates/spec-template.md  — ✅ aligned (no changes required)
  .specify/templates/tasks-template.md — ✅ aligned (no changes required)
  .claude/commands/speckit.*           — ✅ no outdated references found

Deferred TODOs: none
-->

# juan-blog Constitution

## Core Principles

### I. Content as First-Class Citizen

MDX files in `src/content/` are the sole source of truth for all posts and recipes.
Content MUST be authorable by dropping a file — no application code changes required.
The frontmatter schema is the content API; any change to required frontmatter fields
MUST be treated as a breaking change and MUST include a migration plan for existing files.
The UI is a vehicle for content — design and layout decisions are subordinate to the
content they carry. Components MUST NOT hardcode content; all copy lives in MDX or frontmatter.
Graceful fallbacks MUST be provided for any optional frontmatter field so that a missing
field never causes a reader-visible error or broken render.

### II. Reader-First UX

Every UI decision is evaluated through the reader's experience first.
Content MUST arrive in the initial HTML response — body text MUST NOT rely on
client-side-only rendering. Pages MUST remain navigable with JavaScript disabled.
Typography, line length, spacing, and contrast MUST prioritise long-form readability
over visual novelty. Performance directly serves the reader: pages MUST render fast
enough that content is visible within the first paint on a standard connection.

### III. Static Generation by Default

All content routes MUST use `generateStaticParams` for build-time static generation.
Dynamic (runtime) rendering MUST only be introduced with an explicit ADR explaining why
static generation is insufficient for that route. The Netlify push-to-`main` pipeline
is the content publish mechanism; this is a feature, not a limitation.
`npm run build` MUST complete without errors or warnings before any branch is merged
to `main`. A successful Netlify deploy preview is the acceptance gate for UI changes.

### IV. Developer & Author Ergonomics

Adding a new blog post MUST require only creating a `YYYY-MM-DD-slug.mdx` file in
`src/content/` — zero application code changes. New content types MUST follow the
`getPosts` / `getRecipes` function pattern so discovery is consistent and predictable.
The local development environment MUST use `netlify dev` to faithfully mirror production
behaviour, including serverless functions and environment variables. Lint and format
checks (`npm run lint`, `npm run format`) MUST pass before any merge to `main`.
TypeScript compilation errors MUST NOT be suppressed with `// @ts-ignore` without a
co-located explanation.

### V. UI Adaptability & Composability

The MUI theme in `src/app/theme.ts` is the single source of visual truth.
One-off inline styles that bypass the theme are discouraged; any exception MUST be
co-located with a comment explaining the override. Components MUST accept content via
props and MUST NOT embed hardcoded copy. Page layout (routing, data fetching in
`page.tsx`) and visual presentation (`*Detail.tsx`, `*List.tsx` components) MUST be
independently changeable — a visual refactor MUST NOT require content changes, and a
content addition MUST NOT require visual changes. New UI components MUST be composable,
accepting `children` or data props, so they can be reused across content types without
modification.

## Tech Stack Constraints

The following stack choices are fixed unless overridden by an ADR:

- **Framework**: Next.js 15 App Router + React 19. The Pages Router MUST NOT be used.
- **UI**: MUI v7 + Emotion. No other CSS-in-JS or component library may be added without an ADR.
- **Content**: MDX via `@next/mdx`. No CMS, database, or external content API without an ADR.
- **Hosting**: Netlify with Git-based auto-deploy. No alternative deployment target without an ADR.
- **Fonts**: `next/font` via `src/components/fonts/fonts.ts`. External font loading is prohibited.
- **Language**: TypeScript (strict mode currently off; tightening is encouraged incrementally).

## Development Workflow

1. Feature work happens on a dedicated branch cut from `main`.
2. Open a PR to get a Netlify deploy preview — the preview URL is the review artefact.
3. Significant architectural decisions (new integrations, new content types, rendering
   strategy changes) MUST be documented as an ADR in `docs/adrs/` before implementation.
4. Feature specs are tracked in `docs/specs/` with a `Status` field and TODO checkboxes.
   Update checkbox state and status as work progresses; mark `done` only when all
   checkboxes are checked.
5. Merge to `main` triggers production deploy automatically via Netlify. No manual steps.
6. The RSS feed at `/rss.xml` is the integration point for social posting (Zapier → LinkedIn);
   changes to feed structure MUST verify downstream Zapier compatibility.

## Governance

This constitution supersedes all other development practices. Where a practice conflicts
with a principle defined here, the constitution wins and the practice MUST be updated.

**Amendment procedure**:
1. Propose the amendment as a PR with an updated constitution and a clear rationale.
2. Bump the version according to semantic rules (see below).
3. Update the Sync Impact Report comment at the top of this file.
4. Propagate changes to any dependent templates in `.specify/templates/`.
5. Merge only after reviewing that the amendment does not silently break existing specs or tasks.

**Versioning policy**:
- MAJOR: Backward-incompatible governance change — principle removed, renamed, or fundamentally redefined.
- MINOR: New principle or section added, or materially expanded guidance.
- PATCH: Clarification, wording refinement, typo fix, or non-semantic improvement.

**Compliance**: All PRs MUST verify that proposed changes do not violate any principle.
The Constitution Check section in `plan.md` (generated by `/speckit.plan`) is the
formal gate; it MUST be completed before Phase 0 research and re-checked after Phase 1 design.
Runtime development guidance lives in `agents.md` at the repository root.

**Version**: 1.0.0 | **Ratified**: 2026-03-26 | **Last Amended**: 2026-03-26
