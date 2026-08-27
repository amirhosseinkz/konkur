# Official Source Inventory And Gap Report

Status: Complete historical inventory; artifact acquisition remains incomplete

Inventory date: 2026-08-28

Scope: Computer Engineering MSc, intended baseline years 1395-1404

## Result

The historical official-source corpus is not suitable for reproduction. Official exam identity is established for 1397-1404, and the 1403 paper has a strong official source chain. No target year has a complete verified set of paper, authoritative final key, and correction history. No artifact has recorded redistribution permission.

Under ADR-0030, these gaps do not block GA architecture or the commercial content corpus. Konkur uses official metadata and canonical links only and publishes independently authored educational content.

## Annual Inventory

| Year | Official exam identity | Official paper | Official key | Corrections | Repository artifact | Current status |
|---:|---|---|---|---|---|---|
| 1395 | Not established | Not found | Not found | Unknown | None | Official acquisition pending; third-party discovery only |
| 1396 | Generic historical Sanjesh paper/key publication links retained; code `1277` mapping not established | Historical endpoint now 404 | Historical initial-key endpoint now 404 | Unknown | None | Official publication event indicated; target artifacts unresolved |
| 1397 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only |
| 1398 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only |
| 1399 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only |
| 1400 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only |
| 1401 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only; legacy paper URL is third-party |
| 1402 | Sanjesh annual lookup identifies code `1277` | Not found | Not found | Unknown | None | Official identity only |
| 1403 | Sanjesh lookup and news 11143 identify code `1277` and booklet `164` | Official `164c.pdf` live and hashed | Not found | Unknown | None | Paper identity strong; key, corrections, and rights unresolved |
| 1404 | Sanjesh annual lookup identifies code `1277`; official search includes 1404 | Individual URL not recovered | Individual URL not recovered | Unknown | None | Manual official search required |

`Unknown` correction status means no complete official correction search has been performed. It does not mean no correction exists.

## Official Lookup Evidence

| Year | Official catalog URL |
|---:|---|
| 1397 | https://register1.sanjesh.org/nrgarshad97/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1398 | https://register1.sanjesh.org/nrgarshad98/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1399 | https://register1.sanjesh.org/nrgarshad99/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1400 | https://register1.sanjesh.org/nrgarshad400/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1401 | https://register1.sanjesh.org/nrgarshad401/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1402 | https://register1.sanjesh.org/nrgarshad402/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1403 | https://register1.sanjesh.org/nrgarshad403/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |
| 1404 | https://register1.sanjesh.org/nrgarshad404/Search/CourseTest?groupTestId=3&keyword=%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1&courseTestType=0 |

## Third-Party Discovery Material

`legacy/extracted-exams.json` points to CSHub paper/key files for every target year except the 1401 paper, which points to MasterTest. These records remain `legacy-unverified`.

The 1403 CSHub paper was observed to be byte-identical to official `164c.pdf`. This supports paper identity only. It does not establish CSHub authority, final-key status, completeness, or redistribution permission.

## Gap Summary

| Gap | Count across 10 target years | Release effect |
|---|---:|---|
| Official exam identity not established | 2 years | Annual scope cannot be verified |
| Official paper not acquired and verified | 9 years | Raw questions cannot pass the publication gate |
| Official authoritative key not acquired and verified | 10 years | Official answers cannot be published |
| Correction search incomplete | 10 years | Final answer and deleted-question status remain unknown |
| Redistribution or transformation basis recorded | 0 years | Full artifacts and transcriptions remain blocked |
| Official artifact stored in repository | 0 years | No local production corpus exists |

## Acquisition Procedure

1. Use the official Sanjesh search and annual notices manually without bypassing access controls.
2. Ask Sanjesh for canonical paper, initial-key, final-key, and correction references for code `1277`.
3. Record the exact publisher, source URL, retrieval date, artifact role, revision claim, and rights response.
4. Retain no artifact in the repository until the rights decision permits storage.
5. When retention is permitted, calculate SHA-256 and verify pages, numbering, options, paper code, key revision, and corrections independently.
6. Treat every missing year, page, key revision, and correction as explicit unknown data.
7. Update the production Source Record dataset only after the production content module and its storage contract exist. Do not extend Prototype Zero's direct-file architecture.

## Future Official-Artifact Reuse Blockers

- Written source-owner permission or Iranian legal advice for intended commercial uses
- Official paper acquisition for 1395-1402 and 1404
- Official authoritative key acquisition for all target years
- Complete correction and deleted-question inventory for all target years
- Measured editorial capacity sufficient for the proposed release contract

This report satisfies the Milestone 1 inventory-and-gap deliverable. It does not authorize official-artifact reuse. Reuse remains out of scope unless a later decision resolves every applicable blocker.
