# ADR-0032: Product Identity And Design System

Status: Accepted

Date: 2026-08-28

## Context

Milestone 2 must provide a stable product identity and implementable visual system without depending on external brand or design review. The platform already uses Konkur as its product name.

## Decision

Use `Konkur` as the operating product and GA-facing brand name unless a later conflict or deliberate rebrand requires a superseding ADR. This decision does not claim trademark registration or determine the future legal entity or invoice issuer.

Adopt the Persian-first design contracts in:

- `docs/05-design/DESIGN_SYSTEM.md`
- `docs/05-design/MOTION_SYSTEM.md`
- `docs/05-design/ACCESSIBILITY_AND_BROWSER_MATRIX.md`

The learner character is focused, precise, calm and distinctly Persian. Vazirmatn, RTL composition, warm neutral surfaces and restrained turquoise form the baseline. Admin remains visually and operationally distinct. WCAG 2.2 AA is mandatory.

## Consequences

- Public copy and design may use Konkur consistently without waiting for a naming exercise.
- A discovered naming conflict triggers a documented rebrand and migration plan; it does not rewrite this history.
- Legal-entity, tax and invoice naming remain part of the Milestone 3 commerce/legal decision.
- Implementations that drift into generic dashboard templates, tutoring-marketplace language, decorative gamification or unreviewed motion fail design review.
