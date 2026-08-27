(function registerDatabaseTopicRegistry(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:topics",
    "datasetType": "topics",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "topic:database:introduction",
        "recordKey": "topic:database:introduction@1",
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
        "slug": "introduction",
        "title": {
          "fa": "مقدمهٔ پایگاه داده",
          "en": "Introduction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Introduction",
        "shortDescription": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
        "summary": {
          "fa": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
          "en": "Introduction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:introduction:crash"
        ],
        "flashcardIds": [
          "flashcard:database:086"
        ],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:introduction:relational-model:similar",
          "topic-link:introduction:sql-joins:similar"
        ],
        "relatedTopicIds": [
          "topic:database:relational-model",
          "topic:database:sql-joins"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "easy",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 3,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:relational-model",
        "recordKey": "topic:database:relational-model@1",
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
        "slug": "relational-model",
        "title": {
          "fa": "مدل رابطه‌ای",
          "en": "Relational Model",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Relational Model",
        "shortDescription": "relation، tuple، attribute و constraintها.",
        "summary": {
          "fa": "relation، tuple، attribute و constraintها.",
          "en": "Relational Model",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:relational-model:crash"
        ],
        "flashcardIds": [
          "flashcard:database:056",
          "flashcard:database:084",
          "flashcard:database:087"
        ],
        "goldenRuleIds": [
          "golden-rule:database:41"
        ],
        "examTrapIds": [
          "exam-trap:database:21"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:relational-model:keys:similar",
          "topic-link:relational-model:normalization:similar"
        ],
        "relatedTopicIds": [
          "topic:database:keys",
          "topic:database:normalization"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "easy",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 4,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:keys",
        "recordKey": "topic:database:keys@1",
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
        "slug": "keys",
        "title": {
          "fa": "کلیدها",
          "en": "Keys",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Keys",
        "shortDescription": "superkey، candidate key، primary key و foreign key.",
        "summary": {
          "fa": "superkey، candidate key، primary key و foreign key.",
          "en": "Keys",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:keys:crash"
        ],
        "flashcardIds": [
          "flashcard:database:005",
          "flashcard:database:006",
          "flashcard:database:025",
          "flashcard:database:026",
          "flashcard:database:027",
          "flashcard:database:028",
          "flashcard:database:065",
          "flashcard:database:066",
          "flashcard:database:088"
        ],
        "goldenRuleIds": [
          "golden-rule:database:10",
          "golden-rule:database:11",
          "golden-rule:database:12",
          "golden-rule:database:13"
        ],
        "examTrapIds": [
          "exam-trap:database:02",
          "exam-trap:database:03"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:keys:functional-dependency:similar",
          "topic-link:keys:normalization:similar"
        ],
        "relatedTopicIds": [
          "topic:database:functional-dependency",
          "topic:database:normalization"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:functional-dependency",
        "recordKey": "topic:database:functional-dependency@1",
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
        "slug": "functional-dependency",
        "title": {
          "fa": "وابستگی تابعی",
          "en": "Functional Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Functional Dependency",
        "shortDescription": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
        "summary": {
          "fa": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
          "en": "Functional Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:functional-dependency:crash"
        ],
        "flashcardIds": [
          "flashcard:database:007",
          "flashcard:database:029",
          "flashcard:database:078",
          "flashcard:database:089"
        ],
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "examTrapIds": [
          "exam-trap:database:15"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:functional-dependency:armstrong-rules:similar",
          "topic-link:functional-dependency:attribute-closure:similar",
          "topic-link:functional-dependency:normalization:similar"
        ],
        "relatedTopicIds": [
          "topic:database:armstrong-rules",
          "topic:database:attribute-closure",
          "topic:database:normalization"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:armstrong-rules",
        "recordKey": "topic:database:armstrong-rules@1",
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
        "slug": "armstrong-rules",
        "title": {
          "fa": "قوانین آرمسترانگ",
          "en": "Armstrong Rules",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Armstrong Rules",
        "shortDescription": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
        "summary": {
          "fa": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
          "en": "Armstrong Rules",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:armstrong-rules:crash"
        ],
        "flashcardIds": [
          "flashcard:database:031",
          "flashcard:database:032",
          "flashcard:database:033",
          "flashcard:database:090"
        ],
        "goldenRuleIds": [
          "golden-rule:database:16",
          "golden-rule:database:17",
          "golden-rule:database:18"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:armstrong-rules:functional-dependency:similar",
          "topic-link:armstrong-rules:attribute-closure:similar"
        ],
        "relatedTopicIds": [
          "topic:database:functional-dependency",
          "topic:database:attribute-closure"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:attribute-closure",
        "recordKey": "topic:database:attribute-closure@1",
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
        "slug": "attribute-closure",
        "title": {
          "fa": "بستار صفت",
          "en": "Attribute Closure",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Attribute Closure",
        "shortDescription": "محاسبهٔ X+ برای تشخیص key و implication.",
        "summary": {
          "fa": "محاسبهٔ X+ برای تشخیص key و implication.",
          "en": "Attribute Closure",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:attribute-closure:crash"
        ],
        "flashcardIds": [
          "flashcard:database:008",
          "flashcard:database:030",
          "flashcard:database:079",
          "flashcard:database:091"
        ],
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "examTrapIds": [
          "exam-trap:database:16"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:attribute-closure:functional-dependency:similar",
          "topic-link:attribute-closure:minimal-cover:similar"
        ],
        "relatedTopicIds": [
          "topic:database:functional-dependency",
          "topic:database:minimal-cover"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 7,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:minimal-cover",
        "recordKey": "topic:database:minimal-cover@1",
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
        "slug": "minimal-cover",
        "title": {
          "fa": "پوشش مینیمال",
          "en": "Minimal Cover",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Minimal Cover",
        "shortDescription": "حذف attribute و FD زائد برای synthesis.",
        "summary": {
          "fa": "حذف attribute و FD زائد برای synthesis.",
          "en": "Minimal Cover",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:minimal-cover:crash"
        ],
        "flashcardIds": [
          "flashcard:database:034",
          "flashcard:database:035",
          "flashcard:database:080",
          "flashcard:database:092"
        ],
        "goldenRuleIds": [
          "golden-rule:database:19",
          "golden-rule:database:20"
        ],
        "examTrapIds": [
          "exam-trap:database:17"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:minimal-cover:attribute-closure:similar",
          "topic-link:minimal-cover:normalization:similar"
        ],
        "relatedTopicIds": [
          "topic:database:attribute-closure",
          "topic:database:normalization"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 7,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:normalization",
        "recordKey": "topic:database:normalization@1",
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
        "slug": "normalization",
        "title": {
          "fa": "نرمال‌سازی",
          "en": "Normalization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Normalization",
        "shortDescription": "کاهش redundancy و anomaly با تکیه بر FD.",
        "summary": {
          "fa": "کاهش redundancy و anomaly با تکیه بر FD.",
          "en": "Normalization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:normalization:crash"
        ],
        "flashcardIds": [
          "flashcard:database:067"
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:database:04"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:normalization:1nf:similar",
          "topic-link:normalization:2nf:similar",
          "topic-link:normalization:3nf:similar",
          "topic-link:normalization:bcnf:similar"
        ],
        "relatedTopicIds": [
          "topic:database:1nf",
          "topic:database:2nf",
          "topic:database:3nf",
          "topic:database:bcnf"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:1nf",
        "recordKey": "topic:database:1nf@1",
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
        "slug": "1nf",
        "title": {
          "fa": "فرم نرمال اول",
          "en": "1NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "1NF",
        "shortDescription": "مقادیر atomic؛ نه گروه تکراری.",
        "summary": {
          "fa": "مقادیر atomic؛ نه گروه تکراری.",
          "en": "1NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:1nf:crash"
        ],
        "flashcardIds": [
          "flashcard:database:009",
          "flashcard:database:036"
        ],
        "goldenRuleIds": [
          "golden-rule:database:21"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:1nf:normalization:similar",
          "topic-link:1nf:2nf:similar"
        ],
        "relatedTopicIds": [
          "topic:database:normalization",
          "topic:database:2nf"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "easy",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 3,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:2nf",
        "recordKey": "topic:database:2nf@1",
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
        "slug": "2nf",
        "title": {
          "fa": "فرم نرمال دوم",
          "en": "2NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "2NF",
        "shortDescription": "حذف وابستگی جزئی به بخشی از composite key.",
        "summary": {
          "fa": "حذف وابستگی جزئی به بخشی از composite key.",
          "en": "2NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:2nf:crash"
        ],
        "flashcardIds": [
          "flashcard:database:010",
          "flashcard:database:037"
        ],
        "goldenRuleIds": [
          "golden-rule:database:22"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:2nf:1nf:similar",
          "topic-link:2nf:3nf:similar"
        ],
        "relatedTopicIds": [
          "topic:database:1nf",
          "topic:database:3nf"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 4,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:3nf",
        "recordKey": "topic:database:3nf@1",
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
        "slug": "3nf",
        "title": {
          "fa": "فرم نرمال سوم",
          "en": "3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "3NF",
        "shortDescription": "حذف dependency گذرا با استثنای prime attribute.",
        "summary": {
          "fa": "حذف dependency گذرا با استثنای prime attribute.",
          "en": "3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:3nf:crash"
        ],
        "flashcardIds": [
          "flashcard:database:011",
          "flashcard:database:038",
          "flashcard:database:039",
          "flashcard:database:068"
        ],
        "goldenRuleIds": [
          "golden-rule:database:23",
          "golden-rule:database:24"
        ],
        "examTrapIds": [
          "exam-trap:database:05"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:3nf:2nf:similar",
          "topic-link:3nf:bcnf:similar"
        ],
        "relatedTopicIds": [
          "topic:database:2nf",
          "topic:database:bcnf"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:bcnf",
        "recordKey": "topic:database:bcnf@1",
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
        "slug": "bcnf",
        "title": {
          "fa": "BCNF",
          "en": "BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "BCNF",
        "shortDescription": "هر determinant باید candidate key باشد.",
        "summary": {
          "fa": "هر determinant باید candidate key باشد.",
          "en": "BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:bcnf:crash"
        ],
        "flashcardIds": [
          "flashcard:database:004",
          "flashcard:database:040",
          "flashcard:database:041",
          "flashcard:database:064"
        ],
        "goldenRuleIds": [
          "golden-rule:database:25",
          "golden-rule:database:26"
        ],
        "examTrapIds": [
          "exam-trap:database:01"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:bcnf:3nf:similar",
          "topic-link:bcnf:normalization:similar"
        ],
        "relatedTopicIds": [
          "topic:database:3nf",
          "topic:database:normalization"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:transactions",
        "recordKey": "topic:database:transactions@1",
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
        "slug": "transactions",
        "title": {
          "fa": "تراکنش‌ها",
          "en": "Transactions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Transactions",
        "shortDescription": "واحد منطقی کار با commit و rollback.",
        "summary": {
          "fa": "واحد منطقی کار با commit و rollback.",
          "en": "Transactions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:transactions:crash"
        ],
        "flashcardIds": [
          "flashcard:database:062",
          "flashcard:database:063",
          "flashcard:database:082"
        ],
        "goldenRuleIds": [
          "golden-rule:database:47",
          "golden-rule:database:48"
        ],
        "examTrapIds": [
          "exam-trap:database:19"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:transactions:acid:similar",
          "topic-link:transactions:isolation-levels:similar"
        ],
        "relatedTopicIds": [
          "topic:database:acid",
          "topic:database:isolation-levels"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:acid",
        "recordKey": "topic:database:acid@1",
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
        "slug": "acid",
        "title": {
          "fa": "ACID",
          "en": "ACID",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "ACID",
        "shortDescription": "Atomicity، Consistency، Isolation، Durability.",
        "summary": {
          "fa": "Atomicity، Consistency، Isolation، Durability.",
          "en": "ACID",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:acid:crash"
        ],
        "flashcardIds": [
          "flashcard:database:001",
          "flashcard:database:016",
          "flashcard:database:017",
          "flashcard:database:018",
          "flashcard:database:020"
        ],
        "goldenRuleIds": [
          "golden-rule:database:01",
          "golden-rule:database:02",
          "golden-rule:database:03",
          "golden-rule:database:05"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:acid:transactions:similar",
          "topic-link:acid:concurrency:similar"
        ],
        "relatedTopicIds": [
          "topic:database:transactions",
          "topic:database:concurrency"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:isolation-levels",
        "recordKey": "topic:database:isolation-levels@1",
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
        "slug": "isolation-levels",
        "title": {
          "fa": "سطوح Isolation",
          "en": "Isolation Levels",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Isolation Levels",
        "shortDescription": "dirty، non-repeatable و phantom read را تشخیص بده.",
        "summary": {
          "fa": "dirty، non-repeatable و phantom read را تشخیص بده.",
          "en": "Isolation Levels",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:isolation-levels:crash"
        ],
        "flashcardIds": [
          "flashcard:database:002",
          "flashcard:database:003",
          "flashcard:database:019",
          "flashcard:database:021",
          "flashcard:database:022",
          "flashcard:database:023",
          "flashcard:database:024",
          "flashcard:database:071",
          "flashcard:database:072"
        ],
        "goldenRuleIds": [
          "golden-rule:database:04",
          "golden-rule:database:06",
          "golden-rule:database:07",
          "golden-rule:database:08",
          "golden-rule:database:09"
        ],
        "examTrapIds": [
          "exam-trap:database:08",
          "exam-trap:database:09"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:isolation-levels:transactions:similar",
          "topic-link:isolation-levels:concurrency:similar",
          "topic-link:isolation-levels:locks:similar"
        ],
        "relatedTopicIds": [
          "topic:database:transactions",
          "topic:database:concurrency",
          "topic:database:locks"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 7,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:concurrency",
        "recordKey": "topic:database:concurrency@1",
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
        "slug": "concurrency",
        "title": {
          "fa": "همزمانی",
          "en": "Concurrency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Concurrency",
        "shortDescription": "schedule، conflict، serializability و anomaly.",
        "summary": {
          "fa": "schedule، conflict، serializability و anomaly.",
          "en": "Concurrency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:concurrency:crash"
        ],
        "flashcardIds": [],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:concurrency:locks:similar",
          "topic-link:concurrency:deadlocks:similar"
        ],
        "relatedTopicIds": [
          "topic:database:locks",
          "topic:database:deadlocks"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 7,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:locks",
        "recordKey": "topic:database:locks@1",
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
        "slug": "locks",
        "title": {
          "fa": "قفل‌ها",
          "en": "Locks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Locks",
        "shortDescription": "shared/exclusive lock و two-phase locking.",
        "summary": {
          "fa": "shared/exclusive lock و two-phase locking.",
          "en": "Locks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:locks:crash"
        ],
        "flashcardIds": [
          "flashcard:database:059",
          "flashcard:database:060",
          "flashcard:database:061",
          "flashcard:database:081"
        ],
        "goldenRuleIds": [
          "golden-rule:database:44",
          "golden-rule:database:45",
          "golden-rule:database:46"
        ],
        "examTrapIds": [
          "exam-trap:database:18"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:locks:concurrency:similar",
          "topic-link:locks:deadlocks:similar"
        ],
        "relatedTopicIds": [
          "topic:database:concurrency",
          "topic:database:deadlocks"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:deadlocks",
        "recordKey": "topic:database:deadlocks@1",
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
        "slug": "deadlocks",
        "title": {
          "fa": "بن‌بست",
          "en": "Deadlocks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Deadlocks",
        "shortDescription": "انتظار چرخه‌ای بین تراکنش‌ها.",
        "summary": {
          "fa": "انتظار چرخه‌ای بین تراکنش‌ها.",
          "en": "Deadlocks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:deadlocks:crash"
        ],
        "flashcardIds": [
          "flashcard:database:057",
          "flashcard:database:058",
          "flashcard:database:073"
        ],
        "goldenRuleIds": [
          "golden-rule:database:42",
          "golden-rule:database:43"
        ],
        "examTrapIds": [
          "exam-trap:database:10"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:deadlocks:locks:similar",
          "topic-link:deadlocks:concurrency:similar"
        ],
        "relatedTopicIds": [
          "topic:database:locks",
          "topic:database:concurrency"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:indexes",
        "recordKey": "topic:database:indexes@1",
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
        "slug": "indexes",
        "title": {
          "fa": "ایندکس‌ها",
          "en": "Indexes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Indexes",
        "shortDescription": "ساختار کمکی برای سرعت read با هزینهٔ write/storage.",
        "summary": {
          "fa": "ساختار کمکی برای سرعت read با هزینهٔ write/storage.",
          "en": "Indexes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:indexes:crash"
        ],
        "flashcardIds": [
          "flashcard:database:042",
          "flashcard:database:070"
        ],
        "goldenRuleIds": [
          "golden-rule:database:27"
        ],
        "examTrapIds": [
          "exam-trap:database:07"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:indexes:b-plus-tree:similar",
          "topic-link:indexes:hash-index:similar",
          "topic-link:indexes:query-processing:similar"
        ],
        "relatedTopicIds": [
          "topic:database:b-plus-tree",
          "topic:database:hash-index",
          "topic:database:query-processing"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:b-plus-tree",
        "recordKey": "topic:database:b-plus-tree@1",
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
        "slug": "b-plus-tree",
        "title": {
          "fa": "درخت B+",
          "en": "B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "B+ Tree",
        "shortDescription": "ایندکس range-friendly و رایج در DBMS.",
        "summary": {
          "fa": "ایندکس range-friendly و رایج در DBMS.",
          "en": "B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:b-plus-tree:crash"
        ],
        "flashcardIds": [
          "flashcard:database:012",
          "flashcard:database:043",
          "flashcard:database:044",
          "flashcard:database:083"
        ],
        "goldenRuleIds": [
          "golden-rule:database:28",
          "golden-rule:database:29"
        ],
        "examTrapIds": [
          "exam-trap:database:20"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:b-plus-tree:indexes:similar",
          "topic-link:b-plus-tree:hash-index:similar"
        ],
        "relatedTopicIds": [
          "topic:database:indexes",
          "topic:database:hash-index"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:hash-index",
        "recordKey": "topic:database:hash-index@1",
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
        "slug": "hash-index",
        "title": {
          "fa": "ایندکس Hash",
          "en": "Hash Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Hash Index",
        "shortDescription": "جست‌وجوی equality سریع؛ ضعیف برای range.",
        "summary": {
          "fa": "جست‌وجوی equality سریع؛ ضعیف برای range.",
          "en": "Hash Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:hash-index:crash"
        ],
        "flashcardIds": [
          "flashcard:database:013",
          "flashcard:database:045",
          "flashcard:database:046",
          "flashcard:database:069"
        ],
        "goldenRuleIds": [
          "golden-rule:database:30",
          "golden-rule:database:31"
        ],
        "examTrapIds": [
          "exam-trap:database:06"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:hash-index:indexes:similar",
          "topic-link:hash-index:b-plus-tree:similar"
        ],
        "relatedTopicIds": [
          "topic:database:indexes",
          "topic:database:b-plus-tree"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:query-processing",
        "recordKey": "topic:database:query-processing@1",
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
        "slug": "query-processing",
        "title": {
          "fa": "پردازش Query",
          "en": "Query Processing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Query Processing",
        "shortDescription": "parse، optimize، execute و plan cost.",
        "summary": {
          "fa": "parse، optimize، execute و plan cost.",
          "en": "Query Processing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:query-processing:crash"
        ],
        "flashcardIds": [
          "flashcard:database:054",
          "flashcard:database:055",
          "flashcard:database:085"
        ],
        "goldenRuleIds": [
          "golden-rule:database:39",
          "golden-rule:database:40"
        ],
        "examTrapIds": [
          "exam-trap:database:22"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:query-processing:indexes:similar",
          "topic-link:query-processing:sql-joins:similar",
          "topic-link:query-processing:aggregation:similar"
        ],
        "relatedTopicIds": [
          "topic:database:indexes",
          "topic:database:sql-joins",
          "topic:database:aggregation"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:sql-joins",
        "recordKey": "topic:database:sql-joins@1",
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
        "slug": "sql-joins",
        "title": {
          "fa": "Joinهای SQL",
          "en": "SQL Joins",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "SQL Joins",
        "shortDescription": "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده.",
        "summary": {
          "fa": "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده.",
          "en": "SQL Joins",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:sql-joins:crash"
        ],
        "flashcardIds": [
          "flashcard:database:014",
          "flashcard:database:047",
          "flashcard:database:048",
          "flashcard:database:074"
        ],
        "goldenRuleIds": [
          "golden-rule:database:32",
          "golden-rule:database:33"
        ],
        "examTrapIds": [
          "exam-trap:database:11"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:sql-joins:query-processing:similar",
          "topic-link:sql-joins:views:similar"
        ],
        "relatedTopicIds": [
          "topic:database:query-processing",
          "topic:database:views"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 6,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:aggregation",
        "recordKey": "topic:database:aggregation@1",
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
        "slug": "aggregation",
        "title": {
          "fa": "تجمیع",
          "en": "Aggregation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Aggregation",
        "shortDescription": "GROUP BY، HAVING و COUNT traps.",
        "summary": {
          "fa": "GROUP BY، HAVING و COUNT traps.",
          "en": "Aggregation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:aggregation:crash"
        ],
        "flashcardIds": [
          "flashcard:database:015",
          "flashcard:database:049",
          "flashcard:database:050",
          "flashcard:database:051",
          "flashcard:database:052",
          "flashcard:database:075",
          "flashcard:database:076"
        ],
        "goldenRuleIds": [
          "golden-rule:database:34",
          "golden-rule:database:35",
          "golden-rule:database:36",
          "golden-rule:database:37"
        ],
        "examTrapIds": [
          "exam-trap:database:12",
          "exam-trap:database:13"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:aggregation:sql-joins:similar",
          "topic-link:aggregation:query-processing:similar"
        ],
        "relatedTopicIds": [
          "topic:database:sql-joins",
          "topic:database:query-processing"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "medium",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:database:views",
        "recordKey": "topic:database:views@1",
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
        "slug": "views",
        "title": {
          "fa": "Viewها",
          "en": "Views",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Views",
        "shortDescription": "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی.",
        "summary": {
          "fa": "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی.",
          "en": "Views",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:database:views:crash"
        ],
        "flashcardIds": [
          "flashcard:database:053",
          "flashcard:database:077"
        ],
        "goldenRuleIds": [
          "golden-rule:database:38"
        ],
        "examTrapIds": [
          "exam-trap:database:14"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:views:sql-joins:similar",
          "topic-link:views:query-processing:similar"
        ],
        "relatedTopicIds": [
          "topic:database:sql-joins",
          "topic:database:query-processing"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "easy",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 3,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseTopicRegistry", { payload: payload, registrations: registrations });
})(window);
