#!/usr/bin/env node
"use strict";

const fs = require("fs");

const timestamp = "2026-07-15T16:00:00.000Z";
const subject = "data-structures";
const subjectId = "subject:data-structures";
const origin = "expert-curated";

const topics = [
  ["asymptotic-analysis", "تحلیل مجانبی", "Asymptotic Analysis", "Big-O، Theta و Omega را برای حذف جزئیات و مقایسهٔ رشد به کار ببر.", "medium", 5, ["recursion-analysis", "sorting-comparison"]],
  ["recursion-analysis", "بازگشت و رابطهٔ بازگشتی", "Recursion and Recurrences", "base case، recurrence و stack depth را سریع تشخیص بده.", "hard", 6, ["asymptotic-analysis", "divide-and-conquer"]],
  ["arrays", "آرایه", "Arrays", "دسترسی O(1)، insertion/deletion پرهزینه وسط آرایه و locality خوب.", "easy", 3, ["binary-search", "sorting-comparison"]],
  ["linked-lists", "لیست پیوندی", "Linked Lists", "حذف/درج با pointer ارزان است ولی دسترسی تصادفی نداری.", "medium", 4, ["stack", "queue"]],
  ["stack", "پشته", "Stack", "LIFO؛ recursion، expression parsing و DFS iterative را سریع یادآوری کن.", "easy", 3, ["linked-lists", "dfs"]],
  ["queue", "صف", "Queue", "FIFO؛ scheduling، BFS و producer-consumer intuition.", "easy", 3, ["circular-queue", "bfs"]],
  ["circular-queue", "صف حلقوی", "Circular Queue", "front/rear با modulo؛ full/empty را اشتباه نگیر.", "medium", 4, ["queue", "deque"]],
  ["deque", "صف دوطرفه", "Deque", "insert/delete از هر دو سر؛ sliding window و double-ended scheduling.", "medium", 4, ["queue", "circular-queue"]],
  ["hash-tables", "جدول درهم‌سازی", "Hash Tables", "میانگین O(1)، وابسته به hash خوب، load factor و collision policy.", "medium", 5, ["collision-resolution", "arrays"]],
  ["collision-resolution", "رفع برخورد", "Collision Resolution", "chaining در برابر open addressing؛ probing و clustering دام اصلی است.", "hard", 6, ["hash-tables", "asymptotic-analysis"]],
  ["tree-basics", "مبانی درخت", "Tree Basics", "root، leaf، degree، height/depth و traversalها را سریع تفکیک کن.", "easy", 4, ["binary-trees", "trie"]],
  ["binary-trees", "درخت دودویی", "Binary Trees", "هر node حداکثر دو فرزند؛ complete/full/perfect را قاطی نکن.", "medium", 5, ["tree-basics", "bst"]],
  ["bst", "درخت جست‌وجوی دودویی", "Binary Search Tree", "left < root < right؛ inorder مرتب می‌دهد ولی skew بدترین حالت می‌سازد.", "medium", 5, ["binary-trees", "avl"]],
  ["avl", "درخت AVL", "AVL Tree", "BST متوازن با balance factor و rotation برای نگه‌داشتن O(log n).", "hard", 6, ["bst", "heap"]],
  ["heap", "هیپ", "Heap", "complete tree با heap-order؛ min/max سریع، search عمومی سریع نیست.", "medium", 5, ["priority-queue", "sorting-comparison"]],
  ["priority-queue", "صف اولویت", "Priority Queue", "بالاترین/پایین‌ترین priority زودتر خارج می‌شود؛ معمولاً با heap.", "medium", 4, ["heap", "dijkstra"]],
  ["trie", "Trie", "Trie", "درخت prefix برای stringها؛ زمان وابسته به طول key نه تعداد keyها.", "medium", 4, ["tree-basics", "hash-tables"]],
  ["graph-representation", "نمایش گراف", "Graph Representation", "adjacency matrix در برابر list؛ dense/sparse را اول تشخیص بده.", "medium", 5, ["bfs", "dfs"]],
  ["bfs", "جست‌وجوی سطحی", "BFS", "Queue → level order و کوتاه‌ترین مسیر در گراف بدون وزن.", "medium", 5, ["queue", "graph-representation"]],
  ["dfs", "جست‌وجوی عمقی", "DFS", "Stack/recursion → عمق، component، cycle و topological intuition.", "medium", 5, ["stack", "topological-sort"]],
  ["topological-sort", "مرتب‌سازی توپولوژیک", "Topological Sort", "فقط برای DAG؛ dependency order با DFS finish یا indegree queue.", "hard", 5, ["dfs", "graph-representation"]],
  ["mst", "درخت پوشای کمینه", "Minimum Spanning Tree", "اتصال همهٔ رأس‌ها با کمترین وزن و بدون cycle.", "hard", 5, ["kruskal", "prim"]],
  ["kruskal", "کروسکال", "Kruskal", "edgeهای مرتب‌شده + Union-Find؛ cycle را رد کن.", "hard", 5, ["mst", "prim"]],
  ["prim", "پریم", "Prim", "از یک رأس شروع کن و ارزان‌ترین edge خروجی frontier را بگیر.", "hard", 5, ["mst", "priority-queue"]],
  ["shortest-path", "کوتاه‌ترین مسیر", "Shortest Path", "unweighted با BFS؛ weighted nonnegative با Dijkstra؛ all-pairs با Floyd.", "hard", 5, ["bfs", "dijkstra"]],
  ["dijkstra", "دایکسترا", "Dijkstra", "برای وزن غیرمنفی؛ priority queue فاصلهٔ کمینهٔ موقت را قطعی می‌کند.", "hard", 6, ["shortest-path", "priority-queue"]],
  ["floyd-warshall", "فلوید-وارشال", "Floyd-Warshall", "all-pairs با DP سه‌حلقه‌ای؛ رأس واسط k را اضافه می‌کند.", "hard", 6, ["shortest-path", "asymptotic-analysis"]],
  ["sorting-comparison", "مرتب‌سازی", "Sorting Algorithms", "stability، in-place بودن و مرتبهٔ زمانی الگوریتم‌ها را جدول‌وار حفظ کن.", "hard", 7, ["divide-and-conquer", "heap"]],
  ["divide-and-conquer", "تقسیم و حل", "Divide and Conquer", "merge sort، quicksort و binary search با تقسیم مسئله به زیرمسئله.", "medium", 5, ["recursion-analysis", "binary-search"]],
  ["binary-search", "جست‌وجوی دودویی", "Binary Search", "فقط روی فضای مرتب/monotonic؛ هر گام نصف می‌کند.", "medium", 4, ["arrays", "divide-and-conquer"]]
].map(([slug, fa, en, summary, difficulty, minutes, related]) => ({ slug, fa, en, summary, difficulty, minutes, related }));

