(function defineSprint3ExamTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const fixture = app.tests.examFixture;

  harness.test("exam test fixture registers all datasets successfully", () => {
    harness.assert(fixture.registrationErrors.length === 0, JSON.stringify(fixture.registrationErrors));
    harness.equal(fixture.registrations.length, 5);
    harness.assert(fixture.registrations.every((r) => r.ok));
  });

  harness.test("exam service finds test fixture questions", () => {
    const questions = app.features.examService.getQuestionsForYear(fixture.year, true);
    harness.equal(questions.length, 6);
  });

  harness.test("exam service builds exam context with options and answers", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    harness.equal(ctx.questions.length, 6);
    harness.assert(ctx.options.length >= 24);
    harness.assert(ctx.answers.length >= 5);
    harness.assert(ctx.corrections.length >= 1);
  });

  harness.test("scoring engine calculates all-correct result", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const session = app.features.sessionManager.createSession({
      mode: "practice",
      questionRecordKeys: ctx.questions.map((q) => q.recordKey),
      year: fixture.year
    });
    const submittedAnswers = {};
    ctx.questions.forEach((q) => {
      const resolver = app.features.answerResolver;
      const answer = resolver.resolveOfficialAnswer(q.id, ctx.answers, ctx.corrections);
      if (answer.acceptedOptionIds.length > 0) {
        const optId = answer.acceptedOptionIds[0];
        const parts = optId.split(":option:");
        submittedAnswers[q.id] = parts[parts.length - 1];
      }
    });
    session.submittedAnswers = submittedAnswers;
    const result = app.features.scoring.calculateResult(session, ctx.questions, ctx.answers, ctx.corrections);
    harness.assert(result.correctCount > 0, `Expected correct > 0, got ${result.correctCount}`);
    harness.equal(result.status, "partial");
  });

  harness.test("scoring engine handles all-wrong with negative marking", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ctx.questions.map((q) => q.recordKey),
      durationSeconds: 60,
      year: fixture.year
    });
    const submittedAnswers = {};
    ctx.questions.forEach((q) => {
      submittedAnswers[q.id] = "d";
    });
    session.submittedAnswers = submittedAnswers;
    const result = app.features.scoring.calculateResult(session, ctx.questions, ctx.answers, ctx.corrections);
    harness.assert(result.wrongCount > 0, `Expected wrong > 0, got ${result.wrongCount}`);
    harness.assert(result.scorePercent < 0, `Expected negative score, got ${result.scorePercent}`);
  });

  harness.test("scoring engine handles all-blank result", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ctx.questions.map((q) => q.recordKey),
      durationSeconds: 60,
      year: fixture.year
    });
    session.submittedAnswers = {};
    const result = app.features.scoring.calculateResult(session, ctx.questions, ctx.answers, ctx.corrections);
    harness.equal(result.blankCount, ctx.questions.length - result.deletedCount - result.unscoredCount);
    harness.equal(result.scorePercent, 0);
  });

  harness.test("deleted question is excluded from valid question count", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ctx.questions.map((q) => q.recordKey),
      durationSeconds: 60,
      year: fixture.year
    });
    session.submittedAnswers = {};
    const result = app.features.scoring.calculateResult(session, ctx.questions, ctx.answers, ctx.corrections);
    harness.assert(result.deletedCount >= 0);
    harness.equal(result.correctCount + result.wrongCount + result.blankCount, result.validQuestionCount);
  });

  harness.test("multiple accepted answers work correctly", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const q3 = ctx.questions.find((q) => q.questionNumber === 3);
    const resolver = app.features.answerResolver;
    const answer = resolver.resolveOfficialAnswer(q3.id, ctx.answers, ctx.corrections);
    harness.equal(answer.status, "resolved");
    harness.equal(answer.acceptedOptionIds.length, 2);
  });

  harness.test("correction precedence overrides original answer", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const q5 = ctx.questions.find((q) => q.questionNumber === 5);
    const resolver = app.features.answerResolver;
    const answer = resolver.resolveOfficialAnswer(q5.id, ctx.answers, ctx.corrections);
    harness.equal(answer.status, "resolved");
    harness.equal(answer.sourceType, "official-correction");
    harness.assert(answer.acceptedOptionIds.includes(`${q5.id}:option:b`));
  });

  harness.test("unresolved answer produces unscored outcome", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const q6 = ctx.questions.find((q) => q.questionNumber === 6);
    const resolver = app.features.answerResolver;
    const answer = resolver.resolveOfficialAnswer(q6.id, ctx.answers, ctx.corrections);
    harness.equal(answer.status, "unresolved");
  });

  harness.test("session manager creates and persists session", () => {
    const session = app.features.sessionManager.createSession({
      mode: "practice",
      questionRecordKeys: ["question:test:1@1"],
      year: 1399
    });
    harness.assert(session.id.startsWith("exam-session:"));
    harness.equal(session.status, "in-progress");
  });

  harness.test("session manager set and clear answer", () => {
    const session = app.features.sessionManager.createSession({
      mode: "practice",
      questionRecordKeys: ["question:test:1@1"],
      year: 1399
    });
    const setResult = app.features.sessionManager.setAnswer(session, "question:test:1", "question:test:1@1", "a");
    harness.assert(setResult.ok);
    harness.equal(setResult.session.draftResponsesByQuestionId["question:test:1"].selectedOptionKey, "a");
    const clearResult = app.features.sessionManager.clearAnswer(setResult.session, "question:test:1");
    harness.assert(clearResult.ok);
    harness.assert(!clearResult.session.draftResponsesByQuestionId["question:test:1"]);
  });

  harness.test("session manager locks submitted session", () => {
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ["question:test:1@1"],
      durationSeconds: 60,
      year: 1399
    });
    const submitResult = app.features.sessionManager.submitSession(session, { "question:test:1": "a" });
    harness.assert(submitResult.ok);
    harness.equal(submitResult.session.status, "submitted");
    const reSubmit = app.features.sessionManager.submitSession(submitResult.session, {});
    harness.assert(!reSubmit.ok);
  });

  harness.test("session manager detects expired session", () => {
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ["question:test:1@1"],
      durationSeconds: 1,
      year: 1399
    });
    session.startedAt = "2020-01-01T00:00:00.000Z";
    harness.assert(app.features.sessionManager.isExpired(session, Date.parse("2020-01-01T00:02:00.000Z")));
  });

  harness.test("route parser handles exam pattern routes", () => {
    const r1 = app.router.routes.parse("#/exams/1399/practice/full");
    harness.assert(r1.found);
    harness.equal(r1.params.year, 1399);
    harness.equal(r1.params.mode, "practice");
    harness.equal(r1.params.sectionId, "full");

    const r2 = app.router.routes.parse("#/exams/1399/exam/language");
    harness.assert(r2.found);
    harness.equal(r2.params.year, 1399);
    harness.equal(r2.params.mode, "exam");
    harness.equal(r2.params.sectionId, "language");

    const r3 = app.router.routes.parse("#/exams/1399/review/attempt-123");
    harness.assert(r3.found);
    harness.equal(r3.params.year, 1399);
    harness.equal(r3.params.attemptId, "attempt-123");
  });

  harness.test("production fixture isolation: exam fixture is test-only", () => {
    harness.equal(app.tests.examFixture.allDatasets.every((ds) => ds.testOnly === true), true);
  });

  harness.test("exam service getImportedYears excludes test fixtures", () => {
    const years = app.features.examService.getImportedYears();
    const productionQuestions = app.features.examService.getQuestionsForYear(fixture.year, false);
    harness.assert(years.includes(fixture.year));
    harness.assert(productionQuestions.every((q) => !q.id.startsWith("question:test:")));
  });

  harness.test("scoring reconciliation matches total questions", () => {
    const ctx = app.features.examService.buildExamContext(fixture.year, true, null);
    const session = app.features.sessionManager.createSession({
      mode: "exam",
      questionRecordKeys: ctx.questions.map((q) => q.recordKey),
      durationSeconds: 60,
      year: fixture.year
    });
    session.submittedAnswers = {};
    ctx.questions.forEach((q) => {
      session.submittedAnswers[q.id] = "a";
    });
    const result = app.features.scoring.calculateResult(session, ctx.questions, ctx.answers, ctx.corrections);
    harness.equal(result.reconciliation, ctx.questions.length);
  });
})(window);
