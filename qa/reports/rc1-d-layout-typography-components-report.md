# RC1-D Layout, Typography, and Shared Components Report

Date: 2026-07-15

## Typography Changes

- Added --font-size-caption (12px), --font-size-body (17px), --font-size-section (22px), --font-size-hero (clamp 32-56px), --font-size-player (clamp 28-48px), --font-size-counter (clamp 24-32px)
- Body text minimum raised from 15px to 16px (--font-size-base)
- Reading line height set to 2.0 (--line-height-reading)
- Hero heading uses --font-size-hero token
- Study-player content uses --font-size-player token
- Progress counters use --font-size-counter with tabular-nums

## Components Consolidated

- Merged .hero-card, .focus-card, .study-stage into shared .surface-hero pattern (old names retained as aliases for backward compatibility)
- Merged .command-card, .path-card into shared .action-card pattern with hover state
- Merged .command-grid, .path-grid into shared .action-grid pattern
- pathCard() now uses semantic `<a class="action-card">` without nested button span
- Added .lesson-controls sticky bar, .trap-section labeled blocks, .progress-bar-inline/fill, .study-player-counter

## Dashboard Improvements

- Subject progress now uses inline progress bars instead of raw text strings
- One dominant primary CTA confirmed
- Compact secondary links row

## Subject and Lesson Changes

- Lesson reader width limited to 42rem (--reading-width)
- Lesson reader shows "درس X از Y" progress count
- Lesson controls are now in a sticky .lesson-controls bar
- Empty exam-memory sections (no twentySecondStrategy and no developerAnalogy) are hidden
- Lesson title shows estimated reading time and topic name
- Lesson controls use "درس قبلی / تکمیل درس / درس بعدی" labels

## Flashcard/Golden Rule/Trap Changes

- All three study-players now show prominent study-player-counter (X / Y)
- Flashcard actions reordered: نمایش → بعدی → سخت → مرور شد → نشان‌کردن
- Flashcard difficult and reviewed actions now give toast feedback
- Golden Rule "مرور شد" now gives toast feedback
- Exam Traps now use structured .trap-section blocks with labeled headers (اشتباه رایج, فکر درست, ترفند حفظی) and colored left borders

## Last Night Changes

- Rapid-review player shows prominent progress counter

## Responsive Result

- No horizontal overflow at any tested width
- Mobile nav uses 5-column grid
- Lesson controls wrap on mobile
- Subject cards stack at mobile width

## Safari Test Result

PASS 196/196 W3440 B209.0 S1.00

## Issues Deferred

- RC1-E: Exam workspace sticky header, mobile tabs, timer prominence, persistent submit
- RC1-F: Low-severity polish, remaining empty-state copy, responsive edge cases