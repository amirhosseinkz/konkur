# Offline Search Specification

Status: Architecture Contract

Version: 1

This document defines search behavior. It does not implement the search engine.

## Scope

The search engine indexes immutable educational content and selected user-state projections. It works entirely offline after local datasets are loaded.

Searchable content entity types:

- Subject
- Topic
- Lesson
- Question
- Question Option text when verified
- Explanation
- Pattern Cluster
- Golden Rule
- Flashcard
- Exam Trap
- Five-Minute Review
- Crash Course
- Cheat Sheet
- Exam year metadata

Searchable user-state projections:

- Bookmark target titles and user tags
- Wrong-question targets
- Active Review Queue targets

Statistics values and raw Search History are not search results. They may influence navigation but are not indexed as educational entities.

Search Alias records are index-only inputs. They have no result group or route; an alias match emits and ranks its canonical target entity. Ambiguous aliases emit every declared target under each target's own entity type.

## Indexed Fields

Each index record contains `entityType`, `entityId`, `subjectId`, optional `topicIds`, `title`, `body`, aliases, source year values, route, verification status, and field-level normalized tokens.

Unverified question text is not indexed as factual text. Its verified metadata, such as year and question number, may be indexed with an explicit incomplete-source result label.

## Normalization Pipeline

Normalization is deterministic and applied identically during indexing and querying in this order:

1. Apply Unicode normalization form NFKC.
2. Convert Arabic Yeh `U+064A` and Alef Maksura `U+0649` to Persian Yeh `U+06CC`.
3. Convert Arabic Kaf `U+0643` to Persian Kaf `U+06A9`.
4. Remove Arabic tatweel `U+0640`.
5. Remove Arabic combining marks and Quranic/Arabic diacritics while retaining base letters.
6. Convert Persian digits `۰-۹` and Arabic-Indic digits `٠-٩` to ASCII digits `0-9`.
7. Convert English text to locale-independent lowercase.
8. Replace punctuation and repeated whitespace with one space, except characters preserved by the technical-token rule.
9. Trim leading and trailing whitespace.

Technical-token preservation keeps meaningful forms such as `tcp/ip`, `b+`, `c++`, dotted version-like terms, hyphenated identifiers, and common asymptotic notation when they occur in verified content. The implementation must test these rules rather than relying on naive punctuation removal.

## Tokenization

- Split normalized Persian and English text on whitespace and non-preserved punctuation.
- Index complete normalized phrases and individual tokens.
- Preserve numeric year and question-number tokens.
- Do not stem Persian or English words in version 1.
- Do not remove stop words in version 1; short exam phrases may depend on them.
- Discard empty tokens but retain one-character technical tokens and digits.
- Deduplicate tokens within a field. Token occurrence frequency may be retained for diagnostics but does not affect version 1 ranking.

## Matching

Match classes, from strongest to weakest:

1. Exact normalized title or identifier match
2. Exact normalized alias match
3. Exact title token sequence match
4. Exact token match in high-value fields
5. Prefix token match
6. Exact body token match

Version 1 does not promise fuzzy edit-distance matching. A future fuzzy matcher requires measurable relevance tests and must not weaken exact-match ranking.

Prefix matching applies to the final query token only and requires at least two normalized characters, except numeric year/question identifiers and approved one-character technical aliases.

Alias matching uses only Search Alias records with `verificationStatus: verified`, `publicationStatus: published`, and approved educational status. Every unique target in `targetEntityIds` is emitted; ambiguous aliases never silently select one.

## Ranking Contract

Each indexed field contributes at most once using its strongest match class. For token matches, field contribution is `fieldWeight * matchedDistinctQueryTokenCount / distinctQueryTokenCount`. A prefix contribution uses the same coverage fraction and the prefix multiplier. Contributions from different fields are summed; repeated occurrences of a token add no score. Exact full-query phrase and record-level bonuses are each added at most once. This produces deterministic multi-token scoring.

