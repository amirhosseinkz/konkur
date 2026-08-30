# Observability Package Contract

Status: Milestone 3 platform interface in progress; typed signal APIs pending

## Public Commands

| Interface | Behavior |
|---|---|
| `EmitStructuredLog.v1` | Emit an allowlisted severity, message key, safe attributes, and correlation context |
| `RecordMetric.v1` | Record a bounded-cardinality metric with documented unit and labels |
| `StartSpan.v1` | Create a trace span with propagated trace/correlation context and redacted attributes |
| `EmitSecurityEvent.v1` | Emit the required typed security-event fields and prohibited-field enforcement |
| `RecordOperationalEvent.v1` | Record deployment, migration, backup, restore, rollback, or provider-health outcome |

Names define intended typed boundaries, not current package exports. Telemetry emission must be non-authoritative and bounded; backpressure or collector failure must not corrupt domain state. Security/audit intent required for a domain change cannot be replaced by best-effort telemetry.

## Public Queries And Events

Observability publishes no domain event and owns no product query. Authorized operations may query dashboards, logs, metrics, and traces through protected operations interfaces using time bounds, scope controls, masking, and audit for sensitive access. Exact dashboard/API query names are deferred until implementation.

## Required Fields

Common signals use timestamp, environment, service/module, signal/schema version, outcome, and correlation/trace identifiers as applicable. Security events also include event ID, actor type/ID where known, session or service identity, action, target type/stable ID, reason code, and originating module.

## Data Rules

- C0 may appear only when useful and integrity-safe.
- C1 requires access and retention controls.
- C2 is excluded by default; only reviewed pseudonymous/minimized fields may be allowlisted.
- C3 is excluded except reviewed masked identifiers needed for security operations.
- C4 is always prohibited.

Credentials, session/recovery tokens, contact values, private notes, pre-submission answers, payment secrets, raw exports, unrestricted correspondence, request/response bodies, SQL parameters, and complete profiles are prohibited. Metric labels must be bounded and must not contain user, session, request, or record IDs.

## Error And Outage Behavior

Instrumentation validates schemas and rejects prohibited fields in development/CI. Production handling must avoid leaking the rejected value. Collector/export failure is observable through bounded buffering/drop counters and alerts; it must not trigger unbounded retries or block core flows. Security-sensitive operations still require atomic Audit intent even if telemetry is unavailable.

Duplicate telemetry may occur and must not create domain effects. Operational/security events carry stable IDs where deduplication matters. Queries fail closed when the caller lacks operations capability.
