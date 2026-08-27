(function registerNetworkExamTraps(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "network:exam-traps",
    "datasetType": "exam-traps",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "exam-trap:network:01",
        "recordKey": "exam-trap:network:01@1",
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
        "topicIds": [
          "topic:network:flow-control"
        ],
        "title": {
          "fa": "Flow control vs congestion control",
          "en": "Flow control vs congestion control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "گیرنده کند است؛ پس ازدحام شبکه است.",
          "en": "Flow control vs congestion control",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "شباهت واژهٔ control گمراه‌کننده است.",
          "en": "شباهت واژهٔ control گمراه‌کننده است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Flow گیرنده را حفظ می‌کند؛ Congestion شبکه را.",
          "en": "Flow گیرنده را حفظ می‌کند؛ Congestion شبکه را.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "receiver → flow، network → congestion",
          "en": "receiver → flow، network → congestion",
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
        "id": "exam-trap:network:02",
        "recordKey": "exam-trap:network:02@1",
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
        "topicIds": [
          "topic:network:tcp-vs-udp"
        ],
        "title": {
          "fa": "TCP reliability vs UDP speed",
          "en": "TCP reliability vs UDP speed",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "UDP همیشه بهتر است چون سریع‌تر است.",
          "en": "TCP reliability vs UDP speed",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کم بودن overhead با reliability اشتباه می‌شود.",
          "en": "کم بودن overhead با reliability اشتباه می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "اگر تضمین، ترتیب یا retransmission لازم است TCP را ببین.",
          "en": "اگر تضمین، ترتیب یا retransmission لازم است TCP را ببین.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "reliable/ordered → TCP",
          "en": "reliable/ordered → TCP",
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
        "id": "exam-trap:network:03",
        "recordKey": "exam-trap:network:03@1",
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
        "topicIds": [
          "topic:network:switching-mac"
        ],
        "title": {
          "fa": "Switch vs router layers",
          "en": "Switch vs router layers",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دستگاه forwarding یعنی router.",
          "en": "Switch vs router layers",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو traffic را عبور می‌دهند.",
          "en": "هر دو traffic را عبور می‌دهند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Switch با MAC و frame؛ Router با IP و packet.",
          "en": "Switch با MAC و frame؛ Router با IP و packet.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "MAC/frame → switch",
          "en": "MAC/frame → switch",
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
        "id": "exam-trap:network:04",
        "recordKey": "exam-trap:network:04@1",
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
        "topicIds": [
          "topic:network:dns"
        ],
        "title": {
          "fa": "DNS UDP vs TCP exceptions",
          "en": "DNS UDP vs TCP exceptions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "DNS همیشه UDP است.",
          "en": "DNS UDP vs TCP exceptions",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "حفظ کردن یک جملهٔ مطلق آسان است.",
          "en": "حفظ کردن یک جملهٔ مطلق آسان است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "DNS معمولاً UDP است؛ TCP برای zone transfer یا پاسخ بزرگ ممکن است.",
          "en": "DNS معمولاً UDP است؛ TCP برای zone transfer یا پاسخ بزرگ ممکن است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "usually ≠ always",
          "en": "usually ≠ always",
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
        "id": "exam-trap:network:05",
        "recordKey": "exam-trap:network:05@1",
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
        "topicIds": [
          "topic:network:http-https"
        ],
        "title": {
          "fa": "HTTP statelessness vs persistent connections",
          "en": "HTTP statelessness vs persistent connections",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "اگر connection باز ماند پس stateful است.",
          "en": "HTTP statelessness vs persistent connections",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "Persistent connection با application state قاطی می‌شود.",
          "en": "Persistent connection با application state قاطی می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "HTTP می‌تواند connection را reuse کند ولی هر request مستقل است.",
          "en": "HTTP می‌تواند connection را reuse کند ولی هر request مستقل است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "connection reuse ≠ app state",
          "en": "connection reuse ≠ app state",
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
        "id": "exam-trap:network:06",
        "recordKey": "exam-trap:network:06@1",
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
        "topicIds": [
          "topic:network:subnetting-basics"
        ],
        "title": {
          "fa": "Network address vs first usable host",
          "en": "Network address vs first usable host",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "اولین آدرس subnet همان host اول است.",
          "en": "Network address vs first usable host",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "عدد اول بازه فریبنده است.",
          "en": "عدد اول بازه فریبنده است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Network address همهٔ host bits صفر است و معمولاً usable نیست.",
          "en": "Network address همهٔ host bits صفر است و معمولاً usable نیست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "all host bits 0 → network",
          "en": "all host bits 0 → network",
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
        "id": "exam-trap:network:07",
        "recordKey": "exam-trap:network:07@1",
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
        "topicIds": [
          "topic:network:subnetting-basics"
        ],
        "title": {
          "fa": "Broadcast address vs last usable host",
          "en": "Broadcast address vs last usable host",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "آخرین آدرس host آخر است.",
          "en": "Broadcast address vs last usable host",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "آخر بازه با آخرین host اشتباه می‌شود.",
          "en": "آخر بازه با آخرین host اشتباه می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Broadcast همهٔ host bits یک است و معمولاً usable نیست.",
          "en": "Broadcast همهٔ host bits یک است و معمولاً usable نیست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "all host bits 1 → broadcast",
          "en": "all host bits 1 → broadcast",
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
        "id": "exam-trap:network:08",
        "recordKey": "exam-trap:network:08@1",
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
        "topicIds": [
          "topic:network:go-back-n"
        ],
        "title": {
          "fa": "Go-Back-N vs Selective Repeat",
          "en": "Go-Back-N vs Selective Repeat",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو فقط frame خراب را دوباره می‌فرستند.",
          "en": "Go-Back-N vs Selective Repeat",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو sliding-window هستند.",
          "en": "هر دو sliding-window هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "GBN از خطا به بعد را می‌فرستد؛ SR فقط خراب/گمشده را.",
          "en": "GBN از خطا به بعد را می‌فرستد؛ SR فقط خراب/گمشده را.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "GBN = go back",
          "en": "GBN = go back",
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
        "id": "exam-trap:network:09",
        "recordKey": "exam-trap:network:09@1",
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
        "topicIds": [
          "topic:network:network-models"
        ],
        "title": {
          "fa": "OSI layer protocol confusion",
          "en": "OSI layer protocol confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "TCP را Network layer در نظر بگیر چون شبکه‌ای است.",
          "en": "OSI layer protocol confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام network کلی است.",
          "en": "نام network کلی است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "TCP/UDP در Transport هستند؛ IP در Network است.",
          "en": "TCP/UDP در Transport هستند؛ IP در Network است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "TCP/UDP → Transport",
          "en": "TCP/UDP → Transport",
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
        "id": "exam-trap:network:10",
        "recordKey": "exam-trap:network:10@1",
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
        "topicIds": [
          "topic:network:error-detection"
        ],
        "title": {
          "fa": "Error detection vs correction",
          "en": "Error detection vs correction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "CRC خطا را خودش اصلاح می‌کند.",
          "en": "Error detection vs correction",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "قدرت detection با correction اشتباه می‌شود.",
          "en": "قدرت detection با correction اشتباه می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Parity/Checksum/CRC برای detection هستند؛ correction نیازمند مکانیزم دیگر است.",
          "en": "Parity/Checksum/CRC برای detection هستند؛ correction نیازمند مکانیزم دیگر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "detect ≠ correct",
          "en": "detect ≠ correct",
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
        "id": "exam-trap:network:11",
        "recordKey": "exam-trap:network:11@1",
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
        "topicIds": [
          "topic:network:arp-icmp"
        ],
        "title": {
          "fa": "ARP scope",
          "en": "ARP scope",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "ARP از routerهای دور MAC مقصد نهایی را می‌یابد.",
          "en": "ARP scope",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "MAC مقصد نهایی جذاب است.",
          "en": "MAC مقصد نهایی جذاب است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "ARP برای next hop در شبکهٔ محلی است.",
          "en": "ARP برای next hop در شبکهٔ محلی است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "ARP local next-hop",
          "en": "ARP local next-hop",
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
        "id": "exam-trap:network:12",
        "recordKey": "exam-trap:network:12@1",
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
        "topicIds": [
          "topic:network:routing-fundamentals"
        ],
        "title": {
          "fa": "Longest-prefix match",
          "en": "Longest-prefix match",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "کوچک‌ترین metric همیشه برنده است.",
          "en": "Longest-prefix match",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "metric مهم است اما بعد از match.",
          "en": "metric مهم است اما بعد از match.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "ابتدا longest matching prefix انتخاب می‌شود، سپس tieها بررسی می‌شوند.",
          "en": "ابتدا longest matching prefix انتخاب می‌شود، سپس tieها بررسی می‌شوند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "longest prefix first",
          "en": "longest prefix first",
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
        "id": "exam-trap:network:13",
        "recordKey": "exam-trap:network:13@1",
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
        "topicIds": [
          "topic:network:subnetting-basics"
        ],
        "title": {
          "fa": "CIDR host count",
          "en": "CIDR host count",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "برای /n تعداد host همان n است.",
          "en": "CIDR host count",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "عدد prefix جلوی چشم است.",
          "en": "عدد prefix جلوی چشم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "host bits برابر 32-n است؛ تعداد آدرس 2^(32-n).",
          "en": "host bits برابر 32-n است؛ تعداد آدرس 2^(32-n).",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "host bits = 32-prefix",
          "en": "host bits = 32-prefix",
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
        "id": "exam-trap:network:14",
        "recordKey": "exam-trap:network:14@1",
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
        "topicIds": [
          "topic:network:ports-sockets"
        ],
        "title": {
          "fa": "Port vs IP",
          "en": "Port vs IP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "port دستگاه را مشخص می‌کند.",
          "en": "Port vs IP",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "socket کامل با port دیده می‌شود.",
          "en": "socket کامل با port دیده می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "IP host را مشخص می‌کند؛ port فرایند/سرویس را.",
          "en": "IP host را مشخص می‌کند؛ port فرایند/سرویس را.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "IP host, port process",
          "en": "IP host, port process",
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
        "id": "exam-trap:network:15",
        "recordKey": "exam-trap:network:15@1",
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
        "topicIds": [
          "topic:network:http-https"
        ],
        "title": {
          "fa": "HTTPS identity",
          "en": "HTTPS identity",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "HTTPS یک پروتکل کاملاً جدا از HTTP است.",
          "en": "HTTPS identity",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام جداگانه دارد.",
          "en": "نام جداگانه دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "HTTPS یعنی HTTP روی TLS با port رایج 443.",
          "en": "HTTPS یعنی HTTP روی TLS با port رایج 443.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "HTTPS = HTTP + TLS",
          "en": "HTTPS = HTTP + TLS",
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
        "id": "exam-trap:network:16",
        "recordKey": "exam-trap:network:16@1",
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
        "topicIds": [
          "topic:network:error-detection"
        ],
        "title": {
          "fa": "Checksum strength",
          "en": "Checksum strength",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Checksum همهٔ خطاها را قطعی پیدا می‌کند.",
          "en": "Checksum strength",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کلمهٔ checksum مطمئن به نظر می‌رسد.",
          "en": "کلمهٔ checksum مطمئن به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "هیچ detection ساده‌ای تضمین همهٔ خطاها نیست؛ CRC معمولاً قوی‌تر است.",
          "en": "هیچ detection ساده‌ای تضمین همهٔ خطاها نیست؛ CRC معمولاً قوی‌تر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "CRC stronger than simple checksum",
          "en": "CRC stronger than simple checksum",
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
        "id": "exam-trap:network:17",
        "recordKey": "exam-trap:network:17@1",
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
        "topicIds": [
          "topic:network:stop-and-wait"
        ],
        "title": {
          "fa": "Stop-and-Wait throughput",
          "en": "Stop-and-Wait throughput",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "سادگی یعنی بهترین عملکرد.",
          "en": "Stop-and-Wait throughput",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کم بودن حالت‌ها جذاب است.",
          "en": "کم بودن حالت‌ها جذاب است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Stop-and-Wait روی لینک با delay بالا throughput ضعیف دارد.",
          "en": "Stop-and-Wait روی لینک با delay بالا throughput ضعیف دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "one outstanding → low utilization",
          "en": "one outstanding → low utilization",
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
        "id": "exam-trap:network:18",
        "recordKey": "exam-trap:network:18@1",
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
        "topicIds": [
          "topic:network:selective-repeat"
        ],
        "title": {
          "fa": "Selective Repeat sequence space",
          "en": "Selective Repeat sequence space",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "SR مثل GBN فقط به اندازهٔ پنجره sequence لازم دارد.",
          "en": "Selective Repeat sequence space",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو window دارند.",
          "en": "هر دو window دارند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "SR به فضای sequence بزرگ‌تر نیاز دارد تا ابهام frame قدیمی/جدید کم شود.",
          "en": "SR به فضای sequence بزرگ‌تر نیاز دارد تا ابهام frame قدیمی/جدید کم شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "SR buffers → stricter sequence",
          "en": "SR buffers → stricter sequence",
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
        "id": "exam-trap:network:19",
        "recordKey": "exam-trap:network:19@1",
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
        "topicIds": [
          "topic:network:congestion-control"
        ],
        "title": {
          "fa": "TCP flow vs TCP congestion",
          "en": "TCP flow vs TCP congestion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر چیزی در TCP مربوط به congestion است.",
          "en": "TCP flow vs TCP congestion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو در TCP دیده می‌شوند.",
          "en": "هر دو در TCP دیده می‌شوند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "receive window مربوط به flow است؛ congestion window مربوط به شبکه.",
          "en": "receive window مربوط به flow است؛ congestion window مربوط به شبکه.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "rwnd receiver, cwnd network",
          "en": "rwnd receiver, cwnd network",
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
        "id": "exam-trap:network:20",
        "recordKey": "exam-trap:network:20@1",
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
        "topicIds": [
          "topic:network:encapsulation-pdu"
        ],
        "title": {
          "fa": "Frame vs packet",
          "en": "Frame vs packet",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر بسته‌ای packet نام دارد.",
          "en": "Frame vs packet",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "packet در زبان عمومی زیاد استفاده می‌شود.",
          "en": "packet در زبان عمومی زیاد استفاده می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "در مدل امتحانی: Data Link frame و Network packet است.",
          "en": "در مدل امتحانی: Data Link frame و Network packet است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "layer decides PDU name",
          "en": "layer decides PDU name",
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
        "id": "exam-trap:network:21",
        "recordKey": "exam-trap:network:21@1",
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
        "topicIds": [
          "topic:network:dns"
        ],
        "title": {
          "fa": "DNS record confusion",
          "en": "DNS record confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "CNAME همان IP را مستقیم می‌دهد.",
          "en": "DNS record confusion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر رکورد DNS شبیه mapping است.",
          "en": "هر رکورد DNS شبیه mapping است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "A/AAAA آدرس می‌دهند؛ CNAME alias می‌دهد.",
          "en": "A/AAAA آدرس می‌دهند؛ CNAME alias می‌دهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "A/AAAA address, CNAME alias",
          "en": "A/AAAA address, CNAME alias",
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
        "id": "exam-trap:network:22",
        "recordKey": "exam-trap:network:22@1",
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
        "topicIds": [
          "topic:network:routing-fundamentals"
        ],
        "title": {
          "fa": "Dynamic routing algorithm mix",
          "en": "Dynamic routing algorithm mix",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Distance vector همان Dijkstra است.",
          "en": "Dynamic routing algorithm mix",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو shortest path هستند.",
          "en": "هر دو shortest path هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Distance vector حس Bellman-Ford؛ Link state حس Dijkstra دارد.",
          "en": "Distance vector حس Bellman-Ford؛ Link state حس Dijkstra دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "DV BF, LS Dijkstra",
          "en": "DV BF, LS Dijkstra",
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
  app.register("content", "networkExamTraps", { payload: payload, registrations: registrations });
})(window);