function id(kind, slug) {
  if (kind === "topic") return `topic:${subject}:${slug}`;
  if (kind === "lesson") return `lesson:${subject}:${slug}:crash`;
  return `${kind}:${subject}:${slug}`;
}
function seq(prefix, index, width) { return `${prefix}:${subject}:${String(index).padStart(width, "0")}`; }
function text(fa, en) { return { fa, en, primaryLocale: "fa", translationStatus: "not-applicable" }; }
function approval() { return { status: "approved", reviewerRole: "exam-editor", reviewedAt: timestamp, reviewContractVersion: 1 }; }
function common(recordId) {
  return {
    id: recordId, recordKey: `${recordId}@1`, schemaVersion: 1, version: 1,
    verificationStatus: "expert-reviewed", publicationStatus: "published", educationalApproval: approval(),
    sourceIds: [], primarySourceId: null, sourcePage: null, sourceUrl: null,
    provenanceNotes: "Expert-curated Data Structures and Algorithms content. Not derived from verified question mappings.",
    createdAt: timestamp, updatedAt: timestamp
  };
}
function dataset(datasetId, datasetType, records) { return { datasetId, datasetType, schemaVersion: 1, version: 1, testOnly: false, records }; }
function writeModule(path, fnName, key, payload, registrations) {
  const lines = [`(function ${fnName}(global) {`, `  "use strict";`, `  var app = global.KonkurApp;`, `  var payload = ${JSON.stringify(payload, null, 2)};`, `  var registrations = [];`];
  registrations.forEach((name) => lines.push(`  registrations.push(app.content.registry.register(payload.${name}));`));
  lines.push(`  app.register("content", "${key}", { payload: payload, registrations: registrations });`, `})(window);`, "");
  fs.writeFileSync(path, lines.join("\n"));
}

const subjectRecord = {
  ...common(subjectId), slug: subject, title: text("ساختمان داده و الگوریتم", "Data Structures and Algorithms"), englishTitle: "Data Structures and Algorithms",
  summary: text("مرور سریع و امتحان‌محور ساختمان داده و الگوریتم با تمرکز بر complexity، ساختارهای کلاسیک، graph و sorting.", "Exam-focused Data Structures and Algorithms module."),
  status: "active", topicIds: topics.map((t) => id("topic", t.slug)), reviewOrder: topics.map((t) => id("topic", t.slug)),
  fiveMinuteReviewId: "five-minute-review:data-structures", goldenRuleCollectionId: "golden-rule:data-structures:collection",
  estimatedStudyMinutes: topics.reduce((sum, t) => sum + t.minutes, 0), contentOrigin: origin, frequencyStatus: "unknown",
  lastNightPriority: "high", verificationLabel: "expert-curated; question relationships unverified"
};

