# RC2 Final Product QA Report

Date: 2026-07-15

Scope: Real product QA pass for Version 1.0 release readiness. No feature work, architecture changes, dataset expansion, AI, OCR, cloud sync, authentication, or product code fixes were performed.

Test method: Served `release/konkur-exam-companion` locally, reset `localStorage`, exercised dashboard, study, English, practice, exam, search, bookmarks, review queue, Last Night, settings, 320px/375px mobile widths, desktop layouts, keyboard/focus behavior, and runtime checks for timer/session behavior.

## Issue Inventory

### RC2-001

Severity: High

Area: Exam Mode / Timer

Reproduction steps:
1. Reset localStorage.
2. Open `#/exams/1404/exam/language`.
3. Start the exam.
4. Observe the timer for more than two seconds.

Expected behavior: The timer visibly counts down every second and continues after route restore/refresh.

Actual behavior: The timer remains frozen. Runtime check showed `first: 89:59`, `second: 89:59`, `changed: false` after waiting.

Suggested fix: Do not clear the interval immediately after `rerender()` returns. Keep one active interval for the mounted exam workspace and clean it up only on route/session replacement.

Files likely affected: `release/konkur-exam-companion/features/exam/exam-mode.js`, `release/konkur-exam-companion/features/exam/exam-viewer.js`

### RC2-002

Severity: High

Area: Exam Mode / Mark For Review

Reproduction steps:
1. Open `#/exams/1404/exam/language`.
2. Start the exam.
3. Try to mark a question for review or bookmark it during the timed exam.
4. Inspect the question palette.

Expected behavior: Exam mode supports a clear mark-for-review action and palette state.

Actual behavior: Exam mode only has answer clearing and final submit actions. There is no visible mark-for-review/bookmark control in the timed workspace.

Suggested fix: Add a minimal mark-for-review/bookmark control to the active exam workspace and represent it in the palette without changing exam scoring.

Files likely affected: `release/konkur-exam-companion/features/exam/exam-mode.js`, `release/konkur-exam-companion/features/exam/session-manager.js`

### RC2-003

Severity: High

Area: Bookmarks / Search / Question Navigation

Reproduction steps:
1. Bookmark a question from practice mode or open a question search result.
2. Go to Bookmarks or Search.
3. Open the saved question/result.

Expected behavior: The app opens the exact question or exact single-question practice range.

Actual behavior: Question route generation returns `#/exams/{year}/practice?start={n}&end={n}`. The custom route segment is missing, so the student lands in full practice instead of the bookmarked/search result question.

Suggested fix: Generate question routes through `routeForCustom(year, "practice", questionNumber, questionNumber)` or include `/custom` before the query string.

Files likely affected: `release/konkur-exam-companion/features/learning/learning-engine.js`, `release/konkur-exam-companion/features/exam/exam-service.js`, `release/konkur-exam-companion/core/router/routes.js`

### RC2-004

Severity: Medium

Area: Practice Mode / Submission

Reproduction steps:
1. Open `#/exams/1404/practice/language`.
2. Answer, leave blank, or bookmark several questions.
3. Click `ثبت و مشاهده نتایج`.

Expected behavior: Before ending the attempt, the app confirms the answered/blank count or gives a clear finalization moment.

Actual behavior: Practice submits immediately. This is inconsistent with the safer Exam Mode confirmation and can accidentally end a practice session.

Suggested fix: Add a lightweight confirmation mirroring Exam Mode counts, without changing scoring or workflow.

Files likely affected: `release/konkur-exam-companion/features/exam/practice-mode.js`

### RC2-005

Severity: Medium

Area: Accessibility / Focus Management

Reproduction steps:
1. Navigate by keyboard or script from Dashboard to Subjects.
2. Inspect the active element after route render.

Expected behavior: Focus moves to the new page heading or main content after route changes.

Actual behavior: On custom hero pages such as Subjects, active focus remains on `BODY` because `focusHeading()` targets `h1`, but those custom `h1` elements do not have `tabindex="-1"`.

Suggested fix: Ensure all route-level `h1` elements are programmatically focusable, or focus `#main-content` as a consistent fallback.

Files likely affected: `release/konkur-exam-companion/core/ui/shell.js`, `release/konkur-exam-companion/features/dashboard/dashboard-page.js`, `release/konkur-exam-companion/features/subjects/subjects-page.js`, `release/konkur-exam-companion/features/last-night/last-night-page.js`

### RC2-006

Severity: Medium

Area: Accessibility / Custom Exam Range

Reproduction steps:
1. Open `#/exams/1404`.
2. Expand `بازه دلخواه سؤال‌ها`.
3. Inspect the two number inputs with assistive technology or DOM attributes.

Expected behavior: The start and end range inputs have accessible names.

Actual behavior: Inputs use `ariaLabel` instead of `aria-label`, so the intended label is not exposed as an ARIA name.

Suggested fix: Replace `ariaLabel` attributes with `aria-label`, or add visible labels associated by `for`/`id`.

Files likely affected: `release/konkur-exam-companion/features/exam/exams-page.js`

### RC2-007

Severity: Medium

Area: Exam Mode / Timer Presentation

Reproduction steps:
1. Start a 90-minute exam.
2. Read the timer display.

Expected behavior: Long exam sessions use an unambiguous hour format such as `01:30:00`, matching the RC1-E release expectation.

Actual behavior: The timer displays values such as `89:59`, which reads like minutes-only and is less clear under exam pressure.

