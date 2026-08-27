(function defineMilestoneGOperatingSystemTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const subjectId = "subject:operating-system";

  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records)
      .filter((record) => record.subjectId === subjectId || record.id === subjectId);
  }

  harness.test("operating system subject and topic registry register successfully", () => {
    harness.equal(app.content.operatingSystemSubject.registrations.every((r) => r.ok), true);
    harness.equal(app.content.operatingSystemTopicRegistry.registrations.every((r) => r.ok), true);
    harness.equal(records("topics").length, 26);
  });

  harness.test("operating system lessons cover every topic", () => {
    const lessonIds = new Set(records("lessons").map((lesson) => lesson.id));
    records("topics").forEach((topic) => harness.assert(topic.lessonIds.some((id) => lessonIds.has(id)), topic.id));
  });

  harness.test("operating system content counts match milestone contract", () => {
    harness.equal(records("lessons").length, 26);
    harness.equal(records("golden-rules").length, 55);
    harness.equal(records("flashcards").length, 104);
    harness.equal(records("exam-traps").length, 24);
    harness.equal(records("five-minute-reviews").length, 1);
  });

  harness.test("operating system assets use required metadata labels", () => {
    ["topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"].forEach((type) => {
      records(type).forEach((record) => {
        harness.equal(record.contentOrigin, "expert-curated", record.id);
        harness.equal(record.verificationStatus, "expert-reviewed", record.id);
        harness.equal(record.frequencyStatus, "unknown", record.id);
        harness.equal((record.relatedQuestionIds || []).length, 0, record.id);
      });
    });
  });

  harness.test("operating system IDs are unique", () => {
    const all = ["subjects", "topics", "lessons", "golden-rules", "flashcards", "exam-traps", "five-minute-reviews"]
      .flatMap(records);
    harness.equal(new Set(all.map((record) => record.id)).size, all.length);
  });

  harness.test("operating system searchable content is indexed", () => {
    harness.assert(app.search.index.search("Round Robin").some((result) => result.title.includes("Round Robin")));
    harness.assert(app.search.index.search("سیستم").some((result) => result.title.includes("سیستم")));
  });

  harness.test("operating system bookmark integration writes valid topic storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T14:00:00.000Z";
    state.bookmarks["bookmark:topic:topic:operating-system:round-robin"] = {
      id: "bookmark:topic:topic:operating-system:round-robin",
      entityType: "topic",
      entityId: "topic:operating-system:round-robin",
      createdAt: now,
      updatedAt: now,
      tags: ["operating-system"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("operating system bookmark integration writes valid flashcard storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T14:00:00.000Z";
    state.bookmarks["bookmark:flashcard:flashcard:operating-system:001"] = {
      id: "bookmark:flashcard:flashcard:operating-system:001",
      entityType: "flashcard",
      entityId: "flashcard:operating-system:001",
      createdAt: now,
      updatedAt: now,
      tags: ["operating-system"]
    };
    harness.equal(app.storage.adapter.updateSection("bookmarks", state.bookmarks).ok, true);
  });

  harness.test("last-night route includes operating system content", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.textContent.includes("قانون‌های طلایی سیستم‌عامل"));
    harness.assert(page.textContent.includes("ارتباط سؤال‌ها با مباحث سیستم‌عامل هنوز تأیید نشده است."));
  });

  harness.test("operating system routes parse successfully", () => {
    ["#/subjects/operating-system", "#/subjects/operating-system/review", "#/subjects/operating-system/golden-rules", "#/subjects/operating-system/flashcards", "#/subjects/operating-system/traps"].forEach((route) => {
      harness.equal(app.router.routes.parse(route).found, true, route);
    });
  });
})(window);
