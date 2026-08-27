(function registerExamMode(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;
  const viewer = app.features.examViewer;

  const DEFAULT_DURATION = 90 * 60;

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
        components.createPageHeader(
          `آزمون ${year}`,
          "هیچ سؤالی برای این سال وارد نشده است.",
          "حالت آزمون"
        ),
        components.createEmptyState(
          "سؤالی موجود نیست",
          "ابتدا باید منابع این سال وارد شوند.",
          [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }]
        )
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
    const durationLabel = "زمان شبیه‌سازی تمرین";

    const startBtn = dom.createElement("button", { className: "button", text: "شروع آزمون", attributes: { type: "button" } });
    const cancelLink = dom.createElement("a", { className: "button", text: "بازگشت", attributes: { href: "#/exams" } });

    const durationSelect = dom.createElement("select", { className: "select-input", attributes: { id: "exam-duration", "aria-label": "مدت آزمون" } }, [
      dom.createElement("option", { text: "۹۰ دقیقه", attributes: { value: String(90 * 60) } }),
      dom.createElement("option", { text: "۶۰ دقیقه", attributes: { value: String(60 * 60) } }),
      dom.createElement("option", { text: "۱۲۰ دقیقه", attributes: { value: String(120 * 60) } })
    ]);

    startBtn.onclick = () => {
      const durationSeconds = parseInt(durationSelect.value, 10);
      const session = sessionManager.createSession({
        mode: "exam",
        questionRecordKeys: examContext.questions.map((q) => q.recordKey),
        durationSeconds,
        year,
        filters: examContext.range
      });
      sessionManager.persistSession(session);
      app.router.router.refresh();
    };

    return dom.createElement("article", {}, [
      components.createPageHeader(
        `آزمون ${year}`,
        `${selection.label} · ${unansweredCount} سؤال — نمره منفی فعال — بدون نمایش پاسخ‌ها`,
        "شروع آزمون"
      ),
      dom.createElement("div", { className: "panel" }, [
        dom.createElement("p", { text: durationLabel }),
        dom.createElement("p", { text: "پس از ثبت، امکان تغییر پاسخ نیست. سؤال‌های بی‌پاسخ به‌عنوان نادرست در نظر گرفته نمی‌شوند اما نمره منفی برای پاسخ‌های اشتباه اعمال می‌شود." }),
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

    function stopTimer() {
      if (timerInterval) {
        global.clearInterval(timerInterval);
        timerInterval = null;
      }
    }

    function submitAndShowResult() {
      stopTimer();
      const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
      if (submitted.ok) {
        session = submitted.session;
        sessionManager.persistSession(session);
        const resultData = app.features.examService.calculateAndPersistResult(session, examContext);
        session = resultData.session;
        container.dataset.locked = "true";
        container.replaceChildren(renderSubmittedWorkspace(year, selection, session));
      }
    }

    function updateTimerDisplay() {
      if (!document.body.contains(container)) {
        stopTimer();
        return;
      }
      const remaining = sessionManager.getRemainingMs(session);
      if (remaining === null) return;
      const timerEl = container.querySelector(".exam-timer-display");
      const timerBox = container.querySelector(".exam-timer");
      if (timerEl) timerEl.textContent = viewer.formatDuration(remaining);
      if (timerBox) timerBox.dataset.urgency = viewer.urgencyFor(remaining);
      if (remaining <= 0) {
        const expired = sessionManager.expireSession(session);
        if (expired.ok) {
          session = expired.session;
          sessionManager.persistSession(session);
          submitAndShowResult();
        }
      }
    }

    function ensureTimer() {
      if (timerInterval || session.status !== "in-progress" || !session.durationSeconds) return;
      updateTimerDisplay();
      timerInterval = global.setInterval(updateTimerDisplay, 1000);
    }

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
            stopTimer();
            container.dataset.locked = "true";
            container.replaceChildren(renderSubmittedWorkspace(year, selection, session));
            return;
          }
        }
      }

      const header = components.createPageHeader(
        `آزمون ${year}`,
        `${selection.label} · سؤال ${currentIndex + 1} از ${examContext.questions.length}`,
        "حالت آزمون · تأییدنشده"
      );

      const timer = viewer.renderTimer(session, () => {
        stopTimer();
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

      const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
      const unanswered = examContext.questions.length - answeredCount;

      const progress = viewer.renderProgress(currentIndex + 1, examContext.questions.length);

      const nav = dom.createElement("div", { className: "exam-nav-row" }, []);
      const prevBtn = dom.createElement("button", {
        className: "button",
        text: "قبلی",
        attributes: { type: "button", disabled: currentIndex === 0 ? "true" : undefined }
      });
      prevBtn.addEventListener("click", () => { if (currentIndex > 0) { currentIndex -= 1; rerender(); } });
      const nextBtn = dom.createElement("button", {
        className: "button",
        text: "بعدی",
        attributes: { type: "button", disabled: currentIndex >= examContext.questions.length - 1 ? "true" : undefined }
      });
      nextBtn.addEventListener("click", () => { if (currentIndex < examContext.questions.length - 1) { currentIndex += 1; rerender(); } });
      nav.append(prevBtn, nextBtn);

      const reviewMarks = session.reviewMarksByQuestionId || {};
      const palette = dom.createElement("div", { className: "question-palette" }, examContext.questions.map((question, index) => {
        const state = index === currentIndex ? "current" : session.draftResponsesByQuestionId[question.id] ? "answered" : "empty";
        const isMarked = Boolean(reviewMarks[question.id]);
        const button = dom.createElement("button", { className: "palette-dot", text: String(question.questionNumber), attributes: { type: "button", "data-state": state, "data-review": isMarked ? "true" : "false", "aria-label": `سؤال ${question.questionNumber}${isMarked ? "، نشان‌شده برای مرور" : ""}` } });
        button.addEventListener("click", () => { currentIndex = index; rerender(); });
        return button;
      }));

      const qCard = viewer.renderQuestionCard(
        currentQ, options, selectedKey,
        (key) => {
          const result = sessionManager.setAnswer(session, currentQ.id, currentQ.recordKey, key);
          if (result.ok) {
            session = result.session;
            sessionManager.persistSession(session);
            rerender();
          }
        },
        "exam",
        null,
        false
      );

      const submitBtn = dom.createElement("button", { className: "button button-danger", text: "ثبت نهایی", attributes: { type: "button" } });
      submitBtn.addEventListener("click", () => {
        if (global.confirm(`ثبت نهایی؟ ${unanswered} سؤال بی‌پاسخ. این عمل قابل بازگشت نیست.`)) {
          submitAndShowResult();
        }
      });

      const isMarkedForReview = Boolean((session.reviewMarksByQuestionId || {})[currentQ.id]);
      const reviewMarkBtn = dom.createElement("button", { className: "button", text: isMarkedForReview ? "حذف علامت مرور" : "علامت برای مرور", attributes: { type: "button", "aria-pressed": String(isMarkedForReview) } });
      reviewMarkBtn.addEventListener("click", () => {
        const result = sessionManager.setReviewMark(session, currentQ.id, !isMarkedForReview);
        if (result.ok) {
          session = result.session;
          sessionManager.persistSession(session);
          rerender();
        }
      });

      const clearBtn = dom.createElement("button", { className: "button", text: "پاک کردن پاسخ", attributes: { type: "button" } });
      clearBtn.addEventListener("click", () => {
        const result = sessionManager.clearAnswer(session, currentQ.id);
        if (result.ok) {
          session = result.session;
          sessionManager.persistSession(session);
          rerender();
        }
      });

      const paperSource = app.features.examService.getSourceForYear(year, "exam-paper");
      const paperPage = selection.page || 1;
      const pdfSection = dom.createElement("div", { className: "exam-pdf-section" }, [
        dom.createElement("h2", { text: "متن سؤال‌ها در پی‌دی‌اف" }),
        viewer.renderPdfFallback(paperSource, paperPage)
      ]);

      const layout = dom.createElement("div", { className: "exam-mode-layout" }, [
        dom.createElement("div", { className: "exam-pdf-pane" }, [pdfSection]),
        dom.createElement("div", { className: "exam-answer-pane" }, [
          header,
          timer || dom.createElement("div"),
          dom.createElement("span", { className: "eyebrow", text: `پاسخ داده شده: ${answeredCount} | بی‌پاسخ: ${unanswered}` }),
          progress,
          palette,
          nav,
          qCard,
          dom.createElement("div", { className: "exam-actions" }, [clearBtn, reviewMarkBtn, submitBtn])
        ])
      ]);

      container.replaceChildren(layout);
      ensureTimer();
    }

    rerender();

    return container;
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
        dom.createElement("span", { className: "storage-badge", text: outcomeLabel(item.outcome), dataset: { status: item.outcome === "correct" ? "success" : item.outcome === "wrong" ? "error" : "warning" } }),
        dom.createElement("a", { className: "button", text: "باز کردن سؤال", attributes: { href: app.features.examService.routeForCustom(year, "practice", item.questionNumber, item.questionNumber) } })
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
      components.createPageHeader(`نتیجه آزمون ${year}`, `${selection.label} · نشست ثبت‌شده و قفل است · سؤال‌های معتبر: ${result.validQuestionCount}`, "نشست قفل‌شده"),
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
