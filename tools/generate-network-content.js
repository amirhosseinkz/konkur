#!/usr/bin/env node
"use strict";

const fs = require("fs");

const timestamp = "2026-07-15T12:00:00.000Z";
const subjectId = "subject:network";
const origin = "expert-curated";

const topics = [
  ["network-models", "مدل‌های شبکه: OSI و TCP/IP", "Network Models: OSI and TCP/IP", "ترتیب لایه‌ها، وظیفه‌ها، پروتکل‌ها و نگاشت دو مدل.", "medium", 6, ["encapsulation-pdu", "tcp-vs-udp"]],
  ["encapsulation-pdu", "کپسوله‌سازی و PDU", "Encapsulation and Protocol Data Units", "نام داده در هر لایه و مسیر اضافه‌شدن header.", "easy", 4, ["network-models", "switching-mac"]],
  ["tcp-vs-udp", "TCP در برابر UDP", "TCP vs UDP", "تشخیص سریع reliability، ordering، flow و congestion control.", "medium", 6, ["ports-sockets", "flow-control", "congestion-control", "dns"]],
  ["ports-sockets", "پورت‌ها و سوکت‌ها", "Ports and Sockets", "شناسهٔ فرایند شبکه و ترکیب IP/Port.", "easy", 4, ["tcp-vs-udp", "common-app-protocols"]],
  ["http-https", "HTTP و HTTPS", "HTTP and HTTPS", "درخواست/پاسخ، statelessness، methodها، status code و TLS.", "medium", 6, ["tcp-vs-udp", "dns", "common-app-protocols"]],
  ["dns", "DNS", "DNS", "تبدیل نام به آدرس، رکوردها، cache و رفتار UDP/TCP.", "medium", 6, ["ports-sockets", "http-https"]],
  ["ipv4-addressing", "آدرس‌دهی IPv4", "IPv4 Addressing", "بیت‌های network/host، CIDR و آدرس‌های خاص.", "medium", 6, ["subnetting-basics", "routing-fundamentals"]],
  ["subnetting-basics", "مبانی Subnetting", "Subnetting Basics", "محاسبهٔ سریع mask، تعداد آدرس، network و broadcast.", "hard", 8, ["ipv4-addressing", "routing-fundamentals"]],
  ["arp-icmp", "ARP و ICMP", "ARP and ICMP", "یافتن MAC محلی و پیام‌های کنترلی/خطا.", "easy", 4, ["ipv4-addressing", "switching-mac"]],
  ["routing-fundamentals", "مبانی Routing", "Routing Fundamentals", "جدول routing، longest-prefix، static/dynamic و الگوریتم‌ها.", "hard", 8, ["ipv4-addressing", "subnetting-basics"]],
  ["switching-mac", "Switching و MAC", "Switching and MAC Addressing", "لایهٔ داده، frame forwarding و جدول MAC.", "medium", 5, ["network-models", "arp-icmp"]],
  ["flow-control", "Flow Control", "Flow Control", "محافظت از گیرنده در برابر فرستندهٔ سریع.", "medium", 5, ["tcp-vs-udp", "sliding-window"]],
  ["congestion-control", "Congestion Control", "Congestion Control", "محافظت از شبکه در برابر ازدحام.", "hard", 6, ["tcp-vs-udp", "flow-control"]],
  ["error-detection", "تشخیص خطا: Parity، Checksum، CRC", "Error Detection: Parity, Checksum, CRC", "تشخیص خطا بدون ورود به جبر سنگین.", "medium", 6, ["arq-protocols"]],
  ["arq-protocols", "پروتکل‌های ARQ", "ARQ Protocols", "ACK، timeout و retransmission برای قابلیت اطمینان.", "medium", 6, ["error-detection", "sliding-window", "stop-and-wait"]],
  ["sliding-window", "Sliding Window", "Sliding Window", "ارسال چند frame قبل از ACK و کنترل پنجره.", "hard", 7, ["flow-control", "go-back-n", "selective-repeat"]],
  ["stop-and-wait", "Stop-and-Wait", "Stop-and-Wait", "یک ارسال، یک انتظار؛ ساده ولی کم‌بازده.", "easy", 4, ["arq-protocols", "sliding-window"]],
  ["go-back-n", "Go-Back-N", "Go-Back-N", "خطا باعث ارسال دوباره از frame خراب به بعد می‌شود.", "hard", 6, ["sliding-window", "selective-repeat"]],
  ["selective-repeat", "Selective Repeat", "Selective Repeat", "فقط frameهای خراب دوباره ارسال می‌شوند.", "hard", 6, ["sliding-window", "go-back-n"]],
  ["common-app-protocols", "پروتکل‌های کاربردی رایج", "Common Application Protocols", "DNS، HTTP، HTTPS، SMTP، FTP و پورت‌های پرتکرار.", "easy", 5, ["ports-sockets", "dns", "http-https"]]
].map(([slug, fa, en, summary, difficulty, minutes, related]) => ({ slug, fa, en, summary, difficulty, minutes, related }));

