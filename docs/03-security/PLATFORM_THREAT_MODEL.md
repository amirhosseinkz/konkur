# Platform Threat Model

Status: Accepted Milestone 2 baseline

## Objectives

- Protect learner identity, attempts, progress, plans, notes, payments and support history.
- Isolate Admin authorization and privileged operations from learner identity.
- Preserve authored-content, source, assessment and commerce integrity.
- Keep core flows recoverable and available without AI.
- Minimize personal data and preserve attributable audit evidence.

## Data Classes

| Class | Examples | Minimum handling |
|---|---|---|
| C0 Public | Published catalog, approved samples, prices and policies | Publication integrity and cache invalidation |
| C1 Internal | Draft workflow, internal metrics and non-secret configuration | Authenticated access and retention policy |
| C2 Personal | Contact, targets, attempts, progress, notes, tickets and consent | Ownership checks, encryption, export/deletion and log minimization |
| C3 Restricted | Sessions, MFA, unpublished paid content, invoices, refunds, Admin grants and exports | Capability checks, audit, masking and short-lived access |
| C4 Critical | Password verifiers, signing keys, provider secrets and backup keys | Secret manager, rotation, least privilege and no log/client exposure |

Card data is never stored.

## Actors

Anonymous visitors, learners, support operators, editors, reviewers, publishers, finance operators, security administrators, background workers and external providers are distinct principals. Threat actors include credential attackers, scrapers, compromised learners, malicious or compromised insiders, supply-chain attackers and denial-of-service actors.

## Trust Boundaries

| Boundary | Primary risk | Required control |
|---|---|---|
| Browser to learner edge | XSS, CSRF, credential abuse and bots | TLS, CSP, secure cookies, CSRF defense, validation and rate limits |
| Learner edge to modules | Horizontal access and entitlement bypass | Server-side ownership, capability and entitlement checks |
| Admin browser to Admin edge | Privilege escalation and session theft | Separate hostname/session/audience, MFA, step-up and stronger CSP |
| Admin edge to modules | UI bypass | Owner modules repeat authorization and approval checks |
| Module to module | Shared-database coupling and unauthorized mutation | Contract-only access and architecture tests |
| Transaction to worker | Replay, duplicate or lost work | Transactional outbox, inbox and idempotency |
| App to data/search/storage | Leakage, stale access and unsafe queries | Least privilege, private storage and rebuildable indexes |
| Upload to processing | Malware, bombs, traversal and parser flaws | Quarantine, type/size/content checks, scan and resource limits |
| App to payment | Forgery, replay and state divergence | Independent verification, idempotency and reconciliation |
| App to messaging | PII leakage and abuse | Minimal typed payloads, templates and rate limits |
| App to analytics/telemetry | Consent violation and sensitive leakage | Allowlisted schemas, redaction and separation |
| App to optional AI | Exfiltration, fabrication, cost and outage | Approved inputs, timeout, budget, fallback and kill switch |
| Operations to production | Insider abuse and accidental destruction | MFA, environment separation, least privilege and break-glass audit |
| Primary to backup | Theft or unusable recovery | Encryption, restricted access, retention and restore drills |

## Abuse Cases

| Threat | Preventive controls | Detection and recovery | Residual risk |
|---|---|---|---|
| Account takeover | Maintained auth library, passkeys/password managers, rate limits, revocable sessions | Login/recovery anomaly alerts and session revocation | Phishing and compromised devices |
| Learner-to-Admin escalation | Separate security context and denied-by-default capabilities | Alert on learner sessions at Admin boundaries | Privileged endpoint defects |
| Compromised Admin | MFA, least privilege, step-up and maker-checker actions | Role, publication, export and refund anomaly alerts | Authorized-session damage |
| Horizontal data access | Owner checks and opaque IDs | Denied-object probing alerts and authorization tests | Application defects |
| Paid-content scraping | Entitlements, throttling and private delivery | Sequential-access and sharing signals | No perfect DRM |
| Payment replay/forgery | Gateway verification and idempotency | Duplicate and reconciliation alerts | Provider compromise |
| Refund/override abuse | Finance capability, reason, approval and expiry | Manual-adjustment review | Collusion |
| Malicious upload | Quarantine, validation, scanning and parser isolation | Scan/parser alerts and deletion | Novel parser flaws |
| Official-content leakage | ADR-0029 metadata-only and ADR-0030 authored corpus | Binary/text similarity checks and audit | Human misclassification |
| Near-copy authored content | Reference history, originality review and independent approval | Similarity failures and dispute workflow | Detection cannot prove originality |
| Content tampering | Immutable revisions, maker-checker and exact publication revision | Publication/withdrawal alerts and rollback | Privileged collusion |
| Assessment manipulation | Server timing/scoring, ordered autosave and immutable submission | Sequence conflicts and score-revision audit | Intermittent connectivity conflicts |
| Search leakage | Separate scopes and pre-result access filters | Private-result fixtures and index revision monitoring | Brief stale projection risk |
| Bulk export abuse | Dedicated capability, preview, reauthentication and expiring delivery | Export volume and download alerts | Concentrated breach target |
| Analytics overcollection | Typed consent-aware events and pseudonymous IDs | Rejected-field and volume-drift alerts | Reidentification |
| Support social engineering | Verification procedure and no direct mutation | Override and failed-verification review | Convincing deception |
| Audit tampering | Append-only interface and atomic audit intent | Gap/sequence alerts and backups | Infrastructure-admin power |
| Supply-chain compromise | Lockfiles, reviewed builds, scanning and secret isolation | Provenance, dependency and image-drift alerts | Trusted upstream compromise |
| Denial of service | Edge/operation rate limits, bounded work and backpressure | Saturation, queue and cost alerts | Regional or upstream outage |
| Provider outage | Adapters, timeout, retry, circuit break and reconciliation | Health and backlog monitoring | Delayed payment or messaging |
| AI failure | No authority, approved data, deterministic fallback and kill switch | Budget, timeout and rejection metrics | Subtle reviewed-draft defects |

## Security Event Contract

Security events include event ID, timestamp, environment, actor type and ID where known, session or service identity, action, target type and stable ID, outcome, reason code, correlation ID and originating module.

They exclude credentials, session/recovery tokens, private notes, pre-submission answers, payment secrets, raw exports and unrestricted support correspondence.

## Mandatory Alerts

- Credential/recovery spikes and material account changes
- Learner sessions on Admin endpoints and privilege escalation attempts
- Publication outside workflow, mass withdrawal and originality bypass
- Callback verification failures, replay and reconciliation drift
- Bulk export and unusual support access
- Autosave failure, queue backlog and provider outage
- Audit gaps, stale search revisions and backup failure
- Vulnerable dependency, unsigned build and secret exposure

## Release Conditions

Every sensitive module must extend this threat model in its `SECURITY_NOTES.md`. GA requires reviewed residual risks, zero unresolved Critical or High security findings, tested backup restoration, tested incident response, cross-surface authorization tests and verified Admin MFA.
