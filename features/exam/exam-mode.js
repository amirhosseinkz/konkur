(function registerExamMode(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;
  const viewer = app.features.examViewer;

  function render(params) {
    const year = params.year;
    const examService = app.features.examService;
    const testOnly = examService.getImportedYears().includes(year) ? false : true;
    const selection = examService.rangeFromRoute(params, global.location.hash);
    if (!selection.ok) return renderRouteError(year, selection.error);
    const selectedRange = selection.range;
    const examContext = examService.buildExamContext(year, testOnly, selectedRange);
    const sessionManager = app.features.sessionManager;

    if (examContext.questions.length === 0) {
      return dom.createElement("article", {}, [
        components.createPageHeader(`آزمون ${year}`, "هیچ سؤالی برای این سال وارد نشده است.", "حالت آزمون"),
        components.createEmptyState("سؤالی موجود نیست", "ابتدا باید منابع این سال وارد شوند.", [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }])
      ]);
    }

    let session = params.sessionId ? sessionManager.loadSession(params.sessionId) : sessionManager.getLatestSession(year, "exam");
    const currentKeys = examContext.questions.map((q) => q.recordKey);
    if (session && session.status === "in-progress" && JSON.stringify(session.questionRecordKeys) === JSON.stringify(currentKeys)) {
      return renderExamInProgress(session, examContext, year, selection, sessionManager);
    }
    if (session && session.status === "submitted" && JSON.stringify(session.questionRecordKeys) === JSON.stringify(currentKeys) && session.currentResult) {
      return renderSubmittedWorkspace(year, selection, session);
    }
    return renderStartConfirmation(year, examContext, selection, sessionManager);
  }

  function renderStartConfirmation(year, examContext, selection, sessionManager) {
    const unansweredCount = examContext.questions.length;
    const startBtn = dom.createElement("button", { className: "button button-primary", text: "شروع آزمون", attributes: { type: "button" } });
    const cancelLink = dom.createElement("a", { className: "button", text: "بازگشت", attributes: { href: "#/exams" } });
    const durationSelect = dom.createElement("select", { className: "select-input", attributes: { id: "exam-duration", "aria-label": "مدت آزمون" } }, [
      dom.createElement("option", { text: "۹۰ دقیقه", attributes: { value: String(90 * 60) } }),
      dom.createElement("option", { text: "۶۰ دقیقه", attributes: { value: String(60 * 60) } }),
      dom.createElement("option", { text: "۱۲۰ دقیقه", attributes: { value: String(120 * 60) } })
    ]);
    startBtn.addEventListener("click", () => {
      const durationSeconds = parseInt(durationSelect.value, 10);
      const session = sessionManager.createSession({ mode: "exam", questionRecordKeys: examContext.questions.map((q) => q.recordKey), durationSeconds, year, filters: examContext.range });
      sessionManager.persistSession(session);
      app.router.router.refresh();
    });
    return dom.createElement("article", {}, [
      components.createPageHeader(`آزمون ${year}`, `${selection.label} · ${unansweredCount} سؤال — نمره منفی فعال`, "شروع آزمون"),
      dom.createElement("div", { className: "panel" }, [
        dom.createElement("p", { text: "زمان شبیه‌سازی آزمون" }),
        dom.createElement("p", { text: "پس از ثبت، امکان تغییر پاسخ نیست. نمره منفی برای پاسخ‌های اشتباه اعمال می‌شود." }),
        dom.createElement("div", { className: "setting-row" }, [
          dom.createElement("label", { text: "مدت زمان", attributes: { for: "exam-duration" } }),
          durationSelect
        ]),
        dom.createElement("div", { className: "empty-actions" }, [startBtn, cancelLink])
      ])
    ]);
  }

  function renderExamInProgress(session, examContext, year, selection, sessionManager) {
    const container = dom.createElement("article", { className: "exam-workspace" });
    let currentIndex = 0;
    let timerInterval = null;

    function rerender() {
      const currentQ = examContext.questions[currentIndex];
      const options = examContext.options.filter((o) => o.questionId === currentQ.id);
      const draft = session.draftResponsesByQuestionId[currentQ.id];
      const selectedKey = draft ? draft.selectedOptionKey : null;

      if (sessionManager.isExpired(session)) {
        const expired = sessionManager.expireSession(session);
        if (expired.ok) {
          session = expired.session;
          sessionManager.persistSession(session);
          const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
          if (submitted.ok) {
            session = submitted.session;
            const resultData = app.features.examService.calculateAndPersistResult(session, examContext);
            session = resultData.session;
            container.dataset.locked = "true";
            container.replaceChildren(renderSubmittedWorkspace(year, selection, session));
            return;
          }
        }
      }

      const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
      const unanswered = examContext.questions.length - answeredCount;
      const bookmarks = new Set(Object.values(app.storage.adapter.getState().bookmarks).map((item) => item.entityId));

      const timer = viewer.renderTimer(session, () => {
        if (timerInterval) global.clearInterval(timerInterval);
        const expired = sessionManager.expireSession(session);
        if (expired.ok) {
          session = expired.session;
          sessionManager.persistSession(session);
          const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
          if (submitted.ok) {
            session = submitted.session;
            const resultData = app.features.examService.calculateAndPersistResult(session, examContext);
            session = resultData.session;
            container.dataset.locked = "true";
            container.replaceChildren(renderSubmittedWorkspace(year, selection, session));
          }
        }
      });

      const stickyHeader = dom.createElement("header", { className: "exam-shell-header" }, [
        dom.createElement("div", { className: "exam-shell-info" }, [
          dom.createElement("strong", { text: `آزمون ${year}` }),
          dom.createElement("span", { text: selection.label }),
          dom.createElement("span", { text: ` · پاسخ‌داده: ${answeredCount} · باقی‌مانده: ${unanswered}` })
        ]),
        timer || dom.createElement("div"),
        dom.createElement("div", {}, [renderSubmitButton(unanswered)])
      ]);

      const paperSource = app.features.examService.getSourceForYear(year, "exam-paper");
      const paperPage = selection.page || 1;
      const pdfPane = dom.createElement("div", { className: "exam-pdf-pane exam-mobile-tab-pdf" }, [
        dom.createElement("div", { className: "exam-pdf-section" }, [
          dom.createElement("h2", { text: "متن سؤال‌ها در پی‌دی‌اف" }),
          viewer.renderPdfFallback(paperSource, paperPage)
        ])
      ]);

      const qCard = viewer.renderQuestionCard(currentQ, options, selectedKey,
        (key) => { const result = sessionManager.setAnswer(session, currentQ.id, currentQ.recordKey, key); if (result.ok) { session = result.session; sessionManager.persistSession(session); rerender(); } },
        "exam", null, false);

      const palette = dom.createElement("div", { className: "question-palette" }, examContext.questions.map((question, index) => {
        const state = index === currentIndex ? "current" : session.draftResponsesByQuestionId[question.id] ? "answered" : bookmarks.has(question.id) ? "bookmarked" : "empty";
        const btn = dom.createElement("button", { className: "palette-dot", text: String(question.questionNumber), attributes: { type: "button", "data-state": state, "aria-label": `سؤال ${question.questionNumber}` } });
        btn.addEventListener("click", () => { currentIndex = index; rerender(); });
        return btn;
      }));

      const answerPane = dom.createElement("div", { className: "exam-answer-pane exam-mobile-tab-answers" }, [
        dom.createElement("span", { className: "eyebrow", text: `سؤال ${currentIndex + 1} از ${examContext.questions.length}` }),
        viewer.renderProgress(currentIndex + 1, examContext.questions.length),
        palette,
        qCard,
        dom.createElement("div", { className: "exam-nav-row" }, [
          navButton("قبلی", currentIndex > 0, () => { currentIndex -= 1; rerender(); }),
          navButton("بعدی", currentIndex < examContext.questions.length - 1, () => { currentIndex += 1; rerender(); })
        ]),
        dom.createElement("div", { className: "exam-actions" }, [
          actionBtn("پاک کردن پاسخ", "button", () => { const r = sessionManager.clearAnswer(session, currentQ.id); if (r.ok) { session = r.session; sessionManager.persistSession(session); rerender(); } })
        ])
      ]);

      const mobileTabs = dom.createElement("div", { className: "exam-mobile-tabs" }, [
        mobileTabBtn("برگه آزمون", "pdf", true),
        mobileTabBtn("پاسخ‌برگ", "answers", false)
      ]);
      setupMobileTabs(mobileTabs, pdfPane, answerPane);

      container.replaceChildren(stickyHeader, mobileTabs, dom.createElement("div", { className: "exam-mode-layout" }, [pdfPane, answerPane]));

      if (timerInterval) global.clearInterval(timerInterval);
      timerInterval = global.setInterval(() => {
        const remaining = sessionManager.getRemainingMs(session);
        if (remaining === null) return;
        if (remaining <= 0) { global.clearInterval(timerInterval); rerender(); return; }
        const timerEl = container.querySelector(".exam-timer-display");
        if (timerEl) {
          const totalSec = Math.floor(remaining / 1000);
          const h = Math.floor(totalSec / 3600);
          const m = Math.floor((totalSec % 3600) / 60);
          const s = totalSec % 60;
          timerEl.textContent = h > 0 ? `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}` : `${m}:${s.toString().padStart(2,"0")}`;
          const timerWrap = container.querySelector(".exam-timer");
          if (timerWrap) {
            timerWrap.dataset.urgency = totalSec <= 60 ? "critical" : totalSec <= 600 ? "warning" : "normal";
          }
        }
      }, 1000);
    }

    function renderSubmitButton(unanswered) {
      const btn = dom.createElement("button", { className: "button button-danger", text: "ثبت نهایی", attributes: { type: "button" } });
      btn.addEventListener("click", () => {
        const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
        if (!global.confirm(`ثبت نهایی؟\nپاسخ‌داده: ${answeredCount}\nبی‌پاسخ: ${unanswered}\nاین عمل قابل بازگشت نیست.`)) return;
        const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
        if (submitted.ok) {
          session = submitted.session;
          sessionManager.persistSession(session);
          const resultData = app.features.examService.calculateAndPersistResult(session, examContext);
          session = resultData.session;
          container.dataset.locked = "true";
          container.replaceChildren(renderSubmittedWorkspace(year, selection, session));
        }
      });
      return btn;
    }

    rerender();
    if (timerInterval) global.clearInterval(timerInterval);
    return container;
  }

  function navButton(label, enabled, onClick) {
    const btn = dom.createElement("button", { className: "button", text: label, attributes: { type: "button", disabled: enabled ? undefined : "true" } });
    if (enabled) btn.addEventListener("click", onClick);
    return btn;
  }

  function actionBtn(label, className, onClick) {
    const btn = dom.createElement("button", { className, text: label, attributes: { type: "button" } });
    btn.addEventListener("click", onClick);
    return btn;
  }

  function mobileTabBtn(label, tab, active) {
    return dom.createElement("button", { className: "exam-mobile-tab-btn", text: label, attributes: { type: "button", "data-tab": tab, "data-active": String(active) } });
  }

  function setupMobileTabs(tabsContainer, pdfPane, answerPane) {
    tabsContainer.querySelectorAll(".exam-mobile-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        tabsContainer.querySelectorAll(".exam-mobile-tab-btn").forEach((b) => b.dataset.active = "false");
        btn.dataset.active = "true";
        const tab = btn.dataset.tab;
        pdfPane.style.display = tab === "pdf" ? "" : "none";
        answerPane.style.display = tab === "answers" ? "" : "none";
      });
    });
  }

  function renderRouteError(year, code) {
    return dom.createElement("article", {}, [
      components.createPageHeader("آزمون پیدا نشد", `مسیر آزمون ${year} معتبر نیست.`, "خطا"),
      components.createErrorState(code === "unknown-section" ? "بخش نامعتبر" : "بازه نامعتبر", "از صفحه آزمون یک بخش یا بازه معتبر انتخاب کنید.", [{ label: "بازگشت به آزمون", href: app.features.examService.routeForYear(year) }])
    ]);
  }

  function renderSubmittedWorkspace(year, selection, session) {
    const result = session.currentResult;
    const reviewList = dom.createElement("div", { className: "review-list" });
    function draw(filter) {
      const rows = result.perQuestion.filter((item) => filter === "all" || item.outcome === filter).map((item) => dom.createElement("div", { className: "focus-card review-row", dataset: { outcome: item.outcome } }, [
        dom.createElement("strong", { text: `سؤال ${item.questionNumber}` }),
        dom.createElement("span", { text: `پاسخ شما: ${item.selectedOptionKey || "—"}` }),
        dom.createElement("span", { text: `پاسخ پذیرفته‌شده: ${item.acceptedOptionKeys.join(", ") || "—"}` }),
        dom.createElement("span", { className: "storage-badge", text: outcomeLabel(item.outcome), dataset: { status: item.outcome === "correct" ? "success" : item.outcome === "wrong" ? "error" : "warning" } })
      ]));
      reviewList.replaceChildren(...rows);
    }
    const filters = ["all", "wrong", "correct", "blank", "deleted", "unscored"].map((filter) => {
      const button = dom.createElement("button", { className: "button", text: outcomeLabel(filter), attributes: { type: "button" } });
      button.addEventListener("click", () => draw(filter));
      return button;
    });
    draw("all");
    const score = result.scorePercent === null ? "نامشخص" : `${result.scorePercent.toFixed(1)}%`;
    return dom.createElement("article", { className: "exam-workspace", dataset: { locked: "true" } }, [
      components.createPageHeader(`نتیجه آزمون ${year}`, `${selection.label} · نشست قفل‌شده · سؤال‌های معتبر: ${result.validQuestionCount}`, "نشست قفل‌شده"),
      dom.createElement("div", { className: "result-counts-grid" }, [
        resultCard("درست", result.correctCount, "success"),
        resultCard("نادرست", result.wrongCount, "error"),
        resultCard("بی‌پاسخ", result.blankCount, "warning"),
        resultCard("حذف‌شده", result.deletedCount, "muted"),
        resultCard("نامشخص", result.unscoredCount, "warning"),
        resultCard("درصد", score, "success")
      ]),
      dom.createElement("div", { className: "review-filter-nav" }, filters),
      reviewList
    ]);
  }

  function resultCard(label, value, severity) {
    return dom.createElement("div", { className: "result-count-card", dataset: { severity } }, [
      dom.createElement("span", { className: "result-count-value", text: String(value) }),
      dom.createElement("span", { className: "result-count-label", text: label })
    ]);
  }

  function outcomeLabel(value) {
    return ({ all: "همه", correct: "درست", wrong: "نادرست", blank: "بی‌پاسخ", deleted: "حذف‌شده", unscored: "نامشخص" })[value] || value;
  }

  app.register("features", "examMode", { render });
})(window);