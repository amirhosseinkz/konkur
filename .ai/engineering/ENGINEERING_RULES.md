# ENGINEERING_RULES.md

# Engineering Rules

Version: 1.0

---

# Mission

Build software that can be maintained for years.

Not days.

Code quality is more important than coding speed.

Never sacrifice architecture for convenience.

---

# Engineering Philosophy

Always think as a Senior Software Engineer.

Never write code to "make it work."

Write code that is

Correct

Maintainable

Readable

Reusable

Testable

Extensible

---

# Architecture

The project follows

Feature First

Architecture.

Never organize code by file type.

Always organize by feature.

Correct

subjects/

network/

database/

operating-system/

Wrong

pages/

components/

helpers/

utils/

---

# Separation of Concerns

Every layer has one responsibility.

UI

↓

Presentation

↓

Application Logic

↓

Data

↓

Storage

Never mix responsibilities.

---

# Single Responsibility Principle

Every function

One job.

Every class

One job.

Every module

One responsibility.

---

# File Size

Preferred

< 300 lines

Maximum

500 lines

If larger

split it.

---

# Function Size

Preferred

< 30 lines

Maximum

60 lines

---

# Function Rules

Functions should

Do one thing

Return one result

Avoid side effects

Never manipulate unrelated state

---

# Variable Naming

Names must explain intent.

Good

currentQuestion

reviewQueue

estimatedScore

Bad

obj

tmp

value

data2

---

# Component Rules

Components

must be

Small

Reusable

Stateless whenever possible

Never duplicate UI.

---

# Business Logic

Business logic never belongs

inside rendering code.

Wrong

onclick

↓

50 lines

Correct

onclick

↓

call function

↓

business logic elsewhere

---

# Data Rules

Educational data

must never be hardcoded

inside UI.

All lessons

flashcards

questions

golden rules

must come from datasets.

---

# Constants

Never use magic numbers.

Good

MAX_FLASHCARD_LINES

Bad

3

appearing everywhere.

---

# Configuration

Everything configurable

belongs in configuration files.

Never hardcode URLs.

Never hardcode limits.

---

# Search

Search must index

Lessons

Topics

Flashcards

Golden Rules

Exam Traps

Questions

Search engine

must remain independent.

---

# Local Storage

Wrap LocalStorage

inside one module.

Never access

localStorage

directly

throughout the project.

---

# Error Handling

Never ignore exceptions.

Every error should

Recover

Fallback

Notify

Never crash.

---

# Logging

Console logging

only during development.

No debug logging

in production.

---

# Null Handling

Never assume

data exists.

Always validate.

---

# Defensive Programming

Check inputs.

Check outputs.

Check datasets.

Check IDs.

Fail safely.

---

# Performance

Avoid unnecessary rendering.

Avoid duplicated parsing.

Avoid repeated calculations.

Cache expensive work.

Lazy load when appropriate.

---

# DOM Rules

Minimize DOM updates.

Batch updates.

Never rebuild

large trees

without need.

---

# Accessibility

Keyboard navigation

required.

Focus states

required.

ARIA labels

when needed.

Readable contrast.

---

# Responsiveness

Support

Desktop

Tablet

Phone

Landscape

Portrait

No horizontal scrolling.

---

# CSS Rules

Use variables.

No inline styles.

Avoid !important.

Component-based styling.

Consistent spacing.

Consistent typography.

---

# JavaScript Rules

Use modern JavaScript.

Prefer

const

over

let.

Avoid

var.

Prefer

map

filter

reduce

when readability improves.

Avoid deep nesting.

Maximum nesting

3 levels.

---

# Async Rules

Never block UI.

Always show loading state.

Always recover from failure.

---

# State Management

Single source of truth.

No duplicated state.

Derived state

should not be stored.

---

# Reusability

Before writing code

ask

Can this be reused?

If yes

extract it.

---

# Duplication

No duplicated logic.

No duplicated styles.

No duplicated datasets.

Rule

DRY

Always.

---

# Documentation

Public functions

must explain

WHY