function topicId(slug) { return `topic:network:${slug}`; }
function lessonId(slug) { return `lesson:network:${slug}:crash`; }
function grId(index) { return `golden-rule:network:${String(index).padStart(2, "0")}`; }
function trapId(index) { return `exam-trap:network:${String(index).padStart(2, "0")}`; }
function cardId(index) { return `flashcard:network:${String(index).padStart(3, "0")}`; }
function text(fa, en) { return { fa, en, primaryLocale: "fa", translationStatus: "not-applicable" }; }
function approval() { return { status: "approved", reviewerRole: "exam-editor", reviewedAt: timestamp, reviewContractVersion: 1 }; }
function common(id) {
  return {
    id, recordKey: `${id}@1`, schemaVersion: 1, version: 1,
    verificationStatus: "unverified", publicationStatus: "published", educationalApproval: approval(),
    sourceIds: [], primarySourceId: null, sourcePage: null, sourceUrl: null,
    provenanceNotes: "Expert-curated standard Computer Engineering Networks content. Not derived from verified question mappings.",
    createdAt: timestamp, updatedAt: timestamp
  };
}
function dataset(datasetId, datasetType, records) {
  return { datasetId, datasetType, schemaVersion: 1, version: 1, testOnly: false, records };
}
function writeModule(path, fnName, namespace, key, payload, registrations) {
  const lines = [`(function ${fnName}(global) {`, `  "use strict";`, `  var app = global.KonkurApp;`, `  var payload = ${JSON.stringify(payload, null, 2)};`, `  var registrations = [];`];
  registrations.forEach((name) => lines.push(`  registrations.push(app.content.registry.register(payload.${name}));`));
  lines.push(`  app.register("${namespace}", "${key}", { payload: payload, registrations: registrations });`, `})(window);`, "");
  fs.writeFileSync(path, lines.join("\n"));
}

const topicRecords = topics.map((topic) => ({
  ...common(topicId(topic.slug)),
  subjectId,
  slug: topic.slug,
  title: text(topic.fa, topic.en),
  englishTitle: topic.en,
  shortDescription: topic.summary,
  summary: text(topic.summary, topic.en),
  status: "active",
  lessonIds: [lessonId(topic.slug)],
  flashcardIds: [],
  goldenRuleIds: [],
  examTrapIds: [],
  relatedQuestionIds: [],
  relatedTopicLinkIds: [],
  relatedTopicIds: topic.related.map(topicId),
  prerequisiteTopicIds: [],
  difficulty: topic.difficulty,
  importance: "unknown",
  frequency: "unknown",
  estimatedReadingMinutes: topic.minutes,
  contentOrigin: origin,
  frequencyStatus: "unknown",
  lastNightIncluded: true,
  versionLabel: "1"
}));

