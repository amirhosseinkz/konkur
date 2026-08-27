(function registerScoringEngine(global) {
  "use strict";

  const app = global.KonkurApp;
  const SCORING_CONTRACT_VERSION = 1;
  const ANSWER_RESOLUTION_CONTRACT_VERSION = 1;
  const DEFAULT_CONFIG = Object.freeze({
    correctCredit: 1,
    wrongPenaltyDivisor: 3,
    blankCredit: 0,
    deletedQuestionPolicy: "exclude",
    allowNegativeResult: true
  });

  function generateResultId(sessionId) {
    const time = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 10);
    return `result:${sessionId}:${time}-${random}`;
  }

  function classifyAnswer(question, selectedOptionKey, effectiveAnswer) {
    if (question && question.questionStatus === "deleted") {
      return "deleted";
    }
    if (effectiveAnswer.status === "deleted") {
      return "deleted";
    }
    if (effectiveAnswer.status === "unresolved" || effectiveAnswer.status === "conflict") {
      return "unscored";
    }
    if (!selectedOptionKey) {
      return "blank";
    }
    const accepted = effectiveAnswer.acceptedOptionIds || [];
    if (accepted.some((id) => id.endsWith(`:option:${selectedOptionKey}`))) {
      return "correct";
    }
    return "wrong";
  }

  function calculateResult(session, questions, answers, corrections, config) {
    const cfg = config || DEFAULT_CONFIG;
    const sessionId = session.id;
    const questionRecords = questions || [];
    const answerRecords = answers || [];
    const correctionRecords = corrections || [];
    const resolver = app.features.answerResolver;
    const draftResponses = session.draftResponsesByQuestionId || {};
    const submittedAnswers = session.submittedAnswers || {};

    const counts = { correct: 0, wrong: 0, blank: 0, deleted: 0, unscored: 0 };
    const effectiveAnswerRecordKeys = [];
    const effectiveCorrectionRecordKeys = [];
    const perQuestion = [];

    questionRecords.forEach((question) => {
      const effectiveAnswer = resolver.resolveOfficialAnswer(
        question.id, answerRecords, correctionRecords
      );

      if (effectiveAnswer.sourceRecordKey) {
        effectiveAnswerRecordKeys.push(effectiveAnswer.sourceRecordKey);
      }
      if (effectiveAnswer.sourceType === "official-correction") {
        effectiveCorrectionRecordKeys.push(effectiveAnswer.sourceRecordKey);
      }

      const selectedKey = submittedAnswers[question.id]
        || (draftResponses[question.id] ? draftResponses[question.id].selectedOptionKey : null);
      const outcome = classifyAnswer(question, selectedKey, effectiveAnswer);

      counts[outcome] = (counts[outcome] || 0) + 1;
      perQuestion.push(Object.freeze({
        questionId: question.id,
        questionNumber: question.questionNumber,
        year: question.year,
        paperCode: question.paperCode,
        selectedOptionKey: selectedKey || null,
        acceptedOptionKeys: (effectiveAnswer.acceptedOptionIds || []).map((id) => {
          const parts = id.split(":option:");
          return parts[parts.length - 1];
        }),
        outcome,
        effectiveAnswerStatus: effectiveAnswer.status,
        effectiveAnswerRecordKey: effectiveAnswer.sourceRecordKey,
        sourceType: effectiveAnswer.sourceType,
        provenance: effectiveAnswer.provenance
      }));
    });

    const validQuestionCount = counts.correct + counts.wrong + counts.blank;
    const rawNumerator = (counts.correct * cfg.correctCredit)
      - (counts.wrong / cfg.wrongPenaltyDivisor);
    let scorePercent = null;
    if (validQuestionCount > 0) {
      scorePercent = (rawNumerator / validQuestionCount) * 100;
      if (!cfg.allowNegativeResult && scorePercent < 0) {
        scorePercent = 0;
      }
    }

    let status = "calculated";
    let reason = null;
    if (validQuestionCount === 0) {
      status = "insufficient-data";
      reason = "No valid scored questions exist.";
    } else if (counts.unscored > 0) {
      status = "partial";
      reason = `${counts.unscored} question(s) lack verified effective answers.`;
    }

    const reconciliation = counts.correct + counts.wrong + counts.blank
      + counts.deleted + counts.unscored;

    return Object.freeze({
      id: generateResultId(sessionId),
      status,
      reason,
      correctCount: counts.correct,
      wrongCount: counts.wrong,
      blankCount: counts.blank,
      deletedCount: counts.deleted,
      unscoredCount: counts.unscored,
      validQuestionCount,
      rawNumerator,
      scorePercent,
      scoringContractVersion: SCORING_CONTRACT_VERSION,
      answerResolutionContractVersion: ANSWER_RESOLUTION_CONTRACT_VERSION,
      effectiveAnswerRecordKeys: Object.freeze(effectiveAnswerRecordKeys),
      effectiveCorrectionRecordKeys: Object.freeze(effectiveCorrectionRecordKeys),
      calculatedAt: new Date().toISOString(),
      perQuestion: Object.freeze(perQuestion),
      reconciliation
    });
  }

  app.register("features", "scoring", {
    SCORING_CONTRACT_VERSION,
    ANSWER_RESOLUTION_CONTRACT_VERSION,
    DEFAULT_CONFIG,
    classifyAnswer,
    calculateResult,
    generateResultId
  });
})(window);
