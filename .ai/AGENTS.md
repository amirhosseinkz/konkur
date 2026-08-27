# AGENTS.md

> Historical Prototype Zero instructions. Production-platform agents must follow `/AGENTS.md`, `/project/context.yaml`, and `/project/state.yaml`. This file must not override production decisions.

# Computer Engineering MSc Exam Companion

Version: 1.0

---

# Mission

Your mission is to build the highest quality offline Computer Engineering MSc Exam Companion for the Iranian entrance exam.

This is NOT a university textbook.

This is NOT an educational website.

This is NOT a generic quiz application.

The application exists for exactly one purpose:

> Maximize the user's exam score in the remaining available time.

Everything inside this project must be optimized for exam performance rather than academic completeness.

---

# Primary Goal

Help the user answer more questions correctly.

Every design decision must improve one of the following:

• speed
• memory retention
• exam confidence
• pattern recognition
• question solving

If a feature does not help the user score higher,
do not build it.

---

# User Profile

Target User:

• Software Engineer
• Flutter Developer
• Good programming experience
• Very limited exam preparation
• Less than 30 hours remaining

Assume:

The user already understands programming.

The user does NOT remember university theory.

Avoid teaching from zero whenever possible.

Instead:

Reconnect concepts to software engineering experience.

---

# Educational Strategy

Never teach like a university professor.

Teach like a senior engineer preparing another engineer for tomorrow's exam.

Every explanation must be:

Short

Practical

Exam-focused

Pattern-based

Never write long theoretical paragraphs.

---

# Knowledge Priority

Always prioritize information in this order:

1.
Previous Exam Questions

2.
Official Answer Keys

3.
Repeated Exam Patterns

4.
Exam Shortcuts

5.
Theory

Never reverse this priority.

---

# Content Philosophy

Every piece of content must answer at least one of these questions:

Why does this appear in exams?

How can I solve this in under 20 seconds?

How can I remember this forever?

What trick is the examiner using?

If it answers none of these questions,
remove it.

---

# Source Priority

Always prefer information extracted from:

Official exam papers

Official answer keys

Iranian Computer Engineering MSc exams

Third-party repositories such as CSHub or MasterTest may help locate artifacts, but they are secondary discovery sources and never replace verified official papers, keys, or corrections.

Never invent previous exam statistics.

If repetition frequency is unknown,
mark it as unknown.

Never fabricate numbers.

---

# Architecture

Application Type:

Offline First

Single Page Application

Vanilla JavaScript

No Build Step

No Framework

No Node Runtime Required

Everything must work by opening index.html.

---

# Performance

Application startup:

under 1 second

Navigation:

instant

Search:

instant

No unnecessary animations.

No heavy dependencies.

---

# UI Philosophy

The interface must feel like:

Notion

Obsidian

VS Code

JetBrains Documentation

NOT like:

school websites

online learning platforms

PowerPoint slides

---

# Appearance

Dark mode is the initial and only supported appearance for version 1.

Professional.

Minimal.

High information density.

No visual clutter.

---

# Navigation

Main Sections:

Dashboard

English

Networks

Database

Operating System

Data Structures

Flashcards

Wrong Answers

Bookmarks

Statistics

Settings

Search

---

# Dashboard

Dashboard must immediately answer:

What should I study next?

How many questions have I solved?

Weakest topic?

Strongest topic?

Today's recommendation?

Time remaining until exam?

---

# Search

Search is first-class.

Search everything.

Topics

Flashcards

Questions

Lessons

Traps

Exam years

Summaries

Mistakes

---

# Flashcards

Flashcards are mandatory.

Every important topic must have flashcards.

Flashcards must be:

very short

one idea only

easy to review

---

# Five-Minute Review

Every subject must contain:

Five-Minute Review

This page should contain only:

highest value facts

No explanations.

---

# Golden Rules

Every subject must contain:

Golden Rules

Topic-level Golden Rules must be aggregated on this Subject page without creating duplicate claims.

Example:

Reliable -> TCP

DNS -> UDP

Stack -> DFS

Queue -> BFS

Never explain.

Just rules.

---

# Exam Traps

Every repeated trap deserves its own section.

Each trap contains:

The trap

Why students fail

Correct thinking

Similar questions

---

# Previous Questions

Every important concept must link to:

all related previous questions

If available:

1395

1396

...

1404

---

# Question Explanations

Every explanation must contain:

Why answer is correct

Why others are wrong

Designer trap

20-second solving strategy

Memory shortcut

---

# High Frequency Topics

Each subject must contain:

Very High, High, Medium, Low, or Unknown Topic frequency labels calculated by `.ai/product/EXAM_ANALYSIS_RULES.md`.

based on real previous exams.

Never estimate.

If uncertain,
write:

Frequency Unknown.

---

# Wrong Answers

Wrong answers are more important than correct ones.

Build dedicated review pages.

---

# Bookmarks

Every bookmarkable Educational Asset defined in `core/storage/user-state-schema.md` must support bookmarking through mutable user state.

---

# Notes

Notes must never exceed one screen.

If a lesson is longer,

split it.

---

# Translation

English content should support Persian translation.

Translation must be optional.

Hidden by default.

---

# Offline

Everything except remote PDFs must work offline.

Never depend on cloud APIs for core functionality.

---

# Accessibility

Keyboard shortcuts

Readable fonts

Responsive layout

High contrast

Large click targets

---

# Responsive Design

Desktop

Tablet

Phone

must all work.

---

# Code Quality

No TODO

No FIXME

No placeholder text

No lorem ipsum

No dummy data

No unfinished components

---

# Refactoring

Always refactor duplicated code.

Never duplicate business logic.

---

# File Size

Prefer many small files over huge files.

---

# Naming

Use descriptive names.

Avoid abbreviations.

---

# Comments

Explain WHY.

Not WHAT.

---

# Error Handling

Fail gracefully.

Never crash.

---

# Data

Separate content from UI.

Never hardcode educational content inside rendering logic.

---

# Educational Database

Lessons

Flashcards

Exam Traps

Summaries

Questions

Answer Keys

must all be independent datasets.

---

# Commit Philosophy

Every completed feature should leave the project runnable.

Never leave the application broken.

---

# When Context Is Full

If context becomes too large:

1.

Finish current file.

2.

Summarize work.

3.

Continue next file.

Never rewrite completed files unless necessary.

---

# Before Writing Code

Always ask yourself:

Does this feature increase exam score?

If not,

do not implement it.

---

# Definition of Done

A feature is complete only if:

Works

Responsive

Searchable

Integrated

Documented

Styled

Linked

Tested manually

No placeholders remain.

---

# Final Principle

Remember forever:

This project is NOT about teaching Computer Engineering.

It is about helping one software engineer score as high as possible in tomorrow's MSc entrance exam.
