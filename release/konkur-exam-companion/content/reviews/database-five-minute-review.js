(function registerDatabaseFiveMinuteReview(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:five-minute-review",
    "datasetType": "five-minute-reviews",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "five-minute-review:database",
        "recordKey": "five-minute-review:database@1",
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
        "subjectId": "subject:database",
        "title": {
          "fa": "مرور پنج‌دقیقه‌ای پایگاه داده",
          "en": "Database Five-Minute Review",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "items": [
          {
            "id": "database-review-01",
            "text": {
              "fa": "ACID → transaction correctness",
              "en": "ACID → transaction correctness",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:acid"
            ]
          },
          {
            "id": "database-review-02",
            "text": {
              "fa": "Atomicity → all or nothing",
              "en": "Atomicity → all or nothing",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:acid"
            ]
          },
          {
            "id": "database-review-03",
            "text": {
              "fa": "Consistency → constraints preserved",
              "en": "Consistency → constraints preserved",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:acid"
            ]
          },
          {
            "id": "database-review-04",
            "text": {
              "fa": "Isolation → concurrent transactions appear separated",
              "en": "Isolation → concurrent transactions appear separated",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:isolation-levels"
            ]
          },
          {
            "id": "database-review-05",
            "text": {
              "fa": "Durability → committed data survives crash",
              "en": "Durability → committed data survives crash",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:acid"
            ]
          },
          {
            "id": "database-review-06",
            "text": {
              "fa": "Dirty Read → read uncommitted data",
              "en": "Dirty Read → read uncommitted data",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:isolation-levels"
            ]
          },
          {
            "id": "database-review-07",
            "text": {
              "fa": "Non-repeatable Read → same row changes",
              "en": "Non-repeatable Read → same row changes",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:isolation-levels"
            ]
          },
          {
            "id": "database-review-08",
            "text": {
              "fa": "Phantom Read → new matching rows appear",
              "en": "Phantom Read → new matching rows appear",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:isolation-levels"
            ]
          },
          {
            "id": "database-review-09",
            "text": {
              "fa": "Serializable → strongest common isolation idea",
              "en": "Serializable → strongest common isolation idea",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:isolation-levels"
            ]
          },
          {
            "id": "database-review-10",
            "text": {
              "fa": "Candidate key → minimal superkey",
              "en": "Candidate key → minimal superkey",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:keys"
            ]
          },
          {
            "id": "database-review-11",
            "text": {
              "fa": "Primary key → chosen candidate key",
              "en": "Primary key → chosen candidate key",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:keys"
            ]
          },
          {
            "id": "database-review-12",
            "text": {
              "fa": "Foreign key → references another relation key",
              "en": "Foreign key → references another relation key",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:keys"
            ]
          },
          {
            "id": "database-review-13",
            "text": {
              "fa": "Superkey may contain extra attributes",
              "en": "Superkey may contain extra attributes",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:keys"
            ]
          },
          {
            "id": "database-review-14",
            "text": {
              "fa": "FD X→Y → X determines Y",
              "en": "FD X→Y → X determines Y",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:functional-dependency"
            ]
          },
          {
            "id": "database-review-15",
            "text": {
              "fa": "Closure X+ tests whether X is a key",
              "en": "Closure X+ tests whether X is a key",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:attribute-closure"
            ]
          },
          {
            "id": "database-review-16",
            "text": {
              "fa": "Armstrong Reflexivity → subset is implied",
              "en": "Armstrong Reflexivity → subset is implied",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:armstrong-rules"
            ]
          },
          {
            "id": "database-review-17",
            "text": {
              "fa": "Armstrong Augmentation → add same attrs both sides",
              "en": "Armstrong Augmentation → add same attrs both sides",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:armstrong-rules"
            ]
          },
          {
            "id": "database-review-18",
            "text": {
              "fa": "Armstrong Transitivity → chain dependencies",
              "en": "Armstrong Transitivity → chain dependencies",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:armstrong-rules"
            ]
          },
          {
            "id": "database-review-19",
            "text": {
              "fa": "Minimal cover → single RHS attributes",
              "en": "Minimal cover → single RHS attributes",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:minimal-cover"
            ]
          },
          {
            "id": "database-review-20",
            "text": {
              "fa": "Remove extraneous attributes before removing redundant FDs",
              "en": "Remove extraneous attributes before removing redundant FDs",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:minimal-cover"
            ]
          },
          {
            "id": "database-review-21",
            "text": {
              "fa": "1NF → atomic values",
              "en": "1NF → atomic values",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:1nf"
            ]
          },
          {
            "id": "database-review-22",
            "text": {
              "fa": "2NF → no partial dependency on composite key",
              "en": "2NF → no partial dependency on composite key",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:2nf"
            ]
          },
          {
            "id": "database-review-23",
            "text": {
              "fa": "3NF → no bad transitive dependency",
              "en": "3NF → no bad transitive dependency",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:3nf"
            ]
          },
          {
            "id": "database-review-24",
            "text": {
              "fa": "3NF allows prime-attribute RHS exception",
              "en": "3NF allows prime-attribute RHS exception",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:3nf"
            ]
          },
          {
            "id": "database-review-25",
            "text": {
              "fa": "BCNF → every determinant is a candidate key",
              "en": "BCNF → every determinant is a candidate key",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:bcnf"
            ]
          },
          {
            "id": "database-review-26",
            "text": {
              "fa": "BCNF is stricter than 3NF",
              "en": "BCNF is stricter than 3NF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:bcnf"
            ]
          },
          {
            "id": "database-review-27",
            "text": {
              "fa": "Index speeds reads, costs writes/storage",
              "en": "Index speeds reads, costs writes/storage",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:indexes"
            ]
          },
          {
            "id": "database-review-28",
            "text": {
              "fa": "B+ Tree → default database index",
              "en": "B+ Tree → default database index",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:b-plus-tree"
            ]
          },
          {
            "id": "database-review-29",
            "text": {
              "fa": "B+ Tree → good for range queries",
              "en": "B+ Tree → good for range queries",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:b-plus-tree"
            ]
          },
          {
            "id": "database-review-30",
            "text": {
              "fa": "Hash index → good for equality",
              "en": "Hash index → good for equality",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:hash-index"
            ]
          },
          {
            "id": "database-review-31",
            "text": {
              "fa": "Hash index → poor for range",
              "en": "Hash index → poor for range",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:hash-index"
            ]
          },
          {
            "id": "database-review-32",
            "text": {
              "fa": "INNER JOIN → only matching rows",
              "en": "INNER JOIN → only matching rows",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:sql-joins"
            ]
          },
          {
            "id": "database-review-33",
            "text": {
              "fa": "LEFT JOIN → all left rows",
              "en": "LEFT JOIN → all left rows",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:sql-joins"
            ]
          },
          {
            "id": "database-review-34",
            "text": {
              "fa": "WHERE filters rows before grouping",
              "en": "WHERE filters rows before grouping",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:aggregation"
            ]
          },
          {
            "id": "database-review-35",
            "text": {
              "fa": "HAVING filters groups after grouping",
              "en": "HAVING filters groups after grouping",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:aggregation"
            ]
          },
          {
            "id": "database-review-36",
            "text": {
              "fa": "COUNT(*) counts rows",
              "en": "COUNT(*) counts rows",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:aggregation"
            ]
          },
          {
            "id": "database-review-37",
            "text": {
              "fa": "COUNT(column) ignores NULL",
              "en": "COUNT(column) ignores NULL",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:aggregation"
            ]
          },
          {
            "id": "database-review-38",
            "text": {
              "fa": "View → stored query, not necessarily stored data",
              "en": "View → stored query, not necessarily stored data",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:views"
            ]
          },
          {
            "id": "database-review-39",
            "text": {
              "fa": "Query optimizer chooses a plan",
              "en": "Query optimizer chooses a plan",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:query-processing"
            ]
          },
          {
            "id": "database-review-40",
            "text": {
              "fa": "Selection reduces rows",
              "en": "Selection reduces rows",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:query-processing"
            ]
          },
          {
            "id": "database-review-41",
            "text": {
              "fa": "Projection reduces columns",
              "en": "Projection reduces columns",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:relational-model"
            ]
          },
          {
            "id": "database-review-42",
            "text": {
              "fa": "Deadlock → cycle of waiting",
              "en": "Deadlock → cycle of waiting",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:deadlocks"
            ]
          },
          {
            "id": "database-review-43",
            "text": {
              "fa": "Starvation → waits too long without cycle requirement",
              "en": "Starvation → waits too long without cycle requirement",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:deadlocks"
            ]
          },
          {
            "id": "database-review-44",
            "text": {
              "fa": "Shared lock → read",
              "en": "Shared lock → read",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:locks"
            ]
          },
          {
            "id": "database-review-45",
            "text": {
              "fa": "Exclusive lock → write",
              "en": "Exclusive lock → write",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:database:locks"
            ]
          },
          {
            "id": "database-review-46",
            "text": {
              "fa": "Frequency: Unknown تا زمان mapping رسمی سؤال‌ها.",
              "en": "Frequency unknown until verified mapping.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": []
          }
        ],
        "assetReferences": [
          "golden-rule:database:01",
          "golden-rule:database:02",
          "golden-rule:database:03",
          "golden-rule:database:04",
          "golden-rule:database:05",
          "golden-rule:database:06",
          "golden-rule:database:07",
          "golden-rule:database:08",
          "golden-rule:database:09",
          "golden-rule:database:10",
          "golden-rule:database:11",
          "golden-rule:database:12",
          "golden-rule:database:13",
          "golden-rule:database:14",
          "golden-rule:database:15",
          "golden-rule:database:16",
          "golden-rule:database:17",
          "golden-rule:database:18",
          "golden-rule:database:19",
          "golden-rule:database:20",
          "exam-trap:database:01",
          "exam-trap:database:02",
          "exam-trap:database:03",
          "exam-trap:database:04",
          "exam-trap:database:05",
          "exam-trap:database:06",
          "exam-trap:database:07",
          "exam-trap:database:08"
        ],
        "estimatedReviewSeconds": 300,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseFiveMinuteReview", { payload: payload, registrations: registrations });
})(window);
