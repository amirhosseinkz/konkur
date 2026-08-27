(function registerQuestionTopicLinks(global) {
  "use strict";

  const app = global.KonkurApp;
  const dataset = Object.freeze({
    datasetId: "question-topic-links:network",
    schemaVersion: 1,
    version: 1,
    records: Object.freeze([]),
    procedure: "Add records only after manual PDF review or official analysis. Never map by year, answer key, or question number range alone."
  });
  const validation = app.validation.questionLinkValidation.validateDataset(dataset);

  app.register("content", "questionTopicLinks", { dataset, validation });
})(window);
