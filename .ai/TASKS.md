# TASKS.md

# Computer Engineering MSc Exam Companion

Status: Active

This is the single dependency-ordered task list. Conflicting historical phase plans are superseded by this document.

## Working Rules

- Begin with `.ai/START_HERE.md` and follow its complete mandatory reading order before selecting work.
- Use only `Critical`, `High`, `Medium`, and `Low` priorities.
- Complete one task and its QA before beginning the next task.
- Do not leave placeholders, TODOs, fake data, or partially integrated features.
- Update `.ai/CURRENT_STATE.md` at the end of every session.
- Educational content follows `.ai/product/EXAM_ANALYSIS_RULES.md`, then `.ai/product/EXAM_EDITOR.md`, then `.ai/engineering/QA_AGENT.md`.

---

# Sprint 0 - Architecture Closure

Priority: Critical

Objective: Resolve every documentation and architecture blocker before application implementation.

Tasks, in dependency order:

- [x] Read and analyze all project documentation and repository contents.
- [x] Move AI documentation into the canonical `.ai/`, `.ai/product/`, and `.ai/engineering/` structure.
- [x] Rename the legacy workflow document to `.ai/engineering/CODING_WORKFLOW.md` and repair internal paths.
- [x] Correct `.ai/CURRENT_STATE.md` so architecture and repository readiness are stated honestly.
- [x] Record ADR-0021 for direct `file://` runtime, classic deferred scripts, dataset registration, hash routing, and offline scope.
- [x] Document the canonical physical application structure and dependency boundaries.
- [x] Define immutable content schemas and referential-integrity rules in `content/schemas/content-schemas.md`.
- [x] Define mutable user-state, versioning, migration, recovery, quota, and import/export rules in `core/storage/user-state-schema.md`.
- [x] Define source provenance and the pending 1395-1404 inventory in `content/sources/SOURCE_MANIFEST.md`.
- [x] Define canonical product terminology, exam modes, content ownership, educational gate, release gate, and version 1 appearance.
- [x] Define offline search normalization, matching, ranking, grouping, rebuilding, and performance behavior in `core/search/SEARCH_SPEC.md`.
- [x] Define scoring, answer precedence, timer, submission, and exam-mode behavior in `features/exam/EXAM_RULES.md`.
- [x] Define measurable browser, responsive, accessibility, offline, storage, performance, validation, and regression criteria in `qa/ACCEPTANCE_CRITERIA.md`.
- [x] Complete repository-wide documentation consistency review and fix every conflict.
- [x] Update `.ai/CURRENT_STATE.md` with final Sprint 0 evidence and architecture readiness.

## Sprint 0 Definition of Done

- Required documentation exists at canonical paths with no root-level duplicates.
- Every internal documentation path resolves.
- Runtime, routing, content loading, folder ownership, and dependency rules are explicit.
- Immutable content and mutable user-state schemas are explicit and non-overlapping.
- Source inventory is honest and does not claim unavailable local artifacts.
- Search and exam behavior are deterministic, versioned, and testable.
- Product terms, exam modes, priorities, content scope, appearance, and gate ownership are consistent.
- Acceptance criteria are measurable.
- Repository-wide consistency review reports no unresolved Critical or High documentation conflict.
- `.ai/CURRENT_STATE.md` records exact remaining blockers and next task.
- No application code, `index.html`, fake dataset, lesson, Flashcard, Golden Rule, or exam question is created.

---

# Sprint 1 - Application Foundation

Priority: Critical

Prerequisite: Sprint 0 Definition of Done is fully satisfied and Architecture State is `Ready for Sprint 1` in `.ai/CURRENT_STATE.md`.

Objective: Create a runnable, accessible, direct-file application foundation without educational content.

Tasks, in dependency order:

