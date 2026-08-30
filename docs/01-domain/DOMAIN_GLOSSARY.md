# Domain Glossary

Status: Canonical terminology

## Exam Structure

| Term | Definition |
|---|---|
| Exam Family | A top-level standardized-exam system, such as National Entrance or Master's Entrance. |
| Exam Cycle | One official annual administration of an Exam Family. |
| Exam Group | A National Entrance grouping such as Mathematics and Physics or Experimental Sciences. |
| Exam Set | An official annual Master's Entrance مجموعه امتحانی identified by its published code. |
| Paper | One official question booklet within an Exam Cycle and scope. |
| Section | An ordered portion of a Paper with its own subject, numbering, or timing behavior. |
| Question | An assessment prompt with a stable identity and explicit origin type. It is either an Authored Question or a Source Question and never changes origin type. |
| Authored Question | An independently authored Konkur question supported by approved academic references and originality review. Its answer is a Konkur Answer, not an Official Answer. |
| Source Question | An immutable transcription or representation of one external source question. It is excluded from the commercial corpus under ADR-0030. |
| Konkur Answer | An independently reviewed answer to an Authored Question. It must never be labeled as an Official Answer. |
| Official Answer | An answer asserted by an official key source, not by Konkur. |
| Correction | A later official change, deletion, or clarification with precedence over affected fields. |
| Source Artifact | A paper, key, correction, catalog booklet, or approved reference with provenance. |

## Knowledge Structure

| Term | Definition |
|---|---|
| Subject | A reusable field of knowledge that may occur in multiple exam scopes. |
| Topic | A stable knowledge concept within a Subject. |
| Exam Topic Profile | The weight, importance, order, and evidence for a Topic in one exam scope. |
| Learning Asset | A lesson, flashcard, recognition rule, trap, worked explanation, or review item. |
| Pattern | A source-evidenced recurring reasoning, concept, formula, or trap across questions. |

## Learner State

| Term | Definition |
|---|---|
| Attempt | A learner's submitted or active responses to a defined question scope. |
| Study Plan | A versioned sequence of learner actions derived from explicit inputs and recorded evidence. |
| Review Item | A due learning action created by mistakes, memory scheduling, or an explicit learner choice. |
| Mastery Evidence | Accuracy, timing, recurrence, and retention observations supporting a topic-level state. |
| Diagnostic | A bounded assessment used to gather planning evidence, not a rank prediction. |

## Commerce

| Term | Definition |
|---|---|
| Product Offering | A purchasable commercial package shown to a customer. |
| Entitlement | A time-bounded authorization to an exam scope and capability set. |
| Subscription | A renewable billing agreement that may grant entitlements. |
| Exam Pass | A non-permanent entitlement package centered on one exam scope and preparation period. |

## Release Terms

| Term | Definition |
|---|---|
| Internal Milestone | A private evidence checkpoint with no production-release claim. |
| GA | The first public, supported, commercial production release after every launch gate passes. |
| Prototype Zero | The existing direct-file Computer Engineering MSc companion retained as historical evidence. |

Do not introduce synonyms for canonical persisted terms without updating this glossary and the relevant contracts.
