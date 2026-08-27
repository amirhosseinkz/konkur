(function registerTopicRegistry(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "network:topics",
    "datasetType": "topics",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "topic:network:network-models",
        "recordKey": "topic:network:network-models@1",
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
        "slug": "network-models",
        "title": {
          "fa": "مدل‌های شبکه: OSI و TCP/IP",
          "en": "Network Models: OSI and TCP/IP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Network Models: OSI and TCP/IP",
        "shortDescription": "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل.",
        "summary": {
          "fa": "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل.",
          "en": "Network Models: OSI and TCP/IP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:network-models:crash"
        ],
        "flashcardIds": [
          "flashcard:network:033",
          "flashcard:network:034",
          "flashcard:network:035",
          "flashcard:network:036",
          "flashcard:network:037",
          "flashcard:network:038",
          "flashcard:network:071"
        ],
        "goldenRuleIds": [
          "golden-rule:network:13",
          "golden-rule:network:14",
          "golden-rule:network:15",
          "golden-rule:network:16",
          "golden-rule:network:17",
          "golden-rule:network:18"
        ],
        "examTrapIds": [
          "exam-trap:network:09"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:network-models:encapsulation-pdu:similar",
          "topic-link:network-models:tcp-vs-udp:similar"
        ],
        "relatedTopicIds": [
          "topic:network:encapsulation-pdu",
          "topic:network:tcp-vs-udp"
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
        "id": "topic:network:encapsulation-pdu",
        "recordKey": "topic:network:encapsulation-pdu@1",
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
        "slug": "encapsulation-pdu",
        "title": {
          "fa": "کپسوله‌سازی و PDU",
          "en": "Encapsulation and Protocol Data Units",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Encapsulation and Protocol Data Units",
        "shortDescription": "نام داده در هر لایه و مسیر اضافه‌شدن header.",
        "summary": {
          "fa": "نام داده در هر لایه و مسیر اضافه‌شدن header.",
          "en": "Encapsulation and Protocol Data Units",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:encapsulation-pdu:crash"
        ],
        "flashcardIds": [
          "flashcard:network:007",
          "flashcard:network:008",
          "flashcard:network:082"
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:network:20"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:encapsulation-pdu:network-models:similar",
          "topic-link:encapsulation-pdu:switching-mac:similar"
        ],
        "relatedTopicIds": [
          "topic:network:network-models",
          "topic:network:switching-mac"
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
        "id": "topic:network:tcp-vs-udp",
        "recordKey": "topic:network:tcp-vs-udp@1",
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
        "slug": "tcp-vs-udp",
        "title": {
          "fa": "TCP در برابر UDP",
          "en": "TCP vs UDP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "TCP vs UDP",
        "shortDescription": "تشخیص سریع reliability، ordering، flow و congestion control.",
        "summary": {
          "fa": "تشخیص سریع reliability، ordering، flow و congestion control.",
          "en": "TCP vs UDP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:tcp-vs-udp:crash"
        ],
        "flashcardIds": [
          "flashcard:network:009",
          "flashcard:network:010",
          "flashcard:network:021",
          "flashcard:network:022",
          "flashcard:network:023",
          "flashcard:network:064"
        ],
        "goldenRuleIds": [
          "golden-rule:network:01",
          "golden-rule:network:02",
          "golden-rule:network:03"
        ],
        "examTrapIds": [
          "exam-trap:network:02"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:tcp-vs-udp:ports-sockets:similar",
          "topic-link:tcp-vs-udp:flow-control:similar",
          "topic-link:tcp-vs-udp:congestion-control:similar",
          "topic-link:tcp-vs-udp:dns:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ports-sockets",
          "topic:network:flow-control",
          "topic:network:congestion-control",
          "topic:network:dns"
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
        "id": "topic:network:ports-sockets",
        "recordKey": "topic:network:ports-sockets@1",
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
        "slug": "ports-sockets",
        "title": {
          "fa": "پورت‌ها و سوکت‌ها",
          "en": "Ports and Sockets",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Ports and Sockets",
        "shortDescription": "شناسهٔ فرایند شبکه و ترکیب IP/Port.",
        "summary": {
          "fa": "شناسهٔ فرایند شبکه و ترکیب IP/Port.",
          "en": "Ports and Sockets",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:ports-sockets:crash"
        ],
        "flashcardIds": [
          "flashcard:network:059",
          "flashcard:network:060",
          "flashcard:network:076"
        ],
        "goldenRuleIds": [
          "golden-rule:network:39",
          "golden-rule:network:40"
        ],
        "examTrapIds": [
          "exam-trap:network:14"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:ports-sockets:tcp-vs-udp:similar",
          "topic-link:ports-sockets:common-app-protocols:similar"
        ],
        "relatedTopicIds": [
          "topic:network:tcp-vs-udp",
          "topic:network:common-app-protocols"
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
        "id": "topic:network:http-https",
        "recordKey": "topic:network:http-https@1",
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
        "slug": "http-https",
        "title": {
          "fa": "HTTP و HTTPS",
          "en": "HTTP and HTTPS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "HTTP and HTTPS",
        "shortDescription": "درخواست/پاسخ، statelessness، methodها، status code و TLS.",
        "summary": {
          "fa": "درخواست/پاسخ، statelessness، methodها، status code و TLS.",
          "en": "HTTP and HTTPS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:http-https:crash"
        ],
        "flashcardIds": [
          "flashcard:network:004",
          "flashcard:network:026",
          "flashcard:network:027",
          "flashcard:network:028",
          "flashcard:network:067",
          "flashcard:network:077"
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
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:http-https:tcp-vs-udp:similar",
          "topic-link:http-https:dns:similar",
          "topic-link:http-https:common-app-protocols:similar"
        ],
        "relatedTopicIds": [
          "topic:network:tcp-vs-udp",
          "topic:network:dns",
          "topic:network:common-app-protocols"
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
        "id": "topic:network:dns",
        "recordKey": "topic:network:dns@1",
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
        "slug": "dns",
        "title": {
          "fa": "DNS",
          "en": "DNS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "DNS",
        "shortDescription": "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP.",
        "summary": {
          "fa": "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP.",
          "en": "DNS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:dns:crash"
        ],
        "flashcardIds": [
          "flashcard:network:003",
          "flashcard:network:024",
          "flashcard:network:025",
          "flashcard:network:066",
          "flashcard:network:083"
        ],
        "goldenRuleIds": [
          "golden-rule:network:04",
          "golden-rule:network:05"
        ],
        "examTrapIds": [
          "exam-trap:network:04",
          "exam-trap:network:21"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:dns:ports-sockets:similar",
          "topic-link:dns:http-https:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ports-sockets",
          "topic:network:http-https"
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
        "id": "topic:network:ipv4-addressing",
        "recordKey": "topic:network:ipv4-addressing@1",
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
        "slug": "ipv4-addressing",
        "title": {
          "fa": "آدرس‌دهی IPv4",
          "en": "IPv4 Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "IPv4 Addressing",
        "shortDescription": "بیت‌های network/host، CIDR و آدرس‌های خاص.",
        "summary": {
          "fa": "بیت‌های network/host، CIDR و آدرس‌های خاص.",
          "en": "IPv4 Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:ipv4-addressing:crash"
        ],
        "flashcardIds": [
          "flashcard:network:011",
          "flashcard:network:012",
          "flashcard:network:045",
          "flashcard:network:046"
        ],
        "goldenRuleIds": [
          "golden-rule:network:25",
          "golden-rule:network:26"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:ipv4-addressing:subnetting-basics:similar",
          "topic-link:ipv4-addressing:routing-fundamentals:similar"
        ],
        "relatedTopicIds": [
          "topic:network:subnetting-basics",
          "topic:network:routing-fundamentals"
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
        "id": "topic:network:subnetting-basics",
        "recordKey": "topic:network:subnetting-basics@1",
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
        "slug": "subnetting-basics",
        "title": {
          "fa": "مبانی Subnetting",
          "en": "Subnetting Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Subnetting Basics",
        "shortDescription": "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast.",
        "summary": {
          "fa": "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast.",
          "en": "Subnetting Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:subnetting-basics:crash"
        ],
        "flashcardIds": [
          "flashcard:network:013",
          "flashcard:network:014",
          "flashcard:network:047",
          "flashcard:network:048",
          "flashcard:network:068",
          "flashcard:network:069",
          "flashcard:network:075"
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
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:subnetting-basics:ipv4-addressing:similar",
          "topic-link:subnetting-basics:routing-fundamentals:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ipv4-addressing",
          "topic:network:routing-fundamentals"
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
        "id": "topic:network:arp-icmp",
        "recordKey": "topic:network:arp-icmp@1",
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
        "slug": "arp-icmp",
        "title": {
          "fa": "ARP و ICMP",
          "en": "ARP and ICMP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "ARP and ICMP",
        "shortDescription": "یافتن MAC محلی و پیام‌های کنترلی/خطا.",
        "summary": {
          "fa": "یافتن MAC محلی و پیام‌های کنترلی/خطا.",
          "en": "ARP and ICMP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:arp-icmp:crash"
        ],
        "flashcardIds": [
          "flashcard:network:018",
          "flashcard:network:019",
          "flashcard:network:043",
          "flashcard:network:044",
          "flashcard:network:073"
        ],
        "goldenRuleIds": [
          "golden-rule:network:23",
          "golden-rule:network:24"
        ],
        "examTrapIds": [
          "exam-trap:network:11"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:arp-icmp:ipv4-addressing:similar",
          "topic-link:arp-icmp:switching-mac:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ipv4-addressing",
          "topic:network:switching-mac"
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
        "id": "topic:network:routing-fundamentals",
        "recordKey": "topic:network:routing-fundamentals@1",
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
        "slug": "routing-fundamentals",
        "title": {
          "fa": "مبانی Routing",
          "en": "Routing Fundamentals",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Routing Fundamentals",
        "shortDescription": "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها.",
        "summary": {
          "fa": "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها.",
          "en": "Routing Fundamentals",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:routing-fundamentals:crash"
        ],
        "flashcardIds": [
          "flashcard:network:005",
          "flashcard:network:015",
          "flashcard:network:016",
          "flashcard:network:017",
          "flashcard:network:031",
          "flashcard:network:039",
          "flashcard:network:040",
          "flashcard:network:041",
          "flashcard:network:042",
          "flashcard:network:074",
          "flashcard:network:084"
        ],
        "goldenRuleIds": [
          "golden-rule:network:11",
          "golden-rule:network:19",
          "golden-rule:network:20",
          "golden-rule:network:21",
          "golden-rule:network:22"
        ],
        "examTrapIds": [
          "exam-trap:network:12",
          "exam-trap:network:22"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:routing-fundamentals:ipv4-addressing:similar",
          "topic-link:routing-fundamentals:subnetting-basics:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ipv4-addressing",
          "topic:network:subnetting-basics"
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
        "id": "topic:network:switching-mac",
        "recordKey": "topic:network:switching-mac@1",
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
        "slug": "switching-mac",
        "title": {
          "fa": "Switching و MAC",
          "en": "Switching and MAC Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Switching and MAC Addressing",
        "shortDescription": "لایهٔ داده، frame forwarding و جدول MAC.",
        "summary": {
          "fa": "لایهٔ داده، frame forwarding و جدول MAC.",
          "en": "Switching and MAC Addressing",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:switching-mac:crash"
        ],
        "flashcardIds": [
          "flashcard:network:006",
          "flashcard:network:032",
          "flashcard:network:065"
        ],
        "goldenRuleIds": [
          "golden-rule:network:12"
        ],
        "examTrapIds": [
          "exam-trap:network:03"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:switching-mac:network-models:similar",
          "topic-link:switching-mac:arp-icmp:similar"
        ],
        "relatedTopicIds": [
          "topic:network:network-models",
          "topic:network:arp-icmp"
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
        "id": "topic:network:flow-control",
        "recordKey": "topic:network:flow-control@1",
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
        "slug": "flow-control",
        "title": {
          "fa": "Flow Control",
          "en": "Flow Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Flow Control",
        "shortDescription": "محافظت از گیرنده در برابر فرستندهٔ سریع.",
        "summary": {
          "fa": "محافظت از گیرنده در برابر فرستندهٔ سریع.",
          "en": "Flow Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:flow-control:crash"
        ],
        "flashcardIds": [
          "flashcard:network:001",
          "flashcard:network:029",
          "flashcard:network:063"
        ],
        "goldenRuleIds": [
          "golden-rule:network:09"
        ],
        "examTrapIds": [
          "exam-trap:network:01"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:flow-control:tcp-vs-udp:similar",
          "topic-link:flow-control:sliding-window:similar"
        ],
        "relatedTopicIds": [
          "topic:network:tcp-vs-udp",
          "topic:network:sliding-window"
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
        "id": "topic:network:congestion-control",
        "recordKey": "topic:network:congestion-control@1",
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
        "slug": "congestion-control",
        "title": {
          "fa": "Congestion Control",
          "en": "Congestion Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Congestion Control",
        "shortDescription": "محافظت از شبکه در برابر ازدحام.",
        "summary": {
          "fa": "محافظت از شبکه در برابر ازدحام.",
          "en": "Congestion Control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:congestion-control:crash"
        ],
        "flashcardIds": [
          "flashcard:network:002",
          "flashcard:network:030",
          "flashcard:network:062",
          "flashcard:network:081"
        ],
        "goldenRuleIds": [
          "golden-rule:network:10",
          "golden-rule:network:42"
        ],
        "examTrapIds": [
          "exam-trap:network:19"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:congestion-control:tcp-vs-udp:similar",
          "topic-link:congestion-control:flow-control:similar"
        ],
        "relatedTopicIds": [
          "topic:network:tcp-vs-udp",
          "topic:network:flow-control"
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
        "id": "topic:network:error-detection",
        "recordKey": "topic:network:error-detection@1",
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
        "slug": "error-detection",
        "title": {
          "fa": "تشخیص خطا: Parity، Checksum، CRC",
          "en": "Error Detection: Parity, Checksum, CRC",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Error Detection: Parity, Checksum, CRC",
        "shortDescription": "تشخیص خطا بدون ورود به جبر سنگین.",
        "summary": {
          "fa": "تشخیص خطا بدون ورود به جبر سنگین.",
          "en": "Error Detection: Parity, Checksum, CRC",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:error-detection:crash"
        ],
        "flashcardIds": [
          "flashcard:network:020",
          "flashcard:network:049",
          "flashcard:network:050",
          "flashcard:network:051",
          "flashcard:network:072",
          "flashcard:network:078"
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
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:error-detection:arq-protocols:similar"
        ],
        "relatedTopicIds": [
          "topic:network:arq-protocols"
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
        "id": "topic:network:arq-protocols",
        "recordKey": "topic:network:arq-protocols@1",
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
        "slug": "arq-protocols",
        "title": {
          "fa": "پروتکل‌های ARQ",
          "en": "ARQ Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "ARQ Protocols",
        "shortDescription": "ACK، timeout و retransmission برای قابلیت اطمینان.",
        "summary": {
          "fa": "ACK، timeout و retransmission برای قابلیت اطمینان.",
          "en": "ARQ Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:arq-protocols:crash"
        ],
        "flashcardIds": [
          "flashcard:network:052"
        ],
        "goldenRuleIds": [
          "golden-rule:network:32"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:arq-protocols:error-detection:similar",
          "topic-link:arq-protocols:sliding-window:similar",
          "topic-link:arq-protocols:stop-and-wait:similar"
        ],
        "relatedTopicIds": [
          "topic:network:error-detection",
          "topic:network:sliding-window",
          "topic:network:stop-and-wait"
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
        "id": "topic:network:sliding-window",
        "recordKey": "topic:network:sliding-window@1",
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
        "slug": "sliding-window",
        "title": {
          "fa": "Sliding Window",
          "en": "Sliding Window",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Sliding Window",
        "shortDescription": "ارسال چند frame قبل از ACK و کنترل پنجره.",
        "summary": {
          "fa": "ارسال چند frame قبل از ACK و کنترل پنجره.",
          "en": "Sliding Window",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:sliding-window:crash"
        ],
        "flashcardIds": [
          "flashcard:network:054"
        ],
        "goldenRuleIds": [
          "golden-rule:network:34"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:sliding-window:flow-control:similar",
          "topic-link:sliding-window:go-back-n:similar",
          "topic-link:sliding-window:selective-repeat:similar"
        ],
        "relatedTopicIds": [
          "topic:network:flow-control",
          "topic:network:go-back-n",
          "topic:network:selective-repeat"
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
        "id": "topic:network:stop-and-wait",
        "recordKey": "topic:network:stop-and-wait@1",
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
        "slug": "stop-and-wait",
        "title": {
          "fa": "Stop-and-Wait",
          "en": "Stop-and-Wait",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Stop-and-Wait",
        "shortDescription": "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده.",
        "summary": {
          "fa": "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده.",
          "en": "Stop-and-Wait",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:stop-and-wait:crash"
        ],
        "flashcardIds": [
          "flashcard:network:053",
          "flashcard:network:079"
        ],
        "goldenRuleIds": [
          "golden-rule:network:33"
        ],
        "examTrapIds": [
          "exam-trap:network:17"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:stop-and-wait:arq-protocols:similar",
          "topic-link:stop-and-wait:sliding-window:similar"
        ],
        "relatedTopicIds": [
          "topic:network:arq-protocols",
          "topic:network:sliding-window"
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
        "id": "topic:network:go-back-n",
        "recordKey": "topic:network:go-back-n@1",
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
        "slug": "go-back-n",
        "title": {
          "fa": "Go-Back-N",
          "en": "Go-Back-N",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Go-Back-N",
        "shortDescription": "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود.",
        "summary": {
          "fa": "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود.",
          "en": "Go-Back-N",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:go-back-n:crash"
        ],
        "flashcardIds": [
          "flashcard:network:055",
          "flashcard:network:057",
          "flashcard:network:070"
        ],
        "goldenRuleIds": [
          "golden-rule:network:35",
          "golden-rule:network:37"
        ],
        "examTrapIds": [
          "exam-trap:network:08"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:go-back-n:sliding-window:similar",
          "topic-link:go-back-n:selective-repeat:similar"
        ],
        "relatedTopicIds": [
          "topic:network:sliding-window",
          "topic:network:selective-repeat"
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
        "id": "topic:network:selective-repeat",
        "recordKey": "topic:network:selective-repeat@1",
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
        "slug": "selective-repeat",
        "title": {
          "fa": "Selective Repeat",
          "en": "Selective Repeat",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Selective Repeat",
        "shortDescription": "فقط frameهای خراب دوباره ارسال می‌شوند.",
        "summary": {
          "fa": "فقط frameهای خراب دوباره ارسال می‌شوند.",
          "en": "Selective Repeat",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:selective-repeat:crash"
        ],
        "flashcardIds": [
          "flashcard:network:056",
          "flashcard:network:058",
          "flashcard:network:080"
        ],
        "goldenRuleIds": [
          "golden-rule:network:36",
          "golden-rule:network:38"
        ],
        "examTrapIds": [
          "exam-trap:network:18"
        ],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:selective-repeat:sliding-window:similar",
          "topic-link:selective-repeat:go-back-n:similar"
        ],
        "relatedTopicIds": [
          "topic:network:sliding-window",
          "topic:network:go-back-n"
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
        "id": "topic:network:common-app-protocols",
        "recordKey": "topic:network:common-app-protocols@1",
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
        "slug": "common-app-protocols",
        "title": {
          "fa": "پروتکل‌های کاربردی رایج",
          "en": "Common Application Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Common Application Protocols",
        "shortDescription": "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار.",
        "summary": {
          "fa": "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار.",
          "en": "Common Application Protocols",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "lessonIds": [
          "lesson:network:common-app-protocols:crash"
        ],
        "flashcardIds": [
          "flashcard:network:061"
        ],
        "goldenRuleIds": [
          "golden-rule:network:41"
        ],
        "examTrapIds": [],
        "relatedQuestionIds": [],
        "relatedTopicLinkIds": [
          "topic-link:common-app-protocols:ports-sockets:similar",
          "topic-link:common-app-protocols:dns:similar",
          "topic-link:common-app-protocols:http-https:similar"
        ],
        "relatedTopicIds": [
          "topic:network:ports-sockets",
          "topic:network:dns",
          "topic:network:http-https"
        ],
        "prerequisiteTopicIds": [],
        "difficulty": "easy",
        "importance": "unknown",
        "frequency": "unknown",
        "estimatedReadingMinutes": 5,
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
  app.register("content", "topicRegistry", { payload: payload, registrations: registrations });
})(window);
