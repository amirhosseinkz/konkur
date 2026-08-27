(function defineRegistryTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const fixture = app.tests.foundationFixture.fixture;

  harness.test("test fixture self-registers and validates", () => {
    harness.equal(app.tests.foundationFixture.registration.ok, true);
    harness.equal(app.content.registry.validateAll().valid, true);
  });

  harness.test("duplicate dataset registration is rejected", () => {
    const registry = app.content.registry.createRegistry({ allowTestFixtures: true });
    harness.equal(registry.register(fixture).ok, true);
    const duplicate = registry.register(fixture);
    harness.equal(duplicate.ok, false);
    harness.equal(duplicate.code, "duplicate-dataset");
  });

  harness.test("unknown dataset types are rejected", () => {
    const invalid = { ...fixture, datasetId: "fixture:unknown", datasetType: "unknown" };
    const validation = app.validation.validators.validateDataset(invalid, { allowTestFixtures: true });
    harness.equal(validation.valid, false);
    harness.assert(validation.issues.some((issue) => issue.code === "unknown-dataset-type"));
  });

  harness.test("fixture fields are strict", () => {
    const invalid = { ...fixture, unexpected: true, datasetId: "fixture:strict" };
    const validation = app.validation.validators.validateDataset(invalid, { allowTestFixtures: true });
    harness.equal(validation.valid, false);
    harness.assert(validation.issues.some((issue) => issue.code === "unknown-field"));
  });

  harness.test("canonical source records use their dedicated envelope", () => {
    const timestamp = "2026-07-14T12:00:00.000Z";
    const source = {
      datasetId: "fixture:source-envelope",
      datasetType: "source-records",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [{
        id: "source:reference:verified-reference:test-harness",
        recordKey: "source:reference:verified-reference:test-harness@1",
        schemaVersion: 1,
        version: 1,
        year: null,
        sourceType: "verified-reference",
        title: "Test-only reference record",
        paperSourceId: null,
        answerKeySourceId: null,
        correctionSourceIds: [],
        publisher: "Test harness",
        retrievalDate: null,
        localFilename: null,
        originalUrl: null,
        checksum: null,
        verificationStatus: "pending-acquisition",
        verificationNotes: null,
        licenseOrRedistributionNote: "Test-only; not a real source.",
        questionNumberCoverage: [],
        knownInconsistencies: [],
        createdAt: timestamp,
        updatedAt: timestamp
      }]
    };
    harness.equal(app.validation.validators.validateDataset(source, { allowTestFixtures: true }).valid, true);
  });

  harness.test("canonical record validators reject unknown entity fields", () => {
    const timestamp = "2026-07-14T12:00:00.000Z";
    const subject = {
      datasetId: "fixture:subject-envelope",
      datasetType: "subjects",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [{
        id: "subject:test-only",
        recordKey: "subject:test-only@1",
        schemaVersion: 1,
        version: 1,
        verificationStatus: "not-applicable",
        publicationStatus: "draft",
        educationalApproval: { status: "pending", reviewerRole: "exam-editor", reviewedAt: null, reviewContractVersion: null },
        sourceIds: [],
        primarySourceId: null,
        sourcePage: null,
        sourceUrl: null,
        provenanceNotes: null,
        createdAt: timestamp,
        updatedAt: timestamp,
        slug: "test-only",
        title: { en: "Test only", primaryLocale: "en", translationStatus: "not-applicable" },
        summary: { en: "Structural fixture", primaryLocale: "en", translationStatus: "not-applicable" },
        status: "planned",
        topicIds: [],
        reviewOrder: [],
        fiveMinuteReviewId: null,
        unexpected: true
      }]
    };
    const validation = app.validation.validators.validateDataset(subject, { allowTestFixtures: true });
    harness.equal(validation.valid, false);
    harness.assert(validation.issues.some((issue) => issue.code === "unknown-field"));
  });

  harness.test("registry detects revision version gaps", () => {
    const registry = app.content.registry.createRegistry({ allowTestFixtures: true });
    const versionTwo = JSON.parse(JSON.stringify(fixture));
    versionTwo.datasetId = "fixture:version-gap";
    versionTwo.records[0].version = 2;
    versionTwo.records[0].recordKey = `${versionTwo.records[0].id}@2`;
    harness.equal(registry.register(versionTwo).ok, true);
    harness.equal(registry.validateAll().valid, false);
    harness.assert(registry.validateAll().issues.some((issue) => issue.code === "version-gap"));
  });

  harness.test("production registry rejects test fixture dataset types", () => {
    const registry = app.content.registry.createRegistry({ allowTestFixtures: false });
    harness.equal(registry.register(fixture).ok, false);
  });

  harness.test("registry exposes active searchable projections only", () => {
    const registry = app.content.registry.createRegistry({ allowTestFixtures: true });
    registry.register(fixture);
    harness.equal(registry.getActiveRecords().length, 1);
    harness.equal(registry.getSearchDocuments().length, 1);
  });
})(window);
