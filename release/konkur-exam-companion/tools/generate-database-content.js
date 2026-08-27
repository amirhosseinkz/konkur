#!/usr/bin/env node
"use strict";

const fs = require("fs");

const timestamp = "2026-07-15T13:00:00.000Z";
const subject = "database";
const subjectId = "subject:database";
const origin = "expert-curated";

const topics = [
  ["introduction", "مقدمهٔ پایگاه داده", "Introduction", "هدف DBMS، داده، schema و query را سریع تشخیص بده.", "easy", 3, ["relational-model", "sql-joins"]],
  ["relational-model", "مدل رابطه‌ای", "Relational Model", "relation، tuple، attribute و constraintها.", "easy", 4, ["keys", "normalization"]],
  ["keys", "کلیدها", "Keys", "superkey، candidate key، primary key و foreign key.", "medium", 5, ["functional-dependency", "normalization"]],
  ["functional-dependency", "وابستگی تابعی", "Functional Dependency", "X→Y یعنی X مقدار Y را تعیین می‌کند.", "hard", 6, ["armstrong-rules", "attribute-closure", "normalization"]],
  ["armstrong-rules", "قوانین آرمسترانگ", "Armstrong Rules", "reflexivity، augmentation و transitivity برای نتیجه‌گیری FD.", "medium", 5, ["functional-dependency", "attribute-closure"]],
  ["attribute-closure", "بستار صفت", "Attribute Closure", "محاسبهٔ X+ برای تشخیص key و implication.", "hard", 7, ["functional-dependency", "minimal-cover"]],
  ["minimal-cover", "پوشش مینیمال", "Minimal Cover", "حذف attribute و FD زائد برای synthesis.", "hard", 7, ["attribute-closure", "normalization"]],
  ["normalization", "نرمال‌سازی", "Normalization", "کاهش redundancy و anomaly با تکیه بر FD.", "hard", 6, ["1nf", "2nf", "3nf", "bcnf"]],
  ["1nf", "فرم نرمال اول", "1NF", "مقادیر atomic؛ نه گروه تکراری.", "easy", 3, ["normalization", "2nf"]],
  ["2nf", "فرم نرمال دوم", "2NF", "حذف وابستگی جزئی به بخشی از composite key.", "medium", 4, ["1nf", "3nf"]],
  ["3nf", "فرم نرمال سوم", "3NF", "حذف dependency گذرا با استثنای prime attribute.", "hard", 6, ["2nf", "bcnf"]],
  ["bcnf", "BCNF", "BCNF", "هر determinant باید candidate key باشد.", "hard", 6, ["3nf", "normalization"]],
  ["transactions", "تراکنش‌ها", "Transactions", "واحد منطقی کار با commit و rollback.", "medium", 5, ["acid", "isolation-levels"]],
  ["acid", "ACID", "ACID", "Atomicity، Consistency، Isolation، Durability.", "medium", 5, ["transactions", "concurrency"]],
  ["isolation-levels", "سطوح Isolation", "Isolation Levels", "dirty، non-repeatable و phantom read را تشخیص بده.", "hard", 7, ["transactions", "concurrency", "locks"]],
  ["concurrency", "همزمانی", "Concurrency", "schedule، conflict، serializability و anomaly.", "hard", 7, ["locks", "deadlocks"]],
  ["locks", "قفل‌ها", "Locks", "shared/exclusive lock و two-phase locking.", "medium", 5, ["concurrency", "deadlocks"]],
  ["deadlocks", "بن‌بست", "Deadlocks", "انتظار چرخه‌ای بین تراکنش‌ها.", "medium", 5, ["locks", "concurrency"]],
  ["indexes", "ایندکس‌ها", "Indexes", "ساختار کمکی برای سرعت read با هزینهٔ write/storage.", "medium", 5, ["b-plus-tree", "hash-index", "query-processing"]],
  ["b-plus-tree", "درخت B+", "B+ Tree", "ایندکس range-friendly و رایج در DBMS.", "hard", 6, ["indexes", "hash-index"]],
  ["hash-index", "ایندکس Hash", "Hash Index", "جست‌وجوی equality سریع؛ ضعیف برای range.", "medium", 5, ["indexes", "b-plus-tree"]],
  ["query-processing", "پردازش Query", "Query Processing", "parse، optimize، execute و plan cost.", "medium", 5, ["indexes", "sql-joins", "aggregation"]],
  ["sql-joins", "Joinهای SQL", "SQL Joins", "INNER، LEFT، RIGHT و FULL را با حفظ/حذف rowها تشخیص بده.", "medium", 6, ["query-processing", "views"]],
  ["aggregation", "تجمیع", "Aggregation", "GROUP BY، HAVING و COUNT traps.", "medium", 5, ["sql-joins", "query-processing"]],
  ["views", "Viewها", "Views", "query ذخیره‌شدهٔ منطقی؛ نه لزوماً جدول فیزیکی.", "easy", 3, ["sql-joins", "query-processing"]]
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
    provenanceNotes: "Expert-curated Database content. Not derived from verified question mappings.",
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
  ...common(subjectId), slug: subject, title: text("پایگاه داده", "Database"), englishTitle: "Database",
  summary: text("مرور سریع و امتحان‌محور Database با تمرکز بر dependency، normalization، transaction و SQL traps.", "Exam-focused Database module."),
  status: "active", topicIds: topics.map((t) => id("topic", t.slug)), reviewOrder: topics.map((t) => id("topic", t.slug)),
  fiveMinuteReviewId: "five-minute-review:database", goldenRuleCollectionId: "golden-rule:database:collection",
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
  keys: "Candidate key حداقل superkey است؛ Primary key فقط یکی از candidateهاست که انتخاب شده.",
  "functional-dependency": "X→Y یعنی اگر دو tuple در X برابر باشند، در Y هم برابرند. از معنی business حدس نزن مگر داده/قاعده داده شده باشد.",
  "attribute-closure": "برای X+، از X شروع کن و هر FD قابل اعمال را اضافه کن تا دیگر چیزی اضافه نشود.",
  "minimal-cover": "سمت راست را تک‌صفت کن، صفت زائد سمت چپ را حذف کن، سپس FD زائد را حذف کن.",
  "3nf": "3NF اجازه می‌دهد RHS prime باشد؛ همین تفاوت مهم با BCNF است.",
  bcnf: "BCNF سخت‌تر است: هر determinant باید candidate key باشد.",
  acid: "A همه یا هیچ؛ C صحت constraint؛ I جدا بودن concurrent transaction؛ D ماندگاری بعد commit.",
  "isolation-levels": "Dirty read یعنی خواندن uncommitted؛ phantom یعنی row جدید مطابق شرط ظاهر شود.",
  indexes: "Index read را سریع‌تر می‌کند ولی write و storage هزینه دارد.",
  "b-plus-tree": "B+ Tree برای range عالی است چون leafها مرتب و linked هستند.",
  "hash-index": "Hash برای equality خوب است؛ برای range معمولاً انتخاب بدی است.",
  "sql-joins": "INNER فقط matchها؛ LEFT همهٔ چپ + match راست یا NULL.",
  aggregation: "WHERE قبل از group؛ HAVING بعد از group. COUNT(column) مقدار NULL را نمی‌شمارد."
};

