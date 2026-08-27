(function registerNotifications(global) {
  "use strict";

  const app = global.KonkurApp;
  let region = null;

  function initialize() {
    region = document.getElementById("toast-region");
    return Boolean(region);
  }

  function announce(message, level) {
    if (!region) {
      initialize();
    }
    if (!region) {
      return false;
    }

    const toast = app.ui.dom.createElement("div", {
      className: "toast",
      dataset: { level: level || "info" }
    }, [app.ui.dom.createElement("span", { text: message })]);
    const dismiss = app.ui.dom.createElement("button", {
      className: "toast-dismiss",
      text: "بستن",
      attributes: { type: "button", "aria-label": "بستن اعلان" }
    });
    dismiss.addEventListener("click", () => toast.remove());
    toast.append(dismiss);
    region.append(toast);
    while (region.children.length > 3) {
      region.firstElementChild.remove();
    }

    if (level !== "error") {
      let timer = global.setTimeout(() => toast.remove(), 8000);
      const pause = () => global.clearTimeout(timer);
      const resume = () => {
        global.clearTimeout(timer);
        timer = global.setTimeout(() => toast.remove(), 8000);
      };
      toast.addEventListener("mouseenter", pause);
      toast.addEventListener("mouseleave", resume);
      toast.addEventListener("focusin", pause);
      toast.addEventListener("focusout", resume);
    }
    return true;
  }

  app.register("ui", "notifications", { initialize, announce });
})(window);
