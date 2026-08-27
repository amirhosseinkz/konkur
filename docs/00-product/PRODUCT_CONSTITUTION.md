# Product Constitution

Version: 1

Status: Accepted

## Origin

Prototype Zero was built for one Computer Engineering MSc candidate with only a few days to prepare. It was not production software, but it demonstrated a valuable product hypothesis: a compact, exam-driven system can improve preparation outcomes when it prioritizes real questions, repeated patterns, mistakes, and rapid review.

The production platform must preserve that learning advantage without preserving the prototype's technical limitations.

## Vision

Build Iran's most trustworthy and effective exam-preparation website, starting with Iranian entrance examinations and retaining a domain model that can support other standardized exams later.

## Mission

Tell each learner what to study next, why it matters for their selected exam, and how to convert limited preparation time into more correct answers.

## Product Promise

Maximum defensible exam readiness from the learner's available time.

The product never promises admission, rank, or score improvements that it cannot substantiate.

## Primary User

The initial paying user is a Persian-speaking Iranian entrance-exam candidate who:

- has a fixed exam target and date;
- has incomplete or uneven preparation;
- needs prioritization rather than a generic content library;
- expects a professional mobile and desktop web experience;
- will pay for trusted content, planning, practice, and measurable progress.

The first complete internal vertical and GA content vertical is Computer Engineering MSc.

## Product Laws

1. Exam evidence comes before theory.
2. Official sources and explicit uncertainty come before confident presentation.
3. The system reduces learner decisions; it does not add another content catalog to browse.
4. Wrong answers and recurring mistakes have higher review value than passive completion.
5. Progress is derived from observable behavior, never fabricated engagement or confidence.
6. Every paid capability must create a clear learner outcome or operational necessity.
7. The learner experience is one responsive website, including public, account, learning, exam, and billing flows.
8. Admin is a separately protected operational surface.
9. AI is optional infrastructure. Core product behavior survives without it.
10. Content and source history are immutable and auditable.
11. Accessibility, security, observability, support, and recovery are product requirements.
12. Internal milestones may be narrow; public production is released only after all GA gates pass.

## Product Surfaces

### Public Website

Marketing, SEO pages, exam catalogs, selected public educational content, pricing, policies, authentication entry points, and conversion flows.

### Authenticated Learner Website

Onboarding, diagnostic assessment, study plan, lessons, practice, full exams, review, search, progress, billing, and account management. This is part of the same website and not a separate learner application.

### Admin Website

Source acquisition, content editing, review, publishing, user support, commerce operations, audit, and incident tools. Access is role-based and isolated from learner permissions.

## Initial Exam Scope

- National Entrance Exam is a first-class family in the platform domain.
- Master's Entrance Exam is a first-class family in the platform domain.
- Doctoral Entrance Exam is reserved for future expansion and excluded from GA.
- Computer Engineering MSc is the first complete content vertical.

The platform may represent an exam family before its content is commercially available. Availability must always be explicit.

## Educational System

The canonical learner loop is:

```text
Onboard -> Diagnose -> Plan -> Learn -> Practice -> Review mistakes -> Reassess
```

Canonical study assets include source-backed questions, concise lessons, worked reasoning, flashcards, recognition rules, exam traps, review queues, and final-review material. Assets exist to improve exam performance, not to imitate a university curriculum.

## Commercial System

Content access is controlled by entitlements, not hard-coded plan names. Pricing can evolve without changing learning or exam-domain records. Payment state never changes educational truth.

## AI Position

AI may accelerate ingestion, drafting, classification, search, and grounded explanation. It may not establish official answers, source identity, exam frequency, score prediction, or publication approval. Every critical runtime flow has a deterministic fallback.

## General Availability

There is no public MVP or partial production release. GA requires:

- the complete platform capabilities defined in `LAUNCH_SCOPE.md`;
- one complete, reviewed, commercially usable Computer Engineering MSc vertical;
- functioning commerce, support, security, analytics, observability, backup, and recovery;
- all gates in `docs/06-operations/PRODUCTION_LAUNCH_GATES.md`.

Internal milestones are evidence checkpoints, not customer releases.

## Governance

This Constitution can change only through an accepted superseding ADR and an incremented Constitution version. Product convenience, implementation speed, or agent preference is not sufficient reason to violate it.
