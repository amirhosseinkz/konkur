# Contracts Package Contract

Status: Milestone 3 schema registry in progress; shared envelopes remain pending

## Shared Schemas

- `CommandEnvelope.v1`: request ID, idempotency key, actor/service identity, target ID, expected revision when applicable, correlation ID, issue time.
- `QueryEnvelope.v1`: principal/service context, correlation ID, bounded cursor/limit where applicable, response schema version.
- `EventEnvelope.v1`: event ID/type/schema version, aggregate ID/revision, occurrence time, producer, correlation ID, causation ID.
- `ErrorEnvelope.v1`: stable safe code, safe message, correlation ID, retryability, and safe field violations.
- `PrincipalContext.v1`: stable principal ID/type, audience, session identity/state, and explicit claims without credentials or complete profile.
- `Page.v1`: bounded cursor pagination; large mutable offset pagination is forbidden.

## Public Commands And Queries

Command and query schemas are owned semantically by their domain modules. The initial Identity v1 names are those listed in `packages/modules/identity/CONTRACT.md`. Other module command/query names are not created by this foundation contract and require owner-module documentation before export.

Contracts performs validation only. It does not dispatch a command, authenticate, authorize, read data, retry, or apply an effect.

## Public Events

The baseline event-name registry follows `DOMAIN_CONTRACTS.md`:

- Identity: `AccountCreated`, `ContactVerified`, `SecurityChanged`, `SessionRevoked`, `AdminCapabilityChanged`
- Catalog: `CatalogRevisionPublished`, `ExamAvailabilityChanged`, `ExamRulesChanged`
- Sources: `SourceVerified`, `SourceDisputed`, `SourceRightsChanged`
- Content: `ContentPublished`, `ContentWithdrawn`, `ContentSuperseded`, `CorrectionApproved`
- Learning: `ReviewItemCreated`, `ActivityRecorded`, `MasteryEvidenceChanged`
- Assessment: `AttemptStarted`, `AttemptSubmitted`, `AttemptScored`, `ScoreRevised`
- Planning: `PlanCreated`, `PlanRevised`, `ActionDue`, `OverrideRecorded`
- Commerce: `PaymentVerified`, `RefundCompleted`, `EntitlementChanged`, `ReconciliationMismatch`
- Support: `IssueReported`, `CaseEscalated`, `OwnerActionRequested`, `CaseResolved`

Names alone do not authorize publication and do not claim schemas are implemented. Each producer must add a reviewed versioned payload before use. Payloads contain stable IDs/revisions and exclude copied records, secrets, private notes, unrestricted correspondence, and complete profiles.

## Compatibility And Errors

Readers reject unknown major/schema versions safely and may ignore documented additive optional fields. Required-field removal, meaning/type change, enum narrowing, or identity/revision semantic change is breaking and requires a new version plus producer/consumer migration evidence. Events are immutable; correction is a later revision/event.

Validation failures return `invalid_request` at ingress and produce no effects. Invalid internal events are quarantined/failed visibly, never coerced silently. Error schemas never expose stacks, SQL, provider payloads, secrets, C4 data, or unauthorized existence/revision details.

## Idempotency And Data Classes

Schemas require idempotency metadata but do not implement deduplication. Owners store prior results; consumers store event IDs before effects.

Every field requires a C0-C4 classification and purpose. C2/C3 fields require minimization and masking rules. C4 fields are prohibited from public commands, queries, events, errors, generated examples, and telemetry schemas. Card data is prohibited. Learner and Admin principal/audience variants are discriminated and cannot be treated as interchangeable.
