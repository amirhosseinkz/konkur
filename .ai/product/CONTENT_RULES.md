# CONTENT_RULES.md

# Content Generation Rules

Version: 1.0

---

# Mission

Educational content exists for one reason:

Increase the user's exam score.

Nothing else.

Never generate educational content that does not directly improve exam performance.

---

# Golden Rule

Always remember:

This project teaches students

how to solve exam questions,

NOT

how to master computer engineering.

---

# Content Priority

Always generate content in this order.

1.

Previous Exam Questions

↓

2.

Repeated Patterns

↓

3.

Exam Tricks

↓

4.

Memory Shortcuts

↓

5.

Theory

Never reverse this order.

---

# Learning Philosophy

Assume

the reader

already knows programming.

Do NOT explain concepts like

variables

functions

loops

basic algorithms

Instead,

connect every concept to software engineering experience.

---

# Lesson Length

Every lesson should fit inside

5–10 minutes.

If longer,

split it.

Never create long chapters.

---

# Reading Time

Every lesson must include

Estimated Reading Time

Example

2 min

5 min

8 min

---

# Lesson Structure

Every lesson follows exactly this order.

Overview

↓

Why It Appears In Exams

↓

Key Concepts

↓

Golden Rules

↓

Designer Traps

↓

Memory Tricks

↓

Related Questions

↓

Flashcards

↓

Quick Recap

Never change this structure.

---

# Overview

Maximum

5 lines.

Explain only

what the topic is

and

why it matters in exams.

---

# Why It Appears

Every lesson must explain

why this topic appears repeatedly.

Example

TCP

appears because students confuse it with UDP.

Deadlock

appears because students forget one condition.

Normalization

appears because of dependency confusion.

---

# Theory

Theory is allowed only when necessary.

Maximum

30%

Theory

Minimum

70%

Exam-focused content

---

# Definitions

Definitions must be

one sentence.

Never paragraphs.

Bad

TCP is a transport protocol...

Good

Reliable transport protocol.

---

# Golden Rules

Golden Rules are mandatory.

Examples

Reliable

↓

TCP

Streaming

↓

UDP

Queue

↓

BFS

Stack

↓

DFS

Semaphore

↓

Mutual Exclusion

Always use

short lines.

---

# Memory Tricks

Every important topic must contain

one memory trick.

Example

TCP

Think Telephone Call

Reliable

Connected

Ordered

UDP

Think Radio

Fast

No Guarantee

Broadcast

Never generate weak mnemonics.

---

# Exam Traps

Every published Lesson includes approved Exam Trap links when verified analysis identifies a relevant repeated trap. Never fabricate a trap to fill a section.

Structure

Trap

↓

Wrong Thinking

↓

Correct Thinking

↓

Shortcut

↓

Related Questions

---

# Common Mistakes

Every published Lesson includes source-backed Common Mistakes when wrong-option or Pattern Analysis identifies them. Never invent a mistake to fill a section.

Examples

Students confuse

Process

with

Thread.

Students confuse

Stack

with

Heap.

Students confuse

TCP

with

UDP.

---

# Repeated Questions

Every lesson links to

every related exam question.

Format

Stable verified Question IDs from `content/schemas/content-schemas.md`.

Never omit available references.

---

# Similar Questions

If two questions test

the same concept,

link them.

---

# Explanations

Every explanation answers

Why?

Never only

What?

---

# Flashcards

Every important topic

must have flashcards.

---

# Flashcard Rules

One concept.

One answer.

Maximum

3 lines.

---

# Flashcard Categories

Definition

Difference

Formula

Shortcut

Trap

Comparison

Memory Trick

Fact

---

# Cheat Sheets

Every subject contains

one cheat sheet.

One page only.

Maximum

50 bullets.

No paragraphs.

---

# Five-Minute Review

Contains only

Highest Value Facts.

Nothing else.

Each Subject has one canonical Five-Minute Review. A Lesson may contain a short Quick Recap, but it must not be named or treated as a Five-Minute Review.

---

# Ten Second Rules

Every Topic should contain 10-second solving rules only when verified Pattern Analysis supports them.

Example

Reliable

↓

TCP

Circular Wait

↓

Deadlock

Leaf Count

↓

Tree

No explanation.

Only recognition.

---

# Twenty Second Strategy

Every difficult question

must include

How to solve in 20 seconds.

Not

full academic solution.

---

# Difficulty Levels

Every lesson

Easy

Medium

Hard

---

# Importance Levels

★★★★★

★★★★☆

★★★☆☆

★★☆☆☆

★☆☆☆☆

Only based on previous exams.

Never guess.

---

# Frequency

Allowed values

Very High

High

Medium

Low

Unknown

Never invent statistics.

---

# Language Style

Short sentences.

Simple English.

Simple Persian.

No academic language.

No unnecessary terminology.

---

# Paragraph Length

Maximum

5 lines.

Then split.

---

# Bullet Lists

Prefer bullets

over paragraphs.

---

# Tables

Use comparison tables

whenever possible.

TCP vs UDP

Stack vs Queue

Process vs Thread

Heap vs Stack

---

# Images

Prefer diagrams

only when

they improve understanding.

Never decorative images.

---

# Examples

Examples should come from

real software engineering.

Not mathematics.

---

# Coding Examples

If code is useful,

keep it

under 15 lines.

Never long programs.

---

# Exam Statistics

Never fabricate

"Appeared 8 times"

unless verified.

Use

Unknown

if verification is unavailable.

---

# Wrong Options

Always explain

why wrong options

look attractive.

This is more valuable

than explaining the correct answer.

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

# Bookmarks

Every bookmarkable Educational Asset defined in `core/storage/user-state-schema.md` supports bookmarking through mutable user state.

---

# AI Generated Content

Never generate generic educational text.

Always derive explanations from

exam patterns

official answers

related concepts.

---

# Forbidden Content

Never include

History

Long introductions

Academic proofs

Irrelevant mathematics

Research discussions

Implementation details

Anything unrelated to exam performance.

---

# Final Rule

Every page should make the student think

"I can answer more questions now."

If not,

rewrite the page.
