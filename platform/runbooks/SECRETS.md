# Secrets Runbook

## Boundary

C4 secrets include PostgreSQL credentials, object-storage credentials, session and signing material, MFA encryption keys, provider credentials, backup identities, and break-glass credentials. They are stored in the approved secret manager, injected only into the workload that needs them, and never committed, placed in image layers, printed by CI, included in telemetry, or sent to optional providers.

The committed `.env.example` contains names and empty values only. Local `.env` files are ignored and must have mode `0600`. Staging and production may not use repository or host-resident dotenv files as a secret store.

## Required Separation

Use distinct secrets and service identities for learner sessions, Admin sessions, API database access, worker database access, migrations, backups, object storage, and each external provider. Admin secrets require a separate namespace and access policy. Recovery backup keys must be available when the primary environment and its main secret store are unavailable.

`platform/scripts/validate-environment.sh` validates required names without printing values. Environment-specific provisioning may add stricter checks; it may not remove the separation and minimum-length checks.

## Provisioning

1. Create the workload identity and least-privilege policy before creating its secret.
2. Generate secret material with an approved cryptographic random generator.
3. Store it directly in the secret manager and record owner, purpose, environment, creation time, rotation interval, and dependent workloads.
4. Grant read access only to the exact workload identity and audited break-glass operators.
5. Deploy by secret reference or mounted secret, not by command-line value.
6. Confirm logs, traces, rendered manifests, process listings, CI artifacts, and support tools do not expose the value.

## Rotation

Prefer overlap rotation: issue a new credential, permit old and new temporarily, update consumers, verify use of the new credential, revoke the old credential, and confirm failed use of the old credential alerts. Signing and session-key rotation must preserve only the bounded verification window required by the session contract. Database and object-storage rotation must test API and worker identities independently.

Rotate immediately after suspected disclosure, unauthorized access, operator departure, vulnerable secret-handling tooling, accidental log exposure, or backup-key custody failure. Normal rotation intervals must be assigned by security before production; absence of an interval blocks production readiness.

## Backup Encryption

`postgres-backup.sh` refuses unencrypted staging and production output. `BACKUP_ENCRYPTION_HOOK` is an executable boundary with arguments `encrypt INPUT OUTPUT`; `BACKUP_DECRYPTION_HOOK` receives `decrypt INPUT OUTPUT`. `backup-crypto-age.sh` is the provided implementation. The age recipients file is non-secret; the age identity file is C4 and must be mounted from the secret manager only for a restore operation.

Never store the decryption identity beside the backup, on the database host, or in the same failure domain without an approved independent recovery copy.

## Disclosure Response

Treat a suspected secret leak as an incident. Revoke or disable the credential first when safe, preserve redacted audit evidence, rotate dependent credentials, invalidate affected sessions, search logs and artifacts for exposure without repeating the value, assess unauthorized use, and remove leaked material from every cache or artifact store. Git history rewriting requires explicit incident-owner approval and does not replace revocation.