const lessonRecords = topics.map((topic) => ({
  ...common(id("lesson", topic.slug)), subjectId, topicId: id("topic", topic.slug),
  title: text(`${topic.fa} - Crash Course`, `${topic.en} Crash Course`), summary: text(topic.summary, topic.en),
  estimatedReadingMinutes: Math.max(3, Math.min(8, topic.minutes)),
  sections: [
    { id: "overview", sectionType: "overview", content: text(`${topic.summary} هدف، تشخیص سریع مفهوم در تست است نه درس دانشگاهی کامل.`, topic.summary) },
    { id: "exam-importance", sectionType: "exam-importance", content: text("این مبحث معمولاً با تشخیص تعریف، قاعده، counterexample یا تفاوت دو مفهوم نزدیک سنجیده می‌شود. Frequency: Unknown.", "Exam use: definition/rule/contrast recognition. Frequency unknown.") },
    { id: "key-concepts", sectionType: "key-concepts", content: text(lessonFocus[topic.slug] || `${topic.en}: تعریف کوتاه، دام رایج و ارتباط با topicهای نزدیک را حفظ کن.`, topic.en) },
    { id: "developer-analogy", sectionType: "summary", content: text("تشبیه توسعه‌دهنده: schema مثل API contract است؛ transaction مثل یک operation اتمیک؛ index مثل cache/lookup table با هزینهٔ نگهداری.", "Developer analogy: schema/API contract, transaction/atomic operation, index/maintained lookup.") },
    { id: "memory-shortcut", sectionType: "memory-tricks", content: text("کلید حافظه: هر تعریف را به یک تشخیص تستی کوتاه تبدیل کن، نه توضیح بلند.", "Turn each definition into one test-recognition cue.") },
    { id: "common-mistakes", sectionType: "common-mistakes", content: text("دام رایج: قاطی‌کردن مفاهیم نزدیک مثل 3NF/BCNF، candidate/primary، repeatable/serializable، LEFT/INNER.", "Common trap: confusing neighboring concepts.") },
    { id: "mini-self-check", sectionType: "quick-recap", content: text("خودسنجی: آیا سؤال تعریف می‌خواهد، محاسبه closure، تشخیص normal form، anomaly transaction یا خروجی SQL؟", "Self-check: definition, closure, normal form, transaction anomaly, or SQL output?") }
  ],
  goldenRuleIds: [], examTrapIds: [], flashcardIds: [], relatedQuestionIds: [], relatedLessonIds: topic.related.map((slug) => id("lesson", slug)),
  contentOrigin: origin, frequencyStatus: "unknown", developerAnalogy: "DBMS را مثل runtime محافظ داده ببین: schema contract، transaction atomic operation، index lookup structure.",
  twentySecondStrategy: "اول نوع سؤال را تشخیص بده: FD/normalization/transaction/index/SQL.",
  miniSelfCheck: ["آیا مفهوم نزدیک دیگری در گزینه‌ها هست؟", "آیا NULL، uncommitted، prime attribute یا determinant دام است؟"]
}));