| Match | Weight |
|---|---:|
| Exact entity ID, year-question identifier, or normalized title | 120 |
| Exact Search Alias | 110 |
| Exact Topic title token or phrase | 100 |
| Exact Subject title token or phrase | 95 |
| Golden Rule statement | 90 |
| Flashcard front | 85 |
| Question verified text | 80 |
| Lesson title | 75 |
| Exam Trap title or trap | 70 |
| Five-Minute Review item | 70 |
| Pattern Cluster title | 65 |
| Cheat Sheet item | 60 |
| Crash Course title or referenced summary | 55 |
| Lesson summary or section heading | 50 |
| Explanation and Wrong-Option Analysis | 35 |
| General body text | 20 |
| Prefix match multiplier | `0.70` of field weight |

Bonuses:

- Exact full-query phrase: `+40`
- All query tokens matched: `+25`
- Verified source-backed record: `+10`
- Active bookmark projection: `+5`, used only after textual relevance exists

No popularity, fabricated frequency, or estimated importance bonus is applied without verified data and a future versioned ranking decision.

Ties resolve by exact-match class, then entity-type order shown in the searchable content list, then normalized title, then stable ID. This makes results deterministic.

## Result Grouping

- Results are grouped by entity type while preserving global rank metadata.
- The initial view shows the highest-scoring groups and results, not an alphabetical content dump.
- Each result identifies type, title, subject, optional topic, matching snippet, verification warning when applicable, and route.
- Duplicate projections of the same entity collapse into one result with multiple match reasons.
- Bookmark, wrong-answer, and review-queue status appears as metadata on the canonical entity result.

## Query Behavior

- An empty or whitespace-only query returns no search results and does not enter Search History.
- The Search page may show recent searches and navigation suggestions separately from result data.
- A normalized query shorter than two characters returns exact ID, exact alias, year, and approved technical-token matches only.
- Maximum returned results is 100.
- Maximum displayed results per group before user expansion is 10.
- Search never sends queries or content to a network service.

## Index Lifecycle

- Build the immutable content index after all local dataset registration and validation completes.
- Index only active published revisions exposed by the registry; never index draft, in-review, rejected, withdrawn, or non-active historical revisions.
- Build user-state projections separately so bookmark/review changes do not rebuild immutable tokens.
- Rebuild the full content index when dataset manifest version, content schema version, normalization version, or ranking version changes.
- Update only affected user projections when bookmarks, attempts, or Review Queue records change.
- A failed index build preserves the prior valid index when one exists and reports a recoverable error.
- The index is derived data and may be rebuilt; it is not an authoritative educational dataset.

## Offline and Direct-File Behavior

- Search uses only in-memory or locally persisted derived structures created from registered local datasets.
- No runtime JSON fetch, server endpoint, cloud API, or service worker is required.
- Search remains functional through direct `file://` launch.
- Missing optional translation indexes do not block English/source-language search.

## Performance Target

- Query latency target: less than 100 ms at the 95th percentile after index construction.
- Measurement corpus: the complete locally registered release dataset, not a reduced fixture.
- Measurement query set: at least 100 deterministic queries covering Persian, English, aliases, years, exact matches, prefixes, and no-result cases.
- Measurement environment: supported browser, production data, warm in-memory index, no developer-tools throttling, and no concurrent index rebuild.
- Index construction is measured separately from query latency.
- Exact minimum browser versions and reference hardware remain to be verified during Sprint 1 implementation testing.

Sprint 1 uses deterministic schema-valid fixtures only to verify the benchmark harness and establish a non-release baseline. The less-than-100-ms release target is accepted only after the complete verified release corpus exists and is measured under the conditions above.

## Search QA

- Test Arabic/Persian Yeh and Kaf equivalence.
- Test Persian, Arabic-Indic, and ASCII digit equivalence.
- Test diacritic removal without base-letter loss.
- Test English case insensitivity.
- Test exact, prefix, and alias ranking order.
- Test ambiguous aliases and deterministic ties.
- Test empty and short queries.
- Test incomplete-source warnings.
- Test offline and direct-file operation.
- Test that every published searchable asset has one resolvable result route.