const subjectRecord = {
  ...common(subjectId),
  slug: "network",
  title: text("شبکه‌های کامپیوتری", "Computer Networks"),
  englishTitle: "Computer Networks",
  summary: text("مرور سریع و امتحان‌محور شبکه با تمرکز بر تشخیص گزینه‌های پرتله.", "Exam-focused Computer Networks crash course."),
  status: "active",
  topicIds: topics.map((t) => topicId(t.slug)),
  reviewOrder: topics.map((t) => topicId(t.slug)),
  fiveMinuteReviewId: "five-minute-review:network",
  goldenRuleCollectionId: "golden-rule:network:collection",
  estimatedStudyMinutes: topics.reduce((sum, t) => sum + t.minutes, 0),
  contentOrigin: origin,
  frequencyStatus: "unknown",
  lastNightPriority: "high",
  verificationLabel: "expert-curated; question relationships unverified"
};

const lessonFocus = {
  "network-models": "Physical→Bits، Data Link→Frames، Network→Packets، Transport→Segments/Datagrams. Router در Network و Switch در Data Link قرار می‌گیرد.",
  "tcp-vs-udp": "Reliable، ordered، flow control و congestion control را اول به TCP وصل کن؛ DNS query و VoIP معمولاً UDP هستند، نه همیشه.",
  "http-https": "HTTP درخواست/پاسخ و stateless است؛ HTTPS همان HTTP روی TLS است. GET معمولاً idempotent و POST معمولاً نه.",
  dns: "DNS روی port 53 است؛ query معمولاً UDP، ولی پاسخ بزرگ یا zone transfer می‌تواند TCP باشد.",
  "subnetting-basics": "برای /n، host bits = 32-n و تعداد آدرس = 2^host. convention رایج: usable = کل منهای network و broadcast.",
  "routing-fundamentals": "Longest-prefix match تصمیم نهایی routing است. Distance vector حس Bellman-Ford و Link state حس Dijkstra دارد.",
  "flow-control": "Flow control protects the receiver. اگر سؤال گیرنده/بافر/سرعت فرستنده گفت، دنبال Flow Control بگرد.",
  "congestion-control": "Congestion control protects the network. اگر سؤال ازدحام مسیر/packet loss/queue گفت، دنبال Congestion Control بگرد.",
  "error-detection": "Parity ساده، Checksum جمع/مکمل، CRC مبتنی بر polynomial است. این‌ها detection هستند نه correction.",
  "arq-protocols": "ARQ یعنی ACK + timeout + retransmission. تفاوت اصلی مدل‌ها در تعداد frameهای درگیر در ارسال مجدد است.",
  "sliding-window": "Sliding Window اجازه می‌دهد چند frame بدون انتظار برای ACK تک‌به‌تک در مسیر باشند.",
  "stop-and-wait": "Stop-and-Wait ساده‌ترین ARQ است: یک frame ارسال، سپس انتظار ACK.",
  "go-back-n": "در Go-Back-N اگر frame i خراب شود، از i به بعد دوباره ارسال می‌شود.",
  "selective-repeat": "Selective Repeat فقط frameهای خراب/گم‌شده را دوباره می‌فرستد و گیرنده out-of-order را نگه می‌دارد."
};

