# Platform Contract

Status: Normative Milestone 3 contract; implementation in progress

## Owners And Boundaries

Engineering owns platform composition. Each domain module owns and interprets its records; shared packages own mechanisms only. Admin composes owner-module commands and never bypasses module authorization, review, or audit rules.

Allowed synchronous dependencies are only those listed in `DOMAIN_CONTRACTS.md`. Dependencies point from composition roots to contracts and from modules to approved contracts; synchronous cycles are forbidden.

## Public Message Envelope

Every versioned retryable command carries `request_id`, `idempotency_key`, actor or service identity, target ID, expected revision when applicable, correlation ID, and issue time. Every event carries event ID, event type, schema version, aggregate ID and revision, occurrence time, producer, correlation ID, and causation ID.

Queries carry authenticated principal or service context, correlation ID, bounded pagination, and an explicit response schema version. A client-supplied learner ID never establishes ownership.

## Error Behavior

Public boundaries return typed errors with a stable code, safe message, correlation ID, retryability, and field violations when safe. Baseline error classes are:

| Class | Behavior |
|---|---|
| `invalid_request` | Reject before effects; identify safe field violations |
| `unauthenticated` | No protected detail; no effect |
| `forbidden` | Deny by default; do not disclose target existence where that would leak data |
| `not_found` | No effect; use only when existence is safe to reveal |
| `conflict` | Return current/expected revision information only when authorized |
| `rate_limited` | No effect; include bounded retry guidance |
| `dependency_unavailable` | Fail closed for authorization and sensitive writes; state whether retry is safe |
| `internal_error` | No stack trace, secret, personal data, or internal model in the response |

Validation, authentication, authorization, revision checks, and idempotency checks happen server-side. Partial effects are forbidden. Duplicate retryable requests return the prior authorized result or no additional effect.

## Data And Consistency

- C0 Public data requires publication integrity and cache invalidation.
- C1 Internal data requires authenticated access and retention rules.
- C2 Personal data requires ownership checks, encryption, minimization, export/deletion handling, and log redaction.
- C3 Restricted data requires capability checks, masking, audit, and short-lived access.
- C4 Critical data requires an approved secret manager, rotation, least privilege, and zero client/log/telemetry exposure.
- Card data is never stored.

PostgreSQL schemas align to module ownership. Learner API, Admin API, worker, migration, and backup/restore identities use distinct least-privilege roles. Search, analytics, and read projections are disposable and never authoritative.

Domain mutation and outbox event insertion share one database transaction. Consumers persist event IDs before effects. Security-sensitive mutation and minimized audit intent share one transaction; the Audit module remains the owner of append-only audit truth.

## Session Separation

Learner sessions are valid only for learner audiences and learner hosts. Admin sessions are valid only for the Admin audience and host, require explicit capabilities and mandatory MFA, and use a shorter separately configured lifetime. Publishing, refunds, exports, and role changes require recent step-up authentication. There is no silent learner impersonation or capability inheritance between surfaces.

## Backup And Restore

Critical authoritative data and audit evidence must be encrypted in backup, access-restricted, retained under an approved schedule, and recoverable from an independent failure domain where legally and operationally permitted. Backup success alone is not evidence of recoverability. A production-like full restore drill, integrity checks, migration compatibility, key access, documented rollback, and approved/tested disaster-recovery objectives are release gates.

Provider, mechanism, retention, RPO, and RTO are intentionally not set here; they require Milestone 3 selection and approval. No completion is claimed.

## Versioning

Breaking command, query, event, or error changes require a new schema version and a reviewed compatibility/migration plan. Events are immutable facts; corrections use a later event or revision. Generated OpenAPI is an output of reviewed schemas, not an independent source of truth.
