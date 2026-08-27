# Official Source Manifest

Status: Pending Acquisition

Manifest Schema Version: 1

This document is the human-readable inventory for examination papers, official answer keys, official corrections, and verified supporting sources. It does not claim possession of any artifact that is not present in the repository.

## Current Repository Inventory

No official exam paper, answer key, correction, or source archive is currently stored in this repository.

| Exam year | Paper | Answer key | Corrections | Verification | Local coverage |
|---:|---|---|---|---|---|
| 1395 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1396 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1397 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1398 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1399 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1400 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1401 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1402 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1403 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |
| 1404 | Pending acquisition | Pending acquisition | Unknown | Unverified | None |

An `Unknown` correction status means no verified correction inventory has been performed. It does not mean that no correction exists.

## Required Manifest Fields

Each source artifact must record:

| Field | Type | Requirement |
|---|---|---|
| `id` | stable Source Record ID | Required logical identity; shared only by revisions of that source record. |
| `recordKey` | string | Required globally unique `<id>@<version>` revision key. |
| `schemaVersion` | positive integer | Required; initial value `1`. |
| `version` | positive integer | Required; starts at `1` and increments for non-destructive revisions. |
| `year` | Solar Hijri integer or null | Required for exam artifacts; must be null for non-exam supporting references. |
| `sourceType` | enum | `exam-paper`, `answer-key`, `official-correction`, or `verified-reference`. |
| `title` | non-empty string | Required; copied from the source without invented claims. |
| `paperSourceId` | Source Record ID or null | Required for keys and corrections targeting a paper. |
| `answerKeySourceId` | Source Record ID or null | Required when a correction targets an answer key. |
| `correctionSourceIds` | array of Source Record IDs | Empty until verified corrections are acquired. |
| `publisher` | string | Required; copied from the source. |
| `retrievalDate` | ISO date or null | Null while acquisition and URL verification are pending. |
| `localFilename` | repository-relative string or null | Null until the file is physically present. |
| `originalUrl` | HTTPS URL or null | Null only when no verified original URL is known. |
| `checksum` | string or null | `sha256:<64 lowercase hex characters>` when `localFilename` is present. |
| `verificationStatus` | enum | `pending-acquisition`, `acquired-unverified`, `partially-verified`, `verified`, `disputed`, or `unavailable`. |
| `verificationNotes` | string or null | Required for partial, disputed, or unavailable records. |
| `licenseOrRedistributionNote` | string | Required even when rights are unknown. |
| `questionNumberCoverage` | array of positive integers | Questions verified in this artifact. |
| `knownInconsistencies` | array of inconsistency records | Empty only after review finds none or before review begins with `pending-acquisition` or `acquired-unverified` status. |
| `createdAt` | ISO UTC timestamp | Required. |
| `updatedAt` | ISO UTC timestamp | Required and not earlier than `createdAt`. |

Each inconsistency record contains `questionNumber`, `field`, `description`, `status`, `relatedSourceIds`, and optional `resolution`.

## Future Machine-Readable Shape

The future dataset file will register a manifest object with this shape:

```text
{
  schemaVersion: 1,
  generatedAt: <ISO UTC timestamp>,
  records: [
    {
      id,
      recordKey,
      schemaVersion,
      version,
      year,
      sourceType,
      title,
      paperSourceId,
      answerKeySourceId,
      correctionSourceIds,
      publisher,
      retrievalDate,
      localFilename,
      originalUrl,
      checksum,
      verificationStatus,
      verificationNotes,
      licenseOrRedistributionNote,
      questionNumberCoverage,
      knownInconsistencies,
      createdAt,
      updatedAt
    }
  ]
}
```

The actual runtime artifact will be a classic JavaScript dataset-registration file under `content/sources`, not runtime-fetched JSON, in accordance with ADR-0021.

## Acquisition Workflow

1. Identify the publisher's original paper or key URL.
2. Record the URL without claiming local acquisition.
3. Review license and redistribution conditions.
4. Acquire the artifact only when permitted.
5. Store it under the future source archive using a deterministic filename.
6. Calculate its SHA-256 checksum.
7. Verify year, publisher, paper identity, pages, and question-number coverage.
8. Link the answer key and any official corrections to the paper.
9. Record inconsistencies without resolving them from general knowledge.
10. Change status to `verified` only after independent source review.

## Verification Rules

- A URL alone is not a locally acquired source.
- A local filename without a matching checksum is not a verified source.
- Third-party reproductions cannot silently replace official sources.
- Generated answers are never stored as Official Answers.
- The latest verified official correction takes precedence according to `features/exam/EXAM_RULES.md`.
- Missing files, missing pages, uncertain numbering, and conflicting keys are explicit manifest conditions.
- Educational content generation remains blocked for a subject until the relevant paper and official-answer coverage is sufficient and verified.
