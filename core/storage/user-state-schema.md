# User State Storage Schema

Status: Architecture Contract

Version: 1

This document defines mutable user state. Educational content is immutable and is never copied into this object.

## Storage Boundary

- Root LocalStorage key: `konkurExamCompanion`
- All reads and writes pass through the future `core/storage` adapter.
- Direct `localStorage` access outside that adapter is prohibited.
- References to educational content use stable IDs from `content/schemas/content-schemas.md`.
- Derived values are recalculated when practical. A persisted Statistics Snapshot is a cache, not an independent source of truth.

## Versioned Root Object

```text
{
  schemaVersion,
  createdAt,
  updatedAt,
  migration,
  settings,
  progress,
  attempts,
  examSessions,
  bookmarks,
  review,
  searchHistory,
  statistics,
  cache
}
```

| Field | Type | Default | Validation |
|---|---|---|---|
| `schemaVersion` | positive integer | `1` | Must be supported or migrated before use. |
| `createdAt` | ISO UTC timestamp | current timestamp on first save | Immutable after creation. |
| `updatedAt` | ISO UTC timestamp | current timestamp | Updated after each committed write. |
| `migration` | Migration Metadata | initial metadata | Required. |
| `settings` | User Settings | documented defaults | Required. |
| `progress` | Progress object | empty maps | Required. |
| `attempts` | map keyed by attempt ID | empty map | Required. |
| `examSessions` | map keyed by session ID | empty map | Required. |
| `bookmarks` | map keyed by bookmark ID | empty map | Required. |
| `review` | Review object | empty queue and flashcard states | Required. |
| `searchHistory` | ordered array | empty array | Required. |
| `statistics` | Statistics object | stale empty snapshot | Required. |
| `cache` | Cache object | empty translation cache | Required. |

Unknown root fields are rejected during import. Unknown nested fields may be preserved only by an explicit forward-compatible migration rule.

Exact root container shapes:

- `progress`: `{ lessonsById: map<Lesson ID, Lesson Progress>, topicsById: map<Topic ID, Topic Progress> }`
- `attempts`: `map<Question Attempt ID, Question Attempt>`
- `examSessions`: `map<Exam Session ID, Exam Session>`
- `bookmarks`: `map<Bookmark ID, Bookmark>`
- `review`: `{ queueById: map<Review Queue Item ID, Review Queue Item>, flashcardsById: map<Flashcard ID, Flashcard Review State> }`
- `statistics`: `{ currentSnapshot: Statistics Snapshot or null, snapshotHistory: array<Statistics Snapshot> }`
- `cache`: `{ translationsByKey: map<cacheKey, Translation Cache entry> }`

Maps serialize as plain objects whose property key must equal the contained record ID. Snapshot history is capped at the 20 latest valid snapshots; removing older derived snapshots never removes attempts or progress.

## Stable Mutable IDs

- Question attempt: `attempt:<uuid>`
- Exam session: `exam-session:<uuid>`
- Bookmark: `bookmark:<entity-type>:<content-id>`
- Review queue item: `review:<entity-type>:<content-id>:<reason>`
- Search history item: `search:<uuid>`
- Statistics snapshot: `statistics:<calculation-timestamp>`
- Exam result: `result:<exam-session-uuid>:<result-uuid>`

UUID values are locally generated collision-resistant identifiers. IDs never contain educational text.

## User Settings

Required fields:

| Field | Type | Default | Rules |
|---|---|---|---|
| `appearance` | enum | `dark` | Version 1 accepts only `dark`; this is not a selectable theme. |
| `updatedAt` | ISO UTC timestamp | root creation timestamp | Updated whenever any setting changes. |
| `language` | enum | `en` | `en` or `fa`; English remains available when translation is missing. |
| `translationEnabled` | boolean | `false` | Optional translation is hidden by default. |
| `reducedMotion` | enum | `system` | `system`, `reduce`, or `no-preference`. |
| `fontScale` | number | `1` | Range `0.875` through `1.5`. |
| `examDate` | ISO date or null | `null` | User-provided only. |
| `availableStudyMinutes` | non-negative integer or null | `null` | User-provided remaining study budget; null means unknown. |
| `selectedSubjectIds` | array of Subject IDs | empty array | User-selected scope; IDs must resolve. |
| `onboardingStatus` | enum | `not-started` | `not-started`, `in-progress`, or `completed`. |
| `confirmBeforeReset` | boolean | `true` | Reserved for future policy; version 1 validation requires `true`. |

