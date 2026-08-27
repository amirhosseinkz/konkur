(function registerShell(global) {
  "use strict";

  const app = global.KonkurApp;
  const components = app.ui.components;
  let initialized = false;
  let main = null;
  let sidebar = null;
  let menuButton = null;
  let mobileQuery = null;

  function isMobileLayout() {
    return mobileQuery ? mobileQuery.matches : global.innerWidth <= 1024;
  }

  function synchronizeDrawerAccessibility(open) {
    const hidden = isMobileLayout() && !open;
    sidebar.inert = hidden;
    if (hidden) {
      sidebar.setAttribute("aria-hidden", "true");
    } else {
      sidebar.removeAttribute("aria-hidden");
    }
  }

  function setSidebar(open) {
    const isOpen = Boolean(open);
    sidebar.dataset.open = String(isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector(".sr-only").textContent = isOpen ? "بستن منو" : "باز کردن منو";
    synchronizeDrawerAccessibility(isOpen);
    app.state.store.setState({ sidebarOpen: isOpen });
    if (isOpen && isMobileLayout()) {
      const firstLink = sidebar.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    }
  }

  function updateNavigation(path) {
    document.querySelectorAll("[data-route]").forEach((link) => {
      const route = link.dataset.route;
      const isActive = path === route
        || (route !== "/dashboard" && path.startsWith(route + "/"))
        || (route === "/exams" && path.startsWith("/exams/"));
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function focusHeading() {
    const heading = main.querySelector("h1");
    if (heading) {
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", "-1");
      }
      heading.focus({ preventScroll: true });
      if (document.activeElement === heading) {
        return;
      }
    }
    main.focus({ preventScroll: true });
    if (document.activeElement !== main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  }

  function initialize() {
    if (initialized) {
      return true;
    }

    main = document.getElementById("main-content");
    sidebar = document.getElementById("sidebar");
    menuButton = document.getElementById("menu-button");
    if (!main || !sidebar || !menuButton) {
      return false;
    }

    mobileQuery = global.matchMedia("(max-width: 64rem)");
    synchronizeDrawerAccessibility(false);
    mobileQuery.addEventListener("change", () => setSidebar(false));
    menuButton.addEventListener("click", () => {
      setSidebar(sidebar.dataset.open !== "true");
    });
    sidebar.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setSidebar(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const isEditing = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target instanceof HTMLSelectElement
        || target.isContentEditable;
      if (event.key === "/" && !isEditing) {
        const settings = app.state.store.getState().userSettings;
        if (settings && settings.keyboardShortcutsEnabled === false) {
          return;
        }
        event.preventDefault();
        app.router.router.navigate("/search");
      }
      if (event.key === "Escape" && sidebar.dataset.open === "true") {
        setSidebar(false);
        menuButton.focus();
      }
    });
    app.ui.notifications.initialize();
    initialized = true;
    return true;
  }

  function renderRoute(routeResult) {
    const route = routeResult.route;
    let page;
    if (!route) {
      page = app.ui.dom.createElement("article", {}, [
        components.createPageHeader("مسیر پیدا نشد", "نشانی واردشده در این نسخه از برنامه وجود ندارد.", "خطای قابل بازیابی"),
        components.createErrorState(
          "این بخش در دسترس نیست",
          "از پیمایش اصلی استفاده کنید یا به داشبورد بازگردید.",
          [{ label: "بازگشت به داشبورد", href: "#/dashboard" }]
        )
      ]);
    } else {
      const feature = app.features[route.feature];
      if (!feature || typeof feature.render !== "function") {
        page = app.ui.dom.createElement("article", {}, [
          components.createPageHeader(route.title || "خطا", "ماژول این بخش بارگذاری نشده است.", "خطای راه‌اندازی"),
          components.createErrorState(
            "ماژول لازم پیدا نشد",
            "صفحه را دوباره باز کنید. اگر مشکل ادامه داشت، ترتیب فایل‌های برنامه باید بررسی شود.",
            [{ label: "بازگشت به داشبورد", href: "#/dashboard" }]
          )
        ]);
      } else {
        try {
          page = feature.render(routeResult.params || {});
        } catch (error) {
          page = app.ui.dom.createElement("article", {}, [
            components.createPageHeader(route.title || "خطا", "نمایش این مسیر کامل نشد.", "خطای قابل مشاهده"),
            components.createErrorState(
              "خطای اجرای صفحه",
              error && error.message ? error.message : String(error),
              [{ label: "بازگشت به آزمون‌ها", href: "#/exams" }]
            )
          ]);
        }
      }
    }

    main.replaceChildren(page);
    updateNavigation(routeResult.path);
    const context = document.getElementById("route-context");
    context.textContent = route ? (route.label || route.title || "صفحه") : "مسیر نامعتبر";
    document.title = `${route ? (route.title || "صفحه") : "مسیر پیدا نشد"} | همراه آزمون ارشد کامپیوتر`;
    setSidebar(false);
    focusHeading();
  }

  function renderFatal(message) {
    const region = document.getElementById("fatal-region");
    if (!region) {
      document.body.textContent = message;
      return;
    }
    const shell = document.getElementById("app-shell");
    const mobileNavigation = document.querySelector(".mobile-nav");
    const skipLink = document.querySelector(".skip-link");
    if (shell) {
      shell.inert = true;
    }
    if (mobileNavigation) {
      mobileNavigation.inert = true;
    }
    if (skipLink) {
      skipLink.inert = true;
    }
    region.setAttribute("role", "alert");
    region.setAttribute("aria-label", "خطای راه‌اندازی");
    region.replaceChildren(components.createErrorState(
      "راه‌اندازی برنامه کامل نشد",
      message,
      [{ label: "بارگذاری دوباره", onClick: () => global.location.reload() }]
    ));
    const focusTarget = region.querySelector("button, h2");
    if (focusTarget) {
      focusTarget.setAttribute("tabindex", "-1");
      focusTarget.focus();
    }
  }

  app.register("ui", "shell", { initialize, renderRoute, renderFatal });
})(window);
