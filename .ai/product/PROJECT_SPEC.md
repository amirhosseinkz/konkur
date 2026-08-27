# PROJECT_SPEC.md

# Computer Engineering MSc Exam Companion

Version: 1.0

Status: Product Specification

---

# Product Vision

Exam Companion is an offline-first study platform designed specifically for the Iranian Computer Engineering MSc entrance examination.

Unlike traditional educational systems, this application does not attempt to teach complete university courses.

Instead, it identifies the highest-value knowledge required to maximize exam score in the shortest possible preparation time.

Every feature, dataset, interaction and screen must contribute directly to exam performance.

---

# Target User

Primary User

Software Engineer

Typical Background

• Backend Developer
• Frontend Developer
• Mobile Developer
• Full Stack Developer

Characteristics

• Already knows programming
• Has forgotten university theory
• Limited study time
• Needs maximum efficiency

The product should always assume that the user is intelligent but underprepared.

---

# Product Goals

Primary Goal

Increase exam score.

Secondary Goals

Reduce study time.

Reduce cognitive load.

Increase confidence.

Improve memory retention.

Improve pattern recognition.

Create a repeatable review workflow.

---

# Non Goals

The application is NOT:

A university textbook.

An online course.

A video learning platform.

A PDF reader.

A generic quiz application.

A programming tutorial.

Any feature supporting those goals should not be implemented.

---

# Core Principles

Every feature must satisfy at least one of the following:

Help remember

Help recognize

Help answer faster

Help avoid traps

Help review mistakes

Otherwise the feature should not exist.

---

# Product Structure

Application

│

├── Dashboard

├── Subjects

│

├── English

├── Networks

├── Database

├── Operating System

├── Data Structures

│

├── Flashcards

├── Bookmarks

├── Wrong Answers

├── Statistics

├── Search

└── Settings

---

# Canonical Product Terminology

- Exam modes are `Practice Mode`, `Exam Mode`, `Review Mode`, and `Last Night Mode`.
- Work priorities are `Critical`, `High`, `Medium`, and `Low` only.
- Content hierarchy is `Subject`, `Topic`, `Lesson`, and `Educational Asset`.
- Every important Topic requires Flashcards.
- Every Subject requires exactly one canonical Five-Minute Review.
- Lessons may contain short recap sections, but those sections are not Five-Minute Reviews.
- Golden Rules may belong to Topics and must also be aggregated at Subject level without duplicating source claims.
- `.ai/product/EXAM_EDITOR.md` is the final educational-content gate.
- `.ai/engineering/QA_AGENT.md` is the final product-release gate.
- Dark mode is the initial and only supported appearance for version 1. Design tokens are required; selectable themes are not.
- `Unseen` means no submitted attempt exists. `Blank` means an attempt was submitted without an option. The product does not use `Skipped` as a separate persisted outcome.

---

# Dashboard

Dashboard is the first screen.

Dashboard answers immediately:

What should I study now?

What is my weakest subject?

What topics are unfinished?

How many questions have I solved?

How much progress have I made?

Which topic has highest priority?

Dashboard should never become a homepage full of buttons.

Dashboard is an intelligent overview.

On first use, recommendations remain `Insufficient data` until the user provides applicable planning inputs or completes relevant attempts. The application may request exam date, available study minutes, and selected Subjects; it must not invent a recommendation from missing data.

---

# Dashboard Widgets

Study Recommendation

Remaining Review

Today's Progress

Weekly Progress

Recent Mistakes

Weak Subjects

Bookmarked Topics

Recent Flashcards

Countdown To Exam

Quick Resume

---

# Navigation Philosophy

Navigation should require no learning.

Maximum depth:

3 levels.

Example

Subjects

↓

Networks

↓

TCP vs UDP

Never deeper.

---

# Subject Structure

Each subject follows exactly the same layout.

Subject

↓

Overview

↓

Five-Minute Review

↓

Golden Rules

↓

Crash Course

↓

Topics

↓

Flashcards

↓

Exam Traps

↓

Previous Questions

↓

Bookmarks

↓

Review

Consistency is mandatory.

---

# Subject Overview

