# Exam and Scoring Rules

Status: Application Contract

Scoring Contract Version: 1

Answer Resolution Contract Version: 1

This document defines application behavior. It does not claim that the formula is the current official examination policy. Before a release tied to an official exam, the configured formula must be compared with verified official rules.

## Configurable Scoring Contract

Default version 1 formula:

```text
scorePercent =
((correctCount - wrongCount / 3) / validQuestionCount) * 100
```

Configuration fields:

| Field | Version 1 value | Purpose |
|---|---:|---|
| `correctCredit` | `1` | Credit for a correct answer. |
| `wrongPenaltyDivisor` | `3` | A wrong answer subtracts one-third credit. |
| `blankCredit` | `0` | Blank answers do not change the numerator. |
| `deletedQuestionPolicy` | `exclude` | Deleted questions are excluded from the denominator. |
| `allowNegativeResult` | `true` | The calculated score is not silently clamped to zero. |

Changing official rules requires a new configuration version, verified source reference, migration impact review, and regression tests. Historical Exam Sessions retain the scoring contract version used when calculated.

## Effective Question Set

- `validQuestionCount` is the verified scored subset: `correctCount + wrongCount + blankCount`.
- A verified Official Correction with `question-deleted` status excludes that question from `validQuestionCount`.
- A question without a verified effective Official Answer is unscored and excluded from `validQuestionCount`; it must not be guessed, counted wrong, or silently omitted from the result breakdown.
- If `validQuestionCount` is zero, no percentage is calculated.

## Answer Classification

- Blank: no option is selected at submission. It adds neither positive nor negative score.
- Correct: the single selected option ID occurs in the effective Official Answer's `acceptedOptionIds`.
- Wrong: the single selected option is not accepted by the effective Official Answer.
- Deleted: the effective official state marks the question deleted.
- Unscored: source or effective answer verification is insufficient.

Version 1 exam questions use single-choice interaction. Drafts, imports, persisted attempts, and submission accept zero or one selected option and reject greater cardinality. An official answer may list multiple accepted option IDs as alternative correct choices; selecting any one accepted option is correct. A future question requiring simultaneous multi-selection requires a new response-mode and scoring-contract version.

## Official Answer Precedence

The effective answer is selected in this order:

1. Latest applicable verified Official Correction by precedence timestamp and sequence; precedence timestamp is `effectiveDate` when present, otherwise `publishedAt`
2. Earlier applicable verified Official Correction
3. Verified original Official Answer candidate set
4. No effective answer

For original candidates, compare the unique accepted-option sets of all active verified Official Answer revisions referenced by the Question. If every candidate set is identical, every supporting answer `recordKey` is retained and that shared set is effective. If verified candidates disagree and no later verified correction resolves the disagreement, the Question is disputed and unscored. Record-key sorting is used only for deterministic storage, never to choose between conflicting official answers.

Unverified, disputed, or generated corrections never override a verified official record. A correction overrides only the fields it explicitly changes. Every result stores exact effective answer revision/correction IDs, the scoring contract version, and the answer-resolution contract version used, so recalculation remains auditable.

Answer Resolution Contract Version 1 is the precedence algorithm in this section. A change to correction ordering or effective-answer selection requires a new answer-resolution contract version and migration/recalculation review.

## Deleted Questions

- Deleted questions remain visible in source review with a clear deleted label.
- They cannot produce positive or negative score.
- They are excluded from `validQuestionCount`.
- Existing selected answers may be retained for audit but their attempt outcome becomes `deleted` for scoring.
- A verified correction received after a stored session may trigger a recalculated result while preserving the original snapshot and correction reason.

## Submission

- Submission validates session, question references, selected options, timer state, and effective answers.
- A user-confirmed Exam Mode submission is final for that session. The confirmation identifies unanswered count, remaining time, and that submission cannot be undone; Cancel returns focus to the invoking control without changing the session.
- Submission classifies all unanswered valid questions as blank.
- Result calculation is deterministic and stores counts, formula inputs, raw numerator, percentage, scoring contract version, and effective correction IDs.
- A storage write failure must not show a successful submission. The last valid in-memory session remains available for retry or export.
- Repeated submission of the same finalized session is idempotent and cannot duplicate attempts.

## Timer Expiration

