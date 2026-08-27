(function registerDashboardPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function action(label, href, primary) {
    return dom.createElement("a", { className: `button${primary ? " button-primary" : ""}`, text: label, attributes: { href } });
  }
  function button(label, onClick, primary) {
    const item = dom.createElement("button", { className: `button${primary ? " button-primary" : ""}`, text: label, attributes: { type: "button" } });
    item.addEventListener("click", onClick);
    return item;
  }
  function randomReview() {
    const types = ["flashcards", "golden-rules", "exam-traps"];
    const type = types[Math.floor(Math.random() * types.length)];
    const item = app.features.learning.randomItems(type, { limit: 1 })[0];
    if (!item) {
      app.ui.notifications.announce("چیزی برای مرور پیدا نشد.", "warning");
      return;
    }
    app.features.learning.recordView(app.features.learning.entityTypeFromDataset(item.datasetType), item.record.id, item.title, item.route);
    global.location.hash = item.route;
  }
  function render() {
    const learning = app.features.learning.getLearning();
    const lastItem = ["subject", "lesson", "flashcard", "five-minute-review"].map((type) => learning.lastOpenedByType[type]).filter(Boolean)[0];
    const heroLabel = lastItem ? "ادامه مطالعه" : "شروع مطالعه";
    const heroHref = lastItem ? lastItem.route : "#/subjects";
    const heroDesc = lastItem ? lastItem.title : "یک درس را انتخاب کن و مسیر مرور، قانون‌ها، کارت‌ها و دام‌ها را برو.";
    const active = app.features.sessionManager.getActiveSessions()[0];
    const stats = app.features.learning.statistics();
    const subjects = app.features.learning.SUBJECT_ORDER.map((id) => app.features.learning.subjectProgress(id));
    const recent = (learning.recentViewed || []).slice(0, 3);
    const latestYear = app.features.examService.getImportedYears()[0];

    return dom.createElement("article", { className: "page-transition" }, [
      dom.createElement("section", { className: "hero-card" }, [
        dom.createElement("p", { className: "eyebrow", text: "مرکز فرمان" }),
        dom.createElement("h1", { text: "امروز فقط یک قدم جلو برو." }),
        dom.createElement("p", { text: heroDesc, attributes: { dir: "auto" } }),
        dom.createElement("div", { className: "hero-actions" }, [
          action(heroLabel, heroHref, true),
          active ? action("ادامه آزمون", active.filters && active.filters.section === "custom"
            ? app.features.examService.routeForCustom(active.sourceExamYear, active.mode, active.filters.start, active.filters.end)
            : app.features.examService.routeForMode(active.sourceExamYear, active.mode, active.filters && active.filters.section ? active.filters.section : "full")) : null
        ])
      ]),
      dom.createElement("div", { className: "empty-actions" }, [
        action("شروع آزمون", "#/exams"),
        action("تمرین زبان", app.features.examService.routeForMode(latestYear, "practice", "language")),
        action("شب آخر", "#/last-night"),
        button("مرور تصادفی", randomReview)
      ]),
      dom.createElement("section", { className: "content-card" }, [
        dom.createElement("h2", { text: "پیشرفت درس‌ها" }),
        ...subjects.map((item) => dom.createElement("div", {}, [
          dom.createElement("p", { text: `${app.features.learning.localized(item.subject.title)}: ${item.progressPercent}%`, attributes: { dir: "auto" } }),
          dom.createElement("div", { className: "progress-bar-inline" }, [
            dom.createElement("div", { className: "progress-bar-fill", attributes: { style: `width: ${item.progressPercent}%` } })
          ])
        ]))
      ]),
      dom.createElement("section", { className: "content-card" }, [
        dom.createElement("h2", { text: "فعالیت اخیر" }),
        recent.length
          ? dom.createElement("div", {}, recent.map((item) => dom.createElement("p", { text: item.title, attributes: { dir: "auto" } })))
          : dom.createElement("p", { text: "درس‌ها، کارت‌ها و مرورهای اخیر اینجا دیده می‌شوند." })
      ]),
      dom.createElement("div", { className: "empty-actions" }, [
        action("نشان‌شده‌ها", "#/bookmarks"),
        action("جست‌وجو", "#/search"),
        action("آمار", "#/statistics"),
        action("صف مرور", "#/review"),
        action("تنظیمات", "#/settings")
      ])
    ]);
  }

  app.register("features", "dashboard", { render });
})(window);