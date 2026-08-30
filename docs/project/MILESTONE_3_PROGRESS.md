# Milestone 3 Progress Ledger

Status: In Progress

Date: 2026-08-30

## Objective

Establish and verify the production platform foundation defined by RFC-0001: environments, CI/CD, identity, PostgreSQL, observability, and recoverable backup/restore paths. This ledger records interim implementation and verification only. It is not Milestone 3 completion evidence.

## Source State

- Base commit: `5fae7a17d8b5ccb8e8ba18baa35849d49aa178c1`
- Change set: integrated Milestone 2 and Milestone 3 source based on the recorded base commit
- Active workstream: `platform-foundation`
- Public release: prohibited

## Authored Foundation

- pnpm/Turborepo workspace with separate learner, Admin, API, and worker applications
- Persian RTL learner-page foundation and a development-only non-operational Admin preview
- Initial Better Auth learner/Admin factories and detached Admin MFA/step-up assertion policy
- Initial versioned assessment, event, and status schemas
- Kysely migration and outbox/inbox persistence primitives
- Graphile Worker composition root and bounded job payload
- OpenTelemetry SDK bootstrap and local Prometheus/Loki/Tempo/Grafana configuration
- Development and CI Compose models
- Environment, migration, backup, disposable-restore, and provider-outage scripts
- Environment, secrets, deploy/rollback, backup/restore, and incident runbooks
- GitHub Actions workflow with dependency, secret, source-policy, migration-policy, and container checks
- Better Auth learner/Admin integration, durable assessment autosave, Persian search, duplicate-safe outbox delivery, and Admin publication policy spike modules
- Four non-root application-image targets with digest, SBOM, vulnerability-scan, and boundary-smoke CI paths
- Least-privilege learner, Admin, worker, and backup capability roles with negative privilege tests
- Prometheus alert rules and deterministic tests for authentication abuse, cross-surface credentials, queue backlog, audit delay, and stale backup
- Synthetic object-storage delete-and-restore verification with byte-integrity checks

These are implementation artifacts. Their presence does not prove runtime behavior.

## Audit Corrections

- Project and roadmap status now report Milestone 3 as `in-progress`, not `ready` or `completed`.
- Platform documentation now reports implementation in progress and preserves explicit verification disclaimers.
- CI-required `lint` and `migration:check` commands now run dependency-free architecture and migration policy checks.
- Runtime configuration rejects shared learner/Admin boundaries, committed placeholder secrets, non-HTTPS production auth URLs, and production database URLs without `sslmode=verify-full`.
- Migration direction is explicit; unknown directions fail, and down migrations are prohibited in staging and production.
- Initial migration DDL fails on unexpected pre-existing objects and adds basic event-envelope checks.
- MinIO readiness and Loki/Tempo health probes were corrected; Grafana moved to port `3002` to avoid the Admin development port.
- Provider-outage smoke defaults to the implemented `/v1/health` path and rejects redirects as success.
- The Admin shell returns not-found outside development until server-side Admin identity is integrated.
- Boundary identifiers use UUIDv7 validation.
- High/Critical container vulnerabilities are no longer ignored merely because no upstream fix exists.
- A reviewed pnpm lockfile now resolves the workspace without peer-dependency warnings; patched OpenTelemetry and PostCSS versions remove known dependency vulnerabilities.
- Package-local TypeScript paths now build into each package instead of resolving incorrectly from the workspace root, and test sources receive semantic type checking.
- API and worker telemetry start before instrumented libraries load, producing correlated traces through the Collector into Tempo.
- Development-only host-access bridges make documented loopback ports reachable without joining data and observability trust groups.
- CI now starts and health-checks its full foundation stack with a unique Compose project name and guaranteed volume cleanup.
- Applied migrations now carry SHA-256 metadata and fail closed on source drift; restore verification requires the core schemas, migration/checksum state, transport state, audit state, and Graphile job state.
- Search runtime roles are constrained by row-level policies, Graphile Worker starts without schema-creation privilege, and API readiness now verifies PostgreSQL rather than reporting a disconnected process as ready.
- Migration checksum changes are atomic with migration transactions, and runtime roles receive only the extension-function privileges needed by their bounded search paths.

## Verification Evidence

The following checks passed from 2026-08-28 through 2026-08-30 against the integrated change set before commit:

