(function registerOperatingSystemFiveMinuteReview(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:five-minute-review",
    "datasetType": "five-minute-reviews",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "five-minute-review:operating-system",
        "recordKey": "five-minute-review:operating-system@1",
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
        "title": {
          "fa": "مرور پنج‌دقیقه‌ای سیستم‌عامل",
          "en": "Operating System Five-Minute Review",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "items": [
          {
            "id": "os-review-01",
            "text": {
              "fa": "Shared address space → Threads",
              "en": "Shared address space → Threads",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-vs-thread"
            ]
          },
          {
            "id": "os-review-02",
            "text": {
              "fa": "Independent address spaces → Processes",
              "en": "Independent address spaces → Processes",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-vs-thread"
            ]
          },
          {
            "id": "os-review-03",
            "text": {
              "fa": "Process owns resources; thread shares process resources",
              "en": "Process owns resources; thread shares process resources",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-vs-thread"
            ]
          },
          {
            "id": "os-review-04",
            "text": {
              "fa": "Thread context switch is usually cheaper",
              "en": "Thread context switch is usually cheaper",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-vs-thread"
            ]
          },
          {
            "id": "os-review-05",
            "text": {
              "fa": "Ready means waiting for CPU",
              "en": "Ready means waiting for CPU",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-states-pcb"
            ]
          },
          {
            "id": "os-review-06",
            "text": {
              "fa": "Waiting/Blocked means waiting for event or I/O",
              "en": "Waiting/Blocked means waiting for event or I/O",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-states-pcb"
            ]
          },
          {
            "id": "os-review-07",
            "text": {
              "fa": "PCB stores process execution state",
              "en": "PCB stores process execution state",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:process-states-pcb"
            ]
          },
          {
            "id": "os-review-08",
            "text": {
              "fa": "Context switch is overhead, not useful work",
              "en": "Context switch is overhead, not useful work",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:context-switching"
            ]
          },
          {
            "id": "os-review-09",
            "text": {
              "fa": "Waiting time → time in ready queue",
              "en": "Waiting time → time in ready queue",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:scheduling-basics"
            ]
          },
          {
            "id": "os-review-10",
            "text": {
              "fa": "Turnaround time → completion minus arrival",
              "en": "Turnaround time → completion minus arrival",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:scheduling-basics"
            ]
          },
          {
            "id": "os-review-11",
            "text": {
              "fa": "Response time → first CPU run minus arrival",
              "en": "Response time → first CPU run minus arrival",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:scheduling-basics"
            ]
          },
          {
            "id": "os-review-12",
            "text": {
              "fa": "Preemptive scheduling can interrupt running process",
              "en": "Preemptive scheduling can interrupt running process",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:scheduling-basics"
            ]
          },
          {
            "id": "os-review-13",
            "text": {
              "fa": "FCFS can cause convoy effect",
              "en": "FCFS can cause convoy effect",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:fcfs"
            ]
          },
          {
            "id": "os-review-14",
            "text": {
              "fa": "SJF minimizes average waiting when burst times are known",
              "en": "SJF minimizes average waiting when burst times are known",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:sjf-srtf"
            ]
          },
          {
            "id": "os-review-15",
            "text": {
              "fa": "SRTF → preemptive SJF",
              "en": "SRTF → preemptive SJF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:sjf-srtf"
            ]
          },
          {
            "id": "os-review-16",
            "text": {
              "fa": "Priority scheduling can starve low-priority jobs",
              "en": "Priority scheduling can starve low-priority jobs",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:priority-scheduling"
            ]
          },
          {
            "id": "os-review-17",
            "text": {
              "fa": "Aging reduces starvation",
              "en": "Aging reduces starvation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:priority-scheduling"
            ]
          },
          {
            "id": "os-review-18",
            "text": {
              "fa": "Round Robin → preemptive",
              "en": "Round Robin → preemptive",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:round-robin"
            ]
          },
          {
            "id": "os-review-19",
            "text": {
              "fa": "Very large RR quantum behaves like FCFS",
              "en": "Very large RR quantum behaves like FCFS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:round-robin"
            ]
          },
          {
            "id": "os-review-20",
            "text": {
              "fa": "Very small RR quantum increases context-switch overhead",
              "en": "Very small RR quantum increases context-switch overhead",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:round-robin"
            ]
          },
          {
            "id": "os-review-21",
            "text": {
              "fa": "Race condition → output depends on interleaving",
              "en": "Race condition → output depends on interleaving",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:synchronization"
            ]
          },
          {
            "id": "os-review-22",
            "text": {
              "fa": "Critical section touches shared data",
              "en": "Critical section touches shared data",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:critical-section"
            ]
          },
          {
            "id": "os-review-23",
            "text": {
              "fa": "Mutual exclusion → at most one inside critical section",
              "en": "Mutual exclusion → at most one inside critical section",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:critical-section"
            ]
          },
          {
            "id": "os-review-24",
            "text": {
              "fa": "Progress → no unnecessary blocking",
              "en": "Progress → no unnecessary blocking",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:critical-section"
            ]
          },
          {
            "id": "os-review-25",
            "text": {
              "fa": "Bounded waiting → no infinite waiting",
              "en": "Bounded waiting → no infinite waiting",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:critical-section"
            ]
          },
          {
            "id": "os-review-26",
            "text": {
              "fa": "Mutex ownership matters",
              "en": "Mutex ownership matters",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:mutex-semaphore"
            ]
          },
          {
            "id": "os-review-27",
            "text": {
              "fa": "Semaphore value may represent available permits",
              "en": "Semaphore value may represent available permits",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:mutex-semaphore"
            ]
          },
          {
            "id": "os-review-28",
            "text": {
              "fa": "Binary semaphore is not always a mutex",
              "en": "Binary semaphore is not always a mutex",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:mutex-semaphore"
            ]
          },
          {
            "id": "os-review-29",
            "text": {
              "fa": "Monitor wraps lock plus condition variables",
              "en": "Monitor wraps lock plus condition variables",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:monitor-condition-vars"
            ]
          },
          {
            "id": "os-review-30",
            "text": {
              "fa": "Condition variable wait releases monitor lock",
              "en": "Condition variable wait releases monitor lock",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:monitor-condition-vars"
            ]
          },
          {
            "id": "os-review-31",
            "text": {
              "fa": "Four necessary conditions together → Deadlock possible",
              "en": "Four necessary conditions together → Deadlock possible",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-conditions"
            ]
          },
          {
            "id": "os-review-32",
            "text": {
              "fa": "Mutual Exclusion is one deadlock condition",
              "en": "Mutual Exclusion is one deadlock condition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-conditions"
            ]
          },
          {
            "id": "os-review-33",
            "text": {
              "fa": "Hold and Wait is one deadlock condition",
              "en": "Hold and Wait is one deadlock condition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-conditions"
            ]
          },
          {
            "id": "os-review-34",
            "text": {
              "fa": "No Preemption is one deadlock condition",
              "en": "No Preemption is one deadlock condition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-conditions"
            ]
          },
          {
            "id": "os-review-35",
            "text": {
              "fa": "Circular Wait is one deadlock condition",
              "en": "Circular Wait is one deadlock condition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-conditions"
            ]
          },
          {
            "id": "os-review-36",
            "text": {
              "fa": "Prevention removes at least one deadlock condition",
              "en": "Prevention removes at least one deadlock condition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-handling"
            ]
          },
          {
            "id": "os-review-37",
            "text": {
              "fa": "Avoidance keeps system in safe state",
              "en": "Avoidance keeps system in safe state",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-handling"
            ]
          },
          {
            "id": "os-review-38",
            "text": {
              "fa": "Detection finds deadlock after it may happen",
              "en": "Detection finds deadlock after it may happen",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:deadlock-handling"
            ]
          },
          {
            "id": "os-review-39",
            "text": {
              "fa": "Unsafe state ≠ necessarily deadlocked",
              "en": "Unsafe state ≠ necessarily deadlocked",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:bankers-algorithm"
            ]
          },
          {
            "id": "os-review-40",
            "text": {
              "fa": "Safe state has at least one safe sequence",
              "en": "Safe state has at least one safe sequence",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:bankers-algorithm"
            ]
          },
          {
            "id": "os-review-41",
            "text": {
              "fa": "Logical address is generated by CPU",
              "en": "Logical address is generated by CPU",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:memory-allocation"
            ]
          },
          {
            "id": "os-review-42",
            "text": {
              "fa": "Physical address is actual memory location",
              "en": "Physical address is actual memory location",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:memory-allocation"
            ]
          },
          {
            "id": "os-review-43",
            "text": {
              "fa": "Internal fragmentation → wasted space inside allocation",
              "en": "Internal fragmentation → wasted space inside allocation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:memory-allocation"
            ]
          },
          {
            "id": "os-review-44",
            "text": {
              "fa": "External fragmentation → free holes between allocations",
              "en": "External fragmentation → free holes between allocations",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:memory-allocation"
            ]
          },
          {
            "id": "os-review-45",
            "text": {
              "fa": "Paging removes external fragmentation",
              "en": "Paging removes external fragmentation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:paging"
            ]
          },
          {
            "id": "os-review-46",
            "text": {
              "fa": "Page table maps pages to frames",
              "en": "Page table maps pages to frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:paging"
            ]
          },
          {
            "id": "os-review-47",
            "text": {
              "fa": "Segmentation follows logical program units",
              "en": "Segmentation follows logical program units",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:segmentation"
            ]
          },
          {
            "id": "os-review-48",
            "text": {
              "fa": "Segmentation can suffer external fragmentation",
              "en": "Segmentation can suffer external fragmentation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:operating-system:segmentation"
            ]
          },
          {
            "id": "os-review-49",
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
          "golden-rule:operating-system:01",
          "golden-rule:operating-system:02",
          "golden-rule:operating-system:03",
          "golden-rule:operating-system:04",
          "golden-rule:operating-system:05",
          "golden-rule:operating-system:06",
          "golden-rule:operating-system:07",
          "golden-rule:operating-system:08",
          "golden-rule:operating-system:09",
          "golden-rule:operating-system:10",
          "golden-rule:operating-system:11",
          "golden-rule:operating-system:12",
          "golden-rule:operating-system:13",
          "golden-rule:operating-system:14",
          "golden-rule:operating-system:15",
          "golden-rule:operating-system:16",
          "golden-rule:operating-system:17",
          "golden-rule:operating-system:18",
          "golden-rule:operating-system:19",
          "golden-rule:operating-system:20",
          "golden-rule:operating-system:21",
          "golden-rule:operating-system:22",
          "exam-trap:operating-system:01",
          "exam-trap:operating-system:02",
          "exam-trap:operating-system:03",
          "exam-trap:operating-system:04",
          "exam-trap:operating-system:05",
          "exam-trap:operating-system:06",
          "exam-trap:operating-system:07",
          "exam-trap:operating-system:08",
          "exam-trap:operating-system:09",
          "exam-trap:operating-system:10"
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
  app.register("content", "operatingSystemFiveMinuteReview", { payload: payload, registrations: registrations });
})(window);