- Exam Mode uses a monotonic elapsed-time calculation while open and stores wall-clock timestamps for recovery.
- When time expires, input is disabled and the session is submitted automatically using currently selected answers.
- Unanswered questions become blank.
- Reload recovery computes remaining time from persisted timestamps and cannot grant extra time by refresh.
- Clock anomalies are recorded; a materially invalid timer state blocks official-style scoring and marks the session unscored rather than guessing.
- Practice and Review Modes may display elapsed time but do not auto-submit unless an explicitly configured timer is started.

## Practice Mode

- Immediate answer checking is available only when a verified effective Official Answer exists.
- Explanations, hints, optional translation, and related assets may be shown.
- The user may retry, but every submitted attempt remains distinct and auditable.
- Wrong and blank attempts can enter the Review Queue.
- No result is presented as an official exam simulation unless Exam Mode rules were used.
- Missing or unverified answers display `Unknown` to the user, store attempt outcome `unscored`, and make no correctness claim. `unknown` is not a separate persisted attempt outcome.

## Exam Mode

- No hints, explanations, translation, correctness feedback, or answer-key visibility before submission.
- Negative marking is enabled using the configured contract.
- Official timing is used only when verified timing configuration exists; otherwise the session must be labeled custom or timing unknown.
- Results appear only after submission or timer expiration.
- Navigation and answer changes remain available before final submission unless the timer has expired.

## Review Mode

- Review Mode draws from wrong, blank, bookmarked, time-consuming, deleted, or explicitly queued questions. Deleted questions are source-review items and remain unscored.
- It never changes the original Exam Session result.
- New review attempts are stored separately and may update current learning statistics.
- Effective corrected answers are used, with a notice when they differ from the answer used by an older session.
- Explanations and related assets are shown only when they have passed the educational-content gate.

## Last Night Mode

Last Night Mode is a focused review experience, not a scored exam session.

It includes only approved:

- Golden Rules
- Flashcards
- Five-Minute Reviews
- Verified high-value topics
- Exam Traps
- User bookmarks and recent mistakes that reference these concise assets

It excludes:

- Long lessons
- Full Crash Courses
- Full exam simulations
- Unverified frequency claims
- Unapproved generated explanations
- New theory-heavy content
- Optional translation when unavailable offline

No estimated score is generated from Last Night Mode activity alone.

## Result Object

A calculated result contains:

- `id`: immutable locally unique Result ID
- `status`: `calculated`, `partial`, `insufficient-data`, or `invalid-session`
- `correctCount`
- `wrongCount`
- `blankCount`
- `deletedCount`
- `unscoredCount`
- `validQuestionCount`
- `rawNumerator`
- `scorePercent` or null
- `scoringContractVersion`
- `answerResolutionContractVersion`
- `effectiveAnswerRecordKeys`
- `effectiveCorrectionRecordKeys`
- `calculatedAt`
- `reason` when status is not `calculated`

Result IDs use `result:<exam-session-uuid>:<result-uuid>`. A Result is immutable after creation; recalculation appends a new Result with a new ID and reason linking it to the prior Result ID.

Count reconciliation must satisfy:

```text
sessionQuestionCount =
correctCount + wrongCount + blankCount + deletedCount + unscoredCount
```

When `unscoredCount` is greater than zero and `validQuestionCount` is greater than zero, status is `partial`; the formula uses only `validQuestionCount`, and the result shows both the verified denominator and unscored count. It must not present that value as the full exam score.

## Insufficient-Data Behavior

Show `Unknown` or `Insufficient verified data` instead of a score when:

- No valid scored questions exist.
- All otherwise valid questions lack verified effective Official Answers, leaving `validQuestionCount` at zero.
- Question deletion/correction state is disputed and changes the result.
- Session integrity or timer state is invalid.
- The configured scoring contract cannot be matched to the session.

The interface must identify the blocking record IDs without exposing internal stack traces. It must never infer official answers from explanations or majority behavior.

## Verification Tests

- All correct, all wrong, all blank, and mixed-result formulas
- Negative percentage preservation
- Deleted-question denominator exclusion
- Multiple accepted alternative options
- Latest verified correction precedence
- Unverified correction rejection
- Mixed verified/missing-answer partial behavior and all-missing insufficient-data behavior
- Timer expiration and reload recovery
- Submission confirmation, cancellation, keyboard focus return, and unanswered-count disclosure
- Idempotent final submission
- Historical result recalculation audit
