(function registerDatabaseExamTraps(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:exam-traps",
    "datasetType": "exam-traps",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "exam-trap:database:01",
        "recordKey": "exam-trap:database:01@1",
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
        "title": {
          "fa": "3NF vs BCNF",
          "en": "3NF vs BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "اگر 3NF است حتماً BCNF هم هست.",
          "en": "3NF vs BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "3NF و BCNF هر دو normal form هستند.",
          "en": "3NF و BCNF هر دو normal form هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "BCNF سخت‌تر است؛ determinant باید candidate key باشد.",
          "en": "BCNF سخت‌تر است؛ determinant باید candidate key باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "BCNF = determinant key",
          "en": "BCNF = determinant key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:02",
        "recordKey": "exam-trap:database:02@1",
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
        "title": {
          "fa": "Candidate vs Primary Key",
          "en": "Candidate vs Primary Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "candidate key همان primary key است.",
          "en": "Candidate vs Primary Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو unique هستند.",
          "en": "هر دو unique هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Primary یکی از candidateهاست که انتخاب شده.",
          "en": "Primary یکی از candidateهاست که انتخاب شده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "primary = chosen candidate",
          "en": "primary = chosen candidate",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:03",
        "recordKey": "exam-trap:database:03@1",
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
        "title": {
          "fa": "Superkey vs Candidate Key",
          "en": "Superkey vs Candidate Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر superkey حداقل است.",
          "en": "Superkey vs Candidate Key",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو tuple را uniquely مشخص می‌کنند.",
          "en": "هر دو tuple را uniquely مشخص می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Candidate key minimal است؛ superkey می‌تواند اضافه داشته باشد.",
          "en": "Candidate key minimal است؛ superkey می‌تواند اضافه داشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "candidate = minimal superkey",
          "en": "candidate = minimal superkey",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:04",
        "recordKey": "exam-trap:database:04@1",
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
        "title": {
          "fa": "Partial vs Transitive Dependency",
          "en": "Partial vs Transitive Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر dependency غیرمستقیم partial است.",
          "en": "Partial vs Transitive Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو برای normalization مهم‌اند.",
          "en": "هر دو برای normalization مهم‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Partial به بخشی از composite key؛ transitive از طریق attribute واسط.",
          "en": "Partial به بخشی از composite key؛ transitive از طریق attribute واسط.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "part of key → partial",
          "en": "part of key → partial",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:05",
        "recordKey": "exam-trap:database:05@1",
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
        "title": {
          "fa": "3NF prime exception",
          "en": "3NF prime exception",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر X→A که X key نیست 3NF را می‌شکند.",
          "en": "3NF prime exception",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "BCNF همین را می‌گوید.",
          "en": "BCNF همین را می‌گوید.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "در 3NF اگر A prime باشد، ممکن است مجاز باشد.",
          "en": "در 3NF اگر A prime باشد، ممکن است مجاز باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "RHS prime can save 3NF",
          "en": "RHS prime can save 3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:06",
        "recordKey": "exam-trap:database:06@1",
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
        "title": {
          "fa": "Hash Index vs B+ Tree",
          "en": "Hash Index vs B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Hash همیشه سریع‌تر است.",
          "en": "Hash Index vs B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "O(1) جذاب است.",
          "en": "O(1) جذاب است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Hash برای equality؛ B+ Tree برای range/order بهتر است.",
          "en": "Hash برای equality؛ B+ Tree برای range/order بهتر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "range → B+ Tree",
          "en": "range → B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:07",
        "recordKey": "exam-trap:database:07@1",
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
        "title": {
          "fa": "Clustered vs Non-clustered Index",
          "en": "Clustered vs Non-clustered Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر index داده را مرتب ذخیره می‌کند.",
          "en": "Clustered vs Non-clustered Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام index فیزیکی به نظر می‌رسد.",
          "en": "نام index فیزیکی به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Clustered ترتیب فیزیکی/اصلی داده را تحت تأثیر می‌گذارد؛ non-clustered ساختار جداست.",
          "en": "Clustered ترتیب فیزیکی/اصلی داده را تحت تأثیر می‌گذارد؛ non-clustered ساختار جداست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "clustered affects data order",
          "en": "clustered affects data order",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:08",
        "recordKey": "exam-trap:database:08@1",
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
        "title": {
          "fa": "Serializable vs Repeatable Read",
          "en": "Serializable vs Repeatable Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Repeatable Read جلوی همه phantomها را می‌گیرد.",
          "en": "Serializable vs Repeatable Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نامش قوی به نظر می‌رسد.",
          "en": "نامش قوی به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Serializable قوی‌ترین مدل رایج است؛ phantom معمولاً دام تفاوت است.",
          "en": "Serializable قوی‌ترین مدل رایج است؛ phantom معمولاً دام تفاوت است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "phantom → serializable",
          "en": "phantom → serializable",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:09",
        "recordKey": "exam-trap:database:09@1",
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
        "title": {
          "fa": "Dirty Read",
          "en": "Dirty Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "خواندن داده commit شده ولی قدیمی است.",
          "en": "Dirty Read",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کلمه dirty مبهم است.",
          "en": "کلمه dirty مبهم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Dirty یعنی uncommitted خوانده شده.",
          "en": "Dirty یعنی uncommitted خوانده شده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "dirty = uncommitted",
          "en": "dirty = uncommitted",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:10",
        "recordKey": "exam-trap:database:10@1",
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
        "title": {
          "fa": "Deadlock vs Starvation",
          "en": "Deadlock vs Starvation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر انتظار طولانی deadlock است.",
          "en": "Deadlock vs Starvation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو گیرکردن هستند.",
          "en": "هر دو گیرکردن هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Deadlock چرخه انتظار دارد؛ starvation ممکن است چرخه نداشته باشد.",
          "en": "Deadlock چرخه انتظار دارد؛ starvation ممکن است چرخه نداشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "cycle → deadlock",
          "en": "cycle → deadlock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:11",
        "recordKey": "exam-trap:database:11@1",
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
        "title": {
          "fa": "LEFT JOIN vs INNER JOIN",
          "en": "LEFT JOIN vs INNER JOIN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "LEFT JOIN فقط matchها را می‌دهد.",
          "en": "LEFT JOIN vs INNER JOIN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "join معمولاً match تداعی می‌کند.",
          "en": "join معمولاً match تداعی می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "LEFT همهٔ ردیف‌های چپ را نگه می‌دارد.",
          "en": "LEFT همهٔ ردیف‌های چپ را نگه می‌دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "LEFT preserves left",
          "en": "LEFT preserves left",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:12",
        "recordKey": "exam-trap:database:12@1",
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
        "title": {
          "fa": "COUNT(*) vs COUNT(column)",
          "en": "COUNT(*) vs COUNT(column)",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو NULLها را یکسان می‌شمارند.",
          "en": "COUNT(*) vs COUNT(column)",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو count هستند.",
          "en": "هر دو count هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "COUNT(*) rowها؛ COUNT(column) مقدارهای non-NULL.",
          "en": "COUNT(*) rowها؛ COUNT(column) مقدارهای non-NULL.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "COUNT(column) skips NULL",
          "en": "COUNT(column) skips NULL",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:13",
        "recordKey": "exam-trap:database:13@1",
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
        "title": {
          "fa": "WHERE vs HAVING",
          "en": "WHERE vs HAVING",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "HAVING قبل از group اعمال می‌شود.",
          "en": "WHERE vs HAVING",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو filter هستند.",
          "en": "هر دو filter هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "WHERE قبل از aggregation؛ HAVING بعد از group.",
          "en": "WHERE قبل از aggregation؛ HAVING بعد از group.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "WHERE rows, HAVING groups",
          "en": "WHERE rows, HAVING groups",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:14",
        "recordKey": "exam-trap:database:14@1",
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
        "title": {
          "fa": "View storage",
          "en": "View storage",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "View همیشه دادهٔ فیزیکی جدا دارد.",
          "en": "View storage",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "مانند جدول query می‌شود.",
          "en": "مانند جدول query می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "View معمولاً query منطقی است؛ materialized view استثناست.",
          "en": "View معمولاً query منطقی است؛ materialized view استثناست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "view = stored query",
          "en": "view = stored query",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:15",
        "recordKey": "exam-trap:database:15@1",
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
        "title": {
          "fa": "FD from sample rows",
          "en": "FD from sample rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "با چند row می‌توان FD قطعی اثبات کرد.",
          "en": "FD from sample rows",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "داده نمونه وسوسه‌کننده است.",
          "en": "داده نمونه وسوسه‌کننده است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "نمونه می‌تواند نقض کند، اما اثبات کلی نیاز به constraint دارد.",
          "en": "نمونه می‌تواند نقض کند، اما اثبات کلی نیاز به constraint دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "sample disproves easier than proves",
          "en": "sample disproves easier than proves",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:16",
        "recordKey": "exam-trap:database:16@1",
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
        "title": {
          "fa": "Closure stopping too early",
          "en": "Closure stopping too early",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "بعد از یک دور اعمال FD کافی است.",
          "en": "Closure stopping too early",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "فرایند مکانیکی ساده به نظر می‌رسد.",
          "en": "فرایند مکانیکی ساده به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "تا وقتی attribute جدید اضافه می‌شود ادامه بده.",
          "en": "تا وقتی attribute جدید اضافه می‌شود ادامه بده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "closure until fixed point",
          "en": "closure until fixed point",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:17",
        "recordKey": "exam-trap:database:17@1",
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
        "title": {
          "fa": "Minimal cover order",
          "en": "Minimal cover order",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "اول FD زائد را حذف کن.",
          "en": "Minimal cover order",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کاهش تعداد rule جذاب است.",
          "en": "کاهش تعداد rule جذاب است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "اول RHS تک‌صفت، بعد attribute زائد، بعد FD زائد.",
          "en": "اول RHS تک‌صفت، بعد attribute زائد، بعد FD زائد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "RHS, LHS, redundant",
          "en": "RHS, LHS, redundant",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:18",
        "recordKey": "exam-trap:database:18@1",
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
        "title": {
          "fa": "Exclusive lock",
          "en": "Exclusive lock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Exclusive lock برای read مشترک است.",
          "en": "Exclusive lock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "exclusive یعنی مهم‌تر به نظر می‌آید.",
          "en": "exclusive یعنی مهم‌تر به نظر می‌آید.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "X lock برای write؛ S lock برای read.",
          "en": "X lock برای write؛ S lock برای read.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "S read, X write",
          "en": "S read, X write",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:19",
        "recordKey": "exam-trap:database:19@1",
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
        "title": {
          "fa": "Transaction vs Query",
          "en": "Transaction vs Query",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر query یک transaction کامل با ACID جداست.",
          "en": "Transaction vs Query",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "query داخل DB اجرا می‌شود.",
          "en": "query داخل DB اجرا می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Transaction واحد منطقی کار است و می‌تواند چند query داشته باشد.",
          "en": "Transaction واحد منطقی کار است و می‌تواند چند query داشته باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "transaction = unit of work",
          "en": "transaction = unit of work",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:20",
        "recordKey": "exam-trap:database:20@1",
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
        "title": {
          "fa": "B+ Tree leaf confusion",
          "en": "B+ Tree leaf confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "همهٔ داده فقط در internal nodeهاست.",
          "en": "B+ Tree leaf confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "درخت بودن باعث focus روی ریشه می‌شود.",
          "en": "درخت بودن باعث focus روی ریشه می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "در B+ Tree مسیر decision در internal و داده/اشاره‌گر در leafهاست.",
          "en": "در B+ Tree مسیر decision در internal و داده/اشاره‌گر در leafهاست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "B+ data at leaves",
          "en": "B+ data at leaves",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:21",
        "recordKey": "exam-trap:database:21@1",
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
        "title": {
          "fa": "Projection vs Selection",
          "en": "Projection vs Selection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "selection ستون انتخاب می‌کند.",
          "en": "Projection vs Selection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام‌ها شبیه UI انتخاب هستند.",
          "en": "نام‌ها شبیه UI انتخاب هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Selection row کم می‌کند؛ Projection column کم می‌کند.",
          "en": "Selection row کم می‌کند؛ Projection column کم می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "select rows, project columns",
          "en": "select rows, project columns",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "exam-trap:database:22",
        "recordKey": "exam-trap:database:22@1",
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
        "title": {
          "fa": "Query optimization certainty",
          "en": "Query optimization certainty",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "optimizer همیشه بهترین plan واقعی را می‌یابد.",
          "en": "Query optimization certainty",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام optimizer قطعی به نظر می‌رسد.",
          "en": "نام optimizer قطعی به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Optimizer بر اساس estimate و statistics تصمیم می‌گیرد.",
          "en": "Optimizer بر اساس estimate و statistics تصمیم می‌گیرد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "optimizer estimates",
          "en": "optimizer estimates",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "relatedQuestionIds": [],
        "trapType": "concept-confusion",
        "patternClusterIds": [],
        "frequencyLevel": "unknown",
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseExamTraps", { payload: payload, registrations: registrations });
})(window);