const topicRecords = topics.map((topic) => ({
  ...common(id("topic", topic.slug)), subjectId, slug: topic.slug, title: text(topic.fa, topic.en), englishTitle: topic.en,
  shortDescription: topic.summary, summary: text(topic.summary, topic.en), status: "active", lessonIds: [id("lesson", topic.slug)],
  flashcardIds: [], goldenRuleIds: [], examTrapIds: [], relatedQuestionIds: [], relatedTopicLinkIds: [],
  relatedTopicIds: topic.related.map((slug) => id("topic", slug)), prerequisiteTopicIds: [], difficulty: topic.difficulty,
  importance: "unknown", frequency: "unknown", estimatedReadingMinutes: topic.minutes,
  contentOrigin: origin, frequencyStatus: "unknown", lastNightIncluded: true, versionLabel: "1"
}));

const lessonFocus = {
  "asymptotic-analysis": "O حد بالا، Omega حد پایین، Theta حد tight است. ثابت‌ها و جمله‌های کوچک‌تر را حذف کن؛ nested loopها را مستقیم بشمار.",
  "recursion-analysis": "اول base case، بعد تعداد زیرمسئله و اندازهٔ زیرمسئله را پیدا کن. recursion depth جدا از total work است.",
  arrays: "indexing مستقیم O(1) است؛ insert/delete وسط نیازمند shift است. sorted array برای binary search خوب است.",
  "linked-lists": "اگر node/pointer را داری، حذف/درج O(1) است؛ اگر باید node را پیدا کنی، scan همچنان O(n) است.",
  stack: "Stack یعنی آخرین ورودی، اولین خروجی. هرجا backtracking/recursion دیدی stack را یادآوری کن.",
  queue: "Queue یعنی اولین ورودی، اولین خروجی. هرجا level یا shortest unweighted دیدی queue را انتخاب کن.",
  "circular-queue": "rear/front با modulo حرکت می‌کنند. دام اصلی تشخیص full و empty با یک خانهٔ خالی یا count است.",
  deque: "Deque از دو سر عمل می‌کند؛ نه الزاماً priority دارد نه sort می‌کند.",
  "hash-tables": "میانگین O(1) فقط با hash مناسب و load factor کنترل‌شده است؛ بدترین حالت می‌تواند O(n) شود.",
  "collision-resolution": "Chaining لیست bucket دارد؛ open addressing داخل همان جدول probe می‌کند و deletion marker می‌خواهد.",
  "tree-basics": "height معمولاً طول مسیر تا دورترین leaf است؛ depth فاصله از root. traversal orderها را حفظ کن.",
  "binary-trees": "Complete تا سطح آخر پر است؛ full یعنی هر node صفر یا دو child دارد؛ perfect یعنی همهٔ leafها هم‌سطح‌اند.",
  bst: "Inorder در BST خروجی sorted می‌دهد. اگر tree skew شود عملیات‌ها O(n) می‌شوند.",
  avl: "Balance factor اختلاف ارتفاع چپ و راست است. rotation فقط برای ترمیم balance و حفظ BST order است.",
  heap: "Heap فقط parent-child order دارد، نه ordering کامل مثل BST. min/max سریع است، search arbitrary سریع نیست.",
  "priority-queue": "Priority Queue ترتیب خروج را با priority تعیین می‌کند؛ FIFO نیست مگر priorityها برابر و policy چنین باشد.",
  trie: "هزینهٔ lookup معمولاً O(length of key) است. prefix مشترک حافظه را reuse می‌کند.",
  "graph-representation": "Matrix برای dense و edge lookup سریع؛ list برای sparse و traversal کم‌هزینه‌تر.",
  bfs: "BFS با queue لایه‌لایه می‌رود و در گراف unweighted کوتاه‌ترین تعداد edge را می‌دهد.",
  dfs: "DFS با recursion/stack عمیق می‌رود؛ finish time برای topological sort مهم است.",
  "topological-sort": "اگر cycle باشد topological order وجود ندارد. indegree صفرها را queue کن یا DFS finish را معکوس کن.",
  mst: "MST shortest path نیست. هدف اتصال همهٔ رأس‌ها با n-1 edge و کمترین مجموع وزن است.",
  kruskal: "Edgeها را sort کن؛ هر edge که cycle بسازد رد می‌شود. Union-Find کلمهٔ کلیدی است.",
  prim: "از یک component رشد می‌کند؛ بهترین edge از frontier را انتخاب می‌کند. heap کمک می‌کند.",
  "shortest-path": "نوع وزن را اول بخوان: بدون وزن BFS، غیرمنفی Dijkstra، all-pairs Floyd-Warshall.",
  dijkstra: "با وزن منفی قابل اعتماد نیست. وقتی vertex با کمترین distance pop شد، distance قطعی است.",
  "floyd-warshall": "سه حلقه دارد و k باید outer loop باشد: آیا مسیر i به j با واسطهٔ k بهتر می‌شود؟",
  "sorting-comparison": "Merge sort پایدار و O(n log n) با حافظهٔ اضافی؛ quicksort average خوب ولی worst O(n^2)؛ heap sort in-place ولی stable نیست.",
  "divide-and-conquer": "تقسیم، حل زیرمسئله، ترکیب. recurrence معمولاً aT(n/b)+f(n) است.",
  "binary-search": "شرط لازم monotonic بودن است، نه صرفاً آرایه بودن. mid و boundaryها دام رایج‌اند."
};

