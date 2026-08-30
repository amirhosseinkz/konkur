# Database Package Security Notes

Status: Threat-model extension; review pending

## Assets And Classification

PostgreSQL may hold C0 through C4 data for owner modules. Classification and retention remain attached to the owning record; this package cannot downgrade them. Database credentials and backup keys are C4. Schema metadata, query plans, dumps, WAL or equivalent recovery material, and snapshots inherit the highest classification of included records.

## Threats

- Cross-schema coupling or over-broad roles bypass module ownership.
- Injection, unsafe dynamic SQL, or leaked query parameters exposes or corrupts records.
- Admin/application role confusion enlarges a compromise.
- Duplicate or lost outbox/inbox work breaks consistency and audit.
- Destructive migration, operator error, or unavailable/corrupt backup prevents recovery.
- Backups concentrate C2-C4 data and may bypass normal application authorization.
- Logs, traces, explain plans, fixtures, or errors may leak sensitive values.

## Controls

- Parameterized Kysely/reviewed SQL, explicit transactions, module schemas, least-privilege grants, private networking, encrypted transport/storage where supported, and environment separation.
- Distinct learner API, Admin API, worker, migrator, and backup identities; no application superuser.
- Unique idempotency/inbox constraints, transactional outbox, bounded jobs, and reconciliation.
- Reviewed immutable migrations, production-like tests, explicit destructive-change approval, and recoverable rollout plans.
- Encrypted restricted backups, separate C4 key control, integrity checks, retention/deletion, independent failure domain where permitted, failure alerts, and full restore drills.
- Redaction of values and credentials from errors, logs, metrics, traces, plans, and CI artifacts.

## Audit And Monitoring

Audit production access, grant changes, migration/rollback, backup creation/access/deletion, restore, integrity failure, and break-glass use with actor/service identity, environment, action, outcome, reason, target artifact/revision, and correlation ID. Monitor saturation, slow queries, lock/deadlock pressure, migration drift, outbox/inbox backlog, backup age/failure, and restore evidence age without recording sensitive SQL parameters.

## Open Risks

Infrastructure-admin power, privileged collusion, PostgreSQL or backup-tool defects, key loss, region failure, and an untested restore remain residual risks. Provider, access model, retention, RPO/RTO, backup technology, and recovery-copy jurisdiction require Milestone 3 approval. Nothing here records a completed control or accepted residual risk.
