(function defineRC1BPersianConsistencyTests(global) {
  "use strict";
  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const dom = app.ui.dom;

  function renderPage(featureName) {
    const feature = app.features[featureName];
    harness.assert(feature && typeof feature.render === "function", `${featureName} missing render`);
    return feature.render();
  }

  harness.test("bookmarks labels are Persian and empty state contains CTA", () => {
    app.storage.adapter.resetSection("bookmarks");
    const page = renderPage("bookmarks");
    harness.assert(page.textContent.includes("نشان‌شده‌ها"), "bookmark header not Persian");
    harness.assert(!page.textContent.includes("Lessons"), "English Lessons label leaked");
    harness.assert(!page.textContent.includes("Newest"), "English Newest label leaked");
    const link = page.querySelector('a[href="#/subjects"]');
    harness.assert(link, "bookmark empty state missing CTA link to subjects");
  });

  harness.test("review queue buttons are Persian and do not expose raw enum values", () => {
    app.storage.adapter.resetSection("review");
    app.storage.adapter.resetSection("bookmarks");
    app.features.learning.rebuildReviewQueue();
    const page = renderPage("review");
    harness.assert(page.textContent.includes("صف مرور خالی است"), "review empty state not Persian");
    harness.assert(page.textContent.includes("رفتن به درس‌ها"), "review empty state missing CTA");
    harness.assert(!page.textContent.includes("Mark reviewed"), "English Mark reviewed leaked");
    harness.assert(!page.textContent.includes("Random difficult review"), "English random button label leaked");
  });

  harness.test("search group labels are Persian", () => {
    const region = document.createElement("div");
    app.features.searchPage.renderResults("SQL", region);
    harness.assert(!region.textContent.includes("Exam Years"), "English Exam Years label leaked");
    harness.assert(!region.textContent.includes("Flashcards") || region.textContent.match(/فلش‌کارت/), "Flashcards group not Persian");
  });

  harness.test("exam-year search result uses canonical route", () => {
    const region = document.createElement("div");
    app.features.searchPage.renderResults("1404", region);
    const examLink = region.querySelector('a[href="#/exams/1404"]');
    harness.assert(examLink, "exam-year search does not use canonical route #/exams/1404");
    harness.assert(!region.querySelector('a[href="#/exams/1404/practice"]'), "stale practice route still in search results");
  });

  harness.test("statistics labels are Persian", () => {
    const page = renderPage("statistics");
    harness.assert(page.textContent.includes("درس‌های تکمیل‌شده"), "statistics label not Persian");
    harness.assert(page.textContent.includes("فلش‌کارت‌های مرورشده"), "statistics flashcard label not Persian");
    harness.assert(!page.textContent.includes("Lessons completed"), "English statistics label leaked");
  });

  harness.test("settings confirmations are Persian (no mixed English)", () => {
    const page = renderPage("settings");
    harness.assert(page.textContent.includes("منطقه خطر"), "settings danger zone not Persian");
    harness.assert(!page.textContent.includes("Review queue پاک"), "mixed English confirm leaked");
    harness.assert(!page.textContent.includes("History پاک"), "mixed English confirm leaked");
  });

  harness.test("flashcards empty state links to #/subjects", () => {
    const page = renderPage("flashcards");
    harness.assert(page.textContent.includes("یک درس را انتخاب کن"), "flashcards empty state not helpful");
    const link = page.querySelector('a[href="#/subjects"]');
    harness.assert(link, "flashcards page missing CTA to #/subjects");
  });
})(window);