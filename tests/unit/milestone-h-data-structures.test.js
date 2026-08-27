(function defineMilestoneHDataStructuresTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const subjectId = "subject:data-structures";

  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records)
      .filter((record) => record.subjectId === subjectId || record.id === subjectId);
  }

  harness.test("data structures subject and topic registry register successfully", () => {
    harness.equal(app.content.dataStructuresSubject.registrations.every((r) => r.ok), true);
    harness.equal(app.content.dataStructuresTopicRegistry.registrations.every((r) => r.ok), true);
    harness.equal(records("topics").length, 30);
  });

  harness.test("data structures lessons cover every topic", () => {
    const lessonIds = new Set(records("lessons").map((lesson) => lesson.id));
    records("topics").forEach((topic) => harness.assert(topic.lessonIds.some((id) => lessonIds.has(id)), topic.id));
  });

  harness.test("data structures content counts match milestone contract", () => {
    harness.equal(records("lessons").length, 30);
    harness.equal(records("golden-rules").length, 60);
    harness.equal(records("flashcards").length, 120);
    harness.equal(records("exam-traps").length, 28);
    harness.equal(records("five-minute-reviews").length, 1);
  });

  harness.test("data structures assets use required metadata labels", () => {
    ["topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"].forEach((type) => {
      records(type).forEach((record) => {
        harness.equal(record.contentOrigin, "expert-curated", record.id);
        harness.equal(record.verificationStatus, "expert-reviewed", record.id);
        harness.equal(record.frequencyStatus, "unknown", record.id);
        harness.equal((record.relatedQuestionIds || []).length, 0, record.id);
      });
    });
  });

  harness.test("data structures IDs are unique", () => {
    const all = ["subjects", "topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"]
      .flatMap(records);
    harness.equal(new Set(all.map((record) => record.id)).size, all.length);
  });

  harness.test("data structures searchable content is indexed", () => {
    harness.assert(app.search.index.search("Dijkstra").some((result) => result.title.includes("Dijkstra")));
    harness.assert(app.search.index.search("ساختمان").some((result) => result.title.includes("ساختمان")));
  });

  harness.test("data structures bookmark integration writes valid topic storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T16:00:00.000Z";
    state.bookmarks["bookmark:topic:topic:data-structures:bfs"] = {
      id: "bookmark:topic:topic:data-structures:bfs",
      entityType: "topic",
      entityId: "topic:data-structures:bfs",
      createdAt: now,
      updatedAt: now,
      tags: ["data-structures"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("data structures bookmark integration writes valid flashcard storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T16:00:00.000Z";
    state.bookmarks["bookmark:flashcard:flashcard:data-structures:001"] = {
      id: "bookmark:flashcard:flashcard:data-structures:001",
      entityType: "flashcard",
      entityId: "flashcard:data-structures:001",
      createdAt: now,
      updatedAt: now,
      tags: ["data-structures"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("last-night route includes data structures content", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.textContent.includes("قانون‌های طلایی ساختمان داده"));
    harness.assert(page.textContent.includes("ارتباط سؤال‌ها با مباحث ساختمان داده هنوز تأیید نشده است."));
  });

  harness.test("data structures routes parse successfully", () => {
    ["#/subjects/data-structures", "#/subjects/data-structures/review", "#/subjects/data-structures/golden-rules", "#/subjects/data-structures/flashcards", "#/subjects/data-structures/traps"].forEach((route) => {
      harness.equal(app.router.routes.parse(route).found, true, route);
    });
  });
})(window);
