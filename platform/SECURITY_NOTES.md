# Platform Security Notes

Status: Threat-model extension; review and verification pending

## Owners

- Security control owner: Security
- Implementation owner: Engineering
- Production access, recovery, and monitoring owner: Security/Operations
- Residual-risk acceptance: product owner through the release process

## Assets And Boundaries

Protected assets include identity, learner records, sessions, MFA, unpublished paid content, invoices, Admin grants, audit evidence, signing/provider/backup keys, and availability of core flows. Primary boundaries are browser-to-learner edge, browser-to-Admin edge, edge-to-module, module-to-module, transaction-to-worker, application-to-PostgreSQL/storage/telemetry/providers, operations-to-production, and primary-to-backup.

## Data Handling

| Class | Platform rule |
|---|---|
| C0 | Protect publication integrity and invalidate stale caches |
| C1 | Authenticate access; define retention before collection |
| C2 | Enforce owner checks, encryption, minimization, export/deletion, and log redaction |
| C3 | Require explicit capability, masking, audit, and short-lived access |
| C4 | Keep only in an approved secret manager or protected verifier store; rotate; never expose to clients or telemetry |

Telemetry uses allowlisted structured fields. Credentials, session/recovery tokens, private notes, pre-submission answers, payment secrets, raw exports, unrestricted support correspondence, and C4 values are always excluded. Card data is never stored.

## Required Controls

- TLS, secure host-only cookies, CSP, CSRF defenses, validation, rate limiting, and private production errors.
- Server-side ownership/capability checks in every owner module, even after edge checks.
- Distinct learner and Admin hostname, cookie, audience, authorization policy, session lifetime, database role, and secret.
- Mandatory Admin MFA; recent step-up for publication, refunds, exports, and role changes; no SMS Admin factor.
- Transactional outbox/inbox, replay protection, idempotency, and atomic audit intent.
- Environment separation, least privilege, secret rotation, reviewed dependencies/containers, and break-glass audit.
- Encrypted restricted backups, independent recovery copy where permitted, retention controls, failure alerts, and restore drills.
- AI disabled without loss of core behavior; approved inputs, timeouts, budgets, deterministic fallback, and kill switch if AI is later connected.

## Detection

Alert on credential/recovery spikes, learner sessions at Admin endpoints, privilege escalation, abnormal role/export activity, audit gaps, queue backlog, provider outage, stale projections, backup failure, vulnerable dependencies, unsigned builds, and secret exposure.

## Residual Risks And Open Decisions

Phishing, compromised devices/Admin sessions, privileged collusion, application authorization defects, stale projections, infrastructure-admin power, upstream compromise, and regional/provider outages remain residual risks. Hosting provider, data region, retention schedule, RPO/RTO, backup technology, named on-call staff, and processor approvals remain Milestone 3 decisions. They are not verified or accepted by this file.
