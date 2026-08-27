# RC1 Full UX/UI Audit — Release Candidate 1A

Date: 2026-07-15

Method: Manual product usage in Safari across 5 defined workflows, complete source review of all route, page, component, and style files.

---

## A. Executive Summary

The application is functionally feature-rich with working exam engine, five subjects, flashcards, search, bookmarks, and progress. However, the experience still feels like a technical content viewer rather than a polished study product.

Five systemic problems dominate:

1. **No single primary action per page** — Dashboard shows 9 equal-weight cards; Subject pages show 4 path cards with no dominant entry; Exams page shows all 10 years as equal cards with no guidance.
2. **Mixed English and Persian UI labels** — Bookmarks tabs/sort labels, Review Queue action buttons, Search group labels, Statistics labels, and Settings revert confirmations remain in English despite a Persian-first mandate.
3. **Exam workspace lacks professional CBT structure** — No sticky header, timer is small and non-prominent, answer pane scrolls independently of PDF without a sticky footer, and mobile lacks tab separation.
4. **Lesson reader and study players lack reading comfort** — Lesson reader has no progress indicator, no sticky prev/next, and content width is too wide; flashcard and rule players show no progress count prominently.
5. **Empty states lack actionable CTAs** — Bookmarks, Review Queue, and Flashcards empty states either have no CTA or explain nothing about how to use the feature.

---

## B. Top 20 Issues

| # | ID | Page/Workflow | Severity | Problem | User Impact | Effort |
|---|---|---|---|---|---|---|
| 1 | RC1-001 | Dashboard | High | Nine equal-weight command cards compete for attention with no dominant action | User cannot identify what to do next within 2 seconds | M |
| 2 | RC1-002 | Navigation | High | Bookmarks tabs, sort, search labels still in English ("Lessons", "Golden Rules", "Newest", "Search bookmarks") | Mixed-language UI breaks Persian-first expectation and feels unfinished | S |
| 3 | RC1-003 | Review Queue | High | Action buttons "Mark reviewed", "Complete", "Remove", "Random difficult review" are in English | Persian UI contract violated; user hesitates on foreign labels | S |
| 4 | RC1-004 | Search | High | Group labels ("Exam Years", "Topic", "Lesson", "Golden Rules", etc.) are in English | Persian-first contract violated in primary navigation surface | S |
| 5 | RC1-005 | Statistics | High | Stat labels ("Lessons completed", "Flashcards reviewed", "Bookmarks") are in English | Persian-first contract violated | S |
| 6 | RC1-006 | Exam Workspace | High | No sticky workspace header with year/section/timer/answered/remaining | User loses context when scrolling through a 25-question section | M |
| 7 | RC1-007 | Exam Workspace | High | Timer is small inline element, not prominent; no visual urgency as time decreases | User under time pressure cannot quickly see remaining time | M |
| 8 | RC1-008 | Exam Workspace | High | Submit button is buried at the bottom of the answer pane, not persistently visible | User must scroll past all questions to find submit; risky for timed exam | M |
| 9 | RC1-009 | Exam Workspace | High | Mobile lacks Paper/Answer-Sheet/Review tab separation; workspace is a linear scroll on phone | CBT experience breaks on mobile; PDF and answer sheet compete for screen | M |
| 10 | RC1-010 | Subject Pages | High | English subject shows exam entry cards as a large grid above study path, visually overwhelming | English subject page guidance is unclear; user sees 10 year cards before study path | M |
| 11 | RC1-011 | Lesson Reader | Medium | No reading progress indicator (not scroll percent, but section x of y) | User does not know how much of the lesson remains | S |
| 12 | RC1-012 | Flashcard Viewer | Medium | No prominent progress counter at top (3 of 92); counter is in eyebrow text only | User cannot gauge session length at a glance | S |
| 13 | RC1-013 | Last Night | Medium | Rapid review stage shows one item but subject packs below are always fully expanded, creating a long scroll past rapid-review content | User in rapid-review mode is distracted by expanded subject sections below | M |
| 14 | RC1-014 | Flashcards Page | Medium | `#/flashcards` route renders a dead-end empty state with no CTA | User navigating from sidebar hits a wall with no way forward | S |
| 15 | RC1-015 | Bookmarks | Medium | Empty state says "نشان‌شده‌ای در این دسته نیست" but provides no CTA to start studying | Dead-end; user does not know where to find bookmarkable content | S |
| 16 | RC1-016 | Exams Page | Medium | Each year card shows all sections, PDF/key links, custom range form, and verification details simultaneously | Card density per year is overwhelming; user cannot quickly pick a section and start | M |
| 17 | RC1-017 | Dashboard | Medium | "Continue Exam" resume link does not distinguish between practice and exam mode in the label | User may resume an exam session expecting practice behavior | S |
| 18 | RC1-018 | Review Queue | Medium | Queue items show "flashcard · critical · manual" which is internal metadata, not user-facing language | User does not understand why an item is queued or what "critical" means | S |
| 19 | RC1-019 | Settings | Medium | Revert confirmations ("Review queue پاک شود؟") and notification messages ("History پاک شد.") mix English and Persian | Inconsistent bilingual messaging in a settings context | S |
| 20 | RC1-020 | Navigation | Medium | Mobile bottom nav has only 4 items (داشبورد, آزمون‌ها, مطالعه, تنظیمات) but sidebar has 8; primary destinations like مرور and جست‌وجو are missing from mobile | Mobile user cannot reach Review, Search, Bookmarks, or Statistics from bottom nav | S |

