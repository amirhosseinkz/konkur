# AI Policy

Status: Accepted

## Principle

AI is an optional accelerator, never the authority or availability dependency of Konkur.

## Permitted Uses

- OCR and transcription assistance
- Draft topic classification
- Draft explanations and flashcards from approved sources
- Retrieval and grounded search over approved content
- Personalization suggestions constrained by recorded learner data
- Internal quality checks and duplicate detection
- Local or hosted models behind a provider-neutral interface

## Human And Evidence Gates

AI output is a draft until it passes the same provenance, editor, and QA gates as human-authored content. The system records model or tool identity, prompt or skill version, source inputs, output version, reviewer, and publication decision where generated material enters the content workflow.

## Prohibited Uses

- Creating or changing official answers
- Claiming an artifact is official
- Inventing exam questions, corrections, citations, frequencies, or historical statistics
- Publishing content without review
- Producing an admission probability, rank, or score estimate without an independently approved model contract
- Sending sensitive learner or admin data to an unapproved provider
- Making core learning, account, exam, or billing flows unavailable when AI is unavailable

## Runtime Fallback

Every AI-assisted runtime capability defines:

- timeout and cost ceiling;
- deterministic fallback;
- user-visible uncertainty where relevant;
- logging that excludes prohibited sensitive data;
- provider outage behavior;
- a kill switch.

## Cost Control

Prefer deterministic rules, retrieval, cached outputs, batch processing, and smaller or local models before paid large-model calls. No capability may issue unbounded recursive or per-keystroke model requests.

## Provider Independence

Prompts, skills, evaluation fixtures, and model-facing contracts are versioned in the repository. Product-domain code depends on an internal capability interface, not a specific provider name.
