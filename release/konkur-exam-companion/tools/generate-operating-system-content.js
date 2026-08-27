#!/usr/bin/env node
"use strict";

const fs = require("fs");

const timestamp = "2026-07-15T14:00:00.000Z";
const subject = "operating-system";
const subjectId = "subject:operating-system";
const origin = "expert-curated";

const topics = [
  ["os-responsibilities", "وظایف سیستم‌عامل", "Operating System Responsibilities", "مدیریت فرایند، حافظه، فایل، I/O و abstractionها.", "easy", 3, ["process-concept", "memory-allocation", "file-system-disk"]],
  ["process-concept", "مفهوم فرایند", "Process Concept", "برنامه در حال اجرا با address space و منابع خودش.", "easy", 4, ["process-states-pcb", "process-vs-thread"]],
  ["process-states-pcb", "حالت‌های فرایند و PCB", "Process States and PCB", "new، ready، running، waiting، terminated و اطلاعات PCB.", "medium", 5, ["process-concept", "context-switching"]],
  ["context-switching", "تعویض متن", "Context Switching", "ذخیره/بازیابی state برای جابه‌جایی CPU بین executionها.", "medium", 5, ["process-states-pcb", "scheduling-basics"]],
  ["process-vs-thread", "فرایند در برابر Thread", "Process vs Thread", "address-space sharing، isolation، cost و failure impact.", "medium", 6, ["process-concept", "user-kernel-threads"]],
  ["user-kernel-threads", "Thread کاربر و Kernel", "User Threads vs Kernel Threads", "مدیریت thread در user space یا kernel و اثر blocking.", "medium", 5, ["process-vs-thread", "context-switching"]],
  ["scheduling-basics", "مبانی زمان‌بندی CPU", "CPU Scheduling Basics", "arrival، burst، waiting، turnaround، response و Gantt chart.", "hard", 7, ["fcfs", "sjf-srtf", "round-robin"]],
  ["fcfs", "FCFS", "FCFS", "اولین فرایند واردشده، زودتر اجرا می‌شود؛ ساده ولی convoy-prone.", "easy", 4, ["scheduling-basics", "sjf-srtf"]],
  ["sjf-srtf", "SJF و SRTF", "SJF and SRTF", "کوتاه‌ترین burst؛ SRTF نسخهٔ preemptive است.", "hard", 7, ["scheduling-basics", "priority-scheduling"]],
  ["priority-scheduling", "Priority Scheduling", "Priority Scheduling", "اولویت بالاتر زودتر؛ starvation با aging کم می‌شود.", "medium", 5, ["scheduling-basics", "round-robin"]],
  ["round-robin", "Round Robin", "Round Robin", "preemptive با quantum؛ trade-off بین response و overhead.", "medium", 6, ["scheduling-basics", "priority-scheduling"]],
  ["synchronization", "همگام‌سازی", "Synchronization", "race condition، shared state و کنترل interleaving.", "medium", 5, ["critical-section", "mutex-semaphore"]],
  ["critical-section", "ناحیهٔ بحرانی", "Critical Section", "بخشی که به دادهٔ مشترک دست می‌زند و نیازمند mutual exclusion است.", "medium", 5, ["synchronization", "mutex-semaphore"]],
  ["mutex-semaphore", "Mutex و Semaphore", "Mutex and Semaphore", "مالکیت mutex در برابر permits/counting در semaphore.", "hard", 6, ["critical-section", "monitor-condition-vars"]],
  ["monitor-condition-vars", "Monitor و Condition Variable", "Monitor and Condition Variables", "abstraction سطح بالاتر برای lock و wait/signal.", "medium", 5, ["mutex-semaphore", "classical-sync-problems"]],
  ["classical-sync-problems", "مسائل کلاسیک همگام‌سازی", "Classical Synchronization Problems", "producer-consumer، readers-writers و dining philosophers.", "medium", 5, ["synchronization", "deadlock-conditions"]],
  ["deadlock-conditions", "شرایط بن‌بست", "Deadlock Conditions", "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.", "hard", 6, ["deadlock-handling", "bankers-algorithm"]],
  ["deadlock-handling", "مدیریت بن‌بست", "Deadlock Prevention, Avoidance, Detection", "prevention، avoidance، detection و recovery را جدا کن.", "hard", 7, ["deadlock-conditions", "bankers-algorithm"]],
  ["bankers-algorithm", "الگوریتم بانکدار", "Banker's Algorithm", "safe state، safe sequence و درخواست resource.", "hard", 7, ["deadlock-handling", "deadlock-conditions"]],
  ["memory-allocation", "تخصیص حافظه", "Memory Allocation", "logical/physical address و fragmentation داخلی/خارجی.", "medium", 6, ["paging", "segmentation"]],
  ["paging", "صفحه‌بندی", "Paging", "page، frame، page table و حذف external fragmentation.", "hard", 7, ["memory-allocation", "tlb-thrashing-working-set"]],
  ["segmentation", "Segmentation", "Segmentation", "تقسیم منطقی برنامه به segmentهای متفاوت‌اندازه.", "medium", 5, ["memory-allocation", "paging"]],
  ["virtual-memory-demand-paging", "حافظهٔ مجازی و Demand Paging", "Virtual Memory and Demand Paging", "page fault، locality و آوردن صفحه هنگام نیاز.", "hard", 7, ["page-replacement", "tlb-thrashing-working-set"]],
  ["page-replacement", "جایگزینی صفحه", "Page Replacement", "FIFO، Optimal، LRU و Clock/Second Chance.", "hard", 8, ["virtual-memory-demand-paging", "tlb-thrashing-working-set"]],
  ["tlb-thrashing-working-set", "TLB، Thrashing و Working Set", "TLB, Thrashing and Working Set", "TLB hit، effective access intuition، locality و working set.", "hard", 7, ["paging", "virtual-memory-demand-paging"]],
  ["file-system-disk", "فایل‌سیستم و زمان‌بندی دیسک", "File-System Basics and Disk Scheduling", "allocation، directory، inode، FCFS/SSTF/SCAN/C-SCAN.", "medium", 6, ["os-responsibilities", "memory-allocation"]]
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
    provenanceNotes: "Expert-curated Operating System content. Not derived from verified question mappings.",
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
  ...common(subjectId), slug: subject, title: text("سیستم‌عامل", "Operating System"), englishTitle: "Operating System",
  summary: text("مرور سریع و امتحان‌محور سیستم‌عامل با تمرکز بر process، scheduling، synchronization، deadlock و memory.", "Exam-focused Operating System module."),
  status: "active", topicIds: topics.map((t) => id("topic", t.slug)), reviewOrder: topics.map((t) => id("topic", t.slug)),
  fiveMinuteReviewId: "five-minute-review:operating-system", goldenRuleCollectionId: "golden-rule:operating-system:collection",
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
  "process-vs-thread": "Shared address space → Threads. Independent address spaces → Processes. Threadها ارزان‌تر switch می‌شوند ولی failure می‌تواند کل process را خراب کند.",
  "scheduling-basics": "Waiting = زمان در ready queue. Turnaround = completion - arrival. Response = first run - arrival. Gantt chart را قبل از فرمول بکش.",
  "sjf-srtf": "SJF غیرpreemptive است؛ SRTF با arrival جدید و burst کمتر می‌تواند CPU را بگیرد.",
  "round-robin": "Quantum کوچک response را بهتر ولی context-switch overhead را بیشتر می‌کند؛ quantum خیلی بزرگ شبیه FCFS می‌شود.",
  synchronization: "Race condition وقتی نتیجه به interleaving وابسته شود. Critical section باید mutual exclusion، progress و bounded waiting را رعایت کند.",
  "mutex-semaphore": "Mutex مالک دارد؛ semaphore می‌تواند count/permit باشد. Binary semaphore همیشه mutex کامل نیست.",
  "deadlock-conditions": "چهار شرط با هم: Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait. حذف یکی یعنی prevention.",
  "deadlock-handling": "Prevention شرط را حذف می‌کند؛ Avoidance وارد unsafe state نمی‌شود؛ Detection بعداً پیدا می‌کند؛ Recovery آزادسازی/kill می‌کند.",
  "bankers-algorithm": "Safe state یعنی حداقل یک safe sequence وجود دارد. Unsafe الزاماً deadlocked نیست.",
  "memory-allocation": "Internal fragmentation داخل block تخصیص‌یافته است؛ external fragmentation بین free blockهاست.",
  paging: "Paging logical page را به physical frame نگاشت می‌کند و external fragmentation را حذف می‌کند.",
  segmentation: "Segmentation تقسیم منطقی با اندازه‌های متفاوت است؛ می‌تواند external fragmentation داشته باشد.",
  "virtual-memory-demand-paging": "Demand paging صفحه را هنگام نیاز می‌آورد؛ page fault یعنی صفحه در memory نیست.",
  "page-replacement": "FIFO ساده است و Belady anomaly دارد؛ Optimal آینده را می‌داند؛ LRU locality زمانی را تقریب می‌زند؛ Clock approximation است.",
  "tlb-thrashing-working-set": "TLB hit یعنی عبور از memory access معمول page table. Thrashing وقتی بیشتر وقت صرف page fault شود.",
  "file-system-disk": "SCAN مثل آسانسور در یک جهت حرکت می‌کند؛ C-SCAN فقط یک جهت سرویس مؤثر می‌دهد و سپس برمی‌گردد."
};

