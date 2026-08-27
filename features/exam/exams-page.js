(function registerExamsPage(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  const STATUS_LABELS = {
    "pending-acquisition": "در انتظار دریافت",
    "acquired-unverified": "دریافت‌شده (تأییدنشده)",
    "legacy-unverified": "تأییدنشده",
    "partially-verified": "تأیید جزئی",
    verified: "تأییدشده",
    disputed: "مورد مناقشه",
    unavailable: "غیرقابل دسترس"
  };

  function renderStatusBadge(status) {
    const label = STATUS_LABELS[status] || status;
    return dom.createElement("span", { className: "storage-badge", text: label, dataset: { status: status === "verified" ? "success" : "warning" } });
  }

  function sourceUrl(source) {
    return source ? source.localFilename ? `sources/papers/${source.localFilename}` : source.originalUrl : null;
  }

  function renderYearDetail(year) {
    const summary = app.features.examService.getExamSummary(year, false);
    const sections = app.features.examService.getSectionRanges(year);
    const paperUrl = sourceUrl(summary.paperSource);
    const keyUrl = sourceUrl(summary.keySource);

    return dom.createElement("article", { className: "exam-year-card" }, [
      dom.createElement("nav", { className: "breadcrumb", attributes: { "aria-label": "مسیر" } }, [
        dom.createElement("a", { text: "آزمون‌ها", attributes: { href: "#/exams" } }),
        dom.createElement("span", { text: " / " }),
        dom.createElement("span", { text: `سال ${year}` })
      ]),
      dom.createElement("h1", { text: `آزمون ${year}`, attributes: { tabindex: "-1" } }),
      dom.createElement("p", { text: `${summary.questionCount} سؤال · ${sections.length} بخش` }),
      dom.createElement("div", { className: "exam-status-row" }, [
        dom.createElement("span", { text: "پی‌دی‌اف: " }), renderStatusBadge(summary.paperStatus),
        dom.createElement("span", { text: " | کلید: " }), renderStatusBadge(summary.keyStatus),
        dom.createElement("span", { text: ` | اصلاحیه‌ها: ${summary.correctionCount}` })
      ]),
      dom.createElement("div", { className: "empty-actions" }, [
        dom.createElement("a", { className: "button button-primary", text: "تمرین کل دفترچه", attributes: { href: app.features.examService.routeForMode(year, "practice", "full") } }),
        dom.createElement("a", { className: "button", text: "آزمون کل دفترچه", attributes: { href: app.features.examService.routeForMode(year, "exam", "full") } }),
        paperUrl ? dom.createElement("a", { className: "button", text: "پی‌دی‌اف", attributes: { href: paperUrl, target: "_blank", rel: "noopener" } }) : null,
        keyUrl ? dom.createElement("a", { className: "button", text: "کلید رسمی", attributes: { href: keyUrl, target: "_blank", rel: "noopener" } }) : null
      ]),
      dom.createElement("details", { attributes: { open: "true" } }, [
        dom.createElement("summary", { text: "بخش‌ها" }),
        dom.createElement("div", { className: "card-grid" }, sections.map((section) => dom.createElement("section", { className: "content-card" }, [
          dom.createElement("h3", { text: `${section.label} — سؤال‌های ${section.start || "?"}-${section.end || "?"}` }),
          dom.createElement("p", { text: `${section.count} سؤال` }),
          dom.createElement("div", { className: "empty-actions" }, [
            dom.createElement("a", { className: "button button-primary", text: "تمرین", attributes: { href: app.features.examService.routeForMode(year, "practice", section.key) } }),
            dom.createElement("a", { className: "button", text: "آزمون", attributes: { href: app.features.examService.routeForMode(year, "exam", section.key) } })
          ])
        ])))
      ]),
      dom.createElement("details", {}, [
        dom.createElement("summary", { text: "بازه دلخواه سؤال‌ها" }),
        renderRangeForm(year, summary.questionCount)
      ]),
      dom.createElement("details", {}, [
        dom.createElement("summary", { text: "جزئیات منبع و اعتبارسنجی" }),
        dom.createElement("p", { text: `منبع دفترچه: ${summary.paperSource ? summary.paperSource.id : "—"}` }),
        dom.createElement("p", { text: `منبع کلید: ${summary.keySource ? summary.keySource.id : "—"}` }),
        dom.createElement("p", { text: "همه داده‌های واردشده تا زمان بررسی رسمی، تأییدنشده هستند." })
      ])
    ]);
  }

  function renderRangeForm(year, questionCount) {
    const start = dom.createElement("input", { className: "text-input", attributes: { type: "number", min: "1", max: String(questionCount), value: "1", ariaLabel: "شروع بازه" } });
    const end = dom.createElement("input", { className: "text-input", attributes: { type: "number", min: "1", max: String(questionCount), value: String(questionCount), ariaLabel: "پایان بازه" } });
    const practiceButton = dom.createElement("button", { className: "button button-primary", text: "شروع تمرین", attributes: { type: "button" } });
    const examButton = dom.createElement("button", { className: "button", text: "شروع آزمون", attributes: { type: "button" } });
    function navigate(mode) {
      const range = app.features.examService.normalizeRange({ start: start.value, end: end.value }, questionCount);
      if (range) global.location.hash = app.features.examService.routeForCustom(year, mode, range.start, range.end);
      else app.ui.notifications.announce("بازه انتخاب‌شده معتبر نیست.", "error");
    }
    practiceButton.addEventListener("click", () => navigate("practice"));
    examButton.addEventListener("click", () => navigate("exam"));
    return dom.createElement("div", { className: "settings-actions" }, [start, end, practiceButton, examButton]);
  }

  function renderYearSelector(years, selectedYear) {
    return dom.createElement("div", { className: "exam-year-selector" }, years.map((year) => {
      const isSelected = year === selectedYear;
      const link = dom.createElement("a", {
        className: `button${isSelected ? " button-primary" : ""}`,
        text: String(year),
        attributes: { href: app.features.examService.routeForYear(year) }
      });
      if (isSelected) link.setAttribute("aria-current", "page");
      return link;
    }));
  }

  function render(params) {
    const importedYears = app.features.examService.getImportedYears();
    if (importedYears.length === 0) {
      return dom.createElement("article", {}, [
        components.createPageHeader("آزمون‌ها", "آرشیو آزمون‌های رسمی.", "آرشیو آزمون"),
        components.createEmptyState("آزمونی موجود نیست", "هیچ دیتاست آزمونی ثبت نشده است.", [])
      ]);
    }
    const selectedYear = (params && params.year && importedYears.includes(params.year)) ? params.year : importedYears[0];
    if (params && params.year && !importedYears.includes(params.year)) {
      return dom.createElement("article", {}, [
        components.createPageHeader("آزمون پیدا نشد", `سال ${params.year} در داده‌های برنامه وجود ندارد.`, "خطا"),
        components.createErrorState("سال نامعتبر", "از فهرست آزمون‌ها یک سال موجود انتخاب کنید.", [{ label: "بازگشت", href: "#/exams" }])
      ]);
    }
    return dom.createElement("article", {}, [
      components.createPageHeader("آزمون‌ها", "یک سال را انتخاب کن و تمرین یا آزمون را شروع کن.", "آرشیو آزمون"),
      renderYearSelector(importedYears, selectedYear),
      renderYearDetail(selectedYear)
    ]);
  }

  app.register("features", "exams", { render });
})(window);