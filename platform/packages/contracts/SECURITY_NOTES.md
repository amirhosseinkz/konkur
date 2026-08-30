# Contracts Package Security Notes

Status: Threat-model extension; review pending

## Assets And Boundaries

Contract schemas control what can cross module, learner/Admin, worker, provider, and telemetry boundaries. A schema defect can enable overcollection, mass assignment, confused-deputy authorization, data leakage, replay, or incompatible effects even though this package stores no domain truth.

## Classification

Schema metadata is C1. Generated examples become at least the classification of their values and therefore must use synthetic non-sensitive data. C2/C3 fields require explicit purpose, owner, minimization, masking, audience, and retention implications. C4 data is prohibited from public contract payloads and artifacts.

## Threats And Controls

- Mass assignment/unsafe coercion: explicit object schemas, boundary validation, unknown-field policy, immutable server-derived actor/owner fields, and no direct row-model schemas.
- Learner/Admin confusion: discriminated principal and audience types; server-side audience checks; no shared capability union that grants Admin access.
- Replay/duplicate effects: required request/event IDs and idempotency metadata, with owner/inbox enforcement and duplicate tests.
- Sensitive leakage: field allowlists, C0-C4 review, synthetic examples, safe error schemas, and generated-artifact scans.
- Supply-chain/generator compromise: lockfile, reviewed dependencies, deterministic generation, provenance, diff review, and CI scanning.
- Version downgrade/incompatibility: explicit versions, safe unknown-version rejection, compatibility tests, and coordinated migrations.

## Audit And Monitoring

Audit schema publication, breaking-change approval, generated artifact release, and emergency rollback. Monitor invalid-message rates, unknown versions, quarantined events, repeated authorization-shape failures, and drift between schemas and generated OpenAPI without logging prohibited payloads.

## Backup And Recovery

Contracts contain no authoritative user data. Source and released schema artifacts require version-control/build-artifact recovery and reproducible generation, not database backup. Restored databases and workers must be tested against compatible contract versions during the platform restore drill.

## Residual Risk

Static schemas cannot prove authorization, idempotency, semantic correctness, or consumer safety. A reviewed schema may still expose excessive data or create an ambiguous meaning. No generator, schema, compatibility result, or residual-risk acceptance is verified by this file.
