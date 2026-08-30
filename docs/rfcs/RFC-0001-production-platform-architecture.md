# RFC-0001: Production Platform Architecture

Status: Accepted

Date: 2026-08-28

Decision record: `docs/decisions/ADR-0031-production-platform-stack.md`

## Outcome

Build the production successor under a new `platform/` root as a TypeScript modular monolith. Deliver two separately built web surfaces, one learner/public website and one Admin website, against one contract-driven application core and PostgreSQL database.

Prototype Zero remains outside this architecture.

## Constraints

- One responsive Persian learner website covers public, SEO, account, learning, exam, and billing flows.
- Admin is a separate deployment and authorization surface.
- Core flows do not depend on AI or an optional provider.
- Public pages are server-renderable.
- Modules own mutable records and communicate through contracts.
- Infrastructure remains portable across ordinary Linux and OCI-compatible hosting.
- The commercial question corpus is independently authored under ADR-0030.

## Options

| Option | Shape | Strengths | Costs | Decision |
|---|---|---|---|---|
| TypeScript modular monolith | Next.js surfaces, NestJS/Fastify application, PostgreSQL | Strong SEO and interactive exam UI; one language; typed contracts; broad hiring and library support | More process boundaries than a single framework; discipline required to prevent shared-model coupling | Selected |
| Laravel modular monolith | Laravel, React/Inertia, PostgreSQL | Mature auth, queues, transactions, and operational workflows | Separate SSR and rich exam interactions require mixed frontend/runtime patterns | Rejected for current product fit |
| Django modular monolith | Django, server rendering with React islands, PostgreSQL | Strong editorial and Admin foundations; Python content tooling | Interactive learner flows risk fragmented patterns; common queue stack adds Redis | Rejected for current product fit |
| Phoenix modular monolith | Phoenix/LiveView, PostgreSQL, Oban | Excellent concurrency, autosave, and jobs | Smaller local hiring and library ecosystem; higher adoption risk | Rejected for organizational risk |

## Repository Shape

```text
platform/
  apps/
    learner-web/       # public, SEO, account, learning, exam, billing
    admin-web/         # protected operational surface
    api/               # HTTP composition root and modular monolith
    worker/            # jobs, schedules, imports, reconciliation
  packages/
    modules/
      identity/
      exam-catalog/
      sources/
      authored-content/
      learning/
      assessment/
      planning/
      search/
      commerce/
      notifications/
      analytics/
      support/
      administration/
      audit/
    contracts/         # versioned HTTP and event schemas
    provider-adapters/ # payment, messaging, storage, optional AI
    design-system/     # tokens, accessible behavior, components
    observability/
    testing/
  database/
    migrations/
    seeds/             # synthetic and approved reference data only
  infra/
    compose/
    provisioning/
  runbooks/
```

Every production module eventually contains `README.md`, `CONTRACT.md`, `TEST_PLAN.md`, and `SECURITY_NOTES.md`.

## Technology Decisions

| Area | Selected baseline |
|---|---|
| Workspace | pnpm workspace with Turborepo task orchestration |
| Language | Strict TypeScript on supported Node.js LTS |
| Learner and Admin web | Next.js App Router and React, separate builds and hostnames |
| Application API | NestJS with Fastify adapter |
| Contracts | Zod schemas with generated OpenAPI and explicit schema versions |
| Database | PostgreSQL as the only authoritative datastore |
| SQL access | Kysely with reviewed SQL migrations; no shared active-record entities |
| Jobs | Graphile Worker using PostgreSQL, transactional outbox, and consumer inbox |
| Search | Persian-normalized PostgreSQL full-text search and `pg_trgm`; derived and rebuildable indexes |
| Authentication | Better Auth, PostgreSQL-backed opaque sessions, passkeys and password/recovery support; separate Admin session namespace and mandatory MFA |
| Object storage | Private S3-compatible storage through an adapter |
| Web accessibility | React Aria Components for behavior, custom Konkur styling and semantics |
| Styling | CSS Modules, CSS custom-property tokens, logical properties; no template theme dependency |
| Motion | CSS/WAAPI first; `motion` only for interruptible gesture or spring behavior |
| Client data | Server rendering first; TanStack Query only for interactive server state that benefits from caching/retry |
| Testing | Vitest, Testing Library, Playwright, axe-core, Testcontainers, k6 |
| Observability | OpenTelemetry Collector, Prometheus, Loki, Tempo, Grafana |
| Delivery | Versioned OCI containers on ordinary Linux VMs; no Kubernetes for GA |

