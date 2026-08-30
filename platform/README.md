# Konkur Production Platform

Status: Milestone 3 implementation in progress; local bounded-spike verification passed

## Purpose

`platform/` is the production successor defined by RFC-0001 and ADR-0031. It is a strict TypeScript modular monolith with separate learner and Admin web security contexts, PostgreSQL as the authoritative datastore, contract-only module integration, and self-hosted OpenTelemetry-based operations.

Prototype Zero remains historical evidence outside this tree. Production code must not import root `core/`, `features/`, `content/`, `release/`, `.ai/`, browser globals, generated static datasets, or LocalStorage persistence. Product behavior or domain rules may move here only after explicit review and transformation through an approved migration path.

## Ownership

- Accountable platform owner: Engineering
- Identity control owner and security reviewer: Security
- Database recovery and observability operations owner: Security/Operations
- Domain contract owners: the owning domain module, with Engineering review
- Named people, on-call rotations, and escalation contacts: not yet assigned; assignment is required before operational readiness

## Packages In This Baseline

| Package | Responsibility | Mutable domain truth |
|---|---|---|
| `packages/modules/identity` | Accounts, credentials, sessions, recovery, MFA, and Admin capabilities | Identity records only |
| `packages/database` | PostgreSQL access, migrations, transaction primitives, roles, backup and restore interfaces | None; records remain owned by their modules |
| `packages/observability` | Typed logs, metrics, traces, security signals, and redaction policy | None; telemetry is not business truth or audit truth |
| `packages/contracts` | Versioned command, query, event, and error schemas | None; schemas do not own records |
| `packages/config` | Validated runtime configuration and AI-disabled foundation policy | None |
| `packages/design-system` | Persian-first tokens, typography, and shared presentation primitives | None |
| `packages/testing` | Synthetic identifiers and shared test mechanisms | None |

## Platform Rules

- Every mutable record has exactly one owner. Cross-module table, repository, storage-prefix, or index access is forbidden.
- Stable UUIDv7 IDs and immutable snapshots may cross boundaries; mutable internal row models may not.
- Learner and Admin use separate hostnames, cookie names, audiences, policies, secrets, and session lifetimes. Learner identity, payment, or entitlement never grants Admin capability.
- Core account, learning, assessment, commerce, and operational flows must work with AI disabled.
- Retryable commands and jobs are idempotent. Domain changes, outbox records, and security-sensitive audit intent commit atomically.
- C0-C4 data is minimized, access-controlled, and excluded from logs or telemetry unless a reviewed allowlist explicitly permits fields.
- No package may weaken `docs/02-architecture/DOMAIN_CONTRACTS.md`, `docs/03-security/PLATFORM_THREAT_MODEL.md`, or the Definition of Done.

## Public Interface

Only versioned commands, queries, events, and shared envelopes documented in package `CONTRACT.md` files are public. Package internals, SQL, Kysely row types, Better Auth internals, telemetry vendor objects, and unversioned schemas are private.

Workspace policy checks, locked dependency install, type checks, PostgreSQL integration tests, builds, seven checksum-protected migrations, infrastructure startup, telemetry/redaction, alert rules, least-privilege roles and RLS, application images/readiness, and strict database/object recovery have local evidence in `docs/project/MILESTONE_3_PROGRESS.md`. No production deployment, digest promotion/rollback, independent-failure-domain recovery, generated OpenAPI document, or completed Milestone 3 is claimed.

## Verification Status

The eight RFC-0001 bounded paths now have local implementation evidence. Milestone completion still requires an immutable passing CI run, named provider and recovery decisions, approved RPO/RTO, production-like promotion/rollback and independent recovery, representative load evidence, manual accessibility/browser evidence, and independent security acceptance. See `TEST_PLAN.md` and each package test plan.

## Governing Documents

- `docs/rfcs/RFC-0001-production-platform-architecture.md`
- `docs/decisions/ADR-0031-production-platform-stack.md`
- `docs/02-architecture/DOMAIN_CONTRACTS.md`
- `docs/03-security/PLATFORM_THREAT_MODEL.md`
- `docs/04-engineering/DEFINITION_OF_DONE.md`
