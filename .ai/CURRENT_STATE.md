# CURRENT_STATE.md

# Computer Engineering MSc Exam Companion

Version: Live

This document is the single source of truth for the current project state. Every development session begins with `.ai/START_HERE.md` and ends by updating this file.

---

# Project Status

Overall Progress: 100%

Current Phase: RC2.1 Complete — Release Blocker Fixes

Project State: Ready for v1.0 Release

Architecture State: Implemented without deviation

Implementation State: Sprint 0, 1, 1.1, 2, 3, Milestone C, Milestone D, Milestone E, Milestone F, Milestone G, Milestone H, Milestone I, Milestone J, Milestone K, Milestone L, Milestone N, RC1-B, RC1-C, RC1-D, RC1-E, RC2, and RC2.1 complete

---

# Sprint Results

Sprint 0: PASS
Sprint 1: PASS
Sprint 1.1 Final Acceptance: PASS
Sprint 2: PASS
Sprint 3 Infrastructure: PASS
Sprint 3 Source-Backed Exam: PARTIAL — legacy-unverified paper/key URLs and answer arrays imported
Milestone C (Legacy Asset Migration): SUPERSEDED — external legacy prototype provided after audit
Milestone D (Prototype Data Extraction and Production Import): PASS
Milestone E (Topic Registry and Network Knowledge): PASS
Milestone F (Database Knowledge Module): PASS
Milestone G (Operating System Knowledge Module): PASS
Milestone H (Data Structures and Algorithms Knowledge Module): PASS
Milestone I (Learning and Review Engine): PASS
Milestone J (Final Integration, Exam Workspace, and Release): PASS
Milestone K (Product Rebuild — UX First): PASS
Milestone L (Critical Exam Workflow Repair): PASS
Milestone N (English Exam Module): PASS

The application is packaged for release. Milestone D imported production datasets for 1395–1404 as `legacy-unverified`. Milestones E–H added expert-curated Network, Database, Operating System, and Data Structures modules. Milestone I added the learning engine. Milestone J finalized exam archive/workspace, English answer-sheet workflow, release packaging, and Safari direct launch. Milestone K rebuilt the source app UX around study flow, rapid review, guided lesson reading, and exam workspace ergonomics without changing architecture or educational claims. Milestone L repaired the critical exam route/workspace flow. Milestone N added English as an exam-focused subject with vocabulary, reading, grammar, flashcards, Last Night, search, progress, bookmarks, and previous exam entry points. Safari direct-file tests pass: 169/169.

---

# Completed Work

## Sprint 0 (Architecture Closure)
- All documentation tasks complete.

## Sprint 1 (Application Foundation)
- Direct-file application, dark responsive design, namespace, bootstrap, routing, 8 pages, dataset registry, storage adapter, search index, 48 tests.

## Sprint 2 (Source and Dataset Infrastructure)
- Source registry, validation, 1395–1404 inventory, exam validators, correction resolver, source-status UI, checksum tooling, acquisition workflow, naming conventions, 20 tests.

## Sprint 3 (Exam Engine Infrastructure)
- Scoring engine, session manager, exam service, exam viewer, exams listing page, practice mode, exam mode, results page, route pattern matching, synthetic test fixture, 18 tests.

## Milestone C (Legacy Asset Migration)
- Full repository audit: 83 files, no legacy/prototype/backup/temp files found
- No git history exists
- No hidden folders beyond .ai/
- No PDFs, images, icons, or fonts in repository
- No answer arrays, question mappings, URLs, or configuration data found
- Product documentation example patterns (TCP/UDP, DFS/BFS) are specification examples, not structured data to migrate
- Build artifact removed: tools/__pycache__/source-checksum.cpython-310.pyc
- Legacy inventory produced: LEGACY_ASSETS.md
- Migration report produced: MIGRATION_REPORT.md
- All 86 tests still pass after cleanup

## Milestone D (Prototype Data Extraction and Production Import)
- Copied provided legacy prototype into `legacy/konkur-developer-bank-v4.html`
- Extracted legacy `EXAMS` object programmatically into `legacy/extracted-exams.json`
- Generated production exam datasets for 1395–1404 under `content/exams/`
- Imported 1,276 questions, 7 deleted questions, and 1 multiple-accepted answer
- Preserved PDF/key URLs, section metadata, structure notes, and legacy provenance config
- Added `legacy-unverified` source validation support
- Added focused Milestone D tests for imported years, counts, deleted questions, multiple answers, registration, and provenance
- Safari direct-file test suite: PASS 93/93

