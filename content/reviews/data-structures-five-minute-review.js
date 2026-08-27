(function registerDataStructuresFiveMinuteReview(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "data-structures:five-minute-review",
    "datasetType": "five-minute-reviews",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "five-minute-review:data-structures",
        "recordKey": "five-minute-review:data-structures@1",
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
        "subjectId": "subject:data-structures",
        "title": {
          "fa": "مرور پنج‌دقیقه‌ای ساختمان داده",
          "en": "Data Structures Five-Minute Review",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "items": [
          {
            "id": "ds-review-01",
            "text": {
              "fa": "Big-O gives an upper bound",
              "en": "Big-O gives an upper bound",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:asymptotic-analysis"
            ]
          },
          {
            "id": "ds-review-02",
            "text": {
              "fa": "Theta means tight asymptotic bound",
              "en": "Theta means tight asymptotic bound",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:asymptotic-analysis"
            ]
          },
          {
            "id": "ds-review-03",
            "text": {
              "fa": "Drop constants and lower-order terms",
              "en": "Drop constants and lower-order terms",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:asymptotic-analysis"
            ]
          },
          {
            "id": "ds-review-04",
            "text": {
              "fa": "Nested independent loops multiply",
              "en": "Nested independent loops multiply",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:asymptotic-analysis"
            ]
          },
          {
            "id": "ds-review-05",
            "text": {
              "fa": "Recursion must have a base case",
              "en": "Recursion must have a base case",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:recursion-analysis"
            ]
          },
          {
            "id": "ds-review-06",
            "text": {
              "fa": "Recursion depth is not always total work",
              "en": "Recursion depth is not always total work",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:recursion-analysis"
            ]
          },
          {
            "id": "ds-review-07",
            "text": {
              "fa": "Divide-and-conquer often gives aT(n/b)+f(n)",
              "en": "Divide-and-conquer often gives aT(n/b)+f(n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:divide-and-conquer"
            ]
          },
          {
            "id": "ds-review-08",
            "text": {
              "fa": "Array indexing is O(1)",
              "en": "Array indexing is O(1)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:arrays"
            ]
          },
          {
            "id": "ds-review-09",
            "text": {
              "fa": "Array middle insertion usually shifts elements",
              "en": "Array middle insertion usually shifts elements",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:arrays"
            ]
          },
          {
            "id": "ds-review-10",
            "text": {
              "fa": "Linked-list random access is O(n)",
              "en": "Linked-list random access is O(n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:linked-lists"
            ]
          },
          {
            "id": "ds-review-11",
            "text": {
              "fa": "Known-node linked-list insertion is O(1)",
              "en": "Known-node linked-list insertion is O(1)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:linked-lists"
            ]
          },
          {
            "id": "ds-review-12",
            "text": {
              "fa": "Stack means LIFO",
              "en": "Stack means LIFO",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:stack"
            ]
          },
          {
            "id": "ds-review-13",
            "text": {
              "fa": "Queue means FIFO",
              "en": "Queue means FIFO",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:queue"
            ]
          },
          {
            "id": "ds-review-14",
            "text": {
              "fa": "Circular queue uses modulo arithmetic",
              "en": "Circular queue uses modulo arithmetic",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:circular-queue"
            ]
          },
          {
            "id": "ds-review-15",
            "text": {
              "fa": "Deque supports both ends",
              "en": "Deque supports both ends",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:deque"
            ]
          },
          {
            "id": "ds-review-16",
            "text": {
              "fa": "Hash table average lookup is O(1)",
              "en": "Hash table average lookup is O(1)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:hash-tables"
            ]
          },
          {
            "id": "ds-review-17",
            "text": {
              "fa": "Hash table worst case can be O(n)",
              "en": "Hash table worst case can be O(n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:hash-tables"
            ]
          },
          {
            "id": "ds-review-18",
            "text": {
              "fa": "Load factor controls hash-table performance",
              "en": "Load factor controls hash-table performance",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:hash-tables"
            ]
          },
          {
            "id": "ds-review-19",
            "text": {
              "fa": "Chaining stores collisions in buckets",
              "en": "Chaining stores collisions in buckets",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:collision-resolution"
            ]
          },
          {
            "id": "ds-review-20",
            "text": {
              "fa": "Open addressing probes inside the table",
              "en": "Open addressing probes inside the table",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:collision-resolution"
            ]
          },
          {
            "id": "ds-review-21",
            "text": {
              "fa": "Linear probing can cluster",
              "en": "Linear probing can cluster",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:collision-resolution"
            ]
          },
          {
            "id": "ds-review-22",
            "text": {
              "fa": "Tree root has no parent",
              "en": "Tree root has no parent",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:tree-basics"
            ]
          },
          {
            "id": "ds-review-23",
            "text": {
              "fa": "Leaf has no child",
              "en": "Leaf has no child",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:tree-basics"
            ]
          },
          {
            "id": "ds-review-24",
            "text": {
              "fa": "Height and depth are different directions",
              "en": "Height and depth are different directions",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:tree-basics"
            ]
          },
          {
            "id": "ds-review-25",
            "text": {
              "fa": "Binary tree nodes have at most two children",
              "en": "Binary tree nodes have at most two children",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:binary-trees"
            ]
          },
          {
            "id": "ds-review-26",
            "text": {
              "fa": "Complete binary tree fills levels left to right",
              "en": "Complete binary tree fills levels left to right",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:binary-trees"
            ]
          },
          {
            "id": "ds-review-27",
            "text": {
              "fa": "Full binary tree nodes have zero or two children",
              "en": "Full binary tree nodes have zero or two children",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:binary-trees"
            ]
          },
          {
            "id": "ds-review-28",
            "text": {
              "fa": "BST inorder traversal is sorted",
              "en": "BST inorder traversal is sorted",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:bst"
            ]
          },
          {
            "id": "ds-review-29",
            "text": {
              "fa": "Skewed BST can degrade to O(n)",
              "en": "Skewed BST can degrade to O(n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:bst"
            ]
          },
          {
            "id": "ds-review-30",
            "text": {
              "fa": "AVL keeps height O(log n)",
              "en": "AVL keeps height O(log n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:avl"
            ]
          },
          {
            "id": "ds-review-31",
            "text": {
              "fa": "AVL rotation preserves BST order",
              "en": "AVL rotation preserves BST order",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:avl"
            ]
          },
          {
            "id": "ds-review-32",
            "text": {
              "fa": "Heap is a complete binary tree",
              "en": "Heap is a complete binary tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:heap"
            ]
          },
          {
            "id": "ds-review-33",
            "text": {
              "fa": "Heap is not a sorted tree",
              "en": "Heap is not a sorted tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:heap"
            ]
          },
          {
            "id": "ds-review-34",
            "text": {
              "fa": "Heap search for arbitrary key is not O(log n)",
              "en": "Heap search for arbitrary key is not O(log n)",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:heap"
            ]
          },
          {
            "id": "ds-review-35",
            "text": {
              "fa": "Priority queue removes by priority",
              "en": "Priority queue removes by priority",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:priority-queue"
            ]
          },
          {
            "id": "ds-review-36",
            "text": {
              "fa": "Trie lookup depends on key length",
              "en": "Trie lookup depends on key length",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:trie"
            ]
          },
          {
            "id": "ds-review-37",
            "text": {
              "fa": "Trie is strong for prefix queries",
              "en": "Trie is strong for prefix queries",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:trie"
            ]
          },
          {
            "id": "ds-review-38",
            "text": {
              "fa": "Adjacency matrix suits dense graphs",
              "en": "Adjacency matrix suits dense graphs",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:graph-representation"
            ]
          },
          {
            "id": "ds-review-39",
            "text": {
              "fa": "Adjacency list suits sparse graphs",
              "en": "Adjacency list suits sparse graphs",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:graph-representation"
            ]
          },
          {
            "id": "ds-review-40",
            "text": {
              "fa": "BFS uses a queue",
              "en": "BFS uses a queue",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:bfs"
            ]
          },
          {
            "id": "ds-review-41",
            "text": {
              "fa": "BFS finds unweighted shortest paths",
              "en": "BFS finds unweighted shortest paths",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:bfs"
            ]
          },
          {
            "id": "ds-review-42",
            "text": {
              "fa": "DFS uses recursion or a stack",
              "en": "DFS uses recursion or a stack",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:dfs"
            ]
          },
          {
            "id": "ds-review-43",
            "text": {
              "fa": "DFS finish times support topological sort",
              "en": "DFS finish times support topological sort",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:dfs"
            ]
          },
          {
            "id": "ds-review-44",
            "text": {
              "fa": "Topological sort requires a DAG",
              "en": "Topological sort requires a DAG",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:topological-sort"
            ]
          },
          {
            "id": "ds-review-45",
            "text": {
              "fa": "Cycle means no topological order",
              "en": "Cycle means no topological order",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:topological-sort"
            ]
          },
          {
            "id": "ds-review-46",
            "text": {
              "fa": "MST is not shortest path",
              "en": "MST is not shortest path",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:mst"
            ]
          },
          {
            "id": "ds-review-47",
            "text": {
              "fa": "MST has n-1 edges when graph is connected",
              "en": "MST has n-1 edges when graph is connected",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:mst"
            ]
          },
          {
            "id": "ds-review-48",
            "text": {
              "fa": "Kruskal sorts edges",
              "en": "Kruskal sorts edges",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:kruskal"
            ]
          },
          {
            "id": "ds-review-49",
            "text": {
              "fa": "Kruskal uses Union-Find to avoid cycles",
              "en": "Kruskal uses Union-Find to avoid cycles",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            },
            "sourceIds": [],
            "relatedAssetIds": [
              "topic:data-structures:kruskal"
            ]
          },
          {
            "id": "ds-review-50",
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
          "golden-rule:data-structures:01",
          "golden-rule:data-structures:02",
          "golden-rule:data-structures:03",
          "golden-rule:data-structures:04",
          "golden-rule:data-structures:05",
          "golden-rule:data-structures:06",
          "golden-rule:data-structures:07",
          "golden-rule:data-structures:08",
          "golden-rule:data-structures:09",
          "golden-rule:data-structures:10",
          "golden-rule:data-structures:11",
          "golden-rule:data-structures:12",
          "golden-rule:data-structures:13",
          "golden-rule:data-structures:14",
          "golden-rule:data-structures:15",
          "golden-rule:data-structures:16",
          "golden-rule:data-structures:17",
          "golden-rule:data-structures:18",
          "golden-rule:data-structures:19",
          "golden-rule:data-structures:20",
          "golden-rule:data-structures:21",
          "golden-rule:data-structures:22",
          "golden-rule:data-structures:23",
          "golden-rule:data-structures:24",
          "exam-trap:data-structures:01",
          "exam-trap:data-structures:02",
          "exam-trap:data-structures:03",
          "exam-trap:data-structures:04",
          "exam-trap:data-structures:05",
          "exam-trap:data-structures:06",
          "exam-trap:data-structures:07",
          "exam-trap:data-structures:08",
          "exam-trap:data-structures:09",
          "exam-trap:data-structures:10",
          "exam-trap:data-structures:11",
          "exam-trap:data-structures:12"
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
  app.register("content", "dataStructuresFiveMinuteReview", { payload: payload, registrations: registrations });
})(window);
