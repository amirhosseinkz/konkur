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
- `02-architecture/DOMAIN_CONTRACTS.md`: module ownership and integration rules
- `03-security/SECURITY_BASELINE.md`
- `03-security/PLATFORM_THREAT_MODEL.md`: assets, boundaries, controls and residual risk

## Engineering And Design

- `04-engineering/AGENT_PROTOCOL.md`
- `04-engineering/DEFINITION_OF_DONE.md`
- `04-engineering/PERFORMANCE_BUDGETS.md`
- `05-design/DESIGN_PRINCIPLES.md`
- `05-design/DESIGN_SYSTEM.md`
- `05-design/MOTION_SYSTEM.md`
- `05-design/ACCESSIBILITY_AND_BROWSER_MATRIX.md`

## Operations

- `06-operations/PRODUCTION_LAUNCH_GATES.md`
- `project/RISK_REGISTER.md`
- `project/DECISIONS_PENDING.md`
- `project/MILESTONE_1_REPORT.md`: completed feasibility milestone and handoff
- `project/MILESTONE_2_REPORT.md`: completed architecture and design milestone
- `project/MILESTONE_3_PROGRESS.md`: active platform-foundation implementation and evidence gaps

## Research

- `research/MILESTONE_1_RESEARCH_CONTRACT.md`: completed evidence and integrity contract
- `research/MILESTONE_1_EVIDENCE_LEDGER.md`: dated external and repository evidence
- `research/OFFICIAL_SOURCE_INVENTORY_AND_GAP_REPORT.md`: annual source status and acquisition gaps
- `research/SOURCE_RIGHTS_DECISION.md`: detailed rights use matrix and unresolved legal questions
- `research/COMPUTER_ENGINEERING_MSC_GA_CONTENT_RELEASE_CONTRACT.md`: accepted release coverage and gates
- `research/CUSTOMER_AND_PRICING_RESEARCH_PLAN.md`: private candidate and pricing fieldwork
- `research/COMPETITOR_SNAPSHOT.md`: dated direct-competitor and substitute observations
- `research/CONTENT_OPERATIONS_AND_COST_MODEL.md`: editorial workflow, pilot, and cost formulas

## Decisions

Accepted production decisions are append-only records under `decisions/`. A later ADR may supersede an earlier ADR but must not rewrite it.

- `decisions/ADR-0029-source-rights-default.md`: metadata-and-links-only default before rights clearance
- `decisions/ADR-0030-original-authored-question-model.md`: original commercial question corpus with no official-question reproduction
- `decisions/ADR-0031-production-platform-stack.md`: production stack and modular-monolith shape
- `decisions/ADR-0032-product-identity-and-design-system.md`: Konkur product identity and Persian-first design baseline

## RFCs

- `rfcs/RFC-0001-production-platform-architecture.md`: accepted production architecture proposal

## Module Documentation

Every production module must eventually contain:

- `README.md`: purpose and ownership
- `CONTRACT.md`: public behavior and boundaries
- `TEST_PLAN.md`: required verification
- `SECURITY_NOTES.md`: threats, sensitive data, and controls

No module exists merely because a directory exists. Its contract creates the boundary.
