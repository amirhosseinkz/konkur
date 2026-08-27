(function registerBootstrap(global) {
  "use strict";

  const app = global.KonkurApp;
  let bootResult = null;

  function assertModules() {
    const required = [
      ["bootstrap", "environment"],
      ["validation", "validators"],
      ["validation", "examValidators"],
      ["validation", "sourceValidation"],
      ["content", "registry"],
      ["content", "sourceRegistry"],
      ["content", "sourceInventory"],
      ["content", "topicRegistry"],
      ["content", "topicRelations"],
      ["content", "networkSubject"],
      ["content", "networkCrashCourse"],
      ["content", "networkGoldenRules"],
      ["content", "networkExamTraps"],
      ["content", "networkFlashcards"],
      ["content", "networkFiveMinuteReview"],
      ["content", "databaseSubject"],
      ["content", "databaseTopicRegistry"],
      ["content", "databaseTopicRelations"],
      ["content", "databaseCrashCourse"],
      ["content", "databaseGoldenRules"],
      ["content", "databaseExamTraps"],
      ["content", "databaseFlashcards"],
      ["content", "databaseFiveMinuteReview"],
      ["content", "operatingSystemSubject"],
      ["content", "operatingSystemTopicRegistry"],
      ["content", "operatingSystemTopicRelations"],
      ["content", "operatingSystemCrashCourse"],
      ["content", "operatingSystemGoldenRules"],
      ["content", "operatingSystemExamTraps"],
      ["content", "operatingSystemFlashcards"],
      ["content", "operatingSystemFiveMinuteReview"],
      ["content", "dataStructuresSubject"],
      ["content", "dataStructuresTopicRegistry"],
      ["content", "dataStructuresTopicRelations"],
      ["content", "dataStructuresCrashCourse"],
      ["content", "dataStructuresGoldenRules"],
      ["content", "dataStructuresExamTraps"],
      ["content", "dataStructuresFlashcards"],
      ["content", "dataStructuresFiveMinuteReview"],
      ["content", "questionTopicLinks"],
      ["storage", "schema"],
      ["storage", "adapter"],
      ["state", "store"],
      ["search", "normalizer"],
      ["search", "index"],
      ["router", "routes"],
      ["router", "router"],
      ["ui", "dom"],
      ["ui", "components"],
      ["ui", "notifications"],
      ["ui", "shell"],
      ["features", "learning"],
      ["features", "dashboard"],
      ["features", "subjects"],
      ["features", "networkSubject"],
      ["features", "networkReview"],
      ["features", "networkGoldenRules"],
      ["features", "networkFlashcards"],
      ["features", "networkTraps"],
      ["features", "databaseSubject"],
      ["features", "databaseReview"],
      ["features", "databaseGoldenRules"],
      ["features", "databaseFlashcards"],
      ["features", "databaseTraps"],
      ["features", "operatingSystemSubject"],
      ["features", "operatingSystemReview"],
      ["features", "operatingSystemGoldenRules"],
      ["features", "operatingSystemFlashcards"],
      ["features", "operatingSystemTraps"],
      ["features", "dataStructuresSubject"],
      ["features", "dataStructuresReview"],
      ["features", "dataStructuresGoldenRules"],
      ["features", "dataStructuresFlashcards"],
      ["features", "dataStructuresTraps"],
      ["features", "lastNight"],
      ["features", "searchPage"],
      ["features", "flashcards"],
      ["features", "bookmarks"],
      ["features", "review"],
      ["features", "statistics"],
      ["features", "settings"],
      ["features", "sourceStatus"],
      ["features", "answerResolver"],
      ["features", "scoring"],
      ["features", "sessionManager"],
      ["features", "examService"],
      ["features", "examViewer"],
      ["features", "exams"],
      ["features", "practiceMode"],
      ["features", "examMode"],
      ["features", "examResults"]
    ];
    const missing = required.filter(([branch, name]) => !app[branch][name]);
    if (missing.length) {
      throw new Error(`Missing required modules: ${missing.map((entry) => entry.join(".")).join(", ")}`);
    }
  }

  function showFatal(error) {
    const message = error instanceof Error ? error.message : String(error);
    if (app.ui.shell && typeof app.ui.shell.renderFatal === "function") {
      app.ui.shell.renderFatal(message);
    } else {
      const fallback = document.getElementById("fatal-region") || document.body;
      fallback.textContent = `راه‌اندازی برنامه کامل نشد: ${message}`;
    }
  }

  function start() {
    if (bootResult) {
      return bootResult;
    }

    try {
      assertModules();
      const environment = app.bootstrap.environment.inspect();
      if (!environment.supported) {
        throw new Error(`مرورگر APIهای لازم را ندارد: ${environment.missing.join(", ")}`);
      }

      const storage = app.storage.adapter.initialize();
      app.state.store.initialize(storage);
      const motion = storage.state && storage.state.settings
        ? storage.state.settings.reducedMotion
        : "system";
      document.documentElement.dataset.motion = motion === "reduce" ? "reduce" : "system";
      const datasets = app.content.registry.validateAll();
      if (!datasets.valid) {
        throw new Error(`اعتبارسنجی مجموعه‌داده ناموفق بود (${datasets.issues.length} خطا).`);
      }

      app.search.index.rebuild(app.content.registry.getSearchDocuments());
      if (!app.ui.shell.initialize()) {
        throw new Error("ساختار اصلی رابط پیدا نشد.");
      }

      app.router.router.start();
      if (["unavailable", "read-only", "read-failed", "write-failed", "quota-error", "recovery-backup-failed"].includes(storage.status)) {
        app.ui.notifications.announce("ذخیره‌سازی مرورگر در دسترس نیست؛ تغییرات این نشست پایدار نمی‌ماند.", "warning");
      } else if (storage.status === "recovered") {
        app.ui.notifications.announce("بخش ناسالم ذخیره‌سازی بازیابی شد و نسخهٔ پشتیبان نگه داشته شد.", "warning");
      } else if (storage.status === "unsupported-future-version") {
        app.ui.notifications.announce("دادهٔ ذخیره‌شده متعلق به نسخه‌ای جدیدتر است و تغییر داده نشد.", "warning");
      }

      app.readiness = "ready";
      const finishedAt = global.performance && typeof global.performance.now === "function"
        ? global.performance.now()
        : Date.now();
      bootResult = Object.freeze({
        ready: true,
        environment,
        storageStatus: storage.status,
        datasetCount: datasets.datasetCount,
        durationMilliseconds: Math.max(0, finishedAt - app.startedAt)
      });
      return bootResult;
    } catch (error) {
      app.readiness = "failed";
      showFatal(error);
      bootResult = Object.freeze({ ready: false, error: error.message || String(error) });
      return bootResult;
    }
  }

  app.register("bootstrap", "application", { start, getResult: () => bootResult });
  start();
})(window);
