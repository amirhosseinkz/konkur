(function registerTopicValidation(global) {
  "use strict";

  const app = global.KonkurApp;
  const allowedOrigins = Object.freeze(["expert-curated", "exam-derived"]);
  const allowedFrequency = Object.freeze(["unknown", "verified"]);
  const allowedRelation = Object.freeze(["unverified", "reviewed", "verified"]);

  function getRecords(datasetType) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === datasetType && !dataset.testOnly)
      .flatMap((dataset) => dataset.records);
  }

  function validateNetworkContent() {
    const issues = [];
    const topics = getRecords("topics").filter((topic) => topic.subjectId === "subject:network");
    const lessons = getRecords("lessons");
    const flashcards = getRecords("flashcards");
    const rules = getRecords("golden-rules");
    const traps = getRecords("exam-traps");
    const reviews = getRecords("five-minute-reviews");
    const relations = getRecords("related-topics");
    const ids = new Set();

    [topics, lessons, flashcards, rules, traps, reviews, relations].flat().forEach((record) => {
      if (ids.has(record.id)) issues.push({ code: "duplicate-id", id: record.id });
      ids.add(record.id);
      if (record.contentOrigin && !allowedOrigins.includes(record.contentOrigin)) {
        issues.push({ code: "invalid-content-origin", id: record.id });
      }
      if (record.frequencyStatus && !allowedFrequency.includes(record.frequencyStatus)) {
        issues.push({ code: "invalid-frequency-status", id: record.id });
      }
    });

    topics.forEach((topic) => {
      if (topic.frequencyStatus !== "unknown" || topic.frequency !== "unknown") {
        issues.push({ code: "unsupported-frequency-claim", id: topic.id });
      }
      if (!topic.lessonIds || topic.lessonIds.length === 0) {
        issues.push({ code: "topic-missing-lesson", id: topic.id });
      }
      if (!topic.flashcardIds || topic.flashcardIds.length === 0) {
        issues.push({ code: "topic-missing-flashcard", id: topic.id });
      }
      (topic.relatedQuestionIds || []).forEach((questionId) => {
        issues.push({ code: "fabricated-question-link", id: topic.id, questionId });
      });
    });

    relations.forEach((relation) => {
      if (!allowedRelation.includes(relation.relationStatus)) {
        issues.push({ code: "invalid-relation-status", id: relation.id });
      }
      if ((relation.evidenceQuestionIds || []).length > 0 && relation.relationStatus !== "verified") {
        issues.push({ code: "unverified-question-evidence", id: relation.id });
      }
    });

    if (reviews.filter((review) => review.subjectId === "subject:network").length !== 1) {
      issues.push({ code: "network-review-count" });
    }

    return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
  }

  app.register("validation", "topicValidation", {
    allowedOrigins,
    allowedFrequency,
    allowedRelation,
    validateNetworkContent
  });
})(window);
