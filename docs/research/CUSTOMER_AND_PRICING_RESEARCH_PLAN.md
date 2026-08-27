# Customer And Pricing Research Plan

Status: Ready for protocol review; fieldwork not started

Date: 2026-08-28

## Decisions This Research Supports

- Candidate job, trigger, constraints, substitutes, and trust requirements
- Workflow and package comprehension
- Entitlement-duration hypotheses
- An exploratory price corridor for later commercial validation

It does not establish market size, conversion, exact launch price, or observed demand.

## Participants

Qualitative target: 24 Persian-speaking adults preparing for or recently completing the Computer Engineering MSc entrance exam.

| Primary segment | Quota |
|---|---:|
| Active first-attempt candidates | 8 |
| Active repeat, returning, or employed candidates | 8 |
| Candidates who sat the exam within the previous 24 months | 8 |

Cross-cutting minimums may overlap:

| Characteristic | Minimum |
|---|---:|
| Mobile-primary study | 12 |
| Outside Tehran | 8 |
| Ten or fewer preparation hours per week | 8 |
| Purchased a paid substitute | 8 |
| Primarily used free or self-assembled resources | 8 |
| Material device, connectivity, or accessibility constraint | 4 |

Recruitment source, incentive, consent version, and sample limitations must be recorded. Tutors and exam-prep employees are expert interviews, not candidate evidence.

## Study Sequence

1. Conduct 12 chronological JTBD switch interviews.
2. Run private Persian prototype tasks with the same or separately recruited participants.
3. Revise the prototype and run 12 validation sessions.
4. Run a Van Westendorp wave with at least 100 valid current-cycle candidates.
5. Run a separate Gabor-Granger wave with at least 150 valid current-cycle candidates and at least 30 randomized initial exposures per tested price point.
6. Combine results with competitor observations and measured cost constraints.
7. Record a recommendation or an explicit inconclusive result.

All sessions are private, consented, non-production research under ADR-0026.

## Interview Focus

- The moment serious preparation started
- Desired progress within available time
- Resources combined, purchased, abandoned, or distrusted
- The last time the candidate did not know what to study next
- The last disputed question, key, or explanation
- Evidence required before trusting a recommendation
- Repetitive preparation work and avoidable time loss
- Payment decision, historical spend, cancellation, and refund expectations

Historical spend is an observation, not willingness to pay.

## Prototype Tasks

- Set exam date, available time, and preparation status.
- Explain a generated study recommendation and its evidence.
- Override an unsuitable recommendation without losing progress.
- Complete a timed negatively marked question and review the mistake.
- Find source, official-answer status, revision, and correction information.
- Report a suspected content error.
- Compare entitlement duration, included capabilities, renewal, and refund behavior.
- Choose between Konkur and a realistic substitute and explain the trade-off.

Record completion, assistance, critical errors, comprehension, trust concern, elapsed time, and verbatim rationale.

## Pricing Method

### Instrument Controls

- Test fixed capability sets and durations, not vague plan names.
- Use toman and preserve the rial conversion and collection date.
- Do not show competitor prices before unaided questions.
- Randomize package and price presentation where appropriate.
- Pre-register hypotheses, exclusions, price points, metrics, and segment cuts.

### Van Westendorp

Ask when the fixed package becomes too cheap to trust, a bargain, expensive but worth considering, and too expensive. Use the result only as an exploratory corridor. Pre-register logical-consistency exclusions and report their rate.

### Gabor-Granger

Test five dated price points selected from the exploratory corridor, competitor evidence, and cost constraints. Randomize the initial price and branch up or down. Report `definitely` and top-two-box results separately with raw denominators and uncertainty.

### Interpretation Rules

- Do not infer market size, conversion, revenue, or transaction volume.
- Do not select an exact launch price from Van Westendorp alone.
- Do not claim segment differences below the declared sample threshold.
- Treat unstable, overlapping, or non-monotonic results as inconclusive.
- State sample source, date, inflation context, and hypothetical-purchase limitation.
- Exact packages and launch prices remain a Milestone 6 decision requiring cost, margin, gateway, legal, and private behavioral evidence.

## Evidence Handling

Store deidentified protocols, session notes, instruments, findings, and decision records in approved research storage. Keep recordings, identity mappings, and consent records outside the repository in approved encrypted storage.

Every finding records evidence IDs, contradictory observations, sample limits, protocol version, owner, and review status. Participant data receives a retention and deletion date.

## Decision Gates

| Gate | Pass condition |
|---|---|
| Protocol | Consent, privacy, screener, script, prototype label, and exclusion rules approved before recruitment |
| JTBD | Quotas met and decision-relevant themes recur independently across at least two segments |
| Prototype | No unresolved critical source-status, pricing, renewal, or trust misunderstanding in the final round |
| Pricing | Sample and quality minimums met and results are interpretable under pre-registered rules |
| Decision | Recommendation states limits and may explicitly be inconclusive |

## Completion Evidence

- Approved protocols and consent material
- Deidentified session registry and quota report
- Findings traceable to evidence IDs
- Pricing instrument, raw denominator report, exclusions, and uncertainty
- Package and price recommendation or explicit inconclusive result
- Updated `P-004` reference without treating stated intent as sales
