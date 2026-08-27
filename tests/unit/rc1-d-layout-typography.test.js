(function defineRC1DLayoutTypographyTests(global) {
  "use strict";
  const app = global.KonkurApp;
  const harness = app.tests.harness;

  harness.test("dashboard has one dominant primary CTA", () => {
    const page = app.features.dashboard.render();
    const primaryButtons = page.querySelectorAll(".button-primary");
    harness.equal(primaryButtons.length, 1, "expected exactly 1 primary action");
  });

  harness.test("dashboard subject progress uses progress bars", () => {
    const page = app.features.dashboard.render();
    harness.assert(page.querySelector(".progress-bar-inline"), "missing progress bar");
    harness.assert(page.querySelector(".progress-bar-fill"), "missing progress fill");
  });

  harness.test("lesson reader shows progress count", () => {
    const page = app.features.databaseSubject.render();
    const startBtn = page.querySelector("[data-start-lesson]");
    harness.assert(startBtn, "missing crash course start button");
    startBtn.click();
    harness.assert(page.textContent.includes("درس 1 از"), "lesson reader missing progress count");
  });

  harness.test("lesson reader has sticky controls", () => {
    const page = app.features.networkSubject.render();
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
    harness.assert(page.querySelector('.trap-section[data-type="wrong"]'), "missing wrong-thinking section");
    harness.assert(page.querySelector('.trap-section[data-type="correct"]'), "missing correct-thinking section");
    harness.assert(page.querySelector('.trap-section[data-type="shortcut"]'), "missing shortcut section");
  });

  harness.test("last night player shows progress counter", () => {
    const page = app.features.lastNight.render();
    harness.assert(page.querySelector(".study-player-counter"), "missing last night progress counter");
  });

  harness.test("no nested button-style span inside action links", () => {
    const page = app.features.subjects.render();
    const pathCards = page.querySelectorAll(".action-card, .path-card");
    pathCards.forEach((card) => {
      const nestedButtons = card.querySelectorAll("span.button, span.button-primary");
      harness.equal(nestedButtons.length, 0, "action-card should not have nested button span");
    });
  });
})(window);