# Database Package Test Plan

Status: Required verification; not yet executed

## Owners

- Engineering: migrations, repositories, transaction and integration tests
- Security: least-privilege and sensitive-data review
- Security/Operations: production-like backup, restore, rollback, and failure exercises

## Required Coverage

- Test each module role can access only its schema and approved shared primitives; prove learner API, Admin API, worker, migrator, and backup roles are distinct.
- Architecture-test forbidden table/repository imports, shared row-model exports, synchronous dependency cycles, and all Prototype Zero import paths.
- Integration-test transaction rollback, constraint mapping, isolation/concurrency, ambiguous failure handling, and connection exhaustion.
- Deliver outbox events and jobs at least twice; prove inbox/event and job idempotency prevents duplicate domain, audit, and external effects.
- Apply every migration from an empty database and from a production-like prior version; test supported rollback or documented roll-forward recovery.
- Capture query plans for critical paths; review queries over 100ms p95; reject unbounded lists and large mutable offset pagination.
- Verify synthetic/approved-reference seed policy and absence of production personal data in fixtures/artifacts.

## Backup And Restore Drill

1. Create an encrypted recovery artifact using the selected runbook.
2. Simulate unavailable primary infrastructure and restore into an isolated production-like environment.
3. Verify artifact integrity, keys, migrations, schema/constraints, counts, representative C0-C4-shaped synthetic records, audit sequence/linkage, sessions/revocations, and outbox/inbox/job consistency.
4. Start application and worker with least-privilege restored roles and run representative reads/writes.
5. Measure actual data loss window and recovery duration against approved RPO/RTO.
6. Record gaps, owner, remediation, and rerun evidence; securely destroy the drill environment under retention policy.

## Failure And Security Tests

Exercise backup failure alerts, corrupted/incomplete artifacts, unavailable keys, migration failure, disk/connection pressure, transaction deadlock, replica/primary ambiguity if applicable, and unauthorized backup/migration access. Verify SQL, credentials, C2-C4 values, and backup locations do not leak to errors or telemetry.

Current local evidence: seven migrations apply from empty PostgreSQL 17, re-observation passes, checksum drift fails closed, runtime-role and search-row boundaries pass, Graphile Worker starts under its restricted role, and a read-only-role full backup restores with required schemas, relations, migration/checksum metadata, job state, indexes, and constraints. The age-encryption hook and synthetic object delete/restore paths also pass. No production-like volume, independent failure domain, approved RPO/RTO, or deployment rollback result is asserted.