const lessonRecords = topics.map((topic) => ({
  ...common(id("lesson", topic.slug)), subjectId, topicId: id("topic", topic.slug),
  title: text(`${topic.fa} - Crash Course`, `${topic.en} Crash Course`), summary: text(topic.summary, topic.en),
  estimatedReadingMinutes: Math.max(3, Math.min(8, topic.minutes)),
  sections: [
    { id: "overview", sectionType: "overview", content: text(`${topic.summary} هدف، تشخیص سریع تستی است نه تاریخچه یا پیاده‌سازی طولانی.`, topic.summary) },
    { id: "exam-importance", sectionType: "exam-importance", content: text("این مبحث معمولاً با مقایسهٔ دو مفهوم نزدیک، محاسبهٔ کوتاه، یا تشخیص دام واژگانی سنجیده می‌شود. Frequency: Unknown.", "Exam use: contrast, short calculation, or terminology trap. Frequency unknown.") },
    { id: "key-concepts", sectionType: "key-concepts", content: text(lessonFocus[topic.slug] || `${topic.en}: تعریف کوتاه، دام رایج و fast-solving rule را حفظ کن.`, topic.en) },
    { id: "developer-analogy", sectionType: "summary", content: text("تشبیه توسعه‌دهنده: process مثل runtime مستقل، thread مثل worker داخل همان runtime، lock مثل guard روی shared state، page table مثل address mapper.", "Developer analogy: process/runtime, thread/worker, lock/shared-state guard, page table/address mapper.") },
    { id: "memory-shortcut", sectionType: "memory-tricks", content: text("کلید حافظه: هر topic را به یک کلمهٔ تشخیص وصل کن؛ receiver نیست، shared state؟ address? queue? page fault?", "Attach one recognition word to each topic.") },
    { id: "common-mistakes", sectionType: "common-mistakes", content: text("دام رایج: یکی‌گرفتن unsafe/deadlocked، TLB miss/page fault، waiting/turnaround، mutex/semaphore، paging/segmentation.", "Common trap: confusing neighboring concepts.") },
    { id: "fast-solving", sectionType: "quick-recap", content: text("قانون سریع: اول نوع سؤال را تشخیص بده؛ scheduling محاسباتی، deadlock شرطی، memory آدرس‌دهی، یا synchronization مفهومی.", "Fast rule: identify scheduling/deadlock/memory/sync first.") }
  ],
  goldenRuleIds: [], examTrapIds: [], flashcardIds: [], relatedQuestionIds: [], relatedLessonIds: topic.related.map((slug) => id("lesson", slug)),
  contentOrigin: origin, frequencyStatus: "unknown", developerAnalogy: "OS را مثل runtime manager ببین: CPU scheduler، memory mapper، lock manager و file abstraction.",
  twentySecondStrategy: "کلمهٔ کلیدی را به دستهٔ process/scheduling/sync/deadlock/memory/disk وصل کن.",
  miniSelfCheck: ["آیا سؤال فرمول scheduling دارد؟", "آیا فرق مفهوم نزدیک در گزینه‌ها دام است؟"]
}));