not

WHAT.

Avoid obvious comments.

---

# Code Review Checklist

Can another engineer understand this in 30 seconds?

If not

rewrite.

---

# Naming Convention

camelCase

variables

functions

PascalCase

classes

components

UPPER_CASE

constants

kebab-case

files

---

# Folder Rules

## Canonical Repository Structure

```text
Konkur/
|-- index.html
|-- assets/{icons,images}/
|-- core/{bootstrap,router,storage,state,search,validation,ui}/
|-- features/{dashboard,subjects,exam,flashcards,bookmarks,review,statistics,search,settings}/
|-- content/{registry,schemas,subjects,exams,answer-keys,lessons,flashcards,golden-rules,exam-traps,sources}/
|-- styles/{tokens.css,base.css,layout.css,components.css,responsive.css}
|-- tests/{unit,fixtures,browser}/
|-- qa/{reports,templates}/
`-- .ai/
```

`index.html` is created in Sprint 1, not during architecture closure.

## Dependency Rules

- Features may depend on `core` public APIs.
- Features must not import or call unrelated features directly.
- Shared behavior belongs in `core`; feature-specific behavior remains in its feature.
- Immutable educational content belongs in `content` and contains no rendering behavior.
- Mutable user state belongs behind the `core/storage` adapter.
- Rendering code receives content and state; it does not own either.
- Direct `localStorage` access outside `core/storage` is prohibited.
- `features/search` presents search; `core/search` implements the engine.
- Cross-content relationships use stable IDs, never duplicated embedded records.
- Classic deferred scripts expose public APIs through one controlled application namespace because the direct-file runtime does not use ES modules.

Each feature owns its UI, feature-specific logic, and optional presentation assets. It may own feature configuration that is not educational content. Immutable Educational Assets are owned only by `content`; mutable user data is owned only through `core/storage`.

---

# Script Dependencies

The direct-file initial release uses classic deferred scripts, not ES module imports.

Dependencies are declared through documented `index.html` script order and public APIs on the controlled application namespace.

Feature scripts may consume `core` public APIs but must not reach into private core state or unrelated features.

Avoid circular initialization and hidden global variables.

## Canonical Deferred Script Order

`index.html` loads classic deferred scripts in this dependency order:

1. Controlled application namespace declaration
2. Shared constants and schema definitions
3. Core validation APIs
4. Content dataset registry API
5. Immutable source and Educational Asset registration files
6. Core storage adapter and migration APIs
7. Core state coordination
8. Core search normalization, indexing, and query APIs
9. Core router and shared UI APIs
10. Feature logic and feature UI registration files
11. Final bootstrap start script

The final bootstrap validates registered datasets, restores validated user state, builds derived search structures, registers routes, renders the shell, and starts hash routing. No earlier script starts the application as a side effect. A missing or failed dependency blocks bootstrap with a recoverable diagnostic rather than partially starting features.

---

# Dependencies

Every dependency

must justify itself.

Avoid libraries

when native JavaScript

solves the problem.

---

# Testing Mindset

Every feature

must be manually testable.

Every bug

must be reproducible.

Never close

an unverified bug.

---

# Offline First

Application should remain usable

without internet

except

PDF viewing

and optional translation.

---

# Progressive Enhancement

Core functionality

must work

before optional features.

Search

works

without AI.

Lessons

work

without translation.

Flashcards

work

without internet.

---

# Security

Never trust user input.

Escape HTML.

Validate URLs.

Avoid eval.

Avoid inline script generation.

---

# Quality Score

Every feature is scored.

Architecture

Readability

Performance

Accessibility

Maintainability

Reusability

If any category

is weak

refactor before continuing.

---

# Refactoring Rule

Leave every file

better

than you found it.

---

# Done Definition

A feature is complete only when

Works

Responsive

Accessible

Offline

Searchable

Integrated

Documented

No duplication

No TODO

No placeholder

No known bug

---

# Final Engineering Principle

Build software that another senior engineer would enjoy maintaining.

If the code only works today,

it is unfinished.
