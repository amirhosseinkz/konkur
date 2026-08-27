(function defineMilestoneFDatabaseTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records)
      .filter((record) => record.subjectId === "subject:database" || record.id === "subject:database");
  }

  harness.test("database subject and topic registry register successfully", () => {
    harness.equal(app.content.databaseSubject.registrations.every((r) => r.ok), true);
    harness.equal(app.content.databaseTopicRegistry.registrations.every((r) => r.ok), true);
    harness.equal(records("topics").length, 25);
  });

  harness.test("database lessons cover every topic", () => {
    const lessonIds = new Set(records("lessons").map((lesson) => lesson.id));
    records("topics").forEach((topic) => harness.assert(topic.lessonIds.some((id) => lessonIds.has(id)), topic.id));
  });

  harness.test("database content counts match milestone contract", () => {
    harness.equal(records("lessons").length, 25);
    harness.equal(records("golden-rules").length, 49);
    harness.equal(records("flashcards").length, 92);
    harness.equal(records("exam-traps").length, 22);
    harness.equal(records("five-minute-reviews").length, 1);
  });

  harness.test("database assets use expert-curated unknown-frequency labels", () => {
    ["topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"].forEach((type) => {
      records(type).forEach((record) => {
        harness.equal(record.contentOrigin, "expert-curated", record.id);
        harness.equal(record.frequencyStatus, "unknown", record.id);
      });
    });
  });

  harness.test("database IDs are unique", () => {
    const all = ["subjects", "topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"]
      .flatMap(records);
    harness.equal(new Set(all.map((record) => record.id)).size, all.length);
  });

  harness.test("database searchable content is indexed", () => {
    harness.assert(app.search.index.search("BCNF").some((result) => result.title.includes("BCNF")));
    harness.assert(app.search.index.search("پایگاه").some((result) => result.title.includes("پایگاه")));
  });

  harness.test("database bookmark integration writes valid topic storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T13:00:00.000Z";
    state.bookmarks["bookmark:topic:topic:database:bcnf"] = {
      id: "bookmark:topic:topic:database:bcnf",
      entityType: "topic",
      entityId: "topic:database:bcnf",
      createdAt: now,
      updatedAt: now,
      tags: ["database"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("database bookmark integration writes valid flashcard storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T13:00:00.000Z";
    state.bookmarks["bookmark:flashcard:flashcard:database:001"] = {
      id: "bookmark:flashcard:flashcard:database:001",
      entityType: "flashcard",
      entityId: "flashcard:database:001",
      createdAt: now,
      updatedAt: now,
      tags: ["database"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("last-night route includes database content", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.textContent.includes("قانون‌های طلایی پایگاه داده"));
    harness.assert(page.textContent.includes("ارتباط سؤال‌ها با مباحث پایگاه داده هنوز تأیید نشده است."));
  });

  harness.test("database routes parse successfully", () => {
    ["#/subjects/database", "#/subjects/database/review", "#/subjects/database/golden-rules", "#/subjects/database/flashcards", "#/subjects/database/traps"].forEach((route) => {
      harness.equal(app.router.routes.parse(route).found, true, route);
    });
  });
})(window);