- [x] Create the approved application folders without changing the canonical structure.
- [x] Create `index.html` with ordered classic deferred scripts and semantic shell markup.
- [x] Implement dark version 1 design tokens and base, layout, component, and responsive styles.
- [x] Implement the controlled application namespace and bootstrap lifecycle.
- [x] Implement hash-based routing, unknown-route recovery, focus management, and browser history behavior.
- [x] Implement the immutable dataset registry and strict schema validation boundary.
- [x] Implement the namespaced, versioned LocalStorage adapter with defaults, migration, recovery, quota failure, import, and export behavior.
- [x] Implement the minimal shared state coordination required by the shell, router, and storage adapter.
- [x] Implement the search index infrastructure against schema-valid test fixtures only; do not expose fixture content as product content.
- [x] Implement the responsive application shell and canonical navigation.
- [x] Implement honest empty states explaining that verified source datasets have not yet been acquired.
- [x] Add deterministic unit tests for bootstrap, routing, validation, storage, migration, recovery, and search normalization/ranking.
- [x] Add browser tests for direct `file://` launch where tooling permits, hash routing, keyboard navigation, persistence, and offline core behavior.
- [x] Run QA at 320, 375, 768, 1024, and 1440 CSS pixels in the supported browser matrix.
- [x] Record non-release startup and search harness baselines against deterministic schema-valid fixtures under `qa/reports`.
- [x] Fix all discovered Critical and High findings, update documentation, and update `.ai/CURRENT_STATE.md`.

## Sprint 1 Definition of Done

- Application opens directly through `file://` without Node.js, npm, a server, a build step, ES modules, runtime JSON fetch, or a service worker.
- Shell, hash navigation, focus behavior, storage, validation, and test-fixture search work offline.
- No test fixture is presented as real educational content.
- No direct LocalStorage access exists outside `core/storage`.
- No rendering code owns educational content.
- Required responsive, keyboard, contrast, touch-target, persistence, recovery, and broken-link checks pass. Fixture performance baselines are recorded; full-corpus release performance remains gated on verified source acquisition.
- Automated and manual QA evidence is stored under `qa/reports`.
- Critical findings equal zero and High findings equal zero.
- `.ai/CURRENT_STATE.md` identifies the next dependency-ordered task.

---

# Sprint 2 - Verified Source and Dataset Infrastructure

Priority: Critical

Prerequisite: Sprint 1 Definition of Done is fully satisfied.

Objective: Create the infrastructure required to acquire, inventory, validate, and safely import official Computer Engineering MSc examination sources from 1395 through 1404.

Tasks, in dependency order:

