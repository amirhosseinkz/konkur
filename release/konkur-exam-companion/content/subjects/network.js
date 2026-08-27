(function registerNetworkSubject(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "network:subjects",
    "datasetType": "subjects",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "subject:network",
        "recordKey": "subject:network@1",
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
        "slug": "network",
        "title": {
          "fa": "شبکه‌های کامپیوتری",
          "en": "Computer Networks",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Computer Networks",
        "summary": {
          "fa": "مرور سریع و امتحان‌محور شبکه با تمرکز بر تشخیص گزینه‌های پرتله.",
          "en": "Exam-focused Computer Networks crash course.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "topicIds": [
          "topic:network:network-models",
          "topic:network:encapsulation-pdu",
          "topic:network:tcp-vs-udp",
          "topic:network:ports-sockets",
          "topic:network:http-https",
          "topic:network:dns",
          "topic:network:ipv4-addressing",
          "topic:network:subnetting-basics",
          "topic:network:arp-icmp",
          "topic:network:routing-fundamentals",
          "topic:network:switching-mac",
          "topic:network:flow-control",
          "topic:network:congestion-control",
          "topic:network:error-detection",
          "topic:network:arq-protocols",
          "topic:network:sliding-window",
          "topic:network:stop-and-wait",
          "topic:network:go-back-n",
          "topic:network:selective-repeat",
          "topic:network:common-app-protocols"
        ],
        "reviewOrder": [
          "topic:network:network-models",
          "topic:network:encapsulation-pdu",
          "topic:network:tcp-vs-udp",
          "topic:network:ports-sockets",
          "topic:network:http-https",
          "topic:network:dns",
          "topic:network:ipv4-addressing",
          "topic:network:subnetting-basics",
          "topic:network:arp-icmp",
          "topic:network:routing-fundamentals",
          "topic:network:switching-mac",
          "topic:network:flow-control",
          "topic:network:congestion-control",
          "topic:network:error-detection",
          "topic:network:arq-protocols",
          "topic:network:sliding-window",
          "topic:network:stop-and-wait",
          "topic:network:go-back-n",
          "topic:network:selective-repeat",
          "topic:network:common-app-protocols"
        ],
        "fiveMinuteReviewId": "five-minute-review:network",
        "goldenRuleCollectionId": "golden-rule:network:collection",
        "estimatedStudyMinutes": 114,
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
  app.register("content", "networkSubject", { payload: payload, registrations: registrations });
})(window);
