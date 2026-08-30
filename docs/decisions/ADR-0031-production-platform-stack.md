# ADR-0031: Production Platform Stack

Status: Accepted

Date: 2026-08-28

RFC: `docs/rfcs/RFC-0001-production-platform-architecture.md`

## Context

Konkur needs one SEO-capable and highly interactive learner website, a separately protected Admin surface, reliable exam autosave, content publication, commerce, and provider portability. Prototype Zero cannot become the production runtime.

## Decision

Build a TypeScript modular monolith under `platform/` using:

- pnpm workspace and Turborepo;
- Next.js and React for separate learner and Admin web applications;
- NestJS with Fastify for the application API;
- PostgreSQL with Kysely migrations and queries;
- Graphile Worker with transactional outbox/inbox behavior;
- PostgreSQL full-text search and `pg_trgm` before any external search service;
- Better Auth with PostgreSQL-backed opaque sessions, separate Admin security context, and mandatory Admin MFA;
- React Aria behavior primitives with a custom CSS-token design system;
- OpenTelemetry with self-hosted Prometheus, Loki, Tempo, and Grafana;
- OCI containers on ordinary Linux infrastructure with provider adapters.

No Redis, Kafka, external search cluster, Kubernetes, third-party analytics processor, or AI service is required for GA core behavior.

## Consequences

- One language and contract model spans web, API, jobs, and shared tooling.
- Learner and Admin deployment/auth boundaries exist without splitting domain services.
- PostgreSQL initially carries authoritative data, sessions, jobs, first-party analytics, and search; measurements govern later extraction.
- Self-hosting improves continuity but makes backup, observability, patching, and security operations Konkur responsibilities.
- Every module must prevent cross-schema coupling despite one physical database.
- Milestone 3 must run the bounded spike defined in RFC-0001 before broad implementation.
- Any new mandatory stateful service or public-cloud lock-in requires a superseding ADR.