const lessonRecords = topics.map((topic) => ({
  ...common(lessonId(topic.slug)),
  subjectId,
  topicId: topicId(topic.slug),
  title: text(`${topic.fa} - Crash Course`, `${topic.en} Crash Course`),
  summary: text(topic.summary, topic.en),
  estimatedReadingMinutes: Math.max(3, Math.min(8, topic.minutes)),
  sections: [
    { id: "overview", sectionType: "overview", content: text(`${topic.summary} هدف این درس تشخیص سریع گزینه است، نه پوشش دانشگاهی کامل.`, topic.summary) },
    { id: "exam-importance", sectionType: "exam-importance", content: text("در آزمون، این مبحث معمولاً با تشخیص لایه، پروتکل، محدودیت یا مقایسهٔ دو مفهوم سنجیده می‌شود. Frequency: Unknown.", "Used for layer/protocol/contrast recognition. Frequency unknown.") },
    { id: "key-concepts", sectionType: "key-concepts", content: text(lessonFocus[topic.slug] || `${topic.en}: تعریف کوتاه، کاربرد، دام رایج و ارتباط آن با topicهای نزدیک را حفظ کن.`, topic.en) },
    { id: "golden-rules", sectionType: "summary", content: text("اول کلمات کلیدی سؤال را پیدا کن؛ بعد به قانون طلایی مرتبط وصل کن؛ از حدس‌زدن بر اساس سال یا شمارهٔ سؤال خودداری کن.", "Match keywords to rules; never infer from year or number.") },
    { id: "common-traps", sectionType: "common-mistakes", content: text("دام رایج: جایگزین‌کردن مفهوم نزدیک. مثال: Flow با Congestion، Switch با Router، Detection با Correction.", "Common trap: confusing neighboring concepts.") },
    { id: "memory-shortcuts", sectionType: "memory-tricks", content: text("کلید حافظه: یک جملهٔ کوتاه بساز و به انگلیسی اصلی concept بچسبان؛ نه به توضیح بلند.", "Attach one short memory cue to the English term.") },
    { id: "quick-recap", sectionType: "quick-recap", content: text("۲۰ ثانیه: keyword را پیدا کن، لایه/پروتکل/محدودیت را مشخص کن، گزینه‌های absolute را با احتیاط حذف کن.", "20 seconds: keyword, layer/protocol/constraint, beware absolutes.") }
  ],
  goldenRuleIds: [],
  examTrapIds: [],
  flashcardIds: [],
  relatedQuestionIds: [],
  relatedLessonIds: topic.related.map(lessonId),
  contentOrigin: origin,
  frequencyStatus: "unknown",
  developerAnalogy: "مثل انتخاب API contract درست: اول responsibility را بفهم، بعد implementation detail را کنار بگذار.",
  twentySecondStrategy: "کلمهٔ کلیدی سؤال را به لایه، پروتکل یا control mechanism وصل کن.",
  miniSelfCheck: ["آیا این مفهوم مربوط به receiver، network، layer یا protocol است؟", "آیا گزینه statement مطلق دارد؟"]
}));