## Identity Decision

Learner identity must not depend on SMS availability.

- Learners may use a passkey or password with recovery codes.
- Verified email or phone is an optional adapter-backed recovery and notification channel until provider reliability is proven.
- Authentication supports password managers, paste, autofill, and accessible authentication.
- Sessions are opaque, server-side, revocable, rotated after sensitive changes, and carried only in secure host-only cookies.
- Admin uses a separate hostname, cookie name, audience, authorization policy, and session lifetime.
- Privileged Admin requires passkey or TOTP MFA. SMS is never an Admin factor.
- Publishing, refunds, exports, and role changes require recent step-up authentication.

## Persistence And Consistency

- Module-aligned PostgreSQL schemas enforce ownership.
- Cross-module code may not import another module's repositories or SQL tables.
- Stable UUIDv7 IDs cross boundaries; mutable ORM or row models do not.
- Domain changes and outbox events commit in one transaction.
- Consumers record event IDs before effects and safely ignore duplicates.
- Audit intent for sensitive commands commits atomically with the owning change.
- Monetary amounts use integers and explicit currency.
- Search, analytics, and read projections are disposable and never authoritative.

## Deployment Shape

```text
Internet
  -> provider-portable DNS/CDN/WAF
  -> learner-web
  -> learner API entry point

Restricted Admin path
  -> separate Admin hostname and WAF policy
  -> admin-web
  -> Admin API entry point

Application and worker
  -> PostgreSQL
  -> private S3-compatible storage
  -> payment, messaging, storage, and optional AI adapters

Operations network
  -> OpenTelemetry Collector
  -> Prometheus, Loki, Tempo, Grafana
  -> encrypted backup repository
```

Learner API, Admin API, and worker use distinct database roles and secrets even when deployed from the same codebase. Iran-primary hosting is preferred; named providers are selected in Milestone 3 after latency, continuity, restore, and support checks. Recovery copies use an independent failure domain where legally and operationally permitted.

## Analytics And Error Tracking

The baseline approves no external analytics or error processor.

- Typed first-party product events are allowlisted, consent-aware, and stored in partitioned PostgreSQL tables.
- Operational logs, metrics, and traces use the self-hosted OpenTelemetry stack.
- Free-form event payloads and sensitive learner or Admin content are prohibited.
- A future SaaS processor requires a privacy, retention, availability, cross-border, and deletion review.

## Provider Isolation

Payment, messaging, storage, and AI integrations implement internal ports. Each adapter defines timeout, retry, idempotency, reconciliation, outage behavior, and observability. Optional AI additionally requires a cost ceiling, deterministic fallback, kill switch, and approved data contract.

## Verification Before Platform Foundation

Milestone 3 must validate the selected stack with a bounded production spike covering:

- one Persian SSR public page;
- separate learner and Admin sessions;
- concurrent exam autosave with retry and recovery;
- Persian-normalized search over a representative synthetic corpus;
- one transactional outbox job with duplicate delivery;
- Admin publication and rollback authorization;
- complete operation with AI disabled;
- container build, migration, telemetry, backup, and restore paths.

A spike failure requires a corrective ADR before expanding implementation.

## Prototype Boundary

Production code may not import root `core/`, `features/`, `content/`, `release/`, `.ai/`, browser globals, generated static datasets, or LocalStorage persistence. Reuse is limited to independently reviewed product behavior, Persian assets, and verified domain rules transformed through explicit migration scripts.
