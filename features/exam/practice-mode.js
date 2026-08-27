(function registerPracticeMode(global) {
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
        components.createPageHeader(`تمرین ${year}`, "هیچ سؤالی برای این سال وارد نشده است.", "تمرین"),
        components.createEmptyState("سؤالی موجود نیست", "ابتدا باید منابع این سال وارد شوند.", [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }])
      ]);
    }

    let session = sessionManager.getLatestSession(year, "practice");
    const currentKeys = examContext.questions.map((q) => q.recordKey);
    if (session && session.status === "submitted" && JSON.stringify(session.questionRecordKeys) === JSON.stringify(currentKeys) && session.currentResult) {
      return renderSubmittedWorkspace(year, selection, session, examContext);
    }
    if (!session || session.status !== "in-progress" || JSON.stringify(session.questionRecordKeys) !== JSON.stringify(currentKeys)) {
      session = sessionManager.createSession({ mode: "practice", questionRecordKeys: currentKeys, filters: examContext.range, year });
      sessionManager.persistSession(session);
    }

    const resolver = app.features.answerResolver;
    const container = dom.createElement("article", { className: "exam-workspace" });
    let currentIndex = 0;
    const revealAnswers = dom.createElement("input", { attributes: { type: "checkbox", id: "practice-reveal-answers" } });
    revealAnswers.addEventListener("change", () => rerender());

    function rerender() {
      const currentQ = examContext.questions[currentIndex];
      const options = examContext.options.filter((o) => o.questionId === currentQ.id);
      const draft = session.draftResponsesByQuestionId[currentQ.id];
      const selectedKey = draft ? draft.selectedOptionKey : null;
      const effectiveAnswer = resolver.resolveOfficialAnswer(currentQ.id, examContext.answers, examContext.corrections);
      const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
      const unansweredCount = examContext.questions.length - answeredCount;
      const bookmarks = new Set(Object.values(app.storage.adapter.getState().bookmarks).map((item) => item.entityId));

      const stickyHeader = dom.createElement("header", { className: "exam-shell-header" }, [
        dom.createElement("div", { className: "exam-shell-info" }, [
          dom.createElement("strong", { text: `تمرین ${year}` }),
          dom.createElement("span", { text: selection.label }),
          dom.createElement("span", { text: ` · پاسخ‌داده: ${answeredCount} · باقی‌مانده: ${unansweredCount}` })
        ]),
        dom.createElement("div", { className: "exam-shell-actions" }, [
          renderSubmitButton()
        ])
      ]);

      const paperSource = examService.getSourceForYear(year, "exam-paper");
      const paperPage = selection.page || 1;
      const pdfPane = dom.createElement("div", { className: "exam-pdf-pane exam-mobile-tab-pdf" }, [
        dom.createElement("div", { className: "exam-pdf-section" }, [
          dom.createElement("h2", { text: "متن سؤال‌ها در پی‌دی‌اف" }),
          viewer.renderPdfFallback(paperSource, paperPage)
        ])
      ]);

      const qCard = viewer.renderQuestionCard(currentQ, options, selectedKey,
        (key) => { const result = sessionManager.setAnswer(session, currentQ.id, currentQ.recordKey, key); if (result.ok) { session = result.session; sessionManager.persistSession(session); rerender(); } },
        "practice", effectiveAnswer, revealAnswers.checked);

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
          actionBtn("پاک کردن پاسخ", "button-danger", () => { const r = sessionManager.clearAnswer(session, currentQ.id); if (r.ok) { session = r.session; sessionManager.persistSession(session); rerender(); } }),
          actionBtn("نشان‌کردن", "button", () => app.features.learning.bookmark("question", currentQ.id)),
          actionBtn("افزودن به مرور", "button", () => { app.features.learning.bookmark("question", currentQ.id); app.features.learning.rebuildReviewQueue(); app.ui.notifications.announce("سؤال به مرور اضافه شد.", "info"); })
        ]),
        selectedRange && selectedRange.section === "language" ? dom.createElement("details", {}, [
          dom.createElement("summary", { text: "راهنمای ترجمه اختیاری" }),
          dom.createElement("p", { text: "ترجمه فقط کمک تمرینی است و به‌صورت پیش‌فرض پنهان می‌ماند." })
        ]) : null,
        dom.createElement("label", { className: "exam-option-row" }, [revealAnswers, dom.createElement("span", { text: "نمایش پاسخ بعد از انتخاب" })])
      ]);

      const mobileTabs = dom.createElement("div", { className: "exam-mobile-tabs" }, [
        mobileTabBtn("برگه آزمون", "pdf", true),
        mobileTabBtn("پاسخ‌برگ", "answers", false)
      ]);
      setupMobileTabs(mobileTabs, pdfPane, answerPane);

      container.replaceChildren(stickyHeader, mobileTabs, dom.createElement("div", { className: "exam-practice-layout" }, [pdfPane, answerPane]));
    }

    function renderSubmitButton() {
      const btn = dom.createElement("button", { className: "button button-primary", text: "ثبت و مشاهده نتایج", attributes: { type: "button" } });
      btn.addEventListener("click", () => {
        const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
        const blankCount = examContext.questions.length - answeredCount;
        if (!global.confirm(`ثبت نهایی؟\nپاسخ‌داده: ${answeredCount}\nبی‌پاسخ: ${blankCount}\nاین عمل قابل بازگشت نیست.`)) return;
        const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
        if (submitted.ok) {
          session = submitted.session;
          sessionManager.persistSession(session);
          const calculated = examService.calculateAndPersistResult(session, examContext);
          session = calculated.session;
          container.replaceChildren(renderSubmittedWorkspace(year, selection, session, examContext));
        }
      });
      return btn;
    }

    rerender();
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
    const btn = dom.createElement("button", { className: "exam-mobile-tab-btn", text: label, attributes: { type: "button", "data-tab": tab, "data-active": String(active) } });
    return btn;
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
      components.createPageHeader("تمرین پیدا نشد", `مسیر تمرین ${year} معتبر نیست.`, "خطا"),
      components.createErrorState(code === "unknown-section" ? "بخش نامعتبر" : "بازه نامعتبر", "از صفحه آزمون یک بخش یا بازه معتبر انتخاب کنید.", [{ label: "بازگشت به آزمون", href: app.features.examService.routeForYear(year) }])
    ]);
  }

  function renderSubmittedWorkspace(year, selection, session, examContext) {
    const result = session.currentResult;
    const reviewList = dom.createElement("div", { className: "review-list" });
    function draw(filter) {
      const rows = result.perQuestion.filter((item) => filter === "all" || item.outcome === filter).map((item) => dom.createElement("div", { className: "focus-card review-row", dataset: { outcome: item.outcome } }, [
        dom.createElement("strong", { text: `سؤال ${item.questionNumber}` }),
        dom.createElement("span", { text: `پاسخ شما: ${item.selectedOptionKey || "—"}` }),
        dom.createElement("span", { text: `پاسخ پذیرفته‌شده: ${item.acceptedOptionKeys.join(", ") || "—"}` }),
        dom.createElement("span", { className: "storage-badge", text: outcomeLabel(item.outcome), dataset: { status: item.outcome === "correct" ? "success" : item.outcome === "wrong" ? "error" : "warning" } }),
        dom.createElement("button", { className: "button", text: "نشان‌کردن", attributes: { type: "button", "data-question-id": item.questionId } })
      ]));
      reviewList.replaceChildren(...rows);
      reviewList.querySelectorAll("[data-question-id]").forEach((button) => button.addEventListener("click", () => app.features.learning.bookmark("question", button.dataset.questionId)));
    }
    const filters = ["all", "wrong", "correct", "blank", "deleted", "unscored"].map((filter) => {
      const button = dom.createElement("button", { className: "button", text: outcomeLabel(filter), attributes: { type: "button" } });
      button.addEventListener("click", () => draw(filter));
      return button;
    });
    draw("all");
    const score = result.scorePercent === null ? "نامشخص" : `${result.scorePercent.toFixed(1)}%`;
    return dom.createElement("article", { className: "exam-workspace" }, [
      components.createPageHeader(`نتیجه تمرین ${year}`, `${selection.label} · سؤال‌های معتبر: ${result.validQuestionCount}`, "مرور در همان صفحه"),
      dom.createElement("div", { className: "result-counts-grid" }, [
        resultCard("درست", result.correctCount, "success"),
        resultCard("نادرست", result.wrongCount, "error"),
        resultCard("بی‌پاسخ", result.blankCount, "warning"),
        resultCard("حذف‌شده", result.deletedCount, "muted"),
        resultCard("نامشخص", result.unscoredCount, "warning"),
        resultCard("درصد", score, "success")
      ]),
      dom.createElement("div", { className: "review-filter-nav" }, filters),
      reviewList,
      dom.createElement("div", { className: "empty-actions" }, [
        dom.createElement("a", { className: "button", text: "بازگشت به آزمون", attributes: { href: app.features.examService.routeForYear(year) } })
      ])
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

  app.register("features", "practiceMode", { render });
})(window);