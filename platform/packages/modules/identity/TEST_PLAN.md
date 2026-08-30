# Identity Test Plan

Status: RFC-0001 identity spike verification passed; GA coverage remains

## Unit

- Learner authentication cannot satisfy the Admin assertion.
- Admin authentication requires MFA.
- Step-up operations reject stale authentication evidence.
- Learner and Admin factories retain distinct cookie prefixes and session limits.

## Integration

- Run Better Auth schema and session tests against PostgreSQL with separate learner and Admin hostnames.
- Verify secure host-only cookies, CSRF rejection, rotation, revocation, recovery, passkey, and TOTP flows.
- Verify password-manager, paste, autofill, keyboard, screen-reader, rate-limit, and lockout behavior.

`IDENTITY_TEST_DATABASE_URL=<postgres-url> pnpm test:integration` runs the PostgreSQL suite. It proves separate models and cookies, cross-surface credential and cookie rejection, disabled Admin signup, real password-plus-TOTP MFA, current-session evidence, deny-by-default and revoked grants, sensitive-action step-up, and learner/Admin session revocation. Recovery, passkey ceremony, CSRF, rate-limit, lockout, and browser behavior remain outside this bounded spike.
