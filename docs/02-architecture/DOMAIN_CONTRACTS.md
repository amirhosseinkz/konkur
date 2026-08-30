# Production Domain Contracts

Status: Accepted Milestone 2 baseline

## Invariants

1. One module owns every mutable record.
2. Only the owner mutates or interprets that record as business truth.
3. Cross-module access uses versioned commands, queries, and events.
4. Direct access to another module's tables, repositories, storage prefixes, or indexes is forbidden.
5. Stable IDs and immutable snapshots may cross boundaries; mutable internal models may not.
6. Modules repeat authorization checks even when a route already checked access.
7. Entitlements authorize capabilities but never alter educational truth.
8. Admin orchestrates owner-module commands and never bypasses them.
9. Retryable commands, events, jobs, imports, publication, and payments are idempotent.
10. Synchronous dependency cycles are forbidden.
11. AI providers own no domain record and approve no domain decision.
12. Security-sensitive changes commit domain state and audit intent atomically.

## Modules

| Module | Owns | Public responsibilities | Explicit exclusions |
|---|---|---|---|
| Identity | Accounts, verified contacts, credentials, passkeys, sessions, recovery, MFA, Admin capabilities | Authenticate principals; manage sessions and security lifecycle | Entitlements, learner progress, support cases |
| Exam Catalog | Families, cycles, groups, sets, sections, subjects, topics, timing and scoring revisions | Publish factual exam scope and availability | Source files, authored questions, attempts |
| Sources | Metadata, canonical links, rights status, approved academic reference revisions | Record and review source identity and restrictions | Commercial question content under ADR-0030 |
| Authored Content | Original questions, Konkur answers, explanations, lessons, flashcards, mappings, authorship, originality, reviews, revisions and publication | Draft, review, approve, publish, withdraw, supersede | Official questions and Official Answers |
| Learning | Exam selection, bookmarks, notes, review queue, activity, mistakes, mastery evidence | Record learner actions and derived progress evidence | Attempts, payment state, content truth |
| Assessment | Assemblies, attempts, autosaves, submissions, timing, scoring snapshots and score revisions | Start, recover, submit, and score attempts | Question authorship, mastery truth, entitlement truth |
| Planning | Study-plan versions, inputs, evidence, schedule, overrides and action state | Generate deterministic plans and explain recommendations | Unsupported rank or score predictions |
| Search | Derived public, learner and Admin indexes and checkpoints | Return access-filtered results and rebuild projections | Publication, entitlement, catalog or progress truth |
| Commerce | Offerings, orders, gateway references, payments, invoices, refunds, promotions, entitlements and reconciliation | Verify money movement and authorize capabilities | Card data and educational records |
| Notifications | Message intents, templates, preferences, attempts and provider responses | Deliver typed transactional or consented messages | Business-operation completion |
| Analytics | Consent-aware allowlisted events, pseudonymous IDs and aggregates | Measure product behavior without becoming operational truth | Free-form sensitive payloads and security audit |
| Support | Cases, issue reports, correspondence, verification, escalation and resolution | Inspect masked context and request owner-module actions | Direct mutation of other modules |
| Administration | Work queues, saved operational views and bulk-job request state | Compose authorized module commands | Domain records, role truth and audit truth |
| Audit | Append-only actor, action, target, outcome, reason and correlation evidence | Append and query authorized audit scopes | Product analytics and mutable business state |

## Learner And Admin Principals

A learner principal accesses only its own records and currently entitled capabilities. Client-supplied user IDs never establish ownership.

An Admin principal uses the Admin hostname and Admin session namespace, requires explicit capabilities, and receives no capability from learner identity or payment state. There is no silent learner impersonation.

| Capability | Permitted | Forbidden |
|---|---|---|
| Support | Masked case context and owner-module requests | Role grants, direct refunds, score/content mutation |
| Editor | Draft and revise assigned content | Self-approval and publication |
| Reviewer | Record independent review | Editing an approved revision |
| Publisher | Publish, withdraw, supersede and roll back approved revisions | Bypassing gates or changing review evidence |
| Finance | Reconcile, refund and grant approved overrides | Educational or identity mutation |
| Security | Role lifecycle, session response and security evidence | Content correctness and commerce decisions |
| Audit reader | Read authorized evidence | Audit mutation or deletion |

## Allowed Synchronous Dependencies

- Application composition roots may call Identity and authorized domain contracts.
- Authored Content may query Exam Catalog and approved Source reference revisions.
- Learning may resolve exact published content and current entitlements.
- Assessment may snapshot exact content, exam rules, and entitlement authorization.
- Planning may read bounded Learning, Assessment, Catalog, and Content evidence.
- Search may build projections from Catalog, Content, and learner-owned records and query current entitlements.
- Notifications may resolve an approved destination from Identity without copying contact truth.
- Support may query masked Identity, learner evidence, Content, and Commerce through support-scoped contracts.
- Every module may append minimized structured audit intent.

Any dependency not listed requires contract review. No domain module synchronously calls back into a caller.

## Events

Events contain stable IDs and revisions, never copied records, secrets, private notes, unrestricted correspondence, or complete personal profiles.

| Publisher | Events | Consumers |
|---|---|---|
| Identity | `AccountCreated`, `ContactVerified`, `SecurityChanged`, `SessionRevoked`, `AdminCapabilityChanged` | Notifications, Support, Audit, consented Analytics |
| Catalog | `CatalogRevisionPublished`, `ExamAvailabilityChanged`, `ExamRulesChanged` | Content, Assessment, Planning, Search |
| Sources | `SourceVerified`, `SourceDisputed`, `SourceRightsChanged` | Catalog, Content, Support, Audit |
| Content | `ContentPublished`, `ContentWithdrawn`, `ContentSuperseded`, `CorrectionApproved` | Search, Assessment, Learning, Planning, Support, Audit |
| Learning | `ReviewItemCreated`, `ActivityRecorded`, `MasteryEvidenceChanged` | Planning, Notifications, Analytics |
| Assessment | `AttemptStarted`, `AttemptSubmitted`, `AttemptScored`, `ScoreRevised` | Learning, Planning, Support, Analytics |
| Planning | `PlanCreated`, `PlanRevised`, `ActionDue`, `OverrideRecorded` | Notifications, Analytics |
| Commerce | `PaymentVerified`, `RefundCompleted`, `EntitlementChanged`, `ReconciliationMismatch` | Notifications, Support, Analytics, Audit |
| Support | `IssueReported`, `CaseEscalated`, `OwnerActionRequested`, `CaseResolved` | Relevant owner, Notifications, Audit |

## Retry Contract

Every retryable command carries `request_id`, `idempotency_key`, actor or service identity, target ID, expected revision where applicable, correlation ID, and issue time. Every event carries event ID, type, schema version, aggregate ID and revision, occurrence time, producer, correlation ID, and causation ID.

Duplicates return the prior result or produce no additional effect. Consumers record processed event IDs before applying effects.

## Correction Propagation

```text
Issue report
-> content dispute
-> critical withdrawal when required
-> independent review
-> corrected or superseding revision
-> affected assessment score revision
-> affected learning evidence annotation
-> affected plan revision
-> search replacement
-> support impact list
-> material learner notification
-> complete audit chain
```

Original content, attempts, scores, plans, and events are never overwritten.

## Module Documentation Gate

Before implementation, each module must define its own `README.md`, `CONTRACT.md`, `TEST_PLAN.md`, and `SECURITY_NOTES.md`. This platform contract supplies the common rules; module contracts may strengthen but not weaken them.
