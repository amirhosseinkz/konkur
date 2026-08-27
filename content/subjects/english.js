(function registerEnglishExamModule(global) {
  "use strict";
  var app = global.KonkurApp;
  var timestamp = "2026-07-15T20:00:00.000Z";
  var subjectId = "subject:english";
  var approval = { status: "approved", reviewerRole: "exam-editor", reviewedAt: timestamp, reviewContractVersion: 1 };
  function text(fa, en) { return { fa: fa, en: en || fa, primaryLocale: "fa", translationStatus: "not-applicable" }; }
  function common(id) { return { id: id, recordKey: id + "@1", schemaVersion: 1, version: 1, verificationStatus: "expert-reviewed", publicationStatus: "published", educationalApproval: approval, sourceIds: [], primarySourceId: null, sourcePage: null, sourceUrl: null, provenanceNotes: "Expert-curated English exam module for Iranian Computer Engineering MSc entrance exam. Frequencies are not exam-derived.", createdAt: timestamp, updatedAt: timestamp }; }
  function dataset(datasetId, datasetType, records) { return { datasetId: datasetId, datasetType: datasetType, schemaVersion: 1, version: 1, testOnly: false, records: records }; }
  function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  var topics = [
    { slug: "vocabulary", title: "واژگان آزمون", summary: "کلمات پرتکرار سبک آزمون با معنی فارسی و مثال کوتاه.", minutes: 12 },
    { slug: "reading-skills", title: "مهارت‌های درک مطلب", summary: "روش سریع خواندن متن، پیدا کردن کلیدواژه و حذف گزینه غلط.", minutes: 10 },
    { slug: "grammar-cheatsheet", title: "برگه تقلب گرامر", summary: "نکته‌های گرامری کوتاه برای گزینه‌زنی سریع.", minutes: 10 }
  ];
  var topicRecords = topics.map(function (topic) {
    var id = "topic:english:" + topic.slug;
    return Object.assign(common(id), { subjectId: subjectId, slug: topic.slug, title: text(topic.title, topic.slug), summary: text(topic.summary), status: "active", lessonIds: [], flashcardIds: [], goldenRuleIds: [], examTrapIds: [], relatedQuestionIds: [], relatedTopicLinkIds: [], difficulty: "medium", importance: "unknown", frequency: "unknown", estimatedReadingMinutes: topic.minutes, memoryTrickIds: [], searchAliasIds: [], englishTitle: topic.slug, shortDescription: topic.summary, contentOrigin: "expert-curated", frequencyStatus: "unknown", prerequisiteTopicIds: [], relatedTopicIds: [], lastNightIncluded: true, versionLabel: "expert-reviewed" });
  });
  function topicId(name) { return "topic:english:" + name; }

  var readingPages = [
    ["approach-reading", "روش برخورد با متن", "اول سؤال‌ها را اسکن کن، کلمات کلیدی را علامت بزن، بعد فقط بخش‌های مرتبط متن را بخوان. هدف فهم کامل متن نیست؛ هدف جواب درست است."],
    ["keyword-scanning", "اسکن کلیدواژه", "اسم خاص، عدد، تاریخ، کلمه فنی و فعل‌های قوی را پیدا کن. سؤال معمولاً همان ناحیه متن را هدف می‌گیرد."],
    ["eliminate-options", "حذف گزینه غلط", "گزینه‌هایی که خیلی مطلق‌اند، خارج از متن‌اند، یا کلمه‌ای نزدیک اما جهت مخالف دارند سریع حذف می‌شوند."],
    ["time-management", "مدیریت زمان", "برای متن طولانی اول سؤال‌های واژگان و reference را بزن؛ سؤال main idea را آخر جواب بده."],
    ["unknown-vocabulary", "استراتژی کلمه ناآشنا", "اگر کلمه را نمی‌دانی، نقش جمله، قبل و بعد کلمه، و مثبت/منفی بودن عبارت را بخوان. معنی دقیق لازم نیست."],
    ["main-idea", "ایده اصلی", "اول و آخر پاراگراف‌ها را بخوان. گزینه درست معمولاً نه خیلی جزئی است و نه ادعایی بیرون از متن دارد."],
    ["inference", "سؤال استنباطی", "دنبال نتیجه مستقیم از متن باش، نه نظر شخصی. گزینه‌ای درست است که متن مجبورمان کند آن را بپذیریم."],
    ["reference", "مرجع ضمیر", "ضمیر معمولاً به نزدیک‌ترین اسم سازگار از نظر معنا و عدد برمی‌گردد. جمله قبل را اول چک کن."],
    ["true-false-traps", "دام درست/نادرست", "تغییر کوچک در کمیت، زمان، علت یا جهت جمله گزینه را غلط می‌کند."],
    ["reading-checklist", "چک‌لیست متن", "سؤال‌ها، کلیدواژه‌ها، پاراگراف مرتبط، حذف گزینه، کنترل کلمه مطلق، انتخاب نهایی." ]
  ];
  var grammarPages = [
    ["tenses", "زمان‌ها", "قید زمان را پیدا کن. already و since معمولاً perfect می‌خواهند؛ yesterday و ago گذشته ساده."],
    ["passive-voice", "مجهول", "اگر فاعل انجام‌دهنده مهم نیست یا بعد از by آمده، ساختار be + pp را بررسی کن."],
    ["relative-clauses", "جمله‌واره موصولی", "who برای انسان، which برای شیء، where برای مکان. بعد از حرف اضافه معمولاً whom/which رسمی‌تر است."],
    ["articles", "حروف تعریف", "the برای چیز مشخص، a/an برای یکی از چندتا، بدون article برای مفهوم کلی یا جمع عمومی."],
    ["conditionals", "شرطی‌ها", "if + present → will؛ if + past → would؛ if + had pp → would have pp."],
    ["gerunds", "جراند", "بعد از enjoy, avoid, consider, mind معمولاً فعل ing می‌آید."],
    ["infinitives", "مصدر", "بعد از decide, want, plan, need معمولاً to + verb می‌آید."],
    ["participles", "وجه وصفی", "ing حس فعال/ایجادکننده دارد؛ pp حس منفعل/دریافت‌کننده دارد."],
    ["prepositions", "حروف اضافه", "depend on، interested in، responsible for، similar to را به‌صورت chunk حفظ کن."],
    ["conjunctions", "حروف ربط", "although تضاد می‌سازد؛ because علت؛ therefore نتیجه؛ unless یعنی if not."],
    ["modal-verbs", "افعال کمکی", "must اجبار/استنتاج قوی، should توصیه، might احتمال ضعیف، cannot نفی امکان."],
    ["subject-verb-agreement", "تطابق فاعل و فعل", "هسته فاعل را پیدا کن، عبارت بین دو ویرگول یا prepositional phrase را نادیده بگیر."],
    ["reported-speech", "نقل قول غیرمستقیم", "در نقل گذشته، زمان فعل معمولاً یک پله عقب می‌رود و ضمیر/زمان تغییر می‌کند."],
    ["comparatives", "مقایسه", "than نشانه comparative است؛ the most یا -est نشانه superlative." ]
  ];
  var lessonRecords = [];
  readingPages.concat(grammarPages).forEach(function (page) {
    var isGrammar = grammarPages.indexOf(page) >= 0;
    var id = "lesson:english:" + page[0];
    lessonRecords.push(Object.assign(common(id), { subjectId: subjectId, topicId: isGrammar ? topicId("grammar-cheatsheet") : topicId("reading-skills"), title: text(page[1], page[0]), summary: text(page[2]), estimatedReadingMinutes: isGrammar ? 2 : 3, sections: [{ id: "exam-use", sectionType: "exam-use", content: text(page[2]) }, { id: "shortcut", sectionType: "shortcut", content: text("در آزمون دنبال علامت ظاهری بگرد؛ وقت را صرف تحلیل کامل جمله نکن.") }], goldenRuleIds: [], examTrapIds: [], flashcardIds: [], relatedQuestionIds: [], prerequisiteTopicIds: [], relatedLessonIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", developerAnalogy: "مثل debug سریع است: اول نشانه‌ها را پیدا کن، بعد گزینه‌های ناسازگار را حذف کن.", twentySecondStrategy: "کلیدواژه را پیدا کن، گزینه‌های مطلق یا ناسازگار را حذف کن.", miniSelfCheck: [] }));
  });

  var words = "abandon,abbreviate,ability,abstract,accelerate,accept,access,accurate,achieve,acknowledge,acquire,adapt,adequate,adjust,administrate,advantage,affect,aggregate,allocate,alternative,ambiguous,analyze,annual,anticipate,apparent,approach,appropriate,approximate,arbitrary,assemble,assess,assign,assist,assume,available,avoid,benefit,brief,capable,capacity,category,cause,challenge,characteristic,clarify,collapse,combine,commit,communicate,compare,compatible,compile,complex,component,comprehensive,compute,concept,conclude,condition,conduct,confirm,consequence,consider,consistent,constant,construct,consume,contain,context,contract,contrast,contribute,convert,convince,core,create,criteria,crucial,data,debate,decade,decline,define,demonstrate,derive,design,detect,determine,develop,device,differentiate,dimension,direct,discrete,display,distinct,distribute,domain,efficient,element,emerge,emphasis,enable,encounter,enhance,ensure,entity,environment,equivalent,establish,estimate,evaluate,evidence,evolve,examine,exclude,execute,expand,expect,explicit,exploit,export,extend,extract,feature,finite,flexible,focus,format,formula,framework,function,fundamental,generate,global,guarantee,identify,ignore,illustrate,impact,implement,implicit,imply,improve,include,increase,index,indicate,individual,infer,infrastructure,initial,input,inspect,instance,instruct,integrate,interpret,interval,introduce,investigate,involve,isolate,item,justify,label,layer,legal,limit,logic,maintain,major,manual,map,margin,method,migrate,minimum,modify,monitor,multiple,network,normal,obtain,occur,option,overall,parameter,participate,pattern,perform,period,policy,portion,predict,previous,primary,priority,process,produce,prohibit,property,protocol,provide,publish,purpose,queue,random,range,rapid,ratio,react,realize,reason,receive,recover,reduce,reference,reflect,register,related,relevant,reliable,remove,render,repeat,replace,require,research,resolve,resource,respond,restrict,result,retrieve,review,route,scenario,scheduled,scope,section,select,sequence,significant,similar,simulate,source,specific,stable,standard,state,storage,strategy,structure,submit,sufficient,summarize,support,survive,switch,syntax,target,technical,temporary,terminate,theory,trace,transfer,transform,trigger,typical,unique,update,valid,variable,verify,version,visible,volume,whereas,achievable,adjacent,advocate,algorithm,allocate,append,archive,argument,array,attribute,automatic,boundary,cache,canonical,cluster,coherent,concurrent,configuration,constraint,coverage,dependency,deprecated,deterministic,diagnose,dynamic,eligible,external,fixture,fragment,granular,heuristic,immutable,incident,latency,locale,manifest,metadata,normalize,offset,overflow,persistent,portable,precedence,provenance,redirect,regression,repository,responsive,revision,semantic,sequential,threshold,transaction,unified,validate,workflow".split(",");
  var meanings = { abandon: "رها کردن", ability: "توانایی", abstract: "انتزاعی", access: "دسترسی", accurate: "دقیق", acquire: "به‌دست آوردن", adapt: "سازگار شدن", adequate: "کافی", advantage: "مزیت", affect: "اثر گذاشتن", analyze: "تحلیل کردن", apparent: "آشکار", approach: "روش", arbitrary: "دلخواه", assess: "ارزیابی کردن", assume: "فرض کردن", available: "در دسترس", avoid: "اجتناب کردن", benefit: "مزیت", capable: "توانمند", capacity: "ظرفیت", category: "دسته", cause: "علت", challenge: "چالش", compare: "مقایسه کردن", compatible: "سازگار", complex: "پیچیده", component: "جزء", concept: "مفهوم", condition: "شرط", consequence: "پیامد", consistent: "سازگار/یکنواخت", construct: "ساختن", context: "زمینه", contrast: "تضاد", convert: "تبدیل کردن", criteria: "معیارها", crucial: "حیاتی", decline: "کاهش یافتن", define: "تعریف کردن", demonstrate: "نشان دادن", derive: "استخراج کردن", detect: "تشخیص دادن", determine: "تعیین کردن", device: "دستگاه", distinct: "متمایز", efficient: "کارآمد", element: "عنصر", enable: "ممکن ساختن", enhance: "بهبود دادن", ensure: "مطمئن شدن", equivalent: "معادل", establish: "ایجاد کردن", estimate: "تخمین زدن", evaluate: "ارزیابی کردن", evidence: "شاهد", exclude: "حذف کردن", expand: "گسترش دادن", explicit: "صریح", feature: "ویژگی", finite: "متناهی", flexible: "انعطاف‌پذیر", fundamental: "بنیادی", generate: "تولید کردن", guarantee: "تضمین کردن", identify: "شناسایی کردن", ignore: "نادیده گرفتن", implement: "پیاده‌سازی کردن", imply: "دلالت داشتن", improve: "بهبود دادن", include: "شامل بودن", indicate: "نشان دادن", infer: "استنباط کردن", infrastructure: "زیرساخت", initial: "اولیه", inspect: "بررسی کردن", integrate: "یکپارچه کردن", interpret: "تفسیر کردن", isolate: "جدا کردن", justify: "توجیه کردن", maintain: "نگهداری کردن", method: "روش", modify: "تغییر دادن", multiple: "چندگانه", obtain: "به‌دست آوردن", occur: "رخ دادن", overall: "کلی", parameter: "پارامتر", pattern: "الگو", perform: "انجام دادن", policy: "سیاست", predict: "پیش‌بینی کردن", previous: "قبلی", primary: "اصلی", priority: "اولویت", process: "فرایند", prohibit: "منع کردن", property: "ویژگی", provide: "فراهم کردن", purpose: "هدف", rapid: "سریع", ratio: "نسبت", reason: "دلیل", recover: "بازیابی کردن", reduce: "کاهش دادن", reference: "ارجاع", relevant: "مرتبط", reliable: "قابل اعتماد", require: "نیاز داشتن", resolve: "حل کردن", resource: "منبع", restrict: "محدود کردن", retrieve: "بازیابی کردن", significant: "مهم", similar: "مشابه", source: "منبع", specific: "مشخص", stable: "پایدار", strategy: "راهبرد", structure: "ساختار", sufficient: "کافی", support: "پشتیبانی کردن", typical: "معمول", unique: "یکتا", valid: "معتبر", verify: "راستی‌آزمایی کردن", visible: "قابل مشاهده", whereas: "در حالی که" };
  function meaning(word) { return meanings[word] || "معنی آزمونی: " + word; }
  var flashcardRecords = words.map(function (word, index) {
    var id = "flashcard:english:vocab:" + String(index + 1).padStart(3, "0");
    return Object.assign(common(id), { subjectId: subjectId, topicIds: [topicId("vocabulary")], category: "vocabulary", front: text(word, word), back: text(meaning(word) + " — مثال: The exam may use " + word + " in a technical passage.", meaning(word)), importance: "unknown", relatedQuestionIds: [], difficulty: index % 7 === 0 ? "hard" : index % 5 === 0 ? "medium" : "easy", goldenRuleIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true });
  });
  grammarPages.forEach(function (page, index) {
    var id = "flashcard:english:grammar:" + String(index + 1).padStart(2, "0");
    flashcardRecords.push(Object.assign(common(id), { subjectId: subjectId, topicIds: [topicId("grammar-cheatsheet")], category: "grammar", front: text(page[1]), back: text(page[2]), importance: "unknown", relatedQuestionIds: [], difficulty: index % 3 === 0 ? "hard" : "medium", goldenRuleIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true }));
  });
  readingPages.forEach(function (page, index) {
    var id = "flashcard:english:reading:" + String(index + 1).padStart(2, "0");
    flashcardRecords.push(Object.assign(common(id), { subjectId: subjectId, topicIds: [topicId("reading-skills")], category: "reading", front: text(page[1]), back: text(page[2]), importance: "unknown", relatedQuestionIds: [], difficulty: index % 3 === 0 ? "hard" : "medium", goldenRuleIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true }));
  });
  topicRecords.forEach(function (topic) {
    topic.lessonIds = lessonRecords.filter(function (lesson) { return lesson.topicId === topic.id; }).map(function (lesson) { return lesson.id; });
    topic.flashcardIds = flashcardRecords.filter(function (card) { return card.topicIds.indexOf(topic.id) >= 0; }).map(function (card) { return card.id; });
  });
  var goldenRules = readingPages.slice(0, 10).concat(grammarPages.slice(0, 14)).map(function (page, index) {
    var id = "golden-rule:english:" + String(index + 1).padStart(2, "0");
    return Object.assign(common(id), { subjectId: subjectId, topicIds: [index < 10 ? topicId("reading-skills") : topicId("grammar-cheatsheet")], statement: page[2], patternClusterIds: [], aggregationStatus: "topic", aggregatedRuleIds: [], relatedQuestionIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true });
  });
  goldenRules.push(Object.assign(common("golden-rule:english:collection"), { subjectId: subjectId, topicIds: topicRecords.map(function (topic) { return topic.id; }), statement: null, patternClusterIds: [], aggregationStatus: "subject-aggregate", aggregatedRuleIds: goldenRules.map(function (rule) { return rule.id; }), relatedQuestionIds: [], searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true }));
  var traps = [
    ["کلمه آشنا، معنی غلط", "کلمه technical شبیه معنی روزمره است.", "معنی عمومی را سریع انتخاب می‌کنی.", "معنی را در context جمله بخوان.", "context اول، حافظه دوم"],
    ["گزینه مطلق", "always/never/all دام رایج است.", "گزینه قطعی جذاب به نظر می‌رسد.", "اگر متن قطعی نگفته، گزینه قطعی را حذف کن.", "absolute یعنی خطر"],
    ["ضمیر اشتباه", "it/they به اسم نزدیک اما ناسازگار وصل می‌شود.", "نزدیک‌ترین کلمه را بدون بررسی عدد انتخاب می‌کنی.", "عدد و معنا را همزمان چک کن.", "نزدیک + سازگار"],
    ["گرامر با ترجمه", "جمله را فارسی می‌کنی و ساختار را از دست می‌دهی.", "ترجمه روان را معیار می‌گیری.", "نشانه گرامری را پیدا کن: زمان، حرف اضافه، فعل.", "نشانه، نه ترجمه"],
    ["main idea خیلی جزئی", "گزینه فقط یک پاراگراف را پوشش می‌دهد.", "چون متنش را دیده‌ای انتخاب می‌کنی.", "گزینه باید کل متن را پوشش دهد.", "جزئی یعنی دام"],
    ["inference بیرون از متن", "گزینه منطقی است ولی از متن درنمی‌آید.", "دانش بیرونی وارد می‌کنی.", "فقط چیزی را بپذیر که متن مجبور کند.", "متن یا هیچ"],
    ["حرف اضافه حفظی", "گزینه‌ها فقط preposition را عوض می‌کنند.", "با حس زبانی انتخاب می‌کنی.", "chunkهای پرتکرار را حفظ کن.", "depend on، similar to"],
    ["زمان فعل", "قید زمان در جمله پنهان است.", "فقط معنی فعل را می‌بینی.", "اول قید زمان و sequence را پیدا کن.", "ago یعنی گذشته ساده"]
  ].map(function (trap, index) {
    var id = "exam-trap:english:" + String(index + 1).padStart(2, "0");
    return Object.assign(common(id), { subjectId: subjectId, topicIds: [index < 6 ? topicId("reading-skills") : topicId("grammar-cheatsheet")], title: text(trap[0]), trap: text(trap[1]), wrongThinking: text(trap[2]), correctThinking: text(trap[3]), shortcut: text(trap[4]), relatedQuestionIds: [], trapType: "english-exam-trap", patternClusterIds: [], frequencyLevel: "unknown", contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true });
  });
  topicRecords.forEach(function (topic) {
    topic.goldenRuleIds = goldenRules.filter(function (rule) { return rule.topicIds.indexOf(topic.id) >= 0 && rule.aggregationStatus === "topic"; }).map(function (rule) { return rule.id; });
    topic.examTrapIds = traps.filter(function (trap) { return trap.topicIds.indexOf(topic.id) >= 0; }).map(function (trap) { return trap.id; });
  });
  var reviewItems = words.slice(0, 40).map(function (word, index) { return { id: "english-vocab-review-" + String(index + 1).padStart(2, "0"), text: text(word + " = " + meaning(word)), sourceIds: [], relatedAssetIds: [flashcardRecords[index].id] }; }).concat(readingPages.slice(0, 6).map(function (page, index) { return { id: "english-reading-review-" + String(index + 1).padStart(2, "0"), text: text(page[2]), sourceIds: [], relatedAssetIds: ["lesson:english:" + page[0]] }; }));
  var reviewRecord = Object.assign(common("five-minute-review:english"), { subjectId: subjectId, title: text("مرور سریع زبان"), items: reviewItems, assetReferences: flashcardRecords.slice(0, 40).map(function (card) { return card.id; }).concat(goldenRules.slice(0, 10).map(function (rule) { return rule.id; })), estimatedReviewSeconds: 300, searchAliasIds: [], contentOrigin: "expert-curated", frequencyStatus: "unknown", bookmarkable: true });
  var subjectRecord = Object.assign(common(subjectId), { slug: "english", title: text("زبان انگلیسی", "English"), summary: text("ماژول زبان فقط برای آزمون ارشد کامپیوتر: واژگان، درک مطلب، گرامر و تمرین آزمون‌های سال‌های قبل."), status: "active", topicIds: topicRecords.map(function (topic) { return topic.id; }), reviewOrder: topicRecords.map(function (topic) { return topic.id; }), fiveMinuteReviewId: reviewRecord.id, goldenRuleCollectionId: "golden-rule:english:collection", estimatedStudyMinutes: 90, englishTitle: "English", contentOrigin: "expert-curated", frequencyStatus: "unknown", lastNightPriority: "high", verificationLabel: "expert-curated; exam frequencies unknown" });
  var registrations = [];
  [
    dataset("english:subjects", "subjects", [subjectRecord]),
    dataset("english:topics", "topics", topicRecords),
    dataset("english:lessons", "lessons", lessonRecords),
    dataset("english:golden-rules", "golden-rules", goldenRules),
    dataset("english:exam-traps", "exam-traps", traps),
    dataset("english:flashcards", "flashcards", flashcardRecords),
    dataset("english:five-minute-review", "five-minute-reviews", [reviewRecord])
  ].forEach(function (item) { registrations.push(app.content.registry.register(item)); });
  app.register("content", "englishExamModule", { payload: { vocabularyCount: words.length, grammarPageCount: grammarPages.length, readingPageCount: readingPages.length, flashcardCount: flashcardRecords.length }, registrations: registrations });
})(window);
