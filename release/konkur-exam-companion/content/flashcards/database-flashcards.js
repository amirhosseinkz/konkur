(function registerDatabaseFlashcards(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:flashcards",
    "datasetType": "flashcards",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "flashcard:database:001",
        "recordKey": "flashcard:database:001@1",
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
        "topicIds": [
          "topic:database:acid"
        ],
        "category": "transaction",
        "front": {
          "fa": "ACID مخفف چیست؟",
          "en": "ACID مخفف چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Atomicity, Consistency, Isolation, Durability.",
          "en": "Atomicity, Consistency, Isolation, Durability.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:002",
        "recordKey": "flashcard:database:002@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "definition",
        "front": {
          "fa": "Dirty Read چیست؟",
          "en": "Dirty Read چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "خواندن داده‌ای که هنوز commit نشده.",
          "en": "خواندن داده‌ای که هنوز commit نشده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:003",
        "recordKey": "flashcard:database:003@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "definition",
        "front": {
          "fa": "Phantom Read چیست؟",
          "en": "Phantom Read چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "در اجرای دوبارهٔ query، row جدید مطابق شرط ظاهر می‌شود.",
          "en": "در اجرای دوبارهٔ query، row جدید مطابق شرط ظاهر می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:004",
        "recordKey": "flashcard:database:004@1",
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
        "topicIds": [
          "topic:database:bcnf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "BCNF چه شرطی دارد؟",
          "en": "BCNF چه شرطی دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "هر determinant باید candidate key باشد.",
          "en": "هر determinant باید candidate key باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:25"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:005",
        "recordKey": "flashcard:database:005@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "definition",
        "front": {
          "fa": "Candidate key چیست؟",
          "en": "Candidate key چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Superkey حداقلی.\nهیچ attribute اضافه ندارد.",
          "en": "Superkey حداقلی.\nهیچ attribute اضافه ندارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:006",
        "recordKey": "flashcard:database:006@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "definition",
        "front": {
          "fa": "Primary key چیست؟",
          "en": "Primary key چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "یکی از candidate keyها که انتخاب شده.",
          "en": "یکی از candidate keyها که انتخاب شده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:007",
        "recordKey": "flashcard:database:007@1",
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
        "topicIds": [
          "topic:database:functional-dependency"
        ],
        "category": "definition",
        "front": {
          "fa": "X→Y یعنی چه؟",
          "en": "X→Y یعنی چه؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "X مقدار Y را تعیین می‌کند.",
          "en": "X مقدار Y را تعیین می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:008",
        "recordKey": "flashcard:database:008@1",
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
        "topicIds": [
          "topic:database:attribute-closure"
        ],
        "category": "shortcut",
        "front": {
          "fa": "X+ برای چیست؟",
          "en": "X+ برای چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "تشخیص key بودن X و implication وابستگی‌ها.",
          "en": "تشخیص key بودن X و implication وابستگی‌ها.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:009",
        "recordKey": "flashcard:database:009@1",
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
        "topicIds": [
          "topic:database:1nf"
        ],
        "category": "definition",
        "front": {
          "fa": "1NF یعنی چه؟",
          "en": "1NF یعنی چه؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "مقادیر atomic.\nبدون گروه تکراری.",
          "en": "مقادیر atomic.\nبدون گروه تکراری.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:21"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:010",
        "recordKey": "flashcard:database:010@1",
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
        "topicIds": [
          "topic:database:2nf"
        ],
        "category": "definition",
        "front": {
          "fa": "2NF چه چیزی را حذف می‌کند؟",
          "en": "2NF چه چیزی را حذف می‌کند؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "وابستگی جزئی به بخشی از composite key.",
          "en": "وابستگی جزئی به بخشی از composite key.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:011",
        "recordKey": "flashcard:database:011@1",
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
        "topicIds": [
          "topic:database:3nf"
        ],
        "category": "trap",
        "front": {
          "fa": "3NF چه دامی دارد؟",
          "en": "3NF چه دامی دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "استثنای prime attribute در RHS.",
          "en": "استثنای prime attribute در RHS.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:23"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:012",
        "recordKey": "flashcard:database:012@1",
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
        "topicIds": [
          "topic:database:b-plus-tree"
        ],
        "category": "index",
        "front": {
          "fa": "B+ Tree برای چه query خوب است؟",
          "en": "B+ Tree برای چه query خوب است؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Range query و ordered scan.",
          "en": "Range query و ordered scan.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:28"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:013",
        "recordKey": "flashcard:database:013@1",
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
        "topicIds": [
          "topic:database:hash-index"
        ],
        "category": "index",
        "front": {
          "fa": "Hash index برای چه query خوب است؟",
          "en": "Hash index برای چه query خوب است؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Equality lookup.\nنه range.",
          "en": "Equality lookup.\nنه range.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:30"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:014",
        "recordKey": "flashcard:database:014@1",
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
        "topicIds": [
          "topic:database:sql-joins"
        ],
        "category": "sql",
        "front": {
          "fa": "LEFT JOIN چه rowهایی را نگه می‌دارد؟",
          "en": "LEFT JOIN چه rowهایی را نگه می‌دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "همهٔ rowهای سمت چپ.",
          "en": "همهٔ rowهای سمت چپ.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:32"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:015",
        "recordKey": "flashcard:database:015@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "sql",
        "front": {
          "fa": "COUNT(column) با NULL چه می‌کند؟",
          "en": "COUNT(column) با NULL چه می‌کند؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "NULL را نمی‌شمارد.",
          "en": "NULL را نمی‌شمارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:016",
        "recordKey": "flashcard:database:016@1",
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
        "topicIds": [
          "topic:database:acid"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: ACID → transaction correctness",
          "en": "قانون: ACID → transaction correctness",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "ACID → transaction correctness",
          "en": "ACID → transaction correctness",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:017",
        "recordKey": "flashcard:database:017@1",
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
        "topicIds": [
          "topic:database:acid"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Atomicity → all or nothing",
          "en": "قانون: Atomicity → all or nothing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Atomicity → all or nothing",
          "en": "Atomicity → all or nothing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:018",
        "recordKey": "flashcard:database:018@1",
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
        "topicIds": [
          "topic:database:acid"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Consistency → constraints preserved",
          "en": "قانون: Consistency → constraints preserved",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Consistency → constraints preserved",
          "en": "Consistency → constraints preserved",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:019",
        "recordKey": "flashcard:database:019@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Isolation → concurrent transactions appear separated",
          "en": "قانون: Isolation → concurrent transactions appear separated",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Isolation → concurrent transactions appear separated",
          "en": "Isolation → concurrent transactions appear separated",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:020",
        "recordKey": "flashcard:database:020@1",
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
        "topicIds": [
          "topic:database:acid"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Durability → committed data survives crash",
          "en": "قانون: Durability → committed data survives crash",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Durability → committed data survives crash",
          "en": "Durability → committed data survives crash",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:021",
        "recordKey": "flashcard:database:021@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Dirty Read → read uncommitted data",
          "en": "قانون: Dirty Read → read uncommitted data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Dirty Read → read uncommitted data",
          "en": "Dirty Read → read uncommitted data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:022",
        "recordKey": "flashcard:database:022@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Non-repeatable Read → same row changes",
          "en": "قانون: Non-repeatable Read → same row changes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Non-repeatable Read → same row changes",
          "en": "Non-repeatable Read → same row changes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:023",
        "recordKey": "flashcard:database:023@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Phantom Read → new matching rows appear",
          "en": "قانون: Phantom Read → new matching rows appear",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Phantom Read → new matching rows appear",
          "en": "Phantom Read → new matching rows appear",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:024",
        "recordKey": "flashcard:database:024@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Serializable → strongest common isolation idea",
          "en": "قانون: Serializable → strongest common isolation idea",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Serializable → strongest common isolation idea",
          "en": "Serializable → strongest common isolation idea",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:025",
        "recordKey": "flashcard:database:025@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Candidate key → minimal superkey",
          "en": "قانون: Candidate key → minimal superkey",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Candidate key → minimal superkey",
          "en": "Candidate key → minimal superkey",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:026",
        "recordKey": "flashcard:database:026@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Primary key → chosen candidate key",
          "en": "قانون: Primary key → chosen candidate key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Primary key → chosen candidate key",
          "en": "Primary key → chosen candidate key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:027",
        "recordKey": "flashcard:database:027@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Foreign key → references another relation key",
          "en": "قانون: Foreign key → references another relation key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Foreign key → references another relation key",
          "en": "Foreign key → references another relation key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:028",
        "recordKey": "flashcard:database:028@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Superkey may contain extra attributes",
          "en": "قانون: Superkey may contain extra attributes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Superkey may contain extra attributes",
          "en": "Superkey may contain extra attributes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:029",
        "recordKey": "flashcard:database:029@1",
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
        "topicIds": [
          "topic:database:functional-dependency"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: FD X→Y → X determines Y",
          "en": "قانون: FD X→Y → X determines Y",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "FD X→Y → X determines Y",
          "en": "FD X→Y → X determines Y",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:030",
        "recordKey": "flashcard:database:030@1",
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
        "topicIds": [
          "topic:database:attribute-closure"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Closure X+ tests whether X is a key",
          "en": "قانون: Closure X+ tests whether X is a key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Closure X+ tests whether X is a key",
          "en": "Closure X+ tests whether X is a key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:031",
        "recordKey": "flashcard:database:031@1",
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
        "topicIds": [
          "topic:database:armstrong-rules"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Armstrong Reflexivity → subset is implied",
          "en": "قانون: Armstrong Reflexivity → subset is implied",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Armstrong Reflexivity → subset is implied",
          "en": "Armstrong Reflexivity → subset is implied",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:032",
        "recordKey": "flashcard:database:032@1",
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
        "topicIds": [
          "topic:database:armstrong-rules"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Armstrong Augmentation → add same attrs both sides",
          "en": "قانون: Armstrong Augmentation → add same attrs both sides",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Armstrong Augmentation → add same attrs both sides",
          "en": "Armstrong Augmentation → add same attrs both sides",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:033",
        "recordKey": "flashcard:database:033@1",
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
        "topicIds": [
          "topic:database:armstrong-rules"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Armstrong Transitivity → chain dependencies",
          "en": "قانون: Armstrong Transitivity → chain dependencies",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Armstrong Transitivity → chain dependencies",
          "en": "Armstrong Transitivity → chain dependencies",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:034",
        "recordKey": "flashcard:database:034@1",
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
        "topicIds": [
          "topic:database:minimal-cover"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Minimal cover → single RHS attributes",
          "en": "قانون: Minimal cover → single RHS attributes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Minimal cover → single RHS attributes",
          "en": "Minimal cover → single RHS attributes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:19"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:035",
        "recordKey": "flashcard:database:035@1",
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
        "topicIds": [
          "topic:database:minimal-cover"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Remove extraneous attributes before removing redundant FDs",
          "en": "قانون: Remove extraneous attributes before removing redundant FDs",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Remove extraneous attributes before removing redundant FDs",
          "en": "Remove extraneous attributes before removing redundant FDs",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:19"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:036",
        "recordKey": "flashcard:database:036@1",
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
        "topicIds": [
          "topic:database:1nf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: 1NF → atomic values",
          "en": "قانون: 1NF → atomic values",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "1NF → atomic values",
          "en": "1NF → atomic values",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:21"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:037",
        "recordKey": "flashcard:database:037@1",
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
        "topicIds": [
          "topic:database:2nf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: 2NF → no partial dependency on composite key",
          "en": "قانون: 2NF → no partial dependency on composite key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "2NF → no partial dependency on composite key",
          "en": "2NF → no partial dependency on composite key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:038",
        "recordKey": "flashcard:database:038@1",
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
        "topicIds": [
          "topic:database:3nf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: 3NF → no bad transitive dependency",
          "en": "قانون: 3NF → no bad transitive dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "3NF → no bad transitive dependency",
          "en": "3NF → no bad transitive dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:23"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:039",
        "recordKey": "flashcard:database:039@1",
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
        "topicIds": [
          "topic:database:3nf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: 3NF allows prime-attribute RHS exception",
          "en": "قانون: 3NF allows prime-attribute RHS exception",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "3NF allows prime-attribute RHS exception",
          "en": "3NF allows prime-attribute RHS exception",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:23"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:040",
        "recordKey": "flashcard:database:040@1",
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
        "topicIds": [
          "topic:database:bcnf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: BCNF → every determinant is a candidate key",
          "en": "قانون: BCNF → every determinant is a candidate key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "BCNF → every determinant is a candidate key",
          "en": "BCNF → every determinant is a candidate key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:25"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:041",
        "recordKey": "flashcard:database:041@1",
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
        "topicIds": [
          "topic:database:bcnf"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: BCNF is stricter than 3NF",
          "en": "قانون: BCNF is stricter than 3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "BCNF is stricter than 3NF",
          "en": "BCNF is stricter than 3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:25"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:042",
        "recordKey": "flashcard:database:042@1",
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
        "topicIds": [
          "topic:database:indexes"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Index speeds reads, costs writes/storage",
          "en": "قانون: Index speeds reads, costs writes/storage",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Index speeds reads, costs writes/storage",
          "en": "Index speeds reads, costs writes/storage",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:27"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:043",
        "recordKey": "flashcard:database:043@1",
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
        "topicIds": [
          "topic:database:b-plus-tree"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: B+ Tree → default database index",
          "en": "قانون: B+ Tree → default database index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "B+ Tree → default database index",
          "en": "B+ Tree → default database index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:28"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:044",
        "recordKey": "flashcard:database:044@1",
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
        "topicIds": [
          "topic:database:b-plus-tree"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: B+ Tree → good for range queries",
          "en": "قانون: B+ Tree → good for range queries",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "B+ Tree → good for range queries",
          "en": "B+ Tree → good for range queries",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:28"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:045",
        "recordKey": "flashcard:database:045@1",
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
        "topicIds": [
          "topic:database:hash-index"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Hash index → good for equality",
          "en": "قانون: Hash index → good for equality",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Hash index → good for equality",
          "en": "Hash index → good for equality",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:30"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:046",
        "recordKey": "flashcard:database:046@1",
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
        "topicIds": [
          "topic:database:hash-index"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Hash index → poor for range",
          "en": "قانون: Hash index → poor for range",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Hash index → poor for range",
          "en": "Hash index → poor for range",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:30"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:047",
        "recordKey": "flashcard:database:047@1",
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
        "topicIds": [
          "topic:database:sql-joins"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: INNER JOIN → only matching rows",
          "en": "قانون: INNER JOIN → only matching rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "INNER JOIN → only matching rows",
          "en": "INNER JOIN → only matching rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:32"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:048",
        "recordKey": "flashcard:database:048@1",
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
        "topicIds": [
          "topic:database:sql-joins"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: LEFT JOIN → all left rows",
          "en": "قانون: LEFT JOIN → all left rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "LEFT JOIN → all left rows",
          "en": "LEFT JOIN → all left rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:32"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:049",
        "recordKey": "flashcard:database:049@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: WHERE filters rows before grouping",
          "en": "قانون: WHERE filters rows before grouping",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "WHERE filters rows before grouping",
          "en": "WHERE filters rows before grouping",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:050",
        "recordKey": "flashcard:database:050@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: HAVING filters groups after grouping",
          "en": "قانون: HAVING filters groups after grouping",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "HAVING filters groups after grouping",
          "en": "HAVING filters groups after grouping",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:051",
        "recordKey": "flashcard:database:051@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: COUNT(*) counts rows",
          "en": "قانون: COUNT(*) counts rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "COUNT(*) counts rows",
          "en": "COUNT(*) counts rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:052",
        "recordKey": "flashcard:database:052@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: COUNT(column) ignores NULL",
          "en": "قانون: COUNT(column) ignores NULL",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "COUNT(column) ignores NULL",
          "en": "COUNT(column) ignores NULL",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:053",
        "recordKey": "flashcard:database:053@1",
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
        "topicIds": [
          "topic:database:views"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: View → stored query, not necessarily stored data",
          "en": "قانون: View → stored query, not necessarily stored data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "View → stored query, not necessarily stored data",
          "en": "View → stored query, not necessarily stored data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:38"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:054",
        "recordKey": "flashcard:database:054@1",
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
        "topicIds": [
          "topic:database:query-processing"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Query optimizer chooses a plan",
          "en": "قانون: Query optimizer chooses a plan",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Query optimizer chooses a plan",
          "en": "Query optimizer chooses a plan",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:055",
        "recordKey": "flashcard:database:055@1",
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
        "topicIds": [
          "topic:database:query-processing"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Selection reduces rows",
          "en": "قانون: Selection reduces rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Selection reduces rows",
          "en": "Selection reduces rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:056",
        "recordKey": "flashcard:database:056@1",
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
        "topicIds": [
          "topic:database:relational-model"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Projection reduces columns",
          "en": "قانون: Projection reduces columns",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Projection reduces columns",
          "en": "Projection reduces columns",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:057",
        "recordKey": "flashcard:database:057@1",
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
        "topicIds": [
          "topic:database:deadlocks"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Deadlock → cycle of waiting",
          "en": "قانون: Deadlock → cycle of waiting",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Deadlock → cycle of waiting",
          "en": "Deadlock → cycle of waiting",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:42"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:058",
        "recordKey": "flashcard:database:058@1",
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
        "topicIds": [
          "topic:database:deadlocks"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Starvation → waits too long without cycle requirement",
          "en": "قانون: Starvation → waits too long without cycle requirement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Starvation → waits too long without cycle requirement",
          "en": "Starvation → waits too long without cycle requirement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:42"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:059",
        "recordKey": "flashcard:database:059@1",
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
        "topicIds": [
          "topic:database:locks"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Shared lock → read",
          "en": "قانون: Shared lock → read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Shared lock → read",
          "en": "Shared lock → read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:44"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:060",
        "recordKey": "flashcard:database:060@1",
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
        "topicIds": [
          "topic:database:locks"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Exclusive lock → write",
          "en": "قانون: Exclusive lock → write",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Exclusive lock → write",
          "en": "Exclusive lock → write",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:44"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:061",
        "recordKey": "flashcard:database:061@1",
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
        "topicIds": [
          "topic:database:locks"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: 2PL grows then shrinks lock set",
          "en": "قانون: 2PL grows then shrinks lock set",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "2PL grows then shrinks lock set",
          "en": "2PL grows then shrinks lock set",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:44"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:062",
        "recordKey": "flashcard:database:062@1",
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
        "topicIds": [
          "topic:database:transactions"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Commit makes transaction effects final",
          "en": "قانون: Commit makes transaction effects final",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Commit makes transaction effects final",
          "en": "Commit makes transaction effects final",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:063",
        "recordKey": "flashcard:database:063@1",
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
        "topicIds": [
          "topic:database:transactions"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Rollback undoes transaction effects",
          "en": "قانون: Rollback undoes transaction effects",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Rollback undoes transaction effects",
          "en": "Rollback undoes transaction effects",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:064",
        "recordKey": "flashcard:database:064@1",
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
        "topicIds": [
          "topic:database:bcnf"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: 3NF vs BCNF",
          "en": "دام: 3NF vs BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "BCNF = determinant key.\nBCNF سخت‌تر است؛ determinant باید candidate key باشد.",
          "en": "BCNF = determinant key.\nBCNF سخت‌تر است؛ determinant باید candidate key باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:25"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:065",
        "recordKey": "flashcard:database:065@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Candidate vs Primary Key",
          "en": "دام: Candidate vs Primary Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "primary = chosen candidate.\nPrimary یکی از candidateهاست که انتخاب شده.",
          "en": "primary = chosen candidate.\nPrimary یکی از candidateهاست که انتخاب شده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:066",
        "recordKey": "flashcard:database:066@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Superkey vs Candidate Key",
          "en": "دام: Superkey vs Candidate Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "candidate = minimal superkey.\nCandidate key minimal است؛ superkey می‌تواند اضافه داشته باشد.",
          "en": "candidate = minimal superkey.\nCandidate key minimal است؛ superkey می‌تواند اضافه داشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:067",
        "recordKey": "flashcard:database:067@1",
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
        "topicIds": [
          "topic:database:normalization"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Partial vs Transitive Dependency",
          "en": "دام: Partial vs Transitive Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "part of key → partial.\nPartial به بخشی از composite key؛ transitive از طریق attribute واسط.",
          "en": "part of key → partial.\nPartial به بخشی از composite key؛ transitive از طریق attribute واسط.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:068",
        "recordKey": "flashcard:database:068@1",
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
        "topicIds": [
          "topic:database:3nf"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: 3NF prime exception",
          "en": "دام: 3NF prime exception",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "RHS prime can save 3NF.\nدر 3NF اگر A prime باشد، ممکن است مجاز باشد.",
          "en": "RHS prime can save 3NF.\nدر 3NF اگر A prime باشد، ممکن است مجاز باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:23"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:069",
        "recordKey": "flashcard:database:069@1",
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
        "topicIds": [
          "topic:database:hash-index"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Hash Index vs B+ Tree",
          "en": "دام: Hash Index vs B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "range → B+ Tree.\nHash برای equality؛ B+ Tree برای range/order بهتر است.",
          "en": "range → B+ Tree.\nHash برای equality؛ B+ Tree برای range/order بهتر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:30"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:070",
        "recordKey": "flashcard:database:070@1",
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
        "topicIds": [
          "topic:database:indexes"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Clustered vs Non-clustered Index",
          "en": "دام: Clustered vs Non-clustered Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "clustered affects data order.\nClustered ترتیب فیزیکی/اصلی داده را تحت تأثیر می‌گذارد؛ non-clustered ساختار جداست.",
          "en": "clustered affects data order.\nClustered ترتیب فیزیکی/اصلی داده را تحت تأثیر می‌گذارد؛ non-clustered ساختار جداست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:27"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:071",
        "recordKey": "flashcard:database:071@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Serializable vs Repeatable Read",
          "en": "دام: Serializable vs Repeatable Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "phantom → serializable.\nSerializable قوی‌ترین مدل رایج است؛ phantom معمولاً دام تفاوت است.",
          "en": "phantom → serializable.\nSerializable قوی‌ترین مدل رایج است؛ phantom معمولاً دام تفاوت است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:072",
        "recordKey": "flashcard:database:072@1",
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
        "topicIds": [
          "topic:database:isolation-levels"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Dirty Read",
          "en": "دام: Dirty Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "dirty = uncommitted.\nDirty یعنی uncommitted خوانده شده.",
          "en": "dirty = uncommitted.\nDirty یعنی uncommitted خوانده شده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:04"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:073",
        "recordKey": "flashcard:database:073@1",
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
        "topicIds": [
          "topic:database:deadlocks"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Deadlock vs Starvation",
          "en": "دام: Deadlock vs Starvation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "cycle → deadlock.\nDeadlock چرخه انتظار دارد؛ starvation ممکن است چرخه نداشته باشد.",
          "en": "cycle → deadlock.\nDeadlock چرخه انتظار دارد؛ starvation ممکن است چرخه نداشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:42"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:074",
        "recordKey": "flashcard:database:074@1",
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
        "topicIds": [
          "topic:database:sql-joins"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: LEFT JOIN vs INNER JOIN",
          "en": "دام: LEFT JOIN vs INNER JOIN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "LEFT preserves left.\nLEFT همهٔ ردیف‌های چپ را نگه می‌دارد.",
          "en": "LEFT preserves left.\nLEFT همهٔ ردیف‌های چپ را نگه می‌دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:32"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:075",
        "recordKey": "flashcard:database:075@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: COUNT(*) vs COUNT(column)",
          "en": "دام: COUNT(*) vs COUNT(column)",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "COUNT(column) skips NULL.\nCOUNT(*) rowها؛ COUNT(column) مقدارهای non-NULL.",
          "en": "COUNT(column) skips NULL.\nCOUNT(*) rowها؛ COUNT(column) مقدارهای non-NULL.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:076",
        "recordKey": "flashcard:database:076@1",
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
        "topicIds": [
          "topic:database:aggregation"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: WHERE vs HAVING",
          "en": "دام: WHERE vs HAVING",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "WHERE rows, HAVING groups.\nWHERE قبل از aggregation؛ HAVING بعد از group.",
          "en": "WHERE rows, HAVING groups.\nWHERE قبل از aggregation؛ HAVING بعد از group.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:34"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:077",
        "recordKey": "flashcard:database:077@1",
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
        "topicIds": [
          "topic:database:views"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: View storage",
          "en": "دام: View storage",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "view = stored query.\nView معمولاً query منطقی است؛ materialized view استثناست.",
          "en": "view = stored query.\nView معمولاً query منطقی است؛ materialized view استثناست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:38"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:078",
        "recordKey": "flashcard:database:078@1",
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
        "topicIds": [
          "topic:database:functional-dependency"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: FD from sample rows",
          "en": "دام: FD from sample rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "sample disproves easier than proves.\nنمونه می‌تواند نقض کند، اما اثبات کلی نیاز به constraint دارد.",
          "en": "sample disproves easier than proves.\nنمونه می‌تواند نقض کند، اما اثبات کلی نیاز به constraint دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:079",
        "recordKey": "flashcard:database:079@1",
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
        "topicIds": [
          "topic:database:attribute-closure"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Closure stopping too early",
          "en": "دام: Closure stopping too early",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "closure until fixed point.\nتا وقتی attribute جدید اضافه می‌شود ادامه بده.",
          "en": "closure until fixed point.\nتا وقتی attribute جدید اضافه می‌شود ادامه بده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:080",
        "recordKey": "flashcard:database:080@1",
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
        "topicIds": [
          "topic:database:minimal-cover"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Minimal cover order",
          "en": "دام: Minimal cover order",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "RHS, LHS, redundant.\nاول RHS تک‌صفت، بعد attribute زائد، بعد FD زائد.",
          "en": "RHS, LHS, redundant.\nاول RHS تک‌صفت، بعد attribute زائد، بعد FD زائد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:19"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:081",
        "recordKey": "flashcard:database:081@1",
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
        "topicIds": [
          "topic:database:locks"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Exclusive lock",
          "en": "دام: Exclusive lock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "S read, X write.\nX lock برای write؛ S lock برای read.",
          "en": "S read, X write.\nX lock برای write؛ S lock برای read.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:44"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:082",
        "recordKey": "flashcard:database:082@1",
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
        "topicIds": [
          "topic:database:transactions"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Transaction vs Query",
          "en": "دام: Transaction vs Query",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "transaction = unit of work.\nTransaction واحد منطقی کار است و می‌تواند چند query داشته باشد.",
          "en": "transaction = unit of work.\nTransaction واحد منطقی کار است و می‌تواند چند query داشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:083",
        "recordKey": "flashcard:database:083@1",
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
        "topicIds": [
          "topic:database:b-plus-tree"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: B+ Tree leaf confusion",
          "en": "دام: B+ Tree leaf confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "B+ data at leaves.\nدر B+ Tree مسیر decision در internal و داده/اشاره‌گر در leafهاست.",
          "en": "B+ data at leaves.\nدر B+ Tree مسیر decision در internal و داده/اشاره‌گر در leafهاست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:28"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:084",
        "recordKey": "flashcard:database:084@1",
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
        "topicIds": [
          "topic:database:relational-model"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Projection vs Selection",
          "en": "دام: Projection vs Selection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "select rows, project columns.\nSelection row کم می‌کند؛ Projection column کم می‌کند.",
          "en": "select rows, project columns.\nSelection row کم می‌کند؛ Projection column کم می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:085",
        "recordKey": "flashcard:database:085@1",
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
        "topicIds": [
          "topic:database:query-processing"
        ],
        "category": "trap",
        "front": {
          "fa": "دام: Query optimization certainty",
          "en": "دام: Query optimization certainty",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "optimizer estimates.\nOptimizer بر اساس estimate و statistics تصمیم می‌گیرد.",
          "en": "optimizer estimates.\nOptimizer بر اساس estimate و statistics تصمیم می‌گیرد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:086",
        "recordKey": "flashcard:database:086@1",
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
        "topicIds": [
          "topic:database:introduction"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع مقدمهٔ پایگاه داده",
          "en": "تعریف سریع مقدمهٔ پایگاه داده",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
          "en": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:collection"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:087",
        "recordKey": "flashcard:database:087@1",
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
        "topicIds": [
          "topic:database:relational-model"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع مدل رابطه‌ای",
          "en": "تعریف سریع مدل رابطه‌ای",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "relation، tuple، attribute و constraintها.",
          "en": "relation، tuple، attribute و constraintها.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:088",
        "recordKey": "flashcard:database:088@1",
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
        "topicIds": [
          "topic:database:keys"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع کلیدها",
          "en": "تعریف سریع کلیدها",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "superkey، candidate key، primary key و foreign key.",
          "en": "superkey، candidate key، primary key و foreign key.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:database:10"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:089",
        "recordKey": "flashcard:database:089@1",
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
        "topicIds": [
          "topic:database:functional-dependency"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع وابستگی تابعی",
          "en": "تعریف سریع وابستگی تابعی",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
          "en": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:090",
        "recordKey": "flashcard:database:090@1",
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
        "topicIds": [
          "topic:database:armstrong-rules"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع قوانین آرمسترانگ",
          "en": "تعریف سریع قوانین آرمسترانگ",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
          "en": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:091",
        "recordKey": "flashcard:database:091@1",
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
        "topicIds": [
          "topic:database:attribute-closure"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع بستار صفت",
          "en": "تعریف سریع بستار صفت",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "محاسبهٔ X+ برای تشخیص key و implication.",
          "en": "محاسبهٔ X+ برای تشخیص key و implication.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:database:092",
        "recordKey": "flashcard:database:092@1",
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
        "topicIds": [
          "topic:database:minimal-cover"
        ],
        "category": "definition",
        "front": {
          "fa": "تعریف سریع پوشش مینیمال",
          "en": "تعریف سریع پوشش مینیمال",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "حذف attribute و FD زائد برای synthesis.",
          "en": "حذف attribute و FD زائد برای synthesis.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:database:19"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseFlashcards", { payload: payload, registrations: registrations });
})(window);
