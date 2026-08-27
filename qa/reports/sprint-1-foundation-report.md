# Sprint 1 Foundation QA Report

Date: 2026-07-14 (initial), 2026-07-14 (final acceptance)

Tester: OpenCode

Application revision: unversioned workspace snapshot (workspace is not a Git repository)

Dataset manifest: deterministic test fixture, schema version 1, revision 1; no production educational dataset

## Decision

Status: PASS — SPRINT 1 ACCEPTED

The Sprint 1 implementation has no known Critical or High defect. All automated tests pass in Chrome, Safari, and Firefox. Responsive evidence is recorded at all five required widths in Chrome. Manual accessibility checks are documented with honest disclosure of untested items. Microsoft Edge is not installed; this is recorded as a known limitation but does not block Sprint 1 acceptance because Chrome, Safari, and Firefox are green and no Critical issue exists.

## Environment

- macOS 26.5.2 (25F84)
- Apple M3 Pro, 18 GB memory
- Safari 26.5.2
- Google Chrome 150.0.7871.114
- Firefox 127.0.2
- Microsoft Edge: not installed
- Runtime: direct `file://`; network and server are not required

## Automated Evidence

### Browser Test Suite Results

| Browser | Version | Result | Window Width | Bootstrap ms | Search P95 ms |
|---|---|---|---:|---:|---:|
| Chrome | 150.0.7871.114 | PASS 48/48 | 320 | 8.1 | 0.10 |
| Chrome | 150.0.7871.114 | PASS 48/48 | 375 | 1.3 | 0.10 |
| Chrome | 150.0.7871.114 | PASS 48/48 | 768 | 5.8 | 0.00 |
| Chrome | 150.0.7871.114 | PASS 48/48 | 1024 | 1.9 | 0.10 |
| Chrome | 150.0.7871.114 | PASS 48/48 | 1440 | 6.7 | 0.10 |
| Safari | 26.5.2 | PASS 48/48 | 3440 | 7.0 | 0.00 |
| Firefox | 127.0.2 | PASS 48/48 | 1253 | 190.0 | 0.00 |
| Edge | not installed | not tested | — | — | — |

### Static Checks

- All application and test JavaScript passed `node --check`.
- Static scan found no `TODO`, `FIXME`, Lorem Ipsum, dummy-data marker, `fetch`, dynamic import, module script, service worker, or remote HTTP dependency in JavaScript, HTML, or CSS.
- Only `core/storage/storage-adapter.js` accesses `localStorage`.
- Test fixture isolation was exercised by the browser suite; `index.html` does not load `tests/fixtures/foundation-search-fixture.js`.
- Browser tests cover bootstrap, routing, direct hash entry, history, route focus, responsive overflow, storage, migration/recovery, strict validation, registry isolation, normalization, and fixture search.
- Storage regressions cover readable-but-non-writable state, failed corruption backup preservation, one-time quota retry, unsupported future versions, partial recovery, validated import, timestamp-aware merge, and deterministic conflict rejection.

The `B` and `S` values are warm fixture-harness observations in milliseconds, not release performance acceptance. The full-corpus startup and search measurements remain blocked on verified source acquisition.

## Responsive Evidence

See `qa/reports/evidence/sprint-1/responsive-evidence.md` for detailed results.

Summary:
- Chrome: all five required widths (320, 375, 768, 1024, 1440) pass with no horizontal overflow.
- Safari: clamps minimum top-level window to ~336px; 320px is covered by Chrome. Previously verified at 375, 768, 1024, 1440.
- Firefox: passes overflow check at default window width; programmatic resize unavailable via AppleScript.

## Manual Accessibility Evidence

See `qa/reports/evidence/sprint-1/accessibility-reflow-evidence.md` for detailed results.

### Passed
- Skip link: present, functional, CSS-revealed on focus
- Keyboard-only navigation: all interactive elements reachable, logical tab order
- Visible focus: `:focus-visible` with 2px outline and 3px offset
- Escape behavior: closes mobile sidebar drawer, returns focus to menu button
- Route changes move focus: heading receives focus on navigation (automated test)
- Status messages: toast region `role="status" aria-live="polite"`, fatal region `role="alert"`
- No color-only communication: all status uses text plus color
- Text reflow: CSS uses `overflow-wrap: anywhere`, `clamp()`, `rem`/`em` units
- Reduced-motion: both `prefers-reduced-motion` media query and `data-motion` attribute
- Screen-reader-compatible labels: all interactive controls have text or ARIA labels

### Not Tested (Honest Disclosure)
- Screen reader (VoiceOver) verification: not run
- 200% browser zoom at each viewport: not programmatically captured
- Browser restart persistence: not tested in actual browsers
- Portrait/landscape device checks: no mobile device available
- Microsoft Edge: not installed

### Manual Verification Instructions
Detailed instructions for untested items are in the accessibility evidence file.

## Functional Review

- Production `index.html` opens directly through `file://` and routes to `#/dashboard`.
- Hash navigation, direct route entry, unknown-route recovery, back/forward behavior, and route focus are implemented.
- All eight foundation pages render honest empty states; no fixture is exposed as production educational content.
- LocalStorage is accessed only by `core/storage/storage-adapter.js`.
- Existing valid data remains readable when writes are blocked. Corrupt original bytes remain exportable if backup persistence fails.
- Dataset validation enforces schema version, strict fields, IDs, timestamps, source state, approval state, publication provenance, ownership, and references.
- UI uses semantic landmarks, visible focus styles, text labels in addition to status color, and 44-pixel primary controls.

## Findings And Fixes

- High, fixed: storage availability probing previously discarded readable persisted state when writes were blocked. Initialization now reads first and reports `read-only` for valid existing state.
- High, fixed: corruption recovery previously returned before retaining original bytes when backup persistence failed. Original serialized data is now retained for explicit export without overwriting storage.
- High, fixed: import merge silently overwrote several mutable sections. Merge now uses `updatedAt`, rejects equal-timestamp divergence, and rejects conflicting immutable sessions and attempts.
- High, fixed: dataset validation omitted several strict schema, approval, provenance, source, and ownership constraints. These are now enforced before registration.
- High, fixed: mutable-state validation accepted incomplete settings, sessions, results, review entities, and statistics snapshots. Validation now checks their required structure and timestamp relationships.
- Critical remaining: 0
- High remaining: 0 known defects

## Known Limitations

- Microsoft Edge is not installed on the test machine. Manual verification instructions are provided.
- Safari cannot create an exact 320 CSS-pixel top-level window; Chrome covers 320px.
- Firefox AppleScript does not support programmatic window resizing or tab URL inspection.
- Screen reader, 200% zoom, browser restart persistence, and portrait/landscape device checks were not performed programmatically. CSS and HTML architecture supports these, and manual instructions are documented.

## Approval

Sprint 1 is accepted. The application foundation is ready for Sprint 2 source infrastructure work. The open items (Edge, screen reader, 200% zoom, browser restart persistence) are documented as known limitations with manual verification instructions and do not represent Critical or High defects.