# PostgreSQL Backup And Restore Runbook

## Scope

PostgreSQL is authoritative for domain records, identity sessions, jobs, audit intent, search source data, and first-party analytics. Object-storage backups require a separate provider-native procedure and inventory; a PostgreSQL dump does not cover MinIO objects. `verify-object-storage-recovery.sh` proves delete-and-restore mechanics with synthetic objects in development/CI, but it does not replace independent-failure-domain replication. Search and other derived projections are rebuilt after authoritative restoration.

Recovery point objective, recovery time objective, schedule, retention, legal hold behavior, and independent failure-domain location must be approved before production. Until those values are approved and tested, the backup foundation is not production readiness evidence.

## Backup Controls

Use a dedicated read-capable backup role, encrypted transport, a host with enough protected temporary space, and an encrypted destination outside the primary failure domain. Backup keys are C4 and independent from normal database credentials. Backup logs contain database name, timestamps, result, size, checksum, and backup ID but no connection string or secret.

The backup script creates a PostgreSQL custom-format dump, encrypts it through the configured hook, atomically moves the result, and writes a SHA-256 sidecar. It refuses unencrypted output except when both `ALLOW_UNENCRYPTED_BACKUP=true` and the environment is development or CI.

Example encryption boundary:

```bash
export BACKUP_ENCRYPTION_HOOK="$PWD/platform/scripts/backup-crypto-age.sh"
export AGE_RECIPIENTS_FILE=/approved/non-secret/backup-recipients.txt
platform/scripts/postgres-backup.sh /protected/backup/konkur-$(date -u +%Y%m%dT%H%M%SZ).dump.age
```

Upload the encrypted artifact and checksum together. Verify destination existence, size, checksum, retention metadata, and independent-failure-domain replication before reporting success.

Provision capability grants after application and Graphile Worker migrations with `infra/postgres/runtime-roles.sql`, then run `scripts/verify-database-roles.sh` using a privileged verification connection. Deployment automation creates separate login principals and secrets and grants them only the applicable `konkur_learner_api`, `konkur_admin_api`, `konkur_worker`, or `konkur_backup` capability role. `postgres-backup.sh` uses `POSTGRES_BACKUP_ROLE` (default `konkur_backup`) so `pg_dump` explicitly assumes the read-only `BYPASSRLS` capability; role attributes are not inherited by a login merely through membership. Application workloads never receive the migration identity.

For a synthetic object-storage recovery check, run `scripts/verify-object-storage-recovery.sh` inside the pinned MinIO client image with `MINIO_ENDPOINT`, `MINIO_ROOT_USER`, and `MINIO_ROOT_PASSWORD`. The script creates isolated buckets, mirrors two random objects, deletes and reconstructs the source bucket, verifies SHA-256 integrity, and removes its buckets. Production recovery additionally requires version inventory, encryption/key verification, retention and legal-hold checks, reference reconciliation, and a destination outside the primary failure domain.

## Disposable Restore Drill

Run restores in an isolated non-production environment with no public ingress, no provider credentials, outbound providers disabled, and a dedicated database role allowed to create and drop only drill databases. The script rejects `KONKUR_ENVIRONMENT=production` and requires a target name containing `_restore_`.

```bash
export BACKUP_DECRYPTION_HOOK="$PWD/platform/scripts/backup-crypto-age.sh"
export AGE_IDENTITY_FILE=/secret-manager-mount/backup-identity.txt
export RESTORE_CONFIRM_TARGET=staging-db.internal/konkur_restore_20260828
platform/scripts/restore-disposable.sh /protected/backup/konkur.dump.age konkur_restore_20260828
```

The confirmation value must exactly match `POSTGRES_HOST/DISPOSABLE_DATABASE_NAME`; pass that database name as the script's second argument. This prevents an implicit target from being accepted accidentally. The default removes the disposable database after structural verification. Set `DROP_AFTER_VERIFY=false` only inside the isolated drill environment when manual inspection is planned, then drop it explicitly when evidence is captured.

`verify-restore.sh` checks connectivity, index validity, constraint validation, and application-table presence. It requires at least one application table by default; `RESTORE_MIN_TABLES` may set a higher release-specific floor. Set `RESTORE_VERIFICATION_SQL_FILE` to a reviewed SQL file for release-specific invariants. Verification SQL must not print C2-C4 rows.

## Full Recovery Sequence

1. Declare an incident, stop or isolate writers, and record the recovery point decision.
2. Preserve the failed database and logs as evidence; do not overwrite the primary.
3. Verify artifact checksum and decrypt only in the isolated recovery boundary.
4. Restore into a new database or replacement cluster.
5. Run structural and release-specific verification, migration compatibility checks, and query-plan checks for critical paths.
6. Rebuild search and analytics projections from authoritative data.
7. Reconcile transactional outbox, worker inbox, payments, notifications, and object-storage references without duplicating effects.
8. Run authorization, session, Admin separation, autosave, publication rollback, provider-outage, and performance smoke tests.
9. Switch traffic only after incident-owner, database-owner, security, and product approval.
10. Rotate credentials exposed to the failed environment and monitor closely through the recovery observation window.

## Evidence

Record backup ID, source environment, database version, start and finish time, encrypted size, checksum, destination, key version, restore target, selected recovery point, script revision, verification output, measured restore duration, measured data loss, operator, reviewer, and cleanup confirmation. Never include secret values or restored personal content.
