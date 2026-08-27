# RC1-C Information Architecture and Navigation Report

Date: 2026-07-15

## Navigation Changes

- Desktop: 9-item sidebar in approved order (داشبورد، آزمون‌ها، مطالعه، مرور، جست‌وجو، نشان‌شده‌ها، شب آخر، آمار، تنظیمات)
- Mobile: 5-item bottom nav (داشبورد، آزمون‌ها، مطالعه، مرور، جست‌وجو)
- Added شب آخر to sidebar (was missing from primary nav)
- Removed فلش‌کارت‌ها from test-runner sidebar and mobile nav
- Route active state now matches any child route (e.g., /subjects/database highlights مطالعه)

## Dashboard Hierarchy Changes

- Single dominant hero CTA (ادامه مطالعه or شروع مطالعه) with optional ادامه آزمون
- Compact quick-actions row (شروع آزمون، تمرین زبان، شب آخر، مرور تصادفی)
- Subject progress section (text, not cards)
- Recent activity section (compact)
- Secondary links row (نشان‌شده‌ها، جست‌وجو، آمار، صف مرور، تنظیمات)
- Removed 9 equal-weight command cards

## Exams Page Changes

- Year selector (10 compact buttons) replaces 10 dense expanded year cards
- Selected year shows detail with status, full-paper actions, collapsed sections, collapsed custom range, collapsed verification details
- Breadcrumb added (آزمون‌ها / سال XXXX)

## Study/Subject Hierarchy Changes

- Breadcrumbs added (مطالعه / عنوان درس)
- English Previous Exams collapsed in `<details>` (was fully expanded)
- English daily review collapsed in `<details>`
- Lessons remain collapsed in `<details>` (already done in RC1-B)

## Last Night Changes

- Subject packs now use `<details>` elements, collapsed by default
- Previous behavior expanded all packs unless explicitly closed; now collapsed unless explicitly opened
- Removed bookmark list from subject packs (reduces noise)

## Review Page Changes

- Organized into 4 collapsible sections: صف مرور، موارد سخت، نشان‌شده‌ها، فعالیت اخیر
- Queue section open by default; others collapsed

## Dead Destinations Handled

- `#/flashcards` removed from primary navigation in both index.html and test-runner.html
- Route remains for backward compatibility; page now has CTA to #/subjects (from RC1-B)

## Safari Test Result

PASS 187/187 W3440 B210.0 S1.00

## Issues Deferred

- RC1-D: Layout, typography, CSS component consolidation, lesson reader progress
- RC1-E: Exam workspace sticky header, mobile tabs, timer prominence
- RC1-F: Low-severity polish, empty-state copy refinement