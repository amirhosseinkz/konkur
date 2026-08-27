# Computer Engineering MSc GA Content Release Contract

Status: Accepted

Contract version: 2

Date: 2026-08-28

## Purpose

Define what `content-complete` means for the first GA vertical without reproducing official or third-party examination content.

## Declared Baseline Scope

- Exam family: `masters-entrance`
- Exam set: Computer Engineering, official annual code currently observed as `1277`
- Commercial content model: independently authored under ADR-0030
- Required learner modes: diagnostic, plan, lesson, practice, full exam, mistake review, reassessment, and final review

The baseline subject domains are:

1. English language
2. Linear algebra
3. Engineering probability and statistics
4. Discrete mathematics
5. Programming fundamentals
6. Data structures
7. Algorithm design
8. Digital logic
9. Computer architecture
10. Operating systems
11. Computer networks
12. Databases
13. Artificial intelligence
14. Theory of languages and automata

Before the GA content freeze, Content must reconcile this list with current official exam metadata. A renamed, combined, added, or removed official domain requires an explicit contract revision; it cannot drift silently.

## Source And Authorship Gate

- Current official metadata supports exam identity, subject scope, timing, scoring, and form structure.
- Official and third-party questions, options, keys, corrections, and page images are not retained or reproduced.
- Every educational claim and original question links to approved academic reference revisions.
- Every question records author, reviewers, creation history, originality review, and AI-assistance history when applicable.
- Similarity and plagiarism review finds no transcription, translation, paraphrase, or near-copy of a source question.
- Konkur-authored questions and answers are never labeled as past-paper questions or official answers.
- Historical frequency and occurrence remain unknown and are not presented as product facts.

## Question Coverage Gate

The release scope requires these independently authored assets:

| Asset | Minimum unique coverage |
|---|---:|
| Domain practice questions | 40 per domain; 560 total |
| Diagnostic questions | 5 per domain; 70 total, not reused in practice or mocks |
| Full mock forms | 5 forms matching the current official total, allocation, timing, and scoring metadata |
| Flashcards | 10 per domain; 140 total |
| Final-review packs | 1 per domain; 14 total |

All mock questions are unique across forms and are not reused from diagnostic or domain-practice pools. Each question must have:

- stable identity, authorship, and academic reference links;
- independently reviewed text, options, diagrams, formulas, and code;
- accessibility representation for non-text content;
- reviewed Konkur answer and dispute state;
- reviewed subject and topic mappings;
- scoring behavior matching the declared exam rules;
- issue-report, withdrawal, supersession, and audit behavior.

The approved competency matrix for every domain must have 100% coverage by at least one reviewed learning asset and one reviewed question. Asset counts do not compensate for a competency gap.

## Explanation And Learning Coverage Gate

Every published eligible question requires:

- an independently reviewed worked explanation;
- why the accepted option is correct and why distractors fail where meaningful;
- prerequisite and topic links;
- concise recognition rule or exam trap where supported;
- Persian language and bidirectional-content review;
- no unsupported frequency, rank, probability, or score claim.

Each declared subject requires enough reviewed learning assets to support the full learner loop, including concise instruction, representative practice, mistake review, and final review. Asset counts are not a substitute for task coverage.

## Quality And Operations Gate

- Authors cannot independently approve their own correctness-sensitive work.
- Critical provenance or correctness disputes trigger immediate withdrawal.
- Corrections append history and trace every affected explanation, score, plan, and analytic record.
- Support can identify affected learners and provide a reviewed response.
- Publication and rollback are exercised in a non-production environment before GA.
- The measured content-operations pilot demonstrates bounded no-AI capacity and cost for this scope.

## Release Metrics

The release report must publish exact counts for:

| Metric | Required release value |
|---|---|
| Declared subject domains reconciled with current official metadata | 100% |
| Approved competency-matrix coverage | 100% |
| Original practice questions | At least 560 |
| Unique diagnostic questions | At least 70 |
| Unique complete mock forms | 5 |
| Originality-review coverage | 100% |
| Reviewed explanation coverage | 100% |
| Open Critical provenance or correctness disputes | 0 |
| Open High content defects | 0 |
| Unknown denominators | 0 |

## Excluded From This Contract

- National Entrance and Doctoral Entrance content
- A university-curriculum library unrelated to exam tasks
- Official or third-party question text, options, keys, corrections, and page images
- Claims that authored content appeared in a historical examination
- User-generated official answers
- AI approval of source identity, official answers, or publication
- Prototype Zero records that have not independently passed this contract
- A claim that completing this content guarantees rank, score, or admission

## Delivery Evidence

This contract is approved as the GA target. It is not yet delivered. Milestone 4 must measure no-AI throughput, correction capacity, originality review, and cost before content scales. Milestone 5 must produce the complete vertical and pass every metric above.

If measured capacity cannot support this scope, Product must amend the contract transparently through an accepted decision before GA. It may not weaken reporting or call an incomplete vertical complete.
