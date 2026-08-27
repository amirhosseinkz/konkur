(function registerSourceStatusPage(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  const STATUS_LABELS = {
    "pending-acquisition": "در انتظار دریافت",
    "acquired-unverified": "دریافت‌شده (تأییدنشده)",
    "partially-verified": "تأیید جزئی",
    "verified": "تأییدشده",
    "disputed": "مورد مناقشه",
    "unavailable": "غیرقابل دسترس"
  };

  const STATUS_SEVERITY = {
    "pending-acquisition": "warning",
    "acquired-unverified": "warning",
    "partially-verified": "warning",
    "verified": "success",
    "disputed": "error",
    "unavailable": "error"
  };

  function renderStatusBadge(status) {
    const label = STATUS_LABELS[status] || status;
    const severity = STATUS_SEVERITY[status] || "warning";
    return dom.createElement("span", {
      className: `storage-badge source-status-badge`,
      text: label,
      dataset: { status: severity }
    });
  }

  function renderYearRow(entry) {
    const yearCell = dom.createElement("td", { className: "source-year-cell", text: String(entry.year) });
    const paperCell = dom.createElement("td", {}, [renderStatusBadge(entry.paperStatus)]);
    const keyCell = dom.createElement("td", {}, [renderStatusBadge(entry.keyStatus)]);
    const correctionCell = dom.createElement("td", {}, [
      dom.createElement("span", { text: entry.correctionCount > 0 ? String(entry.correctionCount) : "—" })
    ]);
    const localCell = dom.createElement("td", {}, [
      dom.createElement("span", {
        text: entry.localAvailable ? "بله" : "خیر",
        dataset: { available: String(entry.localAvailable) }
      })
    ]);
    const questionCountCell = dom.createElement("td", {}, [
      dom.createElement("span", { text: entry.questionCount !== null ? String(entry.questionCount) : "—" })
    ]);
    const notesCell = dom.createElement("td", {}, [
      dom.createElement("span", {
        className: "source-notes-text",
        text: entry.notes || "—"
      })
    ]);
    return dom.createElement("tr", { dataset: { year: String(entry.year) } }, [
      yearCell, paperCell, keyCell, correctionCell, localCell, questionCountCell, notesCell
    ]);
  }

  function renderTable(inventory) {
    const header = dom.createElement("thead", {}, [
      dom.createElement("tr", {}, [
        dom.createElement("th", { text: "سال" }),
        dom.createElement("th", { text: "متن سؤال" }),
        dom.createElement("th", { text: "پاسخ‌نامه" }),
        dom.createElement("th", { text: "تصحیح" }),
        dom.createElement("th", { text: "محلی" }),
        dom.createElement("th", { text: "تعداد سؤال" }),
        dom.createElement("th", { text: "یادداشت" })
      ])
    ]);
    const body = dom.createElement("tbody", {}, inventory.map(renderYearRow));
    return dom.createElement("table", { className: "source-table" }, [header, body]);
  }

  function render() {
    const inventory = app.content.sourceRegistry.getInventorySummary();
    const verifiedCount = inventory.filter((e) => e.paperStatus === "verified").length;
    const totalCount = inventory.length;

    const summary = dom.createElement("div", { className: "source-summary" }, [
      dom.createElement("span", { className: "storage-badge", text: `سال‌های تأییدشده: ${verifiedCount} از ${totalCount}` }),
      dom.createElement("span", { className: "storage-badge", text: "هیچ منبعی به‌عنوان رسمی تأییدنشده نمایش داده نمی‌شود", dataset: { status: "warning" } })
    ]);

    const tableWrapper = dom.createElement("div", { className: "source-table-wrapper" }, [renderTable(inventory)]);

    const technicalDetails = dom.createElement("details", {}, [
      dom.createElement("summary", { text: "جزئیات فنی (چک‌سام و شناسه)" }),
      dom.createElement("p", { text: "چک‌سام‌های فنی تنها پس از دریافت محلی فایل‌های منبع نمایش داده می‌شوند. در حال حاضر هیچ فایل محلی دریافت نشده است." })
    ]);

    return dom.createElement("article", {}, [
      components.createPageHeader(
        "وضعیت منابع رسمی",
        "وضعیت دریافت و تأیید منابع رسمی آزمون‌های ارشد کامپیوتر (۱۳۹۵ تا ۱۴۰۴).",
        "منابع"
      ),
      summary,
      tableWrapper,
      technicalDetails
    ]);
  }

  app.register("features", "sourceStatus", { render });
})(window);