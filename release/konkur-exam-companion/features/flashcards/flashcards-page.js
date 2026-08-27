(function registerFlashcardsPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const components = app.ui.components;

  function render() {
    const hasDifficult = Object.values(app.storage.adapter.getState().review.flashcardsById || {}).some((card) => card.rating === "hard");
    const ctas = [{ label: "رفتن به درس‌ها", href: "#/subjects" }];
    if (hasDifficult) {
      ctas.push({ label: "مرور فلش‌کارت‌های سخت", onClick: () => {
        const item = app.features.learning.randomItems("flashcards", { limit: 1 }).find((candidate) => app.storage.adapter.getState().review.flashcardsById[candidate.record.id]?.rating === "hard");
        if (item) global.location.hash = item.route;
        else app.ui.notifications.announce("فلش‌کارت سختی ثبت نشده است.", "warning");
      }});
    }
    return components.createEmptyPage({
      title: "فلش‌کارت‌ها",
      description: "فلش‌کارت‌ها داخل هر درس سازمان‌دهی شده‌اند.",
      eyebrow: "مرور حافظه",
      emptyTitle: "یک درس را انتخاب کن",
      emptyDescription: "فلش‌کارت‌ها داخل هر درس سازمان‌دهی شده‌اند. یک درس را انتخاب کن تا مرور فلش‌کارت را شروع کنی.",
      actions: ctas
    });
  }

  app.register("features", "flashcards", { render });
})(window);