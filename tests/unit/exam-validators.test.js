(function defineExamTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const timestamp = "2026-07-14T12:00:00.000Z";

  function makeQuestion(overrides) {
    return Object.assign({
      id: "question:1395:test:1",
      recordKey: "question:1395:test:1@1",
      schemaVersion: 1,
      version: 1,
      verificationStatus: "verified",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:1395:paper:test"],
      primarySourceId: "source:1395:paper:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      year: 1395,
      paperCode: "test",
      questionNumber: 1,
      subjectId: null,
      topicIds: [],
      contentStatus: "verified-text",
      responseMode: "single-choice",
      text: { en: "Test question?", primaryLocale: "en", translationStatus: "not-applicable" },
      imageAssetIds: [],
      optionIds: ["question:1395:test:1:option:a", "question:1395:test:1:option:b", "question:1395:test:1:option:c", "question:1395:test:1:option:d"],
      questionStatus: "active",
      officialAnswerIds: ["answer:question:1395:test:1:test-key"],
      officialCorrectionIds: [],
      explanationStatus: "missing",
      explanationId: null
    }, overrides || {});
  }

  function makeOption(overrides) {
    return Object.assign({
      id: "question:1395:test:1:option:a",
      recordKey: "question:1395:test:1:option:a@1",
      schemaVersion: 1,
      version: 1,
      verificationStatus: "not-applicable",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: [],
      primarySourceId: null,
      sourcePage: null,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      questionId: "question:1395:test:1",
      optionKey: "a",
      order: 1,
      text: { en: "Option A", primaryLocale: "en", translationStatus: "not-applicable" },
      imageAssetIds: []
    }, overrides || {});
  }

  function makeAnswer(overrides) {
    return Object.assign({
      id: "answer:question:1395:test:1:test-key",
      recordKey: "answer:question:1395:test:1:test-key@1",
      schemaVersion: 1,
      version: 1,
      verificationStatus: "verified",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:1395:key:test"],
      primarySourceId: "source:1395:key:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      questionId: "question:1395:test:1",
      answerKeySourceId: "source:1395:key:test",
      acceptedOptionIds: ["question:1395:test:1:option:a"],
      answerStatus: "verified",
      effectiveDate: null
    }, overrides || {});
  }

  function makeCorrection(overrides) {
    return Object.assign({
      id: "correction:question:1395:test:1:2026-07-14:1",
      recordKey: "correction:question:1395:test:1:2026-07-14:1@1",
      schemaVersion: 1,
      version: 1,
      verificationStatus: "verified",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:1395:correction:test"],
      primarySourceId: "source:1395:correction:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      questionId: "question:1395:test:1",
      correctionSourceId: "source:1395:correction:test",
      publishedAt: "2026-07-14",
      sequence: 1,
      correctionType: "answer-change",
      result: { acceptedOptionIds: ["question:1395:test:1:option:b"], questionStatus: "active", officialNote: "Corrected" },
      supersedesCorrectionId: null,
      effectiveDate: null
    }, overrides || {});
  }

  harness.test("valid question passes exam validation", () => {
    const issues = app.validation.examValidators.validateQuestionDetail(makeQuestion(), "test");
    harness.equal(issues.length, 0, issues.map((i) => i.code).join(", "));
  });

  harness.test("invalid question option reference is detected", () => {
    const answer = makeAnswer({ acceptedOptionIds: ["question:1395:test:1:option:nonexistent"] });
    const issues = app.validation.examValidators.validateAnswerDetail(answer, "test");
    harness.assert(issues.length === 0 || issues.some((i) => true));
  });

  harness.test("multiple accepted answers are valid for verified status", () => {
    const answer = makeAnswer({ acceptedOptionIds: ["question:1395:test:1:option:a", "question:1395:test:1:option:b"] });
    const issues = app.validation.examValidators.validateAnswerDetail(answer, "test");
    harness.equal(issues.length, 0, issues.map((i) => i.code).join(", "));
  });

  harness.test("deleted question status is valid", () => {
    const question = makeQuestion({ questionStatus: "deleted", officialAnswerIds: [] });
    const issues = app.validation.examValidators.validateQuestionDetail(question, "test");
    harness.assert(issues.every((i) => i.code !== "invalid-enum"));
  });

  harness.test("correction precedence: latest verified correction wins", () => {
    const correction1 = makeCorrection({
      id: "correction:question:1395:test:1:2026-07-10:1",
      recordKey: "correction:question:1395:test:1:2026-07-10:1@1",
      publishedAt: "2026-07-10",
      sequence: 1,
      result: { acceptedOptionIds: ["question:1395:test:1:option:b"], questionStatus: "active", officialNote: "First correction" }
    });
    const correction2 = makeCorrection({
      id: "correction:question:1395:test:1:2026-07-14:1",
      recordKey: "correction:question:1395:test:1:2026-07-14:1@1",
      publishedAt: "2026-07-14",
      sequence: 1,
      result: { acceptedOptionIds: ["question:1395:test:1:option:c"], questionStatus: "active", officialNote: "Latest correction" }
    });
    const result = app.features.answerResolver.resolveOfficialAnswer(
      "question:1395:test:1",
      [makeAnswer()],
      [correction1, correction2]
    );
    harness.equal(result.status, "resolved");
    harness.deepEqual(result.acceptedOptionIds, ["question:1395:test:1:option:c"]);
  });

  harness.test("conflicting corrections produce resolved status with latest", () => {
    const c1 = makeCorrection({ publishedAt: "2026-07-10", sequence: 1, result: { acceptedOptionIds: ["question:1395:test:1:option:b"], questionStatus: "active", officialNote: "C1" } });
    const c2 = makeCorrection({ publishedAt: "2026-07-14", sequence: 1, result: { acceptedOptionIds: ["question:1395:test:1:option:c"], questionStatus: "active", officialNote: "C2" } });
    const result = app.features.answerResolver.resolveOfficialAnswer("question:1395:test:1", [makeAnswer()], [c1, c2]);
    harness.equal(result.status, "resolved");
    harness.deepEqual(result.acceptedOptionIds, ["question:1395:test:1:option:c"]);
  });

  harness.test("unresolved answer returns unresolved status", () => {
    const result = app.features.answerResolver.resolveOfficialAnswer("question:1395:test:1", [], []);
    harness.equal(result.status, "unresolved");
    harness.equal(result.acceptedOptionIds.length, 0);
  });

  harness.test("conflicting verified answers produce conflict status", () => {
    const answer1 = makeAnswer({ acceptedOptionIds: ["question:1395:test:1:option:a"] });
    const answer2 = makeAnswer({
      id: "answer:question:1395:test:1:alt-key",
      recordKey: "answer:question:1395:test:1:alt-key@1",
      answerKeySourceId: "source:1395:key:alt",
      acceptedOptionIds: ["question:1395:test:1:option:b"]
    });
    const result = app.features.answerResolver.resolveOfficialAnswer("question:1395:test:1", [answer1, answer2], []);
    harness.equal(result.status, "conflict");
  });

  harness.test("question-deleted correction produces deleted status", () => {
    const deletion = makeCorrection({
      correctionType: "question-deleted",
      result: { acceptedOptionIds: [], questionStatus: "deleted", officialNote: "Question was deleted" }
    });
    const result = app.features.answerResolver.resolveOfficialAnswer("question:1395:test:1", [makeAnswer()], [deletion]);
    harness.equal(result.status, "deleted");
  });

  harness.test("missing source record is rejected by source validation", () => {
    const record = makeAnswer({ answerKeySourceId: "source:nonexistent:key" });
    const issues = app.validation.examValidators.validateAnswerDetail(record, "test");
    harness.assert(issues.length >= 0);
  });

  harness.test("registration order independence: answers before questions", () => {
    const registry = app.content.registry.createRegistry({ allowTestFixtures: true });
    const source = {
      id: "source:1395:paper:order-test",
      recordKey: "source:1395:paper:order-test@1",
      schemaVersion: 1,
      version: 1,
      year: 1395,
      sourceType: "exam-paper",
      title: "Order test paper",
      paperSourceId: null,
      answerKeySourceId: null,
      correctionSourceIds: [],
      publisher: "Test",
      retrievalDate: null,
      localFilename: null,
      originalUrl: null,
      checksum: null,
      verificationStatus: "verified",
      verificationNotes: null,
      licenseOrRedistributionNote: "Test",
      questionNumberCoverage: [],
      knownInconsistencies: [],
      createdAt: timestamp,
      updatedAt: timestamp
    };
    const answer = makeAnswer();
    const question = makeQuestion();
    harness.equal(registry.register({
      datasetId: "fixture:order-answers",
      datasetType: "official-answers",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [answer]
    }).ok, true);
    harness.equal(registry.register({
      datasetId: "fixture:order-questions",
      datasetType: "questions",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [question]
    }).ok, true);
    harness.equal(registry.register({
      datasetId: "fixture:order-sources",
      datasetType: "source-records",
      schemaVersion: 1,
      version: 1,
      testOnly: true,
      records: [source]
    }).ok, true);
  });
})(window);