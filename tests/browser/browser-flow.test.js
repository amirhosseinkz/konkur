(function defineBrowserFlowTests(global) {
  "use strict";

  const app = global.KonkurApp;
  const harness = app.tests.harness;

  function nextFrame() {
    return new Promise((resolve) => global.setTimeout(resolve, 60));
  }

  function buttonByText(text) {
    return Array.from(document.querySelectorAll("button, a")).find((item) => item.textContent.includes(text));
  }

  async function navigate(path) {
    app.router.router.navigate(path);
    await nextFrame();
  }

  function selectCurrentOption(index) {
    const input = document.querySelectorAll(".exam-question-card input[type='radio']")[index];
    harness.assert(input, `missing option ${index}`);
    input.checked = true;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function pageText() {
    return (document.querySelector("#main-content")?.textContent || "NO-MAIN").slice(0, 300);
  }


  harness.test("actual bootstrap reaches ready state through file protocol", () => {
    harness.equal(global.location.protocol, "file:");
    harness.equal(app.readiness, "ready");
    harness.equal(app.bootstrap.application.getResult().ready, true);
  });

  harness.test("actual router renders known and unknown route states", async () => {
    app.router.router.navigate("/subjects");
    await nextFrame();
    harness.equal(document.querySelector("#main-content h1").textContent, "درس‌ها");
    app.router.router.navigate("/missing-route");
    await nextFrame();
    harness.equal(document.querySelector("#main-content h1").textContent, "مسیر پیدا نشد");
  });

  harness.test("route navigation moves focus to the page heading", async () => {
    app.router.router.navigate("/flashcards");
    await nextFrame();
    harness.equal(document.activeElement, document.querySelector("#main-content h1"));
  });

  harness.test("browser history restores the previous hash route", async () => {
    app.router.router.navigate("/subjects");
    await nextFrame();
    app.router.router.navigate("/settings");
    await nextFrame();
    const changed = new Promise((resolve) => global.addEventListener("hashchange", resolve, { once: true }));
    global.history.back();
    await changed;
    await nextFrame();
    harness.equal(app.state.store.getState().activeRoute, "/subjects");
  });

  harness.test("test fixture is isolated to the marked test environment", () => {
    harness.equal(document.documentElement.dataset.testEnvironment, "true");
    harness.equal(app.content.registry.getDatasets().some((dataset) => dataset.testOnly === true), true);
    harness.equal(app.content.registry.getDatasets().some((dataset) => dataset.testOnly === false), true);
    harness.equal(app.storage.schema.ROOT_KEY, "konkurExamCompanion");
  });

  harness.test("current viewport has no horizontal document overflow", () => {
    harness.assert(document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  });

  harness.test("English 1404 Practice opens workspace, persists answers, submits, and reviews in place", async () => {
    app.storage.adapter.resetSection("examSessions");
    await navigate("/exams/1404/practice/language");
    harness.assert(document.querySelector(".exam-workspace"), `workspace missing: ${pageText()}`);
    harness.equal(document.querySelectorAll(".palette-dot").length, 25);
    selectCurrentOption(0);
    await nextFrame();
    buttonByText("بعدی").click();
    await nextFrame();
    selectCurrentOption(1);
    await nextFrame();
    buttonByText("بعدی").click();
    await nextFrame();
    selectCurrentOption(2);
    await nextFrame();
    app.state.store.initialize(app.storage.adapter.snapshot());
    app.router.router.refresh();
    await nextFrame();
    harness.assert(document.querySelector(".palette-dot[data-state='answered']"), "answers were not restored");
    buttonByText("ثبت و مشاهده نتایج").click();
    await nextFrame();
    harness.assert(document.querySelector(".result-counts-grid"), "result counts missing");
    harness.assert(document.querySelector(".review-list"), "review list missing");
  });

  harness.test("custom Exam Mode hides answers before submit and locks after submission", async () => {
    app.storage.adapter.resetSection("examSessions");
    await navigate("/exams/1404/exam/custom?start=1&end=3");
    harness.assert(document.querySelector("#exam-duration"), "start confirmation missing");
    buttonByText("شروع آزمون").click();
    await nextFrame();
    harness.assert(document.querySelector(".exam-workspace"), `exam workspace missing: ${pageText()}`);
    harness.assert(!document.querySelector(".exam-feedback"), "official answers revealed before submit");
    selectCurrentOption(0);
    await nextFrame();
    buttonByText("بعدی").click();
    await nextFrame();
    selectCurrentOption(1);
    const originalConfirm = global.confirm;
    global.confirm = () => true;
    buttonByText("ثبت نهایی").click();
    global.confirm = originalConfirm;
    await nextFrame();
    harness.assert(document.querySelector(".result-counts-grid"), "exam score missing");
    harness.equal(document.querySelector(".exam-workspace").dataset.locked, "true");
  });

  harness.test("production deleted and multiple-answer scoring remain correct in browser workflow", () => {
    const context = app.features.examService.buildExamContext(1400, false, { start: 39, end: 92 });
    let session = app.features.sessionManager.createSession({ mode: "practice", questionRecordKeys: context.questions.map((question) => question.recordKey), year: 1400, filters: context.range });
    const q92 = context.questions.find((question) => question.questionNumber === 92);
    session = app.features.sessionManager.setAnswer(session, q92.id, q92.recordKey, "1").session;
    const result = app.features.scoring.calculateResult(session, context.questions, context.answers, context.corrections);
    harness.assert(result.deletedCount >= 1, "deleted question not excluded");
    harness.assert(result.perQuestion.find((item) => item.questionNumber === 92).acceptedOptionKeys.length > 1, "multiple accepted answers missing");
  });

  harness.test("Database Crash Course opens real lesson content and persists completion", async () => {
    await navigate("/subjects/database");
    const start = document.querySelector("[data-start-lesson]");
    harness.assert(start, "crash-course start missing");
    start.click();
    await nextFrame();
    harness.assert(document.querySelector(".lesson-reader .content-card"), "lesson content missing");
    buttonByText("تکمیل درس").click();
    await nextFrame();
    buttonByText("بعدی").click();
    await nextFrame();
    harness.assert(document.querySelector(".lesson-reader h2"), "next lesson missing");
    const completed = Object.values(app.storage.adapter.getState().progress.lessonsById || {}).some((item) => item.status === "completed");
    harness.assert(completed, "lesson completion did not persist");
  });

  harness.test("Last Night rapid review controls interact with rules and difficult flashcards", async () => {
    await navigate("/last-night");
    harness.assert(document.querySelector(".study-player"), "last night player missing");
    const before = document.querySelector(".study-player").textContent;
    buttonByText("بعدی").click();
    await nextFrame();
    harness.assert(document.querySelector(".study-player").textContent !== before, "last night next did not change item");
    buttonByText("مرور تصادفی").click();
    await nextFrame();
    harness.assert(document.querySelector(".study-player-card"), "random review missing");
  });

})(window);
