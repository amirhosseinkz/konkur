# Platform Test Plan

Status: Required verification; no results recorded

## Owners

- Execution owner: Engineering
- Security and cross-surface authorization review: Security
- Backup, restore, telemetry, and incident-path execution: Security/Operations
- Release evidence acceptance: accountable product and engineering owners

## Required Test Layers

| Layer | Required coverage |
|---|---|
| Unit | Validation, authorization policy, error mapping, idempotency decisions, redaction, schema compatibility |
| Integration | PostgreSQL transactions, module schemas, outbox/inbox, migrations, Better Auth integration, telemetry export |
| Contract | Every public command/query/event version, generated OpenAPI, consumer compatibility, duplicate delivery |
| End-to-end | Separate learner/Admin login and rejection paths, recovery, MFA, step-up, revocation, audit visibility |
| Architecture | No cross-module repositories/tables, no dependency cycles, no Prototype Zero imports |
| Security | Horizontal access, CSRF, session confusion, privilege escalation, rate limits, secret/PII leakage |
| Operations | Container, migration, rollback, alerts, backup, full restore, disaster recovery, provider outage |
| Performance | Budgets in `PERFORMANCE_BUDGETS.md`, including authentication/session p95 and database query review |

## RFC-0001 Bounded Spike

Before broad implementation, record reproducible evidence for:

1. One Persian SSR public page.
2. Separate learner and Admin sessions.
3. Concurrent exam autosave with retry and recovery.
4. Persian-normalized search over representative synthetic data.
5. One transactional outbox job under duplicate delivery.
6. Admin publication and rollback authorization.
7. Complete operation with AI disabled.
8. Container build, migration, telemetry, backup, and restore paths.

A failed spike requires a corrective ADR before expansion.

## Mandatory Scenarios

- Exercise all public commands and queries through happy, invalid, unauthenticated, forbidden, not-found, conflict, rate-limited, dependency-outage, duplicate, and internal-error paths where applicable.
- Prove duplicate commands/events do not duplicate state, audit intent, jobs, or notifications.
- Prove learner cookies/tokens fail on Admin boundaries and Admin cookies/tokens fail on learner boundaries.
- Seed synthetic C0-C4-shaped fixtures; verify least privilege, masking, export/deletion behavior, retention hooks, and no C2-C4 leakage in logs, metrics, traces, errors, snapshots, or test artifacts.
- Restore encrypted backups into an isolated production-like environment; verify schema, counts, constraints, representative records, outbox/inbox state, audit continuity, application startup, and documented recovery objectives.
- Test migration forward and supported rollback/roll-forward paths against production-like volume.
- Test observability and alert behavior for authentication abuse, learner-on-Admin access, queue backlog, audit gaps, and backup failure.

## Evidence Record

Each run must record commit and artifact identity, environment, sanitized dataset description, command or CI job, timestamps, result, measured values, owner, defects, and links to retained evidence. Secrets and personal data are prohibited in evidence.

Current state: all eight RFC-0001 paths have local bounded implementation evidence recorded in `docs/project/MILESTONE_3_PROGRESS.md`, including PostgreSQL-backed Identity/autosave/search/outbox tests, publication policy, application images, automated browser budgets, telemetry redaction, alerts, runtime roles, and database/object recovery. This uncommitted local run is not milestone acceptance. Named provider/RPO/RTO decisions, immutable CI artifacts, production-like independent recovery and digest rollback, representative load, manual browser/assistive-technology checks, and independent security acceptance remain.
