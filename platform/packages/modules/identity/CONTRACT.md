# Identity Contract

Status: Milestone 3 foundation

## Public Behavior

- `createLearnerAuth` configures password, recovery-link, and passkey authentication in the learner session namespace.
- `createAdminAuth` configures a separate Admin model, cookie, and audience namespace with shorter sessions, no public signup, password recovery, passkeys, and TOTP MFA.
- `authorizeAdminRequest` resolves a live Admin session, requires current-session MFA evidence, and requires an active PostgreSQL capability grant.
- Publication, rollback, refund, export, and grant changes always require MFA evidence no older than 15 minutes.
- Recovery delivery is an injected port. The module does not depend on SMS or any named messaging provider.

## Boundaries

- The module owns credential, session, MFA, and Admin grant truth only.
- Entitlements, progress, payments, and support state are excluded.
- Client-supplied principal IDs never establish ownership.
- Admin capability authorization is deny-by-default and must be repeated by the owning module.

## Versioning

This factory contract is version 1. Changes to cookie namespace, MFA policy, or persisted Better Auth schema require migration and security review.