Optional fields: `lastRoute` string and `keyboardShortcutsEnabled` boolean defaulting to `true`.

## Question Attempt

Required fields: `id`, `questionId`, `questionRecordKey`, `mode`, `selectedOptionRecordKeys`, `startedAt`, `submittedAt`, `elapsedMilliseconds`, `outcome`, `scoringContractVersion`, `answerResolutionContractVersion`, `effectiveAnswerRecordKeys`, and `effectiveCorrectionRecordKeys`.

`questionRecordKey` resolves the exact Question revision shown to the user and its stable ID must equal `questionId`. `mode` is `practice`, `exam`, or `review`. `outcome` is `correct`, `wrong`, `blank`, `deleted`, or `unscored`. `selectedOptionRecordKeys` contains zero or one exact Question Option revision in response-mode version 1; zero means blank. `scoringContractVersion` and `answerResolutionContractVersion` are positive integers supported by `features/exam/EXAM_RULES.md`. `effectiveAnswerRecordKeys` and `effectiveCorrectionRecordKeys` are stable-ID-sorted/precedence-ordered arrays of exact revisions and may be empty only when no verified answer or correction applies.

Optional fields: `examSessionId`, `confidenceBeforeAnswer`, `wasHintUsed`, `wasTranslationShown`, and `notes`.

Validation: the exact Question revision resolves; all exact Option revisions belong to that Question revision; version 1 cardinality is zero or one selected option; timestamps are ordered; elapsed time is non-negative; Exam Mode attempts cannot record hints or translation usage. Import, persistence, and submission reject multiple selections rather than truncating them.

## Exam Session

Required fields: `id`, `mode`, `questionRecordKeys`, `attemptIds`, `draftResponsesByQuestionId`, `startedAt`, `updatedAt`, `status`, `durationSeconds`, `scoringContractVersion`, `answerResolutionContractVersion`, `currentResult`, and `resultHistory`.

`mode` is `practice`, `exam`, or `review`. Last Night Mode is a review experience and is not stored as an Exam Session. `status` is `in-progress`, `submitted`, `expired`, `abandoned`, or `unscored`. `durationSeconds` is a positive integer for a timed session and null for an untimed Practice or Review session; Exam Mode requires a positive duration. `currentResult` is null while in progress or abandoned without scoring; otherwise it contains the canonical result shape. `resultHistory` preserves every original or recalculated result in calculation order and never overwrites prior evidence.

Each `draftResponsesByQuestionId` value contains `questionId`, `questionRecordKey`, `selectedOptionRecordKeys`, and `updatedAt`. The map key equals the stable Question ID; the record key identifies the exact revision in `questionRecordKeys`. Version 1 requires zero or one exact Option revision belonging to that Question revision. Drafts persist current selections before submission so reload recovery and timer expiration submit exactly the last committed choices. Draft responses become immutable Question Attempts during final submission and are cleared only after attempts and result commit succeeds.

Optional fields: `submittedAt`, `expiredAt`, `filters`, and `sourceExamYear`.

Validation: one active timer per timed session; exact Question/Option revisions and attempts resolve; draft keys equal their stable `questionId`; Question stable IDs are unique within the session; `updatedAt` is not before `startedAt`; both contract versions are supported positive integers; current result equals the item with latest `calculatedAt`, breaking ties by lexicographically smaller Result ID; result counts reconcile with effective question states and `features/exam/EXAM_RULES.md`.

## Bookmark

Required fields: `id`, `entityType`, `entityId`, `createdAt`, and `updatedAt`.

`entityType` is `subject`, `topic`, `lesson`, `question`, `flashcard`, `golden-rule`, `exam-trap`, `five-minute-review`, `crash-course`, or `cheat-sheet`.

Optional fields: `note` and user-defined `tags`.

Validation: only one bookmark exists for an entity; the target must resolve in the active content registry. Missing targets are retained as recoverable orphan records during content upgrades and shown in diagnostics, not silently deleted.

## Lesson Progress

