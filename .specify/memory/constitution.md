<!-- Sync Impact Report
Version change: N/A → 1.0.0 (initial ratification)
Modified principles: N/A (new document)
Added sections:
  - Core Principles (5 principles)
  - Technology Constraints
  - Development Workflow
  - Governance
Removed sections: N/A
Templates requiring updates:
  ✅ .specify/templates/plan-template.md — Constitution Check gates align with principles below
  ✅ .specify/templates/spec-template.md — no structural changes required; principles are compatible
  ✅ .specify/templates/tasks-template.md — no structural changes required
Follow-up TODOs: none
-->

# juan-blog Constitution

## Core Principles

### I. Content-First Architecture

MDX files in `src/content/` are the canonical source of truth for all published content.
Every feature MUST preserve the authoring experience: authors write plain MDX with YAML
frontmatter and nothing else is required of them. New content types MUST follow the
established filename and frontmatter conventions documented in `agents.md`. Changes to
the MDX plugin chain (remark/rehype) MUST be accompanied by an ADR.

### II. Static Generation by Default

All pages MUST use Next.js static generation (`generateStaticParams`, `export const dynamic = 'force-static'` where needed).
Server-side rendering MUST NOT be introduced without an ADR justifying why static generation
is insufficient. The Netlify deployment target and build pipeline (`npm run build` → `.next`)
MUST remain the single deployment path.

### III. Spec-Driven Development

Any feature of meaningful scope MUST begin with a spec in `docs/specs/` before
implementation starts. Architectural and tooling decisions MUST be recorded as ADRs
in `docs/adrs/`. Spec TODO checkboxes MUST be kept up to date as work progresses,
and spec `Status` fields MUST reflect current state (`planned` → `in progress` → `done`).
Code MUST NOT be merged to `master` for a specced feature until its spec is marked `done`.

### IV. Simplicity and Intentionality

The minimum complexity needed for the current task is the right amount of complexity.
YAGNI applies: features MUST NOT be built for hypothetical future requirements.
New dependencies MUST be justified — preference is always for using what is already
in the stack. Abstractions are only introduced when the same pattern appears three or
more times and a shared abstraction demonstrably reduces maintenance burden.

### V. Design Integrity

The established visual identity (halftone aesthetic, MUI v7 theme, custom typography,
Emotion-based styling) is non-negotiable. UI contributions MUST be consistent with the
existing design system in `src/app/theme.ts` and existing component conventions.
New third-party UI libraries MUST NOT be introduced without an ADR; the current stack
(MUI + Emotion) MUST remain the single source of UI primitives.

## Technology Constraints

The following stack decisions are locked and MUST NOT be changed without an ADR:

| Concern | Locked choice |
|---|---|
| Framework | Next.js 15 (App Router only — Pages Router MUST NOT be used) |
| React | React 19 |
| UI primitives | MUI v7 + Emotion |
| Content format | MDX with gray-matter frontmatter |
| Deployment | Netlify via Git integration (`netlify.toml`) |
| Language | TypeScript (strict mode off; path aliases per `tsconfig.json`) |
| Linting/formatting | ESLint (`eslint-config-next` + `eslint-config-prettier`) + Prettier |

Runtime guidance for day-to-day development is maintained in `agents.md` at the
repository root. That file is the authoritative reference for directory conventions,
routing, content model, and CI/CD behaviour.

## Development Workflow

- **Specs**: live in `docs/specs/` as `YYYY-MM-DD-<slug>.md`. Use `/speckit.specify` to create them.
- **ADRs**: live in `docs/adrs/` and MUST be written for any locked-stack change or
  significant architectural decision. Use the template at `docs/adrs/template.md`.
- **Branches**: one branch per spec or ADR-driven change; branch names MUST be descriptive.
- **Deployment**: pushing or merging to `master` triggers a Netlify production deploy automatically.
  Deploy previews are generated for all pull requests.
- **No test suite**: the project currently has no automated test suite. If one is introduced,
  an ADR MUST be written first and this constitution MUST be amended.

## Governance

This constitution supersedes all other informal conventions. When a conflict exists between
this document and any other guidance, this document takes precedence except where an ADR
explicitly overrides a specific principle.

**Amendment procedure**: Amend via pull request with a commit message of the form
`docs: amend constitution to vX.Y.Z (<summary>)`. Version MUST be incremented according
to semantic versioning:
- **MAJOR** — removal or redefinition of a principle in a backward-incompatible way.
- **MINOR** — new principle or section added; material expansion of existing guidance.
- **PATCH** — clarifications, wording fixes, non-semantic refinements.

All PRs and code reviews MUST verify compliance with this constitution. Complexity
introduced in violation of Principle IV MUST be explicitly justified in the PR description.

**Version**: 1.0.0 | **Ratified**: 2026-03-26 | **Last Amended**: 2026-03-26
