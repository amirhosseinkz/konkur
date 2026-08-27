(function defineMilestoneDLegacyImportTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;
  const expectedCounts = Object.freeze({
    1395: 121,
    1396: 140,
    1397: 140,
    1398: 140,
    1399: 150,
    1400: 120,
    1401: 120,
    1402: 115,
    1403: 115,
    1404: 115
  });

  harness.test("legacy import registers all production years", () => {
    harness.deepEqual(app.features.examService.getImportedYears(), [1404, 1403, 1402, 1401, 1400, 1399, 1398, 1397, 1396, 1395]);
  });

  harness.test("legacy import question counts match extracted prototype", () => {
    Object.keys(expectedCounts).forEach((year) => {
      const questions = app.features.examService.getQuestionsForYear(Number(year), false);
      harness.equal(questions.length, expectedCounts[year], `Unexpected question count for ${year}`);
    });
  });

  harness.test("legacy import dataset registrations succeeded", () => {
    for (let year = 1395; year <= 1404; year += 1) {
      const entry = app.content[`exam${year}`];
      harness.assert(entry, `Missing exam module ${year}`);
      harness.assert(entry.registrations.every((r) => r.ok), JSON.stringify(entry.registrations));
      harness.equal(entry.config.verificationStatus, "legacy-unverified");
      harness.equal(entry.config.sourceType, "legacy-prototype");
      harness.equal(entry.config.sourcePath, "legacy/konkur-developer-bank-v4.html");
    }
  });

  harness.test("legacy import deleted questions are preserved", () => {
    const deleted1400 = app.features.examService.getQuestionsForYear(1400, false)
      .filter((q) => q.questionStatus === "deleted")
      .map((q) => q.questionNumber);
    const deleted1403 = app.features.examService.getQuestionsForYear(1403, false)
      .filter((q) => q.questionStatus === "deleted")
      .map((q) => q.questionNumber);
    harness.deepEqual(deleted1400, [39, 74, 80, 87, 98]);
    harness.deepEqual(deleted1403, [46, 114]);
  });

  harness.test("legacy import multiple accepted answer is preserved", () => {
    const ctx = app.features.examService.buildExamContext(1400, false, { start: 92, end: 92 });
    const answer = app.features.answerResolver.resolveOfficialAnswer(ctx.questions[0].id, ctx.answers, ctx.corrections);
    harness.equal(answer.status, "resolved");
    harness.deepEqual(answer.acceptedOptionIds, ["question:1400:ce-msc:92:option:a", "question:1400:ce-msc:92:option:b"]);
  });

  harness.test("legacy import source summaries expose legacy-unverified provenance", () => {
    const summary = app.features.examService.getExamSummary(1404, false);
    harness.equal(summary.paperStatus, "legacy-unverified");
    harness.equal(summary.keyStatus, "legacy-unverified");
    harness.assert(summary.paperSource.originalUrl.indexOf("https://") === 0);
    harness.assert(summary.keySource.originalUrl.indexOf("https://") === 0);
  });
})(window);
