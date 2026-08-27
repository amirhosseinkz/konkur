# Milestone L Critical Exam Workflow Repair QA Report

Date: 2026-07-15

Status: PASS

## Root Cause

- Exam page links generated query-based hashes such as `#/exams/1404/practice?section=language`, while the router stripped query strings during route matching and did not have canonical section routes.
- The router also lacked `#/exams/{year}` and used the fourth path segment for old result/session formats, conflicting with section-based exam routes.
- After canonical routing was added, the concrete render blocker was `features/exam/exam-viewer.js` calling `app.content.registry.localizedText`, which is not exposed by the source app registry API. That exception prevented the exam workspace from rendering.

## Automated Verification

- Safari direct-file suite: PASS 161/161 W375 B239.0 S1.00.
- Added UI E2E coverage for English Practice, Exam Mode, deleted/multiple-answer scoring, Database Crash Course, and Last Night interaction.
- JavaScript syntax checks passed for changed source and test files.

## Manual Safari Checklist

- Source `#/exams/1404/practice/language`: covered by E2E, workspace opens, answers persist, submit shows in-place review.
- Source `#/exams/1404/exam/language`: Safari direct route opens with title `آزمون`.
- Source `#/exams/1404/practice/quick`: Safari direct route opens with title `تمرین`.
- Source `#/exams/1404/practice/custom?start=1&end=3`: Safari direct route opens with title `تمرین`.
- Source `#/subjects/database`: Safari direct route opens with title `پایگاه داده`; E2E verifies Crash Course lesson open, complete, and next lesson.
- Source `#/last-night`: Safari direct route opens with title `مرور شب آخر`; E2E verifies rapid review controls.
- Release `release/konkur-exam-companion/index.html#/exams/1404/practice/language`: Safari direct route opens with title `تمرین`.

## Release

- Rebuilt `release/konkur-exam-companion/`.
- Rebuilt `release/konkur-exam-companion.zip`.
- Verified release copy contains Milestone L route/workspace code.

## Findings

- Critical: 0
- High: 0

## Remaining Usability Issues

- Safari automation cannot inspect page DOM because `Allow JavaScript from Apple Events` is disabled; DOM-level acceptance is covered by the direct-file browser suite instead.
