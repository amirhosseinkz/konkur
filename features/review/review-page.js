(function registerReviewPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  const PRIORITY_LABELS = Object.freeze({ critical: "اولویت بحرانی", high: "اولویت بالا", medium: "اولویت متوسط", low: "اولویت پایین" });
  const REASON_LABELS = Object.freeze({ manual: "افزوده‌شده دستی", bookmarked: "نشان‌شده برای مرور", "manual-bookmark": "نشان‌شده برای مرور" });
  const ENTITY_LABELS = Object.freeze({ lesson: "درس", flashcard: "فلش‌کارت", "golden-rule": "قانون طلایی", "exam-trap": "دام آزمون", topic: "سرفصل", subject: "درس", question: "سؤال", "five-minute-review": "مرور پنج‌دقیقه‌ای" });

  function action(label, handler) {
    const button = dom.createElement("button", { className: "button", text: label, attributes: { type: "button" } });
    button.addEventListener("click", handler);
    return button;
  }
  function describeItem(item) {
    const entity = ENTITY_LABELS[item.entityType] || item.entityType;
    const priority = PRIORITY_LABELS[item.priority] || item.priority;
    let reason = REASON_LABELS[item.reason] || item.reason;
    if (item.reason === "manual" && item.entityType === "flashcard") reason = "به‌عنوان سخت علامت‌گذاری شده";
    return `${entity} · ${priority} · ${reason}`;
  }
  function render() {
    const queue = app.features.learning.reviewQueue();
    const difficultCards = Object.entries(app.storage.adapter.getState().review.flashcardsById || {})
      .filter(([, card]) => card.rating === "hard");
    const bookmarks = Object.values(app.storage.adapter.getState().bookmarks || {});
    const recent = (app.features.learning.getLearning().recentViewed || []).slice(0, 10);
    const hasDifficult = difficultCards.length > 0;
    const emptyCtas = [
      { label: "رفتن به درس‌ها", href: "#/subjects" },
      { label: "مرور فلش‌کارت‌ها", href: "#/subjects" }
    ];
    if (hasDifficult) {
      emptyCtas.push({ label: "مرور تصادفی موارد سخت", onClick: () => {
        const item = app.features.learning.randomItems("flashcards", { limit: 1 }).find((candidate) => app.storage.adapter.getState().review.flashcardsById[candidate.record.id]?.rating === "hard");
        app.ui.notifications.announce(item ? item.title : "فلش‌کارت سختی ثبت نشده است.", item ? "info" : "warning");
        if (item) global.location.hash = item.route;
      }});
    }
    return dom.createElement("article", {}, [
      components.createPageHeader("مرور", "صف واحد بر اساس فلش‌کارت‌های سخت، نشان‌شده‌ها و مشاهده‌های اخیر.", "صف مرور"),
      dom.createElement("details", { attributes: { open: "true" } }, [
        dom.createElement("summary", { text: `صف مرور (${queue.length})` }),
        queue.length ? dom.createElement("div", { className: "card-grid" }, queue.map((item) => dom.createElement("section", { className: "content-card" }, [
          dom.createElement("h2", { text: item.title, attributes: { dir: "auto" } }),
          dom.createElement("p", { text: describeItem(item) }),
          dom.createElement("div", { className: "empty-actions" }, [
            dom.createElement("a", { className: "button", text: "باز کردن", attributes: { href: item.route } }),
            action("مرور شد", () => { app.features.learning.updateQueueItem(item.id, "in-progress"); app.router.router.refresh(); }),
            action("تکمیل", () => { app.features.learning.updateQueueItem(item.id, "completed"); app.router.router.refresh(); }),
            action("حذف", () => { app.features.learning.removeQueueItem(item.id); app.router.router.refresh(); })
          ])
        ]))) : components.createEmptyState("صف مرور خالی است", "موارد سخت، نشان‌شده‌ها و درس‌های ناتمام به‌صورت خودکار اینجا جمع می‌شوند.", emptyCtas)
      ]),
      dom.createElement("details", {}, [
        dom.createElement("summary", { text: `موارد سخت (${difficultCards.length})` }),
        difficultCards.length
          ? dom.createElement("div", { className: "empty-actions" }, [action("شروع مرور", () => {
              const item = app.features.learning.randomItems("flashcards", { limit: 1 }).find((candidate) => app.storage.adapter.getState().review.flashcardsById[candidate.record.id]?.rating === "hard");
              if (item) global.location.hash = item.route;
            })])
          : dom.createElement("p", { text: "هنوز فلش‌کارتی به‌عنوان سخت علامت‌گذاری نشده است." })
      ]),
      dom.createElement("details", {}, [
        dom.createElement("summary", { text: `نشان‌شده‌ها (${bookmarks.length})` }),
        dom.createElement("p", { text: bookmarks.length ? `${bookmarks.length} مورد نشان‌شده` : "هنوز چیزی ذخیره نکرده‌ای." }),
        bookmarks.length ? dom.createElement("a", { className: "button", text: "مشاهده همه", attributes: { href: "#/bookmarks" } }) : null
      ]),
      dom.createElement("details", {}, [
        dom.createElement("summary", { text: `فعالیت اخیر (${recent.length})` }),
        recent.length
          ? dom.createElement("div", {}, recent.map((item) => dom.createElement("p", { text: item.title, attributes: { dir: "auto" } })))
          : dom.createElement("p", { text: "درس‌ها، کارت‌ها و مرورهای اخیر اینجا دیده می‌شوند." })
      ])
    ]);
  }

  app.register("features", "review", { render });
})(window);