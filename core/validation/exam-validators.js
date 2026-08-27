(function registerExamValidators(global) {
  "use strict";

  const app = global.KonkurApp;
  const base = app.validation.validators;

  const QUESTION_STATUS_VALUES = Object.freeze(["active", "deleted", "disputed", "incomplete-source"]);
  const CONTENT_STATUS_VALUES = Object.freeze(["verified-text", "verified-image", "verified-mixed", "text-unavailable", "unverified"]);
  const ANSWER_STATUS_VALUES = Object.freeze(["verified", "disputed", "withdrawn", "unknown"]);
  const CORRECTION_TYPES = Object.freeze(["answer-change", "multiple-accepted", "question-deleted", "question-text", "other"]);
  const EXPLANATION_STATUS_VALUES = Object.freeze(["missing", "draft", "educationally-approved", "published"]);

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function validateQuestionDetail(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return issues;
    }
    if (!CONTENT_STATUS_VALUES.includes(record.contentStatus)) {
      issues.push(base.issue("invalid-enum", `${path}.contentStatus`, "Invalid content status."));
    }
    if (record.responseMode !== "single-choice") {
      issues.push(base.issue("invalid-enum", `${path}.responseMode`, "Version 1 supports single-choice only."));
    }
    if (!QUESTION_STATUS_VALUES.includes(record.questionStatus)) {
      issues.push(base.issue("invalid-enum", `${path}.questionStatus`, "Invalid question status."));
    }
    if (record.year !== undefined && (!Number.isInteger(record.year) || record.year < 1395 || record.year > 1404)) {
      issues.push(base.issue("invalid-year", `${path}.year`, "Question year must be 1395 through 1404."));
    }
    if (record.questionNumber !== undefined && !base.isPositiveInteger(record.questionNumber)) {
      issues.push(base.issue("invalid-number", `${path}.questionNumber`, "Question number must be a positive integer."));
    }
    if (!isNonEmptyString(record.paperCode)) {
      issues.push(base.issue("required", `${path}.paperCode`, "Paper code must be a non-empty string."));
    }
    if (record.contentStatus === "verified-text" || record.contentStatus === "verified-mixed") {
      if (record.text === null || !base.isPlainObject(record.text)) {
        issues.push(base.issue("required", `${path}.text`, "Text or mixed questions require non-null text."));
      }
      if (!Array.isArray(record.optionIds) || record.optionIds.length < 4) {
        issues.push(base.issue("invalid-options", `${path}.optionIds`, "Text questions require at least four options."));
      }
    }
    if (record.contentStatus === "verified-image" || record.contentStatus === "verified-mixed") {
      if (!Array.isArray(record.imageAssetIds) || record.imageAssetIds.length === 0) {
        issues.push(base.issue("required", `${path}.imageAssetIds`, "Image questions require at least one image asset."));
      }
    }
    if (record.questionStatus === "active" && record.publicationStatus === "published") {
      if (!Array.isArray(record.officialAnswerIds) || record.officialAnswerIds.length === 0) {
        issues.push(base.issue("provenance", `${path}.officialAnswerIds`, "Published active questions require at least one official answer."));
      }
    }
    if (record.questionStatus === "deleted" && record.publicationStatus === "published") {
      if (record.officialAnswerIds && record.officialAnswerIds.length > 0) {
        issues.push(base.issue("deleted-question", `${path}.officialAnswerIds`, "Deleted questions should not have active official answers."));
      }
    }
    if (!EXPLANATION_STATUS_VALUES.includes(record.explanationStatus)) {
      issues.push(base.issue("invalid-enum", `${path}.explanationStatus`, "Invalid explanation status."));
    }
    if (record.explanationStatus !== "missing" && !base.isStableId(record.explanationId)) {
      issues.push(base.issue("required", `${path}.explanationId`, "Non-missing explanation status requires an explanation ID."));
    }
    if (record.explanationStatus === "missing" && record.explanationId !== null) {
      issues.push(base.issue("invalid-state", `${path}.explanationId`, "Missing explanation status requires null explanation ID."));
    }
    return issues;
  }

  function validateOptionDetail(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return issues;
    }
    if (!isNonEmptyString(record.optionKey)) {
      issues.push(base.issue("required", `${path}.optionKey`, "Option key must be a non-empty string."));
    }
    if (!base.isPositiveInteger(record.order)) {
      issues.push(base.issue("invalid-number", `${path}.order`, "Option order must be a positive integer."));
    }
    if (record.text === null && (!Array.isArray(record.imageAssetIds) || record.imageAssetIds.length === 0)) {
      issues.push(base.issue("required", `${path}.text`, "Option must have text or image unless parent question is incomplete-source."));
    }
    return issues;
  }

  function validateAnswerDetail(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return issues;
    }
    if (!ANSWER_STATUS_VALUES.includes(record.answerStatus)) {
      issues.push(base.issue("invalid-enum", `${path}.answerStatus`, "Invalid answer status."));
    }
    if (record.answerStatus === "verified") {
      if (!Array.isArray(record.acceptedOptionIds) || record.acceptedOptionIds.length === 0) {
        issues.push(base.issue("invalid-accepted", `${path}.acceptedOptionIds`, "Verified answers must have at least one accepted option."));
      }
      const unique = new Set(record.acceptedOptionIds);
      if (unique.size !== record.acceptedOptionIds.length) {
        issues.push(base.issue("duplicate-accepted", `${path}.acceptedOptionIds`, "Accepted option IDs must be unique."));
      }
    }
    if (record.answerStatus === "unknown" && Array.isArray(record.acceptedOptionIds) && record.acceptedOptionIds.length > 0) {
      issues.push(base.issue("invalid-accepted", `${path}.acceptedOptionIds`, "Unknown answers must have no accepted options."));
    }
    if (!base.isStableId(record.answerKeySourceId)) {
      issues.push(base.issue("provenance", `${path}.answerKeySourceId`, "Answer key source ID is required."));
    }
    if (record.effectiveDate !== null && !app.validation.sourceValidation.isIsoDate(record.effectiveDate)) {
      issues.push(base.issue("invalid-date", `${path}.effectiveDate`, "Effective date must be an ISO date or null."));
    }
    return issues;
  }

  function validateCorrectionDetail(record, path) {
    const issues = [];
    if (!base.isPlainObject(record)) {
      return issues;
    }
    if (!CORRECTION_TYPES.includes(record.correctionType)) {
      issues.push(base.issue("invalid-enum", `${path}.correctionType`, "Invalid correction type."));
    }
    if (!base.isStableId(record.correctionSourceId)) {
      issues.push(base.issue("provenance", `${path}.correctionSourceId`, "Correction source ID is required."));
    }
    if (!base.isPositiveInteger(record.sequence)) {
      issues.push(base.issue("invalid-number", `${path}.sequence`, "Correction sequence must be a positive integer."));
    }
    if (!app.validation.sourceValidation.isIsoDate(record.publishedAt)) {
      issues.push(base.issue("invalid-date", `${path}.publishedAt`, "Published date must be an ISO date."));
    }
    if (record.effectiveDate !== null && !app.validation.sourceValidation.isIsoDate(record.effectiveDate)) {
      issues.push(base.issue("invalid-date", `${path}.effectiveDate`, "Effective date must be an ISO date or null."));
    }
    if (!base.isPlainObject(record.result)) {
      issues.push(base.issue("invalid-type", `${path}.result`, "Correction result must be an object."));
    } else {
      if (record.correctionType === "answer-change" || record.correctionType === "multiple-accepted") {
        if (!Array.isArray(record.result.acceptedOptionIds) || record.result.acceptedOptionIds.length === 0) {
          issues.push(base.issue("invalid-result", `${path}.result.acceptedOptionIds`, "Answer-change corrections require accepted option IDs."));
        }
      }
      if (record.correctionType === "question-deleted") {
        if (record.result.questionStatus !== "deleted") {
          issues.push(base.issue("invalid-result", `${path}.result.questionStatus`, "Question-deleted correction must set questionStatus to deleted."));
        }
      }
      if (!["active", "deleted", "disputed", "incomplete-source"].includes(record.result.questionStatus)) {
        issues.push(base.issue("invalid-result", `${path}.result.questionStatus`, "Invalid result question status."));
      }
    }
    return issues;
  }

  function validateExamReferences(datasets) {
    const issues = [];
    const recordsById = new Map();
    const questionsByYearPaper = new Map();

    datasets.forEach((dataset) => {
      dataset.records.forEach((record) => {
        recordsById.set(record.id, { record, datasetType: dataset.datasetType });
        if (dataset.datasetType === "questions") {
          const key = `${record.year}:${record.paperCode}`;
          const questions = questionsByYearPaper.get(key) || [];
          questions.push(record);
          questionsByYearPaper.set(key, questions);
        }
      });
    });

    questionsByYearPaper.forEach((questions, key) => {
      const numbers = questions.map((q) => q.questionNumber);
      const unique = new Set(numbers);
      if (unique.size !== numbers.length) {
        issues.push(base.issue("duplicate-question-number", `questions:${key}`, "Duplicate question numbers within year and paper code."));
      }
    });

    datasets.forEach((dataset) => {
      if (dataset.datasetType === "official-answers") {
        dataset.records.forEach((record, index) => {
          record.acceptedOptionIds.forEach((optionId) => {
            const option = recordsById.get(optionId);
            if (option && option.record.questionId !== record.questionId) {
              issues.push(base.issue("answer-option-ownership", `${dataset.datasetId}.records[${index}].acceptedOptionIds`, optionId));
            }
          });
        });
      }
      if (dataset.datasetType === "official-corrections") {
        dataset.records.forEach((record, index) => {
          const question = recordsById.get(record.questionId);
          if (!question) {
            issues.push(base.issue("dangling-reference", `${dataset.datasetId}.records[${index}].questionId`, record.questionId));
          }
        });
      }
    });

    return Object.freeze(issues);
  }

  app.register("validation", "examValidators", {
    QUESTION_STATUS_VALUES,
    CONTENT_STATUS_VALUES,
    ANSWER_STATUS_VALUES,
    CORRECTION_TYPES,
    EXPLANATION_STATUS_VALUES,
    validateQuestionDetail,
    validateOptionDetail,
    validateAnswerDetail,
    validateCorrectionDetail,
    validateExamReferences
  });
})(window);