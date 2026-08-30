# Identity Security Notes

## Assets And Data Classes

- C2: account contacts and security-event attribution
- C3: sessions, recovery state, MFA state, and Admin grants
- C4: password verifiers, recovery tokens, session secrets, and signing secrets

## Trust Boundaries And Controls

- Learner and Admin use separate base URLs, cookie prefixes, model namespaces, session audiences, secrets supplied by their composition roots, session limits, and authorization contexts.
- Cookies are secure, HTTP-only, same-site, and host-only; cross-subdomain cookies are disabled.
- Better Auth provides credential, passkey, recovery, session, CSRF, and TOTP implementations; no custom cryptography is introduced.
- Public Admin signup is disabled. Admin authorization resolves the current opaque session from PostgreSQL, requires MFA evidence issued into that session by Better Auth's passkey or TOTP flow, and checks an active database grant.
- Publication, rollback, refund, export, and capability changes require step-up evidence no older than 15 minutes. Trusted-device sessions cannot satisfy this policy.
- Recovery delivery receives a minimal destination and one-time URL through an adapter port. SMS is not required and is never an Admin factor.
- Secrets and tokens must not enter logs, telemetry, analytics, or client bundles.

## Abuse Cases And Monitoring

Monitor credential and recovery spikes, session revocation, failed MFA, learner sessions at Admin boundaries, stale step-up attempts, and capability changes. Rate limits are required at the API/edge boundary before public exposure.

## Residual Risk

Phishing, compromised devices, messaging-provider compromise, and defects in repeated owner-module capability checks remain. Recovery, passkey ceremony, CSRF, rate-limit, lockout, and browser accessibility coverage remain required before this foundation is production-ready.
