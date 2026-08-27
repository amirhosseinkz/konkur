# DECISIONS.md

> Historical Prototype Zero decision log through ADR-0023. Production decisions continue under `/docs/decisions/` and may supersede prototype decisions.

# Architecture Decision Record (ADR)

Project:
Computer Engineering MSc Exam Companion

Status:
Living Document

Purpose:
This document records every important architectural and product decision.

Before changing any architecture, read this file.

If a decision changes,
append a new ADR.

Never rewrite history.

---

# ADR-0001

Title

Offline First

Status

Accepted

Reason

Students should be able to study anywhere.

Internet should not be required.

Only remote PDFs may require internet.

Consequences

Educational content stored locally.

Search works offline.

Bookmarks work offline.

Statistics work offline.

Review queue works offline.

---

# ADR-0002

Title

Vanilla JavaScript

Status

Accepted

Reason

No build step.

Maximum portability.

Runs by opening index.html.

Easy sharing.

Consequences

No React.

No Vue.

No Angular.

Prefer native browser APIs.

---

# ADR-0003

Title

Feature First Architecture

Status

Accepted

Reason

Features evolve independently. Immutable Educational Assets require one canonical repository-wide registry so search, provenance, linking, and validation do not duplicate records.

Improves maintainability.

Consequences

Application behavior and UI are organized by feature. Immutable Educational Assets belong under `content`, shared infrastructure belongs under `core`, and mutable user state belongs behind `core/storage`.

---

# ADR-0004

Title

Exam Driven Learning

Status

Accepted

Reason

This application exists to improve exam score.

Lessons originate from previous exams.

Not textbooks.

Consequences

Questions

↓

Patterns

↓

Lessons

Never reverse.

---

# ADR-0005

Title

Golden Rules

Status

Accepted

Reason

Students remember rules better than paragraphs.

Consequences

Every verified repeated pattern that yields a concise recognition rule may produce a Golden Rule. Every Subject aggregates its approved Topic-level Golden Rules. Never fabricate a rule merely because a Topic is important.

---

# ADR-0006

Title

Flashcards

Status

Accepted

Reason

Fast review.

Memory reinforcement.

Consequences

Every important Topic requires Flashcards. Each Flashcard contains one concept.

Maximum three lines.

---

# ADR-0007

Title

Exam Traps

Status

Accepted

Reason

Most mistakes come from repeated misconceptions.

Consequences

Every verified repeated trap is documented for its related Topics. Never fabricate a trap merely because a Topic is important.

---

# ADR-0008

Title

Question Linking

Status

Accepted

Reason

Students should recognize patterns across years.

Consequences

Every topic links to previous questions.

Every question links to related questions.

---

# ADR-0009

Title

Content Quality

Status

Accepted

Reason

AI-generated educational content can hallucinate.

Consequences

Every educational asset must pass

Exam Analysis

↓

Exam Editor

↓

QA

before publication.

---

# ADR-0010

Title

No Placeholder Policy

Status

Accepted

Reason

Incomplete educational software is misleading.

Consequences

No TODO.

No Lorem Ipsum.

No Fake Data.

---

# ADR-0011

Title

Search First

Status

Accepted

Reason

Students should never browse for information.

Everything should be searchable.

Consequences

Every educational asset must be indexed.

---

# ADR-0012

Title

Developer-Oriented Teaching

Status

Accepted

Reason

Target user is a software engineer.

Consequences

Use developer analogies.

Avoid unnecessary academic explanations.

---

# ADR-0013

Title

Educational Priority

Status

Accepted

Priority

Previous Questions

↓

Official Keys

↓

Patterns

↓

Golden Rules

↓

Lessons

↓

Theory

Consequences

Theory never comes first.

---

# ADR-0014

Title

Review Queue

Status

Accepted

Reason

Wrong answers provide highest learning value.

Consequences

Priority

Wrong Questions

↓

Weak Topics

↓

Bookmarks

↓

Everything Else

---

# ADR-0015

Title

Documentation First

Status

Accepted

Reason

Large AI-assisted projects lose context.

Consequences

Every coding session begins by reading

.ai/CURRENT_STATE.md

---

# ADR-0016

Title

Small Files

Status

Accepted

Reason

AI performs better with modular code.

Consequences

Prefer many focused files.

Avoid giant files.

---

# ADR-0017

Title

Educational Database

Status

Accepted

Reason

Educational content changes faster than UI.

Consequences

Lessons

Flashcards

Golden Rules

Exam Traps

Questions

must live outside rendering code.

---

# ADR-0018

Title

No Hallucination Policy

Status

Accepted

Reason

Incorrect educational content damages trust.

Consequences

Unknown is preferred over fabricated facts.

Never invent

frequencies

exam statistics

official answers

references

---

# ADR-0019

Title

Current State Is Source Of Truth

Status

Accepted

Reason

AI loses conversational context.

Consequences

`.ai/CURRENT_STATE.md` overrides memory.

Never continue development without reading it.

---

# ADR-0020

Title

Definition of Success

Status

Accepted

Reason

Success is measurable.

Project success is NOT

Lines of code.

Number of pages.

Amount of content.

Success is

Higher exam score.

Faster review.

Better retention.

Better confidence.

---

# ADR-0021

Title

Direct-File Runtime Contract

Status

Accepted

Date

2026-07-14

Context

