# Database Package

Status: Milestone 3 implementation in progress; runtime verification pending

## Purpose And Ownership

The Database package provides reviewed PostgreSQL/Kysely access, module-aligned schemas, migrations, transactions, outbox/inbox primitives, health/status interfaces, and backup/restore integration. Engineering owns implementation; Security/Operations owns production database access and recovery operations; every domain module remains the owner of its records.

This package does not interpret domain truth, expose a shared active-record model, or authorize cross-module reads. A physical PostgreSQL database does not create shared ownership.

## Dependencies

- PostgreSQL as the only authoritative datastore
- Kysely for typed SQL access and reviewed migrations
- Graphile Worker for PostgreSQL-backed jobs
- `packages/contracts` for event envelopes and typed failures
- `packages/observability` for redacted database metrics/traces
- Approved secret and encrypted backup systems selected during Milestone 3

## Consumers

Owner modules receive only their schema/repository and transaction capabilities. Learner API, Admin API, worker, migrator, and backup/restore processes use separate least-privilege roles and secrets.

## Non-Goals

No Redis, Kafka, external search service, cross-module SQL, shared row types, domain event interpretation, card storage, Prototype Zero imports, generated static datasets, or LocalStorage persistence belongs here.

Migration, backup, and disposable-restore commands are defined under `platform/scripts/` and `platform/runbooks/`. They are not production-readiness evidence until the locked build, production-like migration, encrypted backup, and full restore drill pass. Synthetic and approved reference data are the only permitted seeds.
