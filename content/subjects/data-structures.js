(function registerDataStructuresSubject(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "data-structures:subjects",
    "datasetType": "subjects",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "subject:data-structures",
        "recordKey": "subject:data-structures@1",
        "schemaVersion": 1,
        "version": 1,
        "verificationStatus": "expert-reviewed",
        "publicationStatus": "published",
        "educationalApproval": {
          "status": "approved",
          "reviewerRole": "exam-editor",
          "reviewedAt": "2026-07-15T16:00:00.000Z",
          "reviewContractVersion": 1
        },
        "sourceIds": [],
        "primarySourceId": null,
        "sourcePage": null,
        "sourceUrl": null,
        "provenanceNotes": "Expert-curated Data Structures and Algorithms content. Not derived from verified question mappings.",
        "createdAt": "2026-07-15T16:00:00.000Z",
        "updatedAt": "2026-07-15T16:00:00.000Z",
        "slug": "data-structures",
        "title": {
          "fa": "ساختمان داده و الگوریتم",
          "en": "Data Structures and Algorithms",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "englishTitle": "Data Structures and Algorithms",
        "summary": {
          "fa": "مرور سریع و امتحان‌محور ساختمان داده و الگوریتم با تمرکز بر complexity، ساختارهای کلاسیک، graph و sorting.",
          "en": "Exam-focused Data Structures and Algorithms module.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "status": "active",
        "topicIds": [
          "topic:data-structures:asymptotic-analysis",
          "topic:data-structures:recursion-analysis",
          "topic:data-structures:arrays",
          "topic:data-structures:linked-lists",
          "topic:data-structures:stack",
          "topic:data-structures:queue",
          "topic:data-structures:circular-queue",
          "topic:data-structures:deque",
          "topic:data-structures:hash-tables",
          "topic:data-structures:collision-resolution",
          "topic:data-structures:tree-basics",
          "topic:data-structures:binary-trees",
          "topic:data-structures:bst",
          "topic:data-structures:avl",
          "topic:data-structures:heap",
          "topic:data-structures:priority-queue",
          "topic:data-structures:trie",
          "topic:data-structures:graph-representation",
          "topic:data-structures:bfs",
          "topic:data-structures:dfs",
          "topic:data-structures:topological-sort",
          "topic:data-structures:mst",
          "topic:data-structures:kruskal",
          "topic:data-structures:prim",
          "topic:data-structures:shortest-path",
          "topic:data-structures:dijkstra",
          "topic:data-structures:floyd-warshall",
          "topic:data-structures:sorting-comparison",
          "topic:data-structures:divide-and-conquer",
          "topic:data-structures:binary-search"
        ],
        "reviewOrder": [
          "topic:data-structures:asymptotic-analysis",
          "topic:data-structures:recursion-analysis",
          "topic:data-structures:arrays",
          "topic:data-structures:linked-lists",
          "topic:data-structures:stack",
          "topic:data-structures:queue",
          "topic:data-structures:circular-queue",
          "topic:data-structures:deque",
          "topic:data-structures:hash-tables",
          "topic:data-structures:collision-resolution",
          "topic:data-structures:tree-basics",
          "topic:data-structures:binary-trees",
          "topic:data-structures:bst",
          "topic:data-structures:avl",
          "topic:data-structures:heap",
          "topic:data-structures:priority-queue",
          "topic:data-structures:trie",
          "topic:data-structures:graph-representation",
          "topic:data-structures:bfs",
          "topic:data-structures:dfs",
          "topic:data-structures:topological-sort",
          "topic:data-structures:mst",
          "topic:data-structures:kruskal",
          "topic:data-structures:prim",
          "topic:data-structures:shortest-path",
          "topic:data-structures:dijkstra",
          "topic:data-structures:floyd-warshall",
          "topic:data-structures:sorting-comparison",
          "topic:data-structures:divide-and-conquer",
          "topic:data-structures:binary-search"
        ],
        "fiveMinuteReviewId": "five-minute-review:data-structures",
        "goldenRuleCollectionId": "golden-rule:data-structures:collection",
        "estimatedStudyMinutes": 144,
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
  app.register("content", "dataStructuresSubject", { payload: payload, registrations: registrations });
})(window);
