# Content Operations And Cost Model

Status: Model accepted; execution required in Milestone 4

Date: 2026-08-28

## Roles And Separation

| Role | Accountability |
|---|---|
| Source and rights researcher | Identity, ownership, intended uses, permission, and restrictions |
| Ingestion operator | Faithful capture, source location, checksum, and media handling |
| Subject editor | Classification, explanation, and educational accuracy |
| Independent verifier | Official key, correction history, reasoning, and disputes |
| Persian and accessibility editor | Clarity, terminology, bidirectional text, and media alternatives |
| Product QA | Rendering, scoring, interactions, links, and revision integrity |
| Publisher | Gate enforcement, publication, withdrawal, and rollback |
| Support and incident owner | Reports, learner impact, communication, and closure |

One person may hold several roles during a pilot, but an author cannot independently approve correctness-sensitive work.

## Workflow

```text
Scope
-> Rights assessment
-> Acquire and checksum
-> Verify source identity
-> Transcribe and structure
-> Classify
-> Draft explanation
-> Independent source and subject review
-> Persian and accessibility review
-> Product QA
-> Approve
-> Publish
-> Monitor
-> Correct, withdraw, or supersede
```

AI may assist transcription, classification, drafting, and duplicate detection. Inputs, model or tool version, output, reviewer, and decision are recorded. AI cannot establish source identity, official answers, corrections, or approval, and the workflow must remain viable without AI.

## Throughput Pilot

Pilot at least 60 rights-cleared or synthetic research questions across:

- at least three subject areas;
- at least two exam years when legal use permits;
- text, formulas, code, tables, and diagrams where available;
- multiple complexity levels;
- at least one simulated correction, dispute, withdrawal, and rollback.

Run two measured production cycles. Establish a no-AI baseline before interpreting any optional AI-assisted batch.

Measure by role and stage:

- touch time and queue time;
- end-to-end cycle time;
- first-pass acceptance;
- defects by severity and origin;
- rework time;
- source and rights blockers;
- cost per accepted question and learning asset;
- weekly bottleneck capacity;
- withdrawal and correction drill time;
- optional AI cost, time difference, and defect difference.

Report medians, upper-percentile observations, sample size, and range. Do not rely on averages alone.

## Correction Workflow

```text
Receive report
-> Link stable content revision
-> Triage severity
-> Withdraw immediately for critical correctness or provenance risk
-> Reproduce against exact source revisions
-> Independent source and subject review
-> Append correction or dispute record
-> Trace affected explanations, scores, plans, and analytics
-> Re-QA
-> Republish, supersede, or keep withdrawn
-> Notify affected learners when material
-> Record closure and prevention action
```

Original source, key, and content revisions are never overwritten.

## Cost Inputs

Every input records unit, observed value or range, evidence ID, observation date, confidence, and owner.

| Cost group | Required variables |
|---|---|
| Source and legal | Discovery time, permission work, counsel, acquisition, archival storage |
| Content labor | Touch hours by role, loaded rate, first-pass yield, rework |
| Tooling | Editorial tools, storage, rendering, optional capped AI |
| Annual maintenance | New exam intake, correction monitoring, re-review, withdrawal reserve |
| Learner operations | Infrastructure, messaging, support time, analytics, delivery |
| Commerce | Gateway fixed/rate fee, failed-payment loss, refund and reconciliation cost |
| Fixed platform | Engineering, security, observability, backup, support readiness |

## Formulas

```text
LaborCostPerItem =
  sum(TouchHoursByRoleAndStage * LoadedHourlyRate)

ExpectedReworkCost =
  sum(DefectProbability * ReworkHours * LoadedHourlyRate)

ContentVerticalCost =
  FixedVerticalCost
  + SourceAndRightsCost
  + sum(VolumeByContentType * (LaborCostPerItem + ExpectedReworkCost + ToolCost))
  + CorrectionReserve

WeeklyAcceptedCapacity =
  minimum(AvailableRoleHours / ObservedRoleHoursPerAcceptedItem)

VariableLearnerCost =
  Infrastructure
  + Messaging
  + (SupportMinutes / 60 * SupportRate)
  + CappedAICost
  + OtherPerLearnerCost

TransactionCost =
  GatewayFixed
  + (GatewayRate * CollectedAmount)
  + NonrecoverableRefundCost
  + ExpectedDisputeCost

ContributionBeforeFixed =
  ExpectedNetRevenue - VariableLearnerCost - TransactionCost

AllocatedContentCostPerLearner =
  ContentVerticalCost / PaidLearnerScenario

GrossMargin =
  (ExpectedNetRevenue
   - VariableLearnerCost
   - TransactionCost
   - AllocatedContentCostPerLearner)
  / ExpectedNetRevenue
```

Unknown values remain `unknown`; zero is never used as a placeholder.

## Required Scenarios

- No-AI operating case
- Optional AI-assisted case with explicit per-capability caps
- Low, central, and high paid-learner scenarios stated as assumptions, not forecasts
- Different coverage and entitlement-duration scenarios
- Inflation and currency-date sensitivity
- Refund, support, infrastructure, correction, and legal-cost sensitivity

Do not calculate CAC, LTV, conversion, or market size without observed evidence.

## Milestone 4 Scale Gate

Content production may not scale in Milestone 4 until the measured no-AI workflow demonstrates bounded staffing, cycle time, correction capacity, originality review, and cost. If it fails, amend the release contract transparently; do not substitute unreviewed automation.
