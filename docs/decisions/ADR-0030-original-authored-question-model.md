# ADR-0030: Original Authored Question Model

Status: Accepted

Date: 2026-08-28

## Context

Konkur cannot depend on external permission, legal review, or acquisition of a complete historical official-paper corpus. The product still needs trustworthy exam preparation and must not infer redistribution rights from public availability.

## Decision

Konkur's commercial learner corpus will use independently authored questions, options, explanations, lessons, and review assets. It will not reproduce, transcribe, translate, adapt, embed, or commercially serve official or third-party exam questions, answer keys, corrections, or page images.

Official sources may establish factual exam identity, current scope, structure, timing, scoring rules, and publication history through metadata and canonical links under ADR-0029. Approved academic references support the educational correctness of original content. Konkur will not label its authored material as a past-paper question or its answer as an official answer.

Similarity and plagiarism review are publication gates. A source artifact may not be used as a hidden template for near-copying.

## Consequences

- Missing historical papers, keys, corrections, and redistribution permission do not block production architecture or the commercial content model.
- Historical official-source inventory remains useful provenance research but is not a GA question-coverage denominator.
- Frequency and historical-occurrence claims remain prohibited unless a later rights-cleared evidence contract supports them.
- Content operations must track authorship, academic references, reviewers, originality checks, and revision history.
- The content throughput pilot and full contract verification move to the content-platform and vertical milestones, where actual reviewed content exists.
- Reusing official questions in the future requires a superseding decision and explicit rights evidence; it cannot silently enter the authored corpus.

## Reconsideration Procedure

This decision is intentionally reversible, but never by editing this ADR or relabeling existing records.

A future proposal to use official or third-party questions must provide:

1. A new RFC defining each artifact type, intended use, delivery surface, jurisdiction, owner, and learner claim.
2. Written rights evidence for storage, transcription, transformation, accessibility adaptation, commercial delivery, correction handling, and archival retention.
3. A superseding ADR that identifies exactly which part of ADR-0030 changes and which restrictions remain.
4. Separate domain identities for `Authored Question` and `Source Question`; one record may not change origin type.
5. A migration plan that introduces no official text into existing authored-question revisions, indexes, analytics, or caches.
6. Independent provenance, content, security, accessibility, and originality reviews.
7. Withdrawal, rollback, learner-notification, and audit behavior for permission loss or source correction.
8. Updated content release metrics with explicit denominators; historical coverage may not be implied from a partial corpus.

Until all eight items are accepted, ADR-0029 and ADR-0030 remain the controlling behavior. A future team can therefore recover both the decision and the path for changing it without reconstructing this conversation.