const ruleStatements = [
  ["Shared address space → Threads", "process-vs-thread"], ["Independent address spaces → Processes", "process-vs-thread"], ["Process owns resources; thread shares process resources", "process-vs-thread"], ["Thread context switch is usually cheaper", "process-vs-thread"],
  ["Ready means waiting for CPU", "process-states-pcb"], ["Waiting/Blocked means waiting for event or I/O", "process-states-pcb"], ["PCB stores process execution state", "process-states-pcb"], ["Context switch is overhead, not useful work", "context-switching"],
  ["Waiting time → time in ready queue", "scheduling-basics"], ["Turnaround time → completion minus arrival", "scheduling-basics"], ["Response time → first CPU run minus arrival", "scheduling-basics"], ["Preemptive scheduling can interrupt running process", "scheduling-basics"],
  ["FCFS can cause convoy effect", "fcfs"], ["SJF minimizes average waiting when burst times are known", "sjf-srtf"], ["SRTF → preemptive SJF", "sjf-srtf"], ["Priority scheduling can starve low-priority jobs", "priority-scheduling"], ["Aging reduces starvation", "priority-scheduling"], ["Round Robin → preemptive", "round-robin"], ["Very large RR quantum behaves like FCFS", "round-robin"], ["Very small RR quantum increases context-switch overhead", "round-robin"],
  ["Race condition → output depends on interleaving", "synchronization"], ["Critical section touches shared data", "critical-section"], ["Mutual exclusion → at most one inside critical section", "critical-section"], ["Progress → no unnecessary blocking", "critical-section"], ["Bounded waiting → no infinite waiting", "critical-section"], ["Mutex ownership matters", "mutex-semaphore"], ["Semaphore value may represent available permits", "mutex-semaphore"], ["Binary semaphore is not always a mutex", "mutex-semaphore"], ["Monitor wraps lock plus condition variables", "monitor-condition-vars"], ["Condition variable wait releases monitor lock", "monitor-condition-vars"],
  ["Four necessary conditions together → Deadlock possible", "deadlock-conditions"], ["Mutual Exclusion is one deadlock condition", "deadlock-conditions"], ["Hold and Wait is one deadlock condition", "deadlock-conditions"], ["No Preemption is one deadlock condition", "deadlock-conditions"], ["Circular Wait is one deadlock condition", "deadlock-conditions"], ["Prevention removes at least one deadlock condition", "deadlock-handling"], ["Avoidance keeps system in safe state", "deadlock-handling"], ["Detection finds deadlock after it may happen", "deadlock-handling"], ["Unsafe state ≠ necessarily deadlocked", "bankers-algorithm"], ["Safe state has at least one safe sequence", "bankers-algorithm"],
  ["Logical address is generated by CPU", "memory-allocation"], ["Physical address is actual memory location", "memory-allocation"], ["Internal fragmentation → wasted space inside allocation", "memory-allocation"], ["External fragmentation → free holes between allocations", "memory-allocation"], ["Paging removes external fragmentation", "paging"], ["Page table maps pages to frames", "paging"], ["Segmentation follows logical program units", "segmentation"], ["Segmentation can suffer external fragmentation", "segmentation"], ["Page fault → referenced page not in memory", "virtual-memory-demand-paging"], ["Demand paging loads pages only when needed", "virtual-memory-demand-paging"], ["Locality makes virtual memory effective", "virtual-memory-demand-paging"], ["FIFO page replacement may show Belady anomaly", "page-replacement"], ["Optimal replacement evicts page used farthest in future", "page-replacement"], ["LRU approximates temporal locality", "page-replacement"], ["Clock is a practical LRU approximation", "page-replacement"], ["TLB hit skips normal page-table memory access", "tlb-thrashing-working-set"], ["TLB miss ≠ page fault", "tlb-thrashing-working-set"], ["Thrashing → too much paging, too little useful work", "tlb-thrashing-working-set"], ["Working set approximates active pages", "tlb-thrashing-working-set"],
  ["Contiguous allocation is fast but fragments", "file-system-disk"], ["Linked allocation avoids external file holes but hurts random access", "file-system-disk"], ["Indexed allocation uses index block/inode intuition", "file-system-disk"], ["SSTF chooses nearest request", "file-system-disk"], ["SCAN moves like elevator", "file-system-disk"], ["C-SCAN services in one direction", "file-system-disk"]
];
const selectedRuleStatements = ruleStatements.slice(0, 54);
const goldenRecords = selectedRuleStatements.map(([statement, slug], index) => ({
  ...common(seq("golden-rule", index + 1, 2)), subjectId, topicIds: [id("topic", slug)], statement,
  patternClusterIds: [], aggregationStatus: "topic", aggregatedRuleIds: [], relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));
goldenRecords.push({ ...common("golden-rule:operating-system:collection"), subjectId, topicIds: topics.map((t) => id("topic", t.slug)), statement: null, patternClusterIds: [], aggregationStatus: "subject-aggregate", aggregatedRuleIds: goldenRecords.map((r) => r.id), relatedQuestionIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true });

const trapSpecs = [
  ["Process vs Thread", "Thread مثل process مستقل است.", "هر دو execution دارند.", "Thread address space را share می‌کند؛ process مستقل‌تر است.", "shared address → thread", "process-vs-thread"],
  ["Waiting vs Turnaround", "هر دو زمان پایان فرایند هستند.", "هر دو در جدول scheduling می‌آیند.", "Waiting فقط ready queue؛ turnaround از arrival تا completion.", "TAT = C - A", "scheduling-basics"],
  ["Response vs Completion", "response همان زمان پایان است.", "هر دو به timeline مربوط‌اند.", "Response اولین اجرا منهای arrival است.", "first run - arrival", "scheduling-basics"],
  ["SJF vs SRTF", "SJF هم همیشه preemptive است.", "هر دو shortest را انتخاب می‌کنند.", "SRTF با arrival کوتاه‌تر preempt می‌کند.", "RT = remaining time", "sjf-srtf"],
  ["Starvation vs Deadlock", "هر انتظار طولانی deadlock است.", "هر دو توقف progress هستند.", "Deadlock چرخه/شرایط خاص دارد؛ starvation ممکن است بدون چرخه باشد.", "cycle/conditions → deadlock", "deadlock-conditions"],
  ["Deadlocked vs Unsafe", "unsafe یعنی الان deadlock رخ داده.", "هر دو خطرناک‌اند.", "Unsafe الزاماً deadlocked نیست؛ فقط safe sequence تضمین ندارد.", "unsafe ≠ deadlocked", "bankers-algorithm"],
  ["Mutex vs Semaphore", "binary semaphore همیشه mutex است.", "هر دو برای synchronization هستند.", "Mutex ownership دارد؛ semaphore permits/counting دارد.", "ownership → mutex", "mutex-semaphore"],
  ["Internal vs External Fragmentation", "هر wasted memory external است.", "هر دو هدررفت‌اند.", "Internal داخل allocation؛ external بین holeهای آزاد.", "inside vs between", "memory-allocation"],
  ["Page Fault vs TLB Miss", "هر TLB miss یعنی disk access.", "هر دو translation failure به نظر می‌رسند.", "TLB miss ممکن است page table در memory را بخواند؛ page fault صفحه در memory نیست.", "not in memory → fault", "tlb-thrashing-working-set"],
  ["FIFO vs LRU", "FIFO همان قدیمی‌ترین استفاده‌نشده را حذف می‌کند.", "هر دو old را نگاه می‌کنند.", "FIFO زمان ورود؛ LRU زمان آخرین استفاده.", "entry time vs use time", "page-replacement"],
  ["Belady anomaly", "frame بیشتر همیشه fault کمتر می‌دهد.", "منطقی به نظر می‌رسد.", "FIFO می‌تواند با frame بیشتر fault بیشتر بدهد.", "Belady → FIFO", "page-replacement"],
  ["Paging vs Segmentation", "هر دو واحدهای هم‌اندازه دارند.", "هر دو memory را تقسیم می‌کنند.", "Paging fixed-size؛ segmentation logical variable-size.", "fixed page, logical segment", "segmentation"],
  ["Logical vs Physical Address", "CPU مستقیم physical تولید می‌کند.", "هر دو address هستند.", "CPU logical می‌دهد؛ MMU/page table به physical نگاشت می‌کند.", "CPU → logical", "memory-allocation"],
  ["Local vs Global Replacement", "همیشه فقط صفحات همان process قربانی می‌شوند.", "locality ذهن را سمت local می‌برد.", "Local فقط process خودش؛ global از کل frame pool انتخاب می‌کند.", "victim scope", "page-replacement"],
  ["SCAN vs C-SCAN", "C-SCAN در برگشت هم سرویس می‌دهد.", "هر دو sweep دارند.", "C-SCAN یک جهت سرویس می‌دهد و برگشت برای reset است.", "C = circular one-way", "file-system-disk"],
  ["Prevention vs Avoidance", "هر دو بعد از deadlock اجرا می‌شوند.", "هر دو جلوگیری می‌کنند.", "Prevention شرط را حذف می‌کند؛ avoidance safe state را چک می‌کند.", "condition vs safe state", "deadlock-handling"],
  ["Safe Sequence", "اگر یک ترتیب fail شود state unsafe است.", "Banker جدول‌محور است.", "وجود حداقل یک safe sequence کافی است.", "one sequence is enough", "bankers-algorithm"],
  ["Round Robin Quantum", "quantum کمتر همیشه بهتر است.", "response سریع‌تر می‌شود.", "quantum خیلی کم overhead context switch را زیاد می‌کند.", "small q → overhead", "round-robin"],
  ["Priority Aging", "aging یعنی کاهش اولویت process قدیمی.", "کلمه aging مبهم است.", "aging معمولاً priority منتظرها را بهتر می‌کند تا starvation کم شود.", "waiting raises priority", "priority-scheduling"],
  ["Condition Variable", "signal بدون lock مستقل کار می‌کند.", "نام signal ساده است.", "condition variable با monitor/lock معنا دارد؛ wait معمولاً lock را release می‌کند.", "condition needs monitor", "monitor-condition-vars"],
  ["Critical Section Progress", "mutual exclusion کافی است.", "مهم‌ترین شرط به نظر می‌رسد.", "Progress و bounded waiting هم برای راه‌حل درست لازم‌اند.", "not only mutex", "critical-section"],
  ["Demand Paging", "همهٔ صفحات در start load می‌شوند.", "برنامه برای اجرا کامل تصور می‌شود.", "Demand paging صفحه را هنگام reference لازم می‌آورد.", "load on demand", "virtual-memory-demand-paging"],
  ["Thrashing", "fault زیاد یعنی CPU busyتر است.", "activity زیاد دیده می‌شود.", "thrashing یعنی سیستم بیشتر وقت را صرف paging می‌کند نه کار مفید.", "paging > useful work", "tlb-thrashing-working-set"],
  ["SSTF Trap", "SSTF همیشه عادلانه‌ترین است.", "nearest seek کم می‌کند.", "SSTF می‌تواند درخواست‌های دور را starve کند.", "nearest can starve", "file-system-disk"]
];
const trapRecords = trapSpecs.map((t, index) => ({ ...common(seq("exam-trap", index + 1, 2)), subjectId, topicIds: [id("topic", t[5])], title: text(t[0], t[0]), trap: text(t[1], t[0]), wrongThinking: text(t[2], t[2]), correctThinking: text(t[3], t[3]), shortcut: text(t[4], t[4]), relatedQuestionIds: [], trapType: "concept-confusion", patternClusterIds: [], frequencyLevel: "unknown", contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const cardSeeds = [
  ["Process و Thread چه فرق اصلی دارند؟", "Threadها address space را share می‌کنند.\nProcessها address space مستقل دارند.", "comparison", "process-vs-thread"],
  ["Waiting time چیست؟", "زمانی که process در ready queue منتظر CPU است.", "scheduling", "scheduling-basics"],
  ["Turnaround time فرمول؟", "Completion time - Arrival time.", "formula", "scheduling-basics"],
  ["Response time فرمول؟", "First run time - Arrival time.", "formula", "scheduling-basics"],
  ["Round Robin preemptive است؟", "بله. با quantum زمانی CPU را پس می‌گیرد.", "scheduling", "round-robin"],
  ["چهار شرط deadlock؟", "Mutual Exclusion، Hold and Wait، No Preemption، Circular Wait.", "deadlock", "deadlock-conditions"],
  ["Unsafe state یعنی deadlock؟", "نه. فقط safe sequence تضمین‌شده نداریم.", "trap", "bankers-algorithm"],
  ["Mutex ownership دارد؟", "بله. مالک lock مهم است.", "synchronization", "mutex-semaphore"],
  ["Semaphore چه چیزی را نمایش می‌دهد؟", "تعداد permit/resourceهای قابل استفاده.", "synchronization", "mutex-semaphore"],
  ["Internal fragmentation چیست؟", "هدررفت داخل block تخصیص‌یافته.", "memory", "memory-allocation"],
  ["External fragmentation چیست؟", "هدررفت بین holeهای آزاد حافظه.", "memory", "memory-allocation"],
  ["Page fault چیست؟", "صفحهٔ موردنیاز در memory نیست.", "virtual-memory", "virtual-memory-demand-paging"],
  ["TLB hit چه سودی دارد؟", "دسترسی معمول به page table را حذف می‌کند.", "memory", "tlb-thrashing-working-set"],
  ["FIFO چه anomaly دارد؟", "Belady’s anomaly ممکن است رخ دهد.", "trap", "page-replacement"],
  ["LRU چه ایده‌ای دارد؟", "Temporal locality: چیزی که اخیراً استفاده شده احتمالاً دوباره لازم می‌شود.", "virtual-memory", "page-replacement"],
  ["SCAN disk scheduling شبیه چیست؟", "آسانسور. در یک جهت سرویس می‌دهد.", "file-system", "file-system-disk"]
];
ruleStatements.forEach(([statement, slug]) => cardSeeds.push([`قانون: ${statement}`, statement, "shortcut", slug]));
trapSpecs.forEach((trap) => cardSeeds.push([`دام: ${trap[0]}`, `${trap[4]}.\n${trap[3]}`, "trap", trap[5]]));
topics.forEach((topic) => cardSeeds.push([`تعریف سریع ${topic.fa}`, topic.summary, "definition", topic.slug]));
const flashcardRecords = cardSeeds.slice(0, 104).map((card, index) => ({ ...common(seq("flashcard", index + 1, 3)), subjectId, topicIds: [id("topic", card[3])], category: card[2], front: text(card[0], card[0]), back: text(card[1], card[1]), importance: "unknown", relatedQuestionIds: [], difficulty: index % 5 === 0 ? "hard" : index % 3 === 0 ? "medium" : "easy", goldenRuleIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true }));

const reviewItems = selectedRuleStatements.slice(0, 48).map(([statement, slug], index) => ({ id: `os-review-${String(index + 1).padStart(2, "0")}`, text: text(statement, statement), sourceIds: [], relatedAssetIds: [id("topic", slug)] }));
reviewItems.push({ id: "os-review-49", text: text("Frequency: Unknown تا زمان mapping رسمی سؤال‌ها.", "Frequency unknown until verified mapping."), sourceIds: [], relatedAssetIds: [] });
const reviewRecord = { ...common("five-minute-review:operating-system"), subjectId, title: text("مرور پنج‌دقیقه‌ای سیستم‌عامل", "Operating System Five-Minute Review"), items: reviewItems, assetReferences: [...goldenRecords.slice(0, 22).map((r) => r.id), ...trapRecords.slice(0, 10).map((r) => r.id)], estimatedReviewSeconds: 300, contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true };

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

writeModule("content/subjects/operating-system.js", "registerOperatingSystemSubject", "operatingSystemSubject", { dataset: dataset("operating-system:subjects", "subjects", [subjectRecord]) }, ["dataset"]);
writeModule("content/topics/operating-system-topic-registry.js", "registerOperatingSystemTopicRegistry", "operatingSystemTopicRegistry", { dataset: dataset("operating-system:topics", "topics", topicRecords) }, ["dataset"]);
writeModule("content/topics/operating-system-topic-relations.js", "registerOperatingSystemTopicRelations", "operatingSystemTopicRelations", { dataset: dataset("operating-system:topic-relations", "related-topics", relationRecords) }, ["dataset"]);
writeModule("content/lessons/operating-system/operating-system-crash-course.js", "registerOperatingSystemCrashCourse", "operatingSystemCrashCourse", { dataset: dataset("operating-system:lessons", "lessons", lessonRecords) }, ["dataset"]);
writeModule("content/golden-rules/operating-system-golden-rules.js", "registerOperatingSystemGoldenRules", "operatingSystemGoldenRules", { dataset: dataset("operating-system:golden-rules", "golden-rules", goldenRecords) }, ["dataset"]);
writeModule("content/exam-traps/operating-system-exam-traps.js", "registerOperatingSystemExamTraps", "operatingSystemExamTraps", { dataset: dataset("operating-system:exam-traps", "exam-traps", trapRecords) }, ["dataset"]);
writeModule("content/flashcards/operating-system-flashcards.js", "registerOperatingSystemFlashcards", "operatingSystemFlashcards", { dataset: dataset("operating-system:flashcards", "flashcards", flashcardRecords) }, ["dataset"]);
writeModule("content/reviews/operating-system-five-minute-review.js", "registerOperatingSystemFiveMinuteReview", "operatingSystemFiveMinuteReview", { dataset: dataset("operating-system:five-minute-review", "five-minute-reviews", [reviewRecord]) }, ["dataset"]);

console.log(`Generated Operating System content: ${topics.length} topics, ${lessonRecords.length} lessons, ${goldenRecords.length} rules, ${flashcardRecords.length} cards, ${trapRecords.length} traps.`);
