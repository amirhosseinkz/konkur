(function registerOperatingSystemSubject(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:subjects",
    "datasetType": "subjects",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "subject:operating-system",
        "recordKey": "subject:operating-system@1",
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
        "slug": "operating-system",
        "title": {
          "fa": "سیستم‌عامل",
          "en": "Operating System",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Operating System",
        "summary": {
          "fa": "مرور سریع و امتحان‌محور سیستم‌عامل با تمرکز بر process، scheduling، synchronization، deadlock و memory.",
          "en": "Exam-focused Operating System module.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "topicIds": [
          "topic:operating-system:os-responsibilities",
          "topic:operating-system:process-concept",
          "topic:operating-system:process-states-pcb",
          "topic:operating-system:context-switching",
          "topic:operating-system:process-vs-thread",
          "topic:operating-system:user-kernel-threads",
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:fcfs",
          "topic:operating-system:sjf-srtf",
          "topic:operating-system:priority-scheduling",
          "topic:operating-system:round-robin",
          "topic:operating-system:synchronization",
          "topic:operating-system:critical-section",
          "topic:operating-system:mutex-semaphore",
          "topic:operating-system:monitor-condition-vars",
          "topic:operating-system:classical-sync-problems",
          "topic:operating-system:deadlock-conditions",
          "topic:operating-system:deadlock-handling",
          "topic:operating-system:bankers-algorithm",
          "topic:operating-system:memory-allocation",
          "topic:operating-system:paging",
          "topic:operating-system:segmentation",
          "topic:operating-system:virtual-memory-demand-paging",
          "topic:operating-system:page-replacement",
          "topic:operating-system:tlb-thrashing-working-set",
          "topic:operating-system:file-system-disk"
        ],
        "reviewOrder": [
          "topic:operating-system:os-responsibilities",
          "topic:operating-system:process-concept",
          "topic:operating-system:process-states-pcb",
          "topic:operating-system:context-switching",
          "topic:operating-system:process-vs-thread",
          "topic:operating-system:user-kernel-threads",
          "topic:operating-system:scheduling-basics",
          "topic:operating-system:fcfs",
          "topic:operating-system:sjf-srtf",
          "topic:operating-system:priority-scheduling",
          "topic:operating-system:round-robin",
          "topic:operating-system:synchronization",
          "topic:operating-system:critical-section",
          "topic:operating-system:mutex-semaphore",
          "topic:operating-system:monitor-condition-vars",
          "topic:operating-system:classical-sync-problems",
          "topic:operating-system:deadlock-conditions",
          "topic:operating-system:deadlock-handling",
          "topic:operating-system:bankers-algorithm",
          "topic:operating-system:memory-allocation",
          "topic:operating-system:paging",
          "topic:operating-system:segmentation",
          "topic:operating-system:virtual-memory-demand-paging",
          "topic:operating-system:page-replacement",
          "topic:operating-system:tlb-thrashing-working-set",
          "topic:operating-system:file-system-disk"
        ],
        "fiveMinuteReviewId": "five-minute-review:operating-system",
        "goldenRuleCollectionId": "golden-rule:operating-system:collection",
        "estimatedStudyMinutes": 149,
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
  app.register("content", "operatingSystemSubject", { payload: payload, registrations: registrations });
})(window);
