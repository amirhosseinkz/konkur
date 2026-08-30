# Decisions Pending

This register preserves both open decisions and resolved decision history. Open decisions must not be guessed by an agent.

| ID | Decision | Needed by | Required evidence | Status and reference |
|---|---|---|---|---|
| P-001 | Final product and legal brand name | Milestone 2 | Name search, domain, trademark and user research | Product brand resolved as Konkur by ADR-0032; legal-entity and invoice identity move to P-005 without implying trademark registration |
| P-002 | Rights and redistribution policy for each official source type | Milestone 1 | Legal review and source-owner terms | Resolved for GA by ADR-0029 and ADR-0030: no official-artifact reuse; future reuse requires a new decision |
| P-003 | Exact Computer Engineering MSc GA content coverage | Milestone 1 | Official-source inventory and editorial capacity | Resolved by version 2 of the accepted original-content release contract |
| P-004 | Launch packages and prices | Milestone 6 | Willingness-to-pay, competitor, cost and margin research | Competitor snapshot and research plan exist; fieldwork and price decision remain open |
| P-005 | Payment gateway and invoicing model | Milestone 3 | Availability, legal, fee and reliability assessment | Open; NextPay documentation is discovery evidence only |
| P-006 | Authentication method | Milestone 2 | Threat model, user research, SMS/email reliability and cost | Resolved by ADR-0031: self-managed passkey/password learner auth, recovery codes, opaque sessions, separate Admin context and mandatory non-SMS MFA |
| P-007 | Hosting, storage and data-region strategy | Milestone 2 | Iranian connectivity, sanctions, cost, latency and recovery analysis | Strategy resolved by ADR-0031; `MILESTONE_3_PROVIDER_SHORTLIST.md` proposes a staging shortlist and RPO/RTO for human approval, while named provider selection and production-like restore evidence remain open |
| P-008 | Approved analytics and error-tracking providers | Milestone 2 | Privacy, availability, cost and retention assessment | Resolved by ADR-0031 baseline: no external processor; first-party typed analytics and self-hosted OpenTelemetry stack |
| P-009 | Exact technology stack | Milestone 2 | Architecture options and prototype benchmarks | Resolved by RFC-0001 and ADR-0031; bounded implementation spike is the first Milestone 3 gate |
| P-010 | WCAG conformance target and supported browser matrix | Milestone 2 | User needs and market/device research | Resolved by ADR-0032 and `ACCESSIBILITY_AND_BROWSER_MATRIX.md`: WCAG 2.2 AA and relative current/previous browser support |

Resolve each item through an ADR, contract, or approved research decision. Remove nothing from this history; mark it resolved with a reference.
