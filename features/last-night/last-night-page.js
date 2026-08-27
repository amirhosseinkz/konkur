(function registerLastNightPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;
  const SUBJECTS = Object.freeze([
    { id: "subject:english", label: "زبان انگلیسی", testLabel: "زبان", warning: "بسامد واژگان و گرامر از تحلیل رسمی سؤال‌ها استخراج نشده است." },
    { id: "subject:network", label: "شبکه", testLabel: "شبکه", warning: "ارتباط سؤال‌ها با مباحث شبکه هنوز تأیید نشده است." },
    { id: "subject:database", label: "پایگاه داده", testLabel: "پایگاه داده", warning: "ارتباط سؤال‌ها با مباحث پایگاه داده هنوز تأیید نشده است." },
    { id: "subject:operating-system", label: "سیستم‌عامل", testLabel: "سیستم‌عامل", warning: "ارتباط سؤال‌ها با مباحث سیستم‌عامل هنوز تأیید نشده است." },
    { id: "subject:data-structures", label: "ساختمان داده", testLabel: "ساختمان داده", warning: "ارتباط سؤال‌ها با مباحث ساختمان داده هنوز تأیید نشده است." }
  ]);

  function records(type, subjectId) { return app.features.learning.records(type).filter((record) => record.subjectId === subjectId); }
  function list(title, items, mapper) {
    return dom.createElement("section", { className: "content-card" }, [
      dom.createElement("h3", { text: title }),
      items.length ? dom.createElement("ul", {}, items.map((item) => dom.createElement("li", { text: mapper(item), attributes: { dir: "auto" } }))) : dom.createElement("p", { text: "موردی ثبت نشده است." })
    ]);
  }
  function randomRule(subjectId) {
    const item = app.features.learning.randomItems("golden-rules", { subjectId, limit: 1 })[0];
      app.ui.notifications.announce(item ? item.title : "قانون طلایی پیدا نشد.", item ? "info" : "warning");
  }
  function randomDifficult(subjectId) {
    const difficult = app.features.learning.randomItems("flashcards", { subjectId, limit: 50 }).filter((item) => app.storage.adapter.getState().review.flashcardsById[item.record.id]?.rating === "hard");
    const item = difficult[Math.floor(Math.random() * difficult.length)];
    app.ui.notifications.announce(item ? item.title : "فلش‌کارت سختی ثبت نشده است.", item ? "info" : "warning");
  }
  function markReviewed(subjectId) {
    app.features.learning.recordView("five-minute-review", `five-minute-review:${subjectId.split(":")[1]}`, `شب آخر ${subjectId}`, "#/last-night");
    app.ui.notifications.announce("این بخش مرور شد.", "success");
  }
  function rememberExpanded(subjectId, expanded) {
    return app.storage.adapter.updateSection("statistics", (() => {
      const state = app.storage.adapter.getState();
      const statistics = JSON.parse(JSON.stringify(state.statistics));
      const snapshot = statistics.currentSnapshot || { id: "statistics:learning-engine", calculatedAt: new Date().toISOString(), calculationVersion: 1, counts: {}, subjectSummaries: [], weakTopicIds: [], strongTopicIds: [], estimatedScore: { status: "not-calculated" } };
      snapshot.counts.learning = { recentViewed: [], lastOpenedByType: {}, lastNightExpanded: {}, session: null, completedReviewIds: [], removedReviewIds: [], ...(snapshot.counts.learning || {}) };
      snapshot.counts.learning.lastNightExpanded[subjectId] = expanded;
      snapshot.calculatedAt = new Date().toISOString();
      statistics.currentSnapshot = snapshot;
      statistics.snapshotHistory = (statistics.snapshotHistory || []).slice(0, 19);
      return statistics;
    })());
  }
  function subjectBlock(subject) {
    const expanded = app.features.learning.getLearning().lastNightExpanded[subject.id] === true;
    const review = records("five-minute-reviews", subject.id)[0];
    const rules = records("golden-rules", subject.id).filter((rule) => rule.aggregationStatus === "topic").slice(0, 15);
    const cards = records("flashcards", subject.id).filter((card) => card.difficulty === "hard").slice(0, 12);
    const traps = records("exam-traps", subject.id).slice(0, 10);
    const markButton = dom.createElement("button", { className: "button", text: "این بخش مرور شد", attributes: { type: "button" } });
    markButton.addEventListener("click", () => markReviewed(subject.id));
    const randomRuleButton = dom.createElement("button", { className: "button", text: "قانون طلایی تصادفی", attributes: { type: "button" } });
    randomRuleButton.addEventListener("click", () => randomRule(subject.id));
    const randomDifficultButton = dom.createElement("button", { className: "button", text: "فلش‌کارت سخت تصادفی", attributes: { type: "button" } });
    randomDifficultButton.addEventListener("click", () => randomDifficult(subject.id));
    const detailsEl = dom.createElement("details", expanded ? { attributes: { open: "true" } } : {}, [
      dom.createElement("summary", { text: subject.label }),
      dom.createElement("p", { text: `بسامد: نامشخص. ${subject.warning}` }),
      dom.createElement("p", { text: `قانون‌های طلایی ${subject.testLabel} · فلش‌کارت‌های مهم ${subject.testLabel} · دام‌های آزمون ${subject.testLabel}` }),
      dom.createElement("div", { className: "empty-actions" }, [markButton, randomRuleButton, randomDifficultButton])
    ]);
    detailsEl.addEventListener("toggle", () => { rememberExpanded(subject.id, detailsEl.open); });
    if (expanded) {
      detailsEl.append(
        list("مرور پنج‌دقیقه‌ای", review ? review.items.slice(0, 20) : [], (item) => app.features.learning.localized(item.text)),
        list(`قانون‌های طلایی ${subject.testLabel}`, rules, (rule) => rule.statement),
        list(`فلش‌کارت‌های مهم ${subject.testLabel}`, cards, (card) => `${app.features.learning.localized(card.front)} — ${app.features.learning.localized(card.back)}`),
        list(`دام‌های آزمون ${subject.testLabel}`, traps, (trap) => `${app.features.learning.localized(trap.title)}: ${app.features.learning.localized(trap.shortcut)}`)
      );
    }
    return detailsEl;
  }
  function render() {
    const allRules = SUBJECTS.flatMap((subject) => records("golden-rules", subject.id).filter((rule) => rule.aggregationStatus === "topic"));
    const allCards = SUBJECTS.flatMap((subject) => records("flashcards", subject.id).filter((card) => card.difficulty === "hard"));
    const allTraps = SUBJECTS.flatMap((subject) => records("exam-traps", subject.id));
    const rapidItems = [
      ...allRules.slice(0, 12).map((item) => ({ type: "قانون طلایی", text: item.statement })),
      ...allCards.slice(0, 12).map((item) => ({ type: "فلش‌کارت", text: `${app.features.learning.localized(item.front)} — ${app.features.learning.localized(item.back)}` })),
      ...allTraps.slice(0, 12).map((item) => ({ type: "دام آزمون", text: `${app.features.learning.localized(item.title)}: ${app.features.learning.localized(item.shortcut)}` }))
    ];
    let index = 0;
    const stage = dom.createElement("section", { className: "study-player" });
    function draw() {
      const item = rapidItems[index];
      stage.replaceChildren(dom.createElement("div", { className: "study-player-card" }, [
        dom.createElement("p", { className: "study-player-counter", text: `${index + 1} / ${rapidItems.length}` }),
        dom.createElement("p", { className: "eyebrow", text: item.type }),
        dom.createElement("div", { className: "question", text: item.text, attributes: { dir: "auto" } }),
        dom.createElement("div", { className: "player-actions" }, [
          quickButton("قبلی", () => { index = Math.max(0, index - 1); draw(); }),
          quickButton("مرور تصادفی", () => { index = Math.floor(Math.random() * rapidItems.length); draw(); }, true),
          quickButton("بعدی", () => { index = (index + 1) % rapidItems.length; draw(); }, true)
        ])
      ]));
    }
    draw();
    return dom.createElement("article", {}, [
      dom.createElement("section", { className: "hero-card" }, [
        dom.createElement("p", { className: "eyebrow", text: "شب آخر" }),
        dom.createElement("h1", { text: "سریع مرور کن. مکث نکن." }),
        dom.createElement("p", { text: "قانون‌ها، فلش‌کارت‌ها، دام‌ها و مرور پنج‌دقیقه‌ای. همه چیز برای سرعت ساخته شده است." })
      ]),
      stage,
      components.createPageHeader("بسته‌های درسی", "اگر زمان داری، هر درس را جداگانه باز کن.", "درس‌ها"),
      ...SUBJECTS.map(subjectBlock)
    ]);
  }

  function quickButton(label, onClick, primary) {
    const button = dom.createElement("button", { className: `button${primary ? " button-primary" : ""}`, text: label, attributes: { type: "button" } });
    button.addEventListener("click", onClick);
    return button;
  }

  app.register("features", "lastNight", { render });
})(window);
