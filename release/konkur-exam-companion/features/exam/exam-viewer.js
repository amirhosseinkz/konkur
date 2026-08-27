(function registerExamViewer(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  function parseRouteParams(hash) {
    const raw = hash || "";
    const withoutHash = raw.replace(/^#/, "");
    const parts = withoutHash.split("/").filter(Boolean);
    if (parts.length >= 4 && parts[0] === "exams") {
      return { year: parseInt(parts[1], 10), mode: parts[2], sessionId: parts[3] };
    }
    if (parts.length >= 3 && parts[0] === "exams") {
      return { year: parseInt(parts[1], 10), mode: parts[2], sessionId: null };
    }
    if (parts.length >= 2 && parts[0] === "exams") {
      return { year: parseInt(parts[1], 10), mode: null, sessionId: null };
    }
    return null;
  }

  function renderOptionRow(question, option, selectedKey, onSelect, isExamMode) {
    const isSelected = selectedKey === option.optionKey;
    const isDeleted = question.questionStatus === "deleted";
    const displayKey = String(option.order || option.optionKey).replace(/^0+/, "");
    const optionText = app.features.learning.localized(option.text);
    const visibleOptionText = /^Option\s+[A-D]$/i.test(optionText) ? `گزینه ${displayKey}` : optionText;
    const row = dom.createElement("label", {
      className: `exam-option-row${isSelected ? " selected" : ""}`,
      attributes: { for: `${question.id}-${option.optionKey}` }
    }, [
      dom.createElement("input", {
        className: "sr-only",
        attributes: {
          type: "radio",
          name: `q-${question.id}`,
          id: `${question.id}-${option.optionKey}`,
          value: option.optionKey,
          disabled: isDeleted ? "true" : undefined
        }
      }),
      dom.createElement("span", { className: "exam-option-key", text: displayKey }),
      dom.createElement("span", { className: "exam-option-text", text: visibleOptionText, attributes: { dir: "auto" } })
    ]);
    if (!isExamMode) {
      const input = row.querySelector("input");
      if (input) {
        input.checked = isSelected;
        input.addEventListener("change", () => { if (!isDeleted) onSelect(option.optionKey); });
      }
    } else {
      const input = row.querySelector("input");
      if (input) {
        input.checked = isSelected;
        input.addEventListener("change", () => { if (!isDeleted) onSelect(option.optionKey); });
      }
    }
    return row;
  }

  function renderQuestionCard(question, options, selectedKey, onSelect, mode, effectiveAnswer, showFeedback) {
    const card = dom.createElement("section", { className: "exam-question-card", attributes: { "data-question-id": question.id } }, [
      dom.createElement("header", { className: "exam-question-header" }, [
        dom.createElement("span", { className: "exam-question-number", text: `سؤال ${question.questionNumber}` }),
        question.questionStatus === "deleted"
          ? dom.createElement("span", { className: "storage-badge", text: "حذف‌شده", dataset: { status: "error" } })
          : null
      ])
    ]);

    const text = app.features.learning.localized(question.text);
    if (text) {
      card.append(dom.createElement("p", { className: "exam-question-text", text }));
    } else {
      card.append(dom.createElement("p", { className: "exam-question-text exam-text-unavailable", text: "متن سؤال در پی‌دی‌اف موجود است." }));
    }
    if (question.questionStatus === "deleted") {
      card.append(dom.createElement("p", { className: "exam-feedback", text: "این سؤال حذف شده و در نمره حساب نمی‌شود." }));
    }

    const optionsList = dom.createElement("div", { className: "exam-options-list", attributes: { role: "radiogroup", "aria-label": `گزینه‌های سؤال ${question.questionNumber}` } });
    options.filter((o) => o.questionId === question.id)
      .sort((a, b) => a.order - b.order)
      .forEach((opt) => {
        optionsList.append(renderOptionRow(question, opt, selectedKey, onSelect, mode === "exam"));
      });
    card.append(optionsList);

    if (showFeedback && mode === "practice" && effectiveAnswer && selectedKey) {
      const accepted = (effectiveAnswer.acceptedOptionIds || []).map((id) => {
        const parts = id.split(":option:");
        return parts[parts.length - 1];
      });
      const isCorrect = accepted.includes(selectedKey);
      const feedback = dom.createElement("div", { className: `exam-feedback ${isCorrect ? "correct" : "wrong"}` }, [
        dom.createElement("span", { text: isCorrect ? "درست" : "نادرست" }),
        dom.createElement("span", { text: ` پاسخ صحیح: ${accepted.join(", ") || "نامشخص"}` })
      ]);
      if (effectiveAnswer.status === "deleted") {
        feedback.replaceChildren(dom.createElement("span", { text: "این سؤال حذف شده است و امتیازی ندارد." }));
      }
      if (effectiveAnswer.status === "unresolved") {
        feedback.replaceChildren(dom.createElement("span", { text: "پاسخ رسمی این سؤال هنوز تأیید نشده است." }));
      }
      card.append(feedback);
      card.append(dom.createElement("p", { className: "exam-explanation-note", text: "توضیح تأییدشده برای این سؤال هنوز موجود نیست." }));
    }

    return card;
  }

  function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor((ms || 0) / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function urgencyFor(ms) {
    if (ms !== null && ms <= 60 * 1000) return "critical";
    if (ms !== null && ms <= 10 * 60 * 1000) return "warning";
    return "normal";
  }

  function renderTimer(session, onExpire) {
    if (session.mode !== "exam" || !session.durationSeconds) {
      return null;
    }
    const remaining = app.features.sessionManager.getRemainingMs(session);
    const timer = dom.createElement("div", { className: "exam-timer", attributes: { "aria-live": "off", "data-urgency": urgencyFor(remaining) } }, [
      dom.createElement("span", { className: "exam-timer-label", text: "زمان باقی‌مانده" }),
      dom.createElement("span", { className: "exam-timer-display", text: formatDuration(remaining) })
    ]);
    if (remaining !== null && remaining <= 0 && session.status === "in-progress") {
      if (typeof onExpire === "function") {
        global.setTimeout(onExpire, 0);
      }
    }
    return timer;
  }

  function renderProgress(current, total) {
    return dom.createElement("div", { className: "exam-progress-bar" }, [
      dom.createElement("div", { className: "exam-progress-fill", attributes: { style: `width: ${total > 0 ? (current / total) * 100 : 0}%` } })
    ]);
  }

  function renderPdfFallback(source, page) {
    if (!source || (!source.localFilename && !source.originalUrl)) {
      return dom.createElement("div", { className: "exam-pdf-fallback panel" }, [
        dom.createElement("p", { text: "فایل پی‌دی‌اف در دسترس نیست." }),
        dom.createElement("p", { text: "هیچ فایل محلی یا آدرس اینترنتی ثبت نشده است." })
      ]);
    }
    const baseUrl = source.localFilename ? `sources/papers/${source.localFilename}` : source.originalUrl;
    const url = page ? `${baseUrl}#page=${page}` : baseUrl;
    return dom.createElement("div", { className: "exam-pdf-viewer" }, [
      dom.createElement("object", { className: "pdf-object", attributes: { data: url, type: "application/pdf", width: "100%", height: "760" } }, [
        dom.createElement("iframe", { className: "pdf-object", attributes: { src: url, title: "نمایش پی‌دی‌اف آزمون", width: "100%", height: "760" } })
      ]),
      dom.createElement("div", { className: "exam-pdf-fallback panel" }, [
        dom.createElement("p", { text: "اگر پی‌دی‌اف داخل صفحه نمایش داده نشد، آن را در تب جدا باز کنید." }),
        dom.createElement("a", { className: "button", text: "باز کردن پی‌دی‌اف در تب جدا", attributes: { href: url, target: "_blank", rel: "noopener" } })
      ])
    ]);
  }

  app.register("features", "examViewer", {
    parseRouteParams,
    renderOptionRow,
    renderQuestionCard,
    renderTimer,
    formatDuration,
    urgencyFor,
    renderProgress,
    renderPdfFallback
  });
})(window);
