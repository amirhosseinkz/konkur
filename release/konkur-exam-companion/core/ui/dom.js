(function registerDomUtilities(global) {
  "use strict";

  const app = global.KonkurApp;

  function appendChildren(element, children) {
    (children || []).flat().forEach((child) => {
      if (child === null || child === undefined || child === false) {
        return;
      }
      element.append(child instanceof Node ? child : document.createTextNode(String(child)));
    });
    return element;
  }

  function createElement(tagName, options, children) {
    const element = document.createElement(tagName);
    const settings = options || {};

    if (settings.className) {
      element.className = settings.className;
    }
    if (settings.text !== undefined) {
      element.textContent = settings.text;
    }
    Object.entries(settings.attributes || {}).forEach(([name, value]) => {
      if (value !== null && value !== undefined) {
        element.setAttribute(name, String(value));
      }
    });
    Object.entries(settings.dataset || {}).forEach(([name, value]) => {
      element.dataset[name] = String(value);
    });
    return appendChildren(element, children);
  }

  function clear(element) {
    element.replaceChildren();
    return element;
  }

  app.register("ui", "dom", { createElement, appendChildren, clear });
})(window);
