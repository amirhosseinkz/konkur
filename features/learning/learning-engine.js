(function registerLearningEngine(global) {
  "use strict";

  const app = global.KonkurApp;
  const SUBJECT_ORDER = Object.freeze(["subject:english", "subject:network", "subject:database", "subject:operating-system", "subject:data-structures"]);
  const REVIEW_PRIORITY = Object.freeze({ critical: 0, high: 1, medium: 2, low: 3 });
  const TYPE_LABELS = Object.freeze({
    subjects: "Subject", topics: "Topic", lessons: "Lesson", questions: "Question", flashcards: "Flashcard",
    "golden-rules": "Golden Rule", "exam-traps": "Exam Trap", "five-minute-reviews": "Five-Minute Review"
  });

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function now() { return new Date().toISOString(); }
  function localized(value) {
    if (typeof value === "string") return value;
    return value ? value[value.primaryLocale] || value.fa || value.en || "" : "";
  }
  function records(type) {
    return app.content.registry.getDatasets()
      .filter((dataset) => dataset.datasetType === type && !dataset.testOnly)
      .flatMap((dataset) => dataset.records);
  }
  function activeEntries() { return app.content.registry.getActiveRecords().filter((entry) => entry.datasetType !== "test-fixture"); }
  function entityMap() {
    const map = new Map();
    activeEntries().forEach((entry) => map.set(entry.record.id, { ...entry, title: titleFor(entry.record, entry.datasetType) }));
    return map;
  }
  function titleFor(record, type) {
    return localized(record.title || record.front || record.statement || record.trap || record.summary || record.id) || TYPE_LABELS[type] || record.id;
  }
  function subjectSlug(subjectId) { return subjectId ? subjectId.split(":").slice(1).join(":") : ""; }
  function subjectIdFor(record) {
    if (!record) return null;
    if (record.id && record.id.startsWith("subject:")) return record.id;
    return record.subjectId || (record.topicIds && record.topicIds[0] ? records("topics").find((topic) => topic.id === record.topicIds[0])?.subjectId : null) || null;
  }
  function routeFor(entry) {
    if (!entry) return "#/dashboard";
    const record = entry.record;
    const subjectId = subjectIdFor(record);
    const slug = subjectSlug(subjectId);
    if (entry.datasetType === "subjects") return `#/subjects/${record.slug}`;
    if (entry.datasetType === "questions") return `#/exams/${record.year}/practice?start=${record.questionNumber}&end=${record.questionNumber}`;
    if (entry.datasetType === "flashcards") return slug ? `#/subjects/${slug}/flashcards` : "#/flashcards";
    if (entry.datasetType === "golden-rules") return slug ? `#/subjects/${slug}/golden-rules` : "#/subjects";
    if (entry.datasetType === "exam-traps") return slug ? `#/subjects/${slug}/traps` : "#/review";
    if (entry.datasetType === "five-minute-reviews") return slug ? `#/subjects/${slug}/review` : "#/review";
    return slug ? `#/subjects/${slug}` : "#/subjects";
  }
  function entityTypeFromDataset(type) {
    return ({ subjects: "subject", topics: "topic", lessons: "lesson", questions: "question", flashcards: "flashcard", "golden-rules": "golden-rule", "exam-traps": "exam-trap", "five-minute-reviews": "five-minute-review" })[type] || type;
  }
  function datasetTypeFromEntity(type) {
    return ({ subject: "subjects", topic: "topics", lesson: "lessons", question: "questions", flashcard: "flashcards", "golden-rule": "golden-rules", "exam-trap": "exam-traps", "five-minute-review": "five-minute-reviews" })[type] || type;
  }
  function defaultLearning() {
    return { recentViewed: [], lastOpenedByType: {}, lastNightExpanded: {}, session: null, completedReviewIds: [], removedReviewIds: [] };
  }
  function statisticsShell(state) {
    const timestamp = now();
    const current = state.statistics.currentSnapshot || {
      id: "statistics:learning-engine",
      calculatedAt: timestamp,
      calculationVersion: 1,
      counts: {},
      subjectSummaries: [],
      weakTopicIds: [],
      strongTopicIds: [],
      estimatedScore: { status: "not-calculated" }
    };
    current.counts = current.counts || {};
    current.counts.learning = { ...defaultLearning(), ...(current.counts.learning || {}) };
    current.calculatedAt = timestamp;
    return current;
  }
  function updateLearning(mutator) {
    const state = app.storage.adapter.getState();
    const statistics = clone(state.statistics);
    const snapshot = statisticsShell({ statistics });
    const learning = clone(snapshot.counts.learning);
    mutator(learning, state);
    snapshot.counts.learning = learning;
    statistics.currentSnapshot = snapshot;
    statistics.snapshotHistory = (statistics.snapshotHistory || []).filter((item) => item.id !== snapshot.id).slice(0, 19);
    return app.storage.adapter.updateSection("statistics", statistics);
  }
  function getLearning() {
    return statisticsShell(app.storage.adapter.getState()).counts.learning;
  }
  function recordView(entityType, entityId, title, route) {
    return updateLearning((learning) => {
      const timestamp = now();
      const item = { id: `${entityType}:${entityId}`, entityType, entityId, title: title || entityId, route: route || "#/dashboard", viewedAt: timestamp };
      learning.recentViewed = [item, ...(learning.recentViewed || []).filter((entry) => entry.id !== item.id)].slice(0, 50);
      learning.lastOpenedByType = { ...(learning.lastOpenedByType || {}), [entityType]: item };
      const session = learning.session || { startedAt: timestamp, updatedAt: timestamp, visitedRoutes: [], completedLessonIds: [], reviewedFlashcardIds: [] };
      session.updatedAt = timestamp;
      session.visitedRoutes = [route || item.route, ...(session.visitedRoutes || []).filter((value) => value !== (route || item.route))].slice(0, 50);
      learning.session = session;
    });
  }
  function markLessonViewed(lessonId) {
    const state = app.storage.adapter.getState();
    const progress = clone(state.progress);
    const timestamp = now();
    const current = progress.lessonsById[lessonId] || { lessonId, status: "not-started", firstOpenedAt: timestamp, lastOpenedAt: null, updatedAt: timestamp, completedAt: null, scrollProgressPercent: 0, reviewCount: 0 };
    current.status = current.status === "completed" ? "completed" : "in-progress";
    current.firstOpenedAt = current.firstOpenedAt || timestamp;
    current.lastOpenedAt = timestamp;
    current.updatedAt = timestamp;
    current.reviewCount = Number.isInteger(current.reviewCount) ? current.reviewCount + 1 : 1;
    progress.lessonsById[lessonId] = current;
    return app.storage.adapter.updateSection("progress", progress);
  }
  function completeLesson(lessonId) {
    markLessonViewed(lessonId);
    const state = app.storage.adapter.getState();
    const progress = clone(state.progress);
    const timestamp = now();
    const current = progress.lessonsById[lessonId];
    current.status = "completed";
    current.completedAt = timestamp;
    current.updatedAt = timestamp;
    current.scrollProgressPercent = 100;
    const lesson = records("lessons").find((item) => item.id === lessonId);
    if (lesson) {
      const topic = progress.topicsById[lesson.topicId] || { topicId: lesson.topicId, status: "not-started", completedLessonIds: [], reviewedFlashcardIds: [], questionPerformance: {}, updatedAt: timestamp, weaknessStatus: "unknown", strengthStatus: "unknown", lastRecommendedAt: null };
      topic.completedLessonIds = Array.from(new Set([...(topic.completedLessonIds || []), lessonId]));
      topic.status = "completed";
      topic.updatedAt = timestamp;
      progress.topicsById[lesson.topicId] = topic;
    }
    const result = app.storage.adapter.updateSection("progress", progress);
    updateLearning((learning) => {
      const session = learning.session || { startedAt: timestamp, updatedAt: timestamp, visitedRoutes: [], completedLessonIds: [], reviewedFlashcardIds: [] };
      session.completedLessonIds = Array.from(new Set([...(session.completedLessonIds || []), lessonId]));
      session.updatedAt = timestamp;
      learning.session = session;
    });
    return result;
  }
  function reviewFlashcard(flashcardId, rating) {
    const state = app.storage.adapter.getState();
    const review = clone(state.review);
    const timestamp = now();
    const current = review.flashcardsById[flashcardId] || { flashcardId, reviewCount: 0, lastReviewedAt: null, nextReviewAt: null, updatedAt: timestamp, rating: null, status: "new", intervalDays: 0, lapseCount: 0 };
    current.reviewCount += 1;
    current.lastReviewedAt = timestamp;
    current.updatedAt = timestamp;
    current.rating = rating || current.rating || "good";
    current.status = current.rating === "easy" ? "mastered" : "review";
    review.flashcardsById[flashcardId] = current;
    const result = app.storage.adapter.updateSection("review", review);
    updateLearning((learning) => {
      const session = learning.session || { startedAt: timestamp, updatedAt: timestamp, visitedRoutes: [], completedLessonIds: [], reviewedFlashcardIds: [] };
      session.reviewedFlashcardIds = Array.from(new Set([...(session.reviewedFlashcardIds || []), flashcardId]));
      session.updatedAt = timestamp;
      learning.session = session;
    });
    return result;
  }
  function setDifficult(flashcardId, difficult) {
    const state = app.storage.adapter.getState();
    const review = clone(state.review);
    const timestamp = now();
    const current = review.flashcardsById[flashcardId] || { flashcardId, reviewCount: 0, lastReviewedAt: null, nextReviewAt: null, updatedAt: timestamp, rating: null, status: "new", intervalDays: 0, lapseCount: 0 };
    current.rating = difficult ? "hard" : null;
    current.status = current.reviewCount > 0 ? "review" : "new";
    current.updatedAt = timestamp;
    review.flashcardsById[flashcardId] = current;
    return app.storage.adapter.updateSection("review", review);
  }
  function bookmark(entityType, entityId) {
    const state = app.storage.adapter.getState();
    const bookmarks = clone(state.bookmarks);
    const timestamp = now();
    const id = `bookmark:${entityType}:${entityId}`;
    bookmarks[id] = { id, entityType, entityId, createdAt: bookmarks[id]?.createdAt || timestamp, updatedAt: timestamp, tags: [entityId.split(":")[1] || entityType] };
    return app.storage.adapter.updateSection("bookmarks", bookmarks);
  }
  function removeBookmark(bookmarkId) {
    const state = app.storage.adapter.getState();
    const bookmarks = clone(state.bookmarks);
    delete bookmarks[bookmarkId];
    return app.storage.adapter.updateSection("bookmarks", bookmarks);
  }
  function queueItem(entityType, entityId, reason, priority) {
    const timestamp = now();
    return { id: `review:${entityType}:${entityId}`.replace(/[^a-zA-Z0-9:.-]/g, "-"), entityType, entityId, reason, priority, createdAt: timestamp, updatedAt: timestamp, status: "queued", dueAt: timestamp, sourceAttemptIds: [], completedAt: null };
  }
  function rebuildReviewQueue() {
    const state = app.storage.adapter.getState();
    const review = clone(state.review);
    const learning = getLearning();
    const removed = new Set(learning.removedReviewIds || []);
    const completed = new Set(learning.completedReviewIds || []);
    Object.values(review.flashcardsById).filter((card) => card.rating === "hard").forEach((card) => {
      const item = queueItem("flashcard", card.flashcardId, "manual", "critical");
      if (!removed.has(item.id) && !completed.has(item.id)) review.queueById[item.id] = { ...item, ...(review.queueById[item.id] || {}), priority: "critical", status: review.queueById[item.id]?.status || "queued" };
    });
    Object.values(state.bookmarks).forEach((bookmarkRecord) => {
      const priority = bookmarkRecord.entityType === "lesson" ? "high" : bookmarkRecord.entityType === "flashcard" ? "medium" : "low";
      const item = queueItem(bookmarkRecord.entityType, bookmarkRecord.entityId, "bookmarked", priority);
      if (!removed.has(item.id) && !completed.has(item.id)) review.queueById[item.id] = { ...item, ...(review.queueById[item.id] || {}), priority, status: review.queueById[item.id]?.status || "queued" };
    });
    (learning.recentViewed || []).slice(0, 10).forEach((recent) => {
      const item = queueItem(recent.entityType, recent.entityId, "manual", "low");
      if (!removed.has(item.id) && !completed.has(item.id)) review.queueById[item.id] = { ...item, ...(review.queueById[item.id] || {}), priority: "low", status: review.queueById[item.id]?.status || "queued" };
    });
    return app.storage.adapter.updateSection("review", review);
  }
  function reviewQueue() {
    rebuildReviewQueue();
    const map = entityMap();
    return Object.values(app.storage.adapter.getState().review.queueById)
      .filter((item) => item.status === "queued" || item.status === "in-progress")
      .filter((item) => map.has(item.entityId))
      .sort((left, right) => REVIEW_PRIORITY[left.priority] - REVIEW_PRIORITY[right.priority] || Date.parse(left.createdAt) - Date.parse(right.createdAt))
      .map((item) => ({ ...item, entity: map.get(item.entityId), title: map.get(item.entityId).title, route: routeFor(map.get(item.entityId)) }));
  }
  function updateQueueItem(reviewId, status) {
    const state = app.storage.adapter.getState();
    const review = clone(state.review);
    if (!review.queueById[reviewId]) return { ok: false, status: "missing-review-item" };
    review.queueById[reviewId].status = status;
    review.queueById[reviewId].updatedAt = now();
    review.queueById[reviewId].completedAt = status === "completed" ? now() : null;
    return app.storage.adapter.updateSection("review", review);
  }
  function removeQueueItem(reviewId) {
    const state = app.storage.adapter.getState();
    const review = clone(state.review);
    delete review.queueById[reviewId];
    const result = app.storage.adapter.updateSection("review", review);
    updateLearning((learning) => { learning.removedReviewIds = Array.from(new Set([...(learning.removedReviewIds || []), reviewId])); });
    return result;
  }
  function randomItems(type, filters) {
    const settings = filters || {};
    const state = app.storage.adapter.getState();
    const map = entityMap();
    let pool = activeEntries().filter((entry) => entry.datasetType === type);
    if (settings.subjectId) pool = pool.filter((entry) => subjectIdFor(entry.record) === settings.subjectId);
    if (settings.difficulty) pool = pool.filter((entry) => entry.record.difficulty === settings.difficulty);
    if (settings.bookmarked) {
      const bookmarked = new Set(Object.values(state.bookmarks).map((item) => item.entityId));
      pool = pool.filter((entry) => bookmarked.has(entry.record.id));
    }
    if (settings.notCompleted && type === "lessons") pool = pool.filter((entry) => state.progress.lessonsById[entry.record.id]?.status !== "completed");
    if (settings.recentlyViewed) {
      const recent = new Set((getLearning().recentViewed || []).map((item) => item.entityId));
      pool = pool.filter((entry) => recent.has(entry.record.id));
    }
    return pool.sort(() => Math.random() - 0.5).slice(0, settings.limit || 12).map((entry) => ({ ...entry, title: map.get(entry.record.id)?.title || titleFor(entry.record, entry.datasetType), route: routeFor(entry) }));
  }
  function subjectProgress(subjectId) {
    const state = app.storage.adapter.getState();
    const subject = records("subjects").find((item) => item.id === subjectId);
    const topics = records("topics").filter((item) => item.subjectId === subjectId);
    const lessons = records("lessons").filter((item) => item.subjectId === subjectId);
    const cards = records("flashcards").filter((item) => item.subjectId === subjectId);
    const bookmarkCount = Object.values(state.bookmarks).filter((item) => subjectIdFor(entityMap().get(item.entityId)?.record) === subjectId || item.entityId === subjectId).length;
    const completedLessons = lessons.filter((lesson) => state.progress.lessonsById[lesson.id]?.status === "completed").length;
    const reviewedCards = cards.filter((card) => state.review.flashcardsById[card.id]?.reviewCount > 0).length;
    const completedTopics = topics.filter((topic) => state.progress.topicsById[topic.id]?.status === "completed" || state.progress.topicsById[topic.id]?.status === "mastered").length;
    const progressPercent = lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0;
    const last = (getLearning().recentViewed || []).find((item) => subjectIdFor(entityMap().get(item.entityId)?.record) === subjectId || item.entityId === subjectId);
    return { subject, topics: topics.length, lessons: lessons.length, flashcards: cards.length, completedTopics, completedLessons, reviewedCards, bookmarkCount, progressPercent, lastOpened: last ? last.viewedAt : null };
  }
  function statistics() {
    const state = app.storage.adapter.getState();
    return {
      lessonsCompleted: Object.values(state.progress.lessonsById).filter((item) => item.status === "completed").length,
      flashcardsReviewed: Object.values(state.review.flashcardsById).filter((item) => item.reviewCount > 0).length,
      bookmarks: Object.keys(state.bookmarks).length,
      reviewQueueSize: reviewQueue().length,
      recentlyViewed: (getLearning().recentViewed || []).length,
      session: getLearning().session
    };
  }
  function validateUserStateReferences() {
    const state = app.storage.adapter.getState();
    const ids = new Set(activeEntries().map((entry) => entry.record.id));
    const issues = [];
    Object.values(state.bookmarks).forEach((item) => { if (!ids.has(item.entityId)) issues.push(`bookmark:${item.entityId}`); });
    Object.values(state.review.queueById).forEach((item) => { if (!ids.has(item.entityId)) issues.push(`review:${item.entityId}`); });
    Object.keys(state.progress.lessonsById).forEach((id) => { if (!ids.has(id)) issues.push(`lesson-progress:${id}`); });
    Object.keys(state.progress.topicsById).forEach((id) => { if (!ids.has(id)) issues.push(`topic-progress:${id}`); });
    Object.keys(state.review.flashcardsById).forEach((id) => { if (!ids.has(id)) issues.push(`flashcard-progress:${id}`); });
    return { valid: issues.length === 0, issues };
  }
  function clearHistory() { return updateLearning((learning) => { learning.recentViewed = []; learning.lastOpenedByType = {}; }); }
  function resetReviewQueue() { return app.storage.adapter.updateSection("review", { ...app.storage.adapter.getState().review, queueById: {} }); }

  app.register("features", "learning", {
    SUBJECT_ORDER,
    records,
    localized,
    titleFor,
    routeFor,
    entityMap,
    entityTypeFromDataset,
    datasetTypeFromEntity,
    recordView,
    markLessonViewed,
    completeLesson,
    reviewFlashcard,
    setDifficult,
    bookmark,
    removeBookmark,
    getLearning,
    clearHistory,
    reviewQueue,
    updateQueueItem,
    removeQueueItem,
    resetReviewQueue,
    randomItems,
    subjectProgress,
    statistics,
    validateUserStateReferences,
    rebuildReviewQueue
  });
})(window);