---

## C. Complete Issue Inventory

### Critical (0)

No workflow-blocking issues found. All five workflows are functionally complete.

### High (9)

| ID | Page | Problem | Fix | Effort |
|---|---|---|---|---|
| RC1-001 | Dashboard | 9 equal-weight cards; no dominant action | Promote "Continue Learning" or "ادامه مطالعه" to a dominant hero CTA; group remaining into compact secondary row | M |
| RC1-002 | Bookmarks | Tab/sort/search labels in English | Replace with Persian: درس‌ها, قانون‌های طلایی, فلش‌کارت‌ها, دام‌ها, سرفصل‌ها, درس‌ها, سؤال‌ها, جدیدترین, قدیمی‌ترین, موضوع, الفبایی | S |
| RC1-003 | Review Queue | Action buttons in English | Replace: علامت‌گذاری, کامل, حذف, مرور سخت تصادفی | S |
| RC1-004 | Search | Group labels in English | Replace: سال‌های آزمون, سرفصل, درس, قانون‌های طلایی, فلش‌کارت‌ها, دام‌های آزمون, مرور پنج‌دقیقه‌ای, درس‌ها | S |
| RC1-005 | Statistics | Stat labels in English | Replace: درس‌های تکمیل‌شده, فلش‌کارت‌های مرورشده, نشان‌شده‌ها, حجم صف مرور, مشاهده‌های اخیر, دقیقه جلسه فعلی | S |
| RC1-006 | Exam Workspace | No sticky header | Add `.exam-shell-top` sticky bar with year, section label, timer, answered/remaining, and submit button | M |
| RC1-007 | Exam Workspace | Timer not prominent | Move timer into sticky header; increase font; add urgency color below 5 minutes | M |
| RC1-008 | Exam Workspace | Submit not persistently visible | Add sticky bottom bar with submit button on desktop; add to mobile action bar | M |
| RC1-009 | Exam Workspace | Mobile lacks tab separation | Add Paper/Answer-Sheet/Review tabs on mobile; stack linearly on desktop | M |
| RC1-010 | English Subject | Exam entry cards dominate above study path | Move previous-exam entry into a collapsed `<details>` below the study path grid | M |

### Medium (11)

