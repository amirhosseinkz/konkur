# RC2.1 Release Blockers Report

Date: 2026-07-15

Fixed issues:
- RC2-001 timer lifecycle: one active timer, updates every second, survives refresh, stops after submit/route abandonment.
- RC2-002 exam mark-for-review: session-scoped mark/remove, persisted after refresh, palette indicator added.
- RC2-003 exact question routing: bookmarks, search, and review rows use canonical custom question routes.
- RC2-004 practice submission confirmation: answered, blank, and marked counts with Continue/Submit actions.
- RC2-005 route focus restoration: headings become focusable; main content fallback added.
- RC2-006 ARIA labels: custom range inputs use `aria-label`; modified controls verified.
- RC2-007 timer display: `HH:MM:SS`, tabular digits, non-flashing warning/critical styles.
- RC2-009 Last Night random review: random rule, flashcard, and trap navigate directly to review content.

Tests added:
- `qa/tests/rc2-1-release-blockers.spec.js`
- Covers timer update/restore/stop, mark persistence, palette marker, exact routes, practice confirmation, focus, ARIA labels, timer format, and Last Night navigation.

Safari result:
- PASS 4/4 using Playwright WebKit after installing WebKit runtime.

Manual verification:
- PASS: 30-second timer changed `01:29:59` to `01:29:29`.
- PASS: refresh restored timer and continued `01:29:29` to `01:29:27`.
- PASS: bookmark opened `#/exams/1404/practice/custom?start=1&end=1`.
- PASS: Last Night random trap navigated to `#/subjects/english/traps`.

Remaining deferred issues:
- RC2-008 search relevance polish.
- RC2-010 bookmark grouping label polish.
- RC2-011 bookmark feedback polish.
- RC2-012 review-row remediation polish is partially improved only as required by exact-question routing.

Recommendation: READY FOR v1.0
