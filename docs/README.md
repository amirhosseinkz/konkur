# Production Documentation Index

`project/` stores machine-readable truth. `docs/` explains the contracts behind that truth.

## Product

- `00-product/PRODUCT_CONSTITUTION.md`: durable product law
- `00-product/LAUNCH_SCOPE.md`: General Availability boundary
- `00-product/BUSINESS_MODEL.md`: revenue and entitlement principles
- `00-product/AI_POLICY.md`: permitted and prohibited AI use

## Domain

- `01-domain/DOMAIN_GLOSSARY.md`: canonical exam and learning terms
- `01-domain/CONTENT_PROVENANCE_POLICY.md`: source and publication gates

## Architecture And Security

- `02-architecture/ARCHITECTURE_PRINCIPLES.md`
- `03-security/SECURITY_BASELINE.md`

## Engineering And Design

- `04-engineering/AGENT_PROTOCOL.md`
- `04-engineering/DEFINITION_OF_DONE.md`
- `05-design/DESIGN_PRINCIPLES.md`

## Operations

- `06-operations/PRODUCTION_LAUNCH_GATES.md`
- `project/RISK_REGISTER.md`
- `project/DECISIONS_PENDING.md`

## Decisions

Accepted production decisions are append-only records under `decisions/`. A later ADR may supersede an earlier ADR but must not rewrite it.

## Module Documentation

Every production module must eventually contain:

- `README.md`: purpose and ownership
- `CONTRACT.md`: public behavior and boundaries
- `TEST_PLAN.md`: required verification
- `SECURITY_NOTES.md`: threats, sensitive data, and controls

No module exists merely because a directory exists. Its contract creates the boundary.
