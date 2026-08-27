(function registerSubjectsPages(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records);
  }

  const SUBJECTS = Object.freeze({
    english: {
      id: "subject:english",
      route: "english",
      title: "زبان انگلیسی",
      eyebrow: "زبان آزمون",
      description: "مسیر زبان فقط برای آزمون ارشد کامپیوتر: تمرین سال‌های قبل، واژگان، درک مطلب، گرامر و مرور سریع.",
      evidence: "بسامد: نامشخص. محتوای زبان کارشناسی و تأییدشده است، اما frequency از تحلیل رسمی سؤال‌ها استخراج نشده.",
      tags: ["english"]
    },
    network: {
      id: "subject:network",
      route: "network",
      title: "شبکه‌های کامپیوتری",
      eyebrow: "شبکه‌های کامپیوتری",
      description: "مسیر سریع برای مرور امتحانی Network. محتوا expert-curated است و از mapping سؤال استخراج نشده.",
      evidence: "Frequency: Unknown. Network question relationships have not yet been verified.",
      tags: ["network"]
    },
    database: {
      id: "subject:database",
      route: "database",
      title: "پایگاه داده",
      eyebrow: "پایگاه داده",
      description: "مسیر سریع برای مرور امتحانی Database. محتوا expert-curated و expert-reviewed است.",
      evidence: "Frequency: Unknown. Database question relationships have not yet been verified.",
      tags: ["database"]
    },
    "operating-system": {
      id: "subject:operating-system",
      route: "operating-system",
      title: "سیستم‌عامل",
      eyebrow: "سیستم‌عامل",
      description: "مسیر سریع برای مرور امتحانی OS. محتوا expert-curated و expert-reviewed است.",
      evidence: "Frequency: Unknown. Operating System question relationships have not yet been verified.",
      tags: ["operating-system"]
    },
    "data-structures": {
      id: "subject:data-structures",
      route: "data-structures",
      title: "ساختمان داده و الگوریتم",
      eyebrow: "ساختمان داده و الگوریتم",
      description: "مسیر سریع برای مرور امتحانی Data Structures. محتوا expert-curated و expert-reviewed است.",
      evidence: "Frequency: Unknown. Data Structures question relationships have not yet been verified.",
      tags: ["data-structures"]
    }
  });

  function subjectRecords(slug) {
    const config = SUBJECTS[slug];
    return {
      subject: records("subjects").find((record) => record.id === config.id),
      topics: records("topics").filter((record) => record.subjectId === config.id),
      lessons: records("lessons").filter((record) => record.subjectId === config.id),
      rules: records("golden-rules").filter((record) => record.subjectId === config.id && record.aggregationStatus === "topic"),
      cards: records("flashcards").filter((record) => record.subjectId === config.id),
      traps: records("exam-traps").filter((record) => record.subjectId === config.id),
      review: records("five-minute-reviews").find((record) => record.id === `five-minute-review:${slug}`)
    };
  }

  function localized(value) {
    if (typeof value === "string") return value;
    return value ? value[value.primaryLocale] || value.fa || value.en || "" : "";
  }

  function bookmark(entityType, entityId) {
    const result = app.features.learning.bookmark(entityType, entityId);
    if (app.ui.notifications && result.ok) app.ui.notifications.announce("به نشان‌شده‌ها اضافه شد.", "success");
    return result;
  }

  function bookmarkButton(type, id) {
    const button = dom.createElement("button", { className: "button", text: "نشان‌کردن", attributes: { type: "button" } });
    button.addEventListener("click", () => bookmark(type, id));
    return button;
  }

  function card(title, body, actions) {
    return dom.createElement("section", { className: "content-card" }, [
      dom.createElement("h2", { text: title }),
      dom.createElement("p", { text: body, attributes: { dir: "auto" } }),
      actions && actions.length ? dom.createElement("div", { className: "empty-actions" }, actions) : null
    ]);
  }

  function pathCard(step, title, body, href, primary) {
    return dom.createElement("a", { className: "action-card", attributes: { href } }, [
      dom.createElement("span", { className: "eyebrow", text: step }),
      dom.createElement("strong", { text: title }),
      dom.createElement("p", { text: body }),
      dom.createElement("span", { className: primary ? "button-primary" : "button", text: primary ? "شروع" : "مشاهده" })
    ]);
  }

  function renderSubjects() {
    const subjectCards = Object.keys(SUBJECTS).map((slug) => {
      const data = subjectRecords(slug);
      const progress = app.features.learning.subjectProgress(data.subject.id);
      return dom.createElement("section", { className: "command-card" }, [
        dom.createElement("strong", { text: SUBJECTS[slug].title }),
        dom.createElement("p", { text: `${progress.progressPercent}% · ${progress.completedLessons}/${progress.lessons} درس · ${progress.reviewedCards} کارت · ${progress.bookmarkCount} نشان‌شده` }),
        dom.createElement("div", { className: "hero-actions" }, [
          dom.createElement("a", { className: "button button-primary", text: "شروع", attributes: { href: `#/subjects/${slug}` } }),
        bookmarkButton("subject", data.subject.id)
        ])
      ]);
    });
    return dom.createElement("article", {}, [
      dom.createElement("section", { className: "hero-card" }, [
        dom.createElement("p", { className: "eyebrow", text: "مطالعه" }),
        dom.createElement("h1", { text: "درس‌ها" }),
        dom.createElement("p", { text: "مسیر هر درس ساده است: درس سریع، قانون‌های طلایی، فلش‌کارت، دام‌های آزمون و درس‌ها." })
      ]),
      dom.createElement("div", { className: "command-grid" }, subjectCards)
    ]);
  }

  function renderSubject(slug) {
    const config = SUBJECTS[slug];
    const data = subjectRecords(slug);
    app.features.learning.recordView("subject", data.subject.id, config.title, `#/subjects/${slug}`);
    const progress = app.features.learning.subjectProgress(data.subject.id);
    const topicList = dom.createElement("details", {}, [
      dom.createElement("summary", { text: "سرفصل‌ها و درس‌ها" }),
      dom.createElement("div", { className: "card-grid" }, data.topics.map((topic) => card(
      localized(topic.title),
      `${localized(topic.title)} · سختی: ${topic.difficulty} · بسامد: نامشخص · ${topic.estimatedReadingMinutes} دقیقه`,
      [
        bookmarkButton("topic", topic.id),
        dom.createElement("button", { className: "button", text: "مشاهده شد", attributes: { type: "button" } })
      ]
    )))
    ]);
    topicList.querySelectorAll("button:last-child").forEach((button, index) => {
      const topic = data.topics[index];
      button.addEventListener("click", () => app.features.learning.recordView("topic", topic.id, localized(topic.title), `#/subjects/${slug}`));
    });
    const lessonReader = dom.createElement("section", { className: "lesson-reader" });
    function showLesson(lessonId) {
      const lesson = data.lessons.find((item) => item.id === lessonId);
      const index = data.lessons.findIndex((item) => item.id === lessonId);
      const topic = data.topics.find((item) => item.id === lesson.topicId);
      app.features.learning.markLessonViewed(lesson.id);
      app.features.learning.recordView("lesson", lesson.id, localized(lesson.title), `#/subjects/${slug}`);
      lessonReader.replaceChildren(
        dom.createElement("section", { className: "surface-hero" }, [
          dom.createElement("p", { className: "eyebrow", text: `درس ${index + 1} از ${data.lessons.length} · ${lesson.estimatedReadingMinutes} دقیقه · ${topic ? localized(topic.title) : config.title}` }),
          dom.createElement("h2", { text: localized(lesson.title), attributes: { dir: "auto" } }),
          dom.createElement("p", { text: localized(lesson.summary), attributes: { dir: "auto" } })
        ]),
        ...lesson.sections.map((section) => dom.createElement("section", { className: "content-card" }, [
          dom.createElement("h2", { text: section.sectionType.replace(/-/g, " ") }),
          dom.createElement("p", { text: localized(section.content), attributes: { dir: "auto" } })
        ])),
        (lesson.twentySecondStrategy || lesson.developerAnalogy) ? dom.createElement("section", { className: "content-card" }, [
          dom.createElement("h2", { text: "یادآوری امتحانی" }),
          lesson.twentySecondStrategy ? dom.createElement("p", { text: lesson.twentySecondStrategy, attributes: { dir: "auto" } }) : null,
          lesson.developerAnalogy ? dom.createElement("p", { text: lesson.developerAnalogy, attributes: { dir: "auto" } }) : null
        ]) : null,
        dom.createElement("div", { className: "lesson-controls" }, [
          buttonSmall("درس قبلی", () => showLesson(data.lessons[Math.max(0, index - 1)].id)),
          buttonSmall("تکمیل درس", () => { app.features.learning.completeLesson(lesson.id); app.ui.notifications.announce("درس تکمیل شد.", "success"); }, true),
          buttonSmall("درس بعدی", () => showLesson(data.lessons[Math.min(data.lessons.length - 1, index + 1)].id)),
          bookmarkButton("lesson", lesson.id)
        ])
      );
      lessonReader.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const lessonList = dom.createElement("div", { className: "card-grid" }, data.lessons.slice(0, 12).map((lesson) => card(
      localized(lesson.title),
      `${lesson.estimatedReadingMinutes} دقیقه · ${app.storage.adapter.getState().progress.lessonsById[lesson.id]?.status === "completed" ? "تکمیل‌شده" : "شروع‌نشده"}`,
      [
        dom.createElement("button", { className: "button", text: "مشاهده", attributes: { type: "button", "data-lesson": lesson.id } }),
        dom.createElement("button", { className: "button", text: "تکمیل", attributes: { type: "button", "data-complete": lesson.id } }),
        bookmarkButton("lesson", lesson.id)
      ]
    )));
    lessonList.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => {
      showLesson(button.dataset.lesson);
    }));
    lessonList.querySelectorAll("[data-complete]").forEach((button) => button.addEventListener("click", () => {
      app.features.learning.completeLesson(button.dataset.complete);
      app.router.router.refresh();
    }));
    const englishExamEntry = slug === "english" ? renderEnglishExamEntry() : null;
    const englishDailyReview = slug === "english" ? dom.createElement("details", {}, [
      dom.createElement("summary", { text: "مرور روزانه زبان" }),
      dom.createElement("div", { className: "command-grid" }, [
        card("واژگان روزانه", "مرور تصادفی واژه‌های مهم آزمونی.", [dom.createElement("a", { className: "button button-primary", text: "شروع واژگان", attributes: { href: "#/subjects/english/flashcards" } })]),
        card("مرور گرامر", "نکته‌های کوتاه برای تشخیص سریع گزینه درست.", [dom.createElement("a", { className: "button", text: "باز کردن گرامر", attributes: { href: "#/subjects/english/golden-rules" } })]),
        card("تمرین درک مطلب", "روش خواندن، حذف گزینه و کنترل زمان.", [dom.createElement("a", { className: "button", text: "باز کردن مهارت‌ها", attributes: { href: "#/subjects/english/review" } })])
      ])
    ]) : null;
    const page = dom.createElement("article", { className: "page-transition" }, [
      dom.createElement("nav", { className: "breadcrumb", attributes: { "aria-label": "مسیر" } }, [
        dom.createElement("a", { text: "مطالعه", attributes: { href: "#/subjects" } }),
        dom.createElement("span", { text: " / " }),
        dom.createElement("span", { text: config.title })
      ]),
      dom.createElement("section", { className: "hero-card" }, [
        dom.createElement("p", { className: "eyebrow", text: config.eyebrow }),
        dom.createElement("h1", { text: config.title }),
        dom.createElement("p", { text: config.description }),
        dom.createElement("p", { text: `${progress.progressPercent}% پیشرفت · ${progress.completedLessons}/${progress.lessons} درس · ${progress.reviewedCards}/${progress.flashcards} کارت` }),
        dom.createElement("div", { className: "hero-actions" }, [
          buttonSmall("شروع درس سریع", () => showLesson(data.lessons[0].id), true),
          dom.createElement("a", { className: "button", text: "شب آخر", attributes: { href: "#/last-night" } })
        ])
      ]),
      englishExamEntry,
      englishDailyReview,
      dom.createElement("div", { className: "path-grid" }, [
        dom.createElement("button", { className: "path-card", attributes: { type: "button", "data-start-lesson": "true" } }, [
          dom.createElement("span", { className: "eyebrow", text: "1" }),
          dom.createElement("strong", { text: "درس سریع" }),
          dom.createElement("p", { text: "اولین درس واقعی را باز کن و جلو برو." }),
          dom.createElement("span", { className: "button button-primary", text: "شروع" })
        ]),
        pathCard("2", "قانون‌های طلایی", "هر بار یک قانون؛ تصمیم سریع در آزمون.", `#/subjects/${slug}/golden-rules`),
        pathCard("3", "فلش‌کارت‌ها", "نمایش پاسخ، سخت‌کردن، نشان‌کردن و تکرار.", `#/subjects/${slug}/flashcards`),
        pathCard("4", "دام‌های آزمون", "اشتباه را قبل از جلسه آزمون ببین.", `#/subjects/${slug}/traps`)
      ]),
      card("پیشرفت", `${progress.completedTopics}/${progress.topics} سرفصل · ${progress.completedLessons}/${progress.lessons} درس · ${progress.reviewedCards}/${progress.flashcards} فلش‌کارت · ${progress.bookmarkCount} نشان‌شده · آخرین: ${progress.lastOpened || "هیچ‌وقت"}`, []),
      lessonReader,
      dom.createElement("details", {}, [dom.createElement("summary", { text: "درس‌ها" }), lessonList]),
      topicList
    ]);
    page.querySelector("[data-start-lesson]").addEventListener("click", () => showLesson(data.lessons[0].id));
    return page;
  }

  function renderEnglishExamEntry() {
    const years = app.features.examService.getImportedYears();
    return dom.createElement("details", {}, [
      dom.createElement("summary", { text: "آزمون‌های سال‌های قبل" }),
      dom.createElement("p", { text: "این بخش داده آزمون را تکرار نمی‌کند؛ فقط ورودی سریع به بخش زبان هر سال است." }),
      dom.createElement("div", { className: "command-grid" }, years.map((year) => dom.createElement("section", { className: "command-card" }, [
        dom.createElement("strong", { text: `زبان ${year}` }),
        dom.createElement("p", { text: "سؤال‌های بخش زبان همان دفترچه موجود است." }),
        dom.createElement("div", { className: "hero-actions" }, [
          dom.createElement("a", { className: "button button-primary", text: "تمرین", attributes: { href: app.features.examService.routeForMode(year, "practice", "language") } }),
          dom.createElement("a", { className: "button", text: "آزمون", attributes: { href: app.features.examService.routeForMode(year, "exam", "language") } })
        ])
      ])))
    ]);
  }

  function buttonSmall(label, onClick, primary) {
    const button = dom.createElement("button", { className: `button${primary ? " button-primary" : ""}`, text: label, attributes: { type: "button" } });
    button.addEventListener("click", onClick);
    return button;
  }

  function renderReview(slug) {
    const config = SUBJECTS[slug];
    const review = subjectRecords(slug).review;
    app.features.learning.recordView("five-minute-review", review.id, localized(review.title), `#/subjects/${slug}/review`);
    const items = review.items || [];
    let index = 0;
    const stage = dom.createElement("div", { className: "study-player" });
    function draw() {
      const item = items[index];
      stage.replaceChildren(dom.createElement("div", { className: "study-player-card" }, [
        dom.createElement("p", { className: "eyebrow", text: `${index + 1}/${items.length} · درس سریع` }),
        dom.createElement("div", { className: "question", text: item ? localized(item.text) : "مرور آماده نیست.", attributes: { dir: "auto" } }),
        dom.createElement("div", { className: "player-actions" }, [
          buttonSmall("قبلی", () => { index = Math.max(0, index - 1); draw(); }),
          buttonSmall("بعدی", () => { index = Math.min(items.length - 1, index + 1); draw(); }, true),
          bookmarkButton("five-minute-review", review.id)
        ])
      ]));
    }
    draw();
    return dom.createElement("article", { className: "page-transition" }, [
      components.createPageHeader(`مرور پنج‌دقیقه‌ای ${config.title}`, "سریع. کوتاه. بدون حاشیه.", "مرور"),
      stage
    ]);
  }

  function renderRules(slug) {
    const config = SUBJECTS[slug];
    const rules = subjectRecords(slug).rules;
    rules.slice(0, 1).forEach((rule) => app.features.learning.recordView("golden-rule", rule.id, rule.statement, `#/subjects/${slug}/golden-rules`));
    let index = 0;
    const stage = dom.createElement("div", { className: "study-player" });
    function draw() {
      const rule = rules[index];
      stage.replaceChildren(dom.createElement("div", { className: "study-player-card" }, [
        dom.createElement("p", { className: "study-player-counter", text: `${index + 1} / ${rules.length}` }),
        dom.createElement("p", { className: "eyebrow", text: `قانون طلایی · ${config.title}` }),
        dom.createElement("div", { className: "question", text: rule ? rule.statement : "قانون پیدا نشد", attributes: { dir: "auto" } }),
        dom.createElement("p", { className: "answer", text: "منشأ محتوا: کارشناسی · بسامد: نامشخص" }),
        dom.createElement("div", { className: "player-actions" }, [
          buttonSmall("قبلی", () => { index = Math.max(0, index - 1); draw(); }),
          buttonSmall("تصادفی", () => { index = Math.floor(Math.random() * rules.length); draw(); }),
          buttonSmall("مرور شد", () => { app.features.learning.recordView("golden-rule", rule.id, rule.statement, `#/subjects/${slug}/golden-rules`); app.ui.notifications.announce("قانون مرور شد.", "success"); }),
          buttonSmall("بعدی", () => { index = Math.min(rules.length - 1, index + 1); draw(); }, true),
          rule ? bookmarkButton("golden-rule", rule.id) : null
        ])
      ]));
    }
    draw();
    return dom.createElement("article", { className: "page-transition" }, [
      components.createPageHeader(`قانون‌های طلایی ${config.title}`, "یک قانون، یک تصمیم سریع.", "قانون‌های طلایی"),
      stage
    ]);
  }

  function renderFlashcards(slug) {
    const config = SUBJECTS[slug];
    const cards = subjectRecords(slug).cards;
    const state = app.storage.adapter.getState();
    let index = 0;
    let revealed = false;
    const stage = dom.createElement("div", { className: "study-player" });
    function draw() {
      const item = cards[index];
      const difficult = state.review.flashcardsById[item.id]?.rating === "hard";
      stage.replaceChildren(dom.createElement("div", { className: "study-player-card" }, [
        dom.createElement("p", { className: "study-player-counter", text: `${index + 1} / ${cards.length}` }),
        dom.createElement("p", { className: "eyebrow", text: `${difficult ? "سخت" : "فلش‌کارت"} · ${config.title}` }),
        dom.createElement("div", { className: "question", text: localized(item.front), attributes: { dir: "auto" } }),
        revealed ? dom.createElement("div", { className: "answer", text: localized(item.back), attributes: { dir: "auto" } }) : dom.createElement("p", { className: "answer", text: "برای دیدن پاسخ، دکمه نمایش را بزن." }),
        dom.createElement("div", { className: "player-actions" }, [
          buttonSmall(revealed ? "پنهان کردن" : "نمایش", () => { revealed = !revealed; draw(); }, true),
          buttonSmall("بعدی", () => { index = (index + 1) % cards.length; revealed = false; draw(); }, true),
          buttonSmall("سخت", () => { app.features.learning.setDifficult(item.id, true); app.ui.notifications.announce("به‌عنوان سخت علامت‌گذاری شد.", "info"); app.router.router.refresh(); }),
          buttonSmall("مرور شد", () => { app.features.learning.reviewFlashcard(item.id, "good"); app.features.learning.recordView("flashcard", item.id, localized(item.front), `#/subjects/${slug}/flashcards`); app.ui.notifications.announce("فلش‌کارت مرور شد.", "success"); }),
          bookmarkButton("flashcard", item.id)
        ])
      ]));
    }
    draw();
    return dom.createElement("article", { className: "page-transition" }, [
      components.createPageHeader(`فلش‌کارت‌های ${config.title}`, "نمایش پاسخ، سخت‌کردن و رفتن به کارت بعدی.", "فلش‌کارت‌ها"),
      stage
    ]);
  }

  function renderTraps(slug) {
    const config = SUBJECTS[slug];
    const traps = subjectRecords(slug).traps;
    let index = 0;
    const stage = dom.createElement("div", { className: "study-player" });
    function draw() {
      const trap = traps[index];
      stage.replaceChildren(dom.createElement("div", { className: "study-player-card" }, [
        dom.createElement("p", { className: "study-player-counter", text: `${index + 1} / ${traps.length}` }),
        dom.createElement("p", { className: "eyebrow", text: `دام آزمون · ${config.title}` }),
        dom.createElement("div", { className: "question", text: localized(trap.title), attributes: { dir: "auto" } }),
        dom.createElement("div", { className: "answer", attributes: { dir: "auto" } }, [
          dom.createElement("div", { className: "trap-section", attributes: { "data-type": "wrong" } }, [
            dom.createElement("p", { className: "trap-section-label", text: "اشتباه رایج" }),
            dom.createElement("p", { text: localized(trap.wrongThinking), attributes: { dir: "auto" } })
          ]),
          dom.createElement("div", { className: "trap-section", attributes: { "data-type": "correct" } }, [
            dom.createElement("p", { className: "trap-section-label", text: "فکر درست" }),
            dom.createElement("p", { text: localized(trap.correctThinking), attributes: { dir: "auto" } })
          ]),
          dom.createElement("div", { className: "trap-section", attributes: { "data-type": "shortcut" } }, [
            dom.createElement("p", { className: "trap-section-label", text: "ترفند حفظی" }),
            dom.createElement("p", { text: localized(trap.shortcut), attributes: { dir: "auto" } })
          ])
        ]),
        dom.createElement("div", { className: "player-actions" }, [
          buttonSmall("قبلی", () => { index = Math.max(0, index - 1); draw(); }),
          buttonSmall("بعدی", () => { index = (index + 1) % traps.length; draw(); }, true),
          bookmarkButton("exam-trap", trap.id)
        ])
      ]));
    }
    draw();
    return dom.createElement("article", { className: "page-transition" }, [
      components.createPageHeader(`دام‌های ${config.title}`, "سؤال، اشتباه، فکر درست و ترفند حفظی.", "دام‌های آزمون"),
      stage
    ]);
  }

  app.register("features", "subjects", { render: renderSubjects });
  app.register("features", "englishSubject", { render: () => renderSubject("english") });
  app.register("features", "englishReview", { render: () => renderReview("english") });
  app.register("features", "englishGoldenRules", { render: () => renderRules("english") });
  app.register("features", "englishFlashcards", { render: () => renderFlashcards("english") });
  app.register("features", "englishTraps", { render: () => renderTraps("english") });
  app.register("features", "networkSubject", { render: () => renderSubject("network") });
  app.register("features", "networkReview", { render: () => renderReview("network") });
  app.register("features", "networkGoldenRules", { render: () => renderRules("network") });
  app.register("features", "networkFlashcards", { render: () => renderFlashcards("network") });
  app.register("features", "networkTraps", { render: () => renderTraps("network") });
  app.register("features", "databaseSubject", { render: () => renderSubject("database") });
  app.register("features", "databaseReview", { render: () => renderReview("database") });
  app.register("features", "databaseGoldenRules", { render: () => renderRules("database") });
  app.register("features", "databaseFlashcards", { render: () => renderFlashcards("database") });
  app.register("features", "databaseTraps", { render: () => renderTraps("database") });
  app.register("features", "operatingSystemSubject", { render: () => renderSubject("operating-system") });
  app.register("features", "operatingSystemReview", { render: () => renderReview("operating-system") });
  app.register("features", "operatingSystemGoldenRules", { render: () => renderRules("operating-system") });
  app.register("features", "operatingSystemFlashcards", { render: () => renderFlashcards("operating-system") });
  app.register("features", "operatingSystemTraps", { render: () => renderTraps("operating-system") });
  app.register("features", "dataStructuresSubject", { render: () => renderSubject("data-structures") });
  app.register("features", "dataStructuresReview", { render: () => renderReview("data-structures") });
  app.register("features", "dataStructuresGoldenRules", { render: () => renderRules("data-structures") });
  app.register("features", "dataStructuresFlashcards", { render: () => renderFlashcards("data-structures") });
  app.register("features", "dataStructuresTraps", { render: () => renderTraps("data-structures") });
})(window);
