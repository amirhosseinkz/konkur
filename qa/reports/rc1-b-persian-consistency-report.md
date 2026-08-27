# RC1-B Persian UI Consistency Report

Date: 2026-07-15

## Files Modified

- features/bookmarks/bookmarks-page.js — Persian tabs/sort/search labels, Persian timestamp formatting, empty-state CTAs
- features/review/review-page.js — Persian action buttons, human-readable item descriptions, empty-state CTAs
- features/search/search-page.js — Persian group labels, canonical exam route, result count per group
- features/statistics/statistics-page.js — Persian stat labels
- features/settings/settings-page.js — Persian confirmations, notifications, section headings
- features/flashcards/flashcards-page.js — replaced dead-end with CTA to #/subjects
- tests/unit/rc1-b-persian-consistency.test.js — 7 new focused tests
- tests/unit/milestone-i-learning-engine.test.js — updated search assertion for Persian labels
- tests/unit/milestone-n-english-module.test.js — added review reset guard
- tests/browser/test-runner.html — localStorage.clear() on load, cache key bumps
- tests/browser/run-tests.js — test count updated to 176

## Labels Translated

- Bookmarks: Lessons, Golden Rules, Flashcards, Exam Traps, Topics, Subjects, Questions, Newest, Oldest, Subject, Alphabetical, Search bookmarks
- Review Queue: Mark reviewed, Complete, Remove, Open, Random difficult review, priority/reason enums
- Search: Exam Years, Topic, Lesson, Golden Rules, Flashcards, Exam Traps, Five-Minute Review, Subject
- Statistics: Lessons completed, Flashcards reviewed, Bookmarks, Review Queue size, Recently Viewed, Current session minutes
- Settings: all confirm() and announce() messages, section headings (منطقه خطر, پشتیبان‌گیری)

## Empty States Fixed

- Bookmarks: CTA per type (رفتن به درس‌ها / مرور فلش‌کارت‌ها / رفتن به آزمون‌ها)
- Review Queue: CTAs (رفتن به درس‌ها, مرور فلش‌کارت‌ها, مرور تصادفی موارد سخت)
- Flashcards: CTA (رفتن به درس‌ها, مرور فلش‌کارت‌های سخت when applicable)

## Route Fix

- Search exam-year results now use `examService.routeForYear(year)` instead of stale `#/exams/{year}/practice`

## Safari Test Result

PASS 176/176 W3440 B212.0 S1.00

## Remaining UX Issues (Deferred)

- RC1-C: Navigation, page hierarchy, mobile nav expansion
- RC1-D: Dashboard dominant hero, lesson reader progress, CSS component merge
- RC1-E: Exam workspace sticky header, mobile tabs, timer prominence
- RC1-F: Low-severity polish items from audit