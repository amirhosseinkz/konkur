(function registerDataStructuresCrashCourse(global) {
  "use strict";
  var app = global.KonkurApp;
  var payload = {
  "dataset": {
    "datasetId": "data-structures:lessons",
    "datasetType": "lessons",
    "schemaVersion": 1,
    "version": 1,
    "testOnly": false,
    "records": [
      {
        "id": "lesson:data-structures:asymptotic-analysis:crash",
        "recordKey": "lesson:data-structures:asymptotic-analysis:crash@1",
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
        "topicId": "topic:data-structures:asymptotic-analysis",
        "title": {
          "fa": "تحلیل مجانبی - Crash Course",
          "en": "Asymptotic Analysis Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "Big-O، Theta و Omega را برای حذف جزئیات و مقایسهٔ رشد به کار ببر.",
          "en": "Asymptotic Analysis",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "Big-O، Theta و Omega را برای حذف جزئیات و مقایسهٔ رشد به کار ببر. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "Big-O، Theta و Omega را برای حذف جزئیات و مقایسهٔ رشد به کار ببر.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "O حد بالا، Omega حد پایین، Theta حد tight است. ثابت‌ها و جمله‌های کوچک‌تر را حذف کن؛ nested loopها را مستقیم بشمار.",
              "en": "Asymptotic Analysis",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:01",
          "golden-rule:data-structures:02",
          "golden-rule:data-structures:03",
          "golden-rule:data-structures:04"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:01"
        ],
        "flashcardIds": [
          "flashcard:data-structures:001",
          "flashcard:data-structures:002",
          "flashcard:data-structures:013",
          "flashcard:data-structures:014",
          "flashcard:data-structures:015",
          "flashcard:data-structures:016"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:recursion-analysis:crash",
          "lesson:data-structures:sorting-comparison:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:recursion-analysis:crash",
        "recordKey": "lesson:data-structures:recursion-analysis:crash@1",
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
        "topicId": "topic:data-structures:recursion-analysis",
        "title": {
          "fa": "بازگشت و رابطهٔ بازگشتی - Crash Course",
          "en": "Recursion and Recurrences Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "base case، recurrence و stack depth را سریع تشخیص بده.",
          "en": "Recursion and Recurrences",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "base case، recurrence و stack depth را سریع تشخیص بده. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "base case، recurrence و stack depth را سریع تشخیص بده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "اول base case، بعد تعداد زیرمسئله و اندازهٔ زیرمسئله را پیدا کن. recursion depth جدا از total work است.",
              "en": "Recursion and Recurrences",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:05",
          "golden-rule:data-structures:06"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:02"
        ],
        "flashcardIds": [
          "flashcard:data-structures:017",
          "flashcard:data-structures:018",
          "flashcard:data-structures:077",
          "flashcard:data-structures:105"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:asymptotic-analysis:crash",
          "lesson:data-structures:divide-and-conquer:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:arrays:crash",
        "recordKey": "lesson:data-structures:arrays:crash@1",
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
        "topicId": "topic:data-structures:arrays",
        "title": {
          "fa": "آرایه - Crash Course",
          "en": "Arrays Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "دسترسی O(1)، insertion/deletion پرهزینه وسط آرایه و locality خوب.",
          "en": "Arrays",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "دسترسی O(1)، insertion/deletion پرهزینه وسط آرایه و locality خوب. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "دسترسی O(1)، insertion/deletion پرهزینه وسط آرایه و locality خوب.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "indexing مستقیم O(1) است؛ insert/delete وسط نیازمند shift است. sorted array برای binary search خوب است.",
              "en": "Arrays",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:08",
          "golden-rule:data-structures:09"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:03"
        ],
        "flashcardIds": [
          "flashcard:data-structures:020",
          "flashcard:data-structures:021",
          "flashcard:data-structures:078",
          "flashcard:data-structures:106"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:binary-search:crash",
          "lesson:data-structures:sorting-comparison:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:linked-lists:crash",
        "recordKey": "lesson:data-structures:linked-lists:crash@1",
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
        "topicId": "topic:data-structures:linked-lists",
        "title": {
          "fa": "لیست پیوندی - Crash Course",
          "en": "Linked Lists Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "حذف/درج با pointer ارزان است ولی دسترسی تصادفی نداری.",
          "en": "Linked Lists",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "حذف/درج با pointer ارزان است ولی دسترسی تصادفی نداری. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "حذف/درج با pointer ارزان است ولی دسترسی تصادفی نداری.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "اگر node/pointer را داری، حذف/درج O(1) است؛ اگر باید node را پیدا کنی، scan همچنان O(n) است.",
              "en": "Linked Lists",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:10",
          "golden-rule:data-structures:11"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:04"
        ],
        "flashcardIds": [
          "flashcard:data-structures:022",
          "flashcard:data-structures:023",
          "flashcard:data-structures:079",
          "flashcard:data-structures:107"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:stack:crash",
          "lesson:data-structures:queue:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:stack:crash",
        "recordKey": "lesson:data-structures:stack:crash@1",
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
        "topicId": "topic:data-structures:stack",
        "title": {
          "fa": "پشته - Crash Course",
          "en": "Stack Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "LIFO؛ recursion، expression parsing و DFS iterative را سریع یادآوری کن.",
          "en": "Stack",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "LIFO؛ recursion، expression parsing و DFS iterative را سریع یادآوری کن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "LIFO؛ recursion، expression parsing و DFS iterative را سریع یادآوری کن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Stack یعنی آخرین ورودی، اولین خروجی. هرجا backtracking/recursion دیدی stack را یادآوری کن.",
              "en": "Stack",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:12"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:05"
        ],
        "flashcardIds": [
          "flashcard:data-structures:003",
          "flashcard:data-structures:024",
          "flashcard:data-structures:080",
          "flashcard:data-structures:108"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:linked-lists:crash",
          "lesson:data-structures:dfs:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:queue:crash",
        "recordKey": "lesson:data-structures:queue:crash@1",
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
        "topicId": "topic:data-structures:queue",
        "title": {
          "fa": "صف - Crash Course",
          "en": "Queue Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "FIFO؛ scheduling، BFS و producer-consumer intuition.",
          "en": "Queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 3,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "FIFO؛ scheduling، BFS و producer-consumer intuition. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "FIFO؛ scheduling، BFS و producer-consumer intuition.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Queue یعنی اولین ورودی، اولین خروجی. هرجا level یا shortest unweighted دیدی queue را انتخاب کن.",
              "en": "Queue",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:13"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:data-structures:004",
          "flashcard:data-structures:025",
          "flashcard:data-structures:109"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:circular-queue:crash",
          "lesson:data-structures:bfs:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:circular-queue:crash",
        "recordKey": "lesson:data-structures:circular-queue:crash@1",
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
        "topicId": "topic:data-structures:circular-queue",
        "title": {
          "fa": "صف حلقوی - Crash Course",
          "en": "Circular Queue Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "front/rear با modulo؛ full/empty را اشتباه نگیر.",
          "en": "Circular Queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "front/rear با modulo؛ full/empty را اشتباه نگیر. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "front/rear با modulo؛ full/empty را اشتباه نگیر.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "rear/front با modulo حرکت می‌کنند. دام اصلی تشخیص full و empty با یک خانهٔ خالی یا count است.",
              "en": "Circular Queue",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:14"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:06"
        ],
        "flashcardIds": [
          "flashcard:data-structures:026",
          "flashcard:data-structures:081",
          "flashcard:data-structures:110"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:queue:crash",
          "lesson:data-structures:deque:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:deque:crash",
        "recordKey": "lesson:data-structures:deque:crash@1",
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
        "topicId": "topic:data-structures:deque",
        "title": {
          "fa": "صف دوطرفه - Crash Course",
          "en": "Deque Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "insert/delete از هر دو سر؛ sliding window و double-ended scheduling.",
          "en": "Deque",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "insert/delete از هر دو سر؛ sliding window و double-ended scheduling. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "insert/delete از هر دو سر؛ sliding window و double-ended scheduling.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Deque از دو سر عمل می‌کند؛ نه الزاماً priority دارد نه sort می‌کند.",
              "en": "Deque",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:15"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:data-structures:027",
          "flashcard:data-structures:111"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:queue:crash",
          "lesson:data-structures:circular-queue:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:hash-tables:crash",
        "recordKey": "lesson:data-structures:hash-tables:crash@1",
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
        "topicId": "topic:data-structures:hash-tables",
        "title": {
          "fa": "جدول درهم‌سازی - Crash Course",
          "en": "Hash Tables Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "میانگین O(1)، وابسته به hash خوب، load factor و collision policy.",
          "en": "Hash Tables",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "میانگین O(1)، وابسته به hash خوب، load factor و collision policy. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "میانگین O(1)، وابسته به hash خوب، load factor و collision policy.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "میانگین O(1) فقط با hash مناسب و load factor کنترل‌شده است؛ بدترین حالت می‌تواند O(n) شود.",
              "en": "Hash Tables",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:16",
          "golden-rule:data-structures:17",
          "golden-rule:data-structures:18"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:07"
        ],
        "flashcardIds": [
          "flashcard:data-structures:028",
          "flashcard:data-structures:029",
          "flashcard:data-structures:030",
          "flashcard:data-structures:082",
          "flashcard:data-structures:112"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:collision-resolution:crash",
          "lesson:data-structures:arrays:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:collision-resolution:crash",
        "recordKey": "lesson:data-structures:collision-resolution:crash@1",
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
        "topicId": "topic:data-structures:collision-resolution",
        "title": {
          "fa": "رفع برخورد - Crash Course",
          "en": "Collision Resolution Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "chaining در برابر open addressing؛ probing و clustering دام اصلی است.",
          "en": "Collision Resolution",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "chaining در برابر open addressing؛ probing و clustering دام اصلی است. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "chaining در برابر open addressing؛ probing و clustering دام اصلی است.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Chaining لیست bucket دارد؛ open addressing داخل همان جدول probe می‌کند و deletion marker می‌خواهد.",
              "en": "Collision Resolution",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:19",
          "golden-rule:data-structures:20",
          "golden-rule:data-structures:21"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:08"
        ],
        "flashcardIds": [
          "flashcard:data-structures:031",
          "flashcard:data-structures:032",
          "flashcard:data-structures:033",
          "flashcard:data-structures:083",
          "flashcard:data-structures:113"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:hash-tables:crash",
          "lesson:data-structures:asymptotic-analysis:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:tree-basics:crash",
        "recordKey": "lesson:data-structures:tree-basics:crash@1",
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
        "topicId": "topic:data-structures:tree-basics",
        "title": {
          "fa": "مبانی درخت - Crash Course",
          "en": "Tree Basics Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "root، leaf، degree، height/depth و traversalها را سریع تفکیک کن.",
          "en": "Tree Basics",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "root، leaf، degree، height/depth و traversalها را سریع تفکیک کن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "root، leaf، degree، height/depth و traversalها را سریع تفکیک کن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "height معمولاً طول مسیر تا دورترین leaf است؛ depth فاصله از root. traversal orderها را حفظ کن.",
              "en": "Tree Basics",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:22",
          "golden-rule:data-structures:23",
          "golden-rule:data-structures:24"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:09"
        ],
        "flashcardIds": [
          "flashcard:data-structures:034",
          "flashcard:data-structures:035",
          "flashcard:data-structures:036",
          "flashcard:data-structures:084",
          "flashcard:data-structures:114"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:binary-trees:crash",
          "lesson:data-structures:trie:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:binary-trees:crash",
        "recordKey": "lesson:data-structures:binary-trees:crash@1",
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
        "topicId": "topic:data-structures:binary-trees",
        "title": {
          "fa": "درخت دودویی - Crash Course",
          "en": "Binary Trees Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "هر node حداکثر دو فرزند؛ complete/full/perfect را قاطی نکن.",
          "en": "Binary Trees",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "هر node حداکثر دو فرزند؛ complete/full/perfect را قاطی نکن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "هر node حداکثر دو فرزند؛ complete/full/perfect را قاطی نکن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Complete تا سطح آخر پر است؛ full یعنی هر node صفر یا دو child دارد؛ perfect یعنی همهٔ leafها هم‌سطح‌اند.",
              "en": "Binary Trees",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:25",
          "golden-rule:data-structures:26",
          "golden-rule:data-structures:27"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:10"
        ],
        "flashcardIds": [
          "flashcard:data-structures:037",
          "flashcard:data-structures:038",
          "flashcard:data-structures:039",
          "flashcard:data-structures:085",
          "flashcard:data-structures:115"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:tree-basics:crash",
          "lesson:data-structures:bst:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:bst:crash",
        "recordKey": "lesson:data-structures:bst:crash@1",
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
        "topicId": "topic:data-structures:bst",
        "title": {
          "fa": "درخت جست‌وجوی دودویی - Crash Course",
          "en": "Binary Search Tree Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "left < root < right؛ inorder مرتب می‌دهد ولی skew بدترین حالت می‌سازد.",
          "en": "Binary Search Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "left < root < right؛ inorder مرتب می‌دهد ولی skew بدترین حالت می‌سازد. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "left < root < right؛ inorder مرتب می‌دهد ولی skew بدترین حالت می‌سازد.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Inorder در BST خروجی sorted می‌دهد. اگر tree skew شود عملیات‌ها O(n) می‌شوند.",
              "en": "Binary Search Tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:28",
          "golden-rule:data-structures:29"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:11"
        ],
        "flashcardIds": [
          "flashcard:data-structures:007",
          "flashcard:data-structures:040",
          "flashcard:data-structures:041",
          "flashcard:data-structures:086",
          "flashcard:data-structures:116"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:binary-trees:crash",
          "lesson:data-structures:avl:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:avl:crash",
        "recordKey": "lesson:data-structures:avl:crash@1",
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
        "topicId": "topic:data-structures:avl",
        "title": {
          "fa": "درخت AVL - Crash Course",
          "en": "AVL Tree Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "BST متوازن با balance factor و rotation برای نگه‌داشتن O(log n).",
          "en": "AVL Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "BST متوازن با balance factor و rotation برای نگه‌داشتن O(log n). هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "BST متوازن با balance factor و rotation برای نگه‌داشتن O(log n).",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Balance factor اختلاف ارتفاع چپ و راست است. rotation فقط برای ترمیم balance و حفظ BST order است.",
              "en": "AVL Tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:30",
          "golden-rule:data-structures:31"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:data-structures:042",
          "flashcard:data-structures:043",
          "flashcard:data-structures:117"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:bst:crash",
          "lesson:data-structures:heap:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:heap:crash",
        "recordKey": "lesson:data-structures:heap:crash@1",
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
        "topicId": "topic:data-structures:heap",
        "title": {
          "fa": "هیپ - Crash Course",
          "en": "Heap Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "complete tree با heap-order؛ min/max سریع، search عمومی سریع نیست.",
          "en": "Heap",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "complete tree با heap-order؛ min/max سریع، search عمومی سریع نیست. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "complete tree با heap-order؛ min/max سریع، search عمومی سریع نیست.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Heap فقط parent-child order دارد، نه ordering کامل مثل BST. min/max سریع است، search arbitrary سریع نیست.",
              "en": "Heap",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:32",
          "golden-rule:data-structures:33",
          "golden-rule:data-structures:34"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:12",
          "exam-trap:data-structures:13"
        ],
        "flashcardIds": [
          "flashcard:data-structures:008",
          "flashcard:data-structures:044",
          "flashcard:data-structures:045",
          "flashcard:data-structures:046",
          "flashcard:data-structures:087",
          "flashcard:data-structures:088"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:priority-queue:crash",
          "lesson:data-structures:sorting-comparison:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:priority-queue:crash",
        "recordKey": "lesson:data-structures:priority-queue:crash@1",
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
        "topicId": "topic:data-structures:priority-queue",
        "title": {
          "fa": "صف اولویت - Crash Course",
          "en": "Priority Queue Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "بالاترین/پایین‌ترین priority زودتر خارج می‌شود؛ معمولاً با heap.",
          "en": "Priority Queue",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "بالاترین/پایین‌ترین priority زودتر خارج می‌شود؛ معمولاً با heap. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "بالاترین/پایین‌ترین priority زودتر خارج می‌شود؛ معمولاً با heap.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Priority Queue ترتیب خروج را با priority تعیین می‌کند؛ FIFO نیست مگر priorityها برابر و policy چنین باشد.",
              "en": "Priority Queue",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:35"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:14"
        ],
        "flashcardIds": [
          "flashcard:data-structures:047",
          "flashcard:data-structures:089",
          "flashcard:data-structures:119"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:heap:crash",
          "lesson:data-structures:dijkstra:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:trie:crash",
        "recordKey": "lesson:data-structures:trie:crash@1",
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
        "topicId": "topic:data-structures:trie",
        "title": {
          "fa": "Trie - Crash Course",
          "en": "Trie Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "درخت prefix برای stringها؛ زمان وابسته به طول key نه تعداد keyها.",
          "en": "Trie",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "درخت prefix برای stringها؛ زمان وابسته به طول key نه تعداد keyها. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "درخت prefix برای stringها؛ زمان وابسته به طول key نه تعداد keyها.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "هزینهٔ lookup معمولاً O(length of key) است. prefix مشترک حافظه را reuse می‌کند.",
              "en": "Trie",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:36",
          "golden-rule:data-structures:37"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:15"
        ],
        "flashcardIds": [
          "flashcard:data-structures:048",
          "flashcard:data-structures:049",
          "flashcard:data-structures:090",
          "flashcard:data-structures:120"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:tree-basics:crash",
          "lesson:data-structures:hash-tables:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:graph-representation:crash",
        "recordKey": "lesson:data-structures:graph-representation:crash@1",
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
        "topicId": "topic:data-structures:graph-representation",
        "title": {
          "fa": "نمایش گراف - Crash Course",
          "en": "Graph Representation Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "adjacency matrix در برابر list؛ dense/sparse را اول تشخیص بده.",
          "en": "Graph Representation",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "adjacency matrix در برابر list؛ dense/sparse را اول تشخیص بده. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "adjacency matrix در برابر list؛ dense/sparse را اول تشخیص بده.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Matrix برای dense و edge lookup سریع؛ list برای sparse و traversal کم‌هزینه‌تر.",
              "en": "Graph Representation",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:38",
          "golden-rule:data-structures:39"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:16"
        ],
        "flashcardIds": [
          "flashcard:data-structures:050",
          "flashcard:data-structures:051",
          "flashcard:data-structures:091"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:bfs:crash",
          "lesson:data-structures:dfs:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:bfs:crash",
        "recordKey": "lesson:data-structures:bfs:crash@1",
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
        "topicId": "topic:data-structures:bfs",
        "title": {
          "fa": "جست‌وجوی سطحی - Crash Course",
          "en": "BFS Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "Queue → level order و کوتاه‌ترین مسیر در گراف بدون وزن.",
          "en": "BFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "Queue → level order و کوتاه‌ترین مسیر در گراف بدون وزن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "Queue → level order و کوتاه‌ترین مسیر در گراف بدون وزن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "BFS با queue لایه‌لایه می‌رود و در گراف unweighted کوتاه‌ترین تعداد edge را می‌دهد.",
              "en": "BFS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:40",
          "golden-rule:data-structures:41"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:17"
        ],
        "flashcardIds": [
          "flashcard:data-structures:005",
          "flashcard:data-structures:052",
          "flashcard:data-structures:053",
          "flashcard:data-structures:092"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:queue:crash",
          "lesson:data-structures:graph-representation:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:dfs:crash",
        "recordKey": "lesson:data-structures:dfs:crash@1",
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
        "topicId": "topic:data-structures:dfs",
        "title": {
          "fa": "جست‌وجوی عمقی - Crash Course",
          "en": "DFS Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "Stack/recursion → عمق، component، cycle و topological intuition.",
          "en": "DFS",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "Stack/recursion → عمق، component، cycle و topological intuition. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "Stack/recursion → عمق، component، cycle و topological intuition.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "DFS با recursion/stack عمیق می‌رود؛ finish time برای topological sort مهم است.",
              "en": "DFS",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:42",
          "golden-rule:data-structures:43"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:18"
        ],
        "flashcardIds": [
          "flashcard:data-structures:006",
          "flashcard:data-structures:054",
          "flashcard:data-structures:055",
          "flashcard:data-structures:093"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:stack:crash",
          "lesson:data-structures:topological-sort:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:topological-sort:crash",
        "recordKey": "lesson:data-structures:topological-sort:crash@1",
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
        "topicId": "topic:data-structures:topological-sort",
        "title": {
          "fa": "مرتب‌سازی توپولوژیک - Crash Course",
          "en": "Topological Sort Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "فقط برای DAG؛ dependency order با DFS finish یا indegree queue.",
          "en": "Topological Sort",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "فقط برای DAG؛ dependency order با DFS finish یا indegree queue. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "فقط برای DAG؛ dependency order با DFS finish یا indegree queue.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "اگر cycle باشد topological order وجود ندارد. indegree صفرها را queue کن یا DFS finish را معکوس کن.",
              "en": "Topological Sort",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:44",
          "golden-rule:data-structures:45"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:19"
        ],
        "flashcardIds": [
          "flashcard:data-structures:010",
          "flashcard:data-structures:056",
          "flashcard:data-structures:057",
          "flashcard:data-structures:094"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:dfs:crash",
          "lesson:data-structures:graph-representation:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:mst:crash",
        "recordKey": "lesson:data-structures:mst:crash@1",
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
        "topicId": "topic:data-structures:mst",
        "title": {
          "fa": "درخت پوشای کمینه - Crash Course",
          "en": "Minimum Spanning Tree Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "اتصال همهٔ رأس‌ها با کمترین وزن و بدون cycle.",
          "en": "Minimum Spanning Tree",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "اتصال همهٔ رأس‌ها با کمترین وزن و بدون cycle. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "اتصال همهٔ رأس‌ها با کمترین وزن و بدون cycle.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "MST shortest path نیست. هدف اتصال همهٔ رأس‌ها با n-1 edge و کمترین مجموع وزن است.",
              "en": "Minimum Spanning Tree",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:46",
          "golden-rule:data-structures:47"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:20"
        ],
        "flashcardIds": [
          "flashcard:data-structures:012",
          "flashcard:data-structures:058",
          "flashcard:data-structures:059",
          "flashcard:data-structures:095"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:kruskal:crash",
          "lesson:data-structures:prim:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:kruskal:crash",
        "recordKey": "lesson:data-structures:kruskal:crash@1",
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
        "topicId": "topic:data-structures:kruskal",
        "title": {
          "fa": "کروسکال - Crash Course",
          "en": "Kruskal Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "edgeهای مرتب‌شده + Union-Find؛ cycle را رد کن.",
          "en": "Kruskal",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "edgeهای مرتب‌شده + Union-Find؛ cycle را رد کن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "edgeهای مرتب‌شده + Union-Find؛ cycle را رد کن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Edgeها را sort کن؛ هر edge که cycle بسازد رد می‌شود. Union-Find کلمهٔ کلیدی است.",
              "en": "Kruskal",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:48",
          "golden-rule:data-structures:49"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:21"
        ],
        "flashcardIds": [
          "flashcard:data-structures:060",
          "flashcard:data-structures:061",
          "flashcard:data-structures:096"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:mst:crash",
          "lesson:data-structures:prim:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:prim:crash",
        "recordKey": "lesson:data-structures:prim:crash@1",
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
        "topicId": "topic:data-structures:prim",
        "title": {
          "fa": "پریم - Crash Course",
          "en": "Prim Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "از یک رأس شروع کن و ارزان‌ترین edge خروجی frontier را بگیر.",
          "en": "Prim",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "از یک رأس شروع کن و ارزان‌ترین edge خروجی frontier را بگیر. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "از یک رأس شروع کن و ارزان‌ترین edge خروجی frontier را بگیر.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "از یک component رشد می‌کند؛ بهترین edge از frontier را انتخاب می‌کند. heap کمک می‌کند.",
              "en": "Prim",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:50",
          "golden-rule:data-structures:51"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:22"
        ],
        "flashcardIds": [
          "flashcard:data-structures:062",
          "flashcard:data-structures:063",
          "flashcard:data-structures:097"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:mst:crash",
          "lesson:data-structures:priority-queue:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:shortest-path:crash",
        "recordKey": "lesson:data-structures:shortest-path:crash@1",
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
        "topicId": "topic:data-structures:shortest-path",
        "title": {
          "fa": "کوتاه‌ترین مسیر - Crash Course",
          "en": "Shortest Path Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "unweighted با BFS؛ weighted nonnegative با Dijkstra؛ all-pairs با Floyd.",
          "en": "Shortest Path",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "unweighted با BFS؛ weighted nonnegative با Dijkstra؛ all-pairs با Floyd. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "unweighted با BFS؛ weighted nonnegative با Dijkstra؛ all-pairs با Floyd.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "نوع وزن را اول بخوان: بدون وزن BFS، غیرمنفی Dijkstra، all-pairs Floyd-Warshall.",
              "en": "Shortest Path",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:52"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:data-structures:064"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:bfs:crash",
          "lesson:data-structures:dijkstra:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:dijkstra:crash",
        "recordKey": "lesson:data-structures:dijkstra:crash@1",
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
        "topicId": "topic:data-structures:dijkstra",
        "title": {
          "fa": "دایکسترا - Crash Course",
          "en": "Dijkstra Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "برای وزن غیرمنفی؛ priority queue فاصلهٔ کمینهٔ موقت را قطعی می‌کند.",
          "en": "Dijkstra",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "برای وزن غیرمنفی؛ priority queue فاصلهٔ کمینهٔ موقت را قطعی می‌کند. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "برای وزن غیرمنفی؛ priority queue فاصلهٔ کمینهٔ موقت را قطعی می‌کند.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "با وزن منفی قابل اعتماد نیست. وقتی vertex با کمترین distance pop شد، distance قطعی است.",
              "en": "Dijkstra",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:53",
          "golden-rule:data-structures:54",
          "golden-rule:data-structures:55"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:23"
        ],
        "flashcardIds": [
          "flashcard:data-structures:009",
          "flashcard:data-structures:065",
          "flashcard:data-structures:066",
          "flashcard:data-structures:067",
          "flashcard:data-structures:098"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:shortest-path:crash",
          "lesson:data-structures:priority-queue:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:floyd-warshall:crash",
        "recordKey": "lesson:data-structures:floyd-warshall:crash@1",
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
        "topicId": "topic:data-structures:floyd-warshall",
        "title": {
          "fa": "فلوید-وارشال - Crash Course",
          "en": "Floyd-Warshall Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "all-pairs با DP سه‌حلقه‌ای؛ رأس واسط k را اضافه می‌کند.",
          "en": "Floyd-Warshall",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 6,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "all-pairs با DP سه‌حلقه‌ای؛ رأس واسط k را اضافه می‌کند. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "all-pairs با DP سه‌حلقه‌ای؛ رأس واسط k را اضافه می‌کند.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "سه حلقه دارد و k باید outer loop باشد: آیا مسیر i به j با واسطهٔ k بهتر می‌شود؟",
              "en": "Floyd-Warshall",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:56",
          "golden-rule:data-structures:57"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:24"
        ],
        "flashcardIds": [
          "flashcard:data-structures:068",
          "flashcard:data-structures:069",
          "flashcard:data-structures:099"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:shortest-path:crash",
          "lesson:data-structures:asymptotic-analysis:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:sorting-comparison:crash",
        "recordKey": "lesson:data-structures:sorting-comparison:crash@1",
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
        "topicId": "topic:data-structures:sorting-comparison",
        "title": {
          "fa": "مرتب‌سازی - Crash Course",
          "en": "Sorting Algorithms Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "stability، in-place بودن و مرتبهٔ زمانی الگوریتم‌ها را جدول‌وار حفظ کن.",
          "en": "Sorting Algorithms",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 7,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "stability، in-place بودن و مرتبهٔ زمانی الگوریتم‌ها را جدول‌وار حفظ کن. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "stability، in-place بودن و مرتبهٔ زمانی الگوریتم‌ها را جدول‌وار حفظ کن.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "Merge sort پایدار و O(n log n) با حافظهٔ اضافی؛ quicksort average خوب ولی worst O(n^2)؛ heap sort in-place ولی stable نیست.",
              "en": "Sorting Algorithms",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:58",
          "golden-rule:data-structures:59"
        ],
        "examTrapIds": [
          "exam-trap:data-structures:25",
          "exam-trap:data-structures:26"
        ],
        "flashcardIds": [
          "flashcard:data-structures:070",
          "flashcard:data-structures:071",
          "flashcard:data-structures:072",
          "flashcard:data-structures:073",
          "flashcard:data-structures:100",
          "flashcard:data-structures:101"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:divide-and-conquer:crash",
          "lesson:data-structures:heap:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:divide-and-conquer:crash",
        "recordKey": "lesson:data-structures:divide-and-conquer:crash@1",
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
        "topicId": "topic:data-structures:divide-and-conquer",
        "title": {
          "fa": "تقسیم و حل - Crash Course",
          "en": "Divide and Conquer Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "merge sort، quicksort و binary search با تقسیم مسئله به زیرمسئله.",
          "en": "Divide and Conquer",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 5,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "merge sort، quicksort و binary search با تقسیم مسئله به زیرمسئله. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "merge sort، quicksort و binary search با تقسیم مسئله به زیرمسئله.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "تقسیم، حل زیرمسئله، ترکیب. recurrence معمولاً aT(n/b)+f(n) است.",
              "en": "Divide and Conquer",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [
          "golden-rule:data-structures:07"
        ],
        "examTrapIds": [],
        "flashcardIds": [
          "flashcard:data-structures:019"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:recursion-analysis:crash",
          "lesson:data-structures:binary-search:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      },
      {
        "id": "lesson:data-structures:binary-search:crash",
        "recordKey": "lesson:data-structures:binary-search:crash@1",
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
        "topicId": "topic:data-structures:binary-search",
        "title": {
          "fa": "جست‌وجوی دودویی - Crash Course",
          "en": "Binary Search Crash Course",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "summary": {
          "fa": "فقط روی فضای مرتب/monotonic؛ هر گام نصف می‌کند.",
          "en": "Binary Search",
          "primaryLocale": "fa",
          "translationStatus": "not-applicable"
        },
        "estimatedReadingMinutes": 4,
        "sections": [
          {
            "id": "overview",
            "sectionType": "overview",
            "content": {
              "fa": "فقط روی فضای مرتب/monotonic؛ هر گام نصف می‌کند. هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.",
              "en": "فقط روی فضای مرتب/monotonic؛ هر گام نصف می‌کند.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "exam-importance",
            "sectionType": "exam-importance",
            "content": {
              "fa": "این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.",
              "en": "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "key-concepts",
            "sectionType": "key-concepts",
            "content": {
              "fa": "شرط لازم monotonic بودن است، نه صرفاً آرایه بودن. mid و boundaryها دام رایج‌اند.",
              "en": "Binary Search",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "developer-analogy",
            "sectionType": "summary",
            "content": {
              "fa": "تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.",
              "en": "Developer analogy: choose storage/index/runtime primitive by query/update cost.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "memory-shortcut",
            "sectionType": "memory-tricks",
            "content": {
              "fa": "کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.",
              "en": "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "common-mistakes",
            "sectionType": "common-mistakes",
            "content": {
              "fa": "دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.",
              "en": "Common trap: confusing heap/BST, shortest path/MST, O/Theta.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          },
          {
            "id": "fast-solving",
            "sectionType": "quick-recap",
            "content": {
              "fa": "قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟",
              "en": "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.",
              "primaryLocale": "fa",
              "translationStatus": "not-applicable"
            }
          }
        ],
        "goldenRuleIds": [],
        "examTrapIds": [
          "exam-trap:data-structures:27",
          "exam-trap:data-structures:28"
        ],
        "flashcardIds": [
          "flashcard:data-structures:011",
          "flashcard:data-structures:074",
          "flashcard:data-structures:075",
          "flashcard:data-structures:102",
          "flashcard:data-structures:103"
        ],
        "relatedQuestionIds": [],
        "relatedLessonIds": [
          "lesson:data-structures:arrays:crash",
          "lesson:data-structures:divide-and-conquer:crash"
        ],
        "contentOrigin": "expert-curated",
        "frequencyStatus": "unknown",
        "developerAnalogy": "Data structure choice is an API performance contract.",
        "twentySecondStrategy": "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
        "miniSelfCheck": [
          "آیا سؤال worst-case می‌خواهد یا average؟",
          "آیا گراف وزن دارد؟"
        ]
      }
    ]
  }
};
  var registrations = [];
  registrations.push(app.content.registry.register(payload.dataset));
  app.register("content", "dataStructuresCrashCourse", { payload: payload, registrations: registrations });
})(window);