## Milestone E (Topic Registry and Network Knowledge)
- Added canonical topic validation, topic registry, and topic relation datasets
- Added manual question-topic linking infrastructure with empty valid mapping set
- Added Network subject module with 20 topics and 20 crash-course lessons
- Added 43 Network Golden Rules, 84 flashcards, 22 exam traps, and one Five-Minute Review
- Added `#/last-night` with honest Network content and no fake weak-topic statistics
- All Network content is `expert-curated`; frequency remains `unknown`
- Verified question mappings: 0
- Safari direct-file test suite: PASS 106/106

## Milestone F (Database Knowledge Module)
- Added Database subject module with 25 topics and 25 crash-course lessons
- Added 49 Database Golden Rules, 92 flashcards, 22 exam traps, and one Five-Minute Review
- Integrated Database into Last Night Mode, global search, routes, and bookmark flows
- All Database content is `expert-curated`, `expert-reviewed`; frequency remains `unknown`
- Verified question mappings: 0
- Safari direct-file test suite: PASS 116/116

## Milestone G (Operating System Knowledge Module)
- Added Operating System subject module with 26 topics and 26 crash-course lessons
- Added 55 OS Golden Rules, 104 flashcards, 24 exam traps, and one Five-Minute Review
- Integrated OS into Last Night Mode, global search, routes, and bookmark flows
- All OS content is `expert-curated`, `expert-reviewed`; frequency remains `unknown`
- Verified question mappings: 0
- Safari direct-file test suite: PASS 126/126

## Milestone H (Data Structures and Algorithms Knowledge Module)
- Added Data Structures subject module with 30 topics and 30 crash-course lessons
- Added 60 Data Structures Golden Rules, 120 flashcards, 28 exam traps, and one Five-Minute Review
- Integrated Data Structures into Last Night Mode, global search, routes, and bookmark flows
- All Data Structures content is `expert-curated`, `expert-reviewed`; frequency remains `unknown`
- Verified question mappings: 0
- Safari direct-file test suite: PASS 136/136

## Milestone I (Learning and Review Engine)
- Added Dashboard 2.0 study hub with continue learning, study today, subject progress, quick access, and recent activity
- Added lightweight progress, recently viewed, session, difficult flashcard, review queue, random study, and validation engine over existing content
- Redesigned Last Night Mode as a unified collapsible flow across all four subjects
- Added Bookmark Center tabs/sorting/search, grouped cross-subject search, lightweight statistics, and focused Settings reset controls
- No new educational content generated; no mastery, rank, AI score, or fabricated confidence shown
- Safari direct-file test suite: PASS 146/146

## Milestone J (Final Integration, Exam Workspace, and Release)
- Completed final Exams page with PDF/key links, embedded PDF fallback, section links, custom ranges, question counts, and visible `legacy-unverified` labels
- Completed answer-sheet, Practice Mode, Exam Mode, English section workflow, negative marking, deleted/multiple-answer handling, recovery, and result review integrations
- Finalized Dashboard, Last Night Mode, Search, Bookmarks, Review Queue, progress persistence, storage recovery checks, and technical subject navigation
- Created release folder and zip package at `release/konkur-exam-companion.zip`
- Packaged app launches directly from `release/konkur-exam-companion/index.html` in Safari
- Safari direct-file test suite: PASS 156/156

## Milestone K (Product Rebuild — UX First)
- Reworked primary navigation toward study-oriented flows while preserving existing routes and storage contracts
- Rebuilt Dashboard as a command center with continue learning, exam continuation, random review, Last Night, progress, subject paths, review queue, and recent activity
- Rebuilt Subject pages around guided study paths, focused Golden Rules, one-card flashcards, exam traps, and an inline lesson reader that opens only after selecting a lesson
- Rebuilt Last Night Mode as a rapid-review cockpit over Golden Rules, difficult flashcards, and exam traps while keeping subject packs available
- Added CBT-style question palettes to Practice Mode and Exam Mode with current, answered, bookmarked, and empty states
- Improved result review cards and shared UX styling for hero cards, command cards, study players, lesson readers, palettes, and mobile action layouts
- Preserved all educational content and provenance labels; no new educational claims or verified-frequency claims were introduced
- JavaScript syntax checks: PASS for changed feature files
- Safari direct-file test suite: PASS 156/156 W574 B229.0 S1.00
- QA report: `qa/reports/milestone-k-product-rebuild-report.md`

