# Performance Budgets

Status: Accepted Milestone 2 baseline

Budgets apply in CI and production monitoring. A budget miss requires a measured exception with owner and expiry; it cannot be hidden by averaging.

## User Experience

| Metric | Budget |
|---|---:|
| LCP | <= 2.5s at p75 |
| INP | <= 200ms at p75 |
| CLS | <= 0.1 at p75 |
| TTFB public cached page | <= 800ms at p75 on constrained regional network |
| Pointer-down feedback | Same rendered frame |
| Main-thread long task | <= 50ms |
| Gesture/transition frame | 16.7ms target; no layout work from animated properties |

No artificial minimum loading duration is allowed.

## Route Payloads

Compressed transfer budgets for initial route use:

| Surface | JavaScript | CSS | Fonts |
|---|---:|---:|---:|
| Public/SEO route | <= 190 KiB | <= 50 KiB | Shared total <= 160 KiB |
| Authenticated learner route | <= 250 KiB | <= 70 KiB | Shared |
| Timed exam route | <= 220 KiB | <= 60 KiB | Shared |
| Admin route | <= 300 KiB | <= 80 KiB | Shared |

Route-only motion and chart libraries load only where used. There is no icon font. LCP images target <=180 KiB on compact screens and <=300 KiB on wide screens in AVIF/WebP with reserved dimensions.

## Server Contracts

Measured at the application boundary under representative production-like load:

| Operation | p95 budget |
|---|---:|
| Public cached response | 150ms server time |
| Authenticated read | 300ms |
| Authenticated write | 500ms |
| Exam autosave server acknowledgement | 400ms |
| Search over representative corpus | 400ms |
| Deterministic plan generation | 750ms |
| Authentication/session operation | 500ms excluding user/provider delay |
| Admin publication command acceptance | 750ms; long work continues as a job |

Autosave updates local durable state immediately, exposes saving/offline/failed status and retries idempotently. Network latency may exceed the server budget without losing learner work.

## Jobs And Data

- Interactive job acceptance: <=500ms.
- Critical queue start under healthy capacity: <=5s p95.
- Payment callback processing: <=2s p95 excluding provider verification delay.
- Search projection lag after publication: <=30s p95.
- Content withdrawal removal from learner search: <=10s p95.
- Audit event visibility: <=10s p95 while domain and audit intent remain atomic.

Database queries over 100ms p95 require review. Unbounded list queries and offset pagination over large mutable sets are prohibited. Index and query plans are captured for critical paths.

## Test Profiles

- Public web vitals: throttled mid-tier Android and constrained 4G from an Iran-representative region.
- Exam autosave: intermittent connectivity, duplicate requests, tab suspension and recovery.
- Search: representative Persian normalization and mixed-script corpus.
- Admin: large tables, publication, rollback and bulk-job preview.
- Load: authentication, active attempts, search and payment callback bursts.

Lighthouse CI, bundle analysis, Playwright timings and k6 scenarios enforce pre-production budgets. Production real-user monitoring reports p50, p75 and p95 by surface, route, device class and region without collecting sensitive content.