const lessonRecords = topics.map((topic) => ({
  ...common(id("lesson", topic.slug)), subjectId, topicId: id("topic", topic.slug),
  title: text(`${topic.fa} - Crash Course`, `${topic.en} Crash Course`), summary: text(topic.summary, topic.en),
  estimatedReadingMinutes: Math.max(3, Math.min(8, topic.minutes)),
  sections: [
    { id: "overview", sectionType: "overview", content: text(`${topic.summary} هدف، تشخیص الگو و انتخاب سریع ساختار/الگوریتم است.`, topic.summary) },
    { id: "exam-importance", sectionType: "exam-importance", content: text("این مبحث معمولاً با مرتبهٔ زمانی، انتخاب ساختار درست، یا تشخیص دام تعریف‌های نزدیک سنجیده می‌شود. Frequency: Unknown.", "Exam use: complexity, structure choice, or close-definition trap. Frequency unknown.") },
    { id: "key-concepts", sectionType: "key-concepts", content: text(lessonFocus[topic.slug], topic.en) },
    { id: "developer-analogy", sectionType: "summary", content: text("تشبیه توسعه‌دهنده: ساختار داده مثل انتخاب storage/index/runtime primitive است؛ هزینهٔ query/update را قبل از implementation بخوان.", "Developer analogy: choose storage/index/runtime primitive by query/update cost.") },
    { id: "memory-shortcut", sectionType: "memory-tricks", content: text("کلید حافظه: Stack=DFS، Queue=BFS، Heap=Priority، Hash=average O(1)، BST inorder=sorted.", "Shortcut: Stack=DFS, Queue=BFS, Heap=Priority, Hash=average O(1), BST inorder=sorted.") },
    { id: "common-mistakes", sectionType: "common-mistakes", content: text("دام رایج: یکی‌گرفتن heap و BST، shortest path و MST، O و Theta، TLB ذهنی نیست؛ فقط complexity و invariant را بخوان.", "Common trap: confusing heap/BST, shortest path/MST, O/Theta.") },
    { id: "fast-solving", sectionType: "quick-recap", content: text("قانون سریع: اول invariant را پیدا کن؛ ترتیب؟ priority؟ prefix؟ وزن گراف؟ monotonic بودن؟", "Fast rule: identify invariant: order, priority, prefix, graph weight, monotonicity.") }
  ],
  goldenRuleIds: [], examTrapIds: [], flashcardIds: [], relatedQuestionIds: [], relatedLessonIds: topic.related.map((slug) => id("lesson", slug)),
  contentOrigin: origin, frequencyStatus: "unknown", developerAnalogy: "Data structure choice is an API performance contract.",
  twentySecondStrategy: "کلمهٔ کلیدی را به ساختار وصل کن: LIFO/Stack، FIFO/Queue، prefix/Trie، priority/Heap، unweighted shortest/BFS.",
  miniSelfCheck: ["آیا سؤال worst-case می‌خواهد یا average؟", "آیا گراف وزن دارد؟"]
}));

