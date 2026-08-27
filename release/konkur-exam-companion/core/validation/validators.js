(function registerValidators(global) {
  "use strict";

  const app = global.KonkurApp;
  const DATASET_TYPES = Object.freeze([
    "source-records",
    "subjects",
    "topics",
    "lessons",
    "questions",
    "question-options",
    "official-answers",
    "official-corrections",
    "explanations",
    "wrong-option-analyses",
    "pattern-clusters",
    "golden-rules",
    "flashcards",
    "exam-traps",
    "five-minute-reviews",
    "crash-courses",
    "cheat-sheets",
    "search-aliases",
    "related-topics",
    "related-questions"
  ]);
  const DATASET_FIELDS = Object.freeze([
    "datasetId",
    "datasetType",
    "schemaVersion",
    "version",
    "testOnly",
    "records"
  ]);
  const TEST_RECORD_FIELDS = Object.freeze([
    "id",
    "recordKey",
    "schemaVersion",
    "version",
    "testOnly",
    "searchDocument"
  ]);
  const COMMON_RECORD_FIELDS = Object.freeze([
    "id",
    "recordKey",
    "schemaVersion",
    "version",
    "verificationStatus",
    "publicationStatus",
    "educationalApproval",
    "sourceIds",
    "primarySourceId",
    "sourcePage",
    "sourceUrl",
    "provenanceNotes",
    "createdAt",
    "updatedAt"
  ]);
  const ENTITY_FIELDS = Object.freeze({
    subjects: ["slug", "title", "summary", "status", "topicIds", "reviewOrder", "fiveMinuteReviewId", "iconId", "difficulty", "importance", "examFrequency", "estimatedStudyMinutes", "englishTitle", "goldenRuleCollectionId", "lastNightPriority", "contentOrigin", "frequencyStatus", "verificationLabel"],
    topics: ["subjectId", "slug", "title", "summary", "status", "lessonIds", "flashcardIds", "goldenRuleIds", "examTrapIds", "relatedQuestionIds", "relatedTopicLinkIds", "difficulty", "importance", "frequency", "estimatedReadingMinutes", "memoryTrickIds", "searchAliasIds", "englishTitle", "shortDescription", "contentOrigin", "frequencyStatus", "prerequisiteTopicIds", "relatedTopicIds", "lastNightIncluded", "versionLabel"],
    lessons: ["subjectId", "topicId", "title", "summary", "estimatedReadingMinutes", "sections", "goldenRuleIds", "examTrapIds", "flashcardIds", "relatedQuestionIds", "prerequisiteTopicIds", "relatedLessonIds", "searchAliasIds", "contentOrigin", "frequencyStatus", "developerAnalogy", "twentySecondStrategy", "miniSelfCheck"],
    questions: ["year", "paperCode", "questionNumber", "subjectId", "topicIds", "contentStatus", "responseMode", "text", "imageAssetIds", "optionIds", "questionStatus", "officialAnswerIds", "officialCorrectionIds", "explanationStatus", "explanationId", "subtopicIds", "patternClusterIds", "estimatedSolveSeconds", "difficulty", "trapIds", "relatedQuestionLinkIds", "searchAliasIds"],
    "question-options": ["questionId", "optionKey", "order", "text", "imageAssetIds", "accessibilityText", "sourceLabel"],
    "official-answers": ["questionId", "answerKeySourceId", "acceptedOptionIds", "answerStatus", "effectiveDate", "officialNote", "supersededByCorrectionId"],
    "official-corrections": ["questionId", "correctionSourceId", "publishedAt", "sequence", "correctionType", "result", "supersedesCorrectionId", "effectiveDate"],
    explanations: ["questionId", "locale", "status", "correctReason", "wrongOptionAnalysisIds", "examTrap", "twentySecondStrategy", "memoryTrick", "relatedLessonIds", "relatedFlashcardIds", "relatedQuestionLinkIds", "reviewNotes"],
    "wrong-option-analyses": ["questionId", "optionId", "looksAttractiveBecause", "failsBecause", "misconception", "avoidanceRule", "examTrapId", "relatedQuestionLinkIds"],
    "pattern-clusters": ["subjectId", "title", "description", "questionIds", "topicIds", "patternType", "analysisEvidence", "frequencyLevel", "goldenRuleIds", "examTrapIds"],
    "golden-rules": ["subjectId", "topicIds", "statement", "patternClusterIds", "aggregationStatus", "aggregatedRuleIds", "relatedQuestionIds", "searchAliasIds", "contentOrigin", "frequencyStatus", "bookmarkable"],
    flashcards: ["subjectId", "topicIds", "category", "front", "back", "importance", "relatedQuestionIds", "difficulty", "goldenRuleIds", "searchAliasIds", "contentOrigin", "frequencyStatus", "bookmarkable"],
    "exam-traps": ["subjectId", "topicIds", "title", "trap", "wrongThinking", "correctThinking", "shortcut", "relatedQuestionIds", "trapType", "patternClusterIds", "frequencyLevel", "contentOrigin", "frequencyStatus", "bookmarkable"],
    "five-minute-reviews": ["subjectId", "title", "items", "assetReferences", "estimatedReviewSeconds", "searchAliasIds", "contentOrigin", "frequencyStatus", "bookmarkable"],
    "crash-courses": ["subjectId", "title", "estimatedMinutes", "sectionReferences", "quickQuizQuestionIds", "topicIds", "goldenRuleIds", "examTrapIds", "flashcardIds", "fiveMinuteReviewId"],
    "cheat-sheets": ["subjectId", "title", "items", "assetReferences", "searchAliasIds", "printLayoutVersion"],
    "search-aliases": ["locale", "alias", "normalizedAlias", "targetEntityIds", "aliasType"],
    "related-topics": ["fromTopicId", "toTopicId", "relationType", "direction", "evidenceQuestionIds", "description", "relationStatus", "contentOrigin"],
    "related-questions": ["fromQuestionId", "toQuestionId", "relationTypes", "evidence", "patternClusterIds", "reviewNotes"]
  });
  const REQUIRED_ENTITY_FIELDS = Object.freeze({
    subjects: ["slug", "title", "summary", "status", "topicIds", "reviewOrder", "fiveMinuteReviewId"],
    topics: ["subjectId", "slug", "title", "summary", "status", "lessonIds", "flashcardIds", "goldenRuleIds", "examTrapIds", "relatedQuestionIds", "relatedTopicLinkIds"],
    lessons: ["subjectId", "topicId", "title", "summary", "estimatedReadingMinutes", "sections", "goldenRuleIds", "examTrapIds", "flashcardIds", "relatedQuestionIds"],
    questions: ["year", "paperCode", "questionNumber", "subjectId", "topicIds", "contentStatus", "responseMode", "text", "imageAssetIds", "optionIds", "questionStatus", "officialAnswerIds", "officialCorrectionIds", "explanationStatus", "explanationId"],
    "question-options": ["questionId", "optionKey", "order", "text", "imageAssetIds"],
    "official-answers": ["questionId", "answerKeySourceId", "acceptedOptionIds", "answerStatus", "effectiveDate"],
    "official-corrections": ["questionId", "correctionSourceId", "publishedAt", "sequence", "correctionType", "result"],
    explanations: ["questionId", "locale", "status", "correctReason", "wrongOptionAnalysisIds", "examTrap", "twentySecondStrategy", "memoryTrick"],
    "wrong-option-analyses": ["questionId", "optionId", "looksAttractiveBecause", "failsBecause", "misconception", "avoidanceRule"],
    "pattern-clusters": ["subjectId", "title", "description", "questionIds", "topicIds", "patternType", "analysisEvidence"],
    "golden-rules": ["subjectId", "topicIds", "statement", "patternClusterIds", "aggregationStatus", "aggregatedRuleIds"],
    flashcards: ["subjectId", "topicIds", "category", "front", "back", "importance", "relatedQuestionIds"],
    "exam-traps": ["subjectId", "topicIds", "title", "trap", "wrongThinking", "correctThinking", "shortcut", "relatedQuestionIds"],
    "five-minute-reviews": ["subjectId", "title", "items", "assetReferences"],
    "crash-courses": ["subjectId", "title", "estimatedMinutes", "sectionReferences", "quickQuizQuestionIds"],
    "cheat-sheets": ["subjectId", "title", "items", "assetReferences"],
    "search-aliases": ["locale", "alias", "normalizedAlias", "targetEntityIds"],
    "related-topics": ["fromTopicId", "toTopicId", "relationType", "direction", "evidenceQuestionIds"],
    "related-questions": ["fromQuestionId", "toQuestionId", "relationTypes", "evidence"]
  });
  const SOURCE_FIELDS = Object.freeze([
    "id", "recordKey", "schemaVersion", "version", "year", "sourceType", "title",
    "paperSourceId", "answerKeySourceId", "correctionSourceIds", "publisher",
    "retrievalDate", "localFilename", "originalUrl", "checksum", "verificationStatus",
    "verificationNotes", "licenseOrRedistributionNote", "questionNumberCoverage",
    "knownInconsistencies", "createdAt", "updatedAt", "publicationDate", "edition", "language"
  ]);

  function isPlainObject(value) {
    if (!value || Object.prototype.toString.call(value) !== "[object Object]") {
      return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
  }

  function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
  }

  function isIsoTimestamp(value) {
    return typeof value === "string"
      && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value)
      && !Number.isNaN(Date.parse(value));
  }

  function isStableId(value) {
    return typeof value === "string"
      && /^[a-z0-9][a-z0-9.-]*(?::[a-z0-9][a-z0-9.-]*)+$/.test(value);
  }

  function issue(code, path, message) {
    return Object.freeze({ code, path, message });
  }

  function unknownFields(value, allowed, path) {
    if (!isPlainObject(value)) {
      return [];
    }

    return Object.keys(value)
      .filter((key) => !allowed.includes(key))
      .map((key) => issue("unknown-field", `${path}.${key}`, "Unknown field."));
  }

  function validateSearchDocument(document, path) {
    const issues = [];
    const allowed = ["entityId", "entityType", "title", "body", "route", "aliases"];
    issues.push(...unknownFields(document, allowed, path));

    if (!isPlainObject(document)) {
      return [issue("invalid-type", path, "Search document must be an object.")];
    }

    ["entityId", "entityType", "title", "route"].forEach((field) => {
      if (typeof document[field] !== "string" || !document[field].trim()) {
        issues.push(issue("required", `${path}.${field}`, "Required non-empty string."));
      }
    });

    if (typeof document.body !== "string") {
      issues.push(issue("invalid-type", `${path}.body`, "Body must be a string."));
    }

    if (!Array.isArray(document.aliases) || document.aliases.some((alias) => typeof alias !== "string")) {
      issues.push(issue("invalid-type", `${path}.aliases`, "Aliases must be a string array."));
    }

    return issues;
  }

  function validateTestRecord(record, path) {
    const issues = unknownFields(record, TEST_RECORD_FIELDS, path);

    if (!isPlainObject(record)) {
      return [issue("invalid-type", path, "Record must be an object.")];
    }

    if (!isStableId(record.id)) {
      issues.push(issue("invalid-id", `${path}.id`, "Invalid stable ID."));
    }

    if (record.recordKey !== `${record.id}@${record.version}`) {
      issues.push(issue("invalid-record-key", `${path}.recordKey`, "Record key must match ID and version."));
    }

    if (record.schemaVersion !== 1 || !isPositiveInteger(record.version)) {
      issues.push(issue("invalid-version", path, "Schema and record versions must be positive integers."));
    }

    if (record.testOnly !== true) {
      issues.push(issue("test-boundary", `${path}.testOnly`, "Fixture records must be test-only."));
    }

    issues.push(...validateSearchDocument(record.searchDocument, `${path}.searchDocument`));
    return issues;
  }

  function validateApproval(approval, path) {
    if (!isPlainObject(approval) || !["not-applicable", "pending", "approved", "rejected"].includes(approval.status)) {
      return [issue("invalid-approval", path, "Invalid educational approval.")];
    }
    if (["approved", "rejected"].includes(approval.status)
      && (approval.reviewerRole !== "exam-editor" || !isIsoTimestamp(approval.reviewedAt)
        || !isPositiveInteger(approval.reviewContractVersion))) {
      return [issue("invalid-approval", path, "Completed approval requires reviewer and timestamp.")];
    }
    if (approval.status === "not-applicable"
      && (approval.reviewerRole !== null || approval.reviewedAt !== null || approval.reviewContractVersion !== null)) {
      return [issue("invalid-approval", path, "Not-applicable approval fields must be null.")];
    }
    if (approval.status === "pending"
      && (approval.reviewerRole !== "exam-editor" || approval.reviewedAt !== null || approval.reviewContractVersion !== null)) {
      return [issue("invalid-approval", path, "Pending approval fields are invalid.")];
    }
    return [];
  }

  function isLocalizedText(value) {
    if (!isPlainObject(value) || !["en", "fa"].includes(value.primaryLocale)
      || !["not-requested", "missing", "draft", "verified", "not-applicable"].includes(value.translationStatus)) {
      return false;
    }
    const primary = value[value.primaryLocale];
    return typeof primary === "string" && primary.trim().length > 0;
  }

  function validateSourceRecord(record, path) {
    const issues = [];
    if (!isPlainObject(record)) {
      return [issue("invalid-type", path, "Record must be an object.")];
    }
    issues.push(...unknownFields(record, SOURCE_FIELDS, path));
    SOURCE_FIELDS.slice(0, 22).forEach((field) => {
      if (!Object.prototype.hasOwnProperty.call(record, field)) {
        issues.push(issue("required", `${path}.${field}`, "Required field is missing."));
      }
    });
    if (!isStableId(record.id)) {
      issues.push(issue("invalid-id", `${path}.id`, "Invalid stable ID."));
    }
    if (record.recordKey !== `${record.id}@${record.version}`) {
      issues.push(issue("invalid-record-key", `${path}.recordKey`, "Record key must match ID and version."));
    }
    if (!isPositiveInteger(record.schemaVersion) || !isPositiveInteger(record.version)) {
      issues.push(issue("invalid-version", path, "Schema and record versions must be positive integers."));
    }
    if (!isIsoTimestamp(record.createdAt) || !isIsoTimestamp(record.updatedAt)) {
      issues.push(issue("invalid-timestamp", path, "Record timestamps must be ISO UTC values."));
    }
    if (!["exam-paper", "answer-key", "official-correction", "verified-reference"].includes(record.sourceType)) {
      issues.push(issue("invalid-enum", `${path}.sourceType`, "Invalid source type."));
    }
    if (!["pending-acquisition", "acquired-unverified", "legacy-unverified", "partially-verified", "verified", "disputed", "unavailable"].includes(record.verificationStatus)) {
      issues.push(issue("invalid-enum", `${path}.verificationStatus`, "Invalid source verification status."));
    }
    ["title", "publisher", "licenseOrRedistributionNote"].forEach((field) => {
      if (typeof record[field] !== "string" || !record[field].trim()) {
        issues.push(issue("required", `${path}.${field}`, "Required non-empty source field."));
      }
    });
    if (record.sourceType === "verified-reference" && record.year !== null) {
      issues.push(issue("invalid-year", `${path}.year`, "Non-exam references require a null year."));
    }
    if (record.sourceType !== "verified-reference" && !Number.isInteger(record.year)) {
      issues.push(issue("invalid-year", `${path}.year`, "Exam source year must be an integer."));
    }
    if (!Array.isArray(record.correctionSourceIds) || !Array.isArray(record.questionNumberCoverage)
      || !Array.isArray(record.knownInconsistencies)) {
      issues.push(issue("invalid-type", path, "Source arrays are invalid."));
    }
    if ((record.localFilename === null) !== (record.checksum === null)) {
      issues.push(issue("source-pair", path, "Local filename and checksum must occur together."));
    }
    if (record.checksum !== null && !/^sha256:[a-f0-9]{64}$/.test(record.checksum)) {
      issues.push(issue("invalid-checksum", `${path}.checksum`, "Checksum must be prefixed SHA-256."));
    }
    if ((record.retrievalDate !== null && !/^\d{4}-\d{2}-\d{2}$/.test(record.retrievalDate))
      || Date.parse(record.updatedAt) < Date.parse(record.createdAt)) {
      issues.push(issue("invalid-timestamp", path, "Source dates are invalid or unordered."));
    }
    if (record.originalUrl !== null && !/^https:\/\//.test(record.originalUrl)) {
      issues.push(issue("invalid-url", `${path}.originalUrl`, "Source URL must use HTTPS."));
    }
    return issues;
  }

  function validateCommonRecord(record, path, datasetType) {
    const issues = [];
    if (!isPlainObject(record)) {
      return [issue("invalid-type", path, "Record must be an object.")];
    }
    const entityFields = ENTITY_FIELDS[datasetType] || [];
    issues.push(...unknownFields(record, [...COMMON_RECORD_FIELDS, ...entityFields], path));
    [...COMMON_RECORD_FIELDS, ...(REQUIRED_ENTITY_FIELDS[datasetType] || [])].forEach((field) => {
      if (!Object.prototype.hasOwnProperty.call(record, field)) {
        issues.push(issue("required", `${path}.${field}`, "Required field is missing."));
      }
    });
    if (!isStableId(record.id)) {
      issues.push(issue("invalid-id", `${path}.id`, "Invalid stable ID."));
    }
    if (record.recordKey !== `${record.id}@${record.version}`) {
      issues.push(issue("invalid-record-key", `${path}.recordKey`, "Record key must match ID and version."));
    }
    if (record.schemaVersion !== 1 || !isPositiveInteger(record.version)) {
      issues.push(issue("invalid-version", path, "Schema and record versions must be positive integers."));
    }
    if (!["unverified", "expert-reviewed", "partially-verified", "verified", "disputed", "not-applicable"].includes(record.verificationStatus)
      || !["draft", "in-review", "published", "withdrawn"].includes(record.publicationStatus)) {
      issues.push(issue("invalid-enum", path, "Verification or publication status is invalid."));
    }
    issues.push(...validateApproval(record.educationalApproval, `${path}.educationalApproval`));
    if (!isIsoTimestamp(record.createdAt) || !isIsoTimestamp(record.updatedAt)
      || Date.parse(record.updatedAt) < Date.parse(record.createdAt)) {
      issues.push(issue("invalid-timestamp", path, "Record timestamps are invalid or unordered."));
    }
    if (!Array.isArray(record.sourceIds)) {
      issues.push(issue("invalid-type", `${path}.sourceIds`, "Source IDs must be an array."));
    }
    if (record.primarySourceId !== null && (!Array.isArray(record.sourceIds) || !record.sourceIds.includes(record.primarySourceId))) {
      issues.push(issue("provenance", `${path}.primarySourceId`, "Primary source must occur in source IDs."));
    }
    if (record.sourceUrl !== null && !/^https:\/\//.test(record.sourceUrl)) {
      issues.push(issue("invalid-url", `${path}.sourceUrl`, "Source URL must use HTTPS."));
    }
    if (record.publicationStatus === "published" && ["pending", "rejected"].includes(record.educationalApproval.status)) {
      issues.push(issue("publication-gate", path, "Published content requires educational approval."));
    }
    ["title", "summary", "front", "back", "text"].forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(record, field) && record[field] !== null
        && !isLocalizedText(record[field]) && typeof record[field] !== "string") {
        issues.push(issue("invalid-localized-text", `${path}.${field}`, "Localized text shape is invalid."));
      }
    });
    const arrayFields = (ENTITY_FIELDS[datasetType] || []).filter((field) => field.endsWith("Ids") || ["sections", "items", "assetReferences", "sectionReferences"].includes(field));
    arrayFields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(record, field) && !Array.isArray(record[field])) {
        issues.push(issue("invalid-type", `${path}.${field}`, "Field must be an array."));
      }
    });
    if (datasetType === "questions") {
      if (!Number.isInteger(record.year) || !isPositiveInteger(record.questionNumber)
        || record.responseMode !== "single-choice"
        || !["active", "deleted", "disputed", "incomplete-source"].includes(record.questionStatus)) {
        issues.push(issue("invalid-question", path, "Question identity or status is invalid."));
      }
    }
    const prefixByType = {
      subjects: "subject:", topics: "topic:", lessons: "lesson:", questions: "question:",
      "question-options": "question:", "official-answers": "answer:", "official-corrections": "correction:",
      explanations: "explanation:", "wrong-option-analyses": "wrong-option:", "pattern-clusters": "pattern:",
      "golden-rules": "golden-rule:", flashcards: "flashcard:", "exam-traps": "exam-trap:",
      "five-minute-reviews": "five-minute-review:", "crash-courses": "crash-course:",
      "cheat-sheets": "cheat-sheet:", "search-aliases": "search-alias:",
      "related-topics": "topic-link:", "related-questions": "question-link:"
    };
    if (prefixByType[datasetType] && !record.id.startsWith(prefixByType[datasetType])) {
      issues.push(issue("id-namespace", `${path}.id`, "Record ID does not match dataset type."));
    }
    if (datasetType === "lessons" && (!isPositiveInteger(record.estimatedReadingMinutes) || record.estimatedReadingMinutes > 15)) {
      issues.push(issue("invalid-duration", `${path}.estimatedReadingMinutes`, "Lesson duration must be 1 through 15 minutes."));
    }
    return issues;
  }

  function validateDataset(dataset, options) {
    const settings = options || {};
    const issues = [];

    if (!isPlainObject(dataset)) {
      return Object.freeze({ valid: false, issues: [issue("invalid-type", "dataset", "Dataset must be an object.")] });
    }

    issues.push(...unknownFields(dataset, DATASET_FIELDS, "dataset"));

    if (!isStableId(dataset.datasetId)) {
      issues.push(issue("invalid-id", "dataset.datasetId", "Invalid dataset ID."));
    }

    const isFixture = dataset.datasetType === "test-fixture";
    if (!DATASET_TYPES.includes(dataset.datasetType) && !isFixture) {
      issues.push(issue("unknown-dataset-type", "dataset.datasetType", "Unsupported dataset type."));
    }

    if (isFixture && (!settings.allowTestFixtures || dataset.testOnly !== true)) {
      issues.push(issue("test-boundary", "dataset.datasetType", "Test fixtures are not allowed here."));
    }

    if (dataset.schemaVersion !== 1 || !isPositiveInteger(dataset.version)) {
      issues.push(issue("invalid-version", "dataset", "Dataset versions must be positive integers."));
    }

    if (dataset.testOnly === true && !settings.allowTestFixtures) {
      issues.push(issue("test-boundary", "dataset.testOnly", "Test-only datasets are not allowed here."));
    }

    if (!Array.isArray(dataset.records)) {
      issues.push(issue("invalid-type", "dataset.records", "Records must be an array."));
    } else {
      const recordKeys = new Set();
      dataset.records.forEach((record, index) => {
        const path = `dataset.records[${index}]`;
        const recordIssues = isFixture
          ? validateTestRecord(record, path)
          : dataset.datasetType === "source-records"
            ? validateSourceRecord(record, path)
            : validateCommonRecord(record, path, dataset.datasetType);
        issues.push(...recordIssues);
        if (record && recordKeys.has(record.recordKey)) {
          issues.push(issue("duplicate-record-key", `${path}.recordKey`, "Duplicate record key."));
        }
        if (record) {
          recordKeys.add(record.recordKey);
        }
      });
    }

    return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
  }

  function validateReferences(datasets) {
    const issues = [];
    const recordsById = new Map();
    const expectedTypes = {
      subjectId: ["subjects"], topicId: ["topics"], questionId: ["questions"], optionId: ["question-options"],
      answerKeySourceId: ["source-records"], correctionSourceId: ["source-records"], primarySourceId: ["source-records"],
      paperSourceId: ["source-records"], explanationId: ["explanations"], examTrapId: ["exam-traps"],
      fiveMinuteReviewId: ["five-minute-reviews"], fromTopicId: ["topics"], toTopicId: ["topics"],
      fromQuestionId: ["questions"], toQuestionId: ["questions"]
    };
    const expectedArrayTypes = {
      sourceIds: ["source-records"], topicIds: ["topics"], questionIds: ["questions"], optionIds: ["question-options"],
      acceptedOptionIds: ["question-options"], lessonIds: ["lessons"], flashcardIds: ["flashcards"],
      goldenRuleIds: ["golden-rules"], examTrapIds: ["exam-traps"], officialAnswerIds: ["official-answers"],
      officialCorrectionIds: ["official-corrections"], relatedQuestionIds: ["questions"], targetEntityIds: DATASET_TYPES,
      prerequisiteTopicIds: ["topics"], relatedLessonIds: ["lessons"], searchAliasIds: ["search-aliases"],
      patternClusterIds: ["pattern-clusters"], wrongOptionAnalysisIds: ["wrong-option-analyses"],
      relatedQuestionLinkIds: ["related-questions"], relatedTopicLinkIds: ["related-topics"],
      quickQuizQuestionIds: ["questions"], aggregatedRuleIds: ["golden-rules"],
      evidenceQuestionIds: ["questions"], correctionSourceIds: ["source-records"]
    };

    datasets.forEach((dataset) => {
      dataset.records.forEach((record) => recordsById.set(record.id, { record, datasetType: dataset.datasetType }));
    });

    datasets.forEach((dataset) => {
      dataset.records.forEach((record, recordIndex) => {
        Object.entries(expectedTypes).forEach(([field, types]) => {
          const value = record[field];
          if (typeof value === "string") {
            const target = recordsById.get(value);
            if (!target || !types.includes(target.datasetType)) {
              issues.push(issue("dangling-reference", `${dataset.datasetId}.records[${recordIndex}].${field}`, value));
            }
          }
        });
        Object.entries(expectedArrayTypes).forEach(([field, types]) => {
          const values = record[field];
          if (Array.isArray(values)) {
            values.forEach((value) => {
              const target = recordsById.get(value);
              if (!target || !types.includes(target.datasetType)) {
                issues.push(issue("dangling-reference", `${dataset.datasetId}.records[${recordIndex}].${field}`, value));
              }
            });
          }
        });

        if (dataset.datasetType !== "source-records" && record.publicationStatus === "published") {
          (record.sourceIds || []).forEach((sourceId) => {
            const source = recordsById.get(sourceId);
            if (!source || !["verified", "legacy-unverified"].includes(source.record.verificationStatus)) {
              issues.push(issue("unverified-provenance", `${dataset.datasetId}.records[${recordIndex}].sourceIds`, sourceId));
            }
          });
        }
        if (dataset.datasetType === "official-answers") {
          const source = recordsById.get(record.answerKeySourceId);
          if (!source || source.record.sourceType !== "answer-key" || !["verified", "legacy-unverified"].includes(source.record.verificationStatus)) {
            issues.push(issue("invalid-answer-provenance", `${dataset.datasetId}.records[${recordIndex}].answerKeySourceId`, record.answerKeySourceId));
          }
        }
        if (dataset.datasetType === "official-corrections") {
          const source = recordsById.get(record.correctionSourceId);
          if (!source || source.record.sourceType !== "official-correction" || source.record.verificationStatus !== "verified") {
            issues.push(issue("invalid-correction-provenance", `${dataset.datasetId}.records[${recordIndex}].correctionSourceId`, record.correctionSourceId));
          }
        }
        if (record.subjectId && record.topicId) {
          const topic = recordsById.get(record.topicId);
          if (topic && topic.record.subjectId !== record.subjectId) {
            issues.push(issue("ownership-mismatch", `${dataset.datasetId}.records[${recordIndex}].topicId`, record.topicId));
          }
        }
        if (record.subjectId && Array.isArray(record.topicIds)) {
          record.topicIds.forEach((topicId) => {
            const topic = recordsById.get(topicId);
            if (topic && topic.record.subjectId !== record.subjectId) {
              issues.push(issue("ownership-mismatch", `${dataset.datasetId}.records[${recordIndex}].topicIds`, topicId));
            }
          });
        }
        if (dataset.datasetType === "question-options") {
          const question = recordsById.get(record.questionId);
          if (!question || !record.id.startsWith(`${record.questionId}:option:`)
            || !question.record.optionIds.includes(record.id)) {
            issues.push(issue("option-ownership", `${dataset.datasetId}.records[${recordIndex}]`, record.id));
          }
        }
        if (dataset.datasetType === "official-answers") {
          record.acceptedOptionIds.forEach((optionId) => {
            const option = recordsById.get(optionId);
            if (!option || option.record.questionId !== record.questionId) {
              issues.push(issue("answer-option-ownership", `${dataset.datasetId}.records[${recordIndex}].acceptedOptionIds`, optionId));
            }
          });
        }
      });
    });

    return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
  }

  app.register("validation", "validators", {
    DATASET_TYPES,
    isPlainObject,
    isPositiveInteger,
    isIsoTimestamp,
    isStableId,
    issue,
    unknownFields,
    validateDataset,
    validateReferences
  });
})(window);
