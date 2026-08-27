(function defineMilestoneILearningEngineTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const lessonId = "lesson:network:network-models:crash";
  const flashcardId = "flashcard:network:001";
  const ruleId = "golden-rule:network:01";
  const trapId = "exam-trap:network:01";

  function resetLearningState() {
    app.storage.adapter.resetSection("progress");
    app.storage.adapter.resetSection("review");
    app.storage.adapter.resetSection("bookmarks");
    app.storage.adapter.resetSection("searchHistory");
    app.storage.adapter.resetSection("statistics");
  }

  harness.test("learning progress calculation records completed lessons", () => {
    resetLearningState();
    harness.equal(app.features.learning.completeLesson(lessonId).ok, true);
    const progress = app.features.learning.subjectProgress("subject:network");
    harness.equal(progress.completedLessons, 1);
    harness.assert(progress.progressPercent > 0);
  });

  harness.test("bookmark center stores bookmarkable asset references", () => {
    resetLearningState();
    harness.equal(app.features.learning.bookmark("lesson", lessonId).ok, true);
    harness.equal(app.features.learning.bookmark("golden-rule", ruleId).ok, true);
    const bookmarks = Object.values(app.storage.adapter.getState().bookmarks);
    harness.equal(bookmarks.length, 2);
    harness.assert(bookmarks.every((item) => app.features.learning.entityMap().has(item.entityId)));
  });

  harness.test("review queue orders difficult flashcards before bookmarks", () => {
    resetLearningState();
    app.features.learning.setDifficult(flashcardId, true);
    app.features.learning.bookmark("lesson", lessonId);
    const queue = app.features.learning.reviewQueue();
    harness.equal(queue[0].entityType, "flashcard");
    harness.equal(queue[0].priority, "critical");
  });

  harness.test("random study generators return existing content only", () => {
    resetLearningState();
    ["flashcards", "golden-rules", "exam-traps", "lessons", "topics"].forEach((type) => {
      const items = app.features.learning.randomItems(type, { subjectId: "subject:network", limit: 3 });
      harness.assert(items.length > 0, type);
      harness.assert(items.every((item) => item.record.subjectId === "subject:network" || item.record.id.startsWith("topic:network:")), type);
    });
  });

  harness.test("search page groups cross-subject results by content type", () => {
    const region = document.createElement("div");
    app.features.searchPage.renderResults("TCP", region);
    harness.assert(region.textContent.includes("سرفصل") || region.textContent.includes("فلش‌کارت‌ها"));
    harness.assert(app.storage.adapter.getState().searchHistory.length > 0);
  });

  harness.test("recently viewed history records and clears activity", () => {
    resetLearningState();
    app.features.learning.recordView("lesson", lessonId, "Network Models", "#/subjects/network");
    harness.equal(app.features.learning.getLearning().recentViewed.length, 1);
    harness.equal(app.features.learning.clearHistory().ok, true);
    harness.equal(app.features.learning.getLearning().recentViewed.length, 0);
  });

  harness.test("session tracking recovers after storage snapshot refresh", () => {
    resetLearningState();
    app.features.learning.recordView("flashcard", flashcardId, "Card", "#/subjects/network/flashcards");
    app.features.learning.reviewFlashcard(flashcardId, "good");
    app.state.store.initialize(app.storage.adapter.snapshot());
    const session = app.features.learning.getLearning().session;
    harness.assert(session.visitedRoutes.includes("#/subjects/network/flashcards"));
    harness.assert(session.reviewedFlashcardIds.includes(flashcardId));
  });

  harness.test("progress persistence survives storage reads", () => {
    resetLearningState();
    app.features.learning.completeLesson(lessonId);
    const persisted = app.storage.adapter.getState().progress.lessonsById[lessonId];
    harness.equal(persisted.status, "completed");
    harness.equal(persisted.scrollProgressPercent, 100);
  });

  harness.test("reset operations clear queue and history independently", () => {
    resetLearningState();
    app.features.learning.setDifficult(flashcardId, true);
    app.features.learning.recordView("exam-trap", trapId, "Trap", "#/subjects/network/traps");
    harness.assert(app.features.learning.reviewQueue().length > 0);
    harness.equal(app.features.learning.resetReviewQueue().ok, true);
    harness.equal(Object.keys(app.storage.adapter.getState().review.queueById).length, 0);
    harness.equal(app.features.learning.clearHistory().ok, true);
    harness.equal(app.features.learning.getLearning().recentViewed.length, 0);
  });

  harness.test("export and import preserve learning state envelope", () => {
    resetLearningState();
    app.features.learning.completeLesson(lessonId);
    app.features.learning.bookmark("flashcard", flashcardId);
    const exported = app.storage.adapter.exportState();
    harness.equal(exported.ok, true);
    const inspection = app.storage.adapter.inspectImport(exported.content);
    harness.equal(inspection.ok, true);
    harness.equal(app.storage.adapter.importState(exported.content, "replace").ok, true);
    harness.equal(app.storage.adapter.getState().progress.lessonsById[lessonId].status, "completed");
  });
})(window);
