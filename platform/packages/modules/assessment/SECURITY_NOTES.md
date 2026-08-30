# Assessment Security Notes

## Assets

Attempts, pre-submission answers, timing, and submissions are C2 personal educational data. They must not enter logs, telemetry, analytics, errors, or idempotency-key diagnostics.

## Controls

- Commands contain no learner ID; a server-derived authenticated actor is supplied separately.
- Every transaction selects by both attempt ID and actor learner ID. Missing and non-owned attempts return the same error.
- Parameterized SQL, bounded snapshots, exact revision/sequence checks, row locks, and immutable save/submission rows protect integrity.
- Idempotency results are durable and scoped by attempt, actor, and operation.
- Autosave and submit lock the same attempt row, preventing post-submit writes and lost-save submission races.

## Residual Risk

The spike does not provide API rate limiting, client durable queues, server timing, audit/outbox events, least-privilege database grants, retention/export/deletion, or production-load evidence. Those controls are required before learner exposure.
