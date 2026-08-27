#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const exams = JSON.parse(fs.readFileSync("legacy/extracted-exams.json", "utf-8"));
const timestamp = "2026-07-15T00:00:00.000Z";
const OPTION_KEYS = ["a", "b", "c", "d"];
const years = Object.keys(exams).sort((a, b) => Number(a) - Number(b));

const report = {
  yearsImported: [],
  totalQuestions: 0,
  deletedQuestions: 0,
  multipleAnswerQuestions: 0,
  sections: {},
  warnings: []
};

function toStableId(prefix, ...parts) {
  return [prefix, ...parts].join(":");
}

function generateSourceRecord(year, sourceType) {
  const typeSlug = sourceType === "exam-paper" ? "paper"
    : sourceType === "answer-key" ? "key"
    : sourceType === "official-correction" ? "correction"
    : "reference";
  const id = `source:${year}:${typeSlug}:legacy`;
  const exam = exams[year];
  const url = sourceType === "exam-paper" ? exam.pdf : sourceType === "answer-key" ? exam.officialKey : null;
  return {
    id,
    recordKey: `${id}@1`,
    schemaVersion: 1,
    version: 1,
    year: parseInt(year, 10),
    sourceType,
    title: `CE MSc ${year} ${sourceType} (legacy-unverified)`,
    paperSourceId: sourceType === "exam-paper" ? null : `source:${year}:paper:legacy`,
    answerKeySourceId: sourceType === "official-correction" ? `source:${year}:key:legacy` : null,
    correctionSourceIds: [],
    publisher: "Legacy prototype (cshub.ir / mastertest.ir)",
    retrievalDate: null,
    localFilename: null,
    originalUrl: url,
    checksum: null,
    verificationStatus: "legacy-unverified",
    verificationNotes: "Extracted from legacy prototype. Not independently verified.",
    licenseOrRedistributionNote: "Unknown — source URLs point to third-party hosting, not official publisher.",
    questionNumberCoverage: [],
    knownInconsistencies: [],
    createdAt: timestamp,
    updatedAt: timestamp
  };
}

function generateQuestionRecord(year, questionNumber, key) {
  const qId = `question:${year}:ce-msc:${questionNumber}`;
  const isDeleted = key === null;
  return {
    id: qId,
    recordKey: `${qId}@1`,
    schemaVersion: 1,
    version: 1,
    verificationStatus: "not-applicable",
    publicationStatus: "published",
    educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
    sourceIds: [`source:${year}:paper:legacy`],
    primarySourceId: `source:${year}:paper:legacy`,
    sourcePage: null,
    sourceUrl: null,
    provenanceNotes: "Extracted from legacy prototype. Question text not transcribed — see PDF.",
    createdAt: timestamp,
    updatedAt: timestamp,
    year: parseInt(year, 10),
    paperCode: "ce-msc",
    questionNumber,
    subjectId: null,
    topicIds: [],
    contentStatus: "text-unavailable",
    responseMode: "single-choice",
    text: null,
    imageAssetIds: [],
    optionIds: OPTION_KEYS.map(k => `${qId}:option:${k}`),
    questionStatus: isDeleted ? "deleted" : "active",
    officialAnswerIds: isDeleted ? [] : [`answer:${year}:${questionNumber}:legacy-key`],
    officialCorrectionIds: [],
    explanationStatus: "missing",
    explanationId: null
  };
}

function generateOptionRecord(year, questionNumber, optionKey, order) {
  const qId = `question:${year}:ce-msc:${questionNumber}`;
  const optId = `${qId}:option:${optionKey}`;
  return {
    id: optId,
    recordKey: `${optId}@1`,
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
    optionKey,
    order,
    text: { en: `Option ${optionKey.toUpperCase()}`, primaryLocale: "en", translationStatus: "not-applicable" },
    imageAssetIds: []
  };
}

function generateAnswerRecord(year, questionNumber, key) {
  const qId = `question:${year}:ce-msc:${questionNumber}`;
  const aId = `answer:${year}:${questionNumber}:legacy-key`;
  let acceptedOptionIds = [];
  let answerStatus = "verified";

  if (key === null) {
    answerStatus = "withdrawn";
  } else if (Array.isArray(key)) {
    acceptedOptionIds = key.map(k => `${qId}:option:${OPTION_KEYS[k - 1]}`);
  } else {
    acceptedOptionIds = [`${qId}:option:${OPTION_KEYS[key - 1]}`];
  }

  return {
    id: aId,
    recordKey: `${aId}@1`,
    schemaVersion: 1,
    version: 1,
    verificationStatus: "not-applicable",
    publicationStatus: "published",
    educationalApproval: { status: "not-applicable", reviewerRole: null, reviewedAt: null, reviewContractVersion: null },
    sourceIds: [`source:${year}:key:legacy`],
    primarySourceId: `source:${year}:key:legacy`,
    sourcePage: null,
    sourceUrl: null,
    provenanceNotes: "Extracted from legacy prototype answer array. Not independently verified.",
    createdAt: timestamp,
    updatedAt: timestamp,
    questionId: qId,
    answerKeySourceId: `source:${year}:key:legacy`,
    acceptedOptionIds,
    answerStatus,
    effectiveDate: null,
    officialNote: null,
    supersededByCorrectionId: null
  };
}

