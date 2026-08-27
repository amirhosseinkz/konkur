# Risk Register

Status: Active

| ID | Risk | Impact | Initial mitigation | Owner | State |
|---|---|---|---|---|---|
| R-001 | Official exam redistribution rights are unclear | Critical | Legal inventory per artifact; link-only fallback; no publication before decision | Product/Legal | Open |
| R-002 | Source or answer-key errors damage trust | Critical | Immutable provenance, independent review, correction workflow, rapid withdrawal | Content | Open |
| R-003 | Scope expands to many exam verticals before one is complete | High | GA contract centers on one complete vertical; roadmap dependency enforcement | Product | Mitigated by constitution |
| R-004 | Content operations cannot sustain quality or annual updates | High | Build Admin workflow early; measure review throughput and cost | Content/Operations | Open |
| R-005 | Iranian payment or hosting provider interruption | High | Provider adapters, reconciliation, portability ADR, tested outage behavior | Engineering/Finance | Open |
| R-006 | Learner or Admin account takeover | Critical | Established auth, MFA for Admin, rate limits, session controls, monitoring | Security | Open |
| R-007 | Paid content is scraped or shared at scale | Medium | Entitlements, rate limits, signed delivery, abuse monitoring; accept no perfect DRM | Product/Security | Open |
| R-008 | AI introduces false claims or unbounded costs | High | AI policy, review gates, budgets, caching, fallback, kill switch | Product/Engineering | Mitigated by policy |
| R-009 | SEO pages become low-quality programmatic content | High | Editorial templates, indexation gates, canonical controls, quality review | Growth/Content | Open |
| R-010 | Prototype assumptions leak into production architecture | High | Explicit Prototype Zero boundary and migration ADR requirement | Architecture | Mitigated by context |
| R-011 | Agents lose context or silently change decisions | High | Context-as-Code, authority order, ADRs, validator, one workstream | Engineering | Mitigated by Milestone 0 |
| R-012 | A no-MVP policy delays learning until expensive rework | High | Private research and internal validation permitted; no public production claim | Product | Open |

Risks are reviewed at every milestone boundary. Closing a risk requires evidence or explicit residual-risk acceptance.
