(function registerExamResultsPage(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function render(params) {
    const year = params.year;
    const mode = params.mode;
    const sessionId = params.sessionId;

    if (!sessionId) {
      return renderResultsList(year, mode);
    }

    const session = app.features.sessionManager.loadSession(sessionId);
    if (!session) {
      return dom.createElement("article", {}, [
        components.createPageHeader("نتایج", "نشست پیدا نشد.", "نتایج"),
        components.createErrorState("نشست موجود نیست", "این نشست ذخیره نشده یا حذف شده است.", [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }])
      ]);
    }

    const result = session.currentResult;
    if (!result) {
      return dom.createElement("article", {}, [
        components.createPageHeader("نتایج", "نتیجه محاسبه نشده است.", "نتایج"),
        components.createErrorState("نتیجه‌ای نیست", "این نشست هنوز ثبت نشده است.", [{ label: "بازگشت", href: `#/exams/${year}/${mode}` }])
      ]);
    }

    return renderResultDetail(year, mode, session, result);
  }

  function renderResultsList(year, mode) {
    const state = app.storage.adapter.getState();
    const sessions = Object.values(state.examSessions || {})
      .filter((s) => s.sourceExamYear === year && s.mode === mode && s.currentResult)
      .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));

    if (sessions.length === 0) {
      return dom.createElement("article", {}, [
        components.createPageHeader("نتایج", `هیچ نتیجه‌ای برای ${year} ثبت نشده است.`, "نتایج"),
        components.createEmptyState("نتیجه‌ای نیست", "برای دیدن نتایج ابتدا یک آزمون انجام دهید.", [
          { label: `شروع ${mode === "exam" ? "آزمون" : "تمرین"}`, href: `#/exams/${year}/${mode}` }
        ])
      ]);
    }

    const rows = sessions.map((s) => {
      const r = s.currentResult;
      return dom.createElement("a", {
        className: "result-row",
        attributes: { href: `#/exams/${year}/${mode}/results/${s.id}` }
      }, [
        dom.createElement("span", { text: `${r.correctCount} درست | ${r.wrongCount} نادرست | ${r.blankCount} بی‌پاسخ` }),
        dom.createElement("span", { text: r.scorePercent !== null ? `${r.scorePercent.toFixed(1)}%` : "نامشخص" }),
        dom.createElement("span", { text: s.submittedAt ? new Date(s.submittedAt).toLocaleDateString("fa-IR") : "—" })
      ]);
    });

    return dom.createElement("article", {}, [
      components.createPageHeader("نتایج", `نتایج ${mode === "exam" ? "آزمون" : "تمرین"} ${year}`, "نتایج"),
      dom.createElement("div", { className: "result-list" }, rows)
    ]);
  }

  function renderResultDetail(year, mode, session, result) {
    const counts = [
      ["درست", result.correctCount, "success"],
      ["نادرست", result.wrongCount, "error"],
      ["بی‌پاسخ", result.blankCount, "warning"],
      ["حذف‌شده", result.deletedCount, "muted"],
      ["نامشخص", result.unscoredCount, "warning"]
    ];

    const countCards = counts.map(([label, count, severity]) =>
      dom.createElement("div", { className: "result-count-card", dataset: { severity } }, [
        dom.createElement("span", { className: "result-count-value", text: String(count) }),
        dom.createElement("span", { className: "result-count-label", text: label })
      ])
    );

    const scoreText = result.scorePercent !== null
      ? `${result.scorePercent.toFixed(1)}%`
      : "داده ناکافی";
    const scoreSection = dom.createElement("div", { className: "panel result-score-panel" }, [
      dom.createElement("h2", { text: "نمره با نمره منفی" }),
      dom.createElement("span", { className: "result-score-display", text: scoreText }),
      dom.createElement("p", { text: `سؤال‌های معتبر: ${result.validQuestionCount}` }),
      result.reason ? dom.createElement("p", { className: "eyebrow", text: result.reason }) : null
    ]);

    const sourceSection = dom.createElement("details", {}, [
      dom.createElement("summary", { text: "وضعیت منبع و تصحیح" }),
      dom.createElement("p", { text: `نسخه قرارداد نمره‌دهی: ${result.scoringContractVersion}` }),
      dom.createElement("p", { text: `نسخه قرارداد حل پاسخ: ${result.answerResolutionContractVersion}` }),
      dom.createElement("p", { text: `پاسخ‌های مؤثر: ${result.effectiveAnswerRecordKeys.length}` }),
      dom.createElement("p", { text: `تصحیح‌های مؤثر: ${result.effectiveCorrectionRecordKeys.length}` })
    ]);

    const filterButtons = [
      { label: "همه", filter: "all" },
      { label: "درست", filter: "correct" },
      { label: "نادرست", filter: "wrong" },
      { label: "بی‌پاسخ", filter: "blank" },
      { label: "حذف‌شده", filter: "deleted" },
      { label: "نامشخص", filter: "unscored" }
    ];

    const reviewList = dom.createElement("div", { className: "review-list", attributes: { id: "review-list" } });

    function renderReviewItems(filter) {
      const items = result.perQuestion.filter((p) => {
        if (filter === "all") return true;
        if (filter === "correct") return p.outcome === "correct";
        if (filter === "wrong") return p.outcome === "wrong";
        if (filter === "blank") return p.outcome === "blank";
        if (filter === "deleted") return p.outcome === "deleted";
        if (filter === "unscored") return p.outcome === "unscored";
        return true;
      });

      const rows = items.map((p) => {
        const outcomeLabels = {
          correct: "درست",
          wrong: "نادرست",
          blank: "بی‌پاسخ",
          deleted: "حذف‌شده",
          unscored: "نامشخص"
        };
        return dom.createElement("div", { className: "focus-card review-row", dataset: { outcome: p.outcome } }, [
          dom.createElement("span", { className: "review-q-number", text: `سؤال ${p.questionNumber}` }),
          dom.createElement("span", { text: `پاسخ شما: ${p.selectedOptionKey || "—"}` }),
          dom.createElement("span", { text: `پاسخ صحیح: ${p.acceptedOptionKeys.join(", ") || "—"}` }),
          dom.createElement("span", { className: "storage-badge", text: outcomeLabels[p.outcome] || p.outcome, dataset: { status: p.outcome === "correct" ? "success" : p.outcome === "wrong" ? "error" : "warning" } }),
          dom.createElement("button", { className: "button", text: "نشان‌کردن", attributes: { type: "button", "data-question-id": p.questionId } }),
          dom.createElement("a", { className: "button", text: "پی‌دی‌اف", attributes: { href: `#/exams/${year}/practice/custom?start=${p.questionNumber}&end=${p.questionNumber}` } }),
          dom.createElement("span", { text: "توضیح تأییدشده برای این سؤال هنوز موجود نیست." })
        ]);
      });

      reviewList.replaceChildren(...rows);
      reviewList.querySelectorAll("[data-question-id]").forEach((button) => button.addEventListener("click", () => app.features.learning.bookmark("question", button.dataset.questionId)));
    }

    const filterNav = dom.createElement("div", { className: "review-filter-nav" },
      filterButtons.map((btn) => {
        const el = dom.createElement("button", { className: "button review-filter-btn", text: btn.label, attributes: { type: "button" } });
        el.addEventListener("click", () => renderReviewItems(btn.filter));
        return el;
      })
    );

    renderReviewItems("all");

    const actions = dom.createElement("div", { className: "empty-actions" }, [
      dom.createElement("a", { className: "button", text: "بازگشت به آزمون‌ها", attributes: { href: "#/exams" } }),
      dom.createElement("a", { className: "button", text: `شروع دوباره ${mode === "exam" ? "آزمون" : "تمرین"}`, attributes: { href: `#/exams/${year}/${mode}` } })
    ]);

    return dom.createElement("article", {}, [
      components.createPageHeader(
        "نتایج",
        `${mode === "exam" ? "آزمون" : "تمرین"} ${year}`,
        "نتایج"
      ),
      dom.createElement("div", { className: "result-counts-grid" }, countCards),
      scoreSection,
      sourceSection,
      dom.createElement("h2", { text: "مرور پاسخ‌ها" }),
      filterNav,
      reviewList,
      actions
    ]);
  }

  app.register("features", "examResults", { render });
})(window);
