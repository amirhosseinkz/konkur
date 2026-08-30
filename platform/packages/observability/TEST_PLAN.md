# Observability Package Test Plan

Status: Required verification; not yet executed

## Owners

- Engineering: instrumentation and schema tests
- Security: prohibited-field, access, and alert review
- Security/Operations: collector/storage/dashboard/on-call and outage exercises

## Required Coverage

- Unit-test schema validation, redaction, pseudonymization where approved, severity mapping, bounded metric labels, context propagation, and prohibited-field rejection.
- Integration-test application and worker export through OpenTelemetry Collector to Prometheus, Loki, Tempo, and Grafana using synthetic data.
- Contract-test all signal versions and security-event required/excluded fields.
- Prove C2-C4 values, credentials, tokens, private content, SQL parameters, request/response bodies, and raw exports do not appear in logs, metrics, traces, snapshots, alerts, or test artifacts.
- Correlate one request through API, database transaction, outbox, duplicate worker delivery, and resulting operation without making telemetry authoritative.
- Exercise collector unavailable/slow/restarting, storage unavailable, queue pressure, malformed signals, and high-cardinality attempts; core behavior must continue and buffering must remain bounded.

## Detection Tests

Inject synthetic signals for credential/recovery spikes, learner-on-Admin access, privilege escalation, queue backlog, provider outage, audit gap, stale search revision, database saturation, backup failure, vulnerable dependency, unsigned build, and secret exposure. Verify routing, deduplication/grouping, severity, owner, runbook link, and recovery notification without using real personal data.

## Access And Retention

Test least-privilege operations access, denied learner/Admin-product access, masked sensitive investigation views, access audit where required, retention/deletion behavior, environment separation, and backup treatment for telemetry stores. Retention values must be approved before these tests can pass.

## Performance Evidence

Measure instrumentation overhead, exporter backpressure, dropped-signal counters, trace sampling behavior, and dashboard/query responsiveness under production-like load. A budget exception needs a measured owner and expiry.

Current evidence: API and worker traces passed through the Collector into Tempo; Collector metrics recorded 20 accepted/sent spans and zero failed spans. No typed-log/metric contract suite, alert exercise, leakage review, exporter outage, approved retention, or performance result is asserted.
