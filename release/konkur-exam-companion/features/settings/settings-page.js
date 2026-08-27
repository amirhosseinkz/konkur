(function registerSettingsPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function downloadContent(content, filename) {
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    global.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function downloadState() {
    const result = app.storage.adapter.exportState();
    if (!result.ok) {
      app.ui.notifications.announce("خروجی برای این نسخهٔ ذخیره‌شده مجاز نیست.", "warning");
      return;
    }
    downloadContent(result.content, "konkur-user-state.json");
    app.ui.notifications.announce("اطلاعات با موفقیت صادر شد.", "info");
  }

  function downloadRecoveryBackup() {
    const result = app.storage.adapter.exportRecoveryBackup();
    if (result.ok) {
      downloadContent(result.content, "konkur-recovery-backup.txt");
      app.ui.notifications.announce("دادهٔ بازیابی‌شده برای بررسی صادر شد.", "warning");
    }
  }

  function downloadUnsupportedBackup() {
    const result = app.storage.adapter.exportUnsupportedState();
    if (result.ok) {
      downloadContent(result.content, "konkur-unsupported-version-backup.json");
      app.ui.notifications.announce("دادهٔ نسخهٔ جدیدتر صادر شد.", "warning");
    }
  }

  function importState(file, mode) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const inspection = app.storage.adapter.inspectImport(String(reader.result));
      if (!inspection.ok) {
        app.ui.notifications.announce("فایل واردشده معتبر نیست.", "error");
        document.getElementById("state-import").value = "";
        return;
      }
      const summary = inspection.summary;
      const actionLabel = mode === "merge" ? "ادغام" : "جایگزینی";
      if (!global.confirm(`${actionLabel} اطلاعات با ${summary.attempts} تلاش، ${summary.sessions} نشست و ${summary.bookmarks} نشان؟`)) {
        document.getElementById("state-import").value = "";
        return;
      }
      const result = app.storage.adapter.importState(String(reader.result), mode);
      if (result.ok) {
        app.state.store.initialize(app.storage.adapter.snapshot());
        app.ui.notifications.announce("اطلاعات با موفقیت وارد شد.", "info");
        app.router.router.refresh();
      } else {
        app.ui.notifications.announce("عملیات ناموفق بود.", "error");
      }
      document.getElementById("state-import").value = "";
    });
    reader.addEventListener("error", () => {
      app.ui.notifications.announce("خواندن فایل ممکن نبود.", "error");
      document.getElementById("state-import").value = "";
    });
    reader.readAsText(file);
  }

  function resetState() {
    if (!global.confirm("همهٔ اطلاعات کاربر پاک شود؟ این عمل قابل بازگشت نیست.")) {
      return;
    }
    const result = app.storage.adapter.resetAll();
    if (result.ok) {
      app.state.store.initialize(app.storage.adapter.snapshot());
      app.ui.notifications.announce("اطلاعات کاربر پاک شد.", "info");
      app.router.router.refresh();
    } else {
      app.ui.notifications.announce("عملیات ناموفق بود.", "error");
    }
  }

  function resetSection(section, label) {
    if (!global.confirm(`${label} پاک شود؟`)) return;
    const result = app.storage.adapter.resetSection(section);
    if (result.ok) {
      app.state.store.initialize(app.storage.adapter.snapshot());
      app.ui.notifications.announce(`${label} پاک شد.`, "info");
      app.router.router.refresh();
    } else {
      app.ui.notifications.announce(`پاک‌سازی ${label} ممکن نبود.`, "error");
    }
  }

  function resetReviewQueue() {
    if (!global.confirm("صف مرور پاک شود؟")) return;
    const result = app.features.learning.resetReviewQueue();
    app.ui.notifications.announce(result.ok ? "صف مرور پاک شد." : "پاک‌سازی صف مرور ممکن نبود.", result.ok ? "info" : "error");
    if (result.ok) app.router.router.refresh();
  }

  function resetHistory() {
    if (!global.confirm("تاریخچه پاک شود؟")) return;
    const result = app.features.learning.clearHistory();
    app.ui.notifications.announce(result.ok ? "تاریخچه پاک شد." : "پاک‌سازی تاریخچه ممکن نبود.", result.ok ? "info" : "error");
    if (result.ok) app.router.router.refresh();
  }

  function render() {
    const state = app.state.store.getState();
    const storageSnapshot = app.storage.adapter.snapshot();
    const fileInput = dom.createElement("input", {
      className: "sr-only",
      attributes: {
        type: "file",
        accept: "application/json",
        id: "state-import",
        tabindex: "-1",
        "aria-label": "انتخاب فایل نسخهٔ پشتیبان"
      }
    });
    const importMode = dom.createElement("select", {
      className: "select-input",
      attributes: { id: "import-mode", "aria-label": "روش ورود نسخهٔ پشتیبان" }
    }, [
      dom.createElement("option", { text: "ادغام امن", attributes: { value: "merge" } }),
      dom.createElement("option", { text: "جایگزینی کامل", attributes: { value: "replace" } })
    ]);
    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files[0]) {
        importState(fileInput.files[0], importMode.value);
      }
    });

    const reducedMotion = dom.createElement("select", {
      className: "select-input",
      attributes: { id: "reduced-motion", "aria-describedby": "reduced-motion-help" }
    }, [
      dom.createElement("option", { text: "مطابق سیستم", attributes: { value: "system" } }),
      dom.createElement("option", { text: "کاهش حرکت", attributes: { value: "reduce" } })
    ]);
    reducedMotion.value = state.userSettings && state.userSettings.reducedMotion === "reduce" ? "reduce" : "system";
    reducedMotion.addEventListener("change", () => {
      const result = app.state.store.updateSettings({ reducedMotion: reducedMotion.value });
      if (result.ok) {
        document.documentElement.dataset.motion = reducedMotion.value === "reduce" ? "reduce" : "system";
      }
      app.ui.notifications.announce(
        result.ok ? "ترجیح حرکت ذخیره شد." : "ذخیرهٔ ترجیح حرکت ممکن نبود.",
        result.ok ? "info" : "error"
      );
    });

    const importButton = dom.createElement("button", {
      className: "button",
      text: "واردکردن پشتیبان",
      attributes: { type: "button" }
    });
    importButton.addEventListener("click", () => fileInput.click());

    const exportButton = dom.createElement("button", {
      className: "button",
      text: "خروجی گرفتن",
      attributes: { type: "button" }
    });
    exportButton.addEventListener("click", downloadState);

    const recoveryButton = dom.createElement("button", {
      className: "button button-danger",
      text: "خروجی دادهٔ بازیابی‌شده",
      attributes: { type: "button" }
    });
    recoveryButton.addEventListener("click", downloadRecoveryBackup);

    const unsupportedButton = dom.createElement("button", {
      className: "button",
      text: "خروجی نسخهٔ جدیدتر",
      attributes: { type: "button" }
    });
    unsupportedButton.addEventListener("click", downloadUnsupportedBackup);

    const resetButton = dom.createElement("button", {
      className: "button button-danger",
      text: "پاک‌کردن کل اطلاعات",
      attributes: { type: "button" }
    });
    resetButton.addEventListener("click", resetState);

    const resetProgressButton = dom.createElement("button", { className: "button button-danger", text: "پاک کردن پیشرفت", attributes: { type: "button" } });
    resetProgressButton.addEventListener("click", () => resetSection("progress", "پیشرفت"));
    const resetBookmarksButton = dom.createElement("button", { className: "button button-danger", text: "پاک کردن نشان‌شده‌ها", attributes: { type: "button" } });
    resetBookmarksButton.addEventListener("click", () => resetSection("bookmarks", "نشان‌شده‌ها"));
    const resetReviewButton = dom.createElement("button", { className: "button button-danger", text: "پاک کردن صف مرور", attributes: { type: "button" } });
    resetReviewButton.addEventListener("click", resetReviewQueue);
    const resetHistoryButton = dom.createElement("button", { className: "button button-danger", text: "پاک کردن تاریخچه", attributes: { type: "button" } });
    resetHistoryButton.addEventListener("click", resetHistory);

    return dom.createElement("article", {}, [
      components.createPageHeader("تنظیمات", "فقط تنظیماتی که اکنون کار می‌کنند در این صفحه نمایش داده شده‌اند.", "کنترل محلی"),
      dom.createElement("div", { className: "settings-grid" }, [
        dom.createElement("section", { className: "panel" }, [
          dom.createElement("h2", { text: "وضعیت ذخیره‌سازی" }),
          dom.createElement("span", {
            className: "storage-badge",
            text: state.storageStatus === "ready" ? "آماده و پایدار" : state.storageStatus,
            dataset: { status: state.storageStatus }
          })
        ]),
        dom.createElement("section", { className: "panel setting-row" }, [
          dom.createElement("div", { className: "setting-copy" }, [
            dom.createElement("label", { text: "حرکت رابط", attributes: { for: "reduced-motion" } }),
            dom.createElement("p", { text: "ترجیح کاهش حرکت در همین مرورگر نگهداری می‌شود.", attributes: { id: "reduced-motion-help" } })
          ]),
          reducedMotion
        ]),
        dom.createElement("section", { className: "panel" }, [
          dom.createElement("h2", { text: "پشتیبان‌گیری" }),
          dom.createElement("p", { text: "فقط تنظیمات و فعالیت محلی صادر می‌شود؛ محتوای آموزشی داخل فایل قرار نمی‌گیرد." }),
          fileInput,
          dom.createElement("div", { className: "settings-actions" }, [
            state.storageStatus === "unsupported-future-version" ? unsupportedButton : exportButton,
            importMode,
            importButton,
            storageSnapshot.recovery ? recoveryButton : null
          ])
        ]),
        dom.createElement("section", { className: "panel" }, [
          dom.createElement("h2", { text: "منطقه خطر" }),
          dom.createElement("p", { text: "این کارها فقط وضعیت کاربر را پاک می‌کنند و به محتوای آموزشی دست نمی‌زنند." }),
          dom.createElement("div", { className: "settings-actions" }, [resetProgressButton, resetBookmarksButton, resetReviewButton, resetHistoryButton, resetButton])
        ])
      ])
    ]);
  }

  app.register("features", "settings", { render });
})(window);