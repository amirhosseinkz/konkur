(function registerAnswerResolver(global) {
  "use strict";

  const app = global.KonkurApp;

  function resolveOfficialAnswer(questionId, answerRecords, correctionRecords) {
    const verifiedCorrections = (correctionRecords || [])
      .filter((c) => c.questionId === questionId && c.correctionSourceId)
      .sort((a, b) => {
        const aTime = Date.parse(a.effectiveDate || a.publishedAt);
        const bTime = Date.parse(b.effectiveDate || b.publishedAt);
        if (aTime !== bTime) {
          return bTime - aTime;
        }
        return b.sequence - a.sequence;
      });

    const verifiedAnswers = (answerRecords || [])
      .filter((a) => a.questionId === questionId && a.answerStatus === "verified");

    if (verifiedCorrections.length > 0) {
      const latest = verifiedCorrections[0];
      if (latest.correctionType === "question-deleted") {
        return Object.freeze({
          status: "deleted",
          acceptedOptionIds: [],
          sourceRecordKey: latest.recordKey,
          sourceType: "official-correction",
          provenance: Object.freeze([latest.correctionSourceId])
        });
      }
      if (latest.correctionType === "answer-change" || latest.correctionType === "multiple-accepted") {
        return Object.freeze({
          status: "resolved",
          acceptedOptionIds: Object.freeze([...(latest.result.acceptedOptionIds || [])]),
          sourceRecordKey: latest.recordKey,
          sourceType: "official-correction",
          provenance: Object.freeze([latest.correctionSourceId])
        });
      }
    }

    if (verifiedAnswers.length > 0) {
      const candidateSets = verifiedAnswers.map((a) => [...a.acceptedOptionIds].sort().join("|"));
      const allAgree = candidateSets.every((s) => s === candidateSets[0]);
      if (allAgree) {
        return Object.freeze({
          status: "resolved",
          acceptedOptionIds: Object.freeze([...verifiedAnswers[0].acceptedOptionIds].sort()),
          sourceRecordKey: verifiedAnswers.map((a) => a.recordKey).sort().join(","),
          sourceType: "official-answer",
          provenance: Object.freeze(verifiedAnswers.map((a) => a.answerKeySourceId))
        });
      }
      return Object.freeze({
        status: "conflict",
        acceptedOptionIds: [],
        sourceRecordKey: verifiedAnswers.map((a) => a.recordKey).sort().join(","),
        sourceType: "official-answer",
        provenance: Object.freeze(verifiedAnswers.map((a) => a.answerKeySourceId))
      });
    }

    return Object.freeze({
      status: "unresolved",
      acceptedOptionIds: [],
      sourceRecordKey: null,
      sourceType: null,
      provenance: []
    });
  }

  app.register("features", "answerResolver", { resolveOfficialAnswer });
})(window);