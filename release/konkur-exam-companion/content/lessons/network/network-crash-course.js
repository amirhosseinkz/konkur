(function registerNetworkCrashCourse(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "network:lessons",
    "datasetType": "lessons",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "lesson:network:network-models:crash",
        "recordKey": "lesson:network:network-models:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:network-models",
        "title": {
          "fa": "مدل‌های شبکه: OSI و TCP/IP - Crash Course",
          "en": "Network Models: OSI and TCP/IP Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل.",
          "en": "Network Models: OSI and TCP/IP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Physical→Bits، Data Link→Frames، Network→Packets، Transport→Segments/Datagrams. Router در Network و Switch در Data Link قرار می‌گیرد.",
              "en": "Network Models: OSI and TCP/IP",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:13",
          "golden-rule:network:14",
          "golden-rule:network:15",
          "golden-rule:network:16"
        ],
        "examTrapIds": [
          "exam-trap:network:09"
        ],
        "flashcardIds": [
          "flashcard:network:033",
          "flashcard:network:034",
          "flashcard:network:035",
          "flashcard:network:036",
          "flashcard:network:037",
          "flashcard:network:038"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:encapsulation-pdu:crash",
          "lesson:network:tcp-vs-udp:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:encapsulation-pdu:crash",
        "recordKey": "lesson:network:encapsulation-pdu:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:encapsulation-pdu",
        "title": {
          "fa": "کپسوله‌سازی و PDU - Crash Course",
          "en": "Encapsulation and Protocol Data Units Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "نام داده در هر لایه و مسیر اضافه‌شدن header.",
          "en": "Encapsulation and Protocol Data Units",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "نام داده در هر لایه و مسیر اضافه‌شدن header. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "نام داده در هر لایه و مسیر اضافه‌شدن header.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Encapsulation and Protocol Data Units: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "Encapsulation and Protocol Data Units",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:network:20"
        ],
        "flashcardIds": [
          "flashcard:network:007",
          "flashcard:network:008",
          "flashcard:network:082"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:network-models:crash",
          "lesson:network:switching-mac:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:tcp-vs-udp:crash",
        "recordKey": "lesson:network:tcp-vs-udp:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:tcp-vs-udp",
        "title": {
          "fa": "TCP در برابر UDP - Crash Course",
          "en": "TCP vs UDP Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "تشخیص سریع reliability، ordering، flow و congestion control.",
          "en": "TCP vs UDP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "تشخیص سریع reliability، ordering، flow و congestion control. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "تشخیص سریع reliability، ordering، flow و congestion control.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Reliable، ordered، flow control و congestion control را اول به TCP وصل کن؛ DNS query و VoIP معمولاً UDP هستند، نه همیشه.",
              "en": "TCP vs UDP",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:01",
          "golden-rule:network:02",
          "golden-rule:network:03"
        ],
        "examTrapIds": [
          "exam-trap:network:02"
        ],
        "flashcardIds": [
          "flashcard:network:009",
          "flashcard:network:010",
          "flashcard:network:021",
          "flashcard:network:022",
          "flashcard:network:023",
          "flashcard:network:064"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ports-sockets:crash",
          "lesson:network:flow-control:crash",
          "lesson:network:congestion-control:crash",
          "lesson:network:dns:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:ports-sockets:crash",
        "recordKey": "lesson:network:ports-sockets:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:ports-sockets",
        "title": {
          "fa": "پورت‌ها و سوکت‌ها - Crash Course",
          "en": "Ports and Sockets Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "شناسهٔ فرایند شبکه و ترکیب IP/Port.",
          "en": "Ports and Sockets",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "شناسهٔ فرایند شبکه و ترکیب IP/Port. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "شناسهٔ فرایند شبکه و ترکیب IP/Port.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Ports and Sockets: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "Ports and Sockets",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:39",
          "golden-rule:network:40"
        ],
        "examTrapIds": [
          "exam-trap:network:14"
        ],
        "flashcardIds": [
          "flashcard:network:059",
          "flashcard:network:060",
          "flashcard:network:076"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:tcp-vs-udp:crash",
          "lesson:network:common-app-protocols:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:http-https:crash",
        "recordKey": "lesson:network:http-https:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:http-https",
        "title": {
          "fa": "HTTP و HTTPS - Crash Course",
          "en": "HTTP and HTTPS Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "درخواست/پاسخ، statelessness، methodها، status code و TLS.",
          "en": "HTTP and HTTPS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "درخواست/پاسخ، statelessness، methodها، status code و TLS. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "درخواست/پاسخ، statelessness، methodها، status code و TLS.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "HTTP درخواست/پاسخ و stateless است؛ HTTPS همان HTTP روی TLS است. GET معمولاً idempotent و POST معمولاً نه.",
              "en": "HTTP and HTTPS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:06",
          "golden-rule:network:07",
          "golden-rule:network:08"
        ],
        "examTrapIds": [
          "exam-trap:network:05",
          "exam-trap:network:15"
        ],
        "flashcardIds": [
          "flashcard:network:004",
          "flashcard:network:026",
          "flashcard:network:027",
          "flashcard:network:028",
          "flashcard:network:067",
          "flashcard:network:077"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:tcp-vs-udp:crash",
          "lesson:network:dns:crash",
          "lesson:network:common-app-protocols:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:dns:crash",
        "recordKey": "lesson:network:dns:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:dns",
        "title": {
          "fa": "DNS - Crash Course",
          "en": "DNS Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP.",
          "en": "DNS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "DNS روی port 53 است؛ query معمولاً UDP، ولی پاسخ بزرگ یا zone transfer می‌تواند TCP باشد.",
              "en": "DNS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:04",
          "golden-rule:network:05"
        ],
        "examTrapIds": [
          "exam-trap:network:04",
          "exam-trap:network:21"
        ],
        "flashcardIds": [
          "flashcard:network:003",
          "flashcard:network:024",
          "flashcard:network:025",
          "flashcard:network:066",
          "flashcard:network:083"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ports-sockets:crash",
          "lesson:network:http-https:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:ipv4-addressing:crash",
        "recordKey": "lesson:network:ipv4-addressing:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:ipv4-addressing",
        "title": {
          "fa": "آدرس‌دهی IPv4 - Crash Course",
          "en": "IPv4 Addressing Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "بیت‌های network/host، CIDR و آدرس‌های خاص.",
          "en": "IPv4 Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "بیت‌های network/host، CIDR و آدرس‌های خاص. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "بیت‌های network/host، CIDR و آدرس‌های خاص.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "IPv4 Addressing: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "IPv4 Addressing",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:25",
          "golden-rule:network:26"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:network:011",
          "flashcard:network:012",
          "flashcard:network:045",
          "flashcard:network:046"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:subnetting-basics:crash",
          "lesson:network:routing-fundamentals:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:subnetting-basics:crash",
        "recordKey": "lesson:network:subnetting-basics:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:subnetting-basics",
        "title": {
          "fa": "مبانی Subnetting - Crash Course",
          "en": "Subnetting Basics Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast.",
          "en": "Subnetting Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 8,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "برای /n، host bits = 32-n و تعداد آدرس = 2^host. convention رایج: usable = کل منهای network و broadcast.",
              "en": "Subnetting Basics",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:27",
          "golden-rule:network:28"
        ],
        "examTrapIds": [
          "exam-trap:network:06",
          "exam-trap:network:07",
          "exam-trap:network:13"
        ],
        "flashcardIds": [
          "flashcard:network:013",
          "flashcard:network:014",
          "flashcard:network:047",
          "flashcard:network:048",
          "flashcard:network:068",
          "flashcard:network:069"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ipv4-addressing:crash",
          "lesson:network:routing-fundamentals:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:arp-icmp:crash",
        "recordKey": "lesson:network:arp-icmp:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:arp-icmp",
        "title": {
          "fa": "ARP و ICMP - Crash Course",
          "en": "ARP and ICMP Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "یافتن MAC محلی و پیام‌های کنترلی/خطا.",
          "en": "ARP and ICMP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "یافتن MAC محلی و پیام‌های کنترلی/خطا. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "یافتن MAC محلی و پیام‌های کنترلی/خطا.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "ARP and ICMP: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "ARP and ICMP",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:23",
          "golden-rule:network:24"
        ],
        "examTrapIds": [
          "exam-trap:network:11"
        ],
        "flashcardIds": [
          "flashcard:network:018",
          "flashcard:network:019",
          "flashcard:network:043",
          "flashcard:network:044",
          "flashcard:network:073"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ipv4-addressing:crash",
          "lesson:network:switching-mac:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:routing-fundamentals:crash",
        "recordKey": "lesson:network:routing-fundamentals:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:routing-fundamentals",
        "title": {
          "fa": "مبانی Routing - Crash Course",
          "en": "Routing Fundamentals Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها.",
          "en": "Routing Fundamentals",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 8,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Longest-prefix match تصمیم نهایی routing است. Distance vector حس Bellman-Ford و Link state حس Dijkstra دارد.",
              "en": "Routing Fundamentals",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:11",
          "golden-rule:network:19",
          "golden-rule:network:20",
          "golden-rule:network:21"
        ],
        "examTrapIds": [
          "exam-trap:network:12",
          "exam-trap:network:22"
        ],
        "flashcardIds": [
          "flashcard:network:005",
          "flashcard:network:015",
          "flashcard:network:016",
          "flashcard:network:017",
          "flashcard:network:031",
          "flashcard:network:039"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ipv4-addressing:crash",
          "lesson:network:subnetting-basics:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:switching-mac:crash",
        "recordKey": "lesson:network:switching-mac:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:switching-mac",
        "title": {
          "fa": "Switching و MAC - Crash Course",
          "en": "Switching and MAC Addressing Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "لایهٔ داده، frame forwarding و جدول MAC.",
          "en": "Switching and MAC Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "لایهٔ داده، frame forwarding و جدول MAC. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "لایهٔ داده، frame forwarding و جدول MAC.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Switching and MAC Addressing: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "Switching and MAC Addressing",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:12"
        ],
        "examTrapIds": [
          "exam-trap:network:03"
        ],
        "flashcardIds": [
          "flashcard:network:006",
          "flashcard:network:032",
          "flashcard:network:065"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:network-models:crash",
          "lesson:network:arp-icmp:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:flow-control:crash",
        "recordKey": "lesson:network:flow-control:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:flow-control",
        "title": {
          "fa": "Flow Control - Crash Course",
          "en": "Flow Control Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "محافظت از گیرنده در برابر فرستندهٔ سریع.",
          "en": "Flow Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "محافظت از گیرنده در برابر فرستندهٔ سریع. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "محافظت از گیرنده در برابر فرستندهٔ سریع.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Flow control protects the receiver. اگر سؤال گیرنده/بافر/سرعت فرستنده گفت، دنبال Flow Control بگرد.",
              "en": "Flow Control",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:09"
        ],
        "examTrapIds": [
          "exam-trap:network:01"
        ],
        "flashcardIds": [
          "flashcard:network:001",
          "flashcard:network:029",
          "flashcard:network:063"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:tcp-vs-udp:crash",
          "lesson:network:sliding-window:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:congestion-control:crash",
        "recordKey": "lesson:network:congestion-control:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:congestion-control",
        "title": {
          "fa": "Congestion Control - Crash Course",
          "en": "Congestion Control Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "محافظت از شبکه در برابر ازدحام.",
          "en": "Congestion Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "محافظت از شبکه در برابر ازدحام. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "محافظت از شبکه در برابر ازدحام.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Congestion control protects the network. اگر سؤال ازدحام مسیر/packet loss/queue گفت، دنبال Congestion Control بگرد.",
              "en": "Congestion Control",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:10",
          "golden-rule:network:42"
        ],
        "examTrapIds": [
          "exam-trap:network:19"
        ],
        "flashcardIds": [
          "flashcard:network:002",
          "flashcard:network:030",
          "flashcard:network:062",
          "flashcard:network:081"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:tcp-vs-udp:crash",
          "lesson:network:flow-control:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:error-detection:crash",
        "recordKey": "lesson:network:error-detection:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:error-detection",
        "title": {
          "fa": "تشخیص خطا: Parity، Checksum، CRC - Crash Course",
          "en": "Error Detection: Parity, Checksum, CRC Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "تشخیص خطا بدون ورود به جبر سنگین.",
          "en": "Error Detection: Parity, Checksum, CRC",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "تشخیص خطا بدون ورود به جبر سنگین. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "تشخیص خطا بدون ورود به جبر سنگین.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Parity ساده، Checksum جمع/مکمل، CRC مبتنی بر polynomial است. این‌ها detection هستند نه correction.",
              "en": "Error Detection: Parity, Checksum, CRC",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:29",
          "golden-rule:network:30",
          "golden-rule:network:31"
        ],
        "examTrapIds": [
          "exam-trap:network:10",
          "exam-trap:network:16"
        ],
        "flashcardIds": [
          "flashcard:network:020",
          "flashcard:network:049",
          "flashcard:network:050",
          "flashcard:network:051",
          "flashcard:network:072",
          "flashcard:network:078"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:arq-protocols:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:arq-protocols:crash",
        "recordKey": "lesson:network:arq-protocols:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:arq-protocols",
        "title": {
          "fa": "پروتکل‌های ARQ - Crash Course",
          "en": "ARQ Protocols Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ACK، timeout و retransmission برای قابلیت اطمینان.",
          "en": "ARQ Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ACK، timeout و retransmission برای قابلیت اطمینان. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "ACK، timeout و retransmission برای قابلیت اطمینان.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "ARQ یعنی ACK + timeout + retransmission. تفاوت اصلی مدل‌ها در تعداد frameهای درگیر در ارسال مجدد است.",
              "en": "ARQ Protocols",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:32"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:network:052"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:error-detection:crash",
          "lesson:network:sliding-window:crash",
          "lesson:network:stop-and-wait:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:sliding-window:crash",
        "recordKey": "lesson:network:sliding-window:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:sliding-window",
        "title": {
          "fa": "Sliding Window - Crash Course",
          "en": "Sliding Window Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "ارسال چند frame قبل از ACK و کنترل پنجره.",
          "en": "Sliding Window",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "ارسال چند frame قبل از ACK و کنترل پنجره. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "ارسال چند frame قبل از ACK و کنترل پنجره.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Sliding Window اجازه می‌دهد چند frame بدون انتظار برای ACK تک‌به‌تک در مسیر باشند.",
              "en": "Sliding Window",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:34"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:network:054"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:flow-control:crash",
          "lesson:network:go-back-n:crash",
          "lesson:network:selective-repeat:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:stop-and-wait:crash",
        "recordKey": "lesson:network:stop-and-wait:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:stop-and-wait",
        "title": {
          "fa": "Stop-and-Wait - Crash Course",
          "en": "Stop-and-Wait Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده.",
          "en": "Stop-and-Wait",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Stop-and-Wait ساده‌ترین ARQ است: یک frame ارسال، سپس انتظار ACK.",
              "en": "Stop-and-Wait",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:33"
        ],
        "examTrapIds": [
          "exam-trap:network:17"
        ],
        "flashcardIds": [
          "flashcard:network:053",
          "flashcard:network:079"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:arq-protocols:crash",
          "lesson:network:sliding-window:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:go-back-n:crash",
        "recordKey": "lesson:network:go-back-n:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:go-back-n",
        "title": {
          "fa": "Go-Back-N - Crash Course",
          "en": "Go-Back-N Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود.",
          "en": "Go-Back-N",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "در Go-Back-N اگر frame i خراب شود، از i به بعد دوباره ارسال می‌شود.",
              "en": "Go-Back-N",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:35",
          "golden-rule:network:37"
        ],
        "examTrapIds": [
          "exam-trap:network:08"
        ],
        "flashcardIds": [
          "flashcard:network:055",
          "flashcard:network:057",
          "flashcard:network:070"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:sliding-window:crash",
          "lesson:network:selective-repeat:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:selective-repeat:crash",
        "recordKey": "lesson:network:selective-repeat:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:selective-repeat",
        "title": {
          "fa": "Selective Repeat - Crash Course",
          "en": "Selective Repeat Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "فقط frameهای خراب دوباره ارسال می‌شوند.",
          "en": "Selective Repeat",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "فقط frameهای خراب دوباره ارسال می‌شوند. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "فقط frameهای خراب دوباره ارسال می‌شوند.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Selective Repeat فقط frameهای خراب/گم‌شده را دوباره می‌فرستد و گیرنده out-of-order را نگه می‌دارد.",
              "en": "Selective Repeat",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:36",
          "golden-rule:network:38"
        ],
        "examTrapIds": [
          "exam-trap:network:18"
        ],
        "flashcardIds": [
          "flashcard:network:056",
          "flashcard:network:058",
          "flashcard:network:080"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:sliding-window:crash",
          "lesson:network:go-back-n:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      },
      {
        "id": "lesson:network:common-app-protocols:crash",
        "recordKey": "lesson:network:common-app-protocols:crash@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "unverified",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T12:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T12:00:00.000Z",
        "updatedAt": "2026-07-15T12:00:00.000Z",
        "subjectId": "subject:network",
        "topicId": "topic:network:common-app-protocols",
        "title": {
          "fa": "پروتکل‌های کاربردی رایج - Crash Course",
          "en": "Common Application Protocols Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار.",
          "en": "Common Application Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار. هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.",
              "en": "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.",
              "en": "Used for layer/protocol/contrast recognition. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Common Application Protocols: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.",
              "en": "Common Application Protocols",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "golden-rules",
            "sectionType": "summary",
            "content": {
              "fa": "اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.",
              "en": "Match keywords to rules; never infer from year or number.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-traps",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.",
              "en": "Common trap: confusing neighboring concepts.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcuts",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.",
              "en": "Attach one short memory cue to the English term.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "quick-recap",
            "sectionType": "quick-recap",
            "content": {
              "fa": "۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.",
              "en": "20 seconds: keyword, layer/protocol/constraint, beware absolutes.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:network:41"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:network:061"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:network:ports-sockets:crash",
          "lesson:network:dns:crash",
          "lesson:network:http-https:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
        "twentySecondStrategy": "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
        "miniSelfCheck": [
          "آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟",
          "آیا گزینه statement مطلق دارد؟"
        ]
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "networkCrashCourse", { payload: payload, registrations: registrations });
})(window);
