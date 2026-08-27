# Canonical Content Schemas

Status: Architecture Contract

Version: 1

This document defines immutable educational content. It defines structure only and contains no educational claims, questions, answers, or frequency data.

## General Rules

- Every record is immutable after publication. A correction creates a higher record `version`; it never rewrites source history.
- Every logical entity has one stable lowercase `id`. Every concrete revision has a globally unique `recordKey` in the form `<id>@<version>`.
- IDs use ASCII kebab-case segments and must match the format declared for the entity.
- IDs never contain display text that may be translated or corrected unless the ID format explicitly calls for a stable slug.
- Dates and timestamps use ISO 8601. Dates use `YYYY-MM-DD`; timestamps use UTC with `Z`.
- Exam years are Solar Hijri integers in the supported source range. No year is published until its source record exists.
- Unknown facts use an explicit status or `null` only where this schema permits it. They are never guessed.
- References contain IDs, not embedded duplicate records.
- Unknown fields are rejected by strict dataset validation unless a future schema version permits them.
- Published records must pass structural validation and referential-integrity validation.

## Common Record Envelope

Every schema below includes these required fields except Source Record. A Source Record is itself provenance and uses the self-contained contract in its section rather than referring to another Source Record.

| Field | Type | Required | Validation |
|---|---|---:|---|
| `id` | string | yes | Entity-specific stable logical identity; shared only by revisions of that entity. |
| `recordKey` | string | yes | Exact `<id>@<version>` revision key; globally unique. |
| `schemaVersion` | positive integer | yes | Must equal a supported schema version. Initial value is `1`. |
| `version` | positive integer | yes | Starts at `1`; increases only when the record is superseded. |
| `verificationStatus` | enum | yes | `unverified`, `partially-verified`, `verified`, `disputed`, or `not-applicable`. |
| `publicationStatus` | enum | yes | `draft`, `in-review`, `published`, or `withdrawn`. |
| `educationalApproval` | object | yes | Contains `status`, `reviewerRole`, `reviewedAt`, `reviewContractVersion`, and optional `notes`. |
| `sourceIds` | array of Source Record IDs | yes | May be empty only for structural metadata with `not-applicable` verification. |
| `primarySourceId` | Source Record ID or null | yes | Must occur in `sourceIds` when non-null. |
| `sourcePage` | positive integer or null | yes | Page in the primary source; null only when unavailable or not applicable. |
| `sourceUrl` | string or null | yes | Must use `https:` when present and must correspond to a declared source. |
| `provenanceNotes` | string or null | yes | Required when status is `disputed` or `partially-verified`; otherwise nullable. |
| `createdAt` | ISO 8601 timestamp | yes | Content-ingestion timestamp, not the historical publication date. |
| `updatedAt` | ISO 8601 timestamp | yes | Must be greater than or equal to `createdAt`. |

Source-derived claims such as official answers, frequencies, and corrections require at least one verified source. Generated explanations may remain `partially-verified` until educational review is complete, but must retain the question and source references that motivated them.

`educationalApproval.status` is `not-applicable`, `pending`, `approved`, or `rejected`. Exact shapes are:

- `not-applicable`: `reviewerRole`, `reviewedAt`, and `reviewContractVersion` are null; optional notes are null.
- `pending`: `reviewerRole` is `exam-editor`; `reviewedAt` and `reviewContractVersion` are null; optional notes may explain pending work.
- `approved` or `rejected`: `reviewerRole` is `exam-editor`; `reviewedAt` is an ISO UTC timestamp; `reviewContractVersion` is a positive integer; notes are required for rejection and optional for approval.

Raw Question transcription, Question Options, Official Answers, and Official Corrections use `not-applicable`. Pattern Clusters and every generated Educational Asset require `approved` before `publicationStatus` may be `published`. Product-release approval is recorded in QA evidence, not inside immutable educational facts.

## Revision Registration

- A dataset may retain multiple revisions with the same stable `id`, but each `(id, version)` pair and `recordKey` must be unique.
- For records using the common envelope, ordinary application lookup exposes exactly one active revision per stable `id`: the highest valid version with `publicationStatus: published`. Pattern Clusters and Educational Assets must also have approved educational status. Draft, in-review, rejected, and withdrawn revisions are available only to validation/editor tooling and never to ordinary runtime lookup or search.
- Source Records do not use publication status. Provenance lookup selects the highest valid version not marked `unavailable`; only a `verified` Source Record may support an official answer, correction, frequency, or published source-backed claim.
- Older revisions remain immutable in dataset history or repository version history and are not returned by ordinary active-content lookup.
- Normal content references use stable IDs and resolve to the active revision.
- Historical/audit references use `{ id, version }` and must resolve the exact `recordKey`.
- Registration rejects duplicate `recordKey` values, duplicate versions for one stable ID, and version gaps unless accompanied by migration notes. Active selection is derived by the rules above; there is no separate active flag.