| Check | Result |
|---|---|
| `node tools/validate-project-context.js` | Passed: 9 milestones, 10 accepted decisions, active Milestone 3 |
| `git diff --check` | Passed |
| `node platform/scripts/check-source-policy.mjs` | Passed for 59 source files |
| `node platform/scripts/check-migrations.mjs` | Passed for seven ordered migrations |
| `bash -n platform/scripts/*.sh` | Passed |
| JSON parsing for workspace package manifests | Passed |
| Development Compose `config --quiet` with synthetic credentials | Passed |
| CI Compose `config --quiet` with synthetic credentials | Passed |
| Development environment validation with synthetic values | Passed |
| Staging down-migration rejection | Passed with the required refusal |
| Provider-outage harness against a synthetic AI-disabled HTTP process | Passed for `/v1/health` and `/v1/status/no-ai`; this validates the harness, not the Konkur application |
| pnpm lock and offline frozen install under Node.js `24.20.0` | Passed for all 14 workspace projects; Better Auth peer dependencies resolved |
| `pnpm audit --audit-level high` | Passed with no known vulnerabilities after patched dependency resolution |
| Workspace type checking | Passed for all 13 packages plus semantic test-source checking |
| Workspace tests against fresh PostgreSQL | Passed: 36 tests, including 7 Identity, 4 autosave concurrency, 7 Persian search, 2 worker/outbox, 3 publication-policy, 7 configuration, and 3 API tests; no integration suite skipped |
| Workspace production build | Passed for all 13 packages; learner and Admin Next.js builds completed without warnings |
| Learner production process | Returned HTTP 200 with Persian RTL metadata and no-AI outage variables enabled |
| Admin production boundary | Returned HTTP 404 until server-side Admin identity integration exists |
| API no-AI smoke | `/v1/health` and `/v1/status/no-ai` returned HTTP 200 while optional providers were unavailable |
| Development Compose startup | Seven services reached healthy state; all published ports bound to `127.0.0.1` |
| CI Compose startup and cleanup | Seven services reached healthy state under an isolated project name; containers, networks, and volumes were removed |
| PostgreSQL migration | Fresh isolated database applied ordered migrations `001` through `007`; repeat safety passed, and a deliberately altered checksum was rejected |
| Graphile Worker foundation | Connected to PostgreSQL and completed one bounded `outboxDispatch` job |
| OpenTelemetry path | Collector accepted and exported 20 spans with zero failed spans; Tempo returned API and worker traces |
| Database backup and restore | A full backup made under the read-only backup role restored 35 tables into a disposable database; seven migrations, checksum metadata, all required schemas/relations, Graphile jobs, indexes, and constraints verified. Earlier age-encrypted hook evidence also passed |
| ShellCheck `0.10.0` and actionlint `1.7.7` | Passed through pinned local containers |
| Application OCI images | All four targets built from the locked 14-project workspace; learner returned Persian RTL HTTP 200, Admin remained closed with HTTP 404, API readiness returned HTTP 200 only after migrations/PostgreSQL access and also passed under the restricted learner role, and the worker image migrated its queue schema and remained running |
| Browser accessibility and performance automation | Mobile Lighthouse scored 1.00 accessibility and 1.00 performance with no weighted accessibility failures; LCP 1.75s, CLS 0, total blocking time 9ms, script transfer 104,227 bytes, and CSS transfer 2,715 bytes |
| PostgreSQL runtime roles | Learner/Admin cross-surface and cross-domain reads were denied; RLS exposed only public/owned learner or public/Admin search rows; Graphile Worker started as transport-only; backup was read-only and completed `pg_dump` |
| Object-storage recovery | Two synthetic objects were copied to a recovery bucket, the source bucket was deleted and rebuilt, objects were restored, and SHA-256 values matched |
| Alert rules | Five Prometheus rules passed `promtool` syntax and deterministic firing tests |
| Telemetry redaction | An OTLP trace containing an authorization sentinel reached Tempo with the allowlisted probe retained and the authorization key/value removed |
| Read-only engineering re-review | No unresolved Critical, High, or Medium implementation findings remained after the role, readiness, migration-checksum, deployment-order, and recovery-wrapper corrections; this is not the independent security assessment required for completion |

No manual assistive-technology/browser-matrix audit, representative load test, independent security assessment, independent-failure-domain recovery, or production-like deployment/rollback result is claimed. Local pre-commit evidence is not immutable release evidence.

## Bounded Spike Status

| RFC-0001 scenario | Current status | Missing evidence |
|---|---|---|
| Persian SSR public page | Local bounded path passed | Manual browser/assistive-technology matrix and regional measurement remain release evidence |
| Separate learner/Admin sessions | Better Auth bounded path passed | Full browser E2E recovery/passkey coverage and independent security review remain |
| Concurrent autosave with retry/recovery | PostgreSQL repository bounded path passed | HTTP/client offline recovery remains broader product implementation |
| Persian PostgreSQL search | Bounded path passed | Production corpus and projection-rebuild operations remain |
| Transactional outbox under duplicate delivery | Bounded path passed | Production reconciliation and queue load evidence remain |
| Admin publication and rollback authorization | Policy bounded path passed | PostgreSQL store adapter and Admin browser flow belong to broader module implementation |
| Complete operation with AI disabled | All implemented bounded paths and API health passed with deterministic behavior | Complete future commerce and learner flows cannot be evidenced before their milestones |
| Container, migration, telemetry, backup, and restore | Local bounded paths passed, including application images, roles, alerts, database restore, object restore, and telemetry redaction | Named provider, independent failure domain, immutable CI run, approved RPO/RTO, and production-like deploy/rollback remain |

## Prerequisite Status

- The host default remains unsupported Node.js `23.7.0`; all package-dependent evidence used ephemeral Node.js `24.20.0`.
- Registry access, Corepack pnpm `10.15.0`, the dependency lock, frozen install, and dependency audit now pass.
- Docker Desktop was started and both development and CI Compose models reached healthy state.
- ShellCheck and actionlint remain absent from the host but passed through pinned OCI images.
- Generated recovery artifacts, age keys, disposable databases, Compose containers, networks, and volumes used only synthetic data and were removed after verification.

The remaining gaps are product/platform implementation and production-like evidence, not local prerequisite availability.

## Required Next Evidence

1. Select the named hosting, storage, registry, and recovery baseline and approve RPO/RTO; these human decisions must not be guessed.
2. Commit the integrated source and obtain an immutable passing CI run with retained image digests, SBOMs, scans, PostgreSQL integration results, alert tests, and object-recovery evidence.
3. Exercise digest promotion and rollback plus database/object recovery in the selected production-like independent failure domain.
4. Complete manual assistive-technology/browser checks, representative load testing, and independent security review appropriate to the foundation.

Milestone 3, every roadmap gate, and Milestone 4 readiness remain incomplete until the required evidence is accepted.
