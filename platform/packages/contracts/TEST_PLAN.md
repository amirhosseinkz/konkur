# Contracts Package Test Plan

Status: Required verification; not yet executed

## Owners

- Engineering: schema, generation, and compatibility tests
- Domain owner: semantic fixtures and consumer expectations
- Security: C2-C4, principal separation, and safe-error review

## Required Coverage

- Unit-test valid/invalid/boundary values for every exported schema, including timestamps, UUIDv7 IDs, revisions, cursors, bounded limits, enums, and unknown fields.
- Snapshot and determinism-test generated OpenAPI and examples; generated output must match reviewed Zod sources.
- Consumer-driven contract-test every registered producer/consumer pair and retain schema-version evidence.
- Compatibility-test additive optional fields, unknown versions, breaking-field changes, enum evolution, and producer/consumer rollout order.
- Verify invalid commands have no effect and invalid events fail visibly without partial consumer state.
- Deliver duplicate command/event fixtures and verify owner/inbox implementations use the IDs rather than schema validation as deduplication.
- Architecture-test that contracts import no module repositories, database rows, provider SDK models, framework request objects, optional AI, or Prototype Zero paths.

## Security Fixtures

- Prove learner and Admin principal/audience variants cannot parse as each other accidentally.
- Prove C4 fields, credentials, session/recovery tokens, MFA seeds, payment secrets, raw exports, private notes, and complete profiles are absent from commands, queries, events, errors, generated examples, logs, and snapshots.
- Test safe error detail for unauthorized existence and revision conflicts.
- Classify every field C0-C4 and fail review when purpose, owner, retention implication, or masking rule is missing for sensitive fields.

## Evidence

Retain schema registry/version report, OpenAPI diff, producer/consumer matrix, compatibility results, architecture results, security review, and defect disposition. A breaking change requires migration/rollback evidence and owner approval.

Current evidence: locked type checking and three assessment contract tests pass, including UUIDv7 rejection and duplicate-result representation. No shared-envelope implementation, generated OpenAPI, producer/consumer compatibility run, or security review is asserted.
