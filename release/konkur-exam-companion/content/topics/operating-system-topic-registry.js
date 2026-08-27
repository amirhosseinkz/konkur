(function registerOperatingSystemTopicRegistry(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:topics",
    "datasetType": "topics",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "topic:operating-system:os-responsibilities",
        "recordKey": "topic:operating-system:os-responsibilities@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "os-responsibilities",
        "title": {
          "fa": "وظایف سیستم‌عامل",
          "en": "Operating System Responsibilities",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Operating System Responsibilities",
        "shortDescription": "مدیریت فرایند، حافظه، فایل، I/O و abstractionها.",
        "summary": {
          "fa": "مدیریت فرایند، حافظه، فایل، I/O و abstractionها.",
          "en": "Operating System Responsibilities",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:os-responsibilities:crash"
        ],
        "flashcardIds": [],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:os-responsibilities:process-concept:similar",
          "topic-link:os-responsibilities:memory-allocation:similar",
          "topic-link:os-responsibilities:file-system-disk:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-concept",
          "topic:operating-system:memory-allocation",
          "topic:operating-system:file-system-disk"
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
        "id": "topic:operating-system:process-concept",
        "recordKey": "topic:operating-system:process-concept@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "process-concept",
        "title": {
          "fa": "مفهوم فرایند",
          "en": "Process Concept",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Process Concept",
        "shortDescription": "برنامه در حال اجرا با address space و منابع خودش.",
        "summary": {
          "fa": "برنامه در حال اجرا با address space و منابع خودش.",
          "en": "Process Concept",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:process-concept:crash"
        ],
        "flashcardIds": [],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:process-concept:process-states-pcb:similar",
          "topic-link:process-concept:process-vs-thread:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-states-pcb",
          "topic:operating-system:process-vs-thread"
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
        "id": "topic:operating-system:process-states-pcb",
        "recordKey": "topic:operating-system:process-states-pcb@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "process-states-pcb",
        "title": {
          "fa": "حالت‌های فرایند و PCB",
          "en": "Process States and PCB",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Process States and PCB",
        "shortDescription": "new، ready، running، waiting، terminated و اطلاعات PCB.",
        "summary": {
          "fa": "new، ready، running، waiting، terminated و اطلاعات PCB.",
          "en": "Process States and PCB",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:process-states-pcb:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:021",
          "flashcard:operating-system:022",
          "flashcard:operating-system:023"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:05",
          "golden-rule:operating-system:06",
          "golden-rule:operating-system:07"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:process-states-pcb:process-concept:similar",
          "topic-link:process-states-pcb:context-switching:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-concept",
          "topic:operating-system:context-switching"
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
        "id": "topic:operating-system:context-switching",
        "recordKey": "topic:operating-system:context-switching@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "context-switching",
        "title": {
          "fa": "تعویض متن",
          "en": "Context Switching",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Context Switching",
        "shortDescription": "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها.",
        "summary": {
          "fa": "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها.",
          "en": "Context Switching",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:context-switching:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:024"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:08"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:context-switching:process-states-pcb:similar",
          "topic-link:context-switching:scheduling-basics:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-states-pcb",
          "topic:operating-system:scheduling-basics"
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
        "id": "topic:operating-system:process-vs-thread",
        "recordKey": "topic:operating-system:process-vs-thread@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "process-vs-thread",
        "title": {
          "fa": "فرایند در برابر Thread",
          "en": "Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Process vs Thread",
        "shortDescription": "address-space sharing، isolation، cost و failure impact.",
        "summary": {
          "fa": "address-space sharing، isolation، cost و failure impact.",
          "en": "Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:process-vs-thread:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:001",
          "flashcard:operating-system:017",
          "flashcard:operating-system:018",
          "flashcard:operating-system:019",
          "flashcard:operating-system:020",
          "flashcard:operating-system:082"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:01",
          "golden-rule:operating-system:02",
          "golden-rule:operating-system:03",
          "golden-rule:operating-system:04"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:01"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:process-vs-thread:process-concept:similar",
          "topic-link:process-vs-thread:user-kernel-threads:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-concept",
          "topic:operating-system:user-kernel-threads"
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
        "id": "topic:operating-system:user-kernel-threads",
        "recordKey": "topic:operating-system:user-kernel-threads@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "user-kernel-threads",
        "title": {
          "fa": "Thread کاربر و Kernel",
          "en": "User Threads vs Kernel Threads",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "User Threads vs Kernel Threads",
        "shortDescription": "مدیریت thread در user space یا kernel و اثر blocking.",
        "summary": {
          "fa": "مدیریت thread در user space یا kernel و اثر blocking.",
          "en": "User Threads vs Kernel Threads",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:user-kernel-threads:crash"
        ],
        "flashcardIds": [],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:user-kernel-threads:process-vs-thread:similar",
          "topic-link:user-kernel-threads:context-switching:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:process-vs-thread",
          "topic:operating-system:context-switching"
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
        "id": "topic:operating-system:scheduling-basics",
        "recordKey": "topic:operating-system:scheduling-basics@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "scheduling-basics",
        "title": {
          "fa": "مبانی زمان‌بندی CPU",
          "en": "CPU Scheduling Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "CPU Scheduling Basics",
        "shortDescription": "arrival، burst، waiting، turnaround، response و Gantt chart.",
        "summary": {
          "fa": "arrival، burst، waiting، turnaround، response و Gantt chart.",
          "en": "CPU Scheduling Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:scheduling-basics:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:002",
          "flashcard:operating-system:003",
          "flashcard:operating-system:004",
          "flashcard:operating-system:025",
          "flashcard:operating-system:026",
          "flashcard:operating-system:027",
          "flashcard:operating-system:028",
          "flashcard:operating-system:083",
          "flashcard:operating-system:084"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:09",
          "golden-rule:operating-system:10",
          "golden-rule:operating-system:11",
          "golden-rule:operating-system:12"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:02",
          "exam-trap:operating-system:03"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:scheduling-basics:fcfs:similar",
          "topic-link:scheduling-basics:sjf-srtf:similar",
          "topic-link:scheduling-basics:round-robin:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:fcfs",
          "topic:operating-system:sjf-srtf",
          "topic:operating-system:round-robin"
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
        "id": "topic:operating-system:fcfs",
        "recordKey": "topic:operating-system:fcfs@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "fcfs",
        "title": {
          "fa": "FCFS",
          "en": "FCFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "FCFS",
        "shortDescription": "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone.",
        "summary": {
          "fa": "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone.",
          "en": "FCFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:fcfs:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:029"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:13"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:fcfs:scheduling-basics:similar",
          "topic-link:fcfs:sjf-srtf:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:sjf-srtf"
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
        "id": "topic:operating-system:sjf-srtf",
        "recordKey": "topic:operating-system:sjf-srtf@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "sjf-srtf",
        "title": {
          "fa": "SJF و SRTF",
          "en": "SJF and SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "SJF and SRTF",
        "shortDescription": "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است.",
        "summary": {
          "fa": "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است.",
          "en": "SJF and SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:sjf-srtf:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:030",
          "flashcard:operating-system:031",
          "flashcard:operating-system:085"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:14",
          "golden-rule:operating-system:15"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:04"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:sjf-srtf:scheduling-basics:similar",
          "topic-link:sjf-srtf:priority-scheduling:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:priority-scheduling"
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
        "id": "topic:operating-system:priority-scheduling",
        "recordKey": "topic:operating-system:priority-scheduling@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "priority-scheduling",
        "title": {
          "fa": "Priority Scheduling",
          "en": "Priority Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Priority Scheduling",
        "shortDescription": "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود.",
        "summary": {
          "fa": "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود.",
          "en": "Priority Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:priority-scheduling:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:032",
          "flashcard:operating-system:033",
          "flashcard:operating-system:100"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:16",
          "golden-rule:operating-system:17"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:19"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:priority-scheduling:scheduling-basics:similar",
          "topic-link:priority-scheduling:round-robin:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:round-robin"
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
        "id": "topic:operating-system:round-robin",
        "recordKey": "topic:operating-system:round-robin@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "round-robin",
        "title": {
          "fa": "Round Robin",
          "en": "Round Robin",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Round Robin",
        "shortDescription": "preemptive با quantum؛ trade-off بین response و overhead.",
        "summary": {
          "fa": "preemptive با quantum؛ trade-off بین response و overhead.",
          "en": "Round Robin",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:round-robin:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:005",
          "flashcard:operating-system:034",
          "flashcard:operating-system:035",
          "flashcard:operating-system:036",
          "flashcard:operating-system:099"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:18",
          "golden-rule:operating-system:19",
          "golden-rule:operating-system:20"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:18"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:round-robin:scheduling-basics:similar",
          "topic-link:round-robin:priority-scheduling:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:priority-scheduling"
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
        "id": "topic:operating-system:synchronization",
        "recordKey": "topic:operating-system:synchronization@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "synchronization",
        "title": {
          "fa": "همگام‌سازی",
          "en": "Synchronization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Synchronization",
        "shortDescription": "race condition، shared state و کنترل interleaving.",
        "summary": {
          "fa": "race condition، shared state و کنترل interleaving.",
          "en": "Synchronization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:synchronization:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:037"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:21"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:synchronization:critical-section:similar",
          "topic-link:synchronization:mutex-semaphore:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:critical-section",
          "topic:operating-system:mutex-semaphore"
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
        "id": "topic:operating-system:critical-section",
        "recordKey": "topic:operating-system:critical-section@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "critical-section",
        "title": {
          "fa": "ناحیهٔ بحرانی",
          "en": "Critical Section",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Critical Section",
        "shortDescription": "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است.",
        "summary": {
          "fa": "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است.",
          "en": "Critical Section",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:critical-section:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:038",
          "flashcard:operating-system:039",
          "flashcard:operating-system:040",
          "flashcard:operating-system:041",
          "flashcard:operating-system:102"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:22",
          "golden-rule:operating-system:23",
          "golden-rule:operating-system:24",
          "golden-rule:operating-system:25"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:21"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:critical-section:synchronization:similar",
          "topic-link:critical-section:mutex-semaphore:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:synchronization",
          "topic:operating-system:mutex-semaphore"
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
        "id": "topic:operating-system:mutex-semaphore",
        "recordKey": "topic:operating-system:mutex-semaphore@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "mutex-semaphore",
        "title": {
          "fa": "Mutex و Semaphore",
          "en": "Mutex and Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Mutex and Semaphore",
        "shortDescription": "مالکیت mutex در برابر permits/counting در semaphore.",
        "summary": {
          "fa": "مالکیت mutex در برابر permits/counting در semaphore.",
          "en": "Mutex and Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:mutex-semaphore:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:008",
          "flashcard:operating-system:009",
          "flashcard:operating-system:042",
          "flashcard:operating-system:043",
          "flashcard:operating-system:044",
          "flashcard:operating-system:088"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:26",
          "golden-rule:operating-system:27",
          "golden-rule:operating-system:28"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:07"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:mutex-semaphore:critical-section:similar",
          "topic-link:mutex-semaphore:monitor-condition-vars:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:critical-section",
          "topic:operating-system:monitor-condition-vars"
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
        "id": "topic:operating-system:monitor-condition-vars",
        "recordKey": "topic:operating-system:monitor-condition-vars@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "monitor-condition-vars",
        "title": {
          "fa": "Monitor و Condition Variable",
          "en": "Monitor and Condition Variables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Monitor and Condition Variables",
        "shortDescription": "abstraction سطح بالاتر برای lock و wait/signal.",
        "summary": {
          "fa": "abstraction سطح بالاتر برای lock و wait/signal.",
          "en": "Monitor and Condition Variables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:monitor-condition-vars:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:045",
          "flashcard:operating-system:046",
          "flashcard:operating-system:101"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:29",
          "golden-rule:operating-system:30"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:20"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:monitor-condition-vars:mutex-semaphore:similar",
          "topic-link:monitor-condition-vars:classical-sync-problems:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:mutex-semaphore",
          "topic:operating-system:classical-sync-problems"
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
        "id": "topic:operating-system:classical-sync-problems",
        "recordKey": "topic:operating-system:classical-sync-problems@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "classical-sync-problems",
        "title": {
          "fa": "مسائل کلاسیک همگام‌سازی",
          "en": "Classical Synchronization Problems",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Classical Synchronization Problems",
        "shortDescription": "producer-consumer، readers-writers و dining philosophers.",
        "summary": {
          "fa": "producer-consumer، readers-writers و dining philosophers.",
          "en": "Classical Synchronization Problems",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:classical-sync-problems:crash"
        ],
        "flashcardIds": [],
        "goldenRuleIds": [],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:classical-sync-problems:synchronization:similar",
          "topic-link:classical-sync-problems:deadlock-conditions:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:synchronization",
          "topic:operating-system:deadlock-conditions"
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
        "id": "topic:operating-system:deadlock-conditions",
        "recordKey": "topic:operating-system:deadlock-conditions@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "deadlock-conditions",
        "title": {
          "fa": "شرایط بن‌بست",
          "en": "Deadlock Conditions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Deadlock Conditions",
        "shortDescription": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
        "summary": {
          "fa": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
          "en": "Deadlock Conditions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:deadlock-conditions:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:006",
          "flashcard:operating-system:047",
          "flashcard:operating-system:048",
          "flashcard:operating-system:049",
          "flashcard:operating-system:050",
          "flashcard:operating-system:051",
          "flashcard:operating-system:086"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:31",
          "golden-rule:operating-system:32",
          "golden-rule:operating-system:33",
          "golden-rule:operating-system:34",
          "golden-rule:operating-system:35"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:05"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:deadlock-conditions:deadlock-handling:similar",
          "topic-link:deadlock-conditions:bankers-algorithm:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:deadlock-handling",
          "topic:operating-system:bankers-algorithm"
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
        "id": "topic:operating-system:deadlock-handling",
        "recordKey": "topic:operating-system:deadlock-handling@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "deadlock-handling",
        "title": {
          "fa": "مدیریت بن‌بست",
          "en": "Deadlock Prevention, Avoidance, Detection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Deadlock Prevention, Avoidance, Detection",
        "shortDescription": "prevention، avoidance، detection و recovery را جدا کن.",
        "summary": {
          "fa": "prevention، avoidance، detection و recovery را جدا کن.",
          "en": "Deadlock Prevention, Avoidance, Detection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:deadlock-handling:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:052",
          "flashcard:operating-system:053",
          "flashcard:operating-system:054",
          "flashcard:operating-system:097"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:36",
          "golden-rule:operating-system:37",
          "golden-rule:operating-system:38"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:16"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:deadlock-handling:deadlock-conditions:similar",
          "topic-link:deadlock-handling:bankers-algorithm:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:deadlock-conditions",
          "topic:operating-system:bankers-algorithm"
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
        "id": "topic:operating-system:bankers-algorithm",
        "recordKey": "topic:operating-system:bankers-algorithm@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "bankers-algorithm",
        "title": {
          "fa": "الگوریتم بانکدار",
          "en": "Banker's Algorithm",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Banker's Algorithm",
        "shortDescription": "safe state، safe sequence و درخواست resource.",
        "summary": {
          "fa": "safe state، safe sequence و درخواست resource.",
          "en": "Banker's Algorithm",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:bankers-algorithm:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:007",
          "flashcard:operating-system:055",
          "flashcard:operating-system:056",
          "flashcard:operating-system:087",
          "flashcard:operating-system:098"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:39",
          "golden-rule:operating-system:40"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:06",
          "exam-trap:operating-system:17"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:bankers-algorithm:deadlock-handling:similar",
          "topic-link:bankers-algorithm:deadlock-conditions:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:deadlock-handling",
          "topic:operating-system:deadlock-conditions"
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
        "id": "topic:operating-system:memory-allocation",
        "recordKey": "topic:operating-system:memory-allocation@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "memory-allocation",
        "title": {
          "fa": "تخصیص حافظه",
          "en": "Memory Allocation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Memory Allocation",
        "shortDescription": "logical/physical address و fragmentation داخلی/خارجی.",
        "summary": {
          "fa": "logical/physical address و fragmentation داخلی/خارجی.",
          "en": "Memory Allocation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:memory-allocation:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:010",
          "flashcard:operating-system:011",
          "flashcard:operating-system:057",
          "flashcard:operating-system:058",
          "flashcard:operating-system:059",
          "flashcard:operating-system:060",
          "flashcard:operating-system:089",
          "flashcard:operating-system:094"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:41",
          "golden-rule:operating-system:42",
          "golden-rule:operating-system:43",
          "golden-rule:operating-system:44"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:08",
          "exam-trap:operating-system:13"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:memory-allocation:paging:similar",
          "topic-link:memory-allocation:segmentation:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:paging",
          "topic:operating-system:segmentation"
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
        "id": "topic:operating-system:paging",
        "recordKey": "topic:operating-system:paging@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "paging",
        "title": {
          "fa": "صفحه‌بندی",
          "en": "Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Paging",
        "shortDescription": "page، frame، page table و حذف external fragmentation.",
        "summary": {
          "fa": "page، frame، page table و حذف external fragmentation.",
          "en": "Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:paging:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:061",
          "flashcard:operating-system:062"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:45",
          "golden-rule:operating-system:46"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:paging:memory-allocation:similar",
          "topic-link:paging:tlb-thrashing-working-set:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:memory-allocation",
          "topic:operating-system:tlb-thrashing-working-set"
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
        "id": "topic:operating-system:segmentation",
        "recordKey": "topic:operating-system:segmentation@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "segmentation",
        "title": {
          "fa": "Segmentation",
          "en": "Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Segmentation",
        "shortDescription": "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه.",
        "summary": {
          "fa": "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه.",
          "en": "Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:segmentation:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:063",
          "flashcard:operating-system:064",
          "flashcard:operating-system:093"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:47",
          "golden-rule:operating-system:48"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:12"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:segmentation:memory-allocation:similar",
          "topic-link:segmentation:paging:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:memory-allocation",
          "topic:operating-system:paging"
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
        "id": "topic:operating-system:virtual-memory-demand-paging",
        "recordKey": "topic:operating-system:virtual-memory-demand-paging@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "virtual-memory-demand-paging",
        "title": {
          "fa": "حافظهٔ مجازی و Demand Paging",
          "en": "Virtual Memory and Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Virtual Memory and Demand Paging",
        "shortDescription": "page fault، locality و آوردن صفحه هنگام نیاز.",
        "summary": {
          "fa": "page fault، locality و آوردن صفحه هنگام نیاز.",
          "en": "Virtual Memory and Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:virtual-memory-demand-paging:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:012",
          "flashcard:operating-system:065",
          "flashcard:operating-system:066",
          "flashcard:operating-system:067",
          "flashcard:operating-system:103"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:49",
          "golden-rule:operating-system:50",
          "golden-rule:operating-system:51"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:22"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:virtual-memory-demand-paging:page-replacement:similar",
          "topic-link:virtual-memory-demand-paging:tlb-thrashing-working-set:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:page-replacement",
          "topic:operating-system:tlb-thrashing-working-set"
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
        "id": "topic:operating-system:page-replacement",
        "recordKey": "topic:operating-system:page-replacement@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "page-replacement",
        "title": {
          "fa": "جایگزینی صفحه",
          "en": "Page Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Page Replacement",
        "shortDescription": "FIFO، Optimal، LRU و Clock/Second Chance.",
        "summary": {
          "fa": "FIFO، Optimal، LRU و Clock/Second Chance.",
          "en": "Page Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:page-replacement:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:014",
          "flashcard:operating-system:015",
          "flashcard:operating-system:068",
          "flashcard:operating-system:069",
          "flashcard:operating-system:070",
          "flashcard:operating-system:071",
          "flashcard:operating-system:091",
          "flashcard:operating-system:092",
          "flashcard:operating-system:095"
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:52",
          "golden-rule:operating-system:53",
          "golden-rule:operating-system:54"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:10",
          "exam-trap:operating-system:11",
          "exam-trap:operating-system:14"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:page-replacement:virtual-memory-demand-paging:similar",
          "topic-link:page-replacement:tlb-thrashing-working-set:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:virtual-memory-demand-paging",
          "topic:operating-system:tlb-thrashing-working-set"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "hard",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 8,
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "lastNightIncluded": true,
        "versionLabel": "1"
      },
      {
        "id": "topic:operating-system:tlb-thrashing-working-set",
        "recordKey": "topic:operating-system:tlb-thrashing-working-set@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "tlb-thrashing-working-set",
        "title": {
          "fa": "TLB، Thrashing و Working Set",
          "en": "TLB, Thrashing and Working Set",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "TLB, Thrashing and Working Set",
        "shortDescription": "TLB hit، effective access intuition، locality و working set.",
        "summary": {
          "fa": "TLB hit، effective access intuition، locality و working set.",
          "en": "TLB, Thrashing and Working Set",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:tlb-thrashing-working-set:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:013",
          "flashcard:operating-system:072",
          "flashcard:operating-system:073",
          "flashcard:operating-system:074",
          "flashcard:operating-system:075",
          "flashcard:operating-system:090",
          "flashcard:operating-system:104"
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:operating-system:09",
          "exam-trap:operating-system:23"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:tlb-thrashing-working-set:paging:similar",
          "topic-link:tlb-thrashing-working-set:virtual-memory-demand-paging:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:paging",
          "topic:operating-system:virtual-memory-demand-paging"
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
        "id": "topic:operating-system:file-system-disk",
        "recordKey": "topic:operating-system:file-system-disk@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T14:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Operating System content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T14:00:00.000Z",
        "updatedAt": "2026-07-15T14:00:00.000Z",
        "subjectId": "subject:operating-system",
        "slug": "file-system-disk",
        "title": {
          "fa": "فایل‌سیستم و زمان‌بندی دیسک",
          "en": "File-System Basics and Disk Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "File-System Basics and Disk Scheduling",
        "shortDescription": "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN.",
        "summary": {
          "fa": "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN.",
          "en": "File-System Basics and Disk Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:operating-system:file-system-disk:crash"
        ],
        "flashcardIds": [
          "flashcard:operating-system:016",
          "flashcard:operating-system:076",
          "flashcard:operating-system:077",
          "flashcard:operating-system:078",
          "flashcard:operating-system:079",
          "flashcard:operating-system:080",
          "flashcard:operating-system:081",
          "flashcard:operating-system:096"
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:operating-system:15",
          "exam-trap:operating-system:24"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:file-system-disk:os-responsibilities:similar",
          "topic-link:file-system-disk:memory-allocation:similar"
        ],
        "relatedTopicIds": [
          "topic:operating-system:os-responsibilities",
          "topic:operating-system:memory-allocation"
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
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "operatingSystemTopicRegistry", { payload: payload, registrations: registrations });
})(window);
