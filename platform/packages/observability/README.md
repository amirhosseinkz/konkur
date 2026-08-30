# Observability Package

Status: Milestone 3 implementation in progress; telemetry verification pending

## Purpose And Ownership

Observability provides vendor-neutral, typed, redacted logs, metrics, traces, and security signals for requests, jobs, payments, publication, identity, database recovery, and other critical operations. Engineering owns instrumentation; Security owns telemetry data policy and security detections; Security/Operations owns collectors, storage, dashboards, alerts, and on-call operation.

Telemetry is not domain truth, product analytics truth, or append-only Audit truth. It must never be used to complete a business operation or authorize a principal.

## Dependencies

- OpenTelemetry APIs and Collector
- Self-hosted Prometheus, Loki, Tempo, and Grafana
- `packages/contracts` for typed correlation and security-event fields
- Owner modules for allowlisted, minimized signal emission
- Approved secret management and protected operations access

No external analytics/error processor is approved. A future processor requires privacy, retention, availability, cross-border, and deletion review.

## Public Surface

The package exposes the initial OpenTelemetry lifecycle bootstrap and will add the typed instrumentation and operational query conventions documented in `CONTRACT.md`. It exposes no domain repositories, free-form analytics payload, raw record serializer, or vendor object to domain code.

Collector and storage configuration exists, but no successful end-to-end telemetry path, dashboard, alert, retention approval, or on-call rotation is claimed.