- [x] Create source registry infrastructure (source-registry.js, source-validation.js, source-inventory.js).
- [x] Create the 1395-1404 source inventory with placeholder records.
- [x] Create checksum tooling (Python + browser HTML).
- [x] Define source acquisition workflow document.
- [x] Implement canonical exam dataset schema validators in code.
- [x] Implement dataset registration for exams, questions, answers, corrections, and sources.
- [x] Implement official correction precedence (resolveOfficialAnswer).
- [x] Implement source-status UI page (#/settings/sources).
- [x] Add repository source directories (sources/papers, sources/answer-keys, sources/corrections, README).
- [x] Create naming conventions document.
- [x] Add Sprint 2 tests to browser test suite.
- [x] Add fixture policy documentation.
- [x] Create Sprint 2 QA report.
- [x] Update documentation (TASKS, CURRENT_STATE, DECISIONS, SOURCE_MANIFEST, content-schemas).

## Sprint 2 Definition of Done

- Source registry exists and validates source records.
- 1395-1404 inventory exists with all unknown values explicitly unknown.
- Checksum tooling exists (Python and browser).
- Acquisition workflow document exists.
- Exam schemas are implemented in code validators.
- Registry validation supports exams, questions, answers, and corrections.
- Correction precedence is tested and implemented.
- Source status UI exists and displays honest pending states.
- No copyrighted source was improperly added.
- No fake question or answer content exists.
- Existing Sprint 1 functionality remains green (48 Sprint 1 + 20 Sprint 2 = 68 tests pass).
- Browser test suite passes in Chrome, Safari, and Firefox.
- No Critical or High QA issue remains.
- QA report exists under qa/reports.
- .ai/CURRENT_STATE.md is updated.
- .ai/TASKS.md is updated.

END OF FILE

---

# RC2.1 — Release Blocker Fixes

Priority: High

Objective: Prepare Version 1.0 by fixing only documented release-impacting RC2 issues.

## Status: COMPLETE

Tasks:

- [x] Fix RC2-001 exam timer lifecycle, refresh restore, stop behavior, and no duplicate intervals
- [x] Fix RC2-002 session-scoped mark-for-review and palette indicator
- [x] Fix RC2-003 exact question routing for bookmarks, search, and review rows
- [x] Fix RC2-004 practice submission confirmation with answered, blank, marked counts
- [x] Fix RC2-005 focus restoration after route changes
- [x] Fix RC2-006 incorrect `ariaLabel` usage
- [x] Fix RC2-007 `HH:MM:SS` timer formatting and non-flashing urgency styles
- [x] Fix RC2-009 Last Night random rule, flashcard, and trap navigation
- [x] Add focused RC2.1 blocker tests
- [x] Run JavaScript syntax checks
- [x] Run Chromium focused browser suite
- [x] Run Safari/WebKit focused browser suite once
- [x] Run manual timer, bookmark, and Last Night verification
- [x] Rebuild release zip
- [x] Create QA report
- [x] Update documentation

Evidence:

- JavaScript syntax checks: PASS
- Focused Chromium suite: PASS 4/4
- Safari/WebKit suite: PASS 4/4
- Manual verification: PASS timer 30s and refresh, exact bookmark route, Last Night random navigation
- QA report: qa/reports/rc2-1-release-blockers-report.md

## Definition of Done

- All scoped RC2.1 blockers fixed. → DONE
- Deferred RC2 polish remains out of scope. → DONE
- No Critical or High regression found. → DONE
- Final recommendation: READY FOR v1.0

END OF FILE

# Milestone C - Legacy Asset Migration

Priority: High

Objective: Recover and integrate every usable asset that already exists in this repository or its history.

## Status: COMPLETE — SUPERSEDED BY LATER PROVIDED PROTOTYPE

A full repository audit found no legacy assets inside the repository at the time. The user later provided an external legacy prototype, handled under Milestone D.

Tasks:

- [x] Repository audit (83 files, no legacy/prototype/backup/temp files)
- [x] Build asset inventory (LEGACY_ASSETS.md)
- [x] Check git history (no git repository exists)
- [x] Check hidden folders (only .ai/ found)
- [x] Search for URLs, answer arrays, question mappings, configuration (none found)
- [x] Check product documentation for embedded data (specification examples only, not structured data)
- [x] Remove build artifact (tools/__pycache__/source-checksum.cpython-310.pyc)
- [x] Write migration report (MIGRATION_REPORT.md)
- [x] Verify tests still pass (86/86 in Chrome, Safari, Firefox)
- [x] Verify routes still work
- [x] Verify storage still works
- [x] Update documentation

## Definition of Done

- Every useful legacy asset has been discovered. → DONE (none found)
- Every reusable implementation has been migrated. → DONE (all already integrated)
- Duplicate implementations have been removed. → DONE (none found)
- No existing functionality was lost. → DONE
- Tests still pass. → DONE (86/86)
- Documentation is updated. → DONE

END OF FILE

# Milestone D - Prototype Data Extraction and Production Import

Priority: High

Objective: Extract `const EXAMS` from the provided legacy prototype and import all 1395–1404 exam data into production datasets without manual retyping.

## Status: COMPLETE

Tasks:

- [x] Copy provided prototype to `legacy/konkur-developer-bank-v4.html`
- [x] Programmatically extract `const EXAMS` into `legacy/extracted-exams.json`
- [x] Generate production datasets for all years 1395–1404 under `content/exams/`
- [x] Preserve paper URLs, answer-key URLs, sections, structure notes, deleted questions, and multiple accepted answers
- [x] Label imported data as `legacy-unverified` and preserve `legacy-prototype` provenance in exam config
- [x] Update validation rules for legacy-unverified source provenance
- [x] Add focused browser-unit tests for imported years, question counts, deleted questions, multiple accepted answers, registration, and provenance
- [x] Run Safari direct-file test suite once
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Imported years: 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404
- Total imported question shells: 1,276
- Deleted questions: 7 (`1400`: 39, 74, 80, 87, 98; `1403`: 46, 114)
- Multiple accepted answers: 1 (`1400` question 92 accepts options 1 and 2)
- Extraction warnings: 0
- Safari test suite: PASS 93/93

## Definition of Done

- Legacy values are extracted programmatically, not manually retyped. → DONE
- Production app loads all imported years through direct `file://`. → DONE
- Imported source records remain honestly marked `legacy-unverified`. → DONE
- Tests pass after import. → DONE (Safari 93/93)

END OF FILE

---

# Milestone E - Topic Registry, Knowledge Graph, and Network Crash Course

Priority: High

Objective: Create the canonical educational knowledge architecture and deliver the first complete subject module: Computer Networks.

## Status: COMPLETE

Tasks:

- [x] Create topic validation, topic registry, and topic relation datasets
- [x] Create `content/subjects/network.js`
- [x] Create 20 canonical Network topics with honest `frequencyStatus: "unknown"`
- [x] Create 20 concise Network crash-course lessons
- [x] Create 43 Network Golden Rules
- [x] Create 22 Network Exam Traps
- [x] Create 84 Network flashcards
- [x] Create Network Five-Minute Review
- [x] Add `#/last-night` with Network rules, difficult flashcards, traps, and Five-Minute Review
- [x] Create manual question-topic link validation and empty mapping dataset
- [x] Add Network routes and bookmark actions
- [x] Add focused Milestone E tests
- [x] Run Safari direct-file test suite once
- [x] Create concise QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Topics: 20
- Lessons: 20
- Golden Rules: 43
- Flashcards: 84
- Exam Traps: 22
- Five-Minute Reviews: 1
- Verified question mappings: 0
- Content origin: `expert-curated`
- Frequency status: `unknown`
- Safari test suite: PASS 106/106
- QA report: `qa/reports/milestone-e-network-knowledge-report.md`

## Definition of Done

- Canonical Topic Registry exists. → DONE
- Topic relationship model exists. → DONE
- Network subject module is complete. → DONE
- Network Crash Course, Golden Rules, Flashcards, Exam Traps, and Five-Minute Review exist. → DONE
- Network content is included in Last Night Mode. → DONE
- Assets are searchable and bookmarkable. → DONE
- Manual question-linking infrastructure exists. → DONE
- No topic/question relationship was fabricated. → DONE
- Safari tests pass. → DONE (106/106)

END OF FILE

---

# Milestone F - Database Knowledge Module

Priority: High

Objective: Create a complete Database educational module matching the Network module architecture and UI patterns.

## Status: COMPLETE

Tasks:

- [x] Create `content/subjects/database.js`
- [x] Create 25 Database topics with `frequencyStatus: "unknown"`
- [x] Create 25 concise Database crash-course lessons
- [x] Create 49 Database Golden Rules
- [x] Create 22 Database Exam Traps
- [x] Create 92 Database flashcards
- [x] Create Database Five-Minute Review
- [x] Integrate Database into Last Night Mode
- [x] Add Database routes and bookmark actions
- [x] Add focused Milestone F tests
- [x] Run Safari direct-file test suite once
- [x] Create concise QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Topics: 25
- Lessons: 25
- Golden Rules: 49
- Flashcards: 92
- Exam Traps: 22
- Five-Minute Reviews: 1
- Verified question mappings: 0
- Content origin: `expert-curated`
- Verification status: `expert-reviewed`
- Frequency status: `unknown`
- Safari test suite: PASS 116/116
- QA report: `qa/reports/milestone-f-database-report.md`

## Definition of Done

- Database subject exists. → DONE
- Topics, lessons, Golden Rules, Flashcards, Exam Traps, and Five-Minute Review exist. → DONE
- Last Night Mode includes Database. → DONE
- Search and bookmarks work. → DONE
- Validation passes. → DONE
- Safari tests pass. → DONE (116/116)

END OF FILE

---

# Milestone G - Operating System Knowledge Module

Priority: High

Objective: Create a complete Operating System educational module matching the existing subject-module architecture and UI patterns.

## Status: COMPLETE

Tasks:

- [x] Create `content/subjects/operating-system.js`
- [x] Create 26 OS topics with `frequencyStatus: "unknown"`
- [x] Create 26 concise OS crash-course lessons
- [x] Create 55 OS Golden Rules
- [x] Create 24 OS Exam Traps
- [x] Create 104 OS flashcards
- [x] Create OS Five-Minute Review
- [x] Integrate OS into Last Night Mode
- [x] Add OS routes and bookmark actions
- [x] Add focused Milestone G tests
- [x] Run Safari direct-file test suite once
- [x] Create concise QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Topics: 26
- Lessons: 26
- Golden Rules: 55
- Flashcards: 104
- Exam Traps: 24
- Five-Minute Reviews: 1
- Verified question mappings: 0
- Content origin: `expert-curated`
- Verification status: `expert-reviewed`
- Frequency status: `unknown`
- Safari test suite: PASS 126/126
- QA report: `qa/reports/milestone-g-operating-system-report.md`

## Definition of Done

- Operating System subject exists. → DONE
- Topics, lessons, Golden Rules, Flashcards, Exam Traps, and Five-Minute Review exist. → DONE
- Last Night Mode includes Operating System. → DONE
- Search and bookmarks work. → DONE
- Validation passes. → DONE
- Safari tests pass. → DONE (126/126)

END OF FILE

---

# Milestone H - Data Structures and Algorithms Knowledge Module

Priority: High

Objective: Create a complete Data Structures and Algorithms educational module matching the existing subject-module architecture and UI patterns.

## Status: COMPLETE

Tasks:

- [x] Create `content/subjects/data-structures.js`
- [x] Create 30 Data Structures topics with `frequencyStatus: "unknown"`
- [x] Create 30 concise Data Structures crash-course lessons
- [x] Create 60 Data Structures Golden Rules
- [x] Create 28 Data Structures Exam Traps
- [x] Create 120 Data Structures flashcards
- [x] Create Data Structures Five-Minute Review
- [x] Integrate Data Structures into Last Night Mode
- [x] Add Data Structures routes and bookmark actions
- [x] Add focused Milestone H tests
- [x] Run Safari direct-file test suite once
- [x] Create concise QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Topics: 30
- Lessons: 30
- Golden Rules: 60
- Flashcards: 120
- Exam Traps: 28
- Five-Minute Reviews: 1
- Verified question mappings: 0
- Content origin: `expert-curated`
- Verification status: `expert-reviewed`
- Frequency status: `unknown`
- Safari test suite: PASS 136/136
- QA report: `qa/reports/milestone-h-data-structures-report.md`

## Definition of Done

- Data Structures subject exists. → DONE
- Topics, lessons, Golden Rules, Flashcards, Exam Traps, and Five-Minute Review exist. → DONE
- Last Night Mode includes Data Structures. → DONE
- Search and bookmarks work. → DONE
- Validation passes. → DONE
- Safari tests pass. → DONE (136/136)

END OF FILE

---

# Milestone I - Learning and Review Engine

Priority: High

Objective: Transform the existing content library into a complete local study system without generating new educational content.

## Status: COMPLETE

Tasks:

- [x] Redesign Dashboard as the study hub
- [x] Add lightweight progress engine over existing user state
- [x] Add unified Review Queue
- [x] Add random study generators
- [x] Redesign Last Night Mode as one collapsible flow
- [x] Add Bookmark Center tabs, sorting, and search
- [x] Add grouped cross-subject search with highlighting
- [x] Track recently viewed items and session activity
- [x] Support difficult flashcards and random difficult review
- [x] Show subject progress from recorded activity only
- [x] Add lightweight statistics
- [x] Add Settings reset controls and keep export/import
- [x] Add focused Milestone I tests
- [x] Run Safari direct-file test suite once
- [x] Create QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Dashboard study hub: complete
- Review Queue priorities: difficult flashcards, bookmarked lessons, bookmarked flashcards, bookmarked rules, bookmarked traps, recent activity
- Random modes: flashcards, golden rules, exam traps, lessons, topics
- Progress: lessons, topics, flashcards, subjects, recent activity, session state
- Statistics: completed lessons, reviewed flashcards, bookmarks, review queue size, recent history, session duration
- Safari test suite: PASS 146/146
- QA report: `qa/reports/milestone-i-learning-engine-report.md`

## Definition of Done

- Dashboard becomes the study hub. → DONE
- Progress tracking works. → DONE
- Review Queue works. → DONE
- Random Study works. → DONE
- Unified Last Night Mode works. → DONE
- Bookmark Center works. → DONE
- Cross-subject search works. → DONE
- Recently Viewed works. → DONE
- Difficult Flashcards work. → DONE
- Subject progress works. → DONE
- Session tracking works. → DONE
- Lightweight statistics work. → DONE
- Settings support reset/import/export. → DONE
- Safari tests pass. → DONE (146/146)

END OF FILE

---

# Milestone J - Final Integration, Exam Workspace, and Release

Priority: High

Objective: Deliver a polished Safari-compatible direct-launch release combining exam archive, answer sheet workflows, four technical modules, and study systems.

## Status: COMPLETE

Tasks:

- [x] Complete Exams page for 1395-1404 with PDF/key links, embedded fallback, sections, custom ranges, counts, and verification labels
- [x] Complete answer sheet persistence, reset, navigation, deleted/multiple-answer handling, unresolved answers, and negative marking
- [x] Complete Practice Mode and Exam Mode final workflows
- [x] Add practical English answer-sheet workflow without English lessons
- [x] Verify four technical modules remain integrated with progress, bookmarks, search, and Last Night
- [x] Finalize Dashboard, Search, Bookmarks, Review Queue, and Last Night Mode
- [x] Run data integrity and storage/recovery checks
- [x] Add focused Milestone J tests
- [x] Run Safari direct-file suite once
- [x] Create release folder and zip package
- [x] Launch release package directly in Safari
- [x] Create QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Exam years: 1395-1404
- Question shells: 1,276
- Technical subjects: Network, Database, Operating System, Data Structures
- Safari test suite: PASS 156/156
- Release folder: `release/konkur-exam-companion/`
- Release zip: `release/konkur-exam-companion.zip`
- QA report: `qa/reports/milestone-j-final-release-report.md`

## Definition of Done

- All 10 exam years are accessible. → DONE
- English answer-sheet workflow works. → DONE
- Practice Mode and Exam Mode work. → DONE
- Negative marking, deleted questions, and multiple answers work. → DONE
- Four technical subject modules work. → DONE
- Dashboard, Search, Bookmarks, Review Queue, Last Night Mode, and Progress work. → DONE
- Release package exists and launches directly in Safari. → DONE
- No fixture data leaks into packaged runtime. → DONE
- No Critical or High QA issue remains. → DONE

END OF FILE

---

# Milestone K - Product Rebuild (UX First)

Priority: High

Objective: Make the feature-complete app feel like a polished exam-performance product instead of a database viewer, without changing architecture, storage, routing, or educational provenance.

## Status: COMPLETE

Tasks:

- [x] Rework primary navigation toward study-oriented flows
- [x] Rebuild Dashboard as a study command center
- [x] Rebuild Subject pages around guided study paths instead of raw content walls
- [x] Add focused one-item study players for reviews, Golden Rules, flashcards, and exam traps
- [x] Add inline lesson reader as the deepest Subject page level
- [x] Rebuild Last Night Mode as a rapid-review cockpit with subject packs preserved
- [x] Add CBT-style question palettes to Practice Mode and Exam Mode
- [x] Improve result review card presentation
- [x] Add shared UX styles and mobile action layout polish
- [x] Preserve educational content, source labels, storage, routes, and exam functionality
- [x] Run JavaScript syntax checks on changed feature files
- [x] Run Safari direct-file test suite
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Changed UX files: `index.html`, `tests/browser/test-runner.html`, `styles/components.css`, `styles/responsive.css`, `features/dashboard/dashboard-page.js`, `features/subjects/subjects-page.js`, `features/last-night/last-night-page.js`, `features/exam/practice-mode.js`, `features/exam/exam-mode.js`, `features/exam/exam-results-page.js`
- Safari test suite: PASS 156/156 W574 B229.0 S1.00
- No new educational content or verified-frequency claims introduced
- Release package was not repackaged in this milestone; current release folder remains the Milestone J package until explicitly rebuilt

## Definition of Done

- Study navigation and Dashboard command center work. → DONE
- Subject study flow is guided and lessons are not the first/deepest visible level. → DONE
- Last Night supports rapid review. → DONE
- Practice and Exam workspaces expose question palette states. → DONE
- Existing 156-test direct-file suite remains green. → DONE
- No Critical or High QA issue remains. → DONE

END OF FILE

---

# Milestone L - Critical Exam Workflow Repair

Priority: Critical

Objective: Repair the highest-priority exam workflow end-to-end before any further UX work.

## Status: COMPLETE

Tasks:

- [x] Reproduce the 1404 English section routing/workspace failure
- [x] Identify concrete root cause
- [x] Define canonical exam routes
- [x] Centralize exam route generation
- [x] Repair route parser and route parameter extraction
- [x] Repair Exams page section and custom-range actions
- [x] Repair 1404 English Practice workspace rendering
- [x] Repair Exam Mode start, recovery, submit, scoring, and completed lock
- [x] Keep Practice and Exam review inside the workspace
- [x] Disable deleted-question answer controls and preserve exclusion from scoring
- [x] Preserve multiple accepted-answer scoring
- [x] Add Dashboard Start English Practice action
- [x] Fix targeted Subject workflow regressions for Crash Course and lesson navigation
- [x] Add real browser UI E2E tests for critical exam and study flows
- [x] Run Safari direct-file suite
- [x] Run Safari route acceptance checklist
- [x] Rebuild release folder and zip
- [x] Smoke-test release English Practice route
- [x] Create QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Root cause: incompatible query-based exam links/router contract plus `exam-viewer.js` calling non-public `app.content.registry.localizedText`
- Safari test suite: PASS 161/161 W375 B239.0 S1.00
- Release folder: `release/konkur-exam-companion/`
- Release zip: `release/konkur-exam-companion.zip`
- QA report: `qa/reports/milestone-l-critical-exam-workflow-repair-report.md`

## Definition of Done

- English 1404 questions 1-25 open a visible workspace. → DONE
- Practice Mode works end-to-end. → DONE
- Exam Mode works end-to-end. → DONE
- Answers can be selected, changed, cleared, and persisted. → DONE
- Submission calculates score and review stays inside workspace. → DONE
- PDF fallback does not block answer sheet use. → DONE
- English workflow works without lessons. → DONE
- Crash Course opens real lesson content and Previous/Next work. → DONE
- Flashcards, Golden Rules, Exam Traps, and Last Night are interactable. → DONE
- End-to-end UI tests cover critical workflows. → DONE
- Manual Safari route checklist passes. → DONE
- Release package rebuilt and smoke-tested. → DONE
- No Critical or High issue remains. → DONE

END OF FILE

---

# Milestone N - English Exam Module

Priority: High

Objective: Add English as an exam-focused subject module using the existing application systems.

## Status: COMPLETE

Tasks:

- [x] Add English subject beside technical subjects
- [x] Add previous-exam English entry points using the existing Exam Engine
- [x] Add expert-curated vocabulary flashcards
- [x] Add reading skill pages
- [x] Add grammar cheatsheet pages
- [x] Add English flashcards, traps, and five-minute review
- [x] Integrate English into Subject pages, Search, Bookmarks, Progress, Review Queue, Last Night, and Statistics
- [x] Add focused Milestone N tests
- [x] Run Safari direct-file suite
- [x] Rebuild release folder and zip
- [x] Create QA report
- [x] Update `.ai/CURRENT_STATE.md`

Evidence:

- Vocabulary entries: 336
- Grammar pages: 14
- Reading pages: 10
- English flashcards: 360
- Safari test suite: PASS 169/169 W375 B295.0 S4.00
- QA report: `qa/reports/milestone-n-english-module-report.md`

## Definition of Done

- English appears beside the four technical subjects. → DONE
- Previous Exams entry works. → DONE
- Vocabulary module exists. → DONE
- Reading Skills module exists. → DONE
- Grammar Cheatsheet exists. → DONE
- Flashcards work. → DONE
- Search, bookmarks, progress, and Last Night work. → DONE
- Validation passes. → DONE
- Safari browser suite passes. → DONE
- No Critical or High QA issue remains. → DONE

END OF FILE

---

# RC1-B — Persian UI Consistency and Immediate UX Fixes

Priority: High

Objective: Implement low-risk, immediate Persian-first consistency and remove obvious dead ends identified in the RC1 UX audit.

## Status: COMPLETE

Tasks:

- [x] Translate Bookmarks page labels to Persian, format timestamps, add empty-state CTAs
- [x] Translate Review Queue labels, replace internal enums with human-readable Persian, add empty-state CTAs
- [x] Translate Search group labels, fix canonical exam-year route, improve empty state
- [x] Translate Statistics labels
- [x] Translate Settings confirmations and notifications
- [x] Fix Flashcards page dead-end with CTA to #/subjects
- [x] Add 7 focused RC1-B browser tests
- [x] Run Safari direct-file suite
- [x] Rebuild release package
- [x] Create QA report
- [x] Update documentation

Evidence:

- Safari test suite: PASS 176/176 W3440 B212.0 S1.00
- QA report: qa/reports/rc1-b-persian-consistency-report.md
- UX audit: qa/reports/rc1-full-ux-audit.md (not resolved; RC1-C through RC1-F remain)

## Definition of Done

- Bookmarks UI is fully Persian. → DONE
- Review Queue UI is fully Persian. → DONE
- Search group labels and empty states are Persian. → DONE
- Statistics labels are Persian. → DONE
- Settings messages and confirmations are Persian. → DONE
- Flashcards page is no longer a dead end. → DONE
- Empty states contain working CTAs. → DONE
- Internal enum values are not exposed. → DONE
- Exam-year search uses canonical route. → DONE
- Safari suite passes. → DONE

END OF FILE

---

# RC1-C — Information Architecture and Navigation

Priority: High

Objective: Restructure navigation, page hierarchy, and route clarity for study-oriented UX.

## Status: COMPLETE

Tasks:

- [x] Desktop navigation: 9-item sidebar in approved order with شب آخر added
- [x] Mobile navigation: 5-item bottom nav (داشبورد، آزمون‌ها، مطالعه، مرور، جست‌وجو)
- [x] Remove flashcards from primary navigation
- [x] Dashboard: single dominant hero CTA + quick actions + progress + recent + secondary links
- [x] Exams page: year selector + selected year detail (replaces 10 dense cards)
- [x] Subject pages: breadcrumbs, English previous exams collapsed
- [x] Last Night: subject packs collapsed by default in `<details>`
- [x] Review page: organized into 4 collapsible sections
- [x] Route active state matches child routes
- [x] Add 11 RC1-C browser tests
- [x] Run Safari direct-file suite
- [x] Create QA report
- [x] Update documentation

Evidence:

- Safari test suite: PASS 187/187 W3440 B210.0 S1.00
- QA report: qa/reports/rc1-c-information-architecture-report.md

## Definition of Done

- Desktop navigation follows approved order. → DONE
- Mobile navigation has 5 primary items. → DONE
- Subjects inside Study, not top-level. → DONE
- Dashboard has one dominant primary action. → DONE
- Study page lists five subjects. → DONE
- Subject pages prioritize Crash Course. → DONE
- Lessons collapsed by default. → DONE
- English Previous Exams collapsed by default. → DONE
- Exams page uses year selector + detail. → DONE
- Last Night subject packs collapsed by default. → DONE
- Flashcards removed from primary nav. → DONE
- Safari suite passes. → DONE

END OF FILE

---

# RC1-D — Layout, Typography, and Shared Component Consolidation

Priority: High

Objective: Improve visual hierarchy, Persian reading comfort, and component consistency.

## Status: COMPLETE

Tasks:

- [x] Establish final typography tokens (caption, body, section, hero, player, counter)
- [x] Consolidate hero-card/focus-card into surface-hero pattern
- [x] Consolidate command-card/path-card into action-card pattern
- [x] Consolidate command-grid/path-grid into action-grid pattern
- [x] Fix pathCard to use semantic <a> without nested button span
- [x] Dashboard subject progress uses inline progress bars
- [x] Lesson reader: progress count, sticky controls, reading width, hide empty sections
- [x] Flashcard player: prominent progress counter, action reorder, toast feedback
- [x] Golden Rules player: prominent progress counter, reviewed toast feedback
- [x] Exam Traps: structured labeled sections with colored borders
- [x] Last Night: prominent progress counter
- [x] Add 9 RC1-D browser tests
- [x] Run Safari direct-file suite
- [x] Create QA report
- [x] Update documentation

Evidence:

- Safari test suite: PASS 196/196 W3440 B209.0 S1.00
- QA report: qa/reports/rc1-d-layout-typography-components-report.md

## Definition of Done

- Typography is consistent and Persian-readable. → DONE
- Lesson width is comfortable (42rem). → DONE
- Duplicate card styles consolidated. → DONE
- Button hierarchy is consistent. → DONE
- Dashboard has strong visual hierarchy. → DONE
- Subject cards are consistent. → DONE
- Lesson reader shows progress and persistent navigation. → DONE
- Flashcard progress is prominent. → DONE
- Golden Rule reviewed feedback works. → DONE
- Exam Trap sections are visually distinct. → DONE
- Last Night rapid-review stage is visually focused. → DONE
- 320px layout passes. → DONE
- Safari suite passes. → DONE

END OF FILE
