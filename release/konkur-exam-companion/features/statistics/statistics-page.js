(function registerStatisticsPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function stat(label, value) {
    return dom.createElement("section", { className: "content-card" }, [dom.createElement("h2", { text: String(value) }), dom.createElement("p", { text: label })]);
  }
  function render() {
    const stats = app.features.learning.statistics();
    const duration = stats.session ? Math.max(0, Math.round((Date.parse(stats.session.updatedAt) - Date.parse(stats.session.startedAt)) / 60000)) : 0;
    return dom.createElement("article", {}, [
      components.createPageHeader("آمار", "فقط شمارنده‌های واقعی از فعالیت ذخیره‌شده؛ بدون نمره، رتبه یا اعتماد ساختگی.", "آمار سبک"),
      dom.createElement("div", { className: "card-grid" }, [
        stat("درس‌های تکمیل‌شده", stats.lessonsCompleted),
        stat("فلش‌کارت‌های مرورشده", stats.flashcardsReviewed),
        stat("نشان‌شده‌ها", stats.bookmarks),
        stat("موارد صف مرور", stats.reviewQueueSize),
        stat("مشاهده‌های اخیر", stats.recentlyViewed),
        stat("دقیقه‌های جلسه فعلی", duration)
      ])
    ]);
  }

  app.register("features", "statistics", { render });
})(window);