# Konkur Production Platform

This repository contains two distinct products:

- The existing direct-file Computer Engineering MSc companion is **Prototype Zero**.
- The production Konkur platform is governed by `project/` and `docs/`.

Prototype documentation under `.ai/` is historical evidence. It must not override production-platform decisions.

## Mandatory Reading Order

Before changing production-platform code or documentation, read:

1. `project/context.yaml`
2. `project/state.yaml`
3. `project/roadmap.yaml`
4. `docs/00-product/PRODUCT_CONSTITUTION.md`
5. `docs/README.md`
6. The contract and security notes for the active module
7. Relevant ADRs under `docs/decisions/`

Run `node tools/validate-project-context.js` before and after changing project-level documentation.

## Authority Order

When documents disagree, use this order:

1. `project/context.yaml`
2. Accepted ADRs in `docs/decisions/`
3. `docs/00-product/PRODUCT_CONSTITUTION.md`
4. `project/state.yaml`
5. Active module contracts
6. Other production documentation
7. Historical `.ai/` prototype documentation

Do not silently resolve a conflict. Record a superseding ADR or stop and report it.

## Operating Rules

- Work on one active workstream at a time.
- Do not start implementation before its dependencies and contracts are complete.
- Update `project/state.yaml` when a workstream changes state.
- Update `project/roadmap.yaml` only when milestone evidence supports the change.
- Never publish generated educational claims without the provenance and review gates in `docs/01-domain/CONTENT_PROVENANCE_POLICY.md`.
- Core learning, exam, billing, and account flows must not depend on AI availability.
- There is no public MVP, beta, or partial production release. Milestones before GA are internal.
- The learner product is one responsive website. Do not create a native learner application.
- The Admin surface is separately protected and must never share learner authorization assumptions.
- Architecture changes require an ADR.
- Large cross-module changes require an RFC before implementation.
- Never mark work complete without the evidence required by `docs/04-engineering/DEFINITION_OF_DONE.md`.

## Prototype Boundary

The current root application and `release/` package remain available as Prototype Zero until a migration ADR defines their archival location. Do not extend their direct-file architecture into the production platform. Reuse product insight and verified domain logic only after explicit review.
