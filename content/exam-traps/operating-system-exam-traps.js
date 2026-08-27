(function registerOperatingSystemExamTraps(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:exam-traps",
    "datasetType": "exam-traps",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "exam-trap:operating-system:01",
        "recordKey": "exam-trap:operating-system:01@1",
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
        "topicIds": [
          "topic:operating-system:process-vs-thread"
        ],
        "title": {
          "fa": "Process vs Thread",
          "en": "Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Thread مثل process مستقل است.",
          "en": "Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو execution دارند.",
          "en": "هر دو execution دارند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Thread address space را share می‌کند؛ process مستقل‌تر است.",
          "en": "Thread address space را share می‌کند؛ process مستقل‌تر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "shared address → thread",
          "en": "shared address → thread",
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
        "id": "exam-trap:operating-system:02",
        "recordKey": "exam-trap:operating-system:02@1",
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
        "topicIds": [
          "topic:operating-system:scheduling-basics"
        ],
        "title": {
          "fa": "Waiting vs Turnaround",
          "en": "Waiting vs Turnaround",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو زمان پایان فرایند هستند.",
          "en": "Waiting vs Turnaround",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو در جدول scheduling می‌آیند.",
          "en": "هر دو در جدول scheduling می‌آیند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Waiting فقط ready queue؛ turnaround از arrival تا completion.",
          "en": "Waiting فقط ready queue؛ turnaround از arrival تا completion.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "TAT = C - A",
          "en": "TAT = C - A",
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
        "id": "exam-trap:operating-system:03",
        "recordKey": "exam-trap:operating-system:03@1",
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
        "topicIds": [
          "topic:operating-system:scheduling-basics"
        ],
        "title": {
          "fa": "Response vs Completion",
          "en": "Response vs Completion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "response همان زمان پایان است.",
          "en": "Response vs Completion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو به timeline مربوط‌اند.",
          "en": "هر دو به timeline مربوط‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Response اولین اجرا منهای arrival است.",
          "en": "Response اولین اجرا منهای arrival است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "first run - arrival",
          "en": "first run - arrival",
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
        "id": "exam-trap:operating-system:04",
        "recordKey": "exam-trap:operating-system:04@1",
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
        "topicIds": [
          "topic:operating-system:sjf-srtf"
        ],
        "title": {
          "fa": "SJF vs SRTF",
          "en": "SJF vs SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "SJF هم همیشه preemptive است.",
          "en": "SJF vs SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو shortest را انتخاب می‌کنند.",
          "en": "هر دو shortest را انتخاب می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "SRTF با arrival کوتاه‌تر preempt می‌کند.",
          "en": "SRTF با arrival کوتاه‌تر preempt می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "RT = remaining time",
          "en": "RT = remaining time",
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
        "id": "exam-trap:operating-system:05",
        "recordKey": "exam-trap:operating-system:05@1",
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
        "topicIds": [
          "topic:operating-system:deadlock-conditions"
        ],
        "title": {
          "fa": "Starvation vs Deadlock",
          "en": "Starvation vs Deadlock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر انتظار طولانی deadlock است.",
          "en": "Starvation vs Deadlock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو توقف progress هستند.",
          "en": "هر دو توقف progress هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Deadlock چرخه/شرایط خاص دارد؛ starvation ممکن است بدون چرخه باشد.",
          "en": "Deadlock چرخه/شرایط خاص دارد؛ starvation ممکن است بدون چرخه باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "cycle/conditions → deadlock",
          "en": "cycle/conditions → deadlock",
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
        "id": "exam-trap:operating-system:06",
        "recordKey": "exam-trap:operating-system:06@1",
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
        "topicIds": [
          "topic:operating-system:bankers-algorithm"
        ],
        "title": {
          "fa": "Deadlocked vs Unsafe",
          "en": "Deadlocked vs Unsafe",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "unsafe یعنی الان deadlock رخ داده.",
          "en": "Deadlocked vs Unsafe",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو خطرناک‌اند.",
          "en": "هر دو خطرناک‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Unsafe الزاماً deadlocked نیست؛ فقط safe sequence تضمین ندارد.",
          "en": "Unsafe الزاماً deadlocked نیست؛ فقط safe sequence تضمین ندارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "unsafe ≠ deadlocked",
          "en": "unsafe ≠ deadlocked",
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
        "id": "exam-trap:operating-system:07",
        "recordKey": "exam-trap:operating-system:07@1",
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
        "topicIds": [
          "topic:operating-system:mutex-semaphore"
        ],
        "title": {
          "fa": "Mutex vs Semaphore",
          "en": "Mutex vs Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "binary semaphore همیشه mutex است.",
          "en": "Mutex vs Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو برای synchronization هستند.",
          "en": "هر دو برای synchronization هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Mutex ownership دارد؛ semaphore permits/counting دارد.",
          "en": "Mutex ownership دارد؛ semaphore permits/counting دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "ownership → mutex",
          "en": "ownership → mutex",
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
        "id": "exam-trap:operating-system:08",
        "recordKey": "exam-trap:operating-system:08@1",
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
        "topicIds": [
          "topic:operating-system:memory-allocation"
        ],
        "title": {
          "fa": "Internal vs External Fragmentation",
          "en": "Internal vs External Fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر wasted memory external است.",
          "en": "Internal vs External Fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو هدررفت‌اند.",
          "en": "هر دو هدررفت‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Internal داخل allocation؛ external بین holeهای آزاد.",
          "en": "Internal داخل allocation؛ external بین holeهای آزاد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "inside vs between",
          "en": "inside vs between",
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
        "id": "exam-trap:operating-system:09",
        "recordKey": "exam-trap:operating-system:09@1",
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
        "topicIds": [
          "topic:operating-system:tlb-thrashing-working-set"
        ],
        "title": {
          "fa": "Page Fault vs TLB Miss",
          "en": "Page Fault vs TLB Miss",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر TLB miss یعنی disk access.",
          "en": "Page Fault vs TLB Miss",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو translation failure به نظر می‌رسند.",
          "en": "هر دو translation failure به نظر می‌رسند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "TLB miss ممکن است page table در memory را بخواند؛ page fault صفحه در memory نیست.",
          "en": "TLB miss ممکن است page table در memory را بخواند؛ page fault صفحه در memory نیست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "not in memory → fault",
          "en": "not in memory → fault",
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
        "id": "exam-trap:operating-system:10",
        "recordKey": "exam-trap:operating-system:10@1",
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
        "topicIds": [
          "topic:operating-system:page-replacement"
        ],
        "title": {
          "fa": "FIFO vs LRU",
          "en": "FIFO vs LRU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "FIFO همان قدیمی‌ترین استفاده‌نشده را حذف می‌کند.",
          "en": "FIFO vs LRU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو old را نگاه می‌کنند.",
          "en": "هر دو old را نگاه می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "FIFO زمان ورود؛ LRU زمان آخرین استفاده.",
          "en": "FIFO زمان ورود؛ LRU زمان آخرین استفاده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "entry time vs use time",
          "en": "entry time vs use time",
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
        "id": "exam-trap:operating-system:11",
        "recordKey": "exam-trap:operating-system:11@1",
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
        "topicIds": [
          "topic:operating-system:page-replacement"
        ],
        "title": {
          "fa": "Belady anomaly",
          "en": "Belady anomaly",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "frame بیشتر همیشه fault کمتر می‌دهد.",
          "en": "Belady anomaly",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "منطقی به نظر می‌رسد.",
          "en": "منطقی به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "FIFO می‌تواند با frame بیشتر fault بیشتر بدهد.",
          "en": "FIFO می‌تواند با frame بیشتر fault بیشتر بدهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "Belady → FIFO",
          "en": "Belady → FIFO",
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
        "id": "exam-trap:operating-system:12",
        "recordKey": "exam-trap:operating-system:12@1",
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
        "topicIds": [
          "topic:operating-system:segmentation"
        ],
        "title": {
          "fa": "Paging vs Segmentation",
          "en": "Paging vs Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو واحدهای هم‌اندازه دارند.",
          "en": "Paging vs Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو memory را تقسیم می‌کنند.",
          "en": "هر دو memory را تقسیم می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Paging fixed-size؛ segmentation logical variable-size.",
          "en": "Paging fixed-size؛ segmentation logical variable-size.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "fixed page, logical segment",
          "en": "fixed page, logical segment",
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
        "id": "exam-trap:operating-system:13",
        "recordKey": "exam-trap:operating-system:13@1",
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
        "topicIds": [
          "topic:operating-system:memory-allocation"
        ],
        "title": {
          "fa": "Logical vs Physical Address",
          "en": "Logical vs Physical Address",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "CPU مستقیم physical تولید می‌کند.",
          "en": "Logical vs Physical Address",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو address هستند.",
          "en": "هر دو address هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "CPU logical می‌دهد؛ MMU/page table به physical نگاشت می‌کند.",
          "en": "CPU logical می‌دهد؛ MMU/page table به physical نگاشت می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "CPU → logical",
          "en": "CPU → logical",
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
        "id": "exam-trap:operating-system:14",
        "recordKey": "exam-trap:operating-system:14@1",
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
        "topicIds": [
          "topic:operating-system:page-replacement"
        ],
        "title": {
          "fa": "Local vs Global Replacement",
          "en": "Local vs Global Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "همیشه فقط صفحات همان process قربانی می‌شوند.",
          "en": "Local vs Global Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "locality ذهن را سمت local می‌برد.",
          "en": "locality ذهن را سمت local می‌برد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Local فقط process خودش؛ global از کل frame pool انتخاب می‌کند.",
          "en": "Local فقط process خودش؛ global از کل frame pool انتخاب می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "victim scope",
          "en": "victim scope",
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
        "id": "exam-trap:operating-system:15",
        "recordKey": "exam-trap:operating-system:15@1",
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
        "topicIds": [
          "topic:operating-system:file-system-disk"
        ],
        "title": {
          "fa": "SCAN vs C-SCAN",
          "en": "SCAN vs C-SCAN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "C-SCAN در برگشت هم سرویس می‌دهد.",
          "en": "SCAN vs C-SCAN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو sweep دارند.",
          "en": "هر دو sweep دارند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "C-SCAN یک جهت سرویس می‌دهد و برگشت برای reset است.",
          "en": "C-SCAN یک جهت سرویس می‌دهد و برگشت برای reset است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "C = circular one-way",
          "en": "C = circular one-way",
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
        "id": "exam-trap:operating-system:16",
        "recordKey": "exam-trap:operating-system:16@1",
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
        "topicIds": [
          "topic:operating-system:deadlock-handling"
        ],
        "title": {
          "fa": "Prevention vs Avoidance",
          "en": "Prevention vs Avoidance",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو بعد از deadlock اجرا می‌شوند.",
          "en": "Prevention vs Avoidance",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو جلوگیری می‌کنند.",
          "en": "هر دو جلوگیری می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Prevention شرط را حذف می‌کند؛ avoidance safe state را چک می‌کند.",
          "en": "Prevention شرط را حذف می‌کند؛ avoidance safe state را چک می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "condition vs safe state",
          "en": "condition vs safe state",
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
        "id": "exam-trap:operating-system:17",
        "recordKey": "exam-trap:operating-system:17@1",
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
        "topicIds": [
          "topic:operating-system:bankers-algorithm"
        ],
        "title": {
          "fa": "Safe Sequence",
          "en": "Safe Sequence",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "اگر یک ترتیب fail شود state unsafe است.",
          "en": "Safe Sequence",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "Banker جدول‌محور است.",
          "en": "Banker جدول‌محور است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "وجود حداقل یک safe sequence کافی است.",
          "en": "وجود حداقل یک safe sequence کافی است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "one sequence is enough",
          "en": "one sequence is enough",
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
        "id": "exam-trap:operating-system:18",
        "recordKey": "exam-trap:operating-system:18@1",
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
        "topicIds": [
          "topic:operating-system:round-robin"
        ],
        "title": {
          "fa": "Round Robin Quantum",
          "en": "Round Robin Quantum",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "quantum کمتر همیشه بهتر است.",
          "en": "Round Robin Quantum",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "response سریع‌تر می‌شود.",
          "en": "response سریع‌تر می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "quantum خیلی کم overhead context switch را زیاد می‌کند.",
          "en": "quantum خیلی کم overhead context switch را زیاد می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "small q → overhead",
          "en": "small q → overhead",
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
        "id": "exam-trap:operating-system:19",
        "recordKey": "exam-trap:operating-system:19@1",
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
        "topicIds": [
          "topic:operating-system:priority-scheduling"
        ],
        "title": {
          "fa": "Priority Aging",
          "en": "Priority Aging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "aging یعنی کاهش اولویت process قدیمی.",
          "en": "Priority Aging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کلمه aging مبهم است.",
          "en": "کلمه aging مبهم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "aging معمولاً priority منتظرها را بهتر می‌کند تا starvation کم شود.",
          "en": "aging معمولاً priority منتظرها را بهتر می‌کند تا starvation کم شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "waiting raises priority",
          "en": "waiting raises priority",
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
        "id": "exam-trap:operating-system:20",
        "recordKey": "exam-trap:operating-system:20@1",
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
        "topicIds": [
          "topic:operating-system:monitor-condition-vars"
        ],
        "title": {
          "fa": "Condition Variable",
          "en": "Condition Variable",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "signal بدون lock مستقل کار می‌کند.",
          "en": "Condition Variable",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام signal ساده است.",
          "en": "نام signal ساده است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "condition variable با monitor/lock معنا دارد؛ wait معمولاً lock را release می‌کند.",
          "en": "condition variable با monitor/lock معنا دارد؛ wait معمولاً lock را release می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "condition needs monitor",
          "en": "condition needs monitor",
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
        "id": "exam-trap:operating-system:21",
        "recordKey": "exam-trap:operating-system:21@1",
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
        "topicIds": [
          "topic:operating-system:critical-section"
        ],
        "title": {
          "fa": "Critical Section Progress",
          "en": "Critical Section Progress",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "mutual exclusion کافی است.",
          "en": "Critical Section Progress",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "مهم‌ترین شرط به نظر می‌رسد.",
          "en": "مهم‌ترین شرط به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Progress و bounded waiting هم برای راه‌حل درست لازم‌اند.",
          "en": "Progress و bounded waiting هم برای راه‌حل درست لازم‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "not only mutex",
          "en": "not only mutex",
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
        "id": "exam-trap:operating-system:22",
        "recordKey": "exam-trap:operating-system:22@1",
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
        "topicIds": [
          "topic:operating-system:virtual-memory-demand-paging"
        ],
        "title": {
          "fa": "Demand Paging",
          "en": "Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "همهٔ صفحات در start load می‌شوند.",
          "en": "Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "برنامه برای اجرا کامل تصور می‌شود.",
          "en": "برنامه برای اجرا کامل تصور می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Demand paging صفحه را هنگام reference لازم می‌آورد.",
          "en": "Demand paging صفحه را هنگام reference لازم می‌آورد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "load on demand",
          "en": "load on demand",
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
        "id": "exam-trap:operating-system:23",
        "recordKey": "exam-trap:operating-system:23@1",
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
        "topicIds": [
          "topic:operating-system:tlb-thrashing-working-set"
        ],
        "title": {
          "fa": "Thrashing",
          "en": "Thrashing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "fault زیاد یعنی CPU busyتر است.",
          "en": "Thrashing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "activity زیاد دیده می‌شود.",
          "en": "activity زیاد دیده می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "thrashing یعنی سیستم بیشتر وقت را صرف paging می‌کند نه کار مفید.",
          "en": "thrashing یعنی سیستم بیشتر وقت را صرف paging می‌کند نه کار مفید.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "paging > useful work",
          "en": "paging > useful work",
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
        "id": "exam-trap:operating-system:24",
        "recordKey": "exam-trap:operating-system:24@1",
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
        "topicIds": [
          "topic:operating-system:file-system-disk"
        ],
        "title": {
          "fa": "SSTF Trap",
          "en": "SSTF Trap",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "SSTF همیشه عادلانه‌ترین است.",
          "en": "SSTF Trap",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "nearest seek کم می‌کند.",
          "en": "nearest seek کم می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "SSTF می‌تواند درخواست‌های دور را starve کند.",
          "en": "SSTF می‌تواند درخواست‌های دور را starve کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "nearest can starve",
          "en": "nearest can starve",
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
  app.register("content", "operatingSystemExamTraps", { payload: payload, registrations: registrations });
})(window);
