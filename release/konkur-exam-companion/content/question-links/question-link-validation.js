(function registerQuestionLinkValidation(global) {
  "use strict";

  const app = global.KonkurApp;
  const sources = Object.freeze(["manual-pdf-review", "official-analysis", "legacy-prototype", "expert-review"]);
  const statuses = Object.freeze(["unverified", "reviewed", "verified", "rejected"]);

  function validateRecord(record) {
    const issues = [];
    if (!record || typeof record !== "object") return ["invalid-record"];
    if (!app.validation.validators.isStableId(record.questionId)) issues.push("invalid-question-id");
    if (!Array.isArray(record.topicIds) || record.topicIds.some((id) => !app.validation.validators.isStableId(id))) issues.push("invalid-topic-ids");
    if (!sources.includes(record.mappingSource)) issues.push("invalid-source");
    if (!statuses.includes(record.verificationStatus)) issues.push("invalid-status");
    if (record.verificationStatus === "verified" && (!record.verifiedBy || !/^\d{4}-\d{2}-\d{2}$/.test(record.verificationDate || ""))) {
      issues.push("missing-verification-evidence");
    }
    return issues;
  }

  function validateDataset(dataset) {
    const issues = [];
    if (!dataset || dataset.datasetId !== "question-topic-links:network" || !Array.isArray(dataset.records)) {
      return Object.freeze({ valid: false, issues: Object.freeze(["invalid-dataset"]) });
    }
    dataset.records.forEach((record, index) => {
      validateRecord(record).forEach((issue) => issues.push({ code: issue, index }));
    });
    return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
  }

  app.register("validation", "questionLinkValidation", { sources, statuses, validateRecord, validateDataset });
})(window);
