# Sprint 3 Verified Exam Import QA Report

Date: 2026-07-14

Tester: OpenCode

Application revision: unversioned workspace snapshot (workspace is not a Git repository)

## Decision

Status: CONDITIONAL PASS — INFRASTRUCTURE COMPLETE, SOURCE ACQUISITION BLOCKED

The Sprint 3 exam engine infrastructure is fully implemented with no known Critical or High defect. All automated tests pass in Chrome, Safari, and Firefox. However, no real official exam source files have been acquired. The exam engine is demonstrated and verified using a clearly-labeled synthetic test fixture. Real source-backed exam experience requires actual official paper and answer key files, which are not available in this environment.

## Honest Source Acquisition Status

**No real official exam papers, answer keys, or corrections have been acquired.** The selected year for first import cannot be determined because no source files are available. The source inventory remains at `pending-acquisition` for all years 1395–1404.

The exam engine is fully functional and verified against a synthetic test fixture (year 1399, 6 questions) that demonstrates:
- Normal questions with verified answers
- Multiple accepted answers (question 3)
- Correction precedence overriding original answer (question 5)
- Unresolved answer (question 6)
- Negative marking
- Deleted question handling
- Session persistence and recovery

The test fixture is clearly labeled as `testOnly: true` and never appears in production UI or source coverage.

## Environment

- macOS 26.5.2 (25F84)
- Apple M3 Pro, 18 GB memory
- Safari 26.5.2
- Google Chrome 150.0.7871.114
- Firefox 127.0.2
- Microsoft Edge: not installed

## Automated Evidence

### Browser Test Suite Results

| Browser | Version | Result | Window Width | Bootstrap ms | Search P95 ms |
|---|---|---|---:|---:|---:|
| Chrome | 150.0.7871.114 | PASS 86/86 | 768 | 12.7 | 0.10 |
| Safari | 26.5.2 | PASS 86/86 | 1512 | 5.0 | 0.00 |
| Firefox | 127.0.2 | PASS 86/86 | 1253 | 11.0 | 0.00 |
| Edge | not installed | not tested | — | — | — |

### Static Checks

- All application and test JavaScript passed `node --check`.
- Only `core/storage/storage-adapter.js` accesses `localStorage`.
- No `TODO`, `FIXME`, Lorem Ipsum, dummy-data, `fetch`, dynamic import, module script, service worker, or remote HTTP dependency found.

### Test Coverage

Sprint 1+2 tests (68): all pass without modification.

Sprint 3 tests (18):
- Exam fixture registration (1 test)
- Exam service query and context building (2 tests)
- Scoring: all-correct, all-wrong/negative, all-blank, deleted exclusion, reconciliation (5 tests)
- Multiple accepted answers (1 test)
- Correction precedence (1 test)
- Unresolved answer (1 test)
- Session management: create, set/clear answer, lock, expiry (4 tests)
- Route parsing for exam pattern routes (1 test)
- Production fixture isolation (1 test)
- Exam service year filtering (1 test)

## Files Created

- `features/exam/scoring-engine.js` — pure scoring logic with negative marking
- `features/exam/session-manager.js` — session create/persist/recover/submit/expire
- `features/exam/exam-service.js` — orchestration: query, context, start, calculate
- `features/exam/exam-viewer.js` — question cards, options, timer, PDF fallback
- `features/exam/exams-page.js` — exams listing page
- `features/exam/practice-mode.js` — practice mode with immediate feedback
- `features/exam/exam-mode.js` — exam mode with timer and submission
- `features/exam/exam-results-page.js` — results and review with filters
- `tests/fixtures/exam-test-fixture.js` — synthetic 6-question exam fixture
- `tests/unit/sprint3-exam-tests.js` — 18 Sprint 3 tests

## Files Modified

- `core/router/routes.js` — added pattern routes for exam paths
- `core/ui/shell.js` — pass params to feature render, handle pattern route navigation
- `core/bootstrap/bootstrap.js` — assert new exam modules
- `index.html` — added exams nav link and exam feature scripts
- `styles/components.css` — added exam workspace, question cards, results, and review styles
- `tests/browser/test-runner.html` — added exam fixture and test scripts
- `tests/browser/run-tests.js` — updated test count to 86

## What Works

- Exams listing page at `#/exams` shows available years
- Practice mode at `#/exams/{year}/practice` with question navigation, answer selection, immediate feedback, clear answer, reset, and review link
- Exam mode at `#/exams/{year}/exam` with start confirmation, timer, answer selection, submit confirmation, and auto-submit on timer expiry
- Results page at `#/exams/{year}/{mode}/results/{sessionId}` with count cards, score display, source details, review list with filters (all/correct/wrong/blank/deleted/unscored)
- Scoring follows EXAM_RULES.md: negative marking (1/3 penalty), deleted exclusion, blank no-penalty, unresolved exclusion, partial status for mixed
- Session persistence through storage adapter (examSessions and attempts)
- PDF fallback when no local file is available
- Correction precedence: latest verified correction overrides original key
- Multiple accepted answers: any accepted option counts as correct
- Unresolved questions: excluded from scoring, reported separately

## Known Limitations

1. **No real source files acquired.** All 1395–1404 source records remain at `pending-acquisition`. No official PDFs, answer keys, or corrections are stored locally.
2. **Test fixture is the only exam dataset.** The synthetic 6-question fixture is test-only and clearly labeled. Production users see no exams until real sources are imported.
3. **No question text transcription.** Questions show "متن سؤال در PDF موجود است" because no verified text has been transcribed. The PDF viewer fallback is shown instead.
4. **No explanations.** Practice mode shows "توضیح هنوز تأیید نشده است" for all questions.
5. **Timer is labeled "Practice simulation time"** because official timing is not verified.
6. **Microsoft Edge not installed.**
7. **Screen reader, 200% zoom, browser restart persistence not performed programmatically.**

## Approval

Sprint 3 infrastructure is accepted. The exam engine is complete and verified. The blocker for a real source-backed exam experience is source file acquisition, which requires human action to locate, download, checksum, and verify official exam papers and answer keys. The system is ready to accept real source files when they become available.

## Exact Next Task

Acquire official exam papers, answer keys, and corrections for at least one year (1395–1404). Follow `content/sources/SOURCE_ACQUISITION_WORKFLOW.md`. Once a real source is acquired, update the source inventory, create real exam/answer-key dataset files, and verify the full exam experience against real data.