(function registerExamService(global) {
  "use strict";

  const app = global.KonkurApp;

  function getImportedYears() {
    const datasets = app.content.registry.getDatasets();
    const years = new Set();
    datasets.forEach((ds) => {
      if (ds.datasetType === "questions" && !ds.testOnly) {
        ds.records.forEach((q) => {
          if (q.year) years.add(q.year);
        });
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }

  function getExamModule(year) {
    return app.content[`exam${year}`] || null;
  }

  function getExamConfig(year) {
    const module = getExamModule(year);
    return module ? module.config : null;
  }

  function getTestFixtureYears() {
    const datasets = app.content.registry.getDatasets();
    const years = new Set();
    datasets.forEach((ds) => {
      if (ds.datasetType === "questions" && ds.testOnly) {
        ds.records.forEach((q) => {
          if (q.year) years.add(q.year);
        });
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }

  function getQuestionsForYear(year, testOnly) {
    const datasets = app.content.registry.getDatasets();
    const questions = [];
    datasets.forEach((ds) => {
      if (ds.datasetType === "questions" && ds.testOnly === Boolean(testOnly)) {
        ds.records.forEach((q) => {
          if (q.year === year && q.publicationStatus === "published") {
            questions.push(q);
          }
        });
      }
    });
    return questions.sort((a, b) => a.questionNumber - b.questionNumber);
  }

  function getOptionsForQuestions(questions) {
    const datasets = app.content.registry.getDatasets();
    const questionIds = new Set(questions.map((q) => q.id));
    const options = [];
    datasets.forEach((ds) => {
      if (ds.datasetType === "question-options") {
        ds.records.forEach((opt) => {
          if (questionIds.has(opt.questionId)) {
            options.push(opt);
          }
        });
      }
    });
    return options;
  }

  function getAnswersForQuestions(questions) {
    const datasets = app.content.registry.getDatasets();
    const questionIds = new Set(questions.map((q) => q.id));
    const answers = [];
    datasets.forEach((ds) => {
      if (ds.datasetType === "official-answers") {
        ds.records.forEach((ans) => {
          if (questionIds.has(ans.questionId)) {
            answers.push(ans);
          }
        });
      }
    });
    return answers;
  }

  function getCorrectionsForQuestions(questions) {
    const datasets = app.content.registry.getDatasets();
    const questionIds = new Set(questions.map((q) => q.id));
    const corrections = [];
    datasets.forEach((ds) => {
      if (ds.datasetType === "official-corrections") {
        ds.records.forEach((corr) => {
          if (questionIds.has(corr.questionId)) {
            corrections.push(corr);
          }
        });
      }
    });
    return corrections;
  }

  function getSourceForYear(year, sourceType) {
    const sources = app.content.sourceRegistry.getActiveRecords();
    return sources.find((s) => s.year === year && s.sourceType === sourceType) || null;
  }

  function getExamSummary(year, testOnly) {
    const questions = getQuestionsForYear(year, testOnly);
    const config = getExamConfig(year);
    const paperSource = getSourceForYear(year, "exam-paper");
    const keySource = getSourceForYear(year, "answer-key");
    const correctionSources = app.content.sourceRegistry.getActiveRecords()
      .filter((s) => s.year === year && s.sourceType === "official-correction");

    return Object.freeze({
      year,
      testOnly: Boolean(testOnly),
      questionCount: questions.length,
      paperStatus: paperSource ? paperSource.verificationStatus : "pending-acquisition",
      keyStatus: keySource ? keySource.verificationStatus : "pending-acquisition",
      correctionCount: correctionSources.length,
      paperSource,
      keySource,
      correctionSources,
      questions,
      config,
      sections: config ? config.sections || {} : {}
    });
  }

  function normalizeRange(range, questionCount) {
    if (!range) return null;
    const start = Math.max(1, parseInt(range.start, 10) || 1);
    const end = Math.min(questionCount, parseInt(range.end, 10) || questionCount);
    return start <= end ? { start, end } : null;
  }

  function routeForYear(year) {
    return `#/exams/${year}`;
  }

  function routeForMode(year, mode, sectionId) {
    const safeMode = mode === "exam" ? "exam" : "practice";
    const safeSection = sectionId || "full";
    return `#/exams/${year}/${safeMode}/${encodeURIComponent(safeSection)}`;
  }

  function routeForCustom(year, mode, start, end) {
    const safeMode = mode === "exam" ? "exam" : "practice";
    return `#/exams/${year}/${safeMode}/custom?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`;
  }

  function routeForReview(year, attemptId) {
    return `#/exams/${year}/review/${encodeURIComponent(attemptId)}`;
  }

  function rangeFromHash(hash, year) {
    const raw = String(hash || global.location.hash || "");
    const query = raw.includes("?") ? raw.split("?")[1] : "";
    const params = new URLSearchParams(query);
    const section = params.get("section");
    const config = getExamConfig(year);
    if (section && config && config.sections && config.sections[section]) {
      const questions = config.sections[section].questions || [];
      return questions.length ? { start: Math.min(...questions), end: Math.max(...questions), section } : null;
    }
    const custom = normalizeRange({ start: params.get("start"), end: params.get("end") }, config ? config.questionCount : 200);
    return custom ? { ...custom, section: null } : null;
  }

  function rangeFromRoute(params, hash) {
    const year = params.year;
    const sectionId = params.sectionId || null;
    const config = getExamConfig(year);
    if (!config) return { ok: false, error: "unknown-year", range: null, label: null };
    if (!sectionId || sectionId === "full") {
      return { ok: true, range: null, label: "کل دفترچه", sectionId: "full" };
    }
    if (sectionId === "custom") {
      const raw = String(hash || global.location.hash || "");
      const query = raw.includes("?") ? raw.split("?")[1] : "";
      const queryParams = new URLSearchParams(query);
      const range = normalizeRange({ start: queryParams.get("start"), end: queryParams.get("end") }, config.questionCount);
      return range
        ? { ok: true, range: { ...range, section: "custom" }, label: `بازه ${range.start}-${range.end}`, sectionId: "custom" }
        : { ok: false, error: "invalid-range", range: null, label: null };
    }
    const section = config.sections && config.sections[sectionId];
    if (!section) return { ok: false, error: "unknown-section", range: null, label: null, sectionId };
    const questions = section.questions || [];
    if (questions.length === 0) return { ok: false, error: "empty-section", range: null, label: section.label || sectionId, sectionId };
    return {
      ok: true,
      range: { start: Math.min(...questions), end: Math.max(...questions), section: sectionId },
      label: section.label || sectionId,
      sectionId,
      page: section.page || null
    };
  }

  function getSectionRanges(year) {
    const config = getExamConfig(year);
    if (!config || !config.sections) return [];
    return Object.entries(config.sections).map(([key, section]) => {
      const questions = section.questions || [];
      return {
        key,
        label: section.label,
        page: section.page || null,
        count: questions.length,
        start: questions.length ? Math.min(...questions) : null,
        end: questions.length ? Math.max(...questions) : null
      };
    });
  }

  function buildExamContext(year, testOnly, range) {
    const allQuestions = getQuestionsForYear(year, testOnly);
    let questions = allQuestions;
    if (range && range.start && range.end) {
      const normalized = normalizeRange(range, allQuestions.length);
      if (normalized) questions = allQuestions.filter((q) => q.questionNumber >= normalized.start && q.questionNumber <= normalized.end);
    }
    const options = getOptionsForQuestions(questions);
    const answers = getAnswersForQuestions(questions);
    const corrections = getCorrectionsForQuestions(questions);
    return Object.freeze({
      year,
      testOnly: Boolean(testOnly),
      questions,
      options,
      answers,
      corrections,
      range: range || null,
      questionCount: questions.length
    });
  }

  function startSession(examContext, mode, durationSeconds) {
    const questionRecordKeys = examContext.questions.map((q) => q.recordKey);
    const session = app.features.sessionManager.createSession({
      mode,
      questionRecordKeys,
      durationSeconds: durationSeconds || null,
      year: examContext.year,
      filters: examContext.range
    });
    return session;
  }

  function calculateAndPersistResult(session, examContext) {
    const result = app.features.scoring.calculateResult(
      session,
      examContext.questions,
      examContext.answers,
      examContext.corrections
    );
    const withResult = app.features.sessionManager.attachResult(session, result);
    app.features.sessionManager.persistSession(withResult);

    examContext.questions.forEach((q) => {
      const perQ = result.perQuestion.find((p) => p.questionId === q.id);
      if (perQ) {
        const attempt = app.features.sessionManager.createAttempt(
          session, q.id, q.recordKey,
          session.submittedAnswers[q.id] || null,
          perQ.outcome, result
        );
        app.features.sessionManager.persistAttempt(attempt);
      }
    });

    return { result, session: withResult };
  }

  app.register("features", "examService", {
    getImportedYears,
    getTestFixtureYears,
    getExamConfig,
    getSectionRanges,
    routeForYear,
    routeForMode,
    routeForCustom,
    routeForReview,
    rangeFromHash,
    rangeFromRoute,
    normalizeRange,
    getQuestionsForYear,
    getOptionsForQuestions,
    getAnswersForQuestions,
    getCorrectionsForQuestions,
    getSourceForYear,
    getExamSummary,
    buildExamContext,
    startSession,
    calculateAndPersistResult
  });
})(window);
