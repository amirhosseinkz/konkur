(function registerSearchPage(global) {
  "use strict";
  const app = global.KonkurApp;
  const dom = app.ui.dom;
  const components = app.ui.components;
  const GROUPS = Object.freeze([
    ["exam-years", "سال‌های آزمون"],
    ["subjects", "درس"], ["topics", "سرفصل"], ["lessons", "درس‌نامه"], ["questions", "سؤال‌ها"],
    ["golden-rules", "قانون‌های طلایی"], ["flashcards", "فلش‌کارت‌ها"],
    ["exam-traps", "دام‌های آزمون"], ["five-minute-reviews", "مرور پنج‌دقیقه‌ای"]
  ]);

  function highlight(text, query) {
    if (!query) return dom.createElement("span", { text });
    const lower = text.toLowerCase();
    const index = lower.indexOf(query.toLowerCase());
    if (index < 0) return dom.createElement("span", { text });
    return dom.createElement("span", {}, [
      document.createTextNode(text.slice(0, index)),
      dom.createElement("mark", { text: text.slice(index, index + query.length) }),
      document.createTextNode(text.slice(index + query.length))
    ]);
  }
  function rememberSearch(query, count) {
    const state = app.storage.adapter.getState();
    const timestamp = new Date().toISOString();
    const id = `search:${Date.now().toString(36)}`;
    const history = [{ id, query: query.toLowerCase(), displayQuery: query, searchedAt: timestamp, resultCount: count }, ...state.searchHistory.filter((item) => item.query !== query.toLowerCase())].slice(0, 50);
    app.storage.adapter.updateSection("searchHistory", history);
  }
  function renderResults(query, region) {
    if (!query) {
      region.replaceChildren(components.createEmptyState("جست‌وجو آماده است", "عبارت موردنظر را وارد کن؛ می‌توانی میان درس‌ها، فلش‌کارت‌ها، قانون‌های طلایی و آزمون‌ها جست‌وجو کنی.", []));
      return;
    }
    const examResults = app.features.examService.getImportedYears()
      .filter((year) => String(year).includes(query))
      .map((year) => ({ entityId: `exam:${year}`, entityType: "exam-years", title: `آزمون ${year}`, route: app.features.examService.routeForYear(year), snippet: "آرشیو آزمون" }));
    const results = [...examResults, ...app.search.index.search(query)];
    rememberSearch(query, results.length);
    if (results.length === 0) {
      region.replaceChildren(components.createEmptyState("نتیجه‌ای پیدا نشد", "عبارت دیگری را امتحان کن.", []));
      return;
    }
    const sections = GROUPS.map(([type, label]) => {
      const items = results.filter((result) => result.entityType === type);
      if (!items.length) return null;
      return dom.createElement("section", { className: "content-card" }, [
        dom.createElement("h2", { text: `${label} (${items.length})` }),
        dom.createElement("ul", { className: "search-results" }, items.map((result) => dom.createElement("li", {}, [
          dom.createElement("a", { attributes: { href: result.route, dir: "auto" } }, [highlight(result.title, query)]),
          dom.createElement("p", { text: result.snippet, attributes: { dir: "auto" } })
        ])))
      ]);
    }).filter(Boolean);
    region.replaceChildren(...sections);
  }
  function render() {
    const input = dom.createElement("input", { className: "text-input", attributes: { id: "global-search-input", type: "search", autocomplete: "off", placeholder: "TCP، Dijkstra، SQL، Round Robin، abandon", dir: "auto" } });
    const results = dom.createElement("div", { attributes: { id: "search-results", "aria-live": "polite" } }, [components.createEmptyState("جست‌وجو آماده است", "عبارت موردنظر را وارد کن؛ می‌توانی میان درس‌ها، فلش‌کارت‌ها، قانون‌های طلایی و آزمون‌ها جست‌وجو کنی.", [])]);
    const form = dom.createElement("form", { className: "search-form", attributes: { role: "search" } }, [
      dom.createElement("div", { className: "field" }, [dom.createElement("label", { text: "جست‌وجوی سراسری", attributes: { for: "global-search-input" } }), input]),
      dom.createElement("button", { className: "button", text: "جست‌وجو", attributes: { type: "submit" } })
    ]);
    form.addEventListener("submit", (event) => { event.preventDefault(); renderResults(input.value.trim(), results); });
    return dom.createElement("article", {}, [components.createPageHeader("جست‌وجو", "جست‌وجو در درس، قانون، فلش‌کارت، دام آزمون و مرور.", "جست‌وجوی سراسری"), form, results]);
  }

  app.register("features", "searchPage", { render, renderResults });
})(window);