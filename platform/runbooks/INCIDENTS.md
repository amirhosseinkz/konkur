# Incident Runbook

## Priorities

Protect people and data, contain unsafe behavior, preserve evidence, restore deterministic core flows, and communicate verified facts. Do not use optional AI to diagnose, authorize, publish, or communicate an incident without human review.

| Severity | Definition | Initial action |
|---|---|---|
| SEV-1 | Confirmed or likely C3/C4 exposure, Admin compromise, content/payment integrity loss, unrecoverable core outage, or destructive data event | Page incident commander and security immediately; contain now |
| SEV-2 | Material learner impact, sustained performance-budget breach, provider outage with reconciliation risk, queue or backup failure, or telemetry loss affecting safe operations | Page responsible engineering and operations owners |
| SEV-3 | Limited degradation with working fallback and no known integrity or sensitive-data impact | Assign owner and monitor within business operations |
| SEV-4 | Low-impact defect or alert requiring planned correction | Track through normal work management |

Upgrade severity whenever impact or evidence is uncertain. Only the incident commander lowers severity.

## Roles

Assign one incident commander, operations lead, engineering lead, security lead when relevant, communications owner, and scribe. The incident commander owns decisions and cadence; responders state observations separately from hypotheses. Customer or public communication requires the assigned owner and approved facts.

## First Response

1. Open an incident record with UTC timestamps, environment, detection source, affected surfaces, current severity, and owners.
2. Preserve logs, traces, metrics, deployment records, audit events, and provider references with access controls and retention hold.
3. Contain the smallest safe boundary: stop rollout, disable a provider adapter, revoke a secret or session, isolate an Admin path, pause workers, or make a flow read-only.
4. Confirm learner and Admin boundaries, data integrity, payment state, autosave durability, queue behavior, backup health, and telemetry coverage.
5. Establish update cadence and a decision log.
6. Restore service through known-good images and deterministic fallbacks; do not make unreviewed destructive schema changes under pressure.

## Security Events

Never paste credentials, session tokens, recovery codes, private notes, answers, payment secrets, exports, or unrestricted correspondence into the incident record. Revoke suspected secrets, rotate dependents, invalidate affected sessions, preserve redacted evidence, and evaluate notification obligations with security and legal owners.

For suspected Admin compromise, isolate the Admin hostname, revoke the principal and sessions, preserve append-only audit evidence, inspect role changes, publications, withdrawals, exports, refunds, and step-up events, then require independent approval before restoring privileged access.

## Provider Outage

Activate adapter timeout, circuit-break, and kill-switch behavior. Core learning, exam, account, billing truth, and Admin safety controls must remain available without AI, messaging, or synchronous provider success. Queue idempotent work, show accurate pending state, stop unsafe retry storms, monitor backlog age, and reconcile independently when the provider recovers.

Run `provider-outage-smoke-test.sh` against explicitly allowlisted core paths in staging. Payment recovery requires independent callback verification and reconciliation; messaging recovery must avoid duplicate or stale notifications. AI recovery never auto-publishes queued drafts.

## Observability Or Database Failure

Loss of safe observability blocks deployment and may require traffic reduction, but telemetry must never be restored by disabling redaction or exposing operations ports publicly. For database integrity or availability incidents, stop writers when continued writes increase damage and follow `BACKUP-RESTORE.md`. Derived search and analytics can remain unavailable while authoritative data is protected and rebuilt.

## Resolution And Follow-Up

Resolution requires stable core service, reconciled authoritative and provider state, restored security controls, healthy telemetry, and an agreed monitoring window. Within the assigned deadline, write a blameless post-incident review covering timeline, impact, detection gap, contributing conditions, containment, recovery, data and privacy assessment, performance-budget evidence, corrective owners, and due dates. A runbook change alone is not sufficient when code, tests, alerts, or architecture caused the failure.
