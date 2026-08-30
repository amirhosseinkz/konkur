# Deploy And Rollback Runbook

## Preconditions

A deployment requires an immutable OCI digest, source revision, SBOM, passing CI, no unresolved Critical or High security finding, reviewed configuration difference, successful environment validation, reviewed migration plan, recent successful backup, rollback decision point, and named operator. Production additionally requires an authorized release record; an internal milestone must not become public automatically.

Learner web, Admin web, API, and worker are separately deployable images and identities. Admin must retain its separate hostname, WAF policy, cookie namespace, audience, authorization policy, and session lifetime.

Application images are built from `platform/Dockerfile` targets `learner-web`, `admin-web`, `api`, and `worker`. The build context excludes environment files, keys, and local output; dependencies must resolve from `platform/pnpm-lock.yaml`; runtimes use the unprivileged `node` identity. CI does not push or deploy these images. It retains each target's source revision, OCI digest, SPDX JSON SBOM, and Critical/High Trivy report as the `application-image-<target>-<run>-<attempt>` artifact for 30 days.

Before promotion, match the retained digest and SBOM to the reviewed source revision, import or rebuild the artifact in the approved private registry, scan the registry digest again, sign it through the approved release process, and record the registry-qualified digest. Never promote a mutable tag, local image ID, CI cache entry, or image whose digest differs from the retained evidence.

## Deployment

1. Open a deployment record with source revision, image digests, operator, approver, affected modules, migration ID, expected metrics, and rollback threshold.
2. Confirm provider kill switches and deterministic non-AI paths are available.
3. Confirm telemetry and alerts are receiving pre-deploy signals without sensitive payloads.
4. Create and verify the required pre-deploy backup when the migration changes authoritative data.
5. Build the reviewed database and worker packages. Run expand-only application migrations through `platform/scripts/migrate.sh up`, then run `pnpm --filter @konkur/worker migrate` with the dedicated migration identity, and only then apply `platform/infra/postgres/runtime-roles.sql`. The role script assumes the Graphile Worker schema exists. Staging and production down migrations are prohibited; use the roll-forward process below.
6. Deploy API and worker instances gradually, preserving enough old instances for rollback while schemas are cross-version compatible.
7. Deploy learner and Admin surfaces independently. Never route learner sessions to Admin entry points.
8. Run liveness, readiness, core-flow, authorization-boundary, provider-outage, and telemetry smoke checks. Learner and API container probes must pass; until Admin identity integration is accepted, the Admin root must remain HTTP 404 while its container probe verifies that closed state. The worker has no HTTP health endpoint, so verify process, PostgreSQL connection, queue polling, and bounded-job completion instead of inventing a network probe.
9. Observe error rate, latency, PostgreSQL saturation, queries over 100 ms p95, queue start latency, autosave acknowledgement, search latency, and telemetry loss through the defined observation window.
10. Close the deployment only after recording evidence and removing superseded instances.

Server performance thresholds are the accepted budgets: authenticated reads 300 ms p95, writes 500 ms p95, autosave 400 ms p95, search 400 ms p95, authentication 500 ms p95 excluding provider delay, and publication acceptance 750 ms p95. A miss requires rollback or a measured exception with owner and expiry.

## Rollback Triggers

Rollback on authorization-boundary failure, data corruption, migration incompatibility, sustained error or latency budget breach, unavailable core flow, telemetry loss that prevents safe operation, unexplained queue growth, secret exposure, or an operator-declared unsafe state. Optional AI, messaging, or payment failure alone should activate its defined fallback and reconciliation behavior; it must not take down learning, exam, account, or Admin safety controls.

## Application Rollback

1. Stop further rollout and record the decision timestamp.
2. Disable affected provider adapters or risky feature paths with the approved kill switch.
3. Route traffic to the last known-good image digest.
4. Keep database schema at the expanded version unless a separately reviewed data rollback is proven safe.
5. Verify learner and Admin session separation, core reads and writes, worker idempotency, queue health, and telemetry.
6. Reconcile writes accepted during the failed deployment and preserve audit evidence.
7. Close only after customer impact, data impact, and follow-up ownership are recorded.

## Migration Rollback

Destructive down migrations are not the default rollback mechanism. Use expand, migrate, contract: add compatible structures, deploy dual-compatible code, backfill idempotently, verify, switch reads, and remove old structures only in a later deployment. If authoritative data is corrupted, stop writers, declare an incident, choose point-in-time recovery or verified backup restoration, and reconcile events and provider state before reopening traffic.
