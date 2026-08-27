(function defineMilestoneENetworkTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records)
      .filter((record) => record.subjectId === "subject:network" || record.id === "subject:network");
  }

  harness.test("network topic registry registers 20 topics", () => {
    harness.equal(app.content.topicRegistry.registrations.every((r) => r.ok), true);
    harness.equal(records("topics").length, 20);
  });

  harness.test("topic validation rejects fabricated relation status", () => {
    const bad = JSON.parse(JSON.stringify(app.content.topicRelations.payload.dataset));
    bad.records[0].relationStatus = "fabricated";
    harness.equal(app.validation.topicValidation.allowedRelation.includes(bad.records[0].relationStatus), false);
  });

  harness.test("network content validation passes with unknown frequency", () => {
    const result = app.validation.topicValidation.validateNetworkContent();
    harness.equal(result.valid, true, JSON.stringify(result.issues));
    harness.equal(records("topics").every((topic) => topic.frequencyStatus === "unknown"), true);
  });

  harness.test("network lessons cover every topic", () => {
    const lessonIds = new Set(records("lessons").map((lesson) => lesson.id));
    records("topics").forEach((topic) => harness.assert(topic.lessonIds.some((id) => lessonIds.has(id)), topic.id));
  });

  harness.test("network searchable aliases work in Persian and English terms", () => {
    harness.assert(app.search.index.search("DNS").some((result) => result.title.includes("DNS")));
    harness.assert(app.search.index.search("شبکه").some((result) => result.title.includes("شبکه")));
  });

  harness.test("network golden rules validate and are bookmarkable", () => {
    const rules = records("golden-rules").filter((rule) => rule.aggregationStatus === "topic");
    harness.equal(rules.length, 42);
    harness.equal(rules.every((rule) => rule.contentOrigin === "expert-curated" && rule.bookmarkable === true), true);
  });

  harness.test("network flashcards validate content count and origin", () => {
    const cards = records("flashcards");
    harness.equal(cards.length, 84);
    harness.equal(cards.every((card) => card.contentOrigin === "expert-curated" && card.relatedQuestionIds.length === 0), true);
  });

  harness.test("network exam traps validate content count and no fake question links", () => {
    const traps = records("exam-traps");
    harness.equal(traps.length, 22);
    harness.equal(traps.every((trap) => trap.frequencyStatus === "unknown" && trap.relatedQuestionIds.length === 0), true);
  });

  harness.test("question-topic mapping starts empty and valid", () => {
    harness.equal(app.content.questionTopicLinks.validation.valid, true);
    harness.equal(app.content.questionTopicLinks.dataset.records.length, 0);
  });

  harness.test("invalid question-topic mapping source is rejected", () => {
    const issues = app.validation.questionLinkValidation.validateRecord({
      questionId: "question:1404:ce-msc:1",
      topicIds: ["topic:network:dns"],
      mappingSource: "question-number-range",
      verificationStatus: "unverified",
      verifiedBy: null,
      verificationDate: null,
      notes: "Should be rejected."
    });
    harness.assert(issues.includes("invalid-source"));
  });

  harness.test("bookmarking a network topic writes valid storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T12:00:00.000Z";
    state.bookmarks["bookmark:topic:topic:network:dns"] = {
      id: "bookmark:topic:topic:network:dns",
      entityType: "topic",
      entityId: "topic:network:dns",
      createdAt: now,
      updatedAt: now,
      tags: ["network"]
    };
    const result = app.storage.adapter.updateSection("bookmarks", state.bookmarks);
    harness.equal(result.ok, true);
  });

  harness.test("bookmarking a network flashcard writes valid storage", () => {
    const state = app.storage.adapter.getState();
    const now = "2026-07-15T12:00:00.000Z";
    state.bookmarks["bookmark:flashcard:flashcard:network:001"] = {
      id: "bookmark:flashcard:flashcard:network:001",
      entityType: "flashcard",
      entityId: "flashcard:network:001",
      createdAt: now,
      updatedAt: now,
      tags: ["network"]
    };
    const result = app.storage.adapter.updateSection("bookmarks", state.bookmarks);
    harness.equal(result.ok, true);
  });

  harness.test("last-night route exposes network content honestly", () => {
    const route = app.router.routes.parse("#/last-night");
    harness.equal(route.found, true);
    const page = app.features.lastNight.render();
    harness.assert(page.textContent.includes("ارتباط سؤال‌ها با مباحث شبکه هنوز تأیید نشده است."));
    harness.assert(page.textContent.includes("قانون‌های طلایی شبکه"));
  });
})(window);
