# Assessment Contract

Status: RFC-0001 bounded spike

## Commands

- `autosaveAttempt(actor, command)` accepts the next exact sequence and expected revision for an active, actor-owned attempt.
- `submitAttempt(actor, command)` submits only the exact expected revision and last sequence.
- Both commands carry request, idempotency, correlation, and issue-time metadata. Neither command accepts a learner ID.
- A duplicate idempotency key in the same attempt, actor, and operation returns the durably stored prior result without another effect.

## Concurrency

The attempt row is locked before idempotency, revision, sequence, or status decisions. Accepted autosaves increment revision and sequence atomically. Submit and autosave therefore serialize: submit cannot omit a concurrently accepted save, and no save can commit after submission.

## Errors

Missing and non-owned attempts are indistinguishable. Invalid payload, revision conflict, sequence conflict, and already-submitted failures are typed and contain no answer content.

## Exclusions

Question authorship, entitlement truth, client-side durable queues, timing enforcement, scoring, and learning evidence are outside this spike.