| ID | Page | Problem | Fix | Effort |
|---|---|---|---|---|
| RC1-011 | Lesson Reader | No section progress indicator | Add "بخش x از y" eyebrow in lesson reader focus card | S |
| RC1-012 | Flashcard Viewer | Progress count not prominent | Add large "3 / 92" counter at top of study-player-card | S |
| RC1-013 | Last Night | Subject packs expanded by default below rapid review | Collapse subject packs by default; user expands on demand | S |
| RC1-014 | Flashcards Page | `#/flashcards` dead-end empty state with no CTA | Add CTA: "رفتن به درس‌ها" linking to `#/subjects` | S |
| RC1-015 | Bookmarks | Empty state lacks CTA | Add CTA buttons per empty state type linking to relevant subject/exam pages | S |
| RC1-016 | Exams Page | Year card shows all sections, PDF, range, details at once | Collapse sections and custom range into `<details>`; show only full-paper practice/exam + section summary | M |
| RC1-017 | Dashboard | Continue Exam label does not distinguish mode | Show "ادامه آزمون" or "ادامه تمرین" based on `active.mode` | S |
| RC1-018 | Review Queue | Queue items show internal metadata | Replace "flashcard · critical · manual" with Persian: "فلش‌کارت · اولویت بحرانی · دستی" or better, human description | S |
| RC1-019 | Settings | Mixed-language confirmations and notifications | Translate remaining English fragments in confirm() and announce() calls | S |
| RC1-020 | Mobile Nav | Only 4 items; missing Review, Search, Bookmarks, Statistics | Expand to 5 or use scrollable row; add مرور and جست‌وجو at minimum | S |
| RC1-021 | Search | Exam year result route uses old `#/exams/${year}/practice` instead of canonical `#/exams/${year}` | Update to `examService.routeForYear(year)` | S |

### Low (8)

| ID | Page | Problem | Fix | Effort |
|---|---|---|---|---|
| RC1-022 | Bookmarks | Bookmark timestamp shown as raw ISO string | Format as `toLocaleDateString("fa-IR")` | S |
| RC1-023 | Exam Traps | Trap eyebrow shows "دام آزمون" but trap body uses "اشتباه رایج" prefix inline; no visual separation between wrong/correct/memory | Add structured visual blocks with labels: اشتباه رایج, فکر درست, ترفند حفظی | S |
| RC1-024 | Golden Rules | "مرور شد" button gives no visual feedback that it was clicked | Add toast or state change after click | S |
| RC1-025 | Subject Pages | `pathCard` uses `<a>` with nested `<span class="button">` — not a real button, semantics misleading | Use `<button>` or `<a>` without nested button-look span | S |
| RC1-026 | Exam Workspace | Question palette dot text is CSS `min-width: 2.65rem` — 25 dots wrap into many rows, not compact | Tighter spacing for large palettes; consider 2-digit dots in smaller cells | S |
| RC1-027 | Lesson Reader | "Exam memory" section shows fallback text if `twentySecondStrategy` or `developerAnalogy` is empty | Hide section entirely if both fields are empty | S |
| RC1-028 | Review Queue | "Random difficult review" button is outside the queue list, below the empty state — user may miss it | Include in empty state CTA row | S |
| RC1-029 | Dashboard | Subject progress card shows raw strings like "0/20 topics · 0/20 lessons" — no visual progress bar | Add small inline progress bar or percentage badge | S |

---

## D. Information Architecture Proposal

### Recommended Top-Level Navigation (Desktop Sidebar)

```
داشبورد           #/dashboard
آزمون‌ها           #/exams
مطالعه             #/subjects
  └ (subjects are internal pages, not nav items)
مرور               #/review
جست‌وجو             #/search
نشان‌شده‌ها         #/bookmarks
شب آخر             #/last-night
آمار               #/statistics
تنظیمات            #/settings
```

Remove `#/flashcards` from primary nav — it is an empty dead-end. Flashcards are accessible per-subject.

### Recommended Mobile Nav (Bottom Bar)

5 items, scrollable:
```
داشبورد | آزمون‌ها | مطالعه | مرور | جست‌وجو
```

Settings, Bookmarks, Statistics, Last Night accessible via Dashboard quick-links.

### Dashboard Structure

```
┌──────────────────────────────────┐
│ Hero: "ادامه مطالعه" (dominant)  │
│ or "شروع مطالعه" if no history   │
├──────────────────────────────────┤
│ Quick row: آزمون | زبان | شب آخر │
├──────────────────────────────────┤
│ پیشرفت امروز (compact stats)     │
├──────────────────────────────────┤
│ درس‌ها (5 subject progress bars)  │
├──────────────────────────────────┤
│ فعالیت اخیر (3 items, compact)  │
└──────────────────────────────────┘
```

### Exams Structure

```
آزمون‌ها
├ Year selector (list or dropdown, not 10 cards)
├ Selected year detail:
│  ├ Status row (PDF, Key, Corrections)
│  ├ Full-paper: [تمرین] [آزمون]
│  ├ Sections (collapsed, expandable):
│  │  └ English 1-25: [تمرین] [آزمون]
│  │  └ ...
│  ├ Custom range (collapsed form)
│  └ Verification details (collapsed)
```

