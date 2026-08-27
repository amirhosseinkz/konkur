(function registerExamSessionManager(global) {
  "use strict";

  const app = global.KonkurApp;

  function generateSessionId(mode) {
    const time = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 10);
    return `exam-session:${mode}-${time}-${random}`;
  }

  function generateAttemptId() {
    const time = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 10);
    return `attempt:${time}-${random}`;
  }

  function createSession(options) {
    const opts = options || {};
    const now = new Date().toISOString();
    return {
      id: generateSessionId(opts.mode || "practice"),
      mode: opts.mode || "practice",
      questionRecordKeys: Object.freeze(opts.questionRecordKeys || []),
      attemptIds: [],
      draftResponsesByQuestionId: {},
      reviewMarksByQuestionId: {},
      startedAt: now,
      updatedAt: now,
      status: "in-progress",
      durationSeconds: opts.durationSeconds || null,
      scoringContractVersion: app.features.scoring.SCORING_CONTRACT_VERSION,
      answerResolutionContractVersion: app.features.scoring.ANSWER_RESOLUTION_CONTRACT_VERSION,
      currentResult: null,
      resultHistory: [],
      submittedAt: null,
      expiredAt: null,
      filters: opts.filters || null,
      sourceExamYear: opts.year || null,
      submittedAnswers: {}
    };
  }

  function setAnswer(session, questionId, questionRecordKey, selectedOptionKey) {
    if (session.status !== "in-progress") {
      return { ok: false, code: "session-locked" };
    }
    const next = JSON.parse(JSON.stringify(session));
    next.draftResponsesByQuestionId[questionId] = {
      questionId,
      questionRecordKey,
      selectedOptionKey: selectedOptionKey || null,
      selectedOptionRecordKeys: selectedOptionKey ? [selectedOptionKey] : [],
      updatedAt: new Date().toISOString()
    };
    next.updatedAt = new Date().toISOString();
    return { ok: true, session: next };
  }

  function clearAnswer(session, questionId) {
    if (session.status !== "in-progress") {
      return { ok: false, code: "session-locked" };
    }
    const next = JSON.parse(JSON.stringify(session));
    delete next.draftResponsesByQuestionId[questionId];
    next.updatedAt = new Date().toISOString();
    return { ok: true, session: next };
  }

  function setReviewMark(session, questionId, marked) {
    if (session.status !== "in-progress") {
      return { ok: false, code: "session-locked" };
    }
    const next = JSON.parse(JSON.stringify(session));
    next.reviewMarksByQuestionId = next.reviewMarksByQuestionId || {};
    if (marked) {
      next.reviewMarksByQuestionId[questionId] = { questionId, markedAt: new Date().toISOString() };
    } else {
      delete next.reviewMarksByQuestionId[questionId];
    }
    next.updatedAt = new Date().toISOString();
    return { ok: true, session: next };
  }

  function getRemainingMs(session, now) {
    if (!session.durationSeconds || session.status !== "in-progress") {
      return null;
    }
    const elapsed = (now || Date.now()) - Date.parse(session.startedAt);
    const total = session.durationSeconds * 1000;
    return Math.max(0, total - elapsed);
  }

  function isExpired(session, now) {
    if (!session.durationSeconds || session.status !== "in-progress") {
      return false;
    }
    return getRemainingMs(session, now) <= 0;
  }

  function submitSession(session, submittedAnswers) {
    if (session.status === "submitted") {
      return { ok: false, code: "already-submitted" };
    }
    const next = JSON.parse(JSON.stringify(session));
    next.submittedAnswers = submittedAnswers || {};
    next.status = "submitted";
    next.submittedAt = new Date().toISOString();
    next.updatedAt = next.submittedAt;
    return { ok: true, session: next };
  }

  function expireSession(session) {
    if (session.status !== "in-progress") {
      return { ok: false, code: "session-not-in-progress" };
    }
    const next = JSON.parse(JSON.stringify(session));
    next.status = "expired";
    next.expiredAt = new Date().toISOString();
    next.updatedAt = next.expiredAt;
    return { ok: true, session: next };
  }

  function attachResult(session, result) {
    const next = JSON.parse(JSON.stringify(session));
    next.currentResult = result;
    if (next.resultHistory) {
      next.resultHistory.push(result);
    } else {
      next.resultHistory = [result];
    }
    next.updatedAt = new Date().toISOString();
    return next;
  }

  function persistSession(session) {
    const state = app.storage.adapter.getState();
    state.examSessions[session.id] = session;
    const result = app.storage.adapter.updateSection("examSessions", state.examSessions);
    return result;
  }

  function loadSession(sessionId) {
    const state = app.storage.adapter.getState();
    return state.examSessions[sessionId] || null;
  }

  function getActiveSessions() {
    const state = app.storage.adapter.getState();
    return Object.values(state.examSessions || {})
      .filter((s) => s.status === "in-progress")
      .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  }

  function getLatestSession(year, mode) {
    const sessions = Object.values(app.storage.adapter.getState().examSessions || {});
    const filtered = sessions.filter((s) =>
      s.sourceExamYear === year && s.mode === mode
    );
    if (filtered.length === 0) return null;
    return filtered.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))[0];
  }

  function persistAttempt(attempt) {
    const state = app.storage.adapter.getState();
    state.attempts[attempt.id] = attempt;
    return app.storage.adapter.updateSection("attempts", state.attempts);
  }

  function createAttempt(session, questionId, questionRecordKey, selectedOptionKey, outcome, result) {
    const now = new Date().toISOString();
    return {
      id: generateAttemptId(),
      questionId,
      questionRecordKey,
      mode: session.mode,
      selectedOptionRecordKeys: selectedOptionKey ? [selectedOptionKey] : [],
      startedAt: session.startedAt,
      submittedAt: now,
      elapsedMilliseconds: Date.parse(now) - Date.parse(session.startedAt),
      outcome,
      scoringContractVersion: session.scoringContractVersion,
      answerResolutionContractVersion: session.answerResolutionContractVersion,
      effectiveAnswerRecordKeys: result ? result.effectiveAnswerRecordKeys : [],
      effectiveCorrectionRecordKeys: result ? result.effectiveCorrectionRecordKeys : [],
      examSessionId: session.id
    };
  }

  app.register("features", "sessionManager", {
    createSession,
    setAnswer,
    clearAnswer,
    setReviewMark,
    getRemainingMs,
    isExpired,
    submitSession,
    expireSession,
    attachResult,
    persistSession,
    loadSession,
    getActiveSessions,
    getLatestSession,
    createAttempt,
    persistAttempt,
    generateSessionId,
    generateAttemptId
  });
})(window);
