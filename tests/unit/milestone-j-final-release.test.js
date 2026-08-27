(function defineMilestoneJFinalReleaseTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  function all(type) {
    return app.content.registry.getDatasets().filter((dataset) => dataset.datasetType === type && !dataset.testOnly).flatMap((dataset) => dataset.records);
  }

  harness.test("final release loads all imported exam years and question shells", () => {
    harness.deepEqual(app.features.examService.getImportedYears().sort((a, b) => a - b), [1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404]);
    harness.equal(all("questions").length, 1276);
  });

  harness.test("production exam dataset integrity checks pass", () => {
    app.features.examService.getImportedYears().forEach((year) => {
      const summary = app.features.examService.getExamSummary(year, false);
      const answers = app.features.examService.getAnswersForQuestions(summary.questions);
      const deleted = summary.questions.filter((question) => question.questionStatus === "deleted");
      harness.assert(summary.questionCount > 0, String(year));
      harness.assert(answers.length >= summary.questionCount - deleted.length, String(year));
      app.features.examService.getSectionRanges(year).forEach((section) => {
        harness.assert(section.start >= 1 && section.end <= summary.questionCount, `${year}:${section.key}`);
      });
      harness.equal(summary.paperStatus, "legacy-unverified");
      harness.equal(summary.keyStatus, "legacy-unverified");
    });
  });

  harness.test("english answer-sheet scoring works for selected section", () => {
    const context = app.features.examService.buildExamContext(1404, false, app.features.examService.rangeFromHash("#/exams/1404/practice?section=language", 1404));
    const session = app.features.sessionManager.createSession({ mode: "practice", questionRecordKeys: context.questions.map((question) => question.recordKey), year: 1404, filters: context.range });
    const first = context.questions[0];
    const answer = app.features.answerResolver.resolveOfficialAnswer(first.id, context.answers, context.corrections);
    const selected = answer.acceptedOptionIds[0].split(":option:").pop();
    const withAnswer = app.features.sessionManager.setAnswer(session, first.id, first.recordKey, selected).session;
    const result = app.features.scoring.calculateResult(withAnswer, context.questions, context.answers, context.corrections);
    harness.assert(result.correctCount >= 1);
    harness.assert(result.validQuestionCount > 0);
  });

  harness.test("deleted and multiple accepted answers remain handled", () => {
    const context = app.features.examService.buildExamContext(1400, false, null);
    const q39 = context.questions.find((question) => question.questionNumber === 39);
    const q92 = context.questions.find((question) => question.questionNumber === 92);
    harness.equal(q39.questionStatus, "deleted");
    harness.equal(app.features.answerResolver.resolveOfficialAnswer(q92.id, context.answers, context.corrections).acceptedOptionIds.length, 2);
  });

  harness.test("active exam answers persist and recover after refresh", () => {
    app.storage.adapter.resetSection("examSessions");
    const context = app.features.examService.buildExamContext(1404, false, { start: 1, end: 3 });
    harness.assert(context.questions.length > 0, "no questions for 1404 range 1-3");
    let session = app.features.sessionManager.createSession({ mode: "exam", questionRecordKeys: context.questions.map((question) => question.recordKey), durationSeconds: 60, year: 1404, filters: context.range });
    session = app.features.sessionManager.setAnswer(session, context.questions[0].id, context.questions[0].recordKey, "a").session;
    const persistResult = app.features.sessionManager.persistSession(session);
    harness.equal(persistResult.ok, true, `persistSession failed: ${persistResult.status || JSON.stringify(persistResult)}`);
    app.state.store.initialize(app.storage.adapter.snapshot());
    const recovered = app.features.sessionManager.loadSession(session.id);
    harness.assert(recovered, "recovered session is null");
    harness.equal(recovered.draftResponsesByQuestionId[context.questions[0].id].selectedOptionKey, "a");
  });

  harness.test("bookmark persistence supports questions and technical assets", () => {
    app.storage.adapter.resetSection("bookmarks");
    harness.equal(app.features.learning.bookmark("question", "question:1404:ce-msc:1").ok, true);
    harness.equal(app.features.learning.bookmark("flashcard", "flashcard:data-structures:001").ok, true);
    const state = app.storage.adapter.getState();
    harness.equal(Object.keys(state.bookmarks).length, 2);
    harness.equal(app.features.learning.validateUserStateReferences().valid, true);
  });

  harness.test("technical subject navigation remains available", () => {
    ["network", "database", "operating-system", "data-structures"].forEach((slug) => {
      harness.equal(app.router.routes.parse(`#/subjects/${slug}`).found, true, slug);
      harness.equal(app.router.routes.parse(`#/subjects/${slug}/flashcards`).found, true, slug);
    });
  });

  harness.test("final last night smoke includes all subjects and controls", () => {
    const page = app.features.lastNight.render();
    ["شبکه", "پایگاه داده", "سیستم‌عامل", "ساختمان داده", "قانون طلایی تصادفی", "این بخش مرور شد"].forEach((text) => harness.assert(page.textContent.includes(text), text));
  });

  harness.test("final search finds exam years and technical assets", () => {
    const region = document.createElement("div");
    app.features.searchPage.renderResults("1404", region);
    harness.assert(region.textContent.includes("آزمون 1404"));
    app.features.searchPage.renderResults("Dijkstra", region);
    harness.assert(region.textContent.includes("Dijkstra"));
  });

  harness.test("production search excludes test fixture content", () => {
    const fixtureResults = app.search.index.search("fixture-only deterministic search record");
    harness.assert(fixtureResults.every((result) => result.verificationStatus === "not-applicable" || result.entityType !== "test-fixture"));
    harness.equal(app.content.registry.validateAll().valid, true);
  });
})(window);