## ID Namespace

| Entity | Stable ID format |
|---|---|
| Source Record | `source:<year-or-reference>:<source-type>:<stable-slug>`; non-exam sources use literal `reference`. |
| Subject | `subject:<stable-slug>` |
| Topic | `topic:<subject-slug>:<stable-slug>` |
| Lesson | `lesson:<subject-slug>:<topic-slug>:<stable-slug>` |
| Question | `question:<year>:<paper-code>:<question-number>` |
| Question Option | `<question-id>:option:<stable-option-key>` |
| Official Answer | `answer:<question-id>:<source-slug>` |
| Official Correction | `correction:<question-id>:<publication-date>:<sequence>` |
| Explanation | `explanation:<question-id>:<locale>` |
| Wrong-Option Analysis | `wrong-option:<question-option-id>` |
| Pattern Cluster | `pattern:<subject-slug>:<stable-slug>` |
| Golden Rule | `golden-rule:<subject-slug>:<stable-slug>` |
| Flashcard | `flashcard:<subject-slug>:<stable-slug>` |
| Exam Trap | `exam-trap:<subject-slug>:<stable-slug>` |
| Five-Minute Review | `five-minute-review:<subject-slug>` |
| Crash Course | `crash-course:<subject-slug>:<stable-slug>` |
| Cheat Sheet | `cheat-sheet:<subject-slug>` |
| Search Alias | `search-alias:<locale>:<stable-slug>` |
| Related Topic | `topic-link:<from-topic-slug>:<to-topic-slug>:<relation>` |
| Related Question | `question-link:<from-question-key>:<to-question-key>:<relation>` |

## Source Record

Purpose: identifies one pending, acquired, or referenced paper, key, correction, or verified supporting publication. This schema is canonical and is mirrored by `content/sources/SOURCE_MANIFEST.md`.

Required fields:

| Field | Type | Validation |
|---|---|---|
| `id` | Source Record ID | Stable logical identity; shared only by revisions of that source record. |
| `recordKey` | string | Exact `<id>@<version>` revision key. |
| `schemaVersion` | positive integer | Initial value `1`. |
| `version` | positive integer | Starts at `1`; increments for non-destructive record revisions. |
| `year` | integer or null | Required for exam artifacts; null only for non-exam supporting sources. |
| `sourceType` | enum | `exam-paper`, `answer-key`, `official-correction`, or `verified-reference`. |
| `title` | non-empty string | Must reflect the source title without invented claims. |
| `paperSourceId` | Source Record ID or null | Required for keys and corrections targeting a paper. |
| `answerKeySourceId` | Source Record ID or null | Required when a correction targets an answer key. |
| `correctionSourceIds` | array of Source Record IDs | Empty until verified corrections are identified. |
| `publisher` | non-empty string | Organization shown by the source. |
| `retrievalDate` | ISO date or null | Null while acquisition and URL verification are pending. |
| `localFilename` | string or null | Null until a local artifact exists. Must be repository-relative when present. |
| `originalUrl` | HTTPS URL or null | Null only when no verified URL is known. |
| `checksum` | string or null | `sha256:<64 lowercase hex characters>` when a local artifact exists. |
| `verificationStatus` | enum | `pending-acquisition`, `acquired-unverified`, `partially-verified`, `verified`, `disputed`, or `unavailable`. |
| `verificationNotes` | string or null | Required for partial, disputed, or unavailable records. |
| `licenseOrRedistributionNote` | non-empty string | Redistribution or usage status, including unknown status. |
| `questionNumberCoverage` | array of positive integers | Empty when not applicable or not yet verified. |
| `knownInconsistencies` | array of inconsistency objects | Each contains question number, field, description, status, related source IDs, and optional resolution. |
| `createdAt` | ISO UTC timestamp | Manifest record creation time. |
| `updatedAt` | ISO UTC timestamp | Must not precede `createdAt`. |

Optional fields: `publicationDate` as ISO date, `edition` as string, and `language` as BCP 47 tag.

Validation: `localFilename` and `checksum` must either both be present or both be null. A local file is not considered acquired until its checksum is recorded. An `official-correction` identifies its target through `paperSourceId` and, when applicable, `answerKeySourceId`. Every `correctionSourceId` resolves to an official-correction Source Record targeting this paper or key.

## Subject

