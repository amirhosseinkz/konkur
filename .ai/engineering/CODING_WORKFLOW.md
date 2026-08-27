# CODING_WORKFLOW.md

# Coding Workflow

Version: 1.0

---

# Purpose

This document defines how the AI must work.

Not what to build.

Not how the application works.

This document defines the development workflow.

Never violate this workflow.

---

# Core Principle

Never start coding immediately.

Always understand the project first.

Reading is mandatory.

Coding is optional.

---

# Startup Procedure

Every coding session MUST begin with `.ai/START_HERE.md` and follow its complete mandatory reading order.

After reading, determine

Current Phase

Current Task

Current Progress

Only then

start implementation.

Never skip these steps.

---

# Selecting Work

Always select

the highest priority unfinished task.

Never choose randomly.

Priority

Critical

↓

High

↓

Medium

↓

Low

---

# Before Writing Code

Ask yourself

Do I fully understand this task?

If

No

Stop.

Read documentation again.

---

# Architecture Validation

Before implementation verify

Folder

Dependencies

Existing Components

Existing Services

Existing Data

Existing Utilities

Never duplicate functionality.

---

# Implementation Rules

Implement

ONE

task at a time.

Never implement

multiple unrelated features

in one session.

---

# During Development

After every meaningful change

verify

Build still works.

Navigation still works.

Search still works.

Storage still works.

---

# Refactoring Rule

If duplicated code is found

Refactor immediately.

Never postpone cleanup.

---

# Documentation Rule

If architecture changes

Update documentation immediately.

Never let documentation become outdated.

---

# QA Rule

After every completed task

Run QA mentally.

Check

Functionality

Architecture

Performance

Accessibility

Educational Quality

Only continue if

everything passes.

---

# Completion Rule

A task is complete only when

Code Compiles

No TODO

No Placeholder

QA Passed

Documentation Updated

CURRENT_STATE Updated

---

# Commit Rule

Treat every completed task

as if you are creating a Git commit.

Ask

Would I commit this?

If not

keep working.

---

# Context Management

If context becomes large

Stop.

Finish current task.

Summarize progress.

Update `.ai/CURRENT_STATE.md`

Continue in next session.

Never continue with partial understanding.

---

# Bug Workflow

If bug discovered

Reproduce

↓

Understand

↓

Fix

↓

Verify

↓

Regression Test

↓

Update Documentation

Never patch blindly.

---

# Regression Rule

Every completed task

must not break

previous work.

Always verify

Navigation

Search

Bookmarks

Storage

Exam Engine

Dashboard

---

# Data Rule

Never modify educational datasets

inside UI code.

Always update

data files.

---

# Content Rule

Never generate educational content

before

.ai/product/EXAM_ANALYSIS_RULES.md

pipeline has been followed.

---

# Review Rule

Before publishing content

Pass through

.ai/product/EXAM_EDITOR.md

Then

.ai/engineering/QA_AGENT.md

Never bypass review.

---

# Performance Rule

Continuously ask

Can this be simpler?

Can this be faster?

Can this be smaller?

Prefer simplicity.

---

# Dependency Rule

Before adding a library

Ask

Can native JavaScript solve this?

If yes

Do not install anything.

---

# Search Rule

Every new content item

must become searchable.

Immediately.

---

# Bookmark Rule

Every educational asset

must support bookmarking

unless there is a very good reason not to.

---

# Statistics Rule

Every completed educational asset

must update

Progress

Completion

Weak Topics

Strong Topics

Review Queue

Statistics should never become stale.

---

# End Of Session Checklist

Before ending

Update

.ai/CURRENT_STATE.md

Update

Completed Tasks

Update

Open Issues

Update

Next Task

Update

Known Risks

Never finish a session without this.

---

# Recovery Workflow

If interrupted

Restart

↓

Read CURRENT_STATE

↓

Read TASKS

↓

Resume unfinished task

Never rely on memory.

---

# AI Behaviour

If uncertain

Search project.

Read code.

Read documentation.

Never guess.

If information is unavailable

State that it is unavailable.

Never hallucinate.

---

# Continuous Improvement

Always leave the project

better

than you found it.

Even if only one small improvement.

---

# Final Principle

The goal is not to write more code.

The goal is to build the highest-quality offline Computer Engineering MSc Exam Companion possible.

Every coding session must move the project one complete step forward.
