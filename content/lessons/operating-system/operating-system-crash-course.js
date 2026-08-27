(function registerOperatingSystemCrashCourse(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "operating-system:lessons",
    "datasetType": "lessons",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "lesson:operating-system:os-responsibilities:crash",
        "recordKey": "lesson:operating-system:os-responsibilities:crash@1",
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
        "topicId": "topic:operating-system:os-responsibilities",
        "title": {
          "fa": "وظایف سیستم‌عامل - Crash Course",
          "en": "Operating System Responsibilities Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "مدیریت فرایند، حافظه، فایل، I/O و abstractionها.",
          "en": "Operating System Responsibilities",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "مدیریت فرایند، حافظه، فایل، I/O و abstractionها. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "مدیریت فرایند، حافظه، فایل، I/O و abstractionها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Operating System Responsibilities: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Operating System Responsibilities",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
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
          "lesson:operating-system:process-concept:crash",
          "lesson:operating-system:memory-allocation:crash",
          "lesson:operating-system:file-system-disk:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:process-concept:crash",
        "recordKey": "lesson:operating-system:process-concept:crash@1",
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
        "topicId": "topic:operating-system:process-concept",
        "title": {
          "fa": "مفهوم فرایند - Crash Course",
          "en": "Process Concept Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "برنامه در حال اجرا با address space و منابع خودش.",
          "en": "Process Concept",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "برنامه در حال اجرا با address space و منابع خودش. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "برنامه در حال اجرا با address space و منابع خودش.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Process Concept: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Process Concept",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
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
          "lesson:operating-system:process-states-pcb:crash",
          "lesson:operating-system:process-vs-thread:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:process-states-pcb:crash",
        "recordKey": "lesson:operating-system:process-states-pcb:crash@1",
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
        "topicId": "topic:operating-system:process-states-pcb",
        "title": {
          "fa": "حالت‌های فرایند و PCB - Crash Course",
          "en": "Process States and PCB Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "new، ready، running، waiting، terminated و اطلاعات PCB.",
          "en": "Process States and PCB",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "new، ready، running، waiting، terminated و اطلاعات PCB. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "new، ready، running، waiting، terminated و اطلاعات PCB.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Process States and PCB: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Process States and PCB",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:05",
          "golden-rule:operating-system:06",
          "golden-rule:operating-system:07"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:operating-system:021",
          "flashcard:operating-system:022",
          "flashcard:operating-system:023"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:process-concept:crash",
          "lesson:operating-system:context-switching:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:context-switching:crash",
        "recordKey": "lesson:operating-system:context-switching:crash@1",
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
        "topicId": "topic:operating-system:context-switching",
        "title": {
          "fa": "تعویض متن - Crash Course",
          "en": "Context Switching Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها.",
          "en": "Context Switching",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Context Switching: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Context Switching",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:08"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:operating-system:024"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:process-states-pcb:crash",
          "lesson:operating-system:scheduling-basics:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:process-vs-thread:crash",
        "recordKey": "lesson:operating-system:process-vs-thread:crash@1",
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
        "topicId": "topic:operating-system:process-vs-thread",
        "title": {
          "fa": "فرایند در برابر Thread - Crash Course",
          "en": "Process vs Thread Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "address-space sharing، isolation، cost و failure impact.",
          "en": "Process vs Thread",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "address-space sharing، isolation، cost و failure impact. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "address-space sharing، isolation، cost و failure impact.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Shared address space → Threads. Independent address spaces → Processes. Threadها ارزان‌تر switch می‌شوند ولی failure می‌تواند کل process را خراب کند.",
              "en": "Process vs Thread",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:operating-system:001",
          "flashcard:operating-system:017",
          "flashcard:operating-system:018",
          "flashcard:operating-system:019",
          "flashcard:operating-system:020",
          "flashcard:operating-system:082"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:process-concept:crash",
          "lesson:operating-system:user-kernel-threads:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:user-kernel-threads:crash",
        "recordKey": "lesson:operating-system:user-kernel-threads:crash@1",
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
        "topicId": "topic:operating-system:user-kernel-threads",
        "title": {
          "fa": "Thread کاربر و Kernel - Crash Course",
          "en": "User Threads vs Kernel Threads Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "مدیریت thread در user space یا kernel و اثر blocking.",
          "en": "User Threads vs Kernel Threads",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "مدیریت thread در user space یا kernel و اثر blocking. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "مدیریت thread در user space یا kernel و اثر blocking.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "User Threads vs Kernel Threads: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "User Threads vs Kernel Threads",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
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
          "lesson:operating-system:process-vs-thread:crash",
          "lesson:operating-system:context-switching:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:scheduling-basics:crash",
        "recordKey": "lesson:operating-system:scheduling-basics:crash@1",
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
        "topicId": "topic:operating-system:scheduling-basics",
        "title": {
          "fa": "مبانی زمان‌بندی CPU - Crash Course",
          "en": "CPU Scheduling Basics Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "arrival، burst، waiting، turnaround، response و Gantt chart.",
          "en": "CPU Scheduling Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "arrival، burst، waiting، turnaround، response و Gantt chart. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "arrival، burst، waiting، turnaround، response و Gantt chart.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Waiting = زمان در ready queue. Turnaround = completion - arrival. Response = first run - arrival. Gantt chart را قبل از فرمول بکش.",
              "en": "CPU Scheduling Basics",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:operating-system:002",
          "flashcard:operating-system:003",
          "flashcard:operating-system:004",
          "flashcard:operating-system:025",
          "flashcard:operating-system:026",
          "flashcard:operating-system:027"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:fcfs:crash",
          "lesson:operating-system:sjf-srtf:crash",
          "lesson:operating-system:round-robin:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:fcfs:crash",
        "recordKey": "lesson:operating-system:fcfs:crash@1",
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
        "topicId": "topic:operating-system:fcfs",
        "title": {
          "fa": "FCFS - Crash Course",
          "en": "FCFS Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone.",
          "en": "FCFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "FCFS: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "FCFS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:13"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:operating-system:029"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:scheduling-basics:crash",
          "lesson:operating-system:sjf-srtf:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:sjf-srtf:crash",
        "recordKey": "lesson:operating-system:sjf-srtf:crash@1",
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
        "topicId": "topic:operating-system:sjf-srtf",
        "title": {
          "fa": "SJF و SRTF - Crash Course",
          "en": "SJF and SRTF Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است.",
          "en": "SJF and SRTF",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "SJF غیرpreemptive است؛ SRTF با arrival جدید و burst کمتر می‌تواند CPU را بگیرد.",
              "en": "SJF and SRTF",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:14",
          "golden-rule:operating-system:15"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:04"
        ],
        "flashcardIds": [
          "flashcard:operating-system:030",
          "flashcard:operating-system:031",
          "flashcard:operating-system:085"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:scheduling-basics:crash",
          "lesson:operating-system:priority-scheduling:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:priority-scheduling:crash",
        "recordKey": "lesson:operating-system:priority-scheduling:crash@1",
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
        "topicId": "topic:operating-system:priority-scheduling",
        "title": {
          "fa": "Priority Scheduling - Crash Course",
          "en": "Priority Scheduling Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود.",
          "en": "Priority Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Priority Scheduling: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Priority Scheduling",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:16",
          "golden-rule:operating-system:17"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:19"
        ],
        "flashcardIds": [
          "flashcard:operating-system:032",
          "flashcard:operating-system:033",
          "flashcard:operating-system:100"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:scheduling-basics:crash",
          "lesson:operating-system:round-robin:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:round-robin:crash",
        "recordKey": "lesson:operating-system:round-robin:crash@1",
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
        "topicId": "topic:operating-system:round-robin",
        "title": {
          "fa": "Round Robin - Crash Course",
          "en": "Round Robin Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "preemptive با quantum؛ trade-off بین response و overhead.",
          "en": "Round Robin",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "preemptive با quantum؛ trade-off بین response و overhead. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "preemptive با quantum؛ trade-off بین response و overhead.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Quantum کوچک response را بهتر ولی context-switch overhead را بیشتر می‌کند؛ quantum خیلی بزرگ شبیه FCFS می‌شود.",
              "en": "Round Robin",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:18",
          "golden-rule:operating-system:19",
          "golden-rule:operating-system:20"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:18"
        ],
        "flashcardIds": [
          "flashcard:operating-system:005",
          "flashcard:operating-system:034",
          "flashcard:operating-system:035",
          "flashcard:operating-system:036",
          "flashcard:operating-system:099"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:scheduling-basics:crash",
          "lesson:operating-system:priority-scheduling:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:synchronization:crash",
        "recordKey": "lesson:operating-system:synchronization:crash@1",
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
        "topicId": "topic:operating-system:synchronization",
        "title": {
          "fa": "همگام‌سازی - Crash Course",
          "en": "Synchronization Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "race condition، shared state و کنترل interleaving.",
          "en": "Synchronization",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "race condition، shared state و کنترل interleaving. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "race condition، shared state و کنترل interleaving.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Race condition وقتی نتیجه به interleaving وابسته شود. Critical section باید mutual exclusion، progress و bounded waiting را رعایت کند.",
              "en": "Synchronization",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:21"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:operating-system:037"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:critical-section:crash",
          "lesson:operating-system:mutex-semaphore:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:critical-section:crash",
        "recordKey": "lesson:operating-system:critical-section:crash@1",
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
        "topicId": "topic:operating-system:critical-section",
        "title": {
          "fa": "ناحیهٔ بحرانی - Crash Course",
          "en": "Critical Section Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است.",
          "en": "Critical Section",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Critical Section: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Critical Section",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:operating-system:038",
          "flashcard:operating-system:039",
          "flashcard:operating-system:040",
          "flashcard:operating-system:041",
          "flashcard:operating-system:102"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:synchronization:crash",
          "lesson:operating-system:mutex-semaphore:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:mutex-semaphore:crash",
        "recordKey": "lesson:operating-system:mutex-semaphore:crash@1",
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
        "topicId": "topic:operating-system:mutex-semaphore",
        "title": {
          "fa": "Mutex و Semaphore - Crash Course",
          "en": "Mutex and Semaphore Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "مالکیت mutex در برابر permits/counting در semaphore.",
          "en": "Mutex and Semaphore",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "مالکیت mutex در برابر permits/counting در semaphore. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "مالکیت mutex در برابر permits/counting در semaphore.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Mutex مالک دارد؛ semaphore می‌تواند count/permit باشد. Binary semaphore همیشه mutex کامل نیست.",
              "en": "Mutex and Semaphore",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:26",
          "golden-rule:operating-system:27",
          "golden-rule:operating-system:28"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:07"
        ],
        "flashcardIds": [
          "flashcard:operating-system:008",
          "flashcard:operating-system:009",
          "flashcard:operating-system:042",
          "flashcard:operating-system:043",
          "flashcard:operating-system:044",
          "flashcard:operating-system:088"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:critical-section:crash",
          "lesson:operating-system:monitor-condition-vars:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:monitor-condition-vars:crash",
        "recordKey": "lesson:operating-system:monitor-condition-vars:crash@1",
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
        "topicId": "topic:operating-system:monitor-condition-vars",
        "title": {
          "fa": "Monitor و Condition Variable - Crash Course",
          "en": "Monitor and Condition Variables Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "abstraction سطح بالاتر برای lock و wait/signal.",
          "en": "Monitor and Condition Variables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "abstraction سطح بالاتر برای lock و wait/signal. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "abstraction سطح بالاتر برای lock و wait/signal.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Monitor and Condition Variables: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Monitor and Condition Variables",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:29",
          "golden-rule:operating-system:30"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:20"
        ],
        "flashcardIds": [
          "flashcard:operating-system:045",
          "flashcard:operating-system:046",
          "flashcard:operating-system:101"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:mutex-semaphore:crash",
          "lesson:operating-system:classical-sync-problems:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:classical-sync-problems:crash",
        "recordKey": "lesson:operating-system:classical-sync-problems:crash@1",
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
        "topicId": "topic:operating-system:classical-sync-problems",
        "title": {
          "fa": "مسائل کلاسیک همگام‌سازی - Crash Course",
          "en": "Classical Synchronization Problems Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "producer-consumer، readers-writers و dining philosophers.",
          "en": "Classical Synchronization Problems",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "producer-consumer، readers-writers و dining philosophers. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "producer-consumer، readers-writers و dining philosophers.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Classical Synchronization Problems: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.",
              "en": "Classical Synchronization Problems",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
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
          "lesson:operating-system:synchronization:crash",
          "lesson:operating-system:deadlock-conditions:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:deadlock-conditions:crash",
        "recordKey": "lesson:operating-system:deadlock-conditions:crash@1",
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
        "topicId": "topic:operating-system:deadlock-conditions",
        "title": {
          "fa": "شرایط بن‌بست - Crash Course",
          "en": "Deadlock Conditions Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
          "en": "Deadlock Conditions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "چهار شرط با هم: Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait. حذف یکی یعنی prevention.",
              "en": "Deadlock Conditions",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:31",
          "golden-rule:operating-system:32",
          "golden-rule:operating-system:33",
          "golden-rule:operating-system:34"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:05"
        ],
        "flashcardIds": [
          "flashcard:operating-system:006",
          "flashcard:operating-system:047",
          "flashcard:operating-system:048",
          "flashcard:operating-system:049",
          "flashcard:operating-system:050",
          "flashcard:operating-system:051"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:deadlock-handling:crash",
          "lesson:operating-system:bankers-algorithm:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:deadlock-handling:crash",
        "recordKey": "lesson:operating-system:deadlock-handling:crash@1",
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
        "topicId": "topic:operating-system:deadlock-handling",
        "title": {
          "fa": "مدیریت بن‌بست - Crash Course",
          "en": "Deadlock Prevention, Avoidance, Detection Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "prevention، avoidance، detection و recovery را جدا کن.",
          "en": "Deadlock Prevention, Avoidance, Detection",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "prevention، avoidance، detection و recovery را جدا کن. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "prevention، avoidance، detection و recovery را جدا کن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Prevention شرط را حذف می‌کند؛ Avoidance وارد unsafe state نمی‌شود؛ Detection بعداً پیدا می‌کند؛ Recovery آزادسازی/kill می‌کند.",
              "en": "Deadlock Prevention, Avoidance, Detection",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:36",
          "golden-rule:operating-system:37",
          "golden-rule:operating-system:38"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:16"
        ],
        "flashcardIds": [
          "flashcard:operating-system:052",
          "flashcard:operating-system:053",
          "flashcard:operating-system:054",
          "flashcard:operating-system:097"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:deadlock-conditions:crash",
          "lesson:operating-system:bankers-algorithm:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:bankers-algorithm:crash",
        "recordKey": "lesson:operating-system:bankers-algorithm:crash@1",
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
        "topicId": "topic:operating-system:bankers-algorithm",
        "title": {
          "fa": "الگوریتم بانکدار - Crash Course",
          "en": "Banker's Algorithm Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "safe state، safe sequence و درخواست resource.",
          "en": "Banker's Algorithm",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "safe state، safe sequence و درخواست resource. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "safe state، safe sequence و درخواست resource.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Safe state یعنی حداقل یک safe sequence وجود دارد. Unsafe الزاماً deadlocked نیست.",
              "en": "Banker's Algorithm",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:39",
          "golden-rule:operating-system:40"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:06",
          "exam-trap:operating-system:17"
        ],
        "flashcardIds": [
          "flashcard:operating-system:007",
          "flashcard:operating-system:055",
          "flashcard:operating-system:056",
          "flashcard:operating-system:087",
          "flashcard:operating-system:098"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:deadlock-handling:crash",
          "lesson:operating-system:deadlock-conditions:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:memory-allocation:crash",
        "recordKey": "lesson:operating-system:memory-allocation:crash@1",
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
        "topicId": "topic:operating-system:memory-allocation",
        "title": {
          "fa": "تخصیص حافظه - Crash Course",
          "en": "Memory Allocation Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "logical/physical address و fragmentation داخلی/خارجی.",
          "en": "Memory Allocation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "logical/physical address و fragmentation داخلی/خارجی. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "logical/physical address و fragmentation داخلی/خارجی.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Internal fragmentation داخل block تخصیص‌یافته است؛ external fragmentation بین free blockهاست.",
              "en": "Memory Allocation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:operating-system:010",
          "flashcard:operating-system:011",
          "flashcard:operating-system:057",
          "flashcard:operating-system:058",
          "flashcard:operating-system:059",
          "flashcard:operating-system:060"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:paging:crash",
          "lesson:operating-system:segmentation:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:paging:crash",
        "recordKey": "lesson:operating-system:paging:crash@1",
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
        "topicId": "topic:operating-system:paging",
        "title": {
          "fa": "صفحه‌بندی - Crash Course",
          "en": "Paging Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "page، frame، page table و حذف external fragmentation.",
          "en": "Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "page، frame، page table و حذف external fragmentation. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "page، frame، page table و حذف external fragmentation.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Paging logical page را به physical frame نگاشت می‌کند و external fragmentation را حذف می‌کند.",
              "en": "Paging",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:45",
          "golden-rule:operating-system:46"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:operating-system:061",
          "flashcard:operating-system:062"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:memory-allocation:crash",
          "lesson:operating-system:tlb-thrashing-working-set:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:segmentation:crash",
        "recordKey": "lesson:operating-system:segmentation:crash@1",
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
        "topicId": "topic:operating-system:segmentation",
        "title": {
          "fa": "Segmentation - Crash Course",
          "en": "Segmentation Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه.",
          "en": "Segmentation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Segmentation تقسیم منطقی با اندازه‌های متفاوت است؛ می‌تواند external fragmentation داشته باشد.",
              "en": "Segmentation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:47",
          "golden-rule:operating-system:48"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:12"
        ],
        "flashcardIds": [
          "flashcard:operating-system:063",
          "flashcard:operating-system:064",
          "flashcard:operating-system:093"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:memory-allocation:crash",
          "lesson:operating-system:paging:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:virtual-memory-demand-paging:crash",
        "recordKey": "lesson:operating-system:virtual-memory-demand-paging:crash@1",
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
        "topicId": "topic:operating-system:virtual-memory-demand-paging",
        "title": {
          "fa": "حافظهٔ مجازی و Demand Paging - Crash Course",
          "en": "Virtual Memory and Demand Paging Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "page fault، locality و آوردن صفحه هنگام نیاز.",
          "en": "Virtual Memory and Demand Paging",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "page fault، locality و آوردن صفحه هنگام نیاز. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "page fault، locality و آوردن صفحه هنگام نیاز.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Demand paging صفحه را هنگام نیاز می‌آورد؛ page fault یعنی صفحه در memory نیست.",
              "en": "Virtual Memory and Demand Paging",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:operating-system:49",
          "golden-rule:operating-system:50",
          "golden-rule:operating-system:51"
        ],
        "examTrapIds": [
          "exam-trap:operating-system:22"
        ],
        "flashcardIds": [
          "flashcard:operating-system:012",
          "flashcard:operating-system:065",
          "flashcard:operating-system:066",
          "flashcard:operating-system:067",
          "flashcard:operating-system:103"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:page-replacement:crash",
          "lesson:operating-system:tlb-thrashing-working-set:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:page-replacement:crash",
        "recordKey": "lesson:operating-system:page-replacement:crash@1",
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
        "topicId": "topic:operating-system:page-replacement",
        "title": {
          "fa": "جایگزینی صفحه - Crash Course",
          "en": "Page Replacement Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "FIFO، Optimal، LRU و Clock/Second Chance.",
          "en": "Page Replacement",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 8,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "FIFO، Optimal، LRU و Clock/Second Chance. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "FIFO، Optimal، LRU و Clock/Second Chance.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "FIFO ساده است و Belady anomaly دارد؛ Optimal آینده را می‌داند؛ LRU locality زمانی را تقریب می‌زند؛ Clock approximation است.",
              "en": "Page Replacement",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
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
        "flashcardIds": [
          "flashcard:operating-system:014",
          "flashcard:operating-system:015",
          "flashcard:operating-system:068",
          "flashcard:operating-system:069",
          "flashcard:operating-system:070",
          "flashcard:operating-system:071"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:virtual-memory-demand-paging:crash",
          "lesson:operating-system:tlb-thrashing-working-set:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:tlb-thrashing-working-set:crash",
        "recordKey": "lesson:operating-system:tlb-thrashing-working-set:crash@1",
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
        "topicId": "topic:operating-system:tlb-thrashing-working-set",
        "title": {
          "fa": "TLB، Thrashing و Working Set - Crash Course",
          "en": "TLB, Thrashing and Working Set Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "TLB hit، effective access intuition، locality و working set.",
          "en": "TLB, Thrashing and Working Set",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "TLB hit، effective access intuition، locality و working set. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "TLB hit، effective access intuition، locality و working set.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "TLB hit یعنی عبور از memory access معمول page table. Thrashing وقتی بیشتر وقت صرف page fault شود.",
              "en": "TLB, Thrashing and Working Set",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:operating-system:09",
          "exam-trap:operating-system:23"
        ],
        "flashcardIds": [
          "flashcard:operating-system:013",
          "flashcard:operating-system:072",
          "flashcard:operating-system:073",
          "flashcard:operating-system:074",
          "flashcard:operating-system:075",
          "flashcard:operating-system:090"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:paging:crash",
          "lesson:operating-system:virtual-memory-demand-paging:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      },
      {
        "id": "lesson:operating-system:file-system-disk:crash",
        "recordKey": "lesson:operating-system:file-system-disk:crash@1",
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
        "topicId": "topic:operating-system:file-system-disk",
        "title": {
          "fa": "فایل‌سیستم و زمان‌بندی دیسک - Crash Course",
          "en": "File-System Basics and Disk Scheduling Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN.",
          "en": "File-System Basics and Disk Scheduling",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN. هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.",
              "en": "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "SCAN مثل آسانسور در یک جهت حرکت می‌کند؛ C-SCAN فقط یک جهت سرویس مؤثر می‌دهد و سپس برمی‌گردد.",
              "en": "File-System Basics and Disk Scheduling",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.",
              "en": "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?",
              "en": "Attach one recognition word to each topic.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.",
              "en": "Fast rule: identify scheduling/deadlock/memory/sync first.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:operating-system:15",
          "exam-trap:operating-system:24"
        ],
        "flashcardIds": [
          "flashcard:operating-system:016",
          "flashcard:operating-system:076",
          "flashcard:operating-system:077",
          "flashcard:operating-system:078",
          "flashcard:operating-system:079",
          "flashcard:operating-system:080"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:operating-system:os-responsibilities:crash",
          "lesson:operating-system:memory-allocation:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
        "miniSelfCheck": [
          "آیا سؤال فرمول scheduling دارد؟",
          "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"
        ]
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "operatingSystemCrashCourse", { payload: payload, registrations: registrations });
})(window);
