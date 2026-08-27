(function registerDatabaseCrashCourse(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "database:lessons",
    "datasetType": "lessons",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "lesson:database:introduction:crash",
        "recordKey": "lesson:database:introduction:crash@1",
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
        "topicId": "topic:database:introduction",
        "title": {
          "fa": "مقدمهٔ پایگاه داده - Crash Course",
          "en": "Introduction Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
          "en": "Introduction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "هدف DBMS، داده، schema و query را سریع تشخیص بده. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "هدف DBMS، داده، schema و query را سریع تشخیص بده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Introduction: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Introduction",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:database:086"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:relational-model:crash",
          "lesson:database:sql-joins:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:relational-model:crash",
        "recordKey": "lesson:database:relational-model:crash@1",
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
        "topicId": "topic:database:relational-model",
        "title": {
          "fa": "مدل رابطه‌ای - Crash Course",
          "en": "Relational Model Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "relation، tuple، attribute و constraintها.",
          "en": "Relational Model",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "relation، tuple، attribute و constraintها. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "relation، tuple، attribute و constraintها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Relational Model: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Relational Model",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:41"
        ],
        "examTrapIds": [
          "exam-trap:database:21"
        ],
        "flashcardIds": [
          "flashcard:database:056",
          "flashcard:database:084",
          "flashcard:database:087"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:keys:crash",
          "lesson:database:normalization:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:keys:crash",
        "recordKey": "lesson:database:keys:crash@1",
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
        "topicId": "topic:database:keys",
        "title": {
          "fa": "کلیدها - Crash Course",
          "en": "Keys Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "superkey، candidate key، primary key و foreign key.",
          "en": "Keys",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "superkey، candidate key، primary key و foreign key. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "superkey، candidate key، primary key و foreign key.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Candidate key حداقل superkey است؛ Primary key فقط یکی از candidateهاست که انتخاب شده.",
              "en": "Keys",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:database:005",
          "flashcard:database:006",
          "flashcard:database:025",
          "flashcard:database:026",
          "flashcard:database:027",
          "flashcard:database:028"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:functional-dependency:crash",
          "lesson:database:normalization:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:functional-dependency:crash",
        "recordKey": "lesson:database:functional-dependency:crash@1",
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
        "topicId": "topic:database:functional-dependency",
        "title": {
          "fa": "وابستگی تابعی - Crash Course",
          "en": "Functional Dependency Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
          "en": "Functional Dependency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "X→Y یعنی X مقدار Y را تعیین می‌کند. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "X→Y یعنی X مقدار Y را تعیین می‌کند.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "X→Y یعنی اگر دو tuple در X برابر باشند، در Y هم برابرند. از معنی business حدس نزن مگر داده/قاعده داده شده باشد.",
              "en": "Functional Dependency",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:14"
        ],
        "examTrapIds": [
          "exam-trap:database:15"
        ],
        "flashcardIds": [
          "flashcard:database:007",
          "flashcard:database:029",
          "flashcard:database:078",
          "flashcard:database:089"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:armstrong-rules:crash",
          "lesson:database:attribute-closure:crash",
          "lesson:database:normalization:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:armstrong-rules:crash",
        "recordKey": "lesson:database:armstrong-rules:crash@1",
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
        "topicId": "topic:database:armstrong-rules",
        "title": {
          "fa": "قوانین آرمسترانگ - Crash Course",
          "en": "Armstrong Rules Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
          "en": "Armstrong Rules",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Armstrong Rules: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Armstrong Rules",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:16",
          "golden-rule:database:17",
          "golden-rule:database:18"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:database:031",
          "flashcard:database:032",
          "flashcard:database:033",
          "flashcard:database:090"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:functional-dependency:crash",
          "lesson:database:attribute-closure:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:attribute-closure:crash",
        "recordKey": "lesson:database:attribute-closure:crash@1",
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
        "topicId": "topic:database:attribute-closure",
        "title": {
          "fa": "بستار صفت - Crash Course",
          "en": "Attribute Closure Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "محاسبهٔ X+ برای تشخیص key و implication.",
          "en": "Attribute Closure",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "محاسبهٔ X+ برای تشخیص key و implication. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "محاسبهٔ X+ برای تشخیص key و implication.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "برای X+، از X شروع کن و هر FD قابل اعمال را اضافه کن تا دیگر چیزی اضافه نشود.",
              "en": "Attribute Closure",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:15"
        ],
        "examTrapIds": [
          "exam-trap:database:16"
        ],
        "flashcardIds": [
          "flashcard:database:008",
          "flashcard:database:030",
          "flashcard:database:079",
          "flashcard:database:091"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:functional-dependency:crash",
          "lesson:database:minimal-cover:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:minimal-cover:crash",
        "recordKey": "lesson:database:minimal-cover:crash@1",
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
        "topicId": "topic:database:minimal-cover",
        "title": {
          "fa": "پوشش مینیمال - Crash Course",
          "en": "Minimal Cover Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "حذف attribute و FD زائد برای synthesis.",
          "en": "Minimal Cover",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "حذف attribute و FD زائد برای synthesis. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "حذف attribute و FD زائد برای synthesis.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "سمت راست را تک‌صفت کن، صفت زائد سمت چپ را حذف کن، سپس FD زائد را حذف کن.",
              "en": "Minimal Cover",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:19",
          "golden-rule:database:20"
        ],
        "examTrapIds": [
          "exam-trap:database:17"
        ],
        "flashcardIds": [
          "flashcard:database:034",
          "flashcard:database:035",
          "flashcard:database:080",
          "flashcard:database:092"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:attribute-closure:crash",
          "lesson:database:normalization:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:normalization:crash",
        "recordKey": "lesson:database:normalization:crash@1",
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
        "topicId": "topic:database:normalization",
        "title": {
          "fa": "نرمال‌سازی - Crash Course",
          "en": "Normalization Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "کاهش redundancy و anomaly با تکیه بر FD.",
          "en": "Normalization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "کاهش redundancy و anomaly با تکیه بر FD. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "کاهش redundancy و anomaly با تکیه بر FD.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Normalization: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Normalization",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:database:04"
        ],
        "flashcardIds": [
          "flashcard:database:067"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:1nf:crash",
          "lesson:database:2nf:crash",
          "lesson:database:3nf:crash",
          "lesson:database:bcnf:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:1nf:crash",
        "recordKey": "lesson:database:1nf:crash@1",
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
        "topicId": "topic:database:1nf",
        "title": {
          "fa": "فرم نرمال اول - Crash Course",
          "en": "1NF Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "مقادیر atomic؛ نه گروه تکراری.",
          "en": "1NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "مقادیر atomic؛ نه گروه تکراری. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "مقادیر atomic؛ نه گروه تکراری.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "1NF: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "1NF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:21"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:database:009",
          "flashcard:database:036"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:normalization:crash",
          "lesson:database:2nf:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:2nf:crash",
        "recordKey": "lesson:database:2nf:crash@1",
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
        "topicId": "topic:database:2nf",
        "title": {
          "fa": "فرم نرمال دوم - Crash Course",
          "en": "2NF Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "حذف وابستگی جزئی به بخشی از composite key.",
          "en": "2NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "حذف وابستگی جزئی به بخشی از composite key. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "حذف وابستگی جزئی به بخشی از composite key.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "2NF: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "2NF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:22"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:database:010",
          "flashcard:database:037"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:1nf:crash",
          "lesson:database:3nf:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:3nf:crash",
        "recordKey": "lesson:database:3nf:crash@1",
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
        "topicId": "topic:database:3nf",
        "title": {
          "fa": "فرم نرمال سوم - Crash Course",
          "en": "3NF Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "حذف dependency گذرا با استثنای prime attribute.",
          "en": "3NF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "حذف dependency گذرا با استثنای prime attribute. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "حذف dependency گذرا با استثنای prime attribute.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "3NF اجازه می‌دهد RHS prime باشد؛ همین تفاوت مهم با BCNF است.",
              "en": "3NF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:23",
          "golden-rule:database:24"
        ],
        "examTrapIds": [
          "exam-trap:database:05"
        ],
        "flashcardIds": [
          "flashcard:database:011",
          "flashcard:database:038",
          "flashcard:database:039",
          "flashcard:database:068"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:2nf:crash",
          "lesson:database:bcnf:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:bcnf:crash",
        "recordKey": "lesson:database:bcnf:crash@1",
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
        "topicId": "topic:database:bcnf",
        "title": {
          "fa": "BCNF - Crash Course",
          "en": "BCNF Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "هر determinant باید candidate key باشد.",
          "en": "BCNF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "هر determinant باید candidate key باشد. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "هر determinant باید candidate key باشد.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "BCNF سخت‌تر است: هر determinant باید candidate key باشد.",
              "en": "BCNF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:25",
          "golden-rule:database:26"
        ],
        "examTrapIds": [
          "exam-trap:database:01"
        ],
        "flashcardIds": [
          "flashcard:database:004",
          "flashcard:database:040",
          "flashcard:database:041",
          "flashcard:database:064"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:3nf:crash",
          "lesson:database:normalization:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:transactions:crash",
        "recordKey": "lesson:database:transactions:crash@1",
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
        "topicId": "topic:database:transactions",
        "title": {
          "fa": "تراکنش‌ها - Crash Course",
          "en": "Transactions Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "واحد منطقی کار با commit و rollback.",
          "en": "Transactions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "واحد منطقی کار با commit و rollback. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "واحد منطقی کار با commit و rollback.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Transactions: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Transactions",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:47",
          "golden-rule:database:48"
        ],
        "examTrapIds": [
          "exam-trap:database:19"
        ],
        "flashcardIds": [
          "flashcard:database:062",
          "flashcard:database:063",
          "flashcard:database:082"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:acid:crash",
          "lesson:database:isolation-levels:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:acid:crash",
        "recordKey": "lesson:database:acid:crash@1",
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
        "topicId": "topic:database:acid",
        "title": {
          "fa": "ACID - Crash Course",
          "en": "ACID Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "Atomicity، Consistency، Isolation، Durability.",
          "en": "ACID",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "Atomicity، Consistency، Isolation، Durability. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "Atomicity، Consistency، Isolation، Durability.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "A همه یا هیچ؛ C صحت constraint؛ I جدا بودن concurrent transaction؛ D ماندگاری بعد commit.",
              "en": "ACID",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:01",
          "golden-rule:database:02",
          "golden-rule:database:03",
          "golden-rule:database:05"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:database:001",
          "flashcard:database:016",
          "flashcard:database:017",
          "flashcard:database:018",
          "flashcard:database:020"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:transactions:crash",
          "lesson:database:concurrency:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:isolation-levels:crash",
        "recordKey": "lesson:database:isolation-levels:crash@1",
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
        "topicId": "topic:database:isolation-levels",
        "title": {
          "fa": "سطوح Isolation - Crash Course",
          "en": "Isolation Levels Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "dirty، non-repeatable و phantom read را تشخیص بده.",
          "en": "Isolation Levels",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "dirty، non-repeatable و phantom read را تشخیص بده. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "dirty، non-repeatable و phantom read را تشخیص بده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Dirty read یعنی خواندن uncommitted؛ phantom یعنی row جدید مطابق شرط ظاهر شود.",
              "en": "Isolation Levels",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:04",
          "golden-rule:database:06",
          "golden-rule:database:07",
          "golden-rule:database:08"
        ],
        "examTrapIds": [
          "exam-trap:database:08",
          "exam-trap:database:09"
        ],
        "flashcardIds": [
          "flashcard:database:002",
          "flashcard:database:003",
          "flashcard:database:019",
          "flashcard:database:021",
          "flashcard:database:022",
          "flashcard:database:023"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:transactions:crash",
          "lesson:database:concurrency:crash",
          "lesson:database:locks:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:concurrency:crash",
        "recordKey": "lesson:database:concurrency:crash@1",
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
        "topicId": "topic:database:concurrency",
        "title": {
          "fa": "همزمانی - Crash Course",
          "en": "Concurrency Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "schedule، conflict، serializability و anomaly.",
          "en": "Concurrency",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "schedule، conflict، serializability و anomaly. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "schedule، conflict، serializability و anomaly.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Concurrency: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Concurrency",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "flashcardIds": [],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:locks:crash",
          "lesson:database:deadlocks:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:locks:crash",
        "recordKey": "lesson:database:locks:crash@1",
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
        "topicId": "topic:database:locks",
        "title": {
          "fa": "قفل‌ها - Crash Course",
          "en": "Locks Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "shared/exclusive lock و two-phase locking.",
          "en": "Locks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "shared/exclusive lock و two-phase locking. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "shared/exclusive lock و two-phase locking.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Locks: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Locks",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:44",
          "golden-rule:database:45",
          "golden-rule:database:46"
        ],
        "examTrapIds": [
          "exam-trap:database:18"
        ],
        "flashcardIds": [
          "flashcard:database:059",
          "flashcard:database:060",
          "flashcard:database:061",
          "flashcard:database:081"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:concurrency:crash",
          "lesson:database:deadlocks:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:deadlocks:crash",
        "recordKey": "lesson:database:deadlocks:crash@1",
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
        "topicId": "topic:database:deadlocks",
        "title": {
          "fa": "بن‌بست - Crash Course",
          "en": "Deadlocks Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "انتظار چرخه‌ای بین تراکنش‌ها.",
          "en": "Deadlocks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "انتظار چرخه‌ای بین تراکنش‌ها. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "انتظار چرخه‌ای بین تراکنش‌ها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Deadlocks: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Deadlocks",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:42",
          "golden-rule:database:43"
        ],
        "examTrapIds": [
          "exam-trap:database:10"
        ],
        "flashcardIds": [
          "flashcard:database:057",
          "flashcard:database:058",
          "flashcard:database:073"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:locks:crash",
          "lesson:database:concurrency:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:indexes:crash",
        "recordKey": "lesson:database:indexes:crash@1",
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
        "topicId": "topic:database:indexes",
        "title": {
          "fa": "ایندکس‌ها - Crash Course",
          "en": "Indexes Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ساختار کمکی برای سرعت read با هزینهٔ write/storage.",
          "en": "Indexes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ساختار کمکی برای سرعت read با هزینهٔ write/storage. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "ساختار کمکی برای سرعت read با هزینهٔ write/storage.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Index read را سریع‌تر می‌کند ولی write و storage هزینه دارد.",
              "en": "Indexes",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:27"
        ],
        "examTrapIds": [
          "exam-trap:database:07"
        ],
        "flashcardIds": [
          "flashcard:database:042",
          "flashcard:database:070"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:b-plus-tree:crash",
          "lesson:database:hash-index:crash",
          "lesson:database:query-processing:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:b-plus-tree:crash",
        "recordKey": "lesson:database:b-plus-tree:crash@1",
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
        "topicId": "topic:database:b-plus-tree",
        "title": {
          "fa": "درخت B+ - Crash Course",
          "en": "B+ Tree Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ایندکس range-friendly و رایج در DBMS.",
          "en": "B+ Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ایندکس range-friendly و رایج در DBMS. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "ایندکس range-friendly و رایج در DBMS.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "B+ Tree برای range عالی است چون leafها مرتب و linked هستند.",
              "en": "B+ Tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:28",
          "golden-rule:database:29"
        ],
        "examTrapIds": [
          "exam-trap:database:20"
        ],
        "flashcardIds": [
          "flashcard:database:012",
          "flashcard:database:043",
          "flashcard:database:044",
          "flashcard:database:083"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:indexes:crash",
          "lesson:database:hash-index:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:hash-index:crash",
        "recordKey": "lesson:database:hash-index:crash@1",
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
        "topicId": "topic:database:hash-index",
        "title": {
          "fa": "ایندکس Hash - Crash Course",
          "en": "Hash Index Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "جست‌وجوی equality سریع؛ ضعیف برای range.",
          "en": "Hash Index",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "جست‌وجوی equality سریع؛ ضعیف برای range. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "جست‌وجوی equality سریع؛ ضعیف برای range.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Hash برای equality خوب است؛ برای range معمولاً انتخاب بدی است.",
              "en": "Hash Index",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:30",
          "golden-rule:database:31"
        ],
        "examTrapIds": [
          "exam-trap:database:06"
        ],
        "flashcardIds": [
          "flashcard:database:013",
          "flashcard:database:045",
          "flashcard:database:046",
          "flashcard:database:069"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:indexes:crash",
          "lesson:database:b-plus-tree:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:query-processing:crash",
        "recordKey": "lesson:database:query-processing:crash@1",
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
        "topicId": "topic:database:query-processing",
        "title": {
          "fa": "پردازش Query - Crash Course",
          "en": "Query Processing Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "parse، optimize، execute و plan cost.",
          "en": "Query Processing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "parse، optimize، execute و plan cost. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "parse، optimize، execute و plan cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Query Processing: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Query Processing",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:39",
          "golden-rule:database:40"
        ],
        "examTrapIds": [
          "exam-trap:database:22"
        ],
        "flashcardIds": [
          "flashcard:database:054",
          "flashcard:database:055",
          "flashcard:database:085"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:indexes:crash",
          "lesson:database:sql-joins:crash",
          "lesson:database:aggregation:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:sql-joins:crash",
        "recordKey": "lesson:database:sql-joins:crash@1",
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
        "topicId": "topic:database:sql-joins",
        "title": {
          "fa": "Joinهای SQL - Crash Course",
          "en": "SQL Joins Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده.",
          "en": "SQL Joins",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "INNER فقط matchها؛ LEFT همهٔ چپ + match راست یا NULL.",
              "en": "SQL Joins",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:32",
          "golden-rule:database:33"
        ],
        "examTrapIds": [
          "exam-trap:database:11"
        ],
        "flashcardIds": [
          "flashcard:database:014",
          "flashcard:database:047",
          "flashcard:database:048",
          "flashcard:database:074"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:query-processing:crash",
          "lesson:database:views:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:aggregation:crash",
        "recordKey": "lesson:database:aggregation:crash@1",
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
        "topicId": "topic:database:aggregation",
        "title": {
          "fa": "تجمیع - Crash Course",
          "en": "Aggregation Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "GROUP BY، HAVING و COUNT traps.",
          "en": "Aggregation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "GROUP BY، HAVING و COUNT traps. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "GROUP BY، HAVING و COUNT traps.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "WHERE قبل از group؛ HAVING بعد از group. COUNT(column) مقدار NULL را نمی‌شمارد.",
              "en": "Aggregation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:database:015",
          "flashcard:database:049",
          "flashcard:database:050",
          "flashcard:database:051",
          "flashcard:database:052",
          "flashcard:database:075"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:sql-joins:crash",
          "lesson:database:query-processing:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      },
      {
        "id": "lesson:database:views:crash",
        "recordKey": "lesson:database:views:crash@1",
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
        "topicId": "topic:database:views",
        "title": {
          "fa": "Viewها - Crash Course",
          "en": "Views Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی.",
          "en": "Views",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی. هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.",
              "en": "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: definition/rule/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Views: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.",
              "en": "Views",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.",
              "en": "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.",
              "en": "Turn each definition into one test-recognition cue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "mini-self-check",
            "sectionType": "quick-recap",
            "content": {
              "fa": "خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟",
              "en": "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:database:38"
        ],
        "examTrapIds": [
          "exam-trap:database:14"
        ],
        "flashcardIds": [
          "flashcard:database:053",
          "flashcard:database:077"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:database:sql-joins:crash",
          "lesson:database:query-processing:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
        "twentySecondStrategy": "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
        "miniSelfCheck": [
          "آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟",
          "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"
        ]
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "databaseCrashCourse", { payload: payload, registrations: registrations });
})(window);