const ruleStatements = [
  ["ACID → transaction correctness", "acid"], ["Atomicity → all or nothing", "acid"], ["Consistency → constraints preserved", "acid"], ["Isolation → concurrent transactions appear separated", "isolation-levels"], ["Durability → committed data survives crash", "acid"],
  ["Dirty Read → read uncommitted data", "isolation-levels"], ["Non-repeatable Read → same row changes", "isolation-levels"], ["Phantom Read → new matching rows appear", "isolation-levels"], ["Serializable → strongest common isolation idea", "isolation-levels"],
  ["Candidate key → minimal superkey", "keys"], ["Primary key → chosen candidate key", "keys"], ["Foreign key → references another relation key", "keys"], ["Superkey may contain extra attributes", "keys"],
  ["FD X→Y → X determines Y", "functional-dependency"], ["Closure X+ tests whether X is a key", "attribute-closure"], ["Armstrong Reflexivity → subset is implied", "armstrong-rules"], ["Armstrong Augmentation → add same attrs both sides", "armstrong-rules"], ["Armstrong Transitivity → chain dependencies", "armstrong-rules"],
  ["Minimal cover → single RHS attributes", "minimal-cover"], ["Remove extraneous attributes before removing redundant FDs", "minimal-cover"], ["1NF → atomic values", "1nf"], ["2NF → no partial dependency on composite key", "2nf"], ["3NF → no bad transitive dependency", "3nf"], ["3NF allows prime-attribute RHS exception", "3nf"], ["BCNF → every determinant is a candidate key", "bcnf"], ["BCNF is stricter than 3NF", "bcnf"],
  ["Index speeds reads, costs writes/storage", "indexes"], ["B+ Tree → default database index", "b-plus-tree"], ["B+ Tree → good for range queries", "b-plus-tree"], ["Hash index → good for equality", "hash-index"], ["Hash index → poor for range", "hash-index"],
  ["INNER JOIN → only matching rows", "sql-joins"], ["LEFT JOIN → all left rows", "sql-joins"], ["WHERE filters rows before grouping", "aggregation"], ["HAVING filters groups after grouping", "aggregation"], ["COUNT(*) counts rows", "aggregation"], ["COUNT(column) ignores NULL", "aggregation"],
  ["View → stored query, not necessarily stored data", "views"], ["Query optimizer chooses a plan", "query-processing"], ["Selection reduces rows", "query-processing"], ["Projection reduces columns", "relational-model"], ["Deadlock → cycle of waiting", "deadlocks"], ["Starvation → waits too long without cycle requirement", "deadlocks"], ["Shared lock → read", "locks"], ["Exclusive lock → write", "locks"], ["2PL grows then shrinks lock set", "locks"], ["Commit makes transaction effects final", "transactions"], ["Rollback undoes transaction effects", "transactions"]
];
const goldenRecords = ruleStatements.map(([statement, slug], index) => ({
  ...common(seq("golden-rule", index + 1, 2)), subjectId, topicIds: [id("topic", slug)], statement,
  patternClusterIds: [], aggregationStatus: "topic", aggregatedRuleIds: [], relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));
goldenRecords.push({ ...common("golden-rule:database:collection"), subjectId, topicIds: topics.map((t) => id("topic", t.slug)), statement: null, patternClusterIds: [], aggregationStatus: "subject-aggregate", aggregatedRuleIds: goldenRecords.map((r) => r.id), relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true });

const trapSpecs = [
  ["3NF vs BCNF", "اگر 3NF است حتماً BCNF هم هست.", "3NF و BCNF هر دو normal form هستند.", "BCNF سخت‌تر است؛ determinant باید candidate key باشد.", "BCNF = determinant key", "bcnf"],
  ["Candidate vs Primary Key", "candidate key همان primary key است.", "هر دو unique هستند.", "Primary یکی از candidateهاست که انتخاب شده.", "primary = chosen candidate", "keys"],
  ["Superkey vs Candidate Key", "هر superkey حداقل است.", "هر دو tuple را uniquely مشخص می‌کنند.", "Candidate key minimal است؛ superkey می‌تواند اضافه داشته باشد.", "candidate = minimal superkey", "keys"],
  ["Partial vs Transitive Dependency", "هر dependency غیرمستقیم partial است.", "هر دو برای normalization مهم‌اند.", "Partial به بخشی از composite key؛ transitive از طریق attribute واسط.", "part of key → partial", "normalization"],
  ["3NF prime exception", "هر X→A که X key نیست 3NF را می‌شکند.", "BCNF همین را می‌گوید.", "در 3NF اگر A prime باشد، ممکن است مجاز باشد.", "RHS prime can save 3NF", "3nf"],
  ["Hash Index vs B+ Tree", "Hash همیشه سریع‌تر است.", "O(1) جذاب است.", "Hash برای equality؛ B+ Tree برای range/order بهتر است.", "range → B+ Tree", "hash-index"],
  ["Clustered vs Non-clustered Index", "هر index داده را مرتب ذخیره می‌کند.", "نام index فیزیکی به نظر می‌رسد.", "Clustered ترتیب فیزیکی/اصلی داده را تحت تأثیر می‌گذارد؛ non-clustered ساختار جداست.", "clustered affects data order", "indexes"],
  ["Serializable vs Repeatable Read", "Repeatable Read جلوی همه phantomها را می‌گیرد.", "نامش قوی به نظر می‌رسد.", "Serializable قوی‌ترین مدل رایج است؛ phantom معمولاً دام تفاوت است.", "phantom → serializable", "isolation-levels"],
  ["Dirty Read", "خواندن داده commit شده ولی قدیمی است.", "کلمه dirty مبهم است.", "Dirty یعنی uncommitted خوانده شده.", "dirty = uncommitted", "isolation-levels"],
  ["Deadlock vs Starvation", "هر انتظار طولانی deadlock است.", "هر دو گیرکردن هستند.", "Deadlock چرخه انتظار دارد؛ starvation ممکن است چرخه نداشته باشد.", "cycle → deadlock", "deadlocks"],
  ["LEFT JOIN vs INNER JOIN", "LEFT JOIN فقط matchها را می‌دهد.", "join معمولاً match تداعی می‌کند.", "LEFT همهٔ ردیف‌های چپ را نگه می‌دارد.", "LEFT preserves left", "sql-joins"],
  ["COUNT(*) vs COUNT(column)", "هر دو NULLها را یکسان می‌شمارند.", "هر دو count هستند.", "COUNT(*) rowها؛ COUNT(column) مقدارهای non-NULL.", "COUNT(column) skips NULL", "aggregation"],
  ["WHERE vs HAVING", "HAVING قبل از group اعمال می‌شود.", "هر دو filter هستند.", "WHERE قبل از aggregation؛ HAVING بعد از group.", "WHERE rows, HAVING groups", "aggregation"],
  ["View storage", "View همیشه دادهٔ فیزیکی جدا دارد.", "مانند جدول query می‌شود.", "View معمولاً query منطقی است؛ materialized view استثناست.", "view = stored query", "views"],
  ["FD from sample rows", "با چند row می‌توان FD قطعی اثبات کرد.", "داده نمونه وسوسه‌کننده است.", "نمونه می‌تواند نقض کند، اما اثبات کلی نیاز به constraint دارد.", "sample disproves easier than proves", "functional-dependency"],
  ["Closure stopping too early", "بعد از یک دور اعمال FD کافی است.", "فرایند مکانیکی ساده به نظر می‌رسد.", "تا وقتی attribute جدید اضافه می‌شود ادامه بده.", "closure until fixed point", "attribute-closure"],
  ["Minimal cover order", "اول FD زائد را حذف کن.", "کاهش تعداد rule جذاب است.", "اول RHS تک‌صفت، بعد attribute زائد، بعد FD زائد.", "RHS, LHS, redundant", "minimal-cover"],
  ["Exclusive lock", "Exclusive lock برای read مشترک است.", "exclusive یعنی مهم‌تر به نظر می‌آید.", "X lock برای write؛ S lock برای read.", "S read, X write", "locks"],
  ["Transaction vs Query", "هر query یک transaction کامل با ACID جداست.", "query داخل DB اجرا می‌شود.", "Transaction واحد منطقی کار است و می‌تواند چند query داشته باشد.", "transaction = unit of work", "transactions"],
  ["B+ Tree leaf confusion", "همهٔ داده فقط در internal nodeهاست.", "درخت بودن باعث focus روی ریشه می‌شود.", "در B+ Tree مسیر decision در internal و داده/اشاره‌گر در leafهاست.", "B+ data at leaves", "b-plus-tree"],
  ["Projection vs Selection", "selection ستون انتخاب می‌کند.", "نام‌ها شبیه UI انتخاب هستند.", "Selection row کم می‌کند؛ Projection column کم می‌کند.", "select rows, project columns", "relational-model"],
  ["Query optimization certainty", "optimizer همیشه بهترین plan واقعی را می‌یابد.", "نام optimizer قطعی به نظر می‌رسد.", "Optimizer بر اساس estimate و statistics تصمیم می‌گیرد.", "optimizer estimates", "query-processing"]
];
const trapRecords = trapSpecs.map((t, index) => ({ ...common(seq("exam-trap", index + 1, 2)), subjectId, topicIds: [id("topic", t[5])], title: text(t[0], t[0]), trap: text(t[1], t[0]), wrongThinking: text(t[2], t[2]), correctThinking: text(t[3], t[3]), shortcut: text(t[4], t[4]), relatedQuestionIds: [], trapType: "concept-confusion", patternClusterIds: [], frequencyLevel: "unknown", contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const cardSeeds = [
  ["ACID مخفف چیست؟", "Atomicity, Consistency, Isolation, Durability.", "transaction", "acid"],
  ["Dirty Read چیست؟", "خواندن داده‌ای که هنوز commit نشده.", "definition", "isolation-levels"],
  ["Phantom Read چیست؟", "در اجرای دوبارهٔ query، row جدید مطابق شرط ظاهر می‌شود.", "definition", "isolation-levels"],
  ["BCNF چه شرطی دارد؟", "هر determinant باید candidate key باشد.", "shortcut", "bcnf"],
  ["Candidate key چیست؟", "Superkey حداقلی.\nهیچ attribute اضافه ندارد.", "definition", "keys"],
  ["Primary key چیست؟", "یکی از candidate keyها که انتخاب شده.", "definition", "keys"],
  ["X→Y یعنی چه؟", "X مقدار Y را تعیین می‌کند.", "definition", "functional-dependency"],
  ["X+ برای چیست؟", "تشخیص key بودن X و implication وابستگی‌ها.", "shortcut", "attribute-closure"],
  ["1NF یعنی چه؟", "مقادیر atomic.\nبدون گروه تکراری.", "definition", "1nf"],
  ["2NF چه چیزی را حذف می‌کند؟", "وابستگی جزئی به بخشی از composite key.", "definition", "2nf"],
  ["3NF چه دامی دارد؟", "استثنای prime attribute در RHS.", "trap", "3nf"],
  ["B+ Tree برای چه query خوب است؟", "Range query و ordered scan.", "index", "b-plus-tree"],
  ["Hash index برای چه query خوب است؟", "Equality lookup.\nنه range.", "index", "hash-index"],
  ["LEFT JOIN چه rowهایی را نگه می‌دارد؟", "همهٔ rowهای سمت چپ.", "sql", "sql-joins"],
  ["COUNT(column) با NULL چه می‌کند؟", "NULL را نمی‌شمارد.", "sql", "aggregation"]
];
ruleStatements.forEach(([statement, slug]) => cardSeeds.push([`قانون: ${statement}`, statement, "shortcut", slug]));
trapSpecs.forEach((trap) => cardSeeds.push([`دام: ${trap[0]}`, `${trap[4]}.\n${trap[3]}`, "trap", trap[5]]));
topics.forEach((topic) => cardSeeds.push([`تعریف سریع ${topic.fa}`, topic.summary, "definition", topic.slug]));
const flashcardRecords = cardSeeds.slice(0, 92).map((card, index) => ({ ...common(seq("flashcard", index + 1, 3)), subjectId, topicIds: [id("topic", card[3])], category: card[2], front: text(card[0], card[0]), back: text(card[1], card[1]), importance: "unknown", relatedQuestionIds: [], difficulty: index % 5 === 0 ? "hard" : index % 3 === 0 ? "medium" : "easy", goldenRuleIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const reviewItems = ruleStatements.slice(0, 45).map(([statement, slug], index) => ({ id: `database-review-${String(index + 1).padStart(2, "0")}`, text: text(statement, statement), sourceIds: [], relatedAssetIds: [id("topic", slug)] }));
reviewItems.push({ id: "database-review-46", text: text("Frequency: Unknown تا زمان mapping رسمی سؤال‌ها.", "Frequency unknown until verified mapping."), sourceIds: [], relatedAssetIds: [] });
const reviewRecord = { ...common("five-minute-review:database"), subjectId, title: text("مرور پنج‌دقیقه‌ای پایگاه داده", "Database Five-Minute Review"), items: reviewItems, assetReferences: [...goldenRecords.slice(0, 20).map((r) => r.id), ...trapRecords.slice(0, 8).map((r) => r.id)], estimatedReviewSeconds: 300, contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true };

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

writeModule("content/subjects/database.js", "registerDatabaseSubject", "databaseSubject", { dataset: dataset("database:subjects", "subjects", [subjectRecord]) }, ["dataset"]);
writeModule("content/topics/database-topic-registry.js", "registerDatabaseTopicRegistry", "databaseTopicRegistry", { dataset: dataset("database:topics", "topics", topicRecords) }, ["dataset"]);
writeModule("content/topics/database-topic-relations.js", "registerDatabaseTopicRelations", "databaseTopicRelations", { dataset: dataset("database:topic-relations", "related-topics", relationRecords) }, ["dataset"]);
writeModule("content/lessons/database/database-crash-course.js", "registerDatabaseCrashCourse", "databaseCrashCourse", { dataset: dataset("database:lessons", "lessons", lessonRecords) }, ["dataset"]);
writeModule("content/golden-rules/database-golden-rules.js", "registerDatabaseGoldenRules", "databaseGoldenRules", { dataset: dataset("database:golden-rules", "golden-rules", goldenRecords) }, ["dataset"]);
writeModule("content/exam-traps/database-exam-traps.js", "registerDatabaseExamTraps", "databaseExamTraps", { dataset: dataset("database:exam-traps", "exam-traps", trapRecords) }, ["dataset"]);
writeModule("content/flashcards/database-flashcards.js", "registerDatabaseFlashcards", "databaseFlashcards", { dataset: dataset("database:flashcards", "flashcards", flashcardRecords) }, ["dataset"]);
writeModule("content/reviews/database-five-minute-review.js", "registerDatabaseFiveMinuteReview", "databaseFiveMinuteReview", { dataset: dataset("database:five-minute-review", "five-minute-reviews", [reviewRecord]) }, ["dataset"]);

console.log(`Generated Database content: ${topics.length} topics, ${lessonRecords.length} lessons, ${goldenRecords.length} rules, ${flashcardRecords.length} cards, ${trapRecords.length} traps.`);
