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
        components.createPageHeader(
          `تمرین ${year}`,
          "هیچ سؤالی برای این سال وارد نشده است.",
          "تمرین"
        ),
        components.createEmptyState(
          "سؤالی موجود نیست",
          "ابتدا باید منابع این سال وارد شوند.",
          [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }]
        )
      ]);
    }

    let session = sessionManager.getLatestSession(year, "practice");
    const currentKeys = examContext.questions.map((q) => q.recordKey);
    if (session && session.status === "submitted" && JSON.stringify(session.questionRecordKeys) === JSON.stringify(currentKeys) && session.currentResult) {
      return renderSubmittedWorkspace(year, selection, session, examContext);
    }
    if (!session || session.status !== "in-progress" || JSON.stringify(session.questionRecordKeys) !== JSON.stringify(currentKeys)) {
      session = sessionManager.createSession({
        mode: "practice",
        questionRecordKeys: currentKeys,
        filters: examContext.range,
        year
      });
      sessionManager.persistSession(session);
    }

    const resolver = app.features.answerResolver;
    const scoring = app.features.scoring;

    const container = dom.createElement("article", { className: "exam-workspace" });

    function rerender() {
      const currentQ = examContext.questions[currentIndex];
      const options = examContext.options.filter((o) => o.questionId === currentQ.id);
      const draft = session.draftResponsesByQuestionId[currentQ.id];
      const selectedKey = draft ? draft.selectedOptionKey : null;
      const effectiveAnswer = resolver.resolveOfficialAnswer(
        currentQ.id, examContext.answers, examContext.corrections
      );

      const answeredCount = Object.keys(session.draftResponsesByQuestionId).length;
      const unansweredCount = examContext.questions.length - answeredCount;
      const header = components.createPageHeader(
        `تمرین ${year}`,
          `${selection.label} · سؤال ${currentIndex + 1} از ${examContext.questions.length} · پاسخ‌داده: ${answeredCount} · باقی‌مانده: ${unansweredCount}`,
          selectedRange && selectedRange.section === "language" ? "تمرین زبان · تأییدنشده" : "حالت تمرین · تأییدنشده"
      );

      const sourceNote = dom.createElement("p", { className: "eyebrow", text: "متن کامل سؤال‌ها از روی پی‌دی‌اف دیده می‌شود." });
      const paperSource = examService.getSourceForYear(year, "exam-paper");
      const paperPage = selection.page || 1;
      const pdfSection = dom.createElement("div", { className: "exam-pdf-section" }, [
        dom.createElement("h2", { text: "متن سؤال‌ها در پی‌دی‌اف" }),
        viewer.renderPdfFallback(paperSource, paperPage)
      ]);

      const nav = dom.createElement("div", { className: "exam-nav-row" }, []);
      const prevBtn = dom.createElement("button", {
        className: "button",
        text: "قبلی",
        attributes: { type: "button", disabled: currentIndex === 0 ? "true" : undefined }
      });
      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex -= 1;
          rerender();
        }
      });
      const nextBtn = dom.createElement("button", {
        className: "button",
        text: "بعدی",
        attributes: { type: "button", disabled: currentIndex >= examContext.questions.length - 1 ? "true" : undefined }
      });
      nextBtn.addEventListener("click", () => {
        if (currentIndex < examContext.questions.length - 1) {
          currentIndex += 1;
          rerender();
        }
      });
      nav.append(prevBtn, nextBtn);

      const bookmarks = new Set(Object.values(app.storage.adapter.getState().bookmarks).map((item) => item.entityId));
      const jumpNav = dom.createElement("div", { className: "question-palette" }, examContext.questions.map((question, index) => {
        const state = index === currentIndex ? "current" : session.draftResponsesByQuestionId[question.id] ? "answered" : bookmarks.has(question.id) ? "bookmarked" : "empty";
        const button = dom.createElement("button", { className: "palette-dot", text: String(question.questionNumber), attributes: { type: "button", "data-state": state, "aria-label": `سؤال ${question.questionNumber}` } });
        button.addEventListener("click", () => { currentIndex = index; rerender(); });
        return button;
      }));

      const progress = viewer.renderProgress(currentIndex + 1, examContext.questions.length);

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
        "practice",
        effectiveAnswer,
        revealAnswers.checked
      );

      const clearBtn = dom.createElement("button", {
        className: "button button-danger",
        text: "پاک کردن پاسخ",
        attributes: { type: "button" }
      });
      clearBtn.addEventListener("click", () => {
        const result = sessionManager.clearAnswer(session, currentQ.id);
        if (result.ok) {
          session = result.session;
          sessionManager.persistSession(session);
          rerender();
        }
      });

      const bookmarkBtn = dom.createElement("button", { className: "button", text: "نشان‌کردن سؤال", attributes: { type: "button" } });
      bookmarkBtn.addEventListener("click", () => app.features.learning.bookmark("question", currentQ.id));
      const reviewBtn = dom.createElement("button", { className: "button", text: "افزودن به مرور", attributes: { type: "button" } });
      reviewBtn.addEventListener("click", () => { app.features.learning.bookmark("question", currentQ.id); app.features.learning.rebuildReviewQueue(); app.ui.notifications.announce("سؤال به مرور اضافه شد.", "info"); });
      const jumpPdf = dom.createElement("a", { className: "button", text: "رفتن به پی‌دی‌اف", attributes: { href: paperSource && paperSource.originalUrl ? `${paperSource.originalUrl}#page=${paperPage}` : "#/exams", target: "_blank", rel: "noopener" } });

      function submitCurrentPractice() {
        const submitted = sessionManager.submitSession(session, session.draftResponsesByQuestionId);
        if (submitted.ok) {
          session = submitted.session;
          sessionManager.persistSession(session);
          const calculated = examService.calculateAndPersistResult(session, examContext);
          session = calculated.session;
          container.replaceChildren(renderSubmittedWorkspace(year, selection, session, examContext));
        }
      }

      const submitPractice = dom.createElement("button", { className: "button", text: "ثبت و مشاهده نتایج", attributes: { type: "button" } });
      submitPractice.addEventListener("click", () => {
        const markedCount = examContext.questions.filter((question) => bookmarks.has(question.id)).length;
        reviewSection.replaceChildren(
          dom.createElement("h2", { text: "ثبت تمرین؟" }),
          dom.createElement("p", { text: `پاسخ‌داده: ${answeredCount} · بی‌پاسخ: ${unansweredCount} · نشان‌شده برای مرور: ${markedCount}` }),
          dom.createElement("div", { className: "empty-actions" }, [
            dom.createElement("button", { className: "button", text: "ادامه", attributes: { type: "button", "data-confirm-practice": "continue" } }),
            dom.createElement("button", { className: "button button-danger", text: "ثبت", attributes: { type: "button", "data-confirm-practice": "submit" } })
          ])
        );
        reviewSection.querySelector("[data-confirm-practice='continue']").addEventListener("click", rerender);
        reviewSection.querySelector("[data-confirm-practice='submit']").addEventListener("click", submitCurrentPractice);
      });

      const reviewSection = dom.createElement("div", { className: "exam-review-section" }, [
        dom.createElement("h2", { text: "مرور پاسخ‌ها" }),
        dom.createElement("p", { text: `${answeredCount} پاسخ داده شده · ${unansweredCount} بی‌پاسخ` }),
        submitPractice,
        dom.createElement("button", { className: "button button-danger", text: "شروع دوباره", attributes: { type: "button", onclick: null } })
      ]);
      const resetBtn = reviewSection.querySelector(".button-danger");
      resetBtn.addEventListener("click", () => {
        if (global.confirm("شروع دوباره؟ پاسخ‌های فعلی پاک می‌شوند.")) {
          session = sessionManager.createSession({ mode: "practice", questionRecordKeys: currentKeys, filters: examContext.range, year });
          sessionManager.persistSession(session);
          currentIndex = 0;
          rerender();
        }
      });

      const layout = dom.createElement("div", { className: "exam-practice-layout" }, [
        dom.createElement("div", { className: "exam-pdf-pane" }, [pdfSection]),
        dom.createElement("div", { className: "exam-answer-pane" }, [
          header,
          sourceNote,
          selectedRange && selectedRange.section === "language" ? dom.createElement("details", {}, [
            dom.createElement("summary", { text: "راهنمای ترجمه اختیاری" }),
            dom.createElement("p", { text: "ترجمه فقط کمک تمرینی است و به‌صورت پیش‌فرض پنهان می‌ماند. در حالت آزمون از آن استفاده نکنید." })
          ]) : null,
          dom.createElement("label", { className: "exam-option-row" }, [revealAnswers, dom.createElement("span", { text: "نمایش پاسخ بعد از انتخاب" })]),
          progress,
          nav,
          jumpNav,
          qCard,
          dom.createElement("div", { className: "exam-actions" }, [clearBtn, bookmarkBtn, reviewBtn, jumpPdf]),
          reviewSection
        ])
      ]);

      container.replaceChildren(layout);
    }

    const revealAnswers = dom.createElement("input", { attributes: { type: "checkbox", id: "practice-reveal-answers" } });
    revealAnswers.addEventListener("change", () => rerender());
    let currentIndex = 0;
    rerender();

    return container;
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
        dom.createElement("a", { className: "button", text: "باز کردن سؤال", attributes: { href: app.features.examService.routeForCustom(year, "practice", item.questionNumber, item.questionNumber) } }),
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
      components.createPageHeader(`نتیجه تمرین ${year}`, `${selection.label} · سؤال‌های معتبر: ${result.validQuestionCount} · زمان استفاده‌شده: ${session.submittedAt ? Math.round((Date.parse(session.submittedAt) - Date.parse(session.startedAt)) / 1000) : 0} ثانیه`, "مرور در همین صفحه"),
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
