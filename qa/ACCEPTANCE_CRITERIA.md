# Product Acceptance Criteria

Status: Architecture Contract

Version: 1

These criteria are required evidence for every completed feature. Exact minimum browser versions remain to be verified during implementation testing and must be recorded before release.

## Supported Browser Matrix

Target the latest stable modern versions available during implementation testing of:

| Browser | Desktop | Mobile where available | Direct `file://` required |
|---|---:|---:|---:|
| Chrome | yes | Android | yes |
| Edge | yes | Android when available | yes |
| Firefox | yes | Android when available | yes |
| Safari | macOS | iOS/iPadOS | yes |

The release report records exact tested versions, operating systems, and devices. A browser is supported only after the direct-file, storage, routing, offline, and core-flow checks pass. Private browsing modes may restrict persistence; such limitations must be detected and communicated rather than treated as successful persistence.

## Direct-File Launch

- Open the repository `index.html` directly through `file://` without a server.
- Initial application shell renders without a console-blocking error.
- All classic deferred scripts load in documented order.
- Dataset registration completes without `fetch` or ES module imports.
- Hash routes open directly, survive refresh, and support browser back/forward navigation.
- No Node.js, npm, build output, local HTTP server, or service worker is required.
- Remote PDF and optional translation failure does not block core functionality.

## Responsive Viewports

Review every completed screen at CSS viewport widths:

- 320 px
- 375 px
- 768 px
- 1024 px
- 1440 px

At each width:

- No horizontal page overflow exists at 100% zoom or browser-supported 200% zoom/reflow.
- Text is readable without clipping or overlap.
- Controls remain visible and operable.
- Navigation remains reachable without precision gestures.
- Tables and code-like educational structures use an accessible contained strategy rather than forcing page overflow.
- Portrait and landscape are checked where the test device supports both.

## Keyboard and Focus

- Every interactive element is reachable and operable with keyboard alone.
- Tab order follows visual and semantic order.
- Focus never becomes trapped except inside a correctly implemented modal, where Escape closes it and focus returns to the invoking control.
- A visible focus indicator has at least a 2 CSS-pixel effective outline and sufficient contrast against adjacent colors.
- Hash-route changes move focus to a meaningful page heading or announced content region.
- Keyboard shortcuts do not override browser or assistive-technology conventions and have a discoverable reference.

## Touch Targets

- Primary interactive targets are at least 44 by 44 CSS pixels.
- Inline text links may be smaller only when line height and spacing prevent accidental activation.
- Adjacent controls have enough separation to avoid overlap and one-handed misactivation.

## Contrast and Non-Color Communication

- Normal text targets WCAG 2.2 AA contrast of at least 4.5:1.
- Large text targets at least 3:1.
- User-interface components, focus indicators, and meaningful graphics target at least 3:1 against adjacent colors.
- Correct, wrong, warning, progress, and verification states use text, iconography, or shape in addition to color.
- Dark mode is the only version 1 appearance and must meet these targets throughout.

## Offline Behavior

With network access disabled after local files are available:

- Application shell and hash navigation work.
- Registered lessons and concise review assets work.
- Questions and verified answer keys work.
- Search works.
- Bookmarks and Review Queue work.
- Progress and statistics work.
- Practice, Exam, and Review Modes work with local verified data.
- Last Night Mode works with local approved assets.
- Remote PDFs show a recoverable offline state.
- Optional translation falls back to original content.

## Storage Persistence

- Settings, progress, attempts, Exam Sessions, bookmarks, Review Queue state, and flashcard review state survive refresh and browser restart in each supported browser.
- Only `core/storage` accesses LocalStorage.
- Writes are validated before commit.
- Failed writes preserve the last committed state and produce a recoverable user message.
- Cross-feature state remains internally consistent after navigation and reload.

## Storage Corruption Recovery

Test independently:

- Invalid root JSON
- Unsupported schema version
- Invalid settings dataset
- Invalid attempt record
- Dangling content reference
- Invalid Statistics Snapshot
- Corrupt Translation Cache

Recovery resets or quarantines only the affected dataset when possible, preserves valid siblings, records a recovery event, and permits export of recoverable original data. Statistics and caches are recalculated or cleared without erasing attempts or bookmarks.

## Dataset Validation

- Every registered dataset declares supported schema and content versions.
- Duplicate IDs are rejected.
- Unknown fields are rejected under strict validation.
- Required fields, enums, timestamps, URLs, checksums, and stable ID formats are validated.
- Every content reference resolves and has compatible ownership.
- Official answers require verified answer-key provenance.
- Effective corrections require verified correction provenance.
- Local source records require matching filenames and SHA-256 checksums.
- Validation errors identify record ID and field path and prevent invalid publication.
- No validator silently invents, repairs, or replaces educational facts.

## Search Performance

- Target query latency is under 100 ms at the 95th percentile.
- Use the complete release corpus and at least 100 deterministic queries.
- Include Persian and English, normalization variants, aliases, exact matches, prefixes, identifiers, and no-result queries.
- Measure in every supported desktop browser with a warm in-memory index, no developer-tools throttling, and no concurrent rebuild.
- Record browser version, operating system, hardware summary, corpus record count, index size, median, 95th percentile, and maximum latency.
- Index construction is reported separately.

During Sprint 1, deterministic schema-valid fixtures may be used only to prove the measurement harness and record a non-release baseline. Full search and startup performance acceptance remains pending until the complete verified release corpus exists; fixture results cannot be reported as release compliance.

## Startup Performance

- Target first meaningful application shell render is under 1,000 ms.
- Measure from direct `file://` navigation start to visible, keyboard-operable shell.
- Report cold browser start and warm repeat navigation separately.
- Use the complete release script list and datasets on reference hardware with network disabled.
- Record at least 10 runs per supported desktop browser and report median and 95th percentile.
- Dataset validation and search-index readiness are measured separately if they complete after the shell becomes usable.

## Broken Links and Routes

- Every navigation item resolves to a valid hash route.
- Every Search result resolves to its entity.
- Every related topic, related question, lesson, flashcard, Golden Rule, Exam Trap, bookmark, and Review Queue reference resolves.
- Missing remote URLs produce recovery options and do not break local navigation.
- Automated reference validation reports zero dangling content IDs before release.
- Browser back, forward, refresh, direct hash entry, and unknown-route recovery are tested.

## Regression Expectations

Every completed feature must provide:

- Deterministic unit coverage for business rules and validation introduced by the feature
- Browser-flow coverage for its critical user path when automation is available
- Manual responsive evidence at all required widths
- Keyboard and focus review
- Direct-file and offline verification
- Storage migration/recovery tests when persistence changes
- Search indexing and route checks for new educational entities
- A QA report under `qa/reports` using the future approved template

Regression testing must cover existing navigation, search, storage, bookmarks, Review Queue, exam behavior, and dashboard behavior affected by the change. A task cannot be marked complete on mental review alone.

## Release Blocking Conditions

Release is blocked by:

- Any Critical or High QA finding
- Broken direct-file launch
- Broken navigation, search, storage, Practice Mode, Exam Mode, Review Mode, or Last Night Mode
- Data loss or destructive recovery
- Missing required official-answer provenance
- Dangling content references
- Horizontal overflow in a required viewport
- Keyboard-inaccessible critical flow
- Unresolved source-backed correctness dispute presented as fact

## Evidence Record

Every acceptance report records date, tester, application revision identifier, dataset manifest version, browser/device matrix, automated results, manual checks, performance measurements, known limitations, findings by severity, fixes, and final approval status.