Overview contains:

Importance

Difficulty

Exam frequency

Recommended study time

Expected score gain

Estimated completion time

---

# Study Time

Every lesson includes

Estimated Reading Time

Examples

2 min

5 min

8 min

Never exceed 15 minutes.

Large lessons must be split.

---

# Five-Minute Review

Purpose

Review before exam.

Contains

Only facts.

No explanations.

No paragraphs.

Maximum

One screen.

---

# Golden Rules

Contains

Exam shortcuts.

Examples

Reliable → TCP

DNS → UDP

Semaphore → Mutual Exclusion

Queue → BFS

Stack → DFS

Hash → Average O(1)

Rules should be visual.

Minimal text.

---

# Crash Course

Purpose

Teach one topic quickly.

Contains

Concept

Memory Trick

Designer Trap

Common Mistake

Related Questions

Flashcards

Summary

Never exceed 10 minutes.

---

# Topics

Each topic contains

Title

Importance

Frequency

Estimated Time

Difficulty

Summary

Lesson

Golden Rules

Exam Traps

Flashcards

Related Questions

Related Topics

Bookmarks

# Exam Engine

The Exam Engine is the heart of the application.

It must simulate the real MSc entrance examination while also supporting fast review.

The same dataset powers both learning mode and exam mode.

---

# Exam Modes

The application supports four modes.

## 1. Practice Mode

Purpose

Learning.

Characteristics

Immediate answer checking.

Explanations available.

Hints available.

Timer optional.

Wrong answers highlighted.

Translation available.

Progress saved automatically.

---

## 2. Exam Mode

Purpose

Simulate real exam.

Characteristics

No hints.

No explanations.

No translation.

No answer visibility.

Negative marking enabled.

Verified official timing when available; otherwise the session is clearly labeled custom or timing unknown.

Result only after submission.

---

## 3. Review Mode

Purpose

Review previous mistakes.

Contains only:

Wrong questions

Bookmarked questions

Blank questions

Time consuming questions

Deleted questions

---

## 4. Last Night Mode

Purpose

Final review before exam.

Contains only

Golden Rules

Flashcards

High Frequency Topics

Exam Traps

Five-Minute Reviews

Approved bookmarks and recent mistakes that resolve to concise Last Night Mode assets

No theory.

No long lessons.

No full Crash Courses or full exam simulations.

---

# Question Model

Each question contains

Question ID

Year

Question Number

Subject

Topic

Verified Text Or Image Status

Question Text Or Image References

Four Or More Question Options When Source Is Complete

Response Mode

Difficulty

Frequency

Official Answer

Official Source

Designer Notes

Explanation

Wrong Option Analysis

Related Lessons

Related Flashcards

All immutable fields and provenance follow `content/schemas/content-schemas.md`. Bookmarks, attempts, and review state are mutable user state and never belong to the Question record.

---

# User Question States

Attempt outcome, bookmark state, and Review Queue state are independent mutable records defined in `core/storage/user-state-schema.md`. They may coexist and must not be collapsed into one Question status.

---

# Question Metadata

Every question should store

Year

Question Number

Source

Official Answer Key

Difficulty

Estimated Solve Time

Common Mistake

Exam Frequency

Related Topics

---

# Answer Explanation

Every question explanation follows the same structure.

Correct Answer

↓

Reason

↓

Why other options are wrong

↓

Exam Trap

↓

20 Second Strategy

↓

Memory Trick

↓

Related Questions

---

# Wrong Option Analysis

Never explain only the correct answer.

Every incorrect option must have a reason.

Example

Option A

Looks correct because...

Fails because...

Option B

Common student mistake...

Option C

Old exam trap...

Option D

Correct.

---

# Memory Tricks

Every important concept should include

One memory trick.

Example

TCP

Think:

Telephone Call

Reliable

Ordered

Connection

UDP

Think:

Radio Broadcast

Fast

No guarantee

No ordering

---

# Exam Traps

Every repeated mistake becomes an Exam Trap.

Structure

Trap

↓

Why students choose it

↓

Correct thinking

↓

Previous exams

↓

Shortcut

