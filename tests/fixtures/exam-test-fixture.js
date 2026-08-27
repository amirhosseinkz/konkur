(function registerTestExamFixture(global) {
  "use strict";

  const app = global.KonkurApp;
  const timestamp = "2026-07-14T12:00:00.000Z";
  const YEAR = 1399;
  const PAPER_CODE = "test-fixture";

  const paperSource = {
    id: "source:test-fixture:paper:test",
    recordKey: "source:test-fixture:paper:test@1",
    schemaVersion: 1,
    version: 1,
    year: YEAR,
    sourceType: "exam-paper",
    title: "TEST FIXTURE paper — not a real exam",
    paperSourceId: null,
    answerKeySourceId: null,
    correctionSourceIds: [],
    publisher: "Test harness",
    retrievalDate: null,
    localFilename: null,
    originalUrl: null,
    checksum: null,
    verificationStatus: "verified",
    verificationNotes: "Synthetic test fixture — not a real source.",
    licenseOrRedistributionNote: "Test-only; not a real source.",
    questionNumberCoverage: [1, 2, 3, 4, 5, 6],
    knownInconsistencies: [],
    createdAt: timestamp,
    updatedAt: timestamp
  };

  const keySource = {
    id: "source:test-fixture:key:test",
    recordKey: "source:test-fixture:key:test@1",
    schemaVersion: 1,
    version: 1,
    year: YEAR,
    sourceType: "answer-key",
    title: "TEST FIXTURE answer key — not a real key",
    paperSourceId: "source:test-fixture:paper:test",
    answerKeySourceId: null,
    correctionSourceIds: [],
    publisher: "Test harness",
    retrievalDate: null,
    localFilename: null,
    originalUrl: null,
    checksum: null,
    verificationStatus: "verified",
    verificationNotes: "Synthetic test fixture — not a real source.",
    licenseOrRedistributionNote: "Test-only; not a real source.",
    questionNumberCoverage: [1, 2, 3, 4, 5, 6],
    knownInconsistencies: [],
    createdAt: timestamp,
    updatedAt: timestamp
  };

  const correctionSource = {
    id: "source:test-fixture:correction:test",
    recordKey: "source:test-fixture:correction:test@1",
    schemaVersion: 1,
    version: 1,
    year: YEAR,
    sourceType: "official-correction",
    title: "TEST FIXTURE correction — not a real correction",
    paperSourceId: "source:test-fixture:paper:test",
    answerKeySourceId: "source:test-fixture:key:test",
    correctionSourceIds: [],
    publisher: "Test harness",
    retrievalDate: null,
    localFilename: null,
    originalUrl: null,
    checksum: null,
    verificationStatus: "verified",
    verificationNotes: "Synthetic test fixture — not a real source.",
    licenseOrRedistributionNote: "Test-only; not a real source.",
    questionNumberCoverage: [],
    knownInconsistencies: [],
    createdAt: timestamp,
    updatedAt: timestamp
  };

  function makeQuestion(qNum, status, extra) {
    const id = `question:${YEAR}:${PAPER_CODE}:${qNum}`;
    const opts = extra || {};
    return Object.assign({
      id,
      recordKey: `${id}@1`,
      schemaVersion: 1,
      version: 1,
      verificationStatus: "not-applicable",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:test-fixture:paper:test"],
      primarySourceId: "source:test-fixture:paper:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: "Test fixture — not real exam content.",
      createdAt: timestamp,
      updatedAt: timestamp,
      year: YEAR,
      paperCode: PAPER_CODE,
      questionNumber: qNum,
      subjectId: null,
      topicIds: [],
      contentStatus: "text-unavailable",
      responseMode: "single-choice",
      text: null,
      imageAssetIds: [],
      optionIds: [
        `${id}:option:a`,
        `${id}:option:b`,
        `${id}:option:c`,
        `${id}:option:d`
      ],
      questionStatus: status || "active",
      officialAnswerIds: [],
      officialCorrectionIds: [],
      explanationStatus: "missing",
      explanationId: null
    }, opts);
  }

  function makeOption(qId, key, order) {
    return {
      id: `${qId}:option:${key}`,
      recordKey: `${qId}:option:${key}@1`,
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
      questionId: qId,
      optionKey: key,
      order,
      text: { en: `Test option ${key}`, primaryLocale: "en", translationStatus: "not-applicable" },
      imageAssetIds: []
    };
  }

  function makeAnswer(qId, keySource, acceptedKeys, status) {
    const id = `answer:${qId}:${keySource}`;
    return {
      id,
      recordKey: `${id}@1`,
      schemaVersion: 1,
      version: 1,
      verificationStatus: "verified",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:test-fixture:key:test"],
      primarySourceId: "source:test-fixture:key:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      questionId: qId,
      answerKeySourceId: "source:test-fixture:key:test",
      acceptedOptionIds: acceptedKeys.map((k) => `${qId}:option:${k}`),
      answerStatus: status || "verified",
      effectiveDate: null,
      officialNote: null,
      supersededByCorrectionId: null
    };
  }

  function makeCorrection(qId, corrIdSlug, publishedAt, seq, type, result) {
    const id = `correction:${qId}:${corrIdSlug}`;
    return {
      id,
      recordKey: `${id}@1`,
      schemaVersion: 1,
      version: 1,
      verificationStatus: "verified",
      publicationStatus: "published",
      educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
      sourceIds: ["source:test-fixture:correction:test"],
      primarySourceId: "source:test-fixture:correction:test",
      sourcePage: 1,
      sourceUrl: null,
      provenanceNotes: null,
      createdAt: timestamp,
      updatedAt: timestamp,
      questionId: qId,
      correctionSourceId: "source:test-fixture:correction:test",
      publishedAt,
      sequence: seq,
      correctionType: type,
      result: Object.assign({ acceptedOptionIds: [], questionStatus: "active", officialNote: "Test fixture correction" }, result || {}),
      supersedesCorrectionId: null,
      effectiveDate: null
    };
  }

  const q1Id = `question:${YEAR}:${PAPER_CODE}:1`;
  const q2Id = `question:${YEAR}:${PAPER_CODE}:2`;
  const q3Id = `question:${YEAR}:${PAPER_CODE}:3`;
  const q4Id = `question:${YEAR}:${PAPER_CODE}:4`;
  const q5Id = `question:${YEAR}:${PAPER_CODE}:5`;
  const q6Id = `question:${YEAR}:${PAPER_CODE}:6`;

  const questions = [
    makeQuestion(1, "active", { officialAnswerIds: [`answer:${q1Id}:test-fixture-key`] }),
    makeQuestion(2, "active", { officialAnswerIds: [`answer:${q2Id}:test-fixture-key`] }),
    makeQuestion(3, "active", { officialAnswerIds: [`answer:${q3Id}:test-fixture-key`] }),
    makeQuestion(4, "active", { officialAnswerIds: [`answer:${q4Id}:test-fixture-key`] }),
    makeQuestion(5, "active", { officialAnswerIds: [`answer:${q5Id}:test-fixture-key`], officialCorrectionIds: [`correction:${q5Id}:test-fixture-correction`] }),
    makeQuestion(6, "active", { officialAnswerIds: [`answer:${q6Id}:test-fixture-key`] })
  ];

  const options = [];
  questions.forEach((q) => {
    ["a", "b", "c", "d"].forEach((key, i) => {
      options.push(makeOption(q.id, key, i + 1));
    });
  });

  const answers = [
    makeAnswer(q1Id, "test-fixture-key", ["a"], "verified"),
    makeAnswer(q2Id, "test-fixture-key", ["b"], "verified"),
    makeAnswer(q3Id, "test-fixture-key", ["a", "c"], "verified"),
    makeAnswer(q4Id, "test-fixture-key", ["a"], "verified"),
    makeAnswer(q5Id, "test-fixture-key", ["a"], "verified"),
    makeAnswer(q6Id, "test-fixture-key", [], "unknown")
  ];

  const corrections = [
    makeCorrection(q5Id, "test-fixture-correction", "2026-07-15", 1, "answer-change", {
      acceptedOptionIds: [`${q5Id}:option:b`], questionStatus: "active", officialNote: "Test fixture: answer corrected from a to b"
    })
  ];

  const sourceDataset = {
    datasetId: "test:exam-sources",
    datasetType: "source-records",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: [paperSource, keySource, correctionSource]
  };

  const questionDataset = {
    datasetId: "test:exam-questions",
    datasetType: "questions",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: questions
  };

  const optionDataset = {
    datasetId: "test:exam-options",
    datasetType: "question-options",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: options
  };

  const answerDataset = {
    datasetId: "test:exam-answers",
    datasetType: "official-answers",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: answers
  };

  const correctionDataset = {
    datasetId: "test:exam-corrections",
    datasetType: "official-corrections",
    schemaVersion: 1,
    version: 1,
    testOnly: true,
    records: corrections
  };

  const allDatasets = [sourceDataset, questionDataset, optionDataset, answerDataset, correctionDataset];

  let registrations = [];
  let registrationErrors = [];
  allDatasets.forEach((ds) => {
    const result = app.content.registry.register(ds);
    registrations.push({ datasetId: ds.datasetId, ok: result.ok });
    if (!result.ok) {
      registrationErrors.push({ datasetId: ds.datasetId, issues: result.issues || [] });
    }
  });

  app.register("tests", "examFixture", {
    allDatasets,
    registrations,
    registrationErrors,
    questions,
    options,
    answers,
    corrections,
    sources: [paperSource, keySource, correctionSource],
    year: YEAR,
    paperCode: PAPER_CODE,
    questionCount: questions.length
  });
})(window);