const ruleStatements = [
  ["Reliable delivery → TCP first", "tcp-vs-udp"], ["Ordered delivery → TCP", "tcp-vs-udp"], ["Connectionless and low overhead → UDP", "tcp-vs-udp"], ["DNS query → usually UDP port 53", "dns"], ["DNS zone transfer or large response → TCP can appear", "dns"], ["HTTPS → HTTP protected by TLS", "http-https"], ["HTTP is stateless even with persistent connections", "http-https"], ["GET is usually safe/idempotent; POST usually is not", "http-https"], ["Flow control → receiver protection", "flow-control"], ["Congestion control → network protection", "congestion-control"], ["Router → Network layer", "routing-fundamentals"], ["Switch → Data-link layer", "switching-mac"], ["Hub/repeater → Physical layer", "network-models"], ["Physical → Bits", "network-models"], ["Data Link → Frames", "network-models"], ["Network → Packets", "network-models"], ["Transport → Segments/Datagrams", "network-models"], ["Application → Messages/Data", "network-models"], ["Longest matching prefix → routing decision", "routing-fundamentals"], ["Static routing is configured; dynamic routing learns", "routing-fundamentals"], ["Distance vector → Bellman-Ford intuition", "routing-fundamentals"], ["Link state → Dijkstra intuition", "routing-fundamentals"], ["ARP maps IPv4 address to MAC on local network", "arp-icmp"], ["ICMP reports control/error information", "arp-icmp"], ["Network address → all host bits zero", "ipv4-addressing"], ["Broadcast address → all host bits one", "ipv4-addressing"], ["/24 → 256 addresses, commonly 254 usable", "subnetting-basics"], ["Same subnet → same network after mask", "subnetting-basics"], ["CRC → polynomial-based error detection", "error-detection"], ["Parity detects simple odd-bit error patterns", "error-detection"], ["Checksum is detection, not correction", "error-detection"], ["ARQ → ACK + timeout + retransmission", "arq-protocols"], ["Stop-and-Wait → one outstanding frame", "stop-and-wait"], ["Sliding Window → multiple outstanding frames", "sliding-window"], ["Go-Back-N retransmits from the missing frame onward", "go-back-n"], ["Selective Repeat retransmits only missing/bad frames", "selective-repeat"], ["GBN receiver usually discards out-of-order frames", "go-back-n"], ["Selective Repeat receiver can buffer out-of-order frames", "selective-repeat"], ["Socket identity → IP + port + protocol", "ports-sockets"], ["Port identifies application process, not host", "ports-sockets"], ["SMTP 25, HTTP 80, HTTPS 443, DNS 53", "common-app-protocols"], ["Queue is the usual model for packet buffering", "congestion-control"]
];
const goldenRecords = ruleStatements.map(([statement, slug], index) => ({
  ...common(grId(index + 1)), subjectId, topicIds: [topicId(slug)], statement,
  patternClusterIds: [], aggregationStatus: "topic", aggregatedRuleIds: [], relatedQuestionIds: [],
  contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));
goldenRecords.push({
  ...common("golden-rule:network:collection"), subjectId, topicIds: topics.map((t) => topicId(t.slug)), statement: null,
  patternClusterIds: [], aggregationStatus: "subject-aggregate", aggregatedRuleIds: goldenRecords.map((r) => r.id), relatedQuestionIds: [],
  contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
});

const trapSpecs = [
  ["Flow control vs congestion control", "گیرنده کند است؛ پس ازدحام شبکه است.", "شباهت واژهٔ control گمراه‌کننده است.", "Flow گیرنده را حفظ می‌کند؛ Congestion شبکه را.", "receiver → flow، network → congestion", "flow-control"],
  ["TCP reliability vs UDP speed", "UDP همیشه بهتر است چون سریع‌تر است.", "کم بودن overhead با reliability اشتباه می‌شود.", "اگر تضمین، ترتیب یا retransmission لازم است TCP را ببین.", "reliable/ordered → TCP", "tcp-vs-udp"],
  ["Switch vs router layers", "هر دستگاه forwarding یعنی router.", "هر دو traffic را عبور می‌دهند.", "Switch با MAC و frame؛ Router با IP و packet.", "MAC/frame → switch", "switching-mac"],
  ["DNS UDP vs TCP exceptions", "DNS همیشه UDP است.", "حفظ کردن یک جملهٔ مطلق آسان است.", "DNS معمولاً UDP است؛ TCP برای zone transfer یا پاسخ بزرگ ممکن است.", "usually ≠ always", "dns"],
  ["HTTP statelessness vs persistent connections", "اگر connection باز ماند پس stateful است.", "Persistent connection با application state قاطی می‌شود.", "HTTP می‌تواند connection را reuse کند ولی هر request مستقل است.", "connection reuse ≠ app state", "http-https"],
  ["Network address vs first usable host", "اولین آدرس subnet همان host اول است.", "عدد اول بازه فریبنده است.", "Network address همهٔ host bits صفر است و معمولاً usable نیست.", "all host bits 0 → network", "subnetting-basics"],
  ["Broadcast address vs last usable host", "آخرین آدرس host آخر است.", "آخر بازه با آخرین host اشتباه می‌شود.", "Broadcast همهٔ host bits یک است و معمولاً usable نیست.", "all host bits 1 → broadcast", "subnetting-basics"],
  ["Go-Back-N vs Selective Repeat", "هر دو فقط frame خراب را دوباره می‌فرستند.", "هر دو sliding-window هستند.", "GBN از خطا به بعد را می‌فرستد؛ SR فقط خراب/گمشده را.", "GBN = go back", "go-back-n"],
  ["OSI layer protocol confusion", "TCP را Network layer در نظر بگیر چون شبکه‌ای است.", "نام network کلی است.", "TCP/UDP در Transport هستند؛ IP در Network است.", "TCP/UDP → Transport", "network-models"],
  ["Error detection vs correction", "CRC خطا را خودش اصلاح می‌کند.", "قدرت detection با correction اشتباه می‌شود.", "Parity/Checksum/CRC برای detection هستند؛ correction نیازمند مکانیزم دیگر است.", "detect ≠ correct", "error-detection"],
  ["ARP scope", "ARP از routerهای دور MAC مقصد نهایی را می‌یابد.", "MAC مقصد نهایی جذاب است.", "ARP برای next hop در شبکهٔ محلی است.", "ARP local next-hop", "arp-icmp"],
  ["Longest-prefix match", "کوچک‌ترین metric همیشه برنده است.", "metric مهم است اما بعد از match.", "ابتدا longest matching prefix انتخاب می‌شود، سپس tieها بررسی می‌شوند.", "longest prefix first", "routing-fundamentals"],
  ["CIDR host count", "برای /n تعداد host همان n است.", "عدد prefix جلوی چشم است.", "host bits برابر 32-n است؛ تعداد آدرس 2^(32-n).", "host bits = 32-prefix", "subnetting-basics"],
  ["Port vs IP", "port دستگاه را مشخص می‌کند.", "socket کامل با port دیده می‌شود.", "IP host را مشخص می‌کند؛ port فرایند/سرویس را.", "IP host, port process", "ports-sockets"],
  ["HTTPS identity", "HTTPS یک پروتکل کاملاً جدا از HTTP است.", "نام جداگانه دارد.", "HTTPS یعنی HTTP روی TLS با port رایج 443.", "HTTPS = HTTP + TLS", "http-https"],
  ["Checksum strength", "Checksum همهٔ خطاها را قطعی پیدا می‌کند.", "کلمهٔ checksum مطمئن به نظر می‌رسد.", "هیچ detection ساده‌ای تضمین همهٔ خطاها نیست؛ CRC معمولاً قوی‌تر است.", "CRC stronger than simple checksum", "error-detection"],
  ["Stop-and-Wait throughput", "سادگی یعنی بهترین عملکرد.", "کم بودن حالت‌ها جذاب است.", "Stop-and-Wait روی لینک با delay بالا throughput ضعیف دارد.", "one outstanding → low utilization", "stop-and-wait"],
  ["Selective Repeat sequence space", "SR مثل GBN فقط به اندازهٔ پنجره sequence لازم دارد.", "هر دو window دارند.", "SR به فضای sequence بزرگ‌تر نیاز دارد تا ابهام frame قدیمی/جدید کم شود.", "SR buffers → stricter sequence", "selective-repeat"],
  ["TCP flow vs TCP congestion", "هر چیزی در TCP مربوط به congestion است.", "هر دو در TCP دیده می‌شوند.", "receive window مربوط به flow است؛ congestion window مربوط به شبکه.", "rwnd receiver, cwnd network", "congestion-control"],
  ["Frame vs packet", "هر بسته‌ای packet نام دارد.", "packet در زبان عمومی زیاد استفاده می‌شود.", "در مدل امتحانی: Data Link frame و Network packet است.", "layer decides PDU name", "encapsulation-pdu"],
  ["DNS record confusion", "CNAME همان IP را مستقیم می‌دهد.", "هر رکورد DNS شبیه mapping است.", "A/AAAA آدرس می‌دهند؛ CNAME alias می‌دهد.", "A/AAAA address, CNAME alias", "dns"],
  ["Dynamic routing algorithm mix", "Distance vector همان Dijkstra است.", "هر دو shortest path هستند.", "Distance vector حس Bellman-Ford؛ Link state حس Dijkstra دارد.", "DV BF, LS Dijkstra", "routing-fundamentals"]
];
const trapRecords = trapSpecs.map((t, index) => ({
  ...common(trapId(index + 1)), subjectId, topicIds: [topicId(t[5])], title: text(t[0], t[0]), trap: text(t[1], t[0]),
  wrongThinking: text(t[2], t[2]), correctThinking: text(t[3], t[3]), shortcut: text(t[4], t[4]),
  relatedQuestionIds: [], trapType: "concept-confusion", patternClusterIds: [], frequencyLevel: "unknown",
  contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));

const cardSeeds = [
  ["وظیفهٔ Flow Control چیست؟", "جلوگیری از غرق‌شدن گیرنده توسط فرستنده.\nReceiver protection.", "definition", "flow-control"],
  ["Congestion Control از چه چیزی محافظت می‌کند؟", "شبکه و مسیر انتقال.\nNetwork protection.", "definition", "congestion-control"],
  ["DNS معمولاً از چه استفاده می‌کند؟", "UDP روی پورت 53.\nTCP برای zone transfer یا پاسخ بزرگ.", "fact", "dns"],
  ["HTTPS یعنی چه؟", "HTTP روی TLS.\nپورت رایج: 443.", "definition", "http-https"],
  ["Router در کدام لایه است؟", "Network layer.\nبا IP و packet کار می‌کند.", "fact", "routing-fundamentals"],
  ["Switch در کدام لایه است؟", "Data-link layer.\nبا MAC و frame کار می‌کند.", "fact", "switching-mac"],
  ["PDU لایهٔ Data Link چیست؟", "Frame.", "fact", "encapsulation-pdu"],
  ["PDU لایهٔ Network چیست؟", "Packet.", "fact", "encapsulation-pdu"],
  ["TCP چه تضمین‌هایی می‌دهد؟", "Reliability و ordering.\nهمراه flow و congestion control.", "comparison", "tcp-vs-udp"],
  ["UDP چه مزیتی دارد؟", "overhead کمتر و latency پایین‌تر.\nبدون تضمین reliability.", "comparison", "tcp-vs-udp"],
  ["Network address چگونه ساخته می‌شود؟", "همهٔ host bits صفر.", "formula", "ipv4-addressing"],
  ["Broadcast address چگونه ساخته می‌شود؟", "همهٔ host bits یک.", "formula", "ipv4-addressing"],
  ["برای /24 چند آدرس داریم؟", "۲۵۶ آدرس.\nمعمولاً ۲۵۴ usable.", "formula", "subnetting-basics"],
  ["host bits در /n چندتاست؟", "32 - n.", "formula", "subnetting-basics"],
  ["Longest-prefix match یعنی چه؟", "خاص‌ترین route که با مقصد match می‌شود انتخاب می‌شود.", "shortcut", "routing-fundamentals"],
  ["Distance Vector با چه حسی حل می‌شود؟", "Bellman-Ford intuition.", "memory-trick", "routing-fundamentals"],
  ["Link State با چه حسی حل می‌شود؟", "Dijkstra intuition.", "memory-trick", "routing-fundamentals"],
  ["ARP چه کاری می‌کند؟", "IPv4 محلی → MAC address.\nبرای next hop.", "definition", "arp-icmp"],
  ["ICMP چه نوع پیامی است؟", "کنترل/خطا.\nمثل ping و unreachable.", "definition", "arp-icmp"],
  ["CRC چیست؟", "تشخیص خطای polynomial-based.\nDetection، نه correction.", "definition", "error-detection"]
];
ruleStatements.forEach(([statement, slug]) => cardSeeds.push([`قانون طلایی: ${statement}`, statement, "shortcut", slug]));
trapSpecs.slice(0, 24).forEach((trap) => cardSeeds.push([`دام: ${trap[0]}`, `${trap[4]}.\n${trap[3]}`, "trap", trap[5]]));
const flashcardRecords = cardSeeds.slice(0, 86).map((card, index) => ({
  ...common(cardId(index + 1)), subjectId, topicIds: [topicId(card[3])], category: card[2], front: text(card[0], card[0]), back: text(card[1], card[1]),
  importance: "unknown", relatedQuestionIds: [], difficulty: index % 5 === 0 ? "hard" : index % 3 === 0 ? "medium" : "easy",
  goldenRuleIds: [], contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
}));

const reviewItems = ruleStatements.slice(0, 42).map(([statement, slug], index) => ({
  id: `network-review-${String(index + 1).padStart(2, "0")}`,
  text: text(statement, statement), sourceIds: [], relatedAssetIds: [topicId(slug)]
}));
reviewItems.push(
  { id: "network-review-43", text: text("Frequency: Unknown برای همهٔ topicها تا زمان mapping رسمی.", "Frequency unknown until verified mapping."), sourceIds: [], relatedAssetIds: [] },
  { id: "network-review-44", text: text("Network question relationships have not yet been verified.", "Network question relationships have not yet been verified."), sourceIds: [], relatedAssetIds: [] },
  { id: "network-review-45", text: text("گزینه‌های مطلق مثل always/never را در DNS و UDP با احتیاط بررسی کن.", "Beware absolutes in DNS/UDP questions."), sourceIds: [], relatedAssetIds: [topicId("dns")] }
);
const reviewRecord = {
  ...common("five-minute-review:network"), subjectId, title: text("مرور پنج‌دقیقه‌ای شبکه", "Network Five-Minute Review"),
  items: reviewItems, assetReferences: [...goldenRecords.slice(0, 20).map((r) => r.id), ...trapRecords.slice(0, 8).map((r) => r.id)],
  estimatedReviewSeconds: 300, contentOrigin: origin, frequencyStatus: "unknown", bookmarkable: true
};

// Back-fill topic references after assets are known.
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
flashcardRecords.forEach((card) => {
  card.goldenRuleIds = goldenRecords.filter((g) => g.topicIds[0] === card.topicIds[0]).slice(0, 1).map((g) => g.id);
});

const relationRecords = [];
topics.forEach((topic) => {
  topic.related.forEach((target) => {
    relationRecords.push({
      ...common(`topic-link:${topic.slug}:${target}:similar`), fromTopicId: topicId(topic.slug), toTopicId: topicId(target),
      relationType: "similar", direction: "bidirectional", evidenceQuestionIds: [], description: `${topic.en} relates to ${target}.`,
      relationStatus: "unverified", contentOrigin: origin
    });
  });
});

writeModule("content/subjects/network.js", "registerNetworkSubject", "content", "networkSubject", { dataset: dataset("network:subjects", "subjects", [subjectRecord]) }, ["dataset"]);
writeModule("content/topics/topic-registry.js", "registerTopicRegistry", "content", "topicRegistry", { dataset: dataset("network:topics", "topics", topicRecords) }, ["dataset"]);
writeModule("content/topics/topic-relations.js", "registerTopicRelations", "content", "topicRelations", { dataset: dataset("network:topic-relations", "related-topics", relationRecords) }, ["dataset"]);
writeModule("content/lessons/network/network-crash-course.js", "registerNetworkCrashCourse", "content", "networkCrashCourse", { dataset: dataset("network:lessons", "lessons", lessonRecords) }, ["dataset"]);
writeModule("content/golden-rules/network-golden-rules.js", "registerNetworkGoldenRules", "content", "networkGoldenRules", { dataset: dataset("network:golden-rules", "golden-rules", goldenRecords) }, ["dataset"]);
writeModule("content/exam-traps/network-exam-traps.js", "registerNetworkExamTraps", "content", "networkExamTraps", { dataset: dataset("network:exam-traps", "exam-traps", trapRecords) }, ["dataset"]);
writeModule("content/flashcards/network-flashcards.js", "registerNetworkFlashcards", "content", "networkFlashcards", { dataset: dataset("network:flashcards", "flashcards", flashcardRecords) }, ["dataset"]);
writeModule("content/reviews/network-five-minute-review.js", "registerNetworkFiveMinuteReview", "content", "networkFiveMinuteReview", { dataset: dataset("network:five-minute-review", "five-minute-reviews", [reviewRecord]) }, ["dataset"]);

console.log(`Generated Network content: ${topics.length} topics, ${lessonRecords.length} lessons, ${goldenRecords.length} rules, ${flashcardRecords.length} cards, ${trapRecords.length} traps.`);
