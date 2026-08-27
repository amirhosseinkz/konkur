# Production Launch Gates

Status: Mandatory for GA

## Product And Content

- GA scope accepted and unchanged or superseded by ADR
- Computer Engineering MSc release contract fully satisfied
- Source, question, key, correction, mapping, and educational review coverage disclosed
- No unresolved Critical or High content dispute
- Pricing, refund, support, privacy, and terms approved

## Learner Website

- Complete public, account, learning, exam, review, billing, and deletion flows
- Supported mobile and desktop browser matrix passed
- Accessibility audit passed at the approved WCAG target
- SEO crawl, indexation, canonical, structured-data, sitemap, and performance audits passed
- No customer-facing placeholder, beta label, or dead end

## Admin And Operations

- Source-to-publication workflow passed with audit evidence
- Role separation and MFA verified
- Support, refund, withdrawal, correction, and account-security procedures tested
- Bulk and destructive actions protected and recoverable

## Commerce

- Real gateway sandbox and controlled production transaction tests passed
- Callback forgery, replay, retry, duplicate, timeout, and reconciliation tests passed
- Invoice, entitlement expiry, refund, and support override behavior passed
- Pricing and entitlement displays match server enforcement

## Reliability

- Production-like load and endurance tests passed
- Monitoring, alerting, dashboards, and on-call ownership active
- Backup and full restore drill passed
- Disaster recovery objectives approved and tested
- Deployment rollback passed
- External-provider outage behavior passed

## Security And Privacy

- Threat models reviewed
- Independent security assessment completed
- Zero unresolved Critical or High findings
- Secrets, access, retention, deletion, export, consent, and incident procedures verified
- Admin and production access reviewed

## Business Readiness

- Unit economics reviewed with measured or bounded assumptions
- Customer support hours, channels, ownership, and escalation active
- Legal and redistribution review complete
- Launch analytics and decision dashboards active
- Incident and public communication owners assigned

## Release Decision

GA requires a written release decision referencing evidence for every gate. Passing code tests alone is insufficient. There is no automatic public release from an internal milestone.