The application must run without Node.js, npm, a build step, a local web server, or internet access. Direct `file://` launch restricts ES module loading, runtime JSON fetching, service workers, and history-based route fallback in supported browsers.

Considered Alternatives

Alternative 1

ES modules with runtime JSON `fetch` and a local static server.

Rejected because it requires a server and violates direct-file launch.

Alternative 2

A framework and generated production bundle.

Rejected because it introduces a build step and runtime tooling outside the accepted architecture.

Alternative 3

A service-worker-based Progressive Web Application.

Rejected for the initial release because service workers require a secure HTTP context and cannot provide the direct `file://` contract.

Decision

- The application must support opening `index.html` directly through `file://`.
- Application scripts use classic JavaScript files loaded with `defer`; ES modules are not used in the direct-file initial release.
- Core educational datasets are not loaded through runtime JSON `fetch`.
- Educational dataset files are JavaScript files that register immutable records through the content dataset registry.
- The application uses hash-based routing so navigation does not require server fallback.
- Node.js, npm, a build step, and a local web server are not required to run the application.
- Service workers are outside the direct-file initial release.
- Remote PDFs and optional translation may require internet access.
- Core learning, search, storage, bookmarks, statistics, review, and exam features must work without internet access.

Consequences

- Script order is explicit in `index.html` and is part of the runtime contract.
- Shared runtime APIs must be exposed through one controlled application namespace rather than module imports.
- Dataset files must contain registration calls, not executable feature or rendering logic.
- Dataset registration must reject duplicate IDs and invalid records before publication.
- Routes use hash fragments and must remain functional after refresh and direct linking.
- Browser testing must include direct `file://` launch, storage persistence, and hash navigation.
- Optional network failures must degrade gracefully without blocking core functionality.
- If a future release adopts HTTP hosting, ES modules, or service workers, it requires a new superseding ADR and must preserve a documented migration path.

---

# Future ADRs

Every future architectural decision must follow this format.

ADR Number

Title

Status

Reason

Alternatives

Decision

Consequences

Date

Never modify previous ADRs.

Append new records only.

---

# ADR-0022

Title

Separate Source Registry

Status

Accepted

Date

2026-07-14

Context

Official examination sources (papers, answer keys, corrections) have different structural requirements from general educational content records. Source records use their own provenance envelope without the common educational approval fields. They need dedicated cross-reference validation (paper-to-key-to-correction chains), checksum verification, and acquisition status tracking.

Considered Alternatives

Alternative 1

Reuse the existing dataset registry for source records.

Rejected because source records have a fundamentally different envelope (no educationalApproval, no publicationStatus, different verification statuses) and would require special-case logic throughout the general registry.

Alternative 2

Embed source validation inside the general validators module.

Rejected because it would create a large monolithic validator file and blur the boundary between educational content validation and source provenance validation.

Decision

- Source records are managed by a dedicated `SourceRegistry` class in `content/sources/source-registry.js`.
- Source validation is in `content/sources/source-validation.js` with pure functions for record, dataset, cross-reference, and status transition validation.
- The source inventory is in `content/sources/source-inventory.js` and registers placeholder records at application load time.
- Source records use canonical statuses: `pending-acquisition`, `acquired-unverified`, `partially-verified`, `verified`, `disputed`, `unavailable`.
- Exam-specific validators in `core/validation/exam-validators.js` extend the general validators with question, option, answer, and correction detail checks.
- Official correction precedence is implemented as a pure function `resolveOfficialAnswer` in `features/exam/answer-resolver.js`.

Consequences

- Source and educational content validation are separated but both available through the `KonkurApp` namespace.
- The source registry is loaded after the general dataset registry and before storage.
- Bootstrap asserts both registries are present before starting.
- The source-status UI page reads from the source registry's inventory summary.
- Checksum tooling is provided as both a Python script and browser HTML tool, neither of which is required at runtime.
- No new runtime dependencies (Node.js, npm, server) are introduced.

---

# ADR-0023

Title

Multi-Family Exam Catalog

Status

Accepted

Date

2026-08-27

Context

The current product is limited to the Computer Engineering Master's Entrance Exam. The next product must support both National Entrance Exam and Master's Entrance Exam sources. A year alone cannot identify a source because each family has multiple groups, exam sets, and potentially separate papers in the same year.

Decision

- Version 1 supports `national-entrance` and `masters-entrance` as first-class exam families.
- National Entrance Exam groups are Mathematics and Physics, Experimental Sciences, Humanities, Arts, and Foreign Languages.
- Master's exam-set identity, code, and title are taken only from the official annual booklet.
- Each source record must identify its family, group or exam set, year, paper where applicable, and artifact type before expanded catalog data is registered.
- Doctoral Entrance Exam remains out of scope, but the identity model reserves family-level extension for it.
- Official Sanjesh archive pages and publisher files are authoritative. Third-party pages are discovery aids only.

Consequences

- The current single-exam-per-year source inventory cannot be reused for expanded catalog data without a source-schema revision and migration plan.
- Existing Computer Engineering records retain their provenance and `legacy-unverified` status until official sources are acquired and verified.
- The annual catalog is generated from official booklets; it is never a permanently hard-coded list copied from an unofficial source.
- Source acquisition begins with catalog documents before question ingestion, preventing orphaned papers and ambiguous grouping.

---

END OF FILE
