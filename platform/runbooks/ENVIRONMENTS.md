# Environment Runbook

## Purpose

Konkur uses isolated development, CI, staging, and production environments. Internal milestones are not public releases. Staging and production must use separate accounts, networks, databases, buckets, credentials, encryption keys, Admin hostnames, and learner hostnames.

## Environment Matrix

| Environment | Data | Access | Deployment purpose |
|---|---|---|---|
| Development | Synthetic or explicitly approved non-production data | Developer workstation only | Local implementation and bounded spikes |
| CI | Ephemeral synthetic data | CI jobs only | Automated validation |
| Staging | Synthetic or irreversibly de-identified fixtures | Restricted engineering and operations access | Production-like deploy, migration, restore, load, and outage drills |
| Production | Live C0-C4 data | Approved least-privilege operators and workloads | GA only after the written release decision |

Production data must not be copied into development or CI. A staging data exception requires privacy and security approval, documented minimization, and a deletion deadline.

## Local Foundation

The development Compose file publishes service ports only on `127.0.0.1`. It creates separate internal data, application, and observability networks plus development-only host-access bridges for the data and observability trust groups. The host bridges make loopback publication work without joining data services to observability services. PostgreSQL and MinIO are not attached to the observability networks. The OpenTelemetry Collector bridges the application and observability networks; it does not join the data networks.

1. Create `platform/infra/compose/.env` from `.env.example` with mode `0600`.
2. Generate independent PostgreSQL, MinIO, and Grafana credentials with a cryptographically secure generator.
3. Run `docker compose --env-file platform/infra/compose/.env -f platform/infra/compose/compose.development.yml config --quiet`.
4. Run `docker compose --env-file platform/infra/compose/.env -f platform/infra/compose/compose.development.yml up -d --wait`.
5. Stop services with `docker compose --env-file platform/infra/compose/.env -f platform/infra/compose/compose.development.yml down`.
6. Delete local state only after confirming it contains no needed evidence, using the same command with `--volumes`.

Local endpoints are PostgreSQL `127.0.0.1:5432`, MinIO `127.0.0.1:9000`, MinIO Console `127.0.0.1:9001`, OTLP gRPC `127.0.0.1:4317`, OTLP HTTP `127.0.0.1:4318`, Prometheus `127.0.0.1:9090`, Loki `127.0.0.1:3100`, Tempo `127.0.0.1:3200`, and Grafana `127.0.0.1:3002`. The Admin development server retains `127.0.0.1:3001`. Override collisions in the ignored `.env` file, never by broadening a bind address.

## CI Foundation

CI must set a unique `COMPOSE_PROJECT_NAME` and generate ephemeral credentials per run. It must always execute `docker compose down --volumes --remove-orphans` in a final cleanup step if services were started. CI artifacts must exclude database volumes, object-storage data, environment files, and rendered configuration containing secrets.

## Staging And Production

Development Compose is not a production topology. Provision ordinary Linux hosts with private data and operations networks, TLS between trust boundaries, restricted ingress, encrypted storage, independently managed backups, and immutable OCI image digests. Observability ports have no public listener. Grafana is reachable only through the protected operations access path with individual identity and MFA.

Run `platform/scripts/validate-environment.sh` in the target workload context before migrations or deployment. Remote environments require HTTPS service/auth endpoints and PostgreSQL `PGSSLMODE=verify-full` with a readable `PGSSLROOTCERT`. Keep learner, Admin, API, worker, migration, and backup identities distinct. Admin and learner session secrets and audiences must never overlap.

## Promotion Evidence

Record image digests, source revision, SBOM, scan results, migration plan, environment validation, smoke results, performance evidence, approver, start and finish timestamps, and rollback outcome. Promote the same tested digest; do not rebuild between staging and production.

## Image Maintenance

Image tags are pinned to make drift visible. At least monthly, and immediately for a relevant Critical or High advisory, review upstream release notes, scan candidate images, update one component at a time, validate its configuration, and run backup/restore and telemetry smoke checks before promotion. Tags are not proof of immutability in production; production manifests must resolve approved tags to recorded digests.
