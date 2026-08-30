# Architecture Principles

Status: Accepted constraints; stack selected by ADR-0031

## Delivery Model

- The learner product is one responsive website.
- Public SEO, account, learning, exam, and billing flows share one coherent web product.
- Admin is a separate protected surface and deployment boundary where practical.
- There is no native learner application in the current scope.
- Optional installability or offline support must remain standard web behavior.

## System Shape

Begin with a modular monolith. Modules have explicit contracts, data ownership, tests, and security notes. Do not introduce distributed services until measured scaling, isolation, or operational requirements justify them through an ADR.

Expected domains include identity, exam catalog, sources, content, learning, assessment, planning, search, commerce, notifications, analytics, support, and administration.

## Data Ownership

- One module owns each mutable record.
- Cross-module access uses application contracts, not direct table coupling.
- Official source facts, educational content, learner state, and commerce state are distinct.
- Entitlements authorize access but never modify educational records.
- Audit records are append-only from the application's perspective.
- Schema migrations are reviewed, reversible where possible, and tested against production-like data.

## Web And API

- Public pages must be server-renderable or statically renderable for SEO and performance.
- Authenticated interactions use versioned server contracts.
- Authorization runs server-side on every protected operation.
- URLs are stable product contracts with canonical and redirect policies.
- Accessibility and localization are architectural concerns, not final styling tasks.

## Reliability

- Core flows do not depend on AI or optional third parties.
- External payment, messaging, storage, and AI providers are isolated behind adapters.
- Idempotency is required for payments, imports, publishing, and background jobs.
- Backups are worthless until restore is tested.
- Observability covers requests, jobs, payments, content publication, and security events.

## Security

- Learner and Admin permissions are separate models.
- Secrets never enter source control or client bundles.
- Sensitive data is minimized and classified before storage.
- File ingestion is treated as hostile input.
- Security controls and audit evidence are part of module contracts.

## Performance

Set measurable budgets during Milestone 2 for public web vitals, authenticated navigation, search, exam autosave, and Admin publishing. Performance regressions fail release gates.

## Portability

Infrastructure choices account for Iranian connectivity, payment, sanctions, latency, cost, and provider continuity. Domain behavior must not be inseparable from one hosting vendor.

## Prototype Boundary

Prototype Zero's direct-file runtime, global namespace, static generated datasets, and LocalStorage-only state are not production architecture. Reuse requires an explicit migration decision and verification.