---

# Similar Questions

Every important question links to similar questions.

Related Question records use stable verified Question IDs and a declared relationship type. No illustrative year/question reference may be treated as source evidence.

The user can jump directly.

---

# Flashcards

Every important topic has flashcards.

Each flashcard contains

Front

Back

Difficulty

Importance

Related Topics

Related Questions

Review history belongs only to mutable Flashcard Review State in `core/storage/user-state-schema.md`.

---

# Flashcard Rules

Maximum

One concept.

Maximum

Three lines.

No paragraphs.

No theory.

---

# Flashcard Categories

Definition

Shortcut

Formula

Difference

Trap

Memory Trick

Comparison

Fact

---

# Golden Rules

Every subject contains a Golden Rules page.

Only

Short bullets.

Examples

Semaphore

Mutual Exclusion

Deadlock

4 Conditions

Reliable

TCP

Streaming

UDP

No explanations.

---

# High Frequency Topics

Topics ranked

★★★★★

★★★★☆

★★★☆☆

★★☆☆☆

★☆☆☆☆

Ranking must be derived from previous exams.

Never estimate.

If uncertain

Mark

Frequency Unknown.

---

# Crash Course

Each subject contains

Crash Course.

Structure

Introduction

↓

Most Important Concepts

↓

Golden Rules

↓

Repeated Questions

↓

Common Traps

↓

Five-Minute Review

↓

Flashcards

↓

Quick Quiz

---

# Topic Page

Every topic page contains

Overview

Summary

Lesson

Golden Rules

Exam Traps

Flashcards

Related Questions

Previous Exams

Bookmarks

Review Status

---

# Subject Progress

Each subject tracks

Completion

Flashcards Reviewed

Questions Solved

Wrong Questions

Bookmarks

Estimated Score

Weak Topics

Strong Topics

---

# Learning Path

Each subject defines

Recommended Order.

Example

Networks

1.

TCP vs UDP

2.

OSI

3.

IP

4.

Routing

5.

Subnetting

6.

HTTP

7.

DNS

8.

Congestion Control

The user should never wonder

"What should I study next?"

---

# Review Priority

Wrong Questions

↓

Weak Topics

↓

Bookmarked Educational Assets

↓

Everything Else, with due Flashcards and unfinished Lessons ahead of untouched low-value material

---

# Question Filters

Filter by

Year

Subject

Topic

Difficulty

Bookmarked

Wrong

Solved

Blank

Unseen

Frequency

Estimated Solve Time

---

# Search

Search must include

Lessons

Flashcards

Golden Rules

Questions

Topics

Traps

Years

Summaries

Memory Tricks

Everything.

---

# Search Ranking

Exact ranking weights, normalization, matching classes, tie-breaking, and grouping are defined only in `core/search/SEARCH_SPEC.md`.

---

# Translation

Translation is optional.

Hidden by default.

Translation never replaces English.

English remains primary.

Persian is a helper.

---

# Official Answer Keys

Every year links to

Official Answer Key.

Never replace official answers with generated answers.

Generated explanations are allowed.

Generated answers are not.

---

# Offline Behaviour

Everything except remote PDFs must work offline.

If internet is unavailable

Lessons

Flashcards

Questions

Search

Statistics

Bookmarks

must still work.

---

# Error Handling

No data

↓

Empty state

No internet

↓

Offline mode

Broken PDF

↓

Open official source

Missing translation

↓

Show English

Application must never fail completely.

# Data Architecture

The application must keep educational content completely separated from presentation logic.

Never hardcode educational information inside UI components.

All educational content must live inside structured data files.

---

# Content Sources

The application stores independent immutable content datasets:

Lessons

Flashcards

Golden Rules

Exam Traps

Exam Questions

Official Answer Keys

Subject Metadata

Topic Metadata

Mutable settings, attempts, bookmarks, review progress, and Statistics snapshots belong only to the namespaced user-state object defined by `core/storage/user-state-schema.md`. The Search Index is derived and rebuildable. Every immutable content dataset is replaceable without changing UI code.

---

# Conceptual Content Relationships

