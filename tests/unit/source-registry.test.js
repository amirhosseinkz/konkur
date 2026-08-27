(function defineSourceTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const timestamp = "2026-07-14T12:00:00.000Z";

  function makeSourceRecord(overrides) {
    return Object.assign({
      id: "source:1395:paper:test",
      recordKey: "source:1395:paper:test@1",
      schemaVersion: 1,
      version: 1,
      year: 1395,
      sourceType: "exam-paper",
      title: "Test exam paper 1395",
      paperSourceId: null,
      answerKeySourceId: null,
      correctionSourceIds: [],
      publisher: "Test publisher",
      retrievalDate: null,
      localFilename: null,
      originalUrl: null,
      checksum: null,
      verificationStatus: "pending-acquisition",
      verificationNotes: null,
      licenseOrRedistributionNote: "Unknown (test)",
      questionNumberCoverage: [],
      knownInconsistencies: [],
      createdAt: timestamp,
      updatedAt: timestamp
    }, overrides || {});
  }

  function makeScopedSourceRecord(overrides) {
    return Object.assign(makeSourceRecord({
      id: "source:1405:masters:test-paper",
      recordKey: "source:1405:masters:test-paper@1",
      schemaVersion: 2,
      year: 1405,
      title: "Test master's exam paper 1405",
      examFamilyId: "masters-entrance",
      examGroupId: null,
      examSetCode: "computer-engineering",
      paperCode: "main"
    }), overrides || {});
  }

  harness.test("valid source record passes validation", () => {
    const record = makeSourceRecord();
    const issues = app.validation.sourceValidation.validateSourceRecord(record, "test");
    harness.equal(issues.length, 0, issues.map((i) => i.code).join(", "));
  });

  harness.test("invalid source year is rejected", () => {
    const record = makeSourceRecord({ year: 1299 });
    const issues = app.validation.sourceValidation.validateSourceRecord(record, "test");
    harness.assert(issues.some((i) => i.code === "invalid-year"));
  });

  harness.test("missing provenance for answer key is rejected", () => {
    const record = makeSourceRecord({
      id: "source:1395:key:test",
      sourceType: "answer-key",
      paperSourceId: null
    });
    const issues = app.validation.sourceValidation.validateSourceRecord(record, "test");
    harness.assert(issues.some((i) => i.code === "provenance"));
  });

  harness.test("duplicate source ID is detected in dataset", () => {
    const record = makeSourceRecord();
    const dataset = {
      datasetId: "fixture:dup-source-id",
      datasetType: "source-records",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [record, { ...record, recordKey: "source:1395:paper:test@2", version: 2 }]
    };
    const result = app.validation.sourceValidation.validateSourceDataset(dataset, { allowTestFixtures: true });
    harness.assert(result.issues.some((i) => i.code === "duplicate-id"));
  });

  harness.test("checksum format validation works", () => {
    harness.equal(app.validation.sourceValidation.isChecksum("sha256:" + "a".repeat(64)), true);
    harness.equal(app.validation.sourceValidation.isChecksum("sha256:short"), false);
    harness.equal(app.validation.sourceValidation.isChecksum("md5:abc"), false);
  });

  harness.test("verification status transition validation works", () => {
    const t1 = app.validation.sourceValidation.validateTransition("pending-acquisition", "acquired-unverified");
    harness.equal(t1.valid, true);
    const t2 = app.validation.sourceValidation.validateTransition("pending-acquisition", "verified");
    harness.equal(t2.valid, false);
    const t3 = app.validation.sourceValidation.validateTransition("acquired-unverified", "verified");
    harness.equal(t3.valid, true);
  });

  harness.test("source inventory registers 1395 through 1404", () => {
    const inventory = app.content.sourceRegistry.getInventorySummary();
    harness.equal(inventory.length, 10);
    harness.equal(inventory[0].year, 1395);
    harness.equal(inventory[9].year, 1404);
    harness.equal(inventory.every((e) => e.paperStatus === "legacy-unverified"), true);
    harness.equal(inventory.every((e) => e.keyStatus === "legacy-unverified"), true);
    harness.equal(inventory.every((e) => e.localAvailable === false), true);
  });

  harness.test("legacy-unverified source status validates", () => {
    const record = makeSourceRecord({
      verificationStatus: "legacy-unverified",
      verificationNotes: "Extracted from legacy prototype. Not independently verified."
    });
    const issues = app.validation.sourceValidation.validateSourceRecord(record, "test");
    harness.equal(issues.length, 0, issues.map((i) => i.code).join(", "));
  });

  harness.test("source inventory registration succeeded", () => {
    harness.equal(app.content.sourceInventory.registration.ok, true);
  });

  harness.test("source registry rejects invalid dataset type", () => {
    const registry = app.content.sourceRegistry.createRegistry({ allowTestFixtures: true });
    const result = registry.register({
      datasetId: "fixture:bad-type",
      datasetType: "subjects",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: []
    });
    harness.equal(result.ok, false);
  });

  harness.test("scoped National Entrance and Master's Entrance records validate", () => {
    const masters = makeScopedSourceRecord();
    const national = makeScopedSourceRecord({
      id: "source:1405:national:test-paper",
      recordKey: "source:1405:national:test-paper@1",
      title: "Test National Entrance exam paper 1405",
      examFamilyId: "national-entrance",
      examGroupId: "mathematics-physics",
      examSetCode: null
    });
    harness.equal(app.validation.sourceValidation.validateSourceRecord(masters, "test").length, 0);
    harness.equal(app.validation.sourceValidation.validateSourceRecord(national, "test").length, 0);
  });

  harness.test("scoped records reject incompatible group and exam-set fields", () => {
    const record = makeScopedSourceRecord({ examGroupId: "mathematics-physics" });
    const issues = app.validation.sourceValidation.validateSourceRecord(record, "test");
    harness.assert(issues.some((issue) => issue.code === "invalid-scope"));
  });

  harness.test("source registry rejects paper links across exam scopes", () => {
    const paper = makeScopedSourceRecord();
    const key = makeScopedSourceRecord({
      id: "source:1405:masters:test-key",
      recordKey: "source:1405:masters:test-key@1",
      sourceType: "answer-key",
      paperSourceId: paper.id,
      examSetCode: "software-engineering"
    });
    const registry = app.content.sourceRegistry.createRegistry({ allowTestFixtures: true });
    registry.register({
      datasetId: "fixture:scoped-source-links",
      datasetType: "source-records",
      schemaVersion: 2,
      version: 1,
      testOnly: true,
      records: [paper, key]
    });
    harness.assert(registry.validateAll().issues.some((issue) => issue.code === "scope-mismatch"));
  });

  harness.test("source registry filters active records by exam scope", () => {
    const record = makeScopedSourceRecord();
    const registry = app.content.sourceRegistry.createRegistry({ allowTestFixtures: true });
    registry.register({
      datasetId: "fixture:scoped-source-query",
      datasetType: "source-records",
      schemaVersion: 2,
      version: 1,
      testOnly: true,
      records: [record]
    });
    const sources = registry.getSourcesByScope({
      examFamilyId: "masters-entrance",
      examSetCode: "computer-engineering"
    });
    harness.equal(sources.length, 1);
    harness.equal(sources[0].id, record.id);
  });
})(window);
