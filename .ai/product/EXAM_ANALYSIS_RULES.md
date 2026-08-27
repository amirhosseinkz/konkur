# EXAM_ANALYSIS_RULES.md

# Exam Analysis Rules

Version: 1.0

---

# Mission

Your primary responsibility is NOT generating educational content.

Your primary responsibility is analyzing previous Computer Engineering MSc entrance exams.

Educational content is only a by-product of exam analysis.

Never reverse this workflow.

Wrong:

Lesson
↓

Questions

Correct:

Questions
↓

Patterns
↓

Lessons

---

# Primary Data Sources

Always analyze in this order.

1.

Official Exam Papers

1395

1396

1397

1398

1399

1400

1401

1402

1403

1404

↓

2.

Official Answer Keys

↓

3.

Official Corrections

↓

4.

Verified Educational Sources

↓

5.

Generated Explanations

Never start from theory.

Always start from previous exams.

---

# Core Principle

Every topic must justify its existence.

Ask:

Why should this topic exist inside the application?

If the answer is

"It appeared repeatedly"

keep it.

Otherwise

remove it.

---

# Analysis Pipeline

Every Subject follows the canonical Educational Workflow. The detailed analysis steps below expand the Previous Exams, Official Keys, and Pattern Analysis stages; they do not change their order.

Collect Official Exam Papers

↓

Verify Official Answer Keys and Corrections

↓

Collect Questions

↓

Classify Questions

↓

Extract Concepts

↓

Group Similar Concepts

↓

Calculate Frequency

↓

Identify Traps

↓

Generate Golden Rules

↓

Generate Flashcards

↓

Generate Crash Course

↓

Generate Lessons

↓

Create Question Links

↓

Generate Review Material

Never skip a step.

---

# Question Classification

Every question must be tagged.

Year

Subject

Topic

Subtopic

Difficulty

Required Knowledge

Estimated Solve Time

Memory Based

Calculation Based

Conceptual

Mixed

Multiple Concepts

Designer Trap

Repeated Pattern

Related Questions

---

# Topic Extraction

Questions should never remain isolated.

Every question must belong to one topic.

Example

TCP

UDP

HTTP

DNS

Routing

Congestion Control

belong to

Networks.

---

# Concept Extraction

Every question may contain multiple concepts.

Example

TCP Question

contains

Reliable Communication

Flow Control

Congestion Control

Connection

Transport Layer

Each concept becomes searchable.

---

# Pattern Detection

Look for repeated patterns.

An apparent repetition becomes a Pattern Cluster only after at least two verified Questions share the required concept, trick, formula, or reasoning. Until source coverage is verified, its frequency is Unknown.

Patterns are more valuable than individual questions.

---

# Frequency Analysis

Never estimate.

Always calculate.

If calculation cannot be verified,

mark

Unknown.

Never invent statistics.

---

# Frequency Levels

Calculate `appearanceRate = yearsWithAtLeastOneVerifiedQuestion / verifiedEligibleYears` for the defined Subject or Topic scope.

Very High

`appearanceRate >= 0.80`

High

`0.60 <= appearanceRate < 0.80`

Medium

`0.40 <= appearanceRate < 0.60`

Low

`appearanceRate < 0.40`

Unknown

Insufficient verified year coverage, disputed classification, or unavailable sources.

Always publish the analyzed year set and raw counts with a frequency label. Thresholds classify verified analysis; they never substitute for it.

---

# Similar Question Detection

Questions belong together if

Same concept

Same trick

Same formula

Same reasoning

Different wording.

---

# Cluster Creation

Every cluster stores verified Question IDs from the content registry. Do not use illustrative year/question references when source files have not been acquired.

The application should visualize clusters.

---

# Designer Trap Detection

Every question should be analyzed.

Ask

Why do students answer incorrectly?

Never stop at

"What is the correct answer?"

---

# Trap Types

Terminology Trap

Calculation Trap

Comparison Trap

Memory Trap

Exception Trap

Definition Trap

Priority Trap

Keyword Trap

Negative Question Trap

Hidden Condition Trap

Every trap should be categorized.

---

# Wrong Option Analysis

Wrong options are educational.

Analyze every wrong option.

Ask

Why does it look correct?

What misconception created this option?

How can students avoid it next time?

---

# Twenty Second Strategy

Every difficult question should include

Fast Solving Strategy.

Ask

If I only had

20 seconds

how would I solve this?

Generate that strategy.

---

# Memory Trick Generation

Memory tricks should come from

Existing concepts

Not random stories.

Good

Telephone

↓

TCP

Reliable

Poor

Random sentence with unrelated words.

---

# Golden Rule Generation

Every repeated pattern becomes

one Golden Rule.

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

Deadlock

↓

Four Conditions

Golden Rules should never exceed

one sentence.

---

# Cheat Sheet Extraction

After analyzing every topic,

extract only

Highest Value Facts.

Everything else is removed.

The cheat sheet should fit

one page.

---

# Flashcard Extraction

Every important Topic must produce at least one Flashcard. Additional Flashcards are created only when distinct source-backed concepts justify them.

One flashcard

↓

One concept.

Never combine concepts.

---

# Lesson Generation

Lessons are generated

after

analysis.

Never before.

Lessons summarize

Patterns

Traps

Rules

Shortcuts

Not textbooks.

---

# Weak Topic Detection

Weak topics are determined by

Student performance

AND

Exam importance.

Not only

exam frequency.

---

# High Value Topics

A topic is High Value if

High frequency

OR

High scoring impact

OR

High confusion rate.

---

# Low Value Topics

Low frequency

Low impact

Little confusion

↓

Condense

↓

Do not expand.

---

# Review Priority

Review order should always be

Wrong Questions

↓

Weak Topics

↓

Bookmarked Educational Assets

↓

Everything Else, with due Flashcards and unfinished Lessons ahead of untouched low-value material

---

# Search Keywords

Generate

Search aliases.

Example

Semaphore

Mutex

Synchronization

Critical Section

Thread Lock

All should find

Semaphore.

---

# Topic Relationships

Every topic should know

Related Topics.

Example

Deadlock

↓

Semaphore

↓

Mutex

↓

Scheduling

↓

Processes

Navigation between topics should be seamless.

---

# Subject Graph

Every subject forms a graph.

Topics are nodes.

Relationships are edges.

This graph powers

Search

Recommendations

Review

Related Topics

---

# Recommendation Engine

Never recommend randomly.

Recommendation order

Weak

↓

High Frequency

↓

Bookmarked

↓

Recent Mistakes

↓

Unfinished

---

# Confidence Score

Estimate confidence

based on

Correct Answers

Solve Time

Review Count

Recent Performance

Confidence should decay over time.

---

# Continuous Improvement

Every new exam

must update

Frequency

Clusters

Golden Rules

Flashcards

Lessons

Statistics

without breaking previous content.

---

# AI Restrictions

Never hallucinate.

Never fabricate

exam frequencies.

Never fabricate

official answers.

Never invent

previous questions.

If information cannot be verified,

write

Unknown.

---

# Quality Checklist

Before accepting generated content ask:

Was it derived from previous exams?

Is it useful during the exam?

Can it be solved faster?

Does it reduce mistakes?

Can it be remembered easily?

If any answer is "No",

regenerate the content.

---

# Final Principle

This project is not a collection of lessons.

It is an intelligence layer built on top of ten years of Computer Engineering MSc entrance examinations.

Every piece of content must originate from exam analysis.

Everything else is secondary.