This section is a non-normative product inventory. It does not define object fields or nesting. The only canonical immutable record fields are in `content/schemas/content-schemas.md`; the only canonical mutable fields are in `core/storage/user-state-schema.md`. Every relationship below is implemented by stable ID references.

Subject

↓

Topic

↓

Lesson

↓

Flashcards

↓

Golden Rules

↓

Exam Traps

↓

Previous Questions

Every object references other objects using IDs.

Never duplicate information.

---

# Subject Product Inventory

Each subject contains

id

title

icon

difficulty

estimatedStudyTime

importance

examFrequency

topics

summary

goldenRules

flashcards

reviewOrder

---

# Topic Product Inventory

Each topic contains

id

subjectId

title

difficulty

importance

frequency

estimatedReadingTime

summary

lesson

goldenRules

examTraps

flashcards

relatedQuestions

relatedTopics

memoryTricks

---

# Lesson Product Inventory

Each lesson contains

Title

Short Summary

Main Content

Quick Rules

Common Mistakes

Related Flashcards

Related Questions

Estimated Reading Time

Bookmark and progress state belongs only to `core/storage/user-state-schema.md`.

---

# Flashcard Product Inventory

Front

Back

Importance

Difficulty

Category

Related Topic

Related Questions

Review and bookmark state belongs only to `core/storage/user-state-schema.md`.

---

# Question Product Inventory

Question ID

Year

Question Number

Subject

Topic

Difficulty

Official Answer

Deleted Question Flag

Official Answer references with one or more accepted option IDs

Explanation

Wrong Option Analysis

Memory Trick

Related Lesson

Related Flashcards

Related Questions

Estimated Solve Time

Attempts, bookmarks, and review state belong only to `core/storage/user-state-schema.md`.

---

# Exam Trap Product Inventory

Trap

Reason

Typical Student Mistake

Correct Thinking

Shortcut

Related Questions

Frequency

---

# Statistics Product Inventory

Statistics are mutable derived user state, not immutable content. Canonical fields and cache behavior are defined in `core/storage/user-state-schema.md`.

Track

Questions Solved

Correct

Wrong

Blank

Bookmarked

Flashcards Reviewed

Lessons Completed

Average Solve Time

Estimated Exam Score

Study Time

Completion Percentage

Weakest Topics

Strongest Topics

---

# Storage

Use LocalStorage.

No backend.

No login.

Everything should remain available after browser restart.

---

# Storage Keys

All mutable state is stored under one namespaced root key:

`konkurExamCompanion`

The root object contains versioned settings, progress, attempts, Exam Sessions, bookmarks, review state, Search History, Statistics snapshots, and optional Translation Cache data as defined in `core/storage/user-state-schema.md`.

Subjects, Questions, Lessons, Flashcards, Golden Rules, Exam Traps, and other immutable Educational Assets are not copied into LocalStorage.

---

# Search Engine

The search engine indexes

Topics

Lessons

Flashcards

Golden Rules

Exam Traps

Questions

Years

Memory Tricks

Subject Names

Search should work offline.

---

# Search Ranking

`core/search/SEARCH_SPEC.md` is the canonical search contract and supersedes informal ranking lists.

---

# Bookmark System

User can bookmark

Lessons

Topics

Flashcards

Questions

Golden Rules

Exam Traps

Bookmarks are grouped automatically.

---

# Review Queue

Review Queue priority

Wrong Questions

↓

Weak Topics

↓

Bookmarked Lessons
and other Bookmarked Educational Assets

↓

Everything Else, with due Flashcards and unfinished Lessons ahead of untouched low-value material

---

# Weak Topic Detection

Weakness is determined by

Wrong Answers

Low Accuracy

Long Solve Time

Repeated Mistakes

Never by study duration alone.

---

# Strong Topic Detection

High Accuracy

Fast Solve Time

Repeated Correct Answers

Consistent Performance

---

# Estimated Exam Score

Version 1 architecture does not define an Estimated Exam Score formula. The value remains `Insufficient data` and null until a future ADR defines verified subject weights, minimum sample size, attempt recency, confidence behavior, formula versioning, and validation evidence.

