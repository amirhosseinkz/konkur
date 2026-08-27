(function defineMilestoneNEnglishModuleTests(global) {
  "use strict";
  const app = global.KonkurApp;
  const harness = app.tests.harness;
  function records(type) {
    return app.content.registry.getDatasets().filter((dataset) => dataset.datasetType === type && !dataset.testOnly).flatMap((dataset) => dataset.records);
  }
  harness.test("English subject is registered beside technical subjects", () => {
    const subject = records("subjects").find((item) => item.id === "subject:english");
    harness.assert(subject, "English subject missing");
    harness.equal(subject.slug, "english");
    harness.assert(app.features.learning.SUBJECT_ORDER.includes("subject:english"));
    harness.equal(app.router.routes.parse("#/subjects/english").found, true);
  });
  harness.test("English vocabulary flashcards are registered", () => {
    const cards = records("flashcards").filter((item) => item.subjectId === "subject:english" && item.category === "vocabulary");
    harness.assert(cards.length >= 300, `Expected at least 300 vocabulary cards, got ${cards.length}`);
    harness.assert(cards.every((item) => item.contentOrigin === "expert-curated" && item.frequencyStatus === "unknown"));
  });
  harness.test("English grammar and reading pages are registered", () => {
    const lessons = records("lessons").filter((item) => item.subjectId === "subject:english");
    harness.equal(lessons.filter((item) => item.topicId === "topic:english:grammar-cheatsheet").length, 14);
    harness.equal(lessons.filter((item) => item.topicId === "topic:english:reading-skills").length, 10);
  });
  harness.test("English search finds vocabulary and keeps technical search working", () => {
    const abandon = app.search.index.search("abandon");
    harness.assert(abandon.some((item) => item.entityId.startsWith("flashcard:english:vocab:")), "abandon not searchable");
    const tcp = app.search.index.search("TCP");
    harness.assert(tcp.length > 0, "technical search broke");
  });
  harness.test("English bookmarks and progress persist", () => {
    app.storage.adapter.resetSection("bookmarks");
    app.storage.adapter.resetSection("review");
    const card = records("flashcards").find((item) => item.subjectId === "subject:english");
    harness.equal(app.features.learning.bookmark("flashcard", card.id).ok, true);
    app.features.learning.reviewFlashcard(card.id, "hard");
    const state = app.storage.adapter.getState();
    harness.assert(Object.values(state.bookmarks).some((item) => item.entityId === card.id));
    harness.assert(state.review.flashcardsById && state.review.flashcardsById[card.id], "flashcard review state missing");
    harness.equal(state.review.flashcardsById[card.id].rating, "hard");
  });
  harness.test("English Last Night integration is visible", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.textContent.includes("زبان انگلیسی"));
    harness.assert(page.textContent.includes("فلش‌کارت‌های مهم زبان"));
  });
  harness.test("English previous exam practice uses existing exam engine", () => {
    const selection = app.features.examService.rangeFromRoute({ year: 1404, sectionId: "language" }, "#/exams/1404/practice/language");
    const context = app.features.examService.buildExamContext(1404, false, selection.range);
    harness.equal(context.questions.length, 25);
    harness.equal(app.features.examService.routeForMode(1404, "practice", "language"), "#/exams/1404/practice/language");
  });
  harness.test("English module validates with no orphan assets", () => {
    const result = app.content.registry.validateAll();
    harness.equal(result.valid, true, JSON.stringify(result.issues.slice(0, 5)));
  });
})(window);