## Milestone L (Critical Exam Workflow Repair)
- Reproduced and repaired the broken English 1404 practice/exam workflow
- Added canonical exam route contract: `#/exams`, `#/exams/{year}`, `#/exams/{year}/practice/{sectionId}`, `#/exams/{year}/exam/{sectionId}`, `#/exams/{year}/review/{attemptId}`, and custom range query routes
- Centralized exam route generation in `features/exam/exam-service.js`
- Repaired Exam page section actions with separate Practice and Exam actions
- Fixed the workspace render exception caused by `exam-viewer.js` using non-public `app.content.registry.localizedText`
- Kept Practice and Exam submission/review inside the workspace
- Added answer persistence/recovery, completed-attempt lock checks, deleted-question disabling, and canonical Dashboard English Practice action
- Added real browser UI E2E tests for English Practice, Exam Mode, deleted/multiple-answer scoring, Database Crash Course, and Last Night controls
- Rebuilt `release/konkur-exam-companion/` and `release/konkur-exam-companion.zip`
- Safari direct-file test suite: PASS 161/161 W375 B239.0 S1.00
- QA report: `qa/reports/milestone-l-critical-exam-workflow-repair-report.md`
- Follow-up repair: exam workspaces now embed the exam PDF inline with separate-tab fallback, use section page anchors when available, and visible workflow/navigation labels were converted to Persian. Safari direct-file test suite remains PASS 161/161 W375 B246.0 S1.00. Release folder and zip were rebuilt after this repair.

## Milestone N (English Exam Module)
- Added English as `subject:english` beside the four technical subjects
- Added previous-exam English entry points for all available years through the existing Exam Engine
- Added 336 expert-curated vocabulary flashcards with Persian meanings and exam-oriented examples
- Added 14 grammar cheatsheet pages and 10 reading skill pages as concise lessons
- Added English grammar/reading flashcards, 8 common exam traps, and one five-minute review
- Integrated English into Dashboard subject progress, Subject pages, Search, Bookmarks, Review Queue, Progress, Last Night, and Statistics through existing systems
- Added focused Milestone N tests for registration, search, bookmarks, flashcards, progress, Last Night, practice integration, and validation
- Safari direct-file test suite: PASS 169/169 W375 B295.0 S4.00
- Rebuilt `release/konkur-exam-companion/` and `release/konkur-exam-companion.zip`
- QA report: `qa/reports/milestone-n-english-module-report.md`

## RC2.1 (Release Blocker Fixes)
- Fixed RC2 release-impacting issues only: timer lifecycle, mark-for-review, exact question routing, practice confirmation, route focus restoration, ARIA labels, HH:MM:SS timer formatting, and Last Night random navigation
- Added session-scoped exam review marks without changing scoring
- Search and bookmarks now open exact question custom practice routes
- Rebuilt `release/konkur-exam-companion.zip`
- JavaScript syntax checks: PASS for all modified app files and RC2.1 spec
- Focused Chromium blocker suite: PASS 4/4
- Safari/WebKit blocker suite: PASS 4/4
- Manual verification: PASS timer 30s, refresh continuation, bookmark exact route, Last Night random navigation
- QA report: `qa/reports/rc2-1-release-blockers-report.md`

---

# Repository Reality

Application Entry Point: `index.html`

Runtime: direct `file://`, no build step or server

Verified Educational Dataset: None

Production Educational Content: 1395–1404 legacy-unverified exam shell, options, official-key answers, plus expert-curated Network, Database, Operating System, and Data Structures educational modules

Test Dataset: deterministic schema-valid fixture (search) + synthetic exam fixture (6 questions)

Source Archive: Directory structure exists, no files acquired

Official Exams, Answer Keys, and Corrections Stored Locally: None

Source Inventory: 1395–1404 legacy-unverified paper and answer-key source records from legacy prototype URLs, plus placeholder acquisition records

Exam Engine: Fully implemented, verified with test fixture

Network Module: 20 topics, 20 lessons, 43 Golden Rules, 84 flashcards, 22 exam traps, 1 Five-Minute Review, 0 verified question mappings

Database Module: 25 topics, 25 lessons, 49 Golden Rules, 92 flashcards, 22 exam traps, 1 Five-Minute Review, 0 verified question mappings

Operating System Module: 26 topics, 26 lessons, 55 Golden Rules, 104 flashcards, 24 exam traps, 1 Five-Minute Review, 0 verified question mappings

