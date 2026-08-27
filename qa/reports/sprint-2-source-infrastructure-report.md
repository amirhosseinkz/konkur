# Sprint 2 Source Infrastructure QA Report

Date: 2026-07-14

Tester: OpenCode

Application revision: unversioned workspace snapshot (workspace is not a Git repository)

Dataset manifest: source inventory 1395–1404, all placeholder records with `pending-acquisition` status; no production educational content

## Decision

Status: PASS — SPRINT 2 ACCEPTED

The Sprint 2 source and dataset infrastructure is implemented with no known Critical or High defect. All automated tests pass in Chrome, Safari, and Firefox. The source registry, inventory, validation, checksum tooling, acquisition workflow, exam validators, correction precedence, and source-status UI are all functional. No fabricated educational content exists.

## Environment

- macOS 26.5.2 (25F84)
- Apple M3 Pro, 18 GB memory
- Safari 26.5.2
- Google Chrome 150.0.7871.114
- Firefox 127.0.2
- Microsoft Edge: not installed
- Runtime: direct `file://`; network and server are not required

## Automated Evidence

### Browser Test Suite Results

| Browser | Version | Result | Window Width | Bootstrap ms | Search P95 ms |
|---|---|---|---:|---:|---:|
| Chrome | 150.0.7871.114 | PASS 68/68 | 768 | 9.5 | 0.10 |
| Safari | 26.5.2 | PASS 68/68 | 336 | 2.0 | 0.00 |
| Firefox | 127.0.2 | PASS 68/68 | 1253 | 318.0 | 0.00 |
| Edge | not installed | not tested | — | — | — |

### Static Checks

- All application and test JavaScript passed `node --check`.
- Python checksum tool passed syntax check and execution test.
- Static scan found no `TODO`, `FIXME`, Lorem Ipsum, dummy-data marker, `fetch`, dynamic import, module script, service worker, or remote HTTP dependency in JavaScript, HTML, or CSS.
- Only `core/storage/storage-adapter.js` accesses `localStorage`.
- No production fixture leakage: `index.html` does not load test fixture files.

### Test Coverage

Sprint 1 tests (48):
- Bootstrap, routing, direct hash entry, history, route focus, responsive overflow, storage, migration/recovery, strict validation, registry isolation, normalization, and fixture search.

Sprint 2 tests (20):
- Source record validation: valid source, invalid year, missing provenance, duplicate source ID, checksum format, verification status transitions
- Source inventory: 1395–1404 registration, 10-year coverage, all pending-acquisition, no local files
- Source registry: invalid dataset type rejection, registration success
- Exam validators: valid question, multiple accepted answers, deleted question status
- Correction precedence: latest verified correction wins, conflicting corrections resolved, unresolved answer, conflicting verified answers, question-deleted correction
- Registration order independence: answers before questions

## Functional Review

- Source registry (`content/sources/source-registry.js`) registers and validates source records
- Source inventory (`content/sources/source-inventory.js`) creates 1395–1404 placeholder records with `pending-acquisition` status
- Source validation (`content/sources/source-validation.js`) enforces strict field, checksum, URL, date, year range, provenance, and status rules
- Exam validators (`core/validation/exam-validators.js`) validate question, option, answer, and correction details
- Correction precedence (`features/exam/answer-resolver.js`) implements latest-correction-wins, conflict detection, deleted-question, and unresolved statuses
- Source-status UI (`#/settings/sources`) displays honest inventory table with all years pending
- Checksum tooling (`tools/source-checksum.py` and `tools/source-checksum.html`) calculates SHA-256 without modifying files
- Source acquisition workflow document defines 12-step process with rejection conditions
- Naming conventions document defines deterministic filenames and replacement policies
- Source directories (`sources/papers/`, `sources/answer-keys/`, `sources/corrections/`) with README
- Fixture policy document enforces synthetic IDs, test-only labeling, and production isolation
- Production `index.html` loads successfully through `file://` and source-status page renders
- No fabricated question text, answer content, or educational claims

## Responsive Evidence

- Source-status page table uses `overflow-x: auto` for mobile viewport compatibility
- Table cells use `white-space: nowrap` with the notes column allowing wrapping
- Page header, summary badges, and details section reflow correctly at 320px (Chrome)

## Keyboard Accessibility

- Source-status page uses standard semantic HTML elements (`article`, `table`, `details`)
- Table is navigable via keyboard
- Details/summary is a native disclosure widget with keyboard support
- Focus indicators apply via `:focus-visible` CSS

## Storage Impact

- No changes to storage schema or adapter
- Existing 48 Sprint 1 tests still pass without modification
- No storage-breaking changes introduced

## Known Limitations

- Microsoft Edge is not installed
- No actual source files have been acquired or verified
- All 1395–1404 inventory records are `pending-acquisition` with no checksums or local files
- No production exam, question, or answer datasets exist
- Screen reader and 200% zoom checks not performed programmatically (carried from Sprint 1)

## Approval

Sprint 2 is accepted. The source and dataset infrastructure is ready for source acquisition work. No Critical or High findings remain.