Required fields: `slug` string, `title` localized-text object, `summary` localized-text object, `status` enum (`planned`, `active`, `complete`), `topicIds` array, `reviewOrder` array of Topic IDs, and `fiveMinuteReviewId` nullable ID.

Optional fields: `iconId`, verified `importance`, verified `difficulty`, verified `examFrequency`, and `estimatedStudyMinutes`.

Validation: ID must be `subject:<slug>`. `reviewOrder` may contain only IDs in `topicIds`, with no duplicates. Frequency and importance must be `null` unless supported by verified question analysis. A published or complete Subject requires one non-null `fiveMinuteReviewId`; planned and active unpublished Subjects may use null.

Referential integrity: every `topicId` points to a Topic with the same `subjectId`; `fiveMinuteReviewId` points to the subject's single Five-Minute Review.

## Topic

Required fields: `subjectId`, `slug`, `title`, `summary`, `status`, `lessonIds`, `flashcardIds`, `goldenRuleIds`, `examTrapIds`, `relatedQuestionIds`, and `relatedTopicLinkIds`.

Optional fields: verified `difficulty`, verified `importance`, verified `frequency`, `estimatedReadingMinutes`, `memoryTrickIds`, and `searchAliasIds`.

Validation: ID must include the owning subject slug. Every important topic must have at least one Flashcard before publication. Difficulty is `easy`, `medium`, `hard`, or `unknown`. Frequency is `very-high`, `high`, `medium`, `low`, or `unknown` and cannot be populated without recorded analysis evidence.

Referential integrity: all educational asset references must point to assets whose `subjectId` matches; related topics use Related Topic records.

## Lesson

Required fields: `subjectId`, `topicId`, `title`, `summary`, `estimatedReadingMinutes`, `sections`, `goldenRuleIds`, `examTrapIds`, `flashcardIds`, and `relatedQuestionIds`.

`sections` is an ordered array of objects with `id`, `sectionType`, and localized `content`. Allowed section types are `overview`, `exam-importance`, `key-concepts`, `common-mistakes`, `memory-tricks`, `quick-recap`, and `summary`.

Optional fields: `prerequisiteTopicIds`, `relatedLessonIds`, and `searchAliasIds`.

Validation: reading time is an integer from 1 through 15. A lesson may include a short `quick-recap`, but this section must not be named or typed as a Five-Minute Review. Published lessons require approved related assets and source-backed question links.

Referential integrity: `topicId` belongs to `subjectId`; every related asset resolves and is compatible with the same topic or is explicitly linked.

## Question

Required fields beyond the common envelope:

| Field | Type | Validation |
|---|---|---|
| `year` | integer | Must match the exam-paper Source Record. |
| `paperCode` | non-empty ASCII string | Stable code declared by the paper source inventory. |
| `questionNumber` | positive integer | Unique within `year` and `paperCode`. |
| `subjectId` | Subject ID or null | Null only while classification is unverified. |
| `topicIds` | array of Topic IDs | May be empty only while classification is unverified. |
| `contentStatus` | enum | `verified-text`, `verified-image`, `verified-mixed`, `text-unavailable`, or `unverified`. |
| `responseMode` | enum | Version 1 supports `single-choice`; future modes require a schema and scoring-contract revision. |
| `text` | localized-text object or null | Required for text or mixed questions; null for unavailable or image-only text. |
| `imageAssetIds` | array of repository-relative asset IDs | Required for image or mixed questions. |
| `optionIds` | array of Question Option IDs | At least four for a normal active question; may be empty only when text/options are unavailable. |
| `questionStatus` | enum | `active`, `deleted`, `disputed`, or `incomplete-source`. |
| `officialAnswerIds` | array of Official Answer IDs | May be empty only when no verified official key exists. |
| `officialCorrectionIds` | array of Official Correction IDs | Ordered by effective precedence after validation. |
| `explanationStatus` | enum | `missing`, `draft`, `educationally-approved`, or `published`. |
| `explanationId` | Explanation ID or null | Required when explanation status is not `missing`. |

Optional fields: `subtopicIds`, `patternClusterIds`, `estimatedSolveSeconds`, `difficulty`, `trapIds`, `relatedQuestionLinkIds`, and `searchAliasIds`.

Validation:

- Text questions require non-empty `text` and at least four options.
- Image questions require at least one local image asset and may have null text.
- Mixed questions require both text and at least one image asset.
- `text-unavailable` and `unverified` questions may preserve metadata without fabricating question text or options.
- Deleted questions remain immutable source records but are excluded from scoring.
- Multiple accepted answers are represented by the effective Official Answer's `acceptedOptionIds` array.
- Published active questions require a verified paper source and a verified effective Official Answer.
- `sourcePage` and `sourceUrl` follow the common provenance envelope and must identify the paper location when known.
- Official corrections are separate records and are never merged destructively into the original answer.

