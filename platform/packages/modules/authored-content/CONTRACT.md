# Authored Content Spike Contract

- Revisions, approvals, publication history, audit intents, and command results are append-only.
- Approval requires an independent Admin reviewer.
- Publication and rollback require explicit publisher capability, MFA, recent step-up, an approved target revision, and publisher/maker separation.
- A transaction atomically stores publication state, audit intent, idempotency result, and the outbox event.
- Rollback selects an explicitly named, previously published revision; history is never rewritten.
