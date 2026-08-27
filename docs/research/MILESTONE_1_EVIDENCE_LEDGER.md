# Milestone 1 Evidence Ledger

Status: Active

Last reviewed: 2026-08-28

This ledger records observations, not implied permissions or market conclusions. Evidence classes follow `MILESTONE_1_RESEARCH_CONTRACT.md`.

## Official And Legal Evidence

| ID | Class | Title and publisher | URL | Access date | Extracted fact | Limitation |
|---|---|---|---|---|---|---|
| M1-A-001 | A | Act on Protection of Authors, Composers and Artists Rights of 1970, WIPO Lex | https://www.wipo.int/wipolex/en/legislation/details/7708 | 2026-08-28 | WIPO provides the 1970 Iranian copyright text, including rights concerning publication, reproduction, quotation, private noncommercial use, attribution, and integrity. | WIPO is a legal repository, not Iranian counsel. Current applicability, amendments, ownership, and interpretation were not established. |
| M1-A-002 | A | Act on Translation and Reproduction of Books, Periodical and Phonograms of 1973, WIPO Lex | https://www.wipo.int/wipolex/en/legislation/details/7709 | 2026-08-28 | The text restricts reproduction for material exploitation and describes narrower noncommercial educational and private-use conditions. | Applicability to examination artifacts and any later law require Iranian legal review. |
| M1-A-003 | A | Master's examination hub, Sanjesh | https://www.sanjesh.org/fa-IR/sanjesh/4925/page/%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D8%A7%D8%B1%D8%B4%D8%AF | 2026-08-28 | The canonical official hub is live. The previously failing trailing-hyphen URL also became accessible on retry. | A hub establishes publisher identity, not artifact completeness or a license. Availability was intermittent during research. |
| M1-A-004 | A | Annual Computer Engineering catalog lookups, Sanjesh registration systems | See inventory report | 2026-08-28 | Live official annual lookups identify exam-set code `1277` for 1397 through 1404. | These records are not papers, keys, corrections, or redistribution terms. |
| M1-A-005 | A | Computer Engineering MSc 1403 question-paper notice, Sanjesh, news 11143 | https://www.sanjesh.org/fa-IR/sanjesh/4936/news/view/14591/11143/Staging | 2026-08-28 | The notice identifies technical group, exam-set code `1277`, Computer Engineering, booklet code `164`, and the official `164c.pdf` link. | It establishes the paper, not an official key or correction history. |
| M1-A-006 | A | Computer Engineering MSc 1403 booklet `164c.pdf`, Sanjesh | https://www8.sanjesh.org/download/1403/arshad/qe/164c.pdf | 2026-08-28 | The official PDF is live. Observed SHA-256: `ffa7144dc6e608a5edc5482659f2905715c0364a24e652b3089954ea8a9d8852`. | No redistribution permission was found. The artifact is not stored in this repository. |
| M1-A-007 | A | Questions and keys for the 1405 Master's examination, Sanjesh, news 13714 | https://www.sanjesh.org/fa-IR/sanjesh/4936/news/view/14591/13714/Staging | 2026-08-28 | The official notice links to the current Sanjesh question-and-key search system. The page and hub were accessible after an earlier 403 response. | 1405 is outside the current 1395-1404 inventory. Individual artifacts require interactive search and CAPTCHA; the notice is not a license. |
| M1-A-008 | A | Sanjesh question-and-key search system | https://www8.sanjesh.org/noet_tk/ | 2026-08-28 | The official discovery system is live and includes current annual selections. | Individual target artifacts were not extracted by bypassing CAPTCHA. |

## Repository Evidence

| ID | Class | Title and publisher | Location | Review date | Extracted fact | Limitation |
|---|---|---|---|---|---|---|
| M1-D-001 | D | Prototype source inventory, Konkur | `content/sources/source-inventory.js` | 2026-08-28 | Twenty placeholder records cover papers and keys for 1395-1404; every record is `pending-acquisition`. | Placeholders establish intended scope only. |
| M1-D-002 | D | Prototype source manifest, Konkur | `content/sources/SOURCE_MANIFEST.md` | 2026-08-28 | No official paper, key, correction, or archive is stored in the repository. | The manifest predates this research and remains a Prototype Zero artifact. |
| M1-D-003 | D | Extracted prototype exams, Konkur | `legacy/extracted-exams.json` | 2026-08-28 | The file has paper/key URLs for 1395-1404 hosted by CSHub, except the 1401 paper hosted by MasterTest, plus extracted answer arrays. | Third-party URLs and labels such as `officialKey` do not establish authority, accuracy, final-key status, or rights. |

## Competitor And Provider Evidence

| ID | Class | Title and publisher | URL | Access date | Extracted fact | Limitation |
|---|---|---|---|---|---|---|
| M1-B-001 | B | Comprehensive Computer Engineering package, KonkurComputer/CafeTadris | https://cafetadris.com/ceit | 2026-08-28 | Public catalog observations show exam-specific courses, review material, and mock examinations sold in packages. | Checkout, quality, sales, claims, and current entitlement terms were not independently verified. |
| M1-B-002 | B | Computer Engineering mock exams, CafeTadris | https://cafetadris.com/azmoon/ceit | 2026-08-28 | The page advertises a staged online/offline exam package with public promotional pricing. | A public price is not willingness-to-pay or transaction evidence. |
| M1-B-003 | B | Computer Engineering and IT MSc classes, Parseh | https://www.myparseh.com/majors/arshad-camputer/151/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%DA%A9%D9%84%D8%A7%D8%B3-%D9%87%D8%A7%DB%8C-1406-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86 | 2026-08-28 | Public subject-level prices, hours, instructors, and schedules are visible for the 1406 cycle. | Bundle terms and provider outcome claims were not verified. |
| M1-B-004 | B | Faradars subscription | https://faradars.org/subscription | 2026-08-28 | The public page displayed six-month and annual broad-learning subscriptions and promotional prices. | It is a broad educational substitute, not proof of an exam-specific learner loop or demand. |
| M1-A-009 | A | NextPay API documentation | https://nextpay.org/nx/docs/ | 2026-08-28 | Provider documentation describes token, redirect, callback, verification, and limited refund flows. | This is capability discovery only. Fees, reliability, legal suitability, invoicing, and selection remain unresolved. |

## Failed Or Constrained Access

| ID | Target | Observation | Current meaning |
|---|---|---|---|
| M1-X-001 | Sanjesh root, Master's hub, and news 13714 | Initial requests returned HTTP 403; retries on 2026-08-28 succeeded. | Do not record these pages as unavailable. Record access as intermittent. |
| M1-X-002 | Historical 1396 paper and initial-key endpoints | Retained official links point to endpoints that now return 404. | Historical publication is indicated, but target artifacts are unresolved. |
| M1-X-003 | Wayback CDX and replay requests | Requests failed with transport errors, timeout, or rate limiting. | No archive snapshot was verified. |
| M1-X-004 | Current Sanjesh artifact search | Interactive selection and CAPTCHA are required. | Manual authorized acquisition is required; controls must not be bypassed. |

## Integrity Notes

- Access success does not grant redistribution, transcription, transformation, or commercial-use rights.
- ADR-0030 avoids that dependency by excluding official and third-party questions, keys, and page images from the commercial corpus.
- A byte-identical third-party file may support identity review but does not make its host official or authorize reuse.
- Prices are dated observations and do not establish demand, purchases, conversion, or market share.
- Negative findings mean not established in this research, never proof of absence.
