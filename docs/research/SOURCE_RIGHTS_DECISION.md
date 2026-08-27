# Operational Source Rights Decision

Status: Accepted operational default; legal determination pending

Decision date: 2026-08-28

Decision reference: `docs/decisions/ADR-0029-source-rights-default.md`

This is product risk control, not legal advice.

## Decision

Until an intended use has written permission from the source owner or written approval from qualified Iranian counsel, Konkur will retain and serve metadata and canonical links only. It will not store in the production corpus or publish full papers, page images, answer-key tables, OCR, transcriptions, translations, or question-level transformations.

Public availability, HTTP success, archive capture, third-party possession, a checksum match, an educational purpose, or an `official` filename is not sufficient permission.

ADR-0030 removes this external dependency from GA: the commercial corpus uses independently authored questions and academic references, while official sources remain metadata and canonical links only.

## Use Matrix

| Intended use | Default before clearance | Clearance evidence |
|---|---|---|
| Record title, publisher, year, identifiers, URL, access date, and status | Allowed in the internal inventory | Source observation and provenance review |
| Link to a canonical official notice or search page | Allowed after link and terms review | Reviewed URL, attribution, and no misleading affiliation |
| Link directly to an official artifact | Case-by-case review | Source terms and counsel/source-owner approval for commercial deep-linking |
| Retain a downloaded artifact in the production repository or object storage | Blocked | Written permission or written legal basis covering retention |
| Mirror or serve a complete paper or key | Blocked | Written permission covering commercial hosting and delivery |
| Publish page images or embed an official PDF | Blocked | Written permission covering display and embedding |
| OCR or transcribe complete questions and options | Blocked | Written permission covering reproduction and transformation |
| Translate, restructure, tag, or adapt source question text | Blocked | Written permission covering derivative use and integrity obligations |
| Quote a limited excerpt in an explanation | Legal review required | Written analysis of purpose, amount, attribution, and commercial context |
| Publish an official answer label | Blocked until source verification | Verified authoritative key and every applicable official correction |
| Publish independently authored learning material that does not reproduce source expression | Allowed through normal editorial gates | Source-backed factual review and plagiarism review |

## Legal-Risk Basis

The WIPO-hosted 1970 and 1973 Iranian texts describe potentially protected literary, scientific, and technical works; economic rights involving publication and reproduction; attribution and integrity obligations; limited quotation concepts; and narrower private or noncommercial educational conditions. They do not provide a clear basis for a commercial platform to reproduce complete examinations.

The current Sanjesh pages also state that all rights in the site belong to Sanjesh. This is treated as a rights assertion, not a license.

## Questions Requiring Written Resolution

- Who owns the economic rights in questions, option layouts, papers, keys, and corrections?
- Does Sanjesh have authority to license hosting, transcription, translation, accessibility adaptation, and paid delivery?
- Can limited quotation apply in a paid explanation product, and what amount is customary?
- Which later statutes, regulations, government-work rules, or cases affect the 1970 and 1973 texts?
- Are deep-linking, framing, caching, and temporary server-side processing permitted?
- What attribution, integrity, correction, and trademark requirements apply?
- Can official third-party copies be authenticated and used after a checksum match?

## Required Permission Request

The request to Sanjesh must ask separately for:

- canonical source access;
- internal archival retention;
- public hosting and delivery;
- question-level transcription and OCR;
- translation and accessibility adaptation;
- restructuring, tagging, and search indexing;
- commercial learner access;
- official-name and attribution usage;
- correction, withdrawal, and archival retention after supersession.

Silence or an incomplete response does not relax the default.
