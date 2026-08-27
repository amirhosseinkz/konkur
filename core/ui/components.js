(function registerComponents(global) {
  "use strict";

  const app = global.KonkurApp;
  const dom = app.ui.dom;

  function createPageHeader(title, description, eyebrow) {
    return dom.createElement("header", { className: "page-header" }, [
      eyebrow ? dom.createElement("p", { className: "eyebrow", text: eyebrow }) : null,
      dom.createElement("h1", { text: title, attributes: { tabindex: "-1" } }),
      dom.createElement("p", { text: description })
    ]);
  }

  function createAction(action) {
    if (action.href) {
      return dom.createElement("a", {
        className: "button",
        text: action.label,
        attributes: { href: action.href }
      });
    }

    const button = dom.createElement("button", {
      className: `button${action.danger ? " button-danger" : ""}`,
      text: action.label,
      attributes: { type: "button" }
    });
    if (typeof action.onClick === "function") {
      button.addEventListener("click", action.onClick);
    }
    return button;
  }

  function createStateCard(type, title, description, actions) {
    return dom.createElement("section", {
      className: `${type}-state`,
      attributes: { "aria-labelledby": `${type}-state-title` }
    }, [
      dom.createElement("h2", {
        text: title,
        attributes: { id: `${type}-state-title` }
      }),
      dom.createElement("p", { text: description }),
      actions && actions.length
        ? dom.createElement("div", { className: "empty-actions" }, actions.map(createAction))
        : null
    ]);
  }

  function createEmptyState(title, description, actions) {
    return createStateCard("empty", title, description, actions || []);
  }

  function createErrorState(title, description, actions) {
    return createStateCard("error", title, description, actions || []);
  }

  function createLoadingState(title, description) {
    return createStateCard("loading", title, description, []);
  }

  function createEmptyPage(config) {
    return dom.createElement("article", {}, [
      createPageHeader(config.title, config.description, config.eyebrow),
      createEmptyState(config.emptyTitle, config.emptyDescription, config.actions)
    ]);
  }

  app.register("ui", "components", {
    createPageHeader,
    createEmptyState,
    createErrorState,
    createLoadingState,
    createEmptyPage
  });
})(window);