Referential integrity: options belong to this question; official answers and corrections target this question; topics belong to the declared subject; all image assets resolve locally before offline publication.

## Question Option

Required fields: `questionId`, `optionKey`, `order`, `text`, and `imageAssetIds`.

Optional fields: `accessibilityText` and `sourceLabel`.

Validation: `optionKey` is stable within the question and must not depend solely on display order. `order` is a unique positive integer within the question. At least one of `text` or `imageAssetIds` must contain content unless the parent question is `incomplete-source`. Options never store correctness.

Referential integrity: ID begins with the parent Question ID; parent `optionIds` contains this ID.

## Official Answer

Required fields: `questionId`, `answerKeySourceId`, `acceptedOptionIds`, `answerStatus`, and `effectiveDate`.

`answerStatus` is `verified`, `disputed`, `withdrawn`, or `unknown`. Optional fields are `officialNote` and `supersededByCorrectionId`.

Validation: active verified answers contain one or more unique accepted option IDs. `unknown` answers contain no accepted options. Every accepted option belongs to the target question. At most one active Official Answer revision exists per `(questionId, answerKeySourceId)`. Correctness is not inferred from generated explanations.

Referential integrity: `answerKeySourceId` is an answer-key Source Record; correction references resolve when present.

## Official Correction

Required fields: `questionId`, `correctionSourceId`, `publishedAt`, `sequence`, `correctionType`, and `result`.

`correctionType` is `answer-change`, `multiple-accepted`, `question-deleted`, `question-text`, or `other`. `result` contains `acceptedOptionIds`, `questionStatus`, and `officialNote`, with fields applicable to the correction type.

Optional fields: `supersedesCorrectionId` and `effectiveDate`.

Validation: only verified official-correction sources can produce effective corrections. The precedence timestamp is `effectiveDate` when present, otherwise `publishedAt`; corrections order by precedence timestamp and then sequence. `sequence` must be unique for `(questionId, precedenceTimestamp)`, and a complete precedence tie is rejected. The latest verified correction overrides the original key for the fields it changes.

Referential integrity: all target questions, options, sources, and superseded corrections resolve.

## Explanation

Required fields: `questionId`, `locale`, `status`, `correctReason`, `wrongOptionAnalysisIds`, `examTrap`, `twentySecondStrategy`, and `memoryTrick`.

Optional fields: `relatedLessonIds`, `relatedFlashcardIds`, `relatedQuestionLinkIds`, and `reviewNotes`.

Validation: status is `draft`, `educationally-approved`, or `published`. Publication requires approval by the Exam Editor and resolution of every available non-accepted option through Wrong-Option Analysis. An explanation cannot alter the official answer.

## Wrong-Option Analysis

Required fields: `questionId`, `optionId`, `looksAttractiveBecause`, `failsBecause`, `misconception`, and `avoidanceRule`.

Optional fields: `examTrapId` and `relatedQuestionLinkIds`.

Validation: the option must not be accepted by the effective Official Answer. Content must be educationally approved before publication.

## Pattern Cluster

Required fields: `subjectId`, `title`, `description`, `questionIds`, `topicIds`, `patternType`, and `analysisEvidence`.

`patternType` is `concept`, `trap`, `formula`, `reasoning`, or `mixed`. `analysisEvidence` records the analyzed source years and calculation method.

Optional fields: `frequencyLevel`, `goldenRuleIds`, and `examTrapIds`.

Validation: at least two verified questions are required for a repeated cluster. Frequency remains `unknown` when coverage is incomplete or calculation cannot be verified.

## Golden Rule

Required fields: `subjectId`, `topicIds`, `statement`, `patternClusterIds`, `aggregationStatus`, and `aggregatedRuleIds`.

Optional fields: `relatedQuestionIds` and `searchAliasIds`.

Validation: `aggregationStatus` is `topic` or `subject-aggregate`. A topic rule has a concise non-empty source-backed `statement` and an empty `aggregatedRuleIds` array. A subject aggregate has a null `statement` and one or more `aggregatedRuleIds` pointing to approved topic rules, preventing duplicate claims. No unsupported frequency is allowed.

## Flashcard

Required fields: `subjectId`, `topicIds`, `category`, `front`, `back`, `importance`, and `relatedQuestionIds`.

Optional fields: `difficulty`, `goldenRuleIds`, and `searchAliasIds`.