function generateExamConfig(year) {
  const exam = exams[year];
  const sections = {};
  for (const [secId, sec] of Object.entries(exam.sections)) {
    sections[secId] = {
      label: sec.label,
      questions: sec.questions,
      page: sec.page || 2
    };
  }
  return {
    year: parseInt(year, 10),
    pdfUrl: exam.pdf,
    officialKeyUrl: exam.officialKey,
    questionCount: exam.key.length,
    sections,
    structureNote: exam.structureNote || null,
    verificationStatus: "legacy-unverified",
    sourceType: "legacy-prototype",
    sourcePath: "legacy/konkur-developer-bank-v4.html"
  };
}

function generateExamFile(year) {
  const exam = exams[year];
  const questions = [];
  const options = [];
  const answers = [];

  for (let qNum = 1; qNum <= exam.key.length; qNum++) {
    const key = exam.key[qNum - 1];
    questions.push(generateQuestionRecord(year, qNum, key));
    for (let i = 0; i < 4; i++) {
      options.push(generateOptionRecord(year, qNum, OPTION_KEYS[i], i + 1));
    }
    answers.push(generateAnswerRecord(year, qNum, key));
  }

  const sourceDataset = {
    datasetId: `exam:${year}:sources`,
    datasetType: "source-records",
    schemaVersion: 1,
    version: 1,
    testOnly: false,
    records: [
      generateSourceRecord(year, "exam-paper"),
      generateSourceRecord(year, "answer-key")
    ]
  };

  const questionDataset = {
    datasetId: `exam:${year}:questions`,
    datasetType: "questions",
    schemaVersion: 1,
    version: 1,
    testOnly: false,
    records: questions
  };

  const optionDataset = {
    datasetId: `exam:${year}:options`,
    datasetType: "question-options",
    schemaVersion: 1,
    version: 1,
    testOnly: false,
    records: options
  };

  const answerDataset = {
    datasetId: `answer:key:${year}:legacy`,
    datasetType: "official-answers",
    schemaVersion: 1,
    version: 1,
    testOnly: false,
    records: answers
  };

  const config = generateExamConfig(year);

  const js = `(function registerExam${year}(global) {
  "use strict";
  var app = global.KonkurApp;
  var timestamp = "${timestamp}";
  var config = ${JSON.stringify(config, null, 2)};

  ${sourceDataset ? "var sourceDataset = " + JSON.stringify(sourceDataset, null, 2) + ";" : ""}
  ${questionDataset ? "var questionDataset = " + JSON.stringify(questionDataset, null, 2) + ";" : ""}
  ${optionDataset ? "var optionDataset = " + JSON.stringify(optionDataset, null, 2) + ";" : ""}
  ${answerDataset ? "var answerDataset = " + JSON.stringify(answerDataset, null, 2) + ";" : ""}

  var registrations = [];
  var sourceRegistration = app.content.sourceRegistry.register(sourceDataset);
  registrations.push({ datasetId: sourceDataset.datasetId, registry: "source", ok: sourceRegistration.ok, code: sourceRegistration.code || null });
  [sourceDataset, questionDataset, optionDataset, answerDataset].forEach(function(ds) {
    var result = app.content.registry.register(ds);
    registrations.push({ datasetId: ds.datasetId, registry: "content", ok: result.ok, code: result.code || null });
  });

  app.register("content", "exam" + ${year}, {
    config: config,
    registrations: registrations,
    year: ${year}
  });
})(window);
`;

  return js;
}

// Generate all files
for (const year of years) {
  const exam = exams[year];
  let deleted = 0, multiple = 0;
  for (const k of exam.key) {
    if (k === null) deleted++;
    if (Array.isArray(k)) multiple++;
  }

  report.yearsImported.push(parseInt(year, 10));
  report.totalQuestions += exam.key.length;
  report.deletedQuestions += deleted;
  report.multipleAnswerQuestions += multiple;
  report.sections[year] = Object.keys(exam.sections).map(s => `${s}: ${exam.sections[s].questions.length}q`);

  // Validate: answer array length matches declared question count
  const allSection = exam.sections.all;
  if (allSection && allSection.questions.length !== exam.key.length) {
    report.warnings.push(`Year ${year}: all section has ${allSection.questions.length} questions but key has ${exam.key.length} entries`);
  }

  // Validate: no section contains out-of-range question numbers
  for (const [secId, sec] of Object.entries(exam.sections)) {
    for (const qNum of sec.questions) {
      if (qNum < 1 || qNum > exam.key.length) {
        report.warnings.push(`Year ${year} section ${secId}: question ${qNum} is out of range (1-${exam.key.length})`);
      }
    }
  }

  const jsContent = generateExamFile(year);
  const filename = `content/exams/exam-${year}.js`;
  fs.writeFileSync(filename, jsContent);
  console.log(`Generated ${filename} (${exam.key.length} questions, ${deleted} deleted, ${multiple} multiple)`);
}

// Generate extraction report
fs.writeFileSync("legacy/EXTRACTION_REPORT.json", JSON.stringify(report, null, 2));
console.log("\n=== Extraction Report ===");
console.log("Years imported:", report.yearsImported.join(", "));
console.log("Total questions:", report.totalQuestions);
console.log("Deleted questions:", report.deletedQuestions);
console.log("Multiple-answer questions:", report.multipleAnswerQuestions);
console.log("Warnings:", report.warnings.length);
if (report.warnings.length > 0) {
  report.warnings.forEach(w => console.log("  -", w));
}