Required fields: `lessonId`, `status`, `firstOpenedAt`, `lastOpenedAt`, `updatedAt`, and `completedAt`.

`status` is `not-started`, `in-progress`, or `completed`. Optional fields are `scrollProgressPercent` and `reviewCount`.

Validation: percentage is 0 through 100. `completedAt` is present only for completed lessons. Opening a lesson does not automatically mark it complete.

## Topic Progress

Required fields: `topicId`, `status`, `completedLessonIds`, `reviewedFlashcardIds`, `questionPerformance`, and `updatedAt`.

`status` is `not-started`, `in-progress`, `completed`, or `mastered`. `questionPerformance` stores source attempt IDs or deterministic counts with a calculation timestamp.

Optional fields: `weaknessStatus`, `strengthStatus`, and `lastRecommendedAt`.

Validation: progress references resolve. Weak/strong status is derived from attempts and marked `insufficient-data` until its future documented threshold is met.

## Flashcard Review State

Required fields: `flashcardId`, `reviewCount`, `lastReviewedAt`, `nextReviewAt`, `updatedAt`, `rating`, and `status`.

`rating` is `again`, `hard`, `good`, `easy`, or null. `status` is `new`, `learning`, `review`, or `mastered`.

Optional fields: `intervalDays` and `lapseCount`.

Validation: counts and intervals are non-negative. Scheduling behavior must be versioned before it affects recommendations.

## Review Queue Item

Required fields: `id`, `entityType`, `entityId`, `reason`, `priority`, `createdAt`, `updatedAt`, and `status`.

`reason` is `wrong-question`, `weak-topic`, `bookmarked`, `unfinished`, `old-flashcard`, or `manual`. `priority` is `critical`, `high`, `medium`, or `low`. `status` is `queued`, `in-progress`, `completed`, or `dismissed`.

Optional fields: `dueAt`, `sourceAttemptIds`, and `completedAt`.

Validation: one canonical item exists per entity and reason. Merge uses the earliest `createdAt`, union of unique `sourceAttemptIds` sorted by ID, and mutable fields from the record with later `updatedAt`; equal timestamps with differing mutable fields quarantine the conflict. New evidence may move a completed/dismissed item back to `queued` only through a later timestamp and records the new source attempt.

## Search History

Each item requires `id`, normalized `query`, original `displayQuery`, `searchedAt`, and `resultCount`.

Optional fields: `selectedEntityType` and `selectedEntityId`.

Validation: blank queries are not stored. Result count is non-negative. History is capped at 50 most recent unique normalized queries; deduplication retains the latest display form and timestamp.

Import merge unions valid Search History items by ID; same-ID differing records are quarantined. It then deduplicates by normalized query using latest `searchedAt`, breaking equal-time ties by lexicographically smaller stable ID, and finally retains the 50 latest items using the same tie-breaker.

## Translation Cache

Each cache entry requires `cacheKey`, `entityId`, `fieldPath`, `sourceLocale`, `targetLocale`, `sourceContentHash`, `translatedText`, `provider`, `createdAt`, `updatedAt`, and `status`.

`status` is `unverified`, `verified`, or `stale`. Optional fields are `expiresAt` and `reviewedAt`.

Validation: a source hash mismatch makes the entry stale. Cache failure or absence always falls back to original content. Cached translations are mutable user cache, never authoritative educational content.

## Statistics Snapshot

Required fields: `id`, `calculatedAt`, `calculationVersion`, `sourceAttemptUpdatedAt`, `counts`, `subjectSummaries`, `weakTopicIds`, `strongTopicIds`, and `estimatedScore`.

`estimatedScore` contains `value`, `status`, and `reason`; status is `available` or `insufficient-data`. Optional fields are `studyTimeMilliseconds`, `averageSolveMilliseconds`, and `confidence`.

Validation: snapshots are recalculable caches. The adapter discards stale or inconsistent snapshots and rebuilds them from attempts and progress. No estimate is shown as an official score.

For version 1, `estimatedScore.status` is `insufficient-data` and `value` is null. An `available` value requires a future accepted ADR and matching non-zero `calculationVersion`; informal estimation is prohibited.

Imported Statistics Snapshots are never merged as authority. After attempts, sessions, and progress merge, all imported and existing snapshots are discarded and one new snapshot is recalculated; `snapshotHistory` restarts with that snapshot.