Suggested fix: Format durations of one hour or more as `HH:MM:SS` and shorter durations as `MM:SS`.

Files likely affected: `release/konkur-exam-companion/features/exam/exam-viewer.js`, `release/konkur-exam-companion/features/exam/exam-mode.js`

### RC2-008

Severity: Medium

Area: Search / Result Relevance

Reproduction steps:
1. Open Search.
2. Search `قانون`.
3. Try to find Golden Rules from the result set.

Expected behavior: Golden Rules are easy to identify and open when searching for Golden Rules language.

Actual behavior: The first visible group is `فلش‌کارت‌ها (100)` because many flashcards contain `قانون طلایی`, pushing the actual Golden Rules category down and making the result feel noisy.

Suggested fix: Preserve grouped results but prioritize exact entity-type/category matches for Golden Rules, or add type filters/chips within the existing search page.

Files likely affected: `release/konkur-exam-companion/features/search/search-page.js`, `release/konkur-exam-companion/core/search/search-index.js`

### RC2-009

Severity: Medium

Area: Last Night / Random Review

Reproduction steps:
1. Open Last Night.
2. Expand a subject.
3. Click `قانون طلایی تصادفی` or `فلش‌کارت سخت تصادفی`.

Expected behavior: Random review opens the item or moves the review player to the selected item so the student can continue reviewing.

Actual behavior: The app only shows a toast with the title. The student cannot act on the random item from that control.

Suggested fix: Navigate to the item route or update the visible player with the selected item.

Files likely affected: `release/konkur-exam-companion/features/last-night/last-night-page.js`

### RC2-010

Severity: Low

Area: Bookmarks / Grouping Labels

Reproduction steps:
1. Bookmark a lesson and a subject.
2. Open Bookmarks.
3. Open the category selector.

Expected behavior: Each supported asset type has a distinct category label.

Actual behavior: Both `lesson` and `subject` are labeled `درس‌ها`, which makes grouping ambiguous.

Suggested fix: Rename subject grouping to `درس‌ها / موضوع‌ها` or `دسته‌های درسی`, leaving lesson grouping as `درس‌ها`.

Files likely affected: `release/konkur-exam-companion/features/bookmarks/bookmarks-page.js`

### RC2-011

Severity: Low

Area: Bookmark Feedback

Reproduction steps:
1. Bookmark a question in Practice Mode.
2. Bookmark an already-bookmarked learning item.
3. Observe labels and feedback.

Expected behavior: The control confirms saved state and avoids making the student wonder if the action worked.

Actual behavior: Some bookmark actions have no toast or persistent selected state; repeated clicks look identical.

Suggested fix: Add consistent saved-state labels and feedback for bookmark controls.

Files likely affected: `release/konkur-exam-companion/features/subjects/subjects-page.js`, `release/konkur-exam-companion/features/exam/practice-mode.js`

### RC2-012

Severity: Low

Area: Exam Review / Remediation

Reproduction steps:
1. Submit a practice or exam session.
2. Review incorrect/blank rows.
3. Try to jump back to the exact question/PDF page.

Expected behavior: Review rows help the student return to the exact question context.

Actual behavior: Rows show answer status but provide no direct open-question/PDF action.

Suggested fix: Add a low-risk open action per review row using the same exact-question route fix from RC2-003.

Files likely affected: `release/konkur-exam-companion/features/exam/practice-mode.js`, `release/konkur-exam-companion/features/exam/exam-mode.js`

## Product Scorecard

Navigation: 7/10. Main routes are understandable, dashboard entry points are clear, and desktop/sidebar navigation works, but exact question return and focus restoration need fixes.

Exam Experience: 5/10. Layout and restore path are promising, but frozen timer and missing mark-for-review are release-impacting for a real exam workflow.

Study Experience: 8/10. Lessons, completion, Golden Rules, flashcards, and traps are coherent and easy to use, with only minor saved-state friction.

Dashboard: 8/10. A fresh user can understand the next action within 30 seconds. Primary actions are visible and not overloaded.

English Module: 8/10. Vocabulary, grammar/review, flashcards, and previous-exam entry are discoverable and consistent with the rest of the app.

Search: 7/10. Persian, English, protocol, vocabulary, lessons, and exam terms return results quickly, but result relevance is noisy for Golden Rules and question routes need repair.

Bookmarks: 7/10. Asset grouping exists and navigation mostly works, but question navigation and duplicate labels reduce trust.

Review Queue: 7/10. Queue, completion, removal, and hard-card concepts are present; random/difficult review still feels indirect.

Last Night: 7/10. The 20-item rapid flow is usable, but subject random controls only toast titles instead of opening reviewable content.

Responsiveness: 8/10. 320px and 375px checks showed no horizontal scrolling and touch targets were acceptable on sampled routes.

Accessibility: 6/10. Visible focus styles and skip link exist, but route focus fails on custom pages and custom range inputs lack accessible names.

Visual Consistency: 8/10. Cards, buttons, panels, and study players are consistent across the release.

Overall Polish: 7/10. The product feels close, but exam-specific issues prevent calling it fully release-ready.

Product score: 7.1/10

## Final Verdict

READY AFTER MINOR FIXES

Reason: The product is feature-complete and the main study flows are usable, but Version 1.0 should not ship with a frozen exam timer, missing mark-for-review in timed exams, broken exact-question navigation, and known accessibility defects.

## Next Step

Generate RC2.1 with only the documented fixes in this report.

## Summary Counts

Total issues: 12

Critical: 0

High: 3

Medium: 6

Low: 3
