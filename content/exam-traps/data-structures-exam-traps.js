(function registerDataStructuresExamTraps(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "data-structures:exam-traps",
    "datasetType": "exam-traps",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "exam-trap:data-structures:01",
        "recordKey": "exam-trap:data-structures:01@1",
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
        "topicIds": [
          "topic:data-structures:asymptotic-analysis"
        ],
        "title": {
          "fa": "O vs Theta",
          "en": "O vs Theta",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "O را همیشه دقیق‌ترین مرتبه می‌گیرند.",
          "en": "O vs Theta",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "حد بالا با tight bound قاطی می‌شود.",
          "en": "حد بالا با tight bound قاطی می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Theta tight است؛ O فقط upper bound است.",
          "en": "Theta tight است؛ O فقط upper bound است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "tight → Theta",
          "en": "tight → Theta",
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
        "id": "exam-trap:data-structures:02",
        "recordKey": "exam-trap:data-structures:02@1",
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
        "topicIds": [
          "topic:data-structures:recursion-analysis"
        ],
        "title": {
          "fa": "Recursive depth",
          "en": "Recursive depth",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "عمق recursion همان تعداد کل callهاست.",
          "en": "Recursive depth",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو از recursion tree می‌آیند.",
          "en": "هر دو از recursion tree می‌آیند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Depth طول یک مسیر است؛ total calls کل nodeهاست.",
          "en": "Depth طول یک مسیر است؛ total calls کل nodeهاست.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "path vs tree",
          "en": "path vs tree",
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
        "id": "exam-trap:data-structures:03",
        "recordKey": "exam-trap:data-structures:03@1",
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
        "topicIds": [
          "topic:data-structures:arrays"
        ],
        "title": {
          "fa": "Array insertion",
          "en": "Array insertion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "دسترسی O(1) یعنی insertion هم O(1) است.",
          "en": "Array insertion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "همهٔ عملیات array یکی فرض می‌شود.",
          "en": "همهٔ عملیات array یکی فرض می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "وسط آرایه shift می‌خواهد.",
          "en": "وسط آرایه shift می‌خواهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "middle insert → shift",
          "en": "middle insert → shift",
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
        "id": "exam-trap:data-structures:04",
        "recordKey": "exam-trap:data-structures:04@1",
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
        "topicIds": [
          "topic:data-structures:linked-lists"
        ],
        "title": {
          "fa": "Linked-list deletion",
          "en": "Linked-list deletion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "حذف از linked list همیشه O(1) است.",
          "en": "Linked-list deletion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "pointer deletion ساده دیده می‌شود.",
          "en": "pointer deletion ساده دیده می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "اگر node قبلی/خود node را نداری، باید جست‌وجو کنی.",
          "en": "اگر node قبلی/خود node را نداری، باید جست‌وجو کنی.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "known node matters",
          "en": "known node matters",
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
        "id": "exam-trap:data-structures:05",
        "recordKey": "exam-trap:data-structures:05@1",
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
        "topicIds": [
          "topic:data-structures:stack"
        ],
        "title": {
          "fa": "Stack vs Queue",
          "en": "Stack vs Queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر دو فقط collection ساده‌اند.",
          "en": "Stack vs Queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام‌ها نزدیک‌اند.",
          "en": "نام‌ها نزدیک‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Stack LIFO است؛ Queue FIFO است.",
          "en": "Stack LIFO است؛ Queue FIFO است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "LIFO vs FIFO",
          "en": "LIFO vs FIFO",
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
        "id": "exam-trap:data-structures:06",
        "recordKey": "exam-trap:data-structures:06@1",
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
        "topicIds": [
          "topic:data-structures:circular-queue"
        ],
        "title": {
          "fa": "Circular queue full",
          "en": "Circular queue full",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "front == rear همیشه empty است.",
          "en": "Circular queue full",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "یک حالت ظاهری مشترک است.",
          "en": "یک حالت ظاهری مشترک است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "بسته به design، full هم می‌تواند ظاهراً مشابه شود؛ count یا empty slot لازم است.",
          "en": "بسته به design، full هم می‌تواند ظاهراً مشابه شود؛ count یا empty slot لازم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "track count/slot",
          "en": "track count/slot",
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
        "id": "exam-trap:data-structures:07",
        "recordKey": "exam-trap:data-structures:07@1",
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
        "topicIds": [
          "topic:data-structures:hash-tables"
        ],
        "title": {
          "fa": "Hash worst case",
          "en": "Hash worst case",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Hash table همیشه O(1) است.",
          "en": "Hash worst case",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "میانگین با تضمین اشتباه می‌شود.",
          "en": "میانگین با تضمین اشتباه می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "collision بد می‌تواند lookup را O(n) کند.",
          "en": "collision بد می‌تواند lookup را O(n) کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "average, not always",
          "en": "average, not always",
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
        "id": "exam-trap:data-structures:08",
        "recordKey": "exam-trap:data-structures:08@1",
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
        "topicIds": [
          "topic:data-structures:collision-resolution"
        ],
        "title": {
          "fa": "Open addressing deletion",
          "en": "Open addressing deletion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "حذف خانه مثل خالی‌کردن معمولی است.",
          "en": "Open addressing deletion",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "delete ساده به نظر می‌رسد.",
          "en": "delete ساده به نظر می‌رسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "probe chain خراب می‌شود؛ tombstone لازم است.",
          "en": "probe chain خراب می‌شود؛ tombstone لازم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "delete needs marker",
          "en": "delete needs marker",
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
        "id": "exam-trap:data-structures:09",
        "recordKey": "exam-trap:data-structures:09@1",
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
        "topicIds": [
          "topic:data-structures:tree-basics"
        ],
        "title": {
          "fa": "Height vs Depth",
          "en": "Height vs Depth",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "height و depth یکی هستند.",
          "en": "Height vs Depth",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو طول مسیرند.",
          "en": "هر دو طول مسیرند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Depth از root به node؛ height از node به leaf.",
          "en": "Depth از root به node؛ height از node به leaf.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "root-down vs leaf-down",
          "en": "root-down vs leaf-down",
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
        "id": "exam-trap:data-structures:10",
        "recordKey": "exam-trap:data-structures:10@1",
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
        "topicIds": [
          "topic:data-structures:binary-trees"
        ],
        "title": {
          "fa": "Complete vs Full",
          "en": "Complete vs Full",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "complete یعنی هر node صفر یا دو child دارد.",
          "en": "Complete vs Full",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "اصطلاح‌ها شبیه‌اند.",
          "en": "اصطلاح‌ها شبیه‌اند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Full صفر/دو child؛ complete levelها را چپ به راست پر می‌کند.",
          "en": "Full صفر/دو child؛ complete levelها را چپ به راست پر می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "full children, complete levels",
          "en": "full children, complete levels",
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
        "id": "exam-trap:data-structures:11",
        "recordKey": "exam-trap:data-structures:11@1",
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
        "topicIds": [
          "topic:data-structures:bst"
        ],
        "title": {
          "fa": "BST balanced",
          "en": "BST balanced",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر BST عملیات O(log n) دارد.",
          "en": "BST balanced",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "ساختار درختی همیشه log تصور می‌شود.",
          "en": "ساختار درختی همیشه log تصور می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "BST skewed می‌تواند O(n) شود.",
          "en": "BST skewed می‌تواند O(n) شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "balanced matters",
          "en": "balanced matters",
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
        "id": "exam-trap:data-structures:12",
        "recordKey": "exam-trap:data-structures:12@1",
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
        "topicIds": [
          "topic:data-structures:heap"
        ],
        "title": {
          "fa": "Heap vs BST",
          "en": "Heap vs BST",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Heap inorder خروجی sorted می‌دهد.",
          "en": "Heap vs BST",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو binary tree هستند.",
          "en": "هر دو binary tree هستند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Heap فقط parent-child order دارد؛ BST left/root/right order دارد.",
          "en": "Heap فقط parent-child order دارد؛ BST left/root/right order دارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "heap not sorted",
          "en": "heap not sorted",
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
        "id": "exam-trap:data-structures:13",
        "recordKey": "exam-trap:data-structures:13@1",
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
        "topicIds": [
          "topic:data-structures:heap"
        ],
        "title": {
          "fa": "Heap search",
          "en": "Heap search",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "در heap هر lookup دلخواه O(log n) است.",
          "en": "Heap search",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "remove min/max سریع است.",
          "en": "remove min/max سریع است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "فقط min/max تضمین سریع دارد؛ search دلخواه معمولاً O(n).",
          "en": "فقط min/max تضمین سریع دارد؛ search دلخواه معمولاً O(n).",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "only root is special",
          "en": "only root is special",
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
        "id": "exam-trap:data-structures:14",
        "recordKey": "exam-trap:data-structures:14@1",
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
        "topicIds": [
          "topic:data-structures:priority-queue"
        ],
        "title": {
          "fa": "Priority Queue FIFO",
          "en": "Priority Queue FIFO",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "priority queue همان queue معمولی است.",
          "en": "Priority Queue FIFO",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "نام queue گمراه می‌کند.",
          "en": "نام queue گمراه می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "خروج بر اساس priority است، نه arrival order.",
          "en": "خروج بر اساس priority است، نه arrival order.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "priority beats arrival",
          "en": "priority beats arrival",
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
        "id": "exam-trap:data-structures:15",
        "recordKey": "exam-trap:data-structures:15@1",
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
        "topicIds": [
          "topic:data-structures:trie"
        ],
        "title": {
          "fa": "Trie complexity",
          "en": "Trie complexity",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Trie lookup به تعداد کل کلیدها وابسته است.",
          "en": "Trie complexity",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "درخت بودن این حس را می‌دهد.",
          "en": "درخت بودن این حس را می‌دهد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "معمولاً به طول key وابسته است.",
          "en": "معمولاً به طول key وابسته است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "length of key",
          "en": "length of key",
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
        "id": "exam-trap:data-structures:16",
        "recordKey": "exam-trap:data-structures:16@1",
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
        "topicIds": [
          "topic:data-structures:graph-representation"
        ],
        "title": {
          "fa": "Matrix vs List",
          "en": "Matrix vs List",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "adjacency matrix همیشه بهتر است.",
          "en": "Matrix vs List",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "lookup edge سریع است.",
          "en": "lookup edge سریع است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "برای sparse graph حافظهٔ matrix زیاد است.",
          "en": "برای sparse graph حافظهٔ matrix زیاد است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "dense → matrix",
          "en": "dense → matrix",
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
        "id": "exam-trap:data-structures:17",
        "recordKey": "exam-trap:data-structures:17@1",
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
        "topicIds": [
          "topic:data-structures:bfs"
        ],
        "title": {
          "fa": "BFS weighted",
          "en": "BFS weighted",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "BFS کوتاه‌ترین مسیر weighted را هم می‌دهد.",
          "en": "BFS weighted",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "کوتاه‌ترین مسیر با BFS در ذهن مانده.",
          "en": "کوتاه‌ترین مسیر با BFS در ذهن مانده.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "BFS فقط برای unweighted یا وزن برابر است.",
          "en": "BFS فقط برای unweighted یا وزن برابر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "unweighted only",
          "en": "unweighted only",
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
        "id": "exam-trap:data-structures:18",
        "recordKey": "exam-trap:data-structures:18@1",
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
        "topicIds": [
          "topic:data-structures:dfs"
        ],
        "title": {
          "fa": "DFS shortest",
          "en": "DFS shortest",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "DFS کوتاه‌ترین مسیر را پیدا می‌کند.",
          "en": "DFS shortest",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "به هدف ممکن است زود برسد.",
          "en": "به هدف ممکن است زود برسد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "DFS تضمین shortest ندارد.",
          "en": "DFS تضمین shortest ندارد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "DFS explores depth",
          "en": "DFS explores depth",
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
        "id": "exam-trap:data-structures:19",
        "recordKey": "exam-trap:data-structures:19@1",
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
        "topicIds": [
          "topic:data-structures:topological-sort"
        ],
        "title": {
          "fa": "Topological cycle",
          "en": "Topological cycle",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "هر directed graph یک topological order دارد.",
          "en": "Topological cycle",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "مرتب‌سازی عمومی تصور می‌شود.",
          "en": "مرتب‌سازی عمومی تصور می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "cycle وجود order را ناممکن می‌کند.",
          "en": "cycle وجود order را ناممکن می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "DAG only",
          "en": "DAG only",
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
        "id": "exam-trap:data-structures:20",
        "recordKey": "exam-trap:data-structures:20@1",
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
        "topicIds": [
          "topic:data-structures:mst"
        ],
        "title": {
          "fa": "MST vs Shortest Path",
          "en": "MST vs Shortest Path",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "MST مسیر کوتاه از source می‌دهد.",
          "en": "MST vs Shortest Path",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "هر دو از وزن edge استفاده می‌کنند.",
          "en": "هر دو از وزن edge استفاده می‌کنند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "MST مجموع اتصال کل گراف را کمینه می‌کند، نه فاصلهٔ source.",
          "en": "MST مجموع اتصال کل گراف را کمینه می‌کند، نه فاصلهٔ source.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "tree total vs path",
          "en": "tree total vs path",
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
        "id": "exam-trap:data-structures:21",
        "recordKey": "exam-trap:data-structures:21@1",
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
        "topicIds": [
          "topic:data-structures:kruskal"
        ],
        "title": {
          "fa": "Kruskal choice",
          "en": "Kruskal choice",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Kruskal از یک رأس رشد می‌کند.",
          "en": "Kruskal choice",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "با Prim قاطی می‌شود.",
          "en": "با Prim قاطی می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Kruskal edgeهای global sorted را بررسی می‌کند.",
          "en": "Kruskal edgeهای global sorted را بررسی می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "sorted edges",
          "en": "sorted edges",
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
        "id": "exam-trap:data-structures:22",
        "recordKey": "exam-trap:data-structures:22@1",
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
        "topicIds": [
          "topic:data-structures:prim"
        ],
        "title": {
          "fa": "Prim choice",
          "en": "Prim choice",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Prim هر بار کمترین edge کل graph را می‌گیرد.",
          "en": "Prim choice",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "با Kruskal قاطی می‌شود.",
          "en": "با Kruskal قاطی می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "Prim فقط edge crossing frontier را انتخاب می‌کند.",
          "en": "Prim فقط edge crossing frontier را انتخاب می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "frontier edge",
          "en": "frontier edge",
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
        "id": "exam-trap:data-structures:23",
        "recordKey": "exam-trap:data-structures:23@1",
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
        "topicIds": [
          "topic:data-structures:dijkstra"
        ],
        "title": {
          "fa": "Dijkstra negative",
          "en": "Dijkstra negative",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Dijkstra با وزن منفی هم درست است.",
          "en": "Dijkstra negative",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "الگوریتم shortest path است.",
          "en": "الگوریتم shortest path است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "فرض وزن غیرمنفی لازم است.",
          "en": "فرض وزن غیرمنفی لازم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "no negative",
          "en": "no negative",
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
        "id": "exam-trap:data-structures:24",
        "recordKey": "exam-trap:data-structures:24@1",
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
        "topicIds": [
          "topic:data-structures:floyd-warshall"
        ],
        "title": {
          "fa": "Floyd loop",
          "en": "Floyd loop",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Floyd فقط یک Dijkstra تکراری است.",
          "en": "Floyd loop",
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
          "fa": "Floyd DP all-pairs با واسطه k است و O(n^3).",
          "en": "Floyd DP all-pairs با واسطه k است و O(n^3).",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "k as intermediate",
          "en": "k as intermediate",
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
        "id": "exam-trap:data-structures:25",
        "recordKey": "exam-trap:data-structures:25@1",
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
        "topicIds": [
          "topic:data-structures:sorting-comparison"
        ],
        "title": {
          "fa": "Stable sort",
          "en": "Stable sort",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "stable یعنی حافظهٔ کم مصرف می‌کند.",
          "en": "Stable sort",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "واژه stable مبهم است.",
          "en": "واژه stable مبهم است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "stable ترتیب نسبی equal-keyها را حفظ می‌کند.",
          "en": "stable ترتیب نسبی equal-keyها را حفظ می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "equal order",
          "en": "equal order",
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
        "id": "exam-trap:data-structures:26",
        "recordKey": "exam-trap:data-structures:26@1",
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
        "topicIds": [
          "topic:data-structures:sorting-comparison"
        ],
        "title": {
          "fa": "Quicksort guarantee",
          "en": "Quicksort guarantee",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "Quicksort همیشه O(n log n) است.",
          "en": "Quicksort guarantee",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "average-case معروف‌تر است.",
          "en": "average-case معروف‌تر است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "worst-case آن O(n^2) است.",
          "en": "worst-case آن O(n^2) است.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "average not worst",
          "en": "average not worst",
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
        "id": "exam-trap:data-structures:27",
        "recordKey": "exam-trap:data-structures:27@1",
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
        "topicIds": [
          "topic:data-structures:binary-search"
        ],
        "title": {
          "fa": "Binary search precondition",
          "en": "Binary search precondition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "binary search روی هر آرایه‌ای کار می‌کند.",
          "en": "Binary search precondition",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "اسم search گمراه می‌کند.",
          "en": "اسم search گمراه می‌کند.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "فضا باید sorted یا monotonic باشد.",
          "en": "فضا باید sorted یا monotonic باشد.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "needs monotonic",
          "en": "needs monotonic",
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
        "id": "exam-trap:data-structures:28",
        "recordKey": "exam-trap:data-structures:28@1",
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
        "topicIds": [
          "topic:data-structures:binary-search"
        ],
        "title": {
          "fa": "Off-by-one binary search",
          "en": "Off-by-one binary search",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "trap": {
          "fa": "mid درست کافی است.",
          "en": "Off-by-one binary search",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "wrongThinking": {
          "fa": "فرمول mid دیده می‌شود.",
          "en": "فرمول mid دیده می‌شود.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "correctThinking": {
          "fa": "به update boundary و termination condition دقت کن.",
          "en": "به update boundary و termination condition دقت کن.",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "shortcut": {
          "fa": "boundary is the trap",
          "en": "boundary is the trap",
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
  app.register("content", "dataStructuresExamTraps", { payload: payload, registrations: registrations });
})(window);