const ruleStatements = [
  ["Big-O gives an upper bound", "asymptotic-analysis"], ["Theta means tight asymptotic bound", "asymptotic-analysis"], ["Drop constants and lower-order terms", "asymptotic-analysis"], ["Nested independent loops multiply", "asymptotic-analysis"],
  ["Recursion must have a base case", "recursion-analysis"], ["Recursion depth is not always total work", "recursion-analysis"], ["Divide-and-conquer often gives aT(n/b)+f(n)", "divide-and-conquer"],
  ["Array indexing is O(1)", "arrays"], ["Array middle insertion usually shifts elements", "arrays"], ["Linked-list random access is O(n)", "linked-lists"], ["Known-node linked-list insertion is O(1)", "linked-lists"],
  ["Stack means LIFO", "stack"], ["Queue means FIFO", "queue"], ["Circular queue uses modulo arithmetic", "circular-queue"], ["Deque supports both ends", "deque"],
  ["Hash table average lookup is O(1)", "hash-tables"], ["Hash table worst case can be O(n)", "hash-tables"], ["Load factor controls hash-table performance", "hash-tables"], ["Chaining stores collisions in buckets", "collision-resolution"], ["Open addressing probes inside the table", "collision-resolution"], ["Linear probing can cluster", "collision-resolution"],
  ["Tree root has no parent", "tree-basics"], ["Leaf has no child", "tree-basics"], ["Height and depth are different directions", "tree-basics"], ["Binary tree nodes have at most two children", "binary-trees"], ["Complete binary tree fills levels left to right", "binary-trees"], ["Full binary tree nodes have zero or two children", "binary-trees"],
  ["BST inorder traversal is sorted", "bst"], ["Skewed BST can degrade to O(n)", "bst"], ["AVL keeps height O(log n)", "avl"], ["AVL rotation preserves BST order", "avl"],
  ["Heap is a complete binary tree", "heap"], ["Heap is not a sorted tree", "heap"], ["Heap search for arbitrary key is not O(log n)", "heap"], ["Priority queue removes by priority", "priority-queue"], ["Trie lookup depends on key length", "trie"], ["Trie is strong for prefix queries", "trie"],
  ["Adjacency matrix suits dense graphs", "graph-representation"], ["Adjacency list suits sparse graphs", "graph-representation"], ["BFS uses a queue", "bfs"], ["BFS finds unweighted shortest paths", "bfs"], ["DFS uses recursion or a stack", "dfs"], ["DFS finish times support topological sort", "dfs"], ["Topological sort requires a DAG", "topological-sort"], ["Cycle means no topological order", "topological-sort"],
  ["MST is not shortest path", "mst"], ["MST has n-1 edges when graph is connected", "mst"], ["Kruskal sorts edges", "kruskal"], ["Kruskal uses Union-Find to avoid cycles", "kruskal"], ["Prim grows one connected tree", "prim"], ["Prim chooses cheapest frontier edge", "prim"],
  ["Unweighted shortest path → BFS", "shortest-path"], ["Nonnegative weighted shortest path → Dijkstra", "dijkstra"], ["Dijkstra fails with negative weights", "dijkstra"], ["Dijkstra pairs naturally with a priority queue", "dijkstra"], ["All-pairs shortest path → Floyd-Warshall", "floyd-warshall"], ["Floyd-Warshall is O(n^3)", "floyd-warshall"],
  ["Stable sort preserves equal-key order", "sorting-comparison"], ["Merge sort is O(n log n)", "sorting-comparison"], ["Quicksort worst case is O(n^2)", "sorting-comparison"], ["Heap sort is in-place but not stable", "sorting-comparison"], ["Binary search needs sorted or monotonic space", "binary-search"], ["Binary search is O(log n)", "binary-search"]
];
const selectedRuleStatements = ruleStatements.slice(0, 59);
const goldenRecords = selectedRuleStatements.map(([statement, slug], index) => ({
  ...common(seq("golden-rule", index + 1, 2)), subjectId, topicIds: [id("topic", slug)], statement,
  patternClusterIds: [], aggregationStatus: "topic", aggregatedRuleIds: [], relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));
goldenRecords.push({ ...common("golden-rule:data-structures:collection"), subjectId, topicIds: topics.map((t) => id("topic", t.slug)), statement: null, patternClusterIds: [], aggregationStatus: "subject-aggregate", aggregatedRuleIds: goldenRecords.map((r) => r.id), relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true });

const trapSpecs = [
  ["O vs Theta", "O را همیشه دقیق‌ترین مرتبه می‌گیرند.", "حد بالا با tight bound قاطی می‌شود.", "Theta tight است؛ O فقط upper bound است.", "tight → Theta", "asymptotic-analysis"],
  ["Recursive depth", "عمق recursion همان تعداد کل callهاست.", "هر دو از recursion tree می‌آیند.", "Depth طول یک مسیر است؛ total calls کل nodeهاست.", "path vs tree", "recursion-analysis"],
  ["Array insertion", "دسترسی O(1) یعنی insertion هم O(1) است.", "همهٔ عملیات array یکی فرض می‌شود.", "وسط آرایه shift می‌خواهد.", "middle insert → shift", "arrays"],
  ["Linked-list deletion", "حذف از linked list همیشه O(1) است.", "pointer deletion ساده دیده می‌شود.", "اگر node قبلی/خود node را نداری، باید جست‌وجو کنی.", "known node matters", "linked-lists"],
  ["Stack vs Queue", "هر دو فقط collection ساده‌اند.", "نام‌ها نزدیک‌اند.", "Stack LIFO است؛ Queue FIFO است.", "LIFO vs FIFO", "stack"],
  ["Circular queue full", "front == rear همیشه empty است.", "یک حالت ظاهری مشترک است.", "بسته به design، full هم می‌تواند ظاهراً مشابه شود؛ count یا empty slot لازم است.", "track count/slot", "circular-queue"],
  ["Hash worst case", "Hash table همیشه O(1) است.", "میانگین با تضمین اشتباه می‌شود.", "collision بد می‌تواند lookup را O(n) کند.", "average, not always", "hash-tables"],
  ["Open addressing deletion", "حذف خانه مثل خالی‌کردن معمولی است.", "delete ساده به نظر می‌رسد.", "probe chain خراب می‌شود؛ tombstone لازم است.", "delete needs marker", "collision-resolution"],
  ["Height vs Depth", "height و depth یکی هستند.", "هر دو طول مسیرند.", "Depth از root به node؛ height از node به leaf.", "root-down vs leaf-down", "tree-basics"],
  ["Complete vs Full", "complete یعنی هر node صفر یا دو child دارد.", "اصطلاح‌ها شبیه‌اند.", "Full صفر/دو child؛ complete levelها را چپ به راست پر می‌کند.", "full children, complete levels", "binary-trees"],
  ["BST balanced", "هر BST عملیات O(log n) دارد.", "ساختار درختی همیشه log تصور می‌شود.", "BST skewed می‌تواند O(n) شود.", "balanced matters", "bst"],
  ["Heap vs BST", "Heap inorder خروجی sorted می‌دهد.", "هر دو binary tree هستند.", "Heap فقط parent-child order دارد؛ BST left/root/right order دارد.", "heap not sorted", "heap"],
  ["Heap search", "در heap هر lookup دلخواه O(log n) است.", "remove min/max سریع است.", "فقط min/max تضمین سریع دارد؛ search دلخواه معمولاً O(n).", "only root is special", "heap"],
  ["Priority Queue FIFO", "priority queue همان queue معمولی است.", "نام queue گمراه می‌کند.", "خروج بر اساس priority است، نه arrival order.", "priority beats arrival", "priority-queue"],
  ["Trie complexity", "Trie lookup به تعداد کل کلیدها وابسته است.", "درخت بودن این حس را می‌دهد.", "معمولاً به طول key وابسته است.", "length of key", "trie"],
  ["Matrix vs List", "adjacency matrix همیشه بهتر است.", "lookup edge سریع است.", "برای sparse graph حافظهٔ matrix زیاد است.", "dense → matrix", "graph-representation"],
  ["BFS weighted", "BFS کوتاه‌ترین مسیر weighted را هم می‌دهد.", "کوتاه‌ترین مسیر با BFS در ذهن مانده.", "BFS فقط برای unweighted یا وزن برابر است.", "unweighted only", "bfs"],
  ["DFS shortest", "DFS کوتاه‌ترین مسیر را پیدا می‌کند.", "به هدف ممکن است زود برسد.", "DFS تضمین shortest ندارد.", "DFS explores depth", "dfs"],
  ["Topological cycle", "هر directed graph یک topological order دارد.", "مرتب‌سازی عمومی تصور می‌شود.", "cycle وجود order را ناممکن می‌کند.", "DAG only", "topological-sort"],
  ["MST vs Shortest Path", "MST مسیر کوتاه از source می‌دهد.", "هر دو از وزن edge استفاده می‌کنند.", "MST مجموع اتصال کل گراف را کمینه می‌کند، نه فاصلهٔ source.", "tree total vs path", "mst"],
  ["Kruskal choice", "Kruskal از یک رأس رشد می‌کند.", "با Prim قاطی می‌شود.", "Kruskal edgeهای global sorted را بررسی می‌کند.", "sorted edges", "kruskal"],
  ["Prim choice", "Prim هر بار کمترین edge کل graph را می‌گیرد.", "با Kruskal قاطی می‌شود.", "Prim فقط edge crossing frontier را انتخاب می‌کند.", "frontier edge", "prim"],
  ["Dijkstra negative", "Dijkstra با وزن منفی هم درست است.", "الگوریتم shortest path است.", "فرض وزن غیرمنفی لازم است.", "no negative", "dijkstra"],
  ["Floyd loop", "Floyd فقط یک Dijkstra تکراری است.", "هر دو shortest path هستند.", "Floyd DP all-pairs با واسطه k است و O(n^3).", "k as intermediate", "floyd-warshall"],
  ["Stable sort", "stable یعنی حافظهٔ کم مصرف می‌کند.", "واژه stable مبهم است.", "stable ترتیب نسبی equal-keyها را حفظ می‌کند.", "equal order", "sorting-comparison"],
  ["Quicksort guarantee", "Quicksort همیشه O(n log n) است.", "average-case معروف‌تر است.", "worst-case آن O(n^2) است.", "average not worst", "sorting-comparison"],
  ["Binary search precondition", "binary search روی هر آرایه‌ای کار می‌کند.", "اسم search گمراه می‌کند.", "فضا باید sorted یا monotonic باشد.", "needs monotonic", "binary-search"],
  ["Off-by-one binary search", "mid درست کافی است.", "فرمول mid دیده می‌شود.", "به update boundary و termination condition دقت کن.", "boundary is the trap", "binary-search"]
];
const trapRecords = trapSpecs.map((t, index) => ({ ...common(seq("exam-trap", index + 1, 2)), subjectId, topicIds: [id("topic", t[5])], title: text(t[0], t[0]), trap: text(t[1], t[0]), wrongThinking: text(t[2], t[2]), correctThinking: text(t[3], t[3]), shortcut: text(t[4], t[4]), relatedQuestionIds: [], trapType: "concept-confusion", patternClusterIds: [], frequencyLevel: "unknown", contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const cardSeeds = [
  ["Big-O چیست؟", "حد بالای رشد asymptotic.", "definition", "asymptotic-analysis"],
  ["Theta چیست؟", "bound دقیق/tight از بالا و پایین.", "definition", "asymptotic-analysis"],
  ["Stack یعنی؟", "LIFO: آخرین ورودی، اولین خروجی.", "definition", "stack"],
  ["Queue یعنی؟", "FIFO: اولین ورودی، اولین خروجی.", "definition", "queue"],
  ["BFS از چه ساختاری استفاده می‌کند؟", "Queue.", "shortcut", "bfs"],
  ["DFS از چه ساختاری استفاده می‌کند؟", "Stack یا recursion.", "shortcut", "dfs"],
  ["BST inorder چه می‌دهد؟", "خروجی مرتب‌شده.", "shortcut", "bst"],
  ["Heap همان BST است؟", "نه. Heap فقط parent-child order دارد.", "trap", "heap"],
  ["Dijkstra شرط وزن؟", "وزن‌ها nonnegative باشند.", "trap", "dijkstra"],
  ["Topological sort برای چه گرافی است؟", "DAG.", "definition", "topological-sort"],
  ["Binary search شرط اصلی؟", "فضای sorted یا monotonic.", "trap", "binary-search"],
  ["MST چند edge دارد؟", "برای graph connected با n رأس: n-1.", "formula", "mst"]
];
ruleStatements.forEach(([statement, slug]) => cardSeeds.push([`قانون: ${statement}`, statement, "shortcut", slug]));
trapSpecs.forEach((trap) => cardSeeds.push([`دام: ${trap[0]}`, `${trap[4]}.\n${trap[3]}`, "trap", trap[5]]));
topics.forEach((topic) => cardSeeds.push([`تعریف سریع ${topic.fa}`, topic.summary, "definition", topic.slug]));
topics.forEach((topic) => cardSeeds.push([`کلید تستی ${topic.en}`, lessonFocus[topic.slug], "exam", topic.slug]));
const flashcardRecords = cardSeeds.slice(0, 120).map((card, index) => ({ ...common(seq("flashcard", index + 1, 3)), subjectId, topicIds: [id("topic", card[3])], category: card[2], front: text(card[0], card[0]), back: text(card[1], card[1]), importance: "unknown", relatedQuestionIds: [], difficulty: index % 5 === 0 ? "hard" : index % 3 === 0 ? "medium" : "easy", goldenRuleIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const reviewItems = selectedRuleStatements.slice(0, 49).map(([statement, slug], index) => ({ id: `ds-review-${String(index + 1).padStart(2, "0")}`, text: text(statement, statement), sourceIds: [], relatedAssetIds: [id("topic", slug)] }));
reviewItems.push({ id: "ds-review-50", text: text("Frequency: Unknown تا زمان mapping رسمی سؤال‌ها.", "Frequency unknown until verified mapping."), sourceIds: [], relatedAssetIds: [] });
const reviewRecord = { ...common("five-minute-review:data-structures"), subjectId, title: text("مرور پنج‌دقیقه‌ای ساختمان داده", "Data Structures Five-Minute Review"), items: reviewItems, assetReferences: [...goldenRecords.slice(0, 24).map((r) => r.id), ...trapRecords.slice(0, 12).map((r) => r.id)], estimatedReviewSeconds: 300, contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true };

topicRecords.forEach((topic) => {
  const slug = topic.slug;
  topic.flashcardIds = flashcardRecords.filter((f) => f.topicIds.includes(topic.id)).map((f) => f.id);
  topic.goldenRuleIds = goldenRecords.filter((g) => g.topicIds.includes(topic.id) && g.aggregationStatus === "topic").map((g) => g.id);
  topic.examTrapIds = trapRecords.filter((trap) => trap.topicIds.includes(topic.id)).map((trap) => trap.id);
  topic.relatedTopicLinkIds = topic.relatedTopicIds.map((target) => `topic-link:${slug}:${target.split(":").pop()}:similar`);
});
lessonRecords.forEach((lesson) => {
  const topic = topicRecords.find((t) => t.id === lesson.topicId);
  lesson.flashcardIds = topic.flashcardIds.slice(0, 6);
  lesson.goldenRuleIds = topic.goldenRuleIds.slice(0, 4);
  lesson.examTrapIds = topic.examTrapIds.slice(0, 3);
});
flashcardRecords.forEach((card) => { card.goldenRuleIds = goldenRecords.filter((g) => g.topicIds[0] === card.topicIds[0]).slice(0, 1).map((g) => g.id); });

const relationRecords = [];
topics.forEach((topic) => topic.related.forEach((target) => relationRecords.push({ ...common(`topic-link:${topic.slug}:${target}:similar`), fromTopicId: id("topic", topic.slug), toTopicId: id("topic", target), relationType: "similar", direction: "bidirectional", evidenceQuestionIds: [], description: `${topic.en} relates to ${target}.`, relationStatus: "unverified", contentOrigin: origin })));

writeModule("content/subjects/data-structures.js", "registerDataStructuresSubject", "dataStructuresSubject", { dataset: dataset("data-structures:subjects", "subjects", [subjectRecord]) }, ["dataset"]);
writeModule("content/topics/data-structures-topic-registry.js", "registerDataStructuresTopicRegistry", "dataStructuresTopicRegistry", { dataset: dataset("data-structures:topics", "topics", topicRecords) }, ["dataset"]);
writeModule("content/topics/data-structures-topic-relations.js", "registerDataStructuresTopicRelations", "dataStructuresTopicRelations", { dataset: dataset("data-structures:topic-relations", "related-topics", relationRecords) }, ["dataset"]);
writeModule("content/lessons/data-structures/data-structures-crash-course.js", "registerDataStructuresCrashCourse", "dataStructuresCrashCourse", { dataset: dataset("data-structures:lessons", "lessons", lessonRecords) }, ["dataset"]);
writeModule("content/golden-rules/data-structures-golden-rules.js", "registerDataStructuresGoldenRules", "dataStructuresGoldenRules", { dataset: dataset("data-structures:golden-rules", "golden-rules", goldenRecords) }, ["dataset"]);
writeModule("content/exam-traps/data-structures-exam-traps.js", "registerDataStructuresExamTraps", "dataStructuresExamTraps", { dataset: dataset("data-structures:exam-traps", "exam-traps", trapRecords) }, ["dataset"]);
writeModule("content/flashcards/data-structures-flashcards.js", "registerDataStructuresFlashcards", "dataStructuresFlashcards", { dataset: dataset("data-structures:flashcards", "flashcards", flashcardRecords) }, ["dataset"]);
writeModule("content/reviews/data-structures-five-minute-review.js", "registerDataStructuresFiveMinuteReview", "dataStructuresFiveMinuteReview", { dataset: dataset("data-structures:five-minute-review", "five-minute-reviews", [reviewRecord]) }, ["dataset"]);

console.log(`Generated Data Structures content: ${topics.length} topics, ${lessonRecords.length} lessons, ${goldenRecords.length} rules, ${flashcardRecords.length} cards, ${trapRecords.length} traps.`);
