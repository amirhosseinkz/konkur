# Exam Catalog and Source Scope

Status: Planned product scope

## Version 1 Catalog

The next product supports two Iranian entrance-exam families published by the National Organization of Educational Testing (Sanjesh):

| Family ID | Display name | Scope |
|---|---|---|
| `national-entrance` | National Entrance Exam | Entry to undergraduate programs. |
| `masters-entrance` | Master's Entrance Exam | Entry to non-continuous master's programs. |

Doctoral entrance exams are intentionally out of scope for version 1. The catalog design must allow them to be added as a later family without changing the identities of existing records.

## National Entrance Groups

The National Entrance Exam has these first-level groups:

| Group ID | Display name |
|---|---|
| `mathematics-physics` | Mathematics and Physics |
| `experimental-sciences` | Experimental Sciences |
| `humanities` | Humanities |
| `arts` | Arts |
| `foreign-languages` | Foreign Languages |

Any practical examination or special admission requirement remains an explicit source artifact linked to its group and year. It is not silently treated as part of every paper.

## Master's Exam Sets

Master's Entrance Exam papers are published as annual exam sets. The complete set list, its official code, title, and paper grouping must be extracted from that year's official registration or choice-selection booklet. The list must not be hard-coded from a third-party site or inferred from a previous year because the official set list can change.

The current application covers only the Computer Engineering master's exam. Its 1395 through 1404 records remain `legacy-unverified`; they are not official records and do not establish coverage for the expanded catalog.

## Canonical Hierarchy

```text
Exam family
  -> group or annual master's exam set
    -> exam year
      -> paper or source artifact
```

An artifact must be addressable by all of:

- `examFamilyId`
- `examGroupId` for National Entrance Exam groups, or `examSetCode` for Master's Entrance Exam sets
- Solar Hijri `year`
- `paperCode` when the publisher separates papers inside a group or set
- `sourceType`

Source-record schema version 2 preserves all current version 1 Computer Engineering source IDs while requiring this scope for new catalog records. Expanded catalog data must use version 2.

## Official Source Hubs

| Family | Official archive |
|---|---|
| National Entrance Exam | https://www.sanjesh.org/fa-IR/sanjesh/4924/page/%D8%B3%D8%B1%D8%A7%D8%B3%D8%B1%DB%8C |
| Master's Entrance Exam | https://www.sanjesh.org/fa-IR/sanjesh/4925/page/%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D8%A7%D8%B1%D8%B4%D8%AF- |

The 1405 Master's archive includes the official question-and-key notice and the choice-selection booklet. The latter is the first authoritative input for the master's exam-set catalog:

- Questions and keys: https://www.sanjesh.org/fa-IR/sanjesh/4936/news/view/14591/13714/Staging
- Choice-selection booklet: https://www.sanjesh.org/fa-IR/sanjesh/4936/news/view/14591/13781/Staging

## Required Artifacts Per Exam Scope

Each `(family, group-or-set, year, paper)` scope may collect these source artifacts independently:

1. Official question booklet.
2. Initial answer key.
3. Final answer key.
4. Official correction or deletion notice.
5. Registration booklet, when it defines the annual catalog or exam rules.
6. Choice-selection booklet, when it defines annual programs or master's exam sets.

Every artifact follows the existing source acquisition process: original official URL, local file when permitted, SHA-256 checksum, verification status, and explicit correction relationships. A linked URL alone is not an acquired or verified source.

## Acquisition Order

1. Register the 1405 catalog booklet for each exam family as a pending official reference.
2. Extract and review the annual National Entrance groups and Master's Entrance exam sets.
3. Add 1405 paper, key, and correction records by exact official grouping.
4. Work backwards from 1404 through 1395, preserving year-specific group and set changes.
5. Import question text only after the matching paper and final key are acquired, checksummed, and independently verified.

No educational content, answer, frequency, or exam-set membership is inferred during catalog construction.
