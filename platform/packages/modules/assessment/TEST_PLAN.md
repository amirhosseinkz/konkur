# Assessment Test Plan

Status: RFC-0001 spike verification

## Unit

- Reject malformed retry metadata, unbounded answer snapshots, invalid revisions, and invalid sequences.

## PostgreSQL Integration

- Run only when `DATABASE_URL` exists; otherwise report the suite as skipped.
- Prove ownership denial, exact ordered sequence, optimistic revision conflicts, and exact prior-result return for retries.
- Race duplicate autosaves and distinct saves against one revision; prove one durable effect.
- Race autosave against submit; prove serialization, retry-safe submit, immutable submission, and rejection of post-submit saves.

These spike tests use synthetic UUIDs and answers only. Production-like intermittent-network, load, timing, scoring, restore, and least-privilege role tests remain required.
