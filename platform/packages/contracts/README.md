# Contracts Package

Status: Milestone 3 implementation in progress; registry verification pending

## Purpose And Ownership

Contracts holds versioned Zod schemas and generated OpenAPI inputs/outputs for cross-module commands, queries, events, errors, pagination, identity context, idempotency, correlation, and immutable snapshots. Engineering owns schema tooling; each domain owner approves its public schemas and semantics; Security reviews security-sensitive and C2-C4 fields.

This package owns schema definitions, not mutable domain records or business interpretation. Generated OpenAPI and clients derive from reviewed schemas and do not become independent truth.

## Dependencies

- Zod for runtime validation and TypeScript inference
- Domain owner approval for each schema
- `packages/observability` conventions for safe correlation fields
- Build tooling for deterministic OpenAPI generation, once implemented

Contracts must not depend on module repositories, database row models, Better Auth internals, provider SDK models, web framework request objects, optional AI, or Prototype Zero.

## Public Surface

Only explicitly exported, versioned schemas are public. Internal models and unversioned helpers are private. Initial assessment, event, and status schemas are authored; shared envelopes, generated OpenAPI, compatibility evidence, and package build availability remain pending. `CONTRACT.md` defines the registry and compatibility rules.
