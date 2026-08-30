# Observability Package Security Notes

Status: Threat-model extension; review pending

## Assets And Classification

Telemetry configuration and internal metrics are C1. Pseudonymous identifiers and security investigation context may be C2. Masked Admin/security context and protected exports are C3. Collector credentials, signing/provider secrets, and storage/backup keys are C4. Telemetry stores may become as sensitive as production data if controls fail.

## Threats

- Accidental C2-C4 ingestion through free-form attributes, errors, bodies, SQL, or stack traces.
- High-cardinality labels or attacker-controlled messages create denial of service or cost growth.
- Forged, dropped, duplicated, or reordered signals hide incidents or create false alerts.
- Broad dashboard/log access enables learner, Admin, or insider surveillance.
- Trace propagation leaks identifiers across learner/Admin boundaries.
- Monitoring outage creates an undetected failure while domain operations continue.

## Controls

- Typed allowlists, denylisted secret patterns, field-length/cardinality bounds, sampling, redaction tests, and no free-form payloads.
- Separate environment credentials and protected operations network; least-privilege storage/dashboard access and MFA for privileged operations.
- Independent learner/Admin service identity and sanitized context propagation; never propagate cookies or tokens as trace fields.
- TLS, encryption where supported, retention/deletion controls, access review, integrity/availability monitoring, and protected backups if telemetry is retained.
- Domain state and Audit truth remain independent; telemetry outage uses bounded degradation and explicit health alerts.

## Audit And Alerts

Audit configuration, retention, alert-routing, privileged query/export, access grants, and break-glass changes. Alert on ingestion/storage outage, dropped signals, cardinality growth, redaction rejection, unauthorized access, disabled detections, stale dashboards, and secret exposure.

## Residual Risk

Redaction cannot guarantee removal of every novel sensitive value; privileged operators and infrastructure admins retain concentrated access; sampling may omit evidence; a monitoring outage may delay detection. Retention, sampling, access roles, backup policy, alert owners, and on-call escalation are unresolved and not verified here.
