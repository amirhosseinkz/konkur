# ADR-0028: Context As Code

Status: Accepted

Date: 2026-08-27

## Context

Long-running agent-assisted projects lose intent when decisions exist only in conversations or large narrative files.

## Decision

Store durable constraints in `project/context.yaml`, live execution in `project/state.yaml`, and dependencies in `project/roadmap.yaml`. Keep files JSON-compatible for dependency-free validation. Use human documents for rationale and append-only ADRs for decision history.

## Consequences

Agents follow a mandatory reading order. CI can reject missing documents, invalid milestone transitions, and release-policy drift. Project state must be updated as part of completion.