No implementation may derive or display a numeric estimate from an informal input list. A future value must always be labeled `Estimated`, never official.

---

# Performance Budget

First Paint

< 1 second

Navigation

Instant

Search

< 100 ms

Flashcard Open

Instant

Lesson Open

Instant

Statistics

< 300 ms

---

# Accessibility

Full keyboard navigation

Visible focus states

Readable typography

Responsive layout

High contrast

No color-only indicators

Large touch targets

---

# Responsive Layout

Desktop

Tablet

Phone

Landscape

Portrait

Everything must remain usable.

---

# Error Recovery

If LocalStorage is corrupted

↓

Reset only corrupted dataset

Never wipe everything.

If PDF fails

↓

Offer official download

If translation fails

↓

Display original English

If statistics fail

↓

Recalculate automatically

---

# Code Organization

## Canonical Physical Structure

The repository uses this physical structure. New top-level application folders require an ADR.

```text
Konkur/
|-- index.html
|-- assets/
|   |-- icons/
|   `-- images/
|-- core/
|   |-- bootstrap/
|   |-- router/
|   |-- storage/
|   |-- state/
|   |-- search/
|   |-- validation/
|   `-- ui/
|-- features/
|   |-- dashboard/
|   |-- subjects/
|   |-- exam/
|   |-- flashcards/
|   |-- bookmarks/
|   |-- review/
|   |-- statistics/
|   |-- search/
|   `-- settings/
|-- content/
|   |-- registry/
|   |-- schemas/
|   |-- subjects/
|   |-- exams/
|   |-- answer-keys/
|   |-- lessons/
|   |-- flashcards/
|   |-- golden-rules/
|   |-- exam-traps/
|   `-- sources/
|-- styles/
|   |-- tokens.css
|   |-- base.css
|   |-- layout.css
|   |-- components.css
|   `-- responsive.css
|-- tests/
|   |-- unit/
|   |-- fixtures/
|   `-- browser/
|-- qa/
|   |-- reports/
|   `-- templates/
`-- .ai/
```

The documentation-only Sprint 0 creates only folders needed to hold architecture contracts. Application files and empty application folders are created during Sprint 1.

## Dependency Boundaries

- Features may depend on public contracts exposed by `core`.
- Features must not depend directly on unrelated features.
- Behavior shared by multiple features belongs in the smallest appropriate `core` module.
- `features/search` owns search screens and interactions; `core/search` owns indexing, normalization, ranking, and query behavior.
- Immutable educational content belongs in `content` and is registered through `content/registry`.
- Mutable user state is accessed only through `core/storage` and coordinated through `core/state` where necessary.
- Rendering code must not own, mutate, or embed educational content.
- Direct `localStorage` access outside the `core/storage` adapter is prohibited.
- Content may reference other content only through stable IDs defined by the canonical schemas.
- `core` must not depend on feature rendering code.

UI never owns data.

Data never knows UI.

Business logic never manipulates HTML directly.

Rendering layer should remain thin.

---

# Feature Completion Checklist

Every feature is complete only if

UI implemented

Responsive

Accessible

Offline

Searchable

Bookmarked

Integrated

Statistics updated

Manual testing completed

No placeholder remains

---

# Future Expansion

Architecture must support

More Subjects

More Exam Years

More Flashcards

More Languages

Local AI

Question Generator

OCR

Image Questions

Without major refactoring.

---

# Project Roadmap

The single active dependency-ordered roadmap is `.ai/TASKS.md`. Product sections describe required capabilities but do not override Sprint prerequisites or task order.

---

# Definition of Done

The project is complete only when

Every lesson exists.

Every flashcard exists.

Every important topic has Golden Rules.

Every repeated exam trap is documented.

Every previous question is linked.

Every official answer key is included.

Every explanation is written.

Every screen is responsive.

Everything works offline except remote PDFs and optional translation acquisition.

No TODO remains.

No placeholder exists.

No unfinished page exists.

No broken navigation exists.

No duplicate content exists.

The application genuinely helps a software engineer maximize their MSc entrance exam score in minimum time.

---

END OF PROJECT SPECIFICATION