Validation: one concept, one answer, and at most three rendered lines per side at the reference typography. Category is `definition`, `difference`, `formula`, `shortcut`, `trap`, `comparison`, `memory-trick`, or `fact`. `importance` is `critical`, `high`, `medium`, `low`, or `unknown` and requires verified analysis when not unknown. Difficulty is `easy`, `medium`, `hard`, or `unknown`. User review data is prohibited in this record.

## Exam Trap

Required fields: `subjectId`, `topicIds`, `title`, `trap`, `wrongThinking`, `correctThinking`, `shortcut`, and `relatedQuestionIds`.

Optional fields: `trapType`, `patternClusterIds`, and verified `frequencyLevel`.

Validation: trap type uses the canonical analysis taxonomy. Publication requires at least one verified related question when available; frequency is `unknown` without complete evidence.

## Five-Minute Review

Required fields: `subjectId`, `title`, `items`, and `assetReferences`.

Each item has `id`, concise localized `text`, `sourceIds`, and related asset IDs. Optional fields are `estimatedReviewSeconds` and `searchAliasIds`.

Validation: exactly one canonical Five-Minute Review per subject, designed for one-screen review at the reference desktop layout. It contains facts and recognition rules, not explanatory paragraphs. Lessons may link to it but do not own separate Five-Minute Reviews.

## Crash Course

Required fields: `subjectId`, `title`, `estimatedMinutes`, `sectionReferences`, and `quickQuizQuestionIds`.

Optional fields: `topicIds`, `goldenRuleIds`, `examTrapIds`, `flashcardIds`, and `fiveMinuteReviewId`.

Validation: estimated duration is at most 10 minutes. Sections reference approved assets instead of duplicating them. Quick quizzes may use only verified questions.

## Cheat Sheet

Required fields: `subjectId`, `title`, `items`, and `assetReferences`.

Optional fields: `searchAliasIds` and `printLayoutVersion`.

Validation: exactly one canonical Cheat Sheet per subject, no more than 50 concise bullets, no paragraphs, and only source-backed high-value information.

## Search Alias

Required fields: `locale`, `alias`, `normalizedAlias`, and `targetEntityIds`.

Optional field: `aliasType`.

Validation: locale is a supported BCP 47 tag. Normalized value must equal the output of `core/search/SEARCH_SPEC.md`. Alias type is `synonym`, `abbreviation`, `transliteration`, `alternate-spelling`, or `exam-term`. `targetEntityIds` is a non-empty, unique, stable-ID-sorted array. Exactly one published Search Alias record may exist for a locale and normalized alias; all ambiguous targets are consolidated in that record and no primary target is implied.

## Related Topic

Required fields: `fromTopicId`, `toTopicId`, `relationType`, `direction`, and `evidenceQuestionIds`.

Optional fields: `description`.

Validation: relation type is `prerequisite`, `similar`, `contrasts-with`, `used-by`, or `exam-linked`; direction is `directed` or `bidirectional`. Self-links and duplicate equivalent links are rejected.

## Related Question

Required fields: `fromQuestionId`, `toQuestionId`, `relationTypes`, and `evidence`.

Optional fields: `patternClusterIds` and `reviewNotes`.

Validation: relation types are one or more of `same-topic`, `same-pattern`, `same-trap`, `same-formula`, `same-reasoning`, or `same-shortcut`. Self-links and duplicate equivalent links are rejected. Both questions must be source-backed records.

## Localized Text Type

A localized-text object has:

- Required `en`: string or null.
- Optional `fa`: string or null.
- Required `primaryLocale`: `en` or `fa`.
- Required `translationStatus`: `not-requested`, `missing`, `draft`, `verified`, or `not-applicable`.

At least the primary locale must contain non-empty text unless the containing record explicitly permits unavailable text. Persian translation is optional and never replaces the primary source text.

## Dataset-Level Validation

- Validate all common and entity-specific fields before registration.
- Reject duplicate active stable IDs, duplicate `(id, version)` pairs, and duplicate `recordKey` values across every dataset.
- Reject unsupported schema versions.
- Reject dangling references and incompatible parent-child ownership.
- Reject official answers without verified answer-key provenance.
- Reject effective corrections without verified correction provenance.
- Reject local source claims without matching filename and SHA-256 checksum.
- Reject published Pattern Clusters or Educational Assets whose `educationalApproval.status` is not `approved`, whose reviewer role is not `exam-editor`, or whose approval record is incomplete.
- Produce a deterministic validation report listing errors by record ID and field path.
- Never repair source facts automatically. Invalid records remain unpublished until corrected and reviewed.
