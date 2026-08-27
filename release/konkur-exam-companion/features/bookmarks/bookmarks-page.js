(function registerBookmarksPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;

  const TABS = Object.freeze([
    ["lesson", "درس‌ها"], ["golden-rule", "قانون‌های طلایی"], ["flashcard", "فلش‌کارت‌ها"],
    ["exam-trap", "دام‌های آزمون"], ["topic", "سرفصل‌ها"], ["subject", "درس‌ها"], ["question", "سؤال‌ها"]
  ]);
  const TAB_CTAS = Object.freeze({
    lesson: [{ label: "رفتن به درس‌ها", href: "#/subjects" }],
    flashcard: [{ label: "مرور فلش‌کارت‌ها", href: "#/subjects" }],
    "golden-rule": [{ label: "رفتن به درس‌ها", href: "#/subjects" }],
    "exam-trap": [{ label: "رفتن به درس‌ها", href: "#/subjects" }],
    topic: [{ label: "رفتن به درس‌ها", href: "#/subjects" }],
    subject: [{ label: "رفتن به درس‌ها", href: "#/subjects" }],
    question: [{ label: "رفتن به آزمون‌ها", href: "#/exams" }]
  });
  const ENTITY_LABELS = Object.freeze({
    lesson: "درس", "golden-rule": "قانون طلایی", flashcard: "فلش‌کارت",
    "exam-trap": "دام آزمون", topic: "سرفصل", subject: "درس", question: "سؤال"
  });
  function control(label, node) {
    return dom.createElement("div", { className: "field" }, [dom.createElement("label", { text: label }), node]);
  }
  function formatTimestamp(iso) {
    try { return new Date(iso).toLocaleDateString("fa-IR"); } catch (e) { return iso; }
  }
  function renderList(region, type, sort, query) {
    const entities = app.features.learning.entityMap();
    let items = Object.values(app.storage.adapter.getState().bookmarks)
      .filter((item) => item.entityType === type)
      .map((item) => ({ bookmark: item, entity: entities.get(item.entityId) }))
      .filter((item) => item.entity);
    if (query) items = items.filter((item) => item.entity.title.toLowerCase().includes(query.toLowerCase()));
    items.sort((left, right) => {
      if (sort === "oldest") return Date.parse(left.bookmark.createdAt) - Date.parse(right.bookmark.createdAt);
      if (sort === "subject") return String(left.entity.record.subjectId || left.entity.record.id).localeCompare(String(right.entity.record.subjectId || right.entity.record.id));
      if (sort === "alpha") return left.entity.title.localeCompare(right.entity.title, "fa");
      return Date.parse(right.bookmark.createdAt) - Date.parse(left.bookmark.createdAt);
    });
    region.replaceChildren(items.length ? dom.createElement("div", { className: "card-grid" }, items.map((item) => dom.createElement("section", { className: "content-card" }, [
      dom.createElement("h2", { text: item.entity.title, attributes: { dir: "auto" } }),
      dom.createElement("p", { text: `${ENTITY_LABELS[item.bookmark.entityType] || item.bookmark.entityType} · ${formatTimestamp(item.bookmark.createdAt)}` }),
      dom.createElement("div", { className: "empty-actions" }, [
        dom.createElement("a", { className: "button", text: "باز کردن", attributes: { href: app.features.learning.routeFor(item.entity) } }),
        removeButton(item.bookmark.id, () => renderList(region, type, sort, query))
      ])
    ]))) : components.createEmptyState("نشان‌شده‌ای در این دسته نیست", "هنگام مطالعه روی دکمهٔ نشان‌کردن بزن تا نکات مهم اینجا جمع شوند.", TAB_CTAS[type] || []));
  }
  function removeButton(id, after) {
    const button = dom.createElement("button", { className: "button", text: "حذف", attributes: { type: "button" } });
    button.addEventListener("click", () => { app.features.learning.removeBookmark(id); after(); });
    return button;
  }
  function render() {
    const tab = dom.createElement("select", { className: "select-input" }, TABS.map(([value, label]) => dom.createElement("option", { text: label, attributes: { value } })));
    const sort = dom.createElement("select", { className: "select-input" }, [
      ["newest", "جدیدترین"], ["oldest", "قدیمی‌ترین"], ["subject", "درس"], ["alpha", "الفبایی"]
    ].map(([value, label]) => dom.createElement("option", { text: label, attributes: { value } })));
    const search = dom.createElement("input", { className: "text-input", attributes: { type: "search", placeholder: "جست‌وجو در نشان‌شده‌ها", dir: "auto" } });
    const region = dom.createElement("div", { attributes: { "aria-live": "polite" } });
    const refresh = () => renderList(region, tab.value, sort.value, search.value.trim());
    [tab, sort, search].forEach((node) => node.addEventListener(node === search ? "input" : "change", refresh));
    refresh();
    return dom.createElement("article", {}, [
      components.createPageHeader("نشان‌شده‌ها", "مرکز واحد برای درس، قانون، فلش‌کارت، دام و سرفصل‌های نشان‌شده.", "مرکز نشان‌شده‌ها"),
      dom.createElement("div", { className: "settings-grid" }, [control("دسته", tab), control("مرتب‌سازی", sort), control("جست‌وجو", search)]),
      region
    ]);
  }

  app.register("features", "bookmarks", { render });
})(window);