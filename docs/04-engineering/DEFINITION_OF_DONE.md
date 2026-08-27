# Definition of Done

Status: Mandatory baseline

A production feature is done only when all applicable evidence exists.

## Product

- Approved outcome and acceptance criteria
- Clear included and excluded behavior
- Complete happy path, error, loading, empty, expired, and recovery states
- Analytics requirements and privacy classification
- No unsupported claims or hidden commercial behavior

## Design

- Responsive behavior at defined breakpoints
- Keyboard and screen-reader behavior
- WCAG target evidence
- Persian-first copy and bidirectional-text handling
- Design-system usage and content-density review

## Engineering

- Module boundaries respected
- Data migration and rollback considered
- Unit, integration, and end-to-end coverage at the appropriate boundaries
- Idempotency for retryable operations
- Performance budget met
- No unresolved Critical or High defect

## Security And Privacy

- Authorization tests
- Threat-model update where trust boundaries change
- Sensitive data classified and minimized
- Logs reviewed for secret and personal-data leakage
- Abuse, rate limit, and audit requirements implemented

## Content

- Source and revision references resolve
- Required editorial approvals recorded
- Accessibility text exists for required media
- Corrections and withdrawal behavior tested
- Search and learner links use stable identities

## Operations

- Structured logs, metrics, traces, and alerts as applicable
- Support and Admin behavior available
- Runbook updated
- Backup, restore, and reconciliation impact assessed
- Deployment and rollback path verified

## Documentation And State

- Contracts and ADRs updated
- `project/state.yaml` contains evidence and next action
- Context validator passes
- No TODO substitutes for required completion work

An internal milestone may define stricter gates. It may not weaken this baseline without an accepted ADR.
