# Project Context

The `.yaml` files in this directory use JSON-compatible YAML so the repository can validate them with Node.js and no external dependency.

- `context.yaml` contains durable accepted product constraints.
- `state.yaml` contains current execution state and evidence.
- `roadmap.yaml` contains dependency-ordered internal milestones.

Human-readable explanations live under `docs/`. Do not duplicate prose into state files. Reference the governing document or ADR.

Run:

```bash
node tools/validate-project-context.js
```

The validator checks required context, document existence, roadmap dependencies, release policy, active state, and accepted decisions.
