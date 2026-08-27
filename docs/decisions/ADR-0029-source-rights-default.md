# ADR-0029: Source Rights Default

Status: Accepted

Date: 2026-08-28

## Context

Konkur requires official exam evidence, but current research has not established redistribution or transformation rights for Sanjesh papers, keys, or corrections. Public availability and third-party mirrors do not establish permission. The reviewed Iranian copyright texts do not provide a clear commercial-reproduction basis without legal interpretation.

## Decision

For every source use without written source-owner permission or written approval from qualified Iranian counsel, Konkur will store and expose metadata and canonical links only. Full artifacts, page images, answer tables, OCR, transcription, translation, and question-level transformations remain blocked.

This decision is a safe operational default, not a conclusion about ultimate legal rights. The detailed use matrix is maintained in `docs/research/SOURCE_RIGHTS_DECISION.md`.

## Consequences

- Production source records must separate identity, acquisition, verification, and rights status.
- Content publication cannot rely on Prototype Zero or third-party archives.
- Architecture may support rights-restricted metadata without assuming that source files can be stored.
- The Computer Engineering MSc release remains blocked until its required question content has a permitted legal basis.
- Later written permission or legal advice may authorize specific uses through a superseding decision; it does not silently change other source types or years.
