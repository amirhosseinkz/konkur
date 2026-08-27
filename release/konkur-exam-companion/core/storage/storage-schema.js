(function registerStorageSchema(global) {
  "use strict";

  const app = global.KonkurApp;
  const validators = app.validation.validators;
  const SCHEMA_VERSION = 1;
  const ROOT_KEY = "konkurExamCompanion";
  const ROOT_FIELDS = Object.freeze([
    "schemaVersion",
    "createdAt",
    "updatedAt",
    "migration",
    "settings",
    "progress",
    "attempts",
    "examSessions",
    "bookmarks",
    "review",
    "searchHistory",
    "statistics",
    "cache"
  ]);

  function now(clock) {
    return (clock || (() => new Date()))().toISOString();
  }

  function createDefaults(clock) {
    const timestamp = now(clock);
    return {
      schemaVersion: SCHEMA_VERSION,
      createdAt: timestamp,
      updatedAt: timestamp,
      migration: {
        lastSuccessfulSchemaVersion: SCHEMA_VERSION,
        migrationHistory: [],
        recoveryEvents: []
      },
      settings: {
        appearance: "dark",
        updatedAt: timestamp,
        language: "en",
        translationEnabled: false,
        reducedMotion: "system",
        fontScale: 1,
        examDate: null,
        availableStudyMinutes: null,
        selectedSubjectIds: [],
        onboardingStatus: "not-started",
        confirmBeforeReset: true,
        keyboardShortcutsEnabled: true,
        lastRoute: "#/dashboard"
      },
      progress: { lessonsById: {}, topicsById: {} },
      attempts: {},
      examSessions: {},
      bookmarks: {},
      review: { queueById: {}, flashcardsById: {} },
      searchHistory: [],
      statistics: { currentSnapshot: null, snapshotHistory: [] },
      cache: { translationsByKey: {} }
    };
  }

  function validateSettings(settings) {
    const allowed = [
      "appearance", "updatedAt", "language", "translationEnabled", "reducedMotion",
      "fontScale", "examDate", "availableStudyMinutes", "selectedSubjectIds",
      "onboardingStatus", "confirmBeforeReset", "keyboardShortcutsEnabled", "lastRoute"
    ];
    return hasOnlyFields(settings, allowed)
      && settings.appearance === "dark"
      && validators.isIsoTimestamp(settings.updatedAt)
      && ["en", "fa"].includes(settings.language)
      && typeof settings.translationEnabled === "boolean"
      && ["system", "reduce", "no-preference"].includes(settings.reducedMotion)
      && Number.isFinite(settings.fontScale)
      && settings.fontScale >= 0.875
      && settings.fontScale <= 1.5
      && Array.isArray(settings.selectedSubjectIds)
      && settings.selectedSubjectIds.every(validators.isStableId)
      && (settings.examDate === null || /^\d{4}-\d{2}-\d{2}$/.test(settings.examDate))
      && (settings.availableStudyMinutes === null
        || (Number.isInteger(settings.availableStudyMinutes) && settings.availableStudyMinutes >= 0))
      && ["not-started", "in-progress", "completed"].includes(settings.onboardingStatus)
      && settings.confirmBeforeReset === true
      && typeof settings.keyboardShortcutsEnabled === "boolean"
      && typeof settings.lastRoute === "string";
  }

  function hasOnlyFields(value, allowed) {
    return validators.isPlainObject(value)
      && Object.keys(value).every((field) => allowed.includes(field));
  }

  function isNullableTimestamp(value) {
    return value === null || validators.isIsoTimestamp(value);
  }

  function validateMap(value, validateRecord) {
    return validators.isPlainObject(value) && Object.entries(value).every(([key, record]) => (
      validators.isPlainObject(record) && validateRecord(record, key)
    ));
  }

  function validateAttempt(record, key) {
    const allowed = [
      "id", "questionId", "questionRecordKey", "mode", "selectedOptionRecordKeys",
      "startedAt", "submittedAt", "elapsedMilliseconds", "outcome",
      "scoringContractVersion", "answerResolutionContractVersion",
      "effectiveAnswerRecordKeys", "effectiveCorrectionRecordKeys", "examSessionId",
      "confidenceBeforeAnswer", "wasHintUsed", "wasTranslationShown", "notes"
    ];
    return hasOnlyFields(record, allowed)
      && record.id === key
      && /^attempt:[a-zA-Z0-9-]+$/.test(record.id)
      && validators.isStableId(record.questionId)
      && typeof record.questionRecordKey === "string"
      && ["practice", "exam", "review"].includes(record.mode)
      && Array.isArray(record.selectedOptionRecordKeys)
      && record.selectedOptionRecordKeys.length <= 1
      && validators.isIsoTimestamp(record.startedAt)
      && validators.isIsoTimestamp(record.submittedAt)
      && Date.parse(record.submittedAt) >= Date.parse(record.startedAt)
      && Number.isFinite(record.elapsedMilliseconds)
      && record.elapsedMilliseconds >= 0
      && ["correct", "wrong", "blank", "deleted", "unscored"].includes(record.outcome)
      && validators.isPositiveInteger(record.scoringContractVersion)
      && validators.isPositiveInteger(record.answerResolutionContractVersion)
      && Array.isArray(record.effectiveAnswerRecordKeys)
      && Array.isArray(record.effectiveCorrectionRecordKeys)
      && (record.mode !== "exam" || (record.wasHintUsed !== true && record.wasTranslationShown !== true))
      && (record.notes === undefined || (typeof record.notes === "string" && Array.from(record.notes).length <= 2000));
  }

  function validateSession(record, key) {
    const allowed = [
      "id", "mode", "questionRecordKeys", "attemptIds", "draftResponsesByQuestionId",
      "reviewMarksByQuestionId",
      "startedAt", "updatedAt", "status", "durationSeconds", "scoringContractVersion",
      "answerResolutionContractVersion", "currentResult", "resultHistory", "submittedAt",
      "expiredAt", "filters", "sourceExamYear", "submittedAnswers"
    ];
    return hasOnlyFields(record, allowed)
      && record.id === key
      && /^exam-session:[a-zA-Z0-9-]+$/.test(record.id)
      && ["practice", "exam", "review"].includes(record.mode)
      && Array.isArray(record.questionRecordKeys)
      && Array.isArray(record.attemptIds)
      && validators.isPlainObject(record.draftResponsesByQuestionId)
      && (record.reviewMarksByQuestionId === undefined || validators.isPlainObject(record.reviewMarksByQuestionId))
      && validators.isIsoTimestamp(record.startedAt)
      && validators.isIsoTimestamp(record.updatedAt)
      && ["in-progress", "submitted", "expired", "abandoned", "unscored"].includes(record.status)
      && (record.durationSeconds === null || (validators.isPositiveInteger(record.durationSeconds)))
      && (record.mode !== "exam" || validators.isPositiveInteger(record.durationSeconds))
      && validators.isPositiveInteger(record.scoringContractVersion)
      && validators.isPositiveInteger(record.answerResolutionContractVersion)
      && (record.currentResult === null || validators.isPlainObject(record.currentResult))
      && Array.isArray(record.resultHistory)
      && Date.parse(record.updatedAt) >= Date.parse(record.startedAt)
      && Object.entries(record.draftResponsesByQuestionId).every(([questionId, draft]) => (
        validators.isPlainObject(draft)
        && draft.questionId === questionId
        && typeof draft.questionRecordKey === "string"
        && record.questionRecordKeys.includes(draft.questionRecordKey)
        && (
          (Array.isArray(draft.selectedOptionRecordKeys) && draft.selectedOptionRecordKeys.length <= 1)
          || typeof draft.selectedOptionKey === "string"
          || draft.selectedOptionKey === null
        )
        && validators.isIsoTimestamp(draft.updatedAt)
      ))
      && Object.entries(record.reviewMarksByQuestionId || {}).every(([questionId, mark]) => (
        validators.isPlainObject(mark)
        && mark.questionId === questionId
        && validators.isIsoTimestamp(mark.markedAt)
      ))
      && (record.submittedAnswers === undefined || validators.isPlainObject(record.submittedAnswers))
      && record.resultHistory.every(validateResult)
      && (record.currentResult === null || validateResult(record.currentResult));
  }

  function validateResult(result) {
    return validators.isPlainObject(result)
      && /^result:[a-zA-Z0-9-]+:[a-zA-Z0-9-]+$/.test(result.id)
      && ["calculated", "partial", "insufficient-data", "invalid-session"].includes(result.status)
      && ["correctCount", "wrongCount", "blankCount", "deletedCount", "unscoredCount", "validQuestionCount"]
        .every((field) => Number.isInteger(result[field]) && result[field] >= 0)
      && (result.scorePercent === null || Number.isFinite(result.scorePercent))
      && validators.isPositiveInteger(result.scoringContractVersion)
      && validators.isPositiveInteger(result.answerResolutionContractVersion)
      && Array.isArray(result.effectiveAnswerRecordKeys)
      && Array.isArray(result.effectiveCorrectionRecordKeys)
      && validators.isIsoTimestamp(result.calculatedAt);
  }

  function validateBookmark(record, key) {
    const types = [
      "subject", "topic", "lesson", "question", "flashcard", "golden-rule",
      "exam-trap", "five-minute-review", "crash-course", "cheat-sheet"
    ];
    return hasOnlyFields(record, ["id", "entityType", "entityId", "createdAt", "updatedAt", "note", "tags"])
      && record.id === key
      && types.includes(record.entityType)
      && validators.isStableId(record.entityId)
      && validators.isIsoTimestamp(record.createdAt)
      && validators.isIsoTimestamp(record.updatedAt)
      && (record.note === undefined || (typeof record.note === "string" && Array.from(record.note).length <= 2000))
      && (record.tags === undefined || (Array.isArray(record.tags) && record.tags.every((tag) => typeof tag === "string")));
  }

  function validateLessonProgress(record, key) {
    return hasOnlyFields(record, [
      "lessonId", "status", "firstOpenedAt", "lastOpenedAt", "updatedAt",
      "completedAt", "scrollProgressPercent", "reviewCount"
    ]) && record.lessonId === key
      && ["not-started", "in-progress", "completed"].includes(record.status)
      && isNullableTimestamp(record.firstOpenedAt)
      && isNullableTimestamp(record.lastOpenedAt)
      && validators.isIsoTimestamp(record.updatedAt)
      && isNullableTimestamp(record.completedAt)
      && (record.scrollProgressPercent === undefined
        || (Number.isFinite(record.scrollProgressPercent) && record.scrollProgressPercent >= 0 && record.scrollProgressPercent <= 100));
  }

  function validateTopicProgress(record, key) {
    return hasOnlyFields(record, [
      "topicId", "status", "completedLessonIds", "reviewedFlashcardIds",
      "questionPerformance", "updatedAt", "weaknessStatus", "strengthStatus", "lastRecommendedAt"
    ]) && record.topicId === key
      && ["not-started", "in-progress", "completed", "mastered"].includes(record.status)
      && Array.isArray(record.completedLessonIds)
      && Array.isArray(record.reviewedFlashcardIds)
      && validators.isPlainObject(record.questionPerformance)
      && validators.isIsoTimestamp(record.updatedAt);
  }

  function validateReviewItem(record, key) {
    const entityTypes = ["subject", "topic", "lesson", "question", "flashcard", "golden-rule", "exam-trap", "five-minute-review", "crash-course", "cheat-sheet"];
    return hasOnlyFields(record, [
      "id", "entityType", "entityId", "reason", "priority", "createdAt",
      "updatedAt", "status", "dueAt", "sourceAttemptIds", "completedAt"
    ]) && record.id === key
      && entityTypes.includes(record.entityType)
      && validators.isStableId(record.entityId)
      && ["wrong-question", "weak-topic", "bookmarked", "unfinished", "old-flashcard", "manual"].includes(record.reason)
      && ["critical", "high", "medium", "low"].includes(record.priority)
      && ["queued", "in-progress", "completed", "dismissed"].includes(record.status)
      && validators.isIsoTimestamp(record.createdAt)
      && validators.isIsoTimestamp(record.updatedAt);
  }

  function validateFlashcardState(record, key) {
    return hasOnlyFields(record, [
      "flashcardId", "reviewCount", "lastReviewedAt", "nextReviewAt", "updatedAt",
      "rating", "status", "intervalDays", "lapseCount"
    ]) && record.flashcardId === key
      && Number.isInteger(record.reviewCount)
      && record.reviewCount >= 0
      && isNullableTimestamp(record.lastReviewedAt)
      && isNullableTimestamp(record.nextReviewAt)
      && validators.isIsoTimestamp(record.updatedAt)
      && [null, "again", "hard", "good", "easy"].includes(record.rating)
      && ["new", "learning", "review", "mastered"].includes(record.status);
  }

  function validateSearchHistory(value) {
    const allowed = ["id", "query", "displayQuery", "searchedAt", "resultCount", "selectedEntityType", "selectedEntityId"];
    return Array.isArray(value) && value.length <= 50 && value.every((record) => (
      hasOnlyFields(record, allowed)
      && /^search:[a-zA-Z0-9-]+$/.test(record.id)
      && typeof record.query === "string"
      && record.query.trim().length > 0
      && typeof record.displayQuery === "string"
      && validators.isIsoTimestamp(record.searchedAt)
      && Number.isInteger(record.resultCount)
      && record.resultCount >= 0
    ));
  }

  function validateTranslation(record, key) {
    return hasOnlyFields(record, [
      "cacheKey", "entityId", "fieldPath", "sourceLocale", "targetLocale",
      "sourceContentHash", "translatedText", "provider", "createdAt", "updatedAt",
      "status", "expiresAt", "reviewedAt"
    ]) && record.cacheKey === key
      && validators.isStableId(record.entityId)
      && typeof record.translatedText === "string"
      && validators.isIsoTimestamp(record.createdAt)
      && validators.isIsoTimestamp(record.updatedAt)
      && ["unverified", "verified", "stale"].includes(record.status);
  }

  function validateStatistics(value) {
    if (!hasOnlyFields(value, ["currentSnapshot", "snapshotHistory"]) || !Array.isArray(value.snapshotHistory)
      || value.snapshotHistory.length > 20) return false;
    const validateSnapshot = (snapshot) => validators.isPlainObject(snapshot)
      && /^statistics:/.test(snapshot.id)
      && validators.isIsoTimestamp(snapshot.calculatedAt)
      && Number.isInteger(snapshot.calculationVersion)
      && validators.isPlainObject(snapshot.counts)
      && Array.isArray(snapshot.subjectSummaries)
      && Array.isArray(snapshot.weakTopicIds)
      && Array.isArray(snapshot.strongTopicIds)
      && validators.isPlainObject(snapshot.estimatedScore);
    return (value.currentSnapshot === null || validateSnapshot(value.currentSnapshot))
      && value.snapshotHistory.every(validateSnapshot);
  }

  function sectionValidators() {
    return {
      migration: (value) => hasOnlyFields(value, ["lastSuccessfulSchemaVersion", "migrationHistory", "recoveryEvents"])
        && Number.isInteger(value.lastSuccessfulSchemaVersion)
        && Array.isArray(value.migrationHistory)
        && Array.isArray(value.recoveryEvents),
      settings: validateSettings,
      progress: (value) => hasOnlyFields(value, ["lessonsById", "topicsById"])
        && validateMap(value.lessonsById, validateLessonProgress)
        && validateMap(value.topicsById, validateTopicProgress),
      attempts: (value) => validateMap(value, validateAttempt),
      examSessions: (value) => validateMap(value, validateSession),
      bookmarks: (value) => validateMap(value, validateBookmark),
      review: (value) => hasOnlyFields(value, ["queueById", "flashcardsById"])
        && validateMap(value.queueById, validateReviewItem)
        && validateMap(value.flashcardsById, validateFlashcardState),
      searchHistory: validateSearchHistory,
      statistics: validateStatistics,
      cache: (value) => hasOnlyFields(value, ["translationsByKey"])
        && validateMap(value.translationsByKey, validateTranslation)
    };
  }

  function sanitizeMap(value, validateRecord, path) {
    const sanitized = {};
    const invalidPaths = [];
    if (!validators.isPlainObject(value)) {
      return { value: sanitized, invalidPaths: [path] };
    }
    Object.entries(value).forEach(([key, record]) => {
      if (validators.isPlainObject(record) && validateRecord(record, key)) {
        sanitized[key] = JSON.parse(JSON.stringify(record));
      } else {
        invalidPaths.push(`${path}.${key}`);
      }
    });
    return { value: sanitized, invalidPaths };
  }

  function sanitizeSection(section, value, fallback) {
    if (section === "attempts") return sanitizeMap(value, validateAttempt, section);
    if (section === "examSessions") return sanitizeMap(value, validateSession, section);
    if (section === "bookmarks") return sanitizeMap(value, validateBookmark, section);
    if (section === "progress" && validators.isPlainObject(value)) {
      const lessons = sanitizeMap(value.lessonsById, validateLessonProgress, "progress.lessonsById");
      const topics = sanitizeMap(value.topicsById, validateTopicProgress, "progress.topicsById");
      return { value: { lessonsById: lessons.value, topicsById: topics.value }, invalidPaths: [...lessons.invalidPaths, ...topics.invalidPaths] };
    }
    if (section === "review" && validators.isPlainObject(value)) {
      const queue = sanitizeMap(value.queueById, validateReviewItem, "review.queueById");
      const cards = sanitizeMap(value.flashcardsById, validateFlashcardState, "review.flashcardsById");
      return { value: { queueById: queue.value, flashcardsById: cards.value }, invalidPaths: [...queue.invalidPaths, ...cards.invalidPaths] };
    }
    if (section === "searchHistory" && Array.isArray(value)) {
      const valid = value.filter((record) => validateSearchHistory([record])).slice(0, 50);
      return { value: valid, invalidPaths: valid.length === value.length ? [] : ["searchHistory"] };
    }
    if (section === "cache" && validators.isPlainObject(value)) {
      const translations = sanitizeMap(value.translationsByKey, validateTranslation, "cache.translationsByKey");
      return { value: { translationsByKey: translations.value }, invalidPaths: translations.invalidPaths };
    }
    const validate = sectionValidators()[section];
    return validate && validate(value)
      ? { value: JSON.parse(JSON.stringify(value)), invalidPaths: [] }
      : { value: JSON.parse(JSON.stringify(fallback)), invalidPaths: [section] };
  }

  function validateRoot(value) {
    const errors = [];
    if (!validators.isPlainObject(value)) {
      return { valid: false, errors: [{ section: "root", code: "invalid-root" }] };
    }

    Object.keys(value).filter((field) => !ROOT_FIELDS.includes(field)).forEach((field) => {
      errors.push({ section: "root", code: "unknown-field", field });
    });

    if (value.schemaVersion !== SCHEMA_VERSION) {
      errors.push({ section: "root", code: "unsupported-version", version: value.schemaVersion });
    }

    if (!validators.isIsoTimestamp(value.createdAt) || !validators.isIsoTimestamp(value.updatedAt)) {
      errors.push({ section: "root", code: "invalid-timestamp" });
    }

    const sections = sectionValidators();
    Object.entries(sections).forEach(([section, validate]) => {
      if (!validate(value[section])) {
        errors.push({ section, code: "invalid-section" });
      }
    });

    return { valid: errors.length === 0, errors };
  }

  app.register("storage", "schema", {
    SCHEMA_VERSION,
    ROOT_KEY,
    ROOT_FIELDS,
    createDefaults,
    validateRoot,
    sectionValidators,
    sanitizeSection
  });
})(window);