Data Structures Module: 30 topics, 30 lessons, 60 Golden Rules, 120 flashcards, 28 exam traps, 1 Five-Minute Review, 0 verified question mappings

Legacy Assets: `legacy/konkur-developer-bank-v4.html`, `legacy/extracted-exams.json`, and extraction report

---

# Quality Gates

Documentation Structure: PASS
Architecture Contracts: PASS
Foundation Implementation: PASS
Source Infrastructure: PASS
Exam Engine: PASS
Legacy Migration: PASS
JavaScript Syntax: PASS
Automated Tests: PASS, 206/206 historical Safari suite plus RC2.1 focused browser suite 4/4 in Chromium and 4/4 in WebKit
Direct-File Runtime: PASS in Safari
Critical Findings: 0
High Findings: 0
Sprint 1 Acceptance: PASS
Sprint 2 Acceptance: PASS
Sprint 3 Infrastructure: PASS
Sprint 3 Source-Backed Exam: PARTIAL WITH LEGACY-UNVERIFIED DATA
Dataset Verification: BLOCKED ON OFFICIAL SOURCE VERIFICATION
Release Package: PASS
Milestone K Source UX: PASS
Milestone L Exam Workflow: PASS
Milestone N English Module: PASS
RC1-B Persian UI Consistency: PASS
RC1-C Information Architecture: PASS
RC1-D Layout Typography: PASS
RC1-E Exam Workspace: PASS
RC2 Final Product QA: PASS, release blockers identified
RC2.1 Release Blockers: PASS

---

# Sources Acquired

Legacy-unverified paper and answer-key URLs for all years 1395 through 1404 were extracted from `legacy/konkur-developer-bank-v4.html`. No local official PDFs are acquired or checksummed.

# Sources Pending

All years 1395 through 1404: official local PDFs, checksums, redistribution review, independent verification, corrections, and question text transcription.

---

# Missing Features

| Feature | Blocker |
|---|---|
| Official verified exam source files | Requires human acquisition and checksum verification of official PDFs |
| Question text transcription | Requires real source PDFs |
| Verified answer keys | Requires independent official verification |
| Subject content | Requires verified exam analysis pipeline |
| Translation | Requires complete English content first |
| Estimated Exam Score | Requires future ADR for formula |
| Verified question-topic progress | Requires official source-backed question mappings |

---

# Known Limitations

1. Legacy prototype data is imported but remains `legacy-unverified`.
2. Network, Database, Operating System, and Data Structures educational content is `expert-curated`, not exam-derived.
3. Frequency remains `unknown` because question-topic mappings are not verified.
4. Verified question mappings count is 0.
5. No real official exam source files have been acquired locally or checksummed.
6. No question text transcribed — PDF fallback is shown for all imported questions.
7. Microsoft Edge not installed.
8. Screen reader, 200% zoom, browser restart persistence not performed programmatically.

---

# Remaining Blockers

Source Verification (CRITICAL):
- Official papers, answer keys, and corrections have not been acquired locally, checksummed, license-reviewed, or independently verified.
- All 1395–1404 imported paper/key records remain `legacy-unverified`.
- Question text still requires official-source-backed transcription.

Release:
- Release package is ready at `release/konkur-exam-companion.zip` with RC2.1 blocker fixes included.
- Full official-source verification remains pending.

---

# Exact Next Task

Next milestone: v1.0 release, then official source acquisition and verified question-topic mapping if development continues.

1. Calculate checksums using `tools/source-checksum.py`
2. Store files under `sources/papers/` and `sources/answer-keys/`
3. Update `content/sources/source-inventory.js` with real source records
4. Replace legacy-unverified provenance with verified source records where evidence supports it
5. Transcribe question text and verify the full exam experience against official data

No further infrastructure development is needed for this release. RC2.1 recommendation: READY FOR v1.0.

---

# Next Product Direction

The released application remains a Computer Engineering Master's Entrance Exam companion. The planned successor expands the catalog to National Entrance Exam and Master's Entrance Exam families; doctoral entrance exams remain out of scope.

`.ai/product/EXAM_CATALOG.md` defines the new catalog boundary, official Sanjesh source hubs, and source-acquisition order. Source Record schema version 2 now supports explicit exam family, National Entrance group or Master's exam-set code, and publisher paper code while preserving version 1 Computer Engineering records.

No expanded source artifact has been acquired or verified in this repository.

Next product task: acquire and checksum the 1405 official catalog booklets, then extract the annual Master's exam-set list and register version 2 source records.

---

END OF FILE
