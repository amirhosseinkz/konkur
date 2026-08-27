# Agent Operating Protocol

Status: Mandatory

## Session Start

1. Read root `AGENTS.md`.
2. Validate context with `node tools/validate-project-context.js`.
3. Read `project/context.yaml`, `project/state.yaml`, and `project/roadmap.yaml`.
4. Read the Product Constitution.
5. Identify the one active workstream.
6. Read its module contract, test plan, security notes, ADRs, and pending decisions.
7. Inspect the current code and worktree before proposing changes.

## Work Selection

- Work only on the active milestone or an explicitly approved blocker.
- Do not start work whose roadmap dependencies are incomplete.
- Do not switch modules because another task appears easier.
- Record a discovered cross-module requirement instead of silently expanding scope.
- Ask only when a decision cannot be resolved from authoritative context.

## Implementation

- Preserve domain and security boundaries.
- Keep changes minimal but complete.
- Add tests and operational behavior with the feature.
- Do not add placeholders, fake educational data, fabricated claims, or unbounded AI calls.
- Do not modify Prototype Zero while implementing production behavior unless the active workstream is migration.

## Decision Handling

- Durable product or architecture changes require an ADR.
- Large changes spanning multiple modules require an RFC before implementation.
- Unknowns remain explicit in `DECISIONS_PENDING.md` or the active contract.
- A superseding decision references the prior ADR; history is not rewritten.

## Completion

1. Run module tests and project quality gates.
2. Run the context validator if documentation or state changed.
3. Update `project/state.yaml` with evidence, blockers, and next action.
4. Update roadmap status only when its evidence requirements pass.
5. Confirm documentation and implementation agree.
6. Stop at the active workstream boundary.

## Handoff Standard

A new agent must be able to determine, without conversation history:

- what the product is and is not;
- what milestone is active;
- what is completed and with what evidence;
- what is blocked and by whom;
- what exact action is next;
- what files govern the active module;
- what decisions are pending.

If this is not possible, the workstream is not ready for handoff.