## Migration Metadata

Required fields: `lastSuccessfulSchemaVersion`, `migrationHistory`, and `recoveryEvents`.

Each history item records `fromVersion`, `toVersion`, `startedAt`, `completedAt`, `status`, and optional `errorCode`. Each recovery event records the affected top-level dataset, timestamp, action, and non-sensitive reason.

## Migration Rules

- Read and validate the root object before exposing it to features.
- Migrations are sequential, deterministic, idempotent, and tested against exported fixtures.
- Create an in-memory migrated copy; do not mutate the stored value incrementally.
- Validate the complete migrated copy before committing one replacement write.
- Preserve `createdAt`; update `updatedAt` and migration history.
- A failed migration leaves the original serialized value untouched and enters recovery flow.
- Downgrades are unsupported unless an explicit reverse migration is documented.

## Corruption Recovery

- Parse failure: preserve the unreadable serialized value for user export when feasible, then initialize a validated default root after explicit recovery notification.
- Root validation failure: isolate and validate each top-level dataset.
- Dataset failure: reset only the invalid dataset to defaults; preserve valid siblings.
- Referential failure: quarantine the invalid record inside adapter diagnostics; do not delete unrelated records.
- Derived statistics failure: discard and recalculate statistics only.
- Translation cache failure: clear translation cache only.
- Every recovery writes a Migration Metadata recovery event without storing sensitive query or note content.

## Partial Reset Behavior

Supported reset targets are `settings`, `progress`, `attempts-and-sessions`, `bookmarks`, `review`, `search-history`, `statistics`, `translation-cache`, and `all-user-state`.

Version 1 reset operations always require confirmation, affect only the selected target, update timestamps, and trigger recalculation of dependent derived data. Cancel makes no change and returns focus to the invoking control. Resetting attempts also resets derived topic performance, review items sourced only from those attempts, and statistics; it does not remove bookmarks or settings.

## Storage Quota Handling

- Estimate serialized size before non-trivial writes when the browser exposes no reliable quota API for `file://`.
- On write failure, retry once after removing expired/stale translation cache entries and obsolete statistics snapshots.
- Never delete attempts, bookmarks, progress, settings, or active review items automatically.
- If retry fails, keep the last committed state, notify the user, and offer export and selective cache clearing.
- Writes use one serialized root replacement to avoid partially committed cross-dataset state.

## Import and Export

- Export format contains `application`, `exportVersion`, `exportedAt`, `storageSchemaVersion`, and the validated root object.
- Application identifier is `konkur-exam-companion`.
- Import validates file shape, supported versions, IDs, timestamps, and references before preview.
- Import never trusts embedded educational content and never imports it into the content registry.
- Compatible older exports migrate in memory before confirmation.
- Newer unsupported exports are rejected without changing current state.
- Import offers replace or deterministic merge behavior. Settings, bookmarks, progress, review, and caches choose the latest valid record-level `updatedAt` after schema validation. If equal timestamps contain different normalized records, quarantine the conflict and preserve the current record.
- Question Attempts are append-only by stable ID. Same-ID byte-equivalent normalized records deduplicate; differing same-ID records are quarantined as conflicts and neither silently overwrites the other.
- Exam Sessions with the same ID may merge only when mode, Question record keys, start time, and contract versions match. The latest valid `updatedAt` supplies mutable drafts and status. Result histories union by immutable Result ID; same-ID differing Results quarantine the session conflict. `currentResult` is the Result with latest `calculatedAt`, breaking equal-time ties by lexicographically smaller Result ID. Equal session timestamps with differing mutable state, or divergent identity fields, quarantine that session conflict without changing the current stored session.

## Validation Contract

- Validate on initial read, import, migration, and before every committed write.
- Reject non-finite numbers, invalid dates, unsupported enums, new unknown IDs, and malformed content references. Previously valid bookmark targets missing after a content upgrade are retained as explicitly flagged orphans for recovery and are not accepted as new references.
- Sanitize user-visible strings at render time; storage validation enforces type and length limits.
- Maximum user note length is 2,000 Unicode code points.
- Storage validation produces non-sensitive field paths and error codes suitable for QA reports.
- Defaults are created only by the storage adapter and are themselves schema-validated.
