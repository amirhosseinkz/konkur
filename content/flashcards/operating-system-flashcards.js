(function registerOperatingSystemFlashcards(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:flashcards",
    "datasetType": "flashcards",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "flashcard:operating-system:001",
        "recordKey": "flashcard:operating-system:001@1",
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
        "category": "comparison",
        "front": {
          "fa": "Process و Thread چه فرق اصلی دارند؟",
          "en": "Process و Thread چه فرق اصلی دارند؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Threadها address space را share می‌کنند.\nProcessها address space مستقل دارند.",
          "en": "Threadها address space را share می‌کنند.\nProcessها address space مستقل دارند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:002",
        "recordKey": "flashcard:operating-system:002@1",
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
        "category": "scheduling",
        "front": {
          "fa": "Waiting time چیست؟",
          "en": "Waiting time چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "زمانی که process در ready queue منتظر CPU است.",
          "en": "زمانی که process در ready queue منتظر CPU است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:003",
        "recordKey": "flashcard:operating-system:003@1",
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
        "category": "formula",
        "front": {
          "fa": "Turnaround time فرمول؟",
          "en": "Turnaround time فرمول؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Completion time - Arrival time.",
          "en": "Completion time - Arrival time.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:004",
        "recordKey": "flashcard:operating-system:004@1",
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
        "category": "formula",
        "front": {
          "fa": "Response time فرمول؟",
          "en": "Response time فرمول؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "First run time - Arrival time.",
          "en": "First run time - Arrival time.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:005",
        "recordKey": "flashcard:operating-system:005@1",
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
        "category": "scheduling",
        "front": {
          "fa": "Round Robin preemptive است؟",
          "en": "Round Robin preemptive است؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "بله. با quantum زمانی CPU را پس می‌گیرد.",
          "en": "بله. با quantum زمانی CPU را پس می‌گیرد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:18"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:006",
        "recordKey": "flashcard:operating-system:006@1",
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
        "category": "deadlock",
        "front": {
          "fa": "چهار شرط deadlock؟",
          "en": "چهار شرط deadlock؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
          "en": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:007",
        "recordKey": "flashcard:operating-system:007@1",
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
        "category": "trap",
        "front": {
          "fa": "Unsafe state یعنی deadlock؟",
          "en": "Unsafe state یعنی deadlock؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "نه. فقط safe sequence تضمین‌شده نداریم.",
          "en": "نه. فقط safe sequence تضمین‌شده نداریم.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:008",
        "recordKey": "flashcard:operating-system:008@1",
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
        "category": "synchronization",
        "front": {
          "fa": "Mutex ownership دارد؟",
          "en": "Mutex ownership دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "بله. مالک lock مهم است.",
          "en": "بله. مالک lock مهم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:009",
        "recordKey": "flashcard:operating-system:009@1",
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
        "category": "synchronization",
        "front": {
          "fa": "Semaphore چه چیزی را نمایش می‌دهد؟",
          "en": "Semaphore چه چیزی را نمایش می‌دهد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "تعداد permit/resourceهای قابل استفاده.",
          "en": "تعداد permit/resourceهای قابل استفاده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:010",
        "recordKey": "flashcard:operating-system:010@1",
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
        "category": "memory",
        "front": {
          "fa": "Internal fragmentation چیست؟",
          "en": "Internal fragmentation چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "هدررفت داخل block تخصیص‌یافته.",
          "en": "هدررفت داخل block تخصیص‌یافته.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:011",
        "recordKey": "flashcard:operating-system:011@1",
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
        "category": "memory",
        "front": {
          "fa": "External fragmentation چیست؟",
          "en": "External fragmentation چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "هدررفت بین holeهای آزاد حافظه.",
          "en": "هدررفت بین holeهای آزاد حافظه.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:012",
        "recordKey": "flashcard:operating-system:012@1",
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
        "category": "virtual-memory",
        "front": {
          "fa": "Page fault چیست؟",
          "en": "Page fault چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "صفحهٔ موردنیاز در memory نیست.",
          "en": "صفحهٔ موردنیاز در memory نیست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:49"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:013",
        "recordKey": "flashcard:operating-system:013@1",
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
        "category": "memory",
        "front": {
          "fa": "TLB hit چه سودی دارد؟",
          "en": "TLB hit چه سودی دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "دسترسی معمول به page table را حذف می‌کند.",
          "en": "دسترسی معمول به page table را حذف می‌کند.",
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
        "id": "flashcard:operating-system:014",
        "recordKey": "flashcard:operating-system:014@1",
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
        "category": "trap",
        "front": {
          "fa": "FIFO چه anomaly دارد؟",
          "en": "FIFO چه anomaly دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Belady’s anomaly ممکن است رخ دهد.",
          "en": "Belady’s anomaly ممکن است رخ دهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:015",
        "recordKey": "flashcard:operating-system:015@1",
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
        "category": "virtual-memory",
        "front": {
          "fa": "LRU چه ایده‌ای دارد؟",
          "en": "LRU چه ایده‌ای دارد؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Temporal locality: چیزی که اخیراً استفاده شده احتمالاً دوباره لازم می‌شود.",
          "en": "Temporal locality: چیزی که اخیراً استفاده شده احتمالاً دوباره لازم می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:016",
        "recordKey": "flashcard:operating-system:016@1",
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
        "category": "file-system",
        "front": {
          "fa": "SCAN disk scheduling شبیه چیست؟",
          "en": "SCAN disk scheduling شبیه چیست؟",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "آسانسور. در یک جهت سرویس می‌دهد.",
          "en": "آسانسور. در یک جهت سرویس می‌دهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:017",
        "recordKey": "flashcard:operating-system:017@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Shared address space → Threads",
          "en": "قانون: Shared address space → Threads",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Shared address space → Threads",
          "en": "Shared address space → Threads",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:018",
        "recordKey": "flashcard:operating-system:018@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Independent address spaces → Processes",
          "en": "قانون: Independent address spaces → Processes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Independent address spaces → Processes",
          "en": "Independent address spaces → Processes",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:019",
        "recordKey": "flashcard:operating-system:019@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Process owns resources; thread shares process resources",
          "en": "قانون: Process owns resources; thread shares process resources",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Process owns resources; thread shares process resources",
          "en": "Process owns resources; thread shares process resources",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:020",
        "recordKey": "flashcard:operating-system:020@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Thread context switch is usually cheaper",
          "en": "قانون: Thread context switch is usually cheaper",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Thread context switch is usually cheaper",
          "en": "Thread context switch is usually cheaper",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:021",
        "recordKey": "flashcard:operating-system:021@1",
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
          "topic:operating-system:process-states-pcb"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Ready means waiting for CPU",
          "en": "قانون: Ready means waiting for CPU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Ready means waiting for CPU",
          "en": "Ready means waiting for CPU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:05"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:022",
        "recordKey": "flashcard:operating-system:022@1",
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
          "topic:operating-system:process-states-pcb"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Waiting/Blocked means waiting for event or I/O",
          "en": "قانون: Waiting/Blocked means waiting for event or I/O",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Waiting/Blocked means waiting for event or I/O",
          "en": "Waiting/Blocked means waiting for event or I/O",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:05"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:023",
        "recordKey": "flashcard:operating-system:023@1",
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
          "topic:operating-system:process-states-pcb"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: PCB stores process execution state",
          "en": "قانون: PCB stores process execution state",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "PCB stores process execution state",
          "en": "PCB stores process execution state",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:05"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:024",
        "recordKey": "flashcard:operating-system:024@1",
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
          "topic:operating-system:context-switching"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Context switch is overhead, not useful work",
          "en": "قانون: Context switch is overhead, not useful work",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Context switch is overhead, not useful work",
          "en": "Context switch is overhead, not useful work",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:08"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:025",
        "recordKey": "flashcard:operating-system:025@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Waiting time → time in ready queue",
          "en": "قانون: Waiting time → time in ready queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Waiting time → time in ready queue",
          "en": "Waiting time → time in ready queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:026",
        "recordKey": "flashcard:operating-system:026@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Turnaround time → completion minus arrival",
          "en": "قانون: Turnaround time → completion minus arrival",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Turnaround time → completion minus arrival",
          "en": "Turnaround time → completion minus arrival",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:027",
        "recordKey": "flashcard:operating-system:027@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Response time → first CPU run minus arrival",
          "en": "قانون: Response time → first CPU run minus arrival",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Response time → first CPU run minus arrival",
          "en": "Response time → first CPU run minus arrival",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:028",
        "recordKey": "flashcard:operating-system:028@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Preemptive scheduling can interrupt running process",
          "en": "قانون: Preemptive scheduling can interrupt running process",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Preemptive scheduling can interrupt running process",
          "en": "Preemptive scheduling can interrupt running process",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:029",
        "recordKey": "flashcard:operating-system:029@1",
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
          "topic:operating-system:fcfs"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: FCFS can cause convoy effect",
          "en": "قانون: FCFS can cause convoy effect",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "FCFS can cause convoy effect",
          "en": "FCFS can cause convoy effect",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:13"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:030",
        "recordKey": "flashcard:operating-system:030@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: SJF minimizes average waiting when burst times are known",
          "en": "قانون: SJF minimizes average waiting when burst times are known",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "SJF minimizes average waiting when burst times are known",
          "en": "SJF minimizes average waiting when burst times are known",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:031",
        "recordKey": "flashcard:operating-system:031@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: SRTF → preemptive SJF",
          "en": "قانون: SRTF → preemptive SJF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "SRTF → preemptive SJF",
          "en": "SRTF → preemptive SJF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:032",
        "recordKey": "flashcard:operating-system:032@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Priority scheduling can starve low-priority jobs",
          "en": "قانون: Priority scheduling can starve low-priority jobs",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Priority scheduling can starve low-priority jobs",
          "en": "Priority scheduling can starve low-priority jobs",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:033",
        "recordKey": "flashcard:operating-system:033@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Aging reduces starvation",
          "en": "قانون: Aging reduces starvation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Aging reduces starvation",
          "en": "Aging reduces starvation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:034",
        "recordKey": "flashcard:operating-system:034@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Round Robin → preemptive",
          "en": "قانون: Round Robin → preemptive",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Round Robin → preemptive",
          "en": "Round Robin → preemptive",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:18"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:035",
        "recordKey": "flashcard:operating-system:035@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Very large RR quantum behaves like FCFS",
          "en": "قانون: Very large RR quantum behaves like FCFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Very large RR quantum behaves like FCFS",
          "en": "Very large RR quantum behaves like FCFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:18"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:036",
        "recordKey": "flashcard:operating-system:036@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Very small RR quantum increases context-switch overhead",
          "en": "قانون: Very small RR quantum increases context-switch overhead",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Very small RR quantum increases context-switch overhead",
          "en": "Very small RR quantum increases context-switch overhead",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:18"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:037",
        "recordKey": "flashcard:operating-system:037@1",
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
          "topic:operating-system:synchronization"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Race condition → output depends on interleaving",
          "en": "قانون: Race condition → output depends on interleaving",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Race condition → output depends on interleaving",
          "en": "Race condition → output depends on interleaving",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:21"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:038",
        "recordKey": "flashcard:operating-system:038@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Critical section touches shared data",
          "en": "قانون: Critical section touches shared data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Critical section touches shared data",
          "en": "Critical section touches shared data",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:039",
        "recordKey": "flashcard:operating-system:039@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Mutual exclusion → at most one inside critical section",
          "en": "قانون: Mutual exclusion → at most one inside critical section",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Mutual exclusion → at most one inside critical section",
          "en": "Mutual exclusion → at most one inside critical section",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:040",
        "recordKey": "flashcard:operating-system:040@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Progress → no unnecessary blocking",
          "en": "قانون: Progress → no unnecessary blocking",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Progress → no unnecessary blocking",
          "en": "Progress → no unnecessary blocking",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:041",
        "recordKey": "flashcard:operating-system:041@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Bounded waiting → no infinite waiting",
          "en": "قانون: Bounded waiting → no infinite waiting",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Bounded waiting → no infinite waiting",
          "en": "Bounded waiting → no infinite waiting",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:042",
        "recordKey": "flashcard:operating-system:042@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Mutex ownership matters",
          "en": "قانون: Mutex ownership matters",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Mutex ownership matters",
          "en": "Mutex ownership matters",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:043",
        "recordKey": "flashcard:operating-system:043@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Semaphore value may represent available permits",
          "en": "قانون: Semaphore value may represent available permits",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Semaphore value may represent available permits",
          "en": "Semaphore value may represent available permits",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:044",
        "recordKey": "flashcard:operating-system:044@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Binary semaphore is not always a mutex",
          "en": "قانون: Binary semaphore is not always a mutex",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Binary semaphore is not always a mutex",
          "en": "Binary semaphore is not always a mutex",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:045",
        "recordKey": "flashcard:operating-system:045@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Monitor wraps lock plus condition variables",
          "en": "قانون: Monitor wraps lock plus condition variables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Monitor wraps lock plus condition variables",
          "en": "Monitor wraps lock plus condition variables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:29"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:046",
        "recordKey": "flashcard:operating-system:046@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Condition variable wait releases monitor lock",
          "en": "قانون: Condition variable wait releases monitor lock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Condition variable wait releases monitor lock",
          "en": "Condition variable wait releases monitor lock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:29"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:047",
        "recordKey": "flashcard:operating-system:047@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Four necessary conditions together → Deadlock possible",
          "en": "قانون: Four necessary conditions together → Deadlock possible",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Four necessary conditions together → Deadlock possible",
          "en": "Four necessary conditions together → Deadlock possible",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:048",
        "recordKey": "flashcard:operating-system:048@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Mutual Exclusion is one deadlock condition",
          "en": "قانون: Mutual Exclusion is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Mutual Exclusion is one deadlock condition",
          "en": "Mutual Exclusion is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:049",
        "recordKey": "flashcard:operating-system:049@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Hold and Wait is one deadlock condition",
          "en": "قانون: Hold and Wait is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Hold and Wait is one deadlock condition",
          "en": "Hold and Wait is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:050",
        "recordKey": "flashcard:operating-system:050@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: No Preemption is one deadlock condition",
          "en": "قانون: No Preemption is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "No Preemption is one deadlock condition",
          "en": "No Preemption is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:051",
        "recordKey": "flashcard:operating-system:051@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Circular Wait is one deadlock condition",
          "en": "قانون: Circular Wait is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Circular Wait is one deadlock condition",
          "en": "Circular Wait is one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:052",
        "recordKey": "flashcard:operating-system:052@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Prevention removes at least one deadlock condition",
          "en": "قانون: Prevention removes at least one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Prevention removes at least one deadlock condition",
          "en": "Prevention removes at least one deadlock condition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:36"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:053",
        "recordKey": "flashcard:operating-system:053@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Avoidance keeps system in safe state",
          "en": "قانون: Avoidance keeps system in safe state",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Avoidance keeps system in safe state",
          "en": "Avoidance keeps system in safe state",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:36"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:054",
        "recordKey": "flashcard:operating-system:054@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Detection finds deadlock after it may happen",
          "en": "قانون: Detection finds deadlock after it may happen",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Detection finds deadlock after it may happen",
          "en": "Detection finds deadlock after it may happen",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:36"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:055",
        "recordKey": "flashcard:operating-system:055@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Unsafe state ≠ necessarily deadlocked",
          "en": "قانون: Unsafe state ≠ necessarily deadlocked",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Unsafe state ≠ necessarily deadlocked",
          "en": "Unsafe state ≠ necessarily deadlocked",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:056",
        "recordKey": "flashcard:operating-system:056@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Safe state has at least one safe sequence",
          "en": "قانون: Safe state has at least one safe sequence",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Safe state has at least one safe sequence",
          "en": "Safe state has at least one safe sequence",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:057",
        "recordKey": "flashcard:operating-system:057@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Logical address is generated by CPU",
          "en": "قانون: Logical address is generated by CPU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Logical address is generated by CPU",
          "en": "Logical address is generated by CPU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:058",
        "recordKey": "flashcard:operating-system:058@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Physical address is actual memory location",
          "en": "قانون: Physical address is actual memory location",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Physical address is actual memory location",
          "en": "Physical address is actual memory location",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:059",
        "recordKey": "flashcard:operating-system:059@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Internal fragmentation → wasted space inside allocation",
          "en": "قانون: Internal fragmentation → wasted space inside allocation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Internal fragmentation → wasted space inside allocation",
          "en": "Internal fragmentation → wasted space inside allocation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:060",
        "recordKey": "flashcard:operating-system:060@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: External fragmentation → free holes between allocations",
          "en": "قانون: External fragmentation → free holes between allocations",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "External fragmentation → free holes between allocations",
          "en": "External fragmentation → free holes between allocations",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:061",
        "recordKey": "flashcard:operating-system:061@1",
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
          "topic:operating-system:paging"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Paging removes external fragmentation",
          "en": "قانون: Paging removes external fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Paging removes external fragmentation",
          "en": "Paging removes external fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:45"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:062",
        "recordKey": "flashcard:operating-system:062@1",
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
          "topic:operating-system:paging"
        ],
        "category": "shortcut",
        "front": {
          "fa": "قانون: Page table maps pages to frames",
          "en": "قانون: Page table maps pages to frames",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Page table maps pages to frames",
          "en": "Page table maps pages to frames",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:45"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:063",
        "recordKey": "flashcard:operating-system:063@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Segmentation follows logical program units",
          "en": "قانون: Segmentation follows logical program units",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Segmentation follows logical program units",
          "en": "Segmentation follows logical program units",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:064",
        "recordKey": "flashcard:operating-system:064@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Segmentation can suffer external fragmentation",
          "en": "قانون: Segmentation can suffer external fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Segmentation can suffer external fragmentation",
          "en": "Segmentation can suffer external fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:065",
        "recordKey": "flashcard:operating-system:065@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Page fault → referenced page not in memory",
          "en": "قانون: Page fault → referenced page not in memory",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Page fault → referenced page not in memory",
          "en": "Page fault → referenced page not in memory",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:49"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:066",
        "recordKey": "flashcard:operating-system:066@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Demand paging loads pages only when needed",
          "en": "قانون: Demand paging loads pages only when needed",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Demand paging loads pages only when needed",
          "en": "Demand paging loads pages only when needed",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:49"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:067",
        "recordKey": "flashcard:operating-system:067@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Locality makes virtual memory effective",
          "en": "قانون: Locality makes virtual memory effective",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Locality makes virtual memory effective",
          "en": "Locality makes virtual memory effective",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:49"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:068",
        "recordKey": "flashcard:operating-system:068@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: FIFO page replacement may show Belady anomaly",
          "en": "قانون: FIFO page replacement may show Belady anomaly",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "FIFO page replacement may show Belady anomaly",
          "en": "FIFO page replacement may show Belady anomaly",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:069",
        "recordKey": "flashcard:operating-system:069@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Optimal replacement evicts page used farthest in future",
          "en": "قانون: Optimal replacement evicts page used farthest in future",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Optimal replacement evicts page used farthest in future",
          "en": "Optimal replacement evicts page used farthest in future",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:070",
        "recordKey": "flashcard:operating-system:070@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: LRU approximates temporal locality",
          "en": "قانون: LRU approximates temporal locality",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "LRU approximates temporal locality",
          "en": "LRU approximates temporal locality",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:071",
        "recordKey": "flashcard:operating-system:071@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Clock is a practical LRU approximation",
          "en": "قانون: Clock is a practical LRU approximation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Clock is a practical LRU approximation",
          "en": "Clock is a practical LRU approximation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:072",
        "recordKey": "flashcard:operating-system:072@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: TLB hit skips normal page-table memory access",
          "en": "قانون: TLB hit skips normal page-table memory access",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "TLB hit skips normal page-table memory access",
          "en": "TLB hit skips normal page-table memory access",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:073",
        "recordKey": "flashcard:operating-system:073@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: TLB miss ≠ page fault",
          "en": "قانون: TLB miss ≠ page fault",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "TLB miss ≠ page fault",
          "en": "TLB miss ≠ page fault",
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
        "id": "flashcard:operating-system:074",
        "recordKey": "flashcard:operating-system:074@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Thrashing → too much paging, too little useful work",
          "en": "قانون: Thrashing → too much paging, too little useful work",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Thrashing → too much paging, too little useful work",
          "en": "Thrashing → too much paging, too little useful work",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:075",
        "recordKey": "flashcard:operating-system:075@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Working set approximates active pages",
          "en": "قانون: Working set approximates active pages",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Working set approximates active pages",
          "en": "Working set approximates active pages",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:076",
        "recordKey": "flashcard:operating-system:076@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Contiguous allocation is fast but fragments",
          "en": "قانون: Contiguous allocation is fast but fragments",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Contiguous allocation is fast but fragments",
          "en": "Contiguous allocation is fast but fragments",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:077",
        "recordKey": "flashcard:operating-system:077@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Linked allocation avoids external file holes but hurts random access",
          "en": "قانون: Linked allocation avoids external file holes but hurts random access",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Linked allocation avoids external file holes but hurts random access",
          "en": "Linked allocation avoids external file holes but hurts random access",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:078",
        "recordKey": "flashcard:operating-system:078@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: Indexed allocation uses index block/inode intuition",
          "en": "قانون: Indexed allocation uses index block/inode intuition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Indexed allocation uses index block/inode intuition",
          "en": "Indexed allocation uses index block/inode intuition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:079",
        "recordKey": "flashcard:operating-system:079@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: SSTF chooses nearest request",
          "en": "قانون: SSTF chooses nearest request",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "SSTF chooses nearest request",
          "en": "SSTF chooses nearest request",
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
        "id": "flashcard:operating-system:080",
        "recordKey": "flashcard:operating-system:080@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: SCAN moves like elevator",
          "en": "قانون: SCAN moves like elevator",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "SCAN moves like elevator",
          "en": "SCAN moves like elevator",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:081",
        "recordKey": "flashcard:operating-system:081@1",
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
        "category": "shortcut",
        "front": {
          "fa": "قانون: C-SCAN services in one direction",
          "en": "قانون: C-SCAN services in one direction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "C-SCAN services in one direction",
          "en": "C-SCAN services in one direction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:082",
        "recordKey": "flashcard:operating-system:082@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Process vs Thread",
          "en": "دام: Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "shared address → thread.\nThread address space را share می‌کند؛ process مستقل‌تر است.",
          "en": "shared address → thread.\nThread address space را share می‌کند؛ process مستقل‌تر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:01"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:083",
        "recordKey": "flashcard:operating-system:083@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Waiting vs Turnaround",
          "en": "دام: Waiting vs Turnaround",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "TAT = C - A.\nWaiting فقط ready queue؛ turnaround از arrival تا completion.",
          "en": "TAT = C - A.\nWaiting فقط ready queue؛ turnaround از arrival تا completion.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:084",
        "recordKey": "flashcard:operating-system:084@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Response vs Completion",
          "en": "دام: Response vs Completion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "first run - arrival.\nResponse اولین اجرا منهای arrival است.",
          "en": "first run - arrival.\nResponse اولین اجرا منهای arrival است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:09"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:085",
        "recordKey": "flashcard:operating-system:085@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: SJF vs SRTF",
          "en": "دام: SJF vs SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "RT = remaining time.\nSRTF با arrival کوتاه‌تر preempt می‌کند.",
          "en": "RT = remaining time.\nSRTF با arrival کوتاه‌تر preempt می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:14"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:086",
        "recordKey": "flashcard:operating-system:086@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Starvation vs Deadlock",
          "en": "دام: Starvation vs Deadlock",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "cycle/conditions → deadlock.\nDeadlock چرخه/شرایط خاص دارد؛ starvation ممکن است بدون چرخه باشد.",
          "en": "cycle/conditions → deadlock.\nDeadlock چرخه/شرایط خاص دارد؛ starvation ممکن است بدون چرخه باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:31"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:087",
        "recordKey": "flashcard:operating-system:087@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Deadlocked vs Unsafe",
          "en": "دام: Deadlocked vs Unsafe",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "unsafe ≠ deadlocked.\nUnsafe الزاماً deadlocked نیست؛ فقط safe sequence تضمین ندارد.",
          "en": "unsafe ≠ deadlocked.\nUnsafe الزاماً deadlocked نیست؛ فقط safe sequence تضمین ندارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:088",
        "recordKey": "flashcard:operating-system:088@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Mutex vs Semaphore",
          "en": "دام: Mutex vs Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "ownership → mutex.\nMutex ownership دارد؛ semaphore permits/counting دارد.",
          "en": "ownership → mutex.\nMutex ownership دارد؛ semaphore permits/counting دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:26"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:089",
        "recordKey": "flashcard:operating-system:089@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Internal vs External Fragmentation",
          "en": "دام: Internal vs External Fragmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "inside vs between.\nInternal داخل allocation؛ external بین holeهای آزاد.",
          "en": "inside vs between.\nInternal داخل allocation؛ external بین holeهای آزاد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:090",
        "recordKey": "flashcard:operating-system:090@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Page Fault vs TLB Miss",
          "en": "دام: Page Fault vs TLB Miss",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "not in memory → fault.\nTLB miss ممکن است page table در memory را بخواند؛ page fault صفحه در memory نیست.",
          "en": "not in memory → fault.\nTLB miss ممکن است page table در memory را بخواند؛ page fault صفحه در memory نیست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:091",
        "recordKey": "flashcard:operating-system:091@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: FIFO vs LRU",
          "en": "دام: FIFO vs LRU",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "entry time vs use time.\nFIFO زمان ورود؛ LRU زمان آخرین استفاده.",
          "en": "entry time vs use time.\nFIFO زمان ورود؛ LRU زمان آخرین استفاده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:092",
        "recordKey": "flashcard:operating-system:092@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Belady anomaly",
          "en": "دام: Belady anomaly",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "Belady → FIFO.\nFIFO می‌تواند با frame بیشتر fault بیشتر بدهد.",
          "en": "Belady → FIFO.\nFIFO می‌تواند با frame بیشتر fault بیشتر بدهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:093",
        "recordKey": "flashcard:operating-system:093@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Paging vs Segmentation",
          "en": "دام: Paging vs Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "fixed page, logical segment.\nPaging fixed-size؛ segmentation logical variable-size.",
          "en": "fixed page, logical segment.\nPaging fixed-size؛ segmentation logical variable-size.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:47"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:094",
        "recordKey": "flashcard:operating-system:094@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Logical vs Physical Address",
          "en": "دام: Logical vs Physical Address",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "CPU → logical.\nCPU logical می‌دهد؛ MMU/page table به physical نگاشت می‌کند.",
          "en": "CPU → logical.\nCPU logical می‌دهد؛ MMU/page table به physical نگاشت می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:41"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:095",
        "recordKey": "flashcard:operating-system:095@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Local vs Global Replacement",
          "en": "دام: Local vs Global Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "victim scope.\nLocal فقط process خودش؛ global از کل frame pool انتخاب می‌کند.",
          "en": "victim scope.\nLocal فقط process خودش؛ global از کل frame pool انتخاب می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:52"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:096",
        "recordKey": "flashcard:operating-system:096@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: SCAN vs C-SCAN",
          "en": "دام: SCAN vs C-SCAN",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "C = circular one-way.\nC-SCAN یک جهت سرویس می‌دهد و برگشت برای reset است.",
          "en": "C = circular one-way.\nC-SCAN یک جهت سرویس می‌دهد و برگشت برای reset است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:097",
        "recordKey": "flashcard:operating-system:097@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Prevention vs Avoidance",
          "en": "دام: Prevention vs Avoidance",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "condition vs safe state.\nPrevention شرط را حذف می‌کند؛ avoidance safe state را چک می‌کند.",
          "en": "condition vs safe state.\nPrevention شرط را حذف می‌کند؛ avoidance safe state را چک می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:36"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:098",
        "recordKey": "flashcard:operating-system:098@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Safe Sequence",
          "en": "دام: Safe Sequence",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "one sequence is enough.\nوجود حداقل یک safe sequence کافی است.",
          "en": "one sequence is enough.\nوجود حداقل یک safe sequence کافی است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:39"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:099",
        "recordKey": "flashcard:operating-system:099@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Round Robin Quantum",
          "en": "دام: Round Robin Quantum",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "small q → overhead.\nquantum خیلی کم overhead context switch را زیاد می‌کند.",
          "en": "small q → overhead.\nquantum خیلی کم overhead context switch را زیاد می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:18"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:100",
        "recordKey": "flashcard:operating-system:100@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Priority Aging",
          "en": "دام: Priority Aging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "waiting raises priority.\naging معمولاً priority منتظرها را بهتر می‌کند تا starvation کم شود.",
          "en": "waiting raises priority.\naging معمولاً priority منتظرها را بهتر می‌کند تا starvation کم شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:16"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:101",
        "recordKey": "flashcard:operating-system:101@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Condition Variable",
          "en": "دام: Condition Variable",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "condition needs monitor.\ncondition variable با monitor/lock معنا دارد؛ wait معمولاً lock را release می‌کند.",
          "en": "condition needs monitor.\ncondition variable با monitor/lock معنا دارد؛ wait معمولاً lock را release می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "hard",
        "goldenRuleIds": [
          "golden-rule:operating-system:29"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:102",
        "recordKey": "flashcard:operating-system:102@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Critical Section Progress",
          "en": "دام: Critical Section Progress",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "not only mutex.\nProgress و bounded waiting هم برای راه‌حل درست لازم‌اند.",
          "en": "not only mutex.\nProgress و bounded waiting هم برای راه‌حل درست لازم‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [
          "golden-rule:operating-system:22"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:103",
        "recordKey": "flashcard:operating-system:103@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Demand Paging",
          "en": "دام: Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "load on demand.\nDemand paging صفحه را هنگام reference لازم می‌آورد.",
          "en": "load on demand.\nDemand paging صفحه را هنگام reference لازم می‌آورد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "medium",
        "goldenRuleIds": [
          "golden-rule:operating-system:49"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      },
      {
        "id": "flashcard:operating-system:104",
        "recordKey": "flashcard:operating-system:104@1",
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
        "category": "trap",
        "front": {
          "fa": "دام: Thrashing",
          "en": "دام: Thrashing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "back": {
          "fa": "paging > useful work.\nthrashing یعنی سیستم بیشتر وقت را صرف paging می‌کند نه کار مفید.",
          "en": "paging > useful work.\nthrashing یعنی سیستم بیشتر وقت را صرف paging می‌کند نه کار مفید.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "importance": "unknown",
        "relatedQuestionIds": [],
        "difficulty": "easy",
        "goldenRuleIds": [],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "bookmarkable": true
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "operatingSystemFlashcards", { payload: payload, registrations: registrations });
})(window);
