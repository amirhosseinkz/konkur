(function registerNetworkFiveMinuteReview(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "network:five-minute-review",
    "datasetType": "five-minute-reviews",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "five-minute-review:network",
        "recordKey": "five-minute-review:network@1",
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
        "title": {
          "fa": "مرور پنج‌دقیقه‌ای شبکه",
          "en": "Network Five-Minute Review",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "items": [
          {
            "id": "network-review-01",
            "text": {
              "fa": "Reliable delivery → TCP first",
              "en": "Reliable delivery → TCP first",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:tcp-vs-udp"
            ]
          },
          {
            "id": "network-review-02",
            "text": {
              "fa": "Ordered delivery → TCP",
              "en": "Ordered delivery → TCP",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:tcp-vs-udp"
            ]
          },
          {
            "id": "network-review-03",
            "text": {
              "fa": "Connectionless and low overhead → UDP",
              "en": "Connectionless and low overhead → UDP",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:tcp-vs-udp"
            ]
          },
          {
            "id": "network-review-04",
            "text": {
              "fa": "DNS query → usually UDP port 53",
              "en": "DNS query → usually UDP port 53",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:dns"
            ]
          },
          {
            "id": "network-review-05",
            "text": {
              "fa": "DNS zone transfer or large response → TCP can appear",
              "en": "DNS zone transfer or large response → TCP can appear",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:dns"
            ]
          },
          {
            "id": "network-review-06",
            "text": {
              "fa": "HTTPS → HTTP protected by TLS",
              "en": "HTTPS → HTTP protected by TLS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:http-https"
            ]
          },
          {
            "id": "network-review-07",
            "text": {
              "fa": "HTTP is stateless even with persistent connections",
              "en": "HTTP is stateless even with persistent connections",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:http-https"
            ]
          },
          {
            "id": "network-review-08",
            "text": {
              "fa": "GET is usually safe/idempotent; POST usually is not",
              "en": "GET is usually safe/idempotent; POST usually is not",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:http-https"
            ]
          },
          {
            "id": "network-review-09",
            "text": {
              "fa": "Flow control → receiver protection",
              "en": "Flow control → receiver protection",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:flow-control"
            ]
          },
          {
            "id": "network-review-10",
            "text": {
              "fa": "Congestion control → network protection",
              "en": "Congestion control → network protection",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:congestion-control"
            ]
          },
          {
            "id": "network-review-11",
            "text": {
              "fa": "Router → Network layer",
              "en": "Router → Network layer",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:routing-fundamentals"
            ]
          },
          {
            "id": "network-review-12",
            "text": {
              "fa": "Switch → Data-link layer",
              "en": "Switch → Data-link layer",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:switching-mac"
            ]
          },
          {
            "id": "network-review-13",
            "text": {
              "fa": "Hub/repeater → Physical layer",
              "en": "Hub/repeater → Physical layer",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-14",
            "text": {
              "fa": "Physical → Bits",
              "en": "Physical → Bits",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-15",
            "text": {
              "fa": "Data Link → Frames",
              "en": "Data Link → Frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-16",
            "text": {
              "fa": "Network → Packets",
              "en": "Network → Packets",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-17",
            "text": {
              "fa": "Transport → Segments/Datagrams",
              "en": "Transport → Segments/Datagrams",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-18",
            "text": {
              "fa": "Application → Messages/Data",
              "en": "Application → Messages/Data",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:network-models"
            ]
          },
          {
            "id": "network-review-19",
            "text": {
              "fa": "Longest matching prefix → routing decision",
              "en": "Longest matching prefix → routing decision",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:routing-fundamentals"
            ]
          },
          {
            "id": "network-review-20",
            "text": {
              "fa": "Static routing is configured; dynamic routing learns",
              "en": "Static routing is configured; dynamic routing learns",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:routing-fundamentals"
            ]
          },
          {
            "id": "network-review-21",
            "text": {
              "fa": "Distance vector → Bellman-Ford intuition",
              "en": "Distance vector → Bellman-Ford intuition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:routing-fundamentals"
            ]
          },
          {
            "id": "network-review-22",
            "text": {
              "fa": "Link state → Dijkstra intuition",
              "en": "Link state → Dijkstra intuition",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:routing-fundamentals"
            ]
          },
          {
            "id": "network-review-23",
            "text": {
              "fa": "ARP maps IPv4 address to MAC on local network",
              "en": "ARP maps IPv4 address to MAC on local network",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:arp-icmp"
            ]
          },
          {
            "id": "network-review-24",
            "text": {
              "fa": "ICMP reports control/error information",
              "en": "ICMP reports control/error information",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:arp-icmp"
            ]
          },
          {
            "id": "network-review-25",
            "text": {
              "fa": "Network address → all host bits zero",
              "en": "Network address → all host bits zero",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:ipv4-addressing"
            ]
          },
          {
            "id": "network-review-26",
            "text": {
              "fa": "Broadcast address → all host bits one",
              "en": "Broadcast address → all host bits one",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:ipv4-addressing"
            ]
          },
          {
            "id": "network-review-27",
            "text": {
              "fa": "/24 → 256 addresses, commonly 254 usable",
              "en": "/24 → 256 addresses, commonly 254 usable",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:subnetting-basics"
            ]
          },
          {
            "id": "network-review-28",
            "text": {
              "fa": "Same subnet → same network after mask",
              "en": "Same subnet → same network after mask",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:subnetting-basics"
            ]
          },
          {
            "id": "network-review-29",
            "text": {
              "fa": "CRC → polynomial-based error detection",
              "en": "CRC → polynomial-based error detection",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:error-detection"
            ]
          },
          {
            "id": "network-review-30",
            "text": {
              "fa": "Parity detects simple odd-bit error patterns",
              "en": "Parity detects simple odd-bit error patterns",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:error-detection"
            ]
          },
          {
            "id": "network-review-31",
            "text": {
              "fa": "Checksum is detection, not correction",
              "en": "Checksum is detection, not correction",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:error-detection"
            ]
          },
          {
            "id": "network-review-32",
            "text": {
              "fa": "ARQ → ACK + timeout + retransmission",
              "en": "ARQ → ACK + timeout + retransmission",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:arq-protocols"
            ]
          },
          {
            "id": "network-review-33",
            "text": {
              "fa": "Stop-and-Wait → one outstanding frame",
              "en": "Stop-and-Wait → one outstanding frame",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:stop-and-wait"
            ]
          },
          {
            "id": "network-review-34",
            "text": {
              "fa": "Sliding Window → multiple outstanding frames",
              "en": "Sliding Window → multiple outstanding frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:sliding-window"
            ]
          },
          {
            "id": "network-review-35",
            "text": {
              "fa": "Go-Back-N retransmits from the missing frame onward",
              "en": "Go-Back-N retransmits from the missing frame onward",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:go-back-n"
            ]
          },
          {
            "id": "network-review-36",
            "text": {
              "fa": "Selective Repeat retransmits only missing/bad frames",
              "en": "Selective Repeat retransmits only missing/bad frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:selective-repeat"
            ]
          },
          {
            "id": "network-review-37",
            "text": {
              "fa": "GBN receiver usually discards out-of-order frames",
              "en": "GBN receiver usually discards out-of-order frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:go-back-n"
            ]
          },
          {
            "id": "network-review-38",
            "text": {
              "fa": "Selective Repeat receiver can buffer out-of-order frames",
              "en": "Selective Repeat receiver can buffer out-of-order frames",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:selective-repeat"
            ]
          },
          {
            "id": "network-review-39",
            "text": {
              "fa": "Socket identity → IP + port + protocol",
              "en": "Socket identity → IP + port + protocol",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:ports-sockets"
            ]
          },
          {
            "id": "network-review-40",
            "text": {
              "fa": "Port identifies application process, not host",
              "en": "Port identifies application process, not host",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:ports-sockets"
            ]
          },
          {
            "id": "network-review-41",
            "text": {
              "fa": "SMTP 25, HTTP 80, HTTPS 443, DNS 53",
              "en": "SMTP 25, HTTP 80, HTTPS 443, DNS 53",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:common-app-protocols"
            ]
          },
          {
            "id": "network-review-42",
            "text": {
              "fa": "Queue is the usual model for packet buffering",
              "en": "Queue is the usual model for packet buffering",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:congestion-control"
            ]
          },
          {
            "id": "network-review-43",
            "text": {
              "fa": "Frequency: Unknown برای همهٔ topicها تا زمان mapping رسمی.",
              "en": "Frequency unknown until verified mapping.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": []
          },
          {
            "id": "network-review-44",
            "text": {
              "fa": "Network question relationships have not yet been verified.",
              "en": "Network question relationships have not yet been verified.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": []
          },
          {
            "id": "network-review-45",
            "text": {
              "fa": "گزینه‌های مطلق مثل always/never را در DNS و UDP با احتیاط بررسی کن.",
              "en": "Beware absolutes in DNS/UDP questions.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:network:dns"
            ]
          }
        ],
        "assetReferences": [
          "golden-rule:network:01",
          "golden-rule:network:02",
          "golden-rule:network:03",
          "golden-rule:network:04",
          "golden-rule:network:05",
          "golden-rule:network:06",
          "golden-rule:network:07",
          "golden-rule:network:08",
          "golden-rule:network:09",
          "golden-rule:network:10",
          "golden-rule:network:11",
          "golden-rule:network:12",
          "golden-rule:network:13",
          "golden-rule:network:14",
          "golden-rule:network:15",
          "golden-rule:network:16",
          "golden-rule:network:17",
          "golden-rule:network:18",
          "golden-rule:network:19",
          "golden-rule:network:20",
          "exam-trap:network:01",
          "exam-trap:network:02",
          "exam-trap:network:03",
          "exam-trap:network:04",
          "exam-trap:network:05",
          "exam-trap:network:06",
          "exam-trap:network:07",
          "exam-trap:network:08"
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
  app.register("content", "networkFiveMinuteReview", { payload: payload, registrations: registrations });
})(window);
