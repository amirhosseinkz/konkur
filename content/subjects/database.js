(function registerDatabaseSubject(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:subjects",
    "datasetType": "subjects",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "subject:database",
        "recordKey": "subject:database@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T13:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Database content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T13:00:00.000Z",
        "updatedAt": "2026-07-15T13:00:00.000Z",
        "slug": "database",
        "title": {
          "fa": "پایگاه داده",
          "en": "Database",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Database",
        "summary": {
          "fa": "مرور سریع و امتحان‌محور Database با تمرکز بر dependency، normalization، transaction و SQL traps.",
          "en": "Exam-focused Database module.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "topicIds": [
          "topic:database:introduction",
          "topic:database:relational-model",
          "topic:database:keys",
          "topic:database:functional-dependency",
          "topic:database:armstrong-rules",
          "topic:database:attribute-closure",
          "topic:database:minimal-cover",
          "topic:database:normalization",
          "topic:database:1nf",
          "topic:database:2nf",
          "topic:database:3nf",
          "topic:database:bcnf",
          "topic:database:transactions",
          "topic:database:acid",
          "topic:database:isolation-levels",
          "topic:database:concurrency",
          "topic:database:locks",
          "topic:database:deadlocks",
          "topic:database:indexes",
          "topic:database:b-plus-tree",
          "topic:database:hash-index",
          "topic:database:query-processing",
          "topic:database:sql-joins",
          "topic:database:aggregation",
          "topic:database:views"
        ],
        "reviewOrder": [
          "topic:database:introduction",
          "topic:database:relational-model",
          "topic:database:keys",
          "topic:database:functional-dependency",
          "topic:database:armstrong-rules",
          "topic:database:attribute-closure",
          "topic:database:minimal-cover",
          "topic:database:normalization",
          "topic:database:1nf",
          "topic:database:2nf",
          "topic:database:3nf",
          "topic:database:bcnf",
          "topic:database:transactions",
          "topic:database:acid",
          "topic:database:isolation-levels",
          "topic:database:concurrency",
          "topic:database:locks",
          "topic:database:deadlocks",
          "topic:database:indexes",
          "topic:database:b-plus-tree",
          "topic:database:hash-index",
          "topic:database:query-processing",
          "topic:database:sql-joins",
          "topic:database:aggregation",
          "topic:database:views"
        ],
        "fiveMinuteReviewId": "five-minute-review:database",
        "goldenRuleCollectionId": "golden-rule:database:collection",
        "estimatedStudyMinutes": 131,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightPriority": "high",
        "verificationLabel": "expert-curated; question relationships unverified"
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseSubject", { payload: payload, registrations: registrations });
})(window);
