# Security Baseline

Status: Minimum production requirements

## Security Objectives

- Protect learner identity, progress, payment metadata, and private notes.
- Protect official-source and paid-content integrity.
- Prevent unauthorized Admin actions and preserve attribution.
- Keep exam and billing state recoverable and auditable.
- Minimize collected data and damage from a compromised component.

## Required Threat Models

Each protected module documents assets, actors, trust boundaries, abuse cases, controls, residual risk, and monitoring. The platform threat model must include account takeover, credential abuse, scraping, entitlement bypass, payment replay, malicious uploads, content tampering, privilege escalation, data export abuse, supply-chain compromise, and denial of service.

## Identity And Sessions

- Use an established authentication implementation rather than custom cryptography.
- Rotate and revoke sessions.
- Rate-limit authentication and recovery.
- Require verified contact ownership before sensitive changes.
- Require MFA for privileged Admin roles.
- Notify and audit material account-security changes.

## Authorization

- Deny by default.
- Enforce permissions on the server.
- Separate learner, support, editor, reviewer, publisher, finance, and security capabilities.
- Require stronger approval for source verification, publication, refunds, role changes, and destructive operations.
- Test cross-tenant and horizontal-access failures.

## Application Security

- Protect against XSS, CSRF, injection, SSRF, open redirects, unsafe deserialization, and path traversal.
- Apply Content Security Policy and secure cookie settings.
- Validate request shape and ownership at boundaries.
- Rate-limit expensive and abuse-prone operations.
- Scan dependencies, containers, and source code in CI.
- Keep production debug data and stack traces private.

## Files And Content

- Validate type, size, extension, and content independently.
- Quarantine uploads before processing.
- Malware-scan untrusted files where supported.
- Use private object storage and time-limited access where content is restricted.
- Audit source replacement, publication, download grants, and bulk export.

## Payments

- Never store card data.
- Verify gateway callbacks independently and idempotently.
- Reconcile payment, invoice, refund, and entitlement state.
- Protect callback endpoints against replay and forged status.
- Limit finance visibility and audit manual adjustments.

## Privacy

- Maintain a data inventory and retention schedule.
- Support account export and deletion subject to legal obligations.
- Separate required operational events from optional product analytics.
- Obtain consent where required and avoid collecting unnecessary sensitive educational data.
- Review every third-party processor and cross-border data path.

## Operations

- Store secrets in an approved secret manager.
- Separate development, staging, and production access.
- Encrypt transport and supported storage layers.
- Back up critical data and test restoration.
- Centralize security-relevant logs with retention and access controls.
- Maintain incident severity, escalation, communication, containment, and postmortem procedures.

## Release Gate

GA requires zero unresolved Critical or High security findings, reviewed threat models for every sensitive module, tested backup restoration, tested incident response, and documented residual risks accepted by the product owner.
