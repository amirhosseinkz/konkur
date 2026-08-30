# Database Package Contract

Status: Milestone 3 platform interface in progress; verification pending

## Public Application Interfaces

| Interface | Contract |
|---|---|
| `withTransaction` | Commit all effects or none; preserve caller module ownership |
| `ownerRepository` | Expose only the requesting module's reviewed repository interfaces, never raw cross-schema access |
| `appendOutbox` | Insert a versioned event in the same transaction as its domain change |
| `consumeOnce` | Record event ID before applying consumer effects and make duplicates no-ops |
| `enqueueJob` | Create an idempotent Graphile Worker job with bounded typed payload |
| `databaseHealth` | Return readiness without credentials, SQL text, record samples, or topology secrets |
| `migrationStatus` | Return applied/pending migration identities and safe compatibility state to authorized operations callers |

Names describe the required package boundary and are not claims of current TypeScript exports.

## Commands, Queries, And Events

Database exposes no public domain command or domain query and publishes no business event. Owner modules define those contracts. Operational migration, backup, restore, and integrity actions require authenticated runbook commands with explicit environment, artifact/revision identity, operator/service identity, correlation ID, dry-run/confirmation where safe, and retained audit evidence. Foundation commands exist under `platform/scripts/`; provider-specific execution and retained drill evidence remain pending.

## Ownership And Access

- Each module receives a dedicated schema and reviewed grants.
- Cross-module repositories, table imports, ad hoc joins, and mutable row-model exports are forbidden.
- Stable UUIDv7 identifiers and explicit immutable snapshots may cross contracts.
- Search, analytics, and read projections are rebuildable and non-authoritative.
- Migration and backup roles cannot be reused as application roles.

## Error Behavior

Map database errors to typed safe failures; never expose SQL, table names where sensitive, values, credentials, hostnames, or stack traces publicly. Constraint conflicts become authorized `conflict` or `invalid_request` responses. Transient failures may be marked retryable only when transaction outcome is known; ambiguous commit outcomes require idempotency lookup before retry. Authorization and audit writes fail closed.

## Idempotency And Transactions

Idempotency keys and processed event IDs are uniquely constrained in their owner scope. Duplicate events/jobs produce no additional effect. Domain change, event outbox, and security-sensitive audit intent commit together. External effects occur after commit and reconcile by stable identifiers.

Migrations have immutable identities/checksums, serialize appropriately, and are safe to re-observe. A failed migration must leave a known recoverable state. Destructive/irreversible changes require an expand/migrate/contract or roll-forward plan and explicit approval; a rollback must not pretend deleted data can be recreated.

## Backup And Restore

Backup interfaces must cover all authoritative schemas, Identity session/revocation state, jobs/outbox/inbox needed for safe recovery, and append-only audit evidence. Backups are encrypted, access-restricted, integrity-checked, monitored, and copied to an independent failure domain where permitted. Restore occurs into an isolated environment before promotion and verifies schema, constraints, counts, representative records, audit continuity, and application startup.

Provider, backup method, schedule, retention, RPO, RTO, and exact commands are open Milestone 3 decisions. No successful backup or restore is claimed.
