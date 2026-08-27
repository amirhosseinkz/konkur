# Test Fixture Policy

Status: Active

Version: 1

## Rules

Test fixtures must:

1. **Use obviously synthetic IDs.** Fixture record IDs must contain `test`, `fixture`, or `placeholder` in their slug to distinguish them from real exam data.

2. **Be labeled test-only.** Every fixture dataset must have `testOnly: true` and `datasetType: "test-fixture"` (for search fixtures) or must be registered only when `allowTestFixtures: true` is set.

3. **Never use real exam wording.** Fixture content must not contain text from actual exam questions, official answers, or corrections unless the source is explicitly verified and the content is licensed for redistribution. Use placeholder text like "Test question?" or "Option A".

4. **Never appear in production UI.** The production `index.html` must not load fixture files. Fixtures are loaded only by `tests/browser/test-runner.html` which sets `data-test-environment="true"` on its `<html>` element.

5. **Never be counted in source coverage.** Fixture records are not included in source inventory summaries, verification status counts, or coverage reports.

6. **Never be presented as official exam data.** Fixture records must not claim `verificationStatus: "verified"` unless they are structural fixtures testing the validation pipeline itself.

## Current Fixtures

- `tests/fixtures/foundation-search-fixture.js`: A single search-document fixture used to verify the search index works. It contains synthetic Persian normalization test text ("ی ک ۱۲۳") and English placeholder text. It is loaded only in the test runner.

## Enforcement

- The dataset registry checks `allowTestFixtures` and rejects test-only datasets when it is false.
- The production registry instance is created with `allowTestFixtures: false` (determined by the absence of `data-test-environment="true"` on the HTML element).
- The source registry uses the same pattern.
- The browser test suite includes a test that verifies fixtures are isolated to the test environment.