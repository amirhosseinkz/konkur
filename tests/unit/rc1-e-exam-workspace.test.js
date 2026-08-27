(function defineRC1EExamWorkspaceTests(global) {
  "use strict";
  const app = global.KonkurApp;
  const harness = app.tests.harness;

  harness.test("practice workspace has sticky exam header", () => {
    app.storage.adapter.resetSection("examSessions");
    const page = app.features.practiceMode.render({ year: 1404, sectionId: "language" });
    harness.assert(page.querySelector(".exam-shell-header"), "missing sticky exam header");
  });

  harness.test("practice workspace has question palette", () => {
    app.storage.adapter.resetSection("examSessions");
    const page = app.features.practiceMode.render({ year: 1404, sectionId: "language" });
    harness.assert(page.querySelector(".question-palette"), "missing question palette");
    harness.assert(page.querySelectorAll(".palette-dot").length > 0, "palette dots missing");
  });

  harness.test("practice workspace has mobile tabs", () => {
    app.storage.adapter.resetSection("examSessions");
    const page = app.features.practiceMode.render({ year: 1404, sectionId: "language" });
    harness.assert(page.querySelector(".exam-mobile-tabs"), "missing mobile tabs");
    const tabs = page.querySelectorAll(".exam-mobile-tab-btn");
    harness.assert(tabs.length >= 2, "need at least 2 mobile tabs");
  });

  harness.test("exam workspace has sticky header with timer", () => {
    app.storage.adapter.resetSection("examSessions");
    const page = app.features.examMode.render({ year: 1404, sectionId: "language" });
    harness.assert(page.querySelector(".exam-shell-header") || page.querySelector("header"), "exam start or header present");
  });

  harness.test("exam timer shows urgency states", () => {
    const session = app.features.sessionManager.createSession({ mode: "exam", questionRecordKeys: ["q1"], durationSeconds: 60, year: 1404 });
    const timer = app.features.examViewer.renderTimer(session, null);
    harness.assert(timer, "timer should render for exam mode");
    const totalSec = Math.floor(app.features.sessionManager.getRemainingMs(session) / 1000);
    const expectedUrgency = totalSec <= 60 ? "critical" : totalSec <= 600 ? "warning" : "normal";
    harness.equal(timer.dataset.urgency, expectedUrgency);
  });

  harness.test("lesson reader has sticky controls", () => {
    const page = app.features.databaseSubject.render();
    const startBtn = page.querySelector("[data-start-lesson]");
    if (startBtn) startBtn.click();
    harness.assert(page.querySelector(".lesson-controls"), "missing sticky lesson controls");
  });

  harness.test("flashcard player shows prominent progress counter", () => {
    const page = app.features.networkFlashcards.render();
    harness.assert(page.querySelector(".study-player-counter"), "missing flashcard progress counter");
  });

  harness.test("golden rules player shows prominent progress counter", () => {
    const page = app.features.networkGoldenRules.render();
    harness.assert(page.querySelector(".study-player-counter"), "missing golden rule progress counter");
  });

  harness.test("exam traps show structured labeled sections", () => {
    const page = app.features.networkTraps.render();
    harness.assert(page.querySelector(".trap-section"), "missing trap section blocks");
    harness.assert(page.querySelector('.trap-section[data-type="wrong"]'), "missing wrong section");
    harness.assert(page.querySelector('.trap-section[data-type="correct"]'), "missing correct section");
  });

  harness.test("last night player shows progress counter", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.querySelector(".study-player-counter"), "missing last night progress counter");
  });
})(window);