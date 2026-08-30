# Milestone 2 Report

Status: Complete

Date: 2026-08-28

## Objective

Select an implementable production architecture and define the security, domain, design, accessibility and performance contracts required before platform foundation work.

## Delivered

- Accepted production architecture RFC and stack ADR
- New `platform/` production boundary with no Prototype Zero imports
- TypeScript modular-monolith repository and deployment shape
- PostgreSQL ownership, jobs, search and consistency strategy
- Self-managed identity and separate Admin security model
- First-party analytics and self-hosted observability baseline
- Platform threat model and sensitive-data classification
- Explicit module ownership, calls, events, idempotency and forbidden coupling
- Persian-first light/dark visual tokens and Vazirmatn typography
- Responsive learner, timed-exam and dense Admin composition rules
- WCAG 2.2 AA target and supported browser matrix
- Purpose-gated, interruptible and reduced-motion-aware motion system
- Measurable web, payload, API, autosave, search and job budgets
- Controlled reconsideration path for ADR-0030

## Stable Decisions

- Production uses pnpm/Turborepo, Next.js, React, NestJS/Fastify, PostgreSQL, Kysely and Graphile Worker.
- Learner and Admin are separate web builds and security contexts over one modular application core.
- PostgreSQL search, jobs, sessions and first-party analytics avoid mandatory Redis, Kafka and external search for GA.
- Better Auth provides opaque server sessions; Admin requires passkey or TOTP MFA and step-up for sensitive actions.
- Deployment uses portable OCI containers on ordinary Linux infrastructure; Kubernetes is excluded from GA.
- No external analytics/error processor is approved by default.
- Konkur remains the operating product name; legal-entity and invoicing identity remain a later commerce decision.
- Design uses a custom Persian-first system rather than a copied component theme.

## Design Skill Evidence

- `ui-ux-pro-max` was installed globally and used for design-system, accessibility, color and chart searches.
- `design-taste-frontend` was installed globally and applied only to public/marketing composition because it explicitly excludes dashboards and multi-step product UI.
- `design-motion-principles` was installed globally and applied in Create mode with Jakub primary, Emil secondary and Jhey selective.
- Apple and Emil design guidance informed direct response, interruption, gesture behavior, motion restraint and reduced preferences.
- The VoltAgent Awesome Claude Design repository has no `SKILL.md`; it is registered as a global inspiration reference and may not be copied one-to-one.

## Exit Evidence

| Roadmap gate | Evidence |
|---|---|
| Stack ADR | ADR-0031 and RFC-0001 |
| Threat model | `docs/03-security/PLATFORM_THREAT_MODEL.md` |
| Domain contracts | `docs/02-architecture/DOMAIN_CONTRACTS.md` |
| Design-system specification | Design, motion and accessibility contracts under `docs/05-design/` |
| Performance budgets | `docs/04-engineering/PERFORMANCE_BUDGETS.md` |

## Milestone 3 Handoff

Milestone 3 must create the `platform/` workspace, run the bounded production spike in RFC-0001, establish environments and CI/CD, implement identity and database foundations, wire observability, and prove backup restoration. A spike failure requires a corrective ADR before broad implementation.
