# RC1-E Exam Workspace and Study Experience Report

Date: 2026-07-15

## Exam Workspace Improvements

- Sticky header with year, section, answered/remaining, and submit button
- PDF pane is sticky on desktop (stays visible while scrolling)
- Answer pane is sticky on desktop with its own scroll
- Right panel narrowed to 30rem for answer-sheet focus
- Submit button always reachable in sticky header
- Timer always visible in sticky header (exam mode)

## Mobile Improvements

- Tab-based layout: برگه آزمون / پاسخ‌برگ
- Tab switching preserves content; no horizontal scroll
- Sticky header remains visible on mobile
- Submit button in header accessible from both tabs

## Timer Improvements

- HH:MM:SS format for sessions > 1 hour
- MM:SS format for shorter sessions
- data-urgency attribute: normal/warning/critical
- Warning style (yellow) below 10 minutes
- Critical style (red) below 1 minute
- No continuous flashing; static color change only
- tabular-nums for stable width

## Submission Experience

- Confirmation dialog shows answered count, blank count, and irreversibility warning
- After submit, workspace stays in-place (no navigation away)
- Result view shows score, counts, and review filters

## Review Improvements

- Review remains inside the same workspace
- Filter buttons: همه، نادرست، درست، بی‌پاسخ، حذف‌شده، نامشخص
- Changing filters does not reload workspace
- Each review row shows question number, user answer, accepted answer, status badge

## PDF Experience

- PDF pane has its own scroll area on desktop
- Fallback link to open PDF externally remains
- Answer sheet functions independently of PDF state

## Study Player Improvements

- Lesson reader: sticky controls bar, progress count, reading width 42rem, empty sections hidden
- Flashcard: prominent counter, reordered actions, toast feedback
- Golden Rules: prominent counter, reviewed toast feedback
- Exam Traps: structured labeled sections with colored borders
- Last Night: prominent progress counter

## Accessibility Notes

- Sticky controls do not hide focused content
- Tab buttons have data-active state for ARIA
- Timer has aria-live="off" to avoid screen reader spam
- Touch targets maintained at minimum 2.75rem

## Safari Test Result

PASS 206/206 W3440 B209.0 S1.00

## Remaining RC1-F Issues

- Low-severity empty-state copy refinement
- Responsive edge cases at 320px
- Motion polish for flashcard reveal
- Remaining audit Low items