### Study (Subjects) Structure

```
مطالعه
├ 5 subject cards (English, Network, Database, OS, Data Structures)
└ Selected subject:
   ├ Hero: title, progress, [شروع درس سریع]
   ├ Study path: 4 steps (Crash Course → Rules → Cards → Traps)
   ├ Previous exam entry (English only, collapsed)
   ├ Progress card
   ├ Lesson reader (inline, opens on demand)
   └ Lessons list (collapsed <details>)
```

### Review Structure

```
مرور
├ Queue items (with Persian labels)
├ Each item: title, reason (Persian), [باز کردن] [کامل] [حذف]
├ Empty: explanation + CTA "رفتن به درس‌ها"
└ Quick action: "مرور سخت تصادفی" (in empty state CTA)
```

### English Structure

English is the first subject in `#/subjects/english`. Same subject hierarchy as technical subjects, with additional collapsed previous-exam entry below the study path.

### Last Night Structure

```
شب آخر
├ Rapid review stage (one item, centered, full focus)
├ Subject filter (compact chips, not full cards)
└ Subject packs (collapsed by default, expand on demand)
```

---

## E. Screen-by-Screen Recommendations

### Dashboard

**Current**: 9 equal-weight command cards in a grid. No dominant action. User must scan all 9 to find what to do.

**Proposed**: Hero card with one dominant CTA ("ادامه مطالعه" or "شروع مطالعه"). Below, a compact row with 3 quick actions (آزمون, زبان, شب آخر). Then progress summary and recent activity as compact text, not cards.

**Primary action**: Continue/start learning.
**Secondary**: Start exam, English practice, Last Night.
**Mobile**: Hero + quick row + progress; recent activity collapses.

### Exams Page

**Current**: 10 year cards stacked vertically, each showing status row, structure note, full-paper actions, all section cards, custom range form, and PDF preview simultaneously.

**Proposed**: Year list with compact selection. Selected year shows status, full-paper actions, and sections in collapsed `<details>`. Custom range and verification in nested collapsed sections.

**Primary action**: Start practice or exam for selected year/section.
**Mobile**: Year list → year detail → section detail; single column.

### Exam Workspace

**Current**: Two-column grid (PDF left, answer pane right). No sticky header. Timer inline. Submit at bottom. Palette inline. Mobile stacks vertically.

**Proposed Desktop**:
```
┌ Sticky: Year · Section · Timer · Answered · [ثبت نهایی] ─┐
├─────────────────────────┬───────────────────────────────┤
│ PDF viewer              │ Question card                   │
│ (scrollable)            │ Options                         │
│                         │ Palette (compact)               │
│                         │ [قبلی] [بعدی] [پاک] [نشان]     │
│                         │ (scrollable)                    │
└─────────────────────────┴───────────────────────────────┘
```

**Proposed Mobile**: Tabs (پی‌دی‌اف | پاسخ‌نامه | مرور). Sticky bottom bar with [قبلی] [ثبت] [بعدی].

### Subject Pages

**Current**: Hero with 2 buttons, then 4 path cards, then English exam entry (if English), then progress, then inline lesson reader, then collapsed lessons, then collapsed topics.

**Proposed**: Hero with dominant "شروع درس سریع" button. 4 path cards remain but Crash Course is visually dominant. Previous exam entry collapsed. Progress card shows visual bars. Lessons in collapsed `<details>`.

### Lesson Reader

**Current**: Opens inline below path grid. Shows focus card, content sections, exam memory, and action buttons. No section progress. No sticky controls.

**Proposed**: Add section progress eyebrow ("بخش x از y"). Make prev/next/complete a sticky bar at the bottom of the reader. Limit content width to 38rem for Persian reading comfort.

### Flashcard Viewer

**Current**: One card centered in study-player. Reveal, reviewed, difficult, next, bookmark buttons. Progress is eyebrow text.

**Proposed**: Add large "3 / 92" counter at top of card. Keyboard shortcuts (Space = reveal, N = next, D = difficult, B = bookmark). Keep action row but reorder: [نمایش] dominant, then [بعدی], then [سخت], [نشان‌کردن], [مرور شد].

### Golden Rules Viewer

**Current**: One rule centered. Previous, random, reviewed, next, bookmark. Works well.

**Proposed**: Add prominent progress counter. Add toast feedback after "مرور شد" click.

### Exam Traps Viewer

**Current**: One trap centered. Shows title, common mistake, correct thinking, memory trick as plain paragraphs. Previous, next, bookmark.

**Proposed**: Add visual labels for each section: "اشتباه رایج", "فکر درست", "ترفند حفظی" as small header pills. Add border separators between sections.

### Last Night Mode

**Current**: Rapid review stage at top (one item, works well). Below, subject packs are fully expanded by default showing all lists.

**Proposed**: Collapse all subject packs into `<details closed>` by default. Compact subject filter chips above rapid-review stage. Keep rapid review as primary focus.

### Search

**Current**: Form with input + button. Results grouped by type. Group labels in English. Highlight marks match.

**Proposed**: Translate group labels. Auto-focus input. Show result count per group. Fix exam year route to canonical.

### Bookmarks

**Current**: Three selects (tab, sort, search). List of cards. Tab/sort labels in English. Empty state lacks CTA. Timestamps are raw ISO.

**Proposed**: Translate all labels. Add CTAs to empty states. Format timestamps. Group by subject for scannability.

### Review Queue

**Current**: Card grid with items. Each shows title, internal metadata, 4 action buttons. Empty state has no CTA. Random button below list.

**Proposed**: Translate metadata to Persian. Add CTA to empty state. Move random review into empty state CTA area. Simplify: title + reason (Persian) + [باز کردن] [کامل].

### Statistics

**Current**: 6 stat cards in a grid. Labels in English.

**Proposed**: Translate labels. Add subject progress bars. Remove "Recently Viewed" count if not actionable. Show estimated study time from session data.

### Settings

**Current**: 4 panels (storage, backup, reset, motion). Reset confirmations mix English/Persian.

**Proposed**: Translate all confirm() and announce() messages. Collapse reset sub-buttons into a single "danger zone" with expand.

---

## F. Component Consolidation Plan

### Keep (no changes needed)
- `createPageHeader` — consistent, works well
- `createEmptyState` / `createErrorState` — shaped correctly but need CTAs in usage
- `.button`, `.button-primary`, `.button-danger` — consistent hierarchy
- `.panel`, `.content-card` — consistent card style
- `.exam-option-row` — good interaction design
- `.palette-dot` — good state system
- `.study-player` / `.study-player-card` — good focused experience
- `.lesson-reader` — good reading width

### Merge
- `.hero-card` and `.focus-card` — nearly identical styles; merge into one `.surface-hero` class
- `.command-card` and `.path-card` — nearly identical; merge into `.action-card`
- `.command-grid` and `.path-grid` — identical grid; merge into `.action-grid`

### Redesign
- Exam workspace layout — needs sticky header, persistent submit, mobile tabs
- Dashboard layout — needs dominant hero CTA hierarchy
- Subject page — needs visual priority for Crash Course path

### Remove
- `#/flashcards` route and page — dead-end empty state; flashcards accessible per-subject only
- Nested `<span class="button">` inside `<a class="path-card">` — misleading semantics

---

## G. Design System Direction

### Typography Scale (Persian RTL)
```
--font-size-caption: 0.75rem     (13px)   for badges, metadata
--font-size-sm: 0.8125rem        (13px)   for labels, eyebrows (existing)
--font-size-base: 0.9375rem      (15px)   body text (existing)
--font-size-lg: 1.125rem         (18px)   section headings (existing)
--font-size-player: clamp(1.75rem, 4vw, 3.5rem)  study player content (existing)
--font-size-xl: clamp(1.6rem, 3vw, 2.25rem)  page h1 (existing)
--font-size-hero: clamp(2rem, 6vw, 4.5rem)  hero h1 (existing, rename)
```

### Spacing Scale (existing, keep)
```
--space-1 through --space-10
```

### Color Usage
```
--accent: primary action, active state, progress
--accent-strong: hover, emphasis
--success/--accent: correct answers, completed
--warning: pending state, timer urgency
--danger: wrong answers, destructive actions
--info: neutral notifications
```
Do not add new decorative colors. Do not rely on color alone.

### Card Styles
One surface system:
```
.surface-raised: default card (existing .panel / .content-card)
.surface-hero: hero/focus card (existing .hero-card / .focus-card — merge)
```

### Button Hierarchy
```
.button-primary: dominant action (one per page maximum)
.button: standard action
.button-danger: destructive action
```

### State Styles
```
Palette: [data-state] attribute → CSS background (existing, works well)
Option: .selected class → accent border+bg (existing)
Review: [data-outcome] attribute → border-start color (existing)
```

### Border and Radius
```
--radius-sm (6px): buttons, inputs, small elements
--radius-md (10px): inner cards, details
--radius-lg (14px): panels, surface cards
```

### Motion Principles
```
Existing: --transition-fast: 120ms ease (keep)
Existing: page-transition soft-enter (keep)
Add: flashcard reveal opacity transition
Add: palette-dot scale on answer
Respect: prefers-reduced-motion (existing)
No decorative animation.
```

---

## H. Implementation Plan

### RC1-B — Critical and High Functional UX Fixes

**Scope**: Mixed English/Persian labels (RC1-002 through RC1-005, RC1-019), exam year search route (RC1-021), flashcards dead-end CTA (RC1-014).

**Files affected**:
- `features/bookmarks/bookmarks-page.js`
- `features/review/review-page.js`
- `features/search/search-page.js`
- `features/statistics/statistics-page.js`
- `features/settings/settings-page.js`
- `features/flashcards/flashcards-page.js`

**Risks**: Low. Label replacements only.
**Dependencies**: None.
**User impact**: Immediate Persian-first consistency.

### RC1-C — Information Architecture and Navigation

**Scope**: Mobile nav expansion (RC1-020), remove `#/flashcards` from sidebar, Exams page year selection collapse (RC1-016), English subject exam entry collapse (RC1-010), Last Night subject packs collapse (RC1-013).

**Files affected**:
- `index.html`
- `features/last-night/last-night-page.js`
- `features/exam/exams-page.js`
- `features/subjects/subjects-page.js`
- `styles/responsive.css`

**Risks**: Medium. Changing Exams page structure may affect E2E test selectors.
**Dependencies**: RC1-B.
**User impact**: Clearer navigation, less overwhelming pages.

### RC1-D — Layout, Typography, and Shared Components

**Scope**: Dashboard dominant hero (RC1-001), lesson reader progress + sticky controls (RC1-011), flashcard progress counter (RC1-012), bookmark timestamp formatting (RC1-022), merge hero/focus and command/path card CSS classes, reading width adjustments.

**Files affected**:
- `features/dashboard/dashboard-page.js`
- `features/subjects/subjects-page.js`
- `styles/components.css`

**Risks**: Low-Medium. CSS merges need class-name updates across pages.
**Dependencies**: RC1-C.
**User impact**: Clearer visual hierarchy and reading comfort.

### RC1-E — Exam Workspace and Study Experience

**Scope**: Sticky exam header with timer and submit (RC1-006, RC1-007, RC1-008), mobile tabs (RC1-009), exam traps section labels (RC1-023), golden rules feedback (RC1-024), review queue Persian labels (RC1-018), dashboard mode label fix (RC1-017).

**Files affected**:
- `features/exam/practice-mode.js`
- `features/exam/exam-mode.js`
- `features/subjects/subjects-page.js`
- `features/review/review-page.js`
- `features/dashboard/dashboard-page.js`
- `styles/components.css`
- `styles/responsive.css`

**Risks**: High. Exam workspace layout changes may break E2E test selectors and requires careful mobile testing.
**Dependencies**: RC1-D.
**User impact**: Professional CBT experience; clear study feedback.

### RC1-F — Final Consistency and Release Polish

**Scope**: All Low-severity issues (RC1-022 through RC1-029), remaining mixed-language fragments, empty state CTAs (RC1-015), bookmark timestamp formatting, progress bars, pathCard semantics.

**Files affected**:
- `features/bookmarks/bookmarks-page.js`
- `features/subjects/subjects-page.js`
- `features/dashboard/dashboard-page.js`
- `core/router/routes.js` (remove flashcards route if agreed)
- `styles/components.css`

**Risks**: Low.
**Dependencies**: RC1-E.
**User impact**: Final polish, no visual inconsistencies